""" Config Manager """

import logging
import random
from click import UUID
from fastapi import HTTPException
from azure.data.tables.aio import TableClient
from azure.core.exceptions import AzureError
from .lru_cache_with_expiry import lru_cache_with_expiry
from .authorize import AuthorizeResponse

# initiase the random number generator
random.seed()

CONFIGURATION_TABLE_NAME = "config"

logging.basicConfig(level=logging.INFO)


class Deployment:
    """Deployment"""

    def __init__(
        self,
        *,
        friendly_name: str = "",
        endpoint_key: str,
        deployment_name: str,
        resource_name: str,
    ):
        """init deployment"""
        self.friendly_name = friendly_name
        self.endpoint_key = endpoint_key
        self.deployment_name = deployment_name
        self.resource_name = resource_name


class Config:
    """Config Manager"""

    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self.logging = logging.getLogger(__name__)

    @lru_cache_with_expiry(maxsize=128, ttl=300)
    async def get_group_deployments(
        self, group_id: UUID, deployment_class: str
    ) -> list[Deployment]:
        """get config"""
        # read from azure table storage named CONFIGURATION_TABLE_NAME
        # where partition key is group_id and filter ModelClass is deployment_class
        # return list of config

        config = []

        try:
            async with TableClient.from_connection_string(
                conn_str=self.connection_string, table_name=CONFIGURATION_TABLE_NAME
            ) as table_client:
                query_filter = (
                    f"ModelClass eq '{deployment_class}' "
                    "and PartitionKey eq '{group_id}'"
                )

                # get all columns from the table
                queried_entities = table_client.query_entities(
                    query_filter=query_filter,
                    select=[
                        "*",
                    ],
                )

                async for entity in queried_entities:
                    deployment_item = Deployment(
                        friendly_name=entity["RowKey"].strip(),
                        endpoint_key=entity["EndpointKey"].strip(),
                        deployment_name=entity["DeploymentName"].strip(),
                        resource_name=entity["ResourceName"].strip(),
                    )

                    config.append(deployment_item)

            return config

        except AzureError as e:
            self.logging.error("Error reading config from Azure Table Storage")
            self.logging.error(e)
            raise HTTPException(
                detail="Error reading config from Azure Table Storage",
                status_code=503,
            ) from e

        except Exception as e:
            self.logging.error("Error reading config from Azure Table Storage")
            self.logging.error(e)
            raise HTTPException(
                detail="Error reading config from Azure Table Storage",
                status_code=503,
            ) from e

    async def get_deployment(self, authorize_response: AuthorizeResponse) -> Deployment:
        """get config"""

        deployments = await self.get_group_deployments(
            authorize_response.group_id,
            authorize_response.request_class,
        )

        deployment_count = len(deployments)

        if deployment_count == 0:
            self.logging.warning("No active OpenAI model deployments found.")
            # 503 Service Unavailable
            # The server cannot handle the request (because it is overloaded or down for
            # maintenance). Generally, this is a temporary state
            # https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            raise HTTPException(
                detail="No active OpenAI model deployments found.",
                status_code=503,
            )
        # get a random deployment to balance load
        index = random.randint(0, deployment_count - 1)

        return deployments[index]

    async def get_deployment_by_name(
        self,
        friendly_name: str,
        authorise_response: AuthorizeResponse,
    ) -> Deployment:
        """get config"""

        deployments = await self.get_group_deployments(
            authorise_response.group_id,
            authorise_response.request_class,
        )

        for deployment in deployments:
            if deployment.friendly_name == friendly_name:
                return deployment

        self.logging.warning("No active OpenAI model deployments found.")
        # 503 Service Unavailable
        # The server cannot handle the request (because it is overloaded or down for
        # maintenance). Generally, this is a temporary state
        # https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        raise HTTPException(
            detail="No active OpenAI model deployments found.",
            status_code=503,
        )
