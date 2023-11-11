""" OpenAI Async Manager"""


from typing import Tuple
import logging
import openai
import openai.error
import openai.openai_object
from fastapi import FastAPI

from tenacity import RetryError

from .openai_async_embeddings import OpenAIAsyncManager, EmbeddingsRequest
from .config_embeddings import OpenAIConfig

logging.basicConfig(level=logging.WARNING)


class Embeddings:
    """OpenAI Embeddings Manager"""

    def __init__(self, app: FastAPI, openai_config: OpenAIConfig):
        """init in memory session manager"""

        self.app = app
        self.openai_config = openai_config
        self.logger = logging.getLogger(__name__)

    def report_exception(
        self, message: str, http_status_code: int
    ) -> Tuple[openai.openai_object.OpenAIObject, int]:
        """report exception"""

        self.logger.warning(msg=f"{message}")

        return message, http_status_code

    async def call_openai_embeddings(
        self, chat: EmbeddingsRequest
    ) -> Tuple[openai.openai_object.OpenAIObject, int]:
        """call openai with retry"""

        try:
            async_mgr = OpenAIAsyncManager(self.app, self.openai_config)
            response, deployment_name = await async_mgr.get_openai_embeddings(chat)

            response["model"] = deployment_name

            return response, 200

        except openai.error.InvalidRequestError as invalid_request_exception:
            # this exception captures content policy violation policy
            return self.report_exception(
                str(invalid_request_exception.user_message),
                invalid_request_exception.http_status,
            )

        except openai.error.RateLimitError as rate_limit_exception:
            return self.report_exception(
                "Oops, OpenAI rate limited. Please try again.",
                rate_limit_exception.http_status,
            )

        except openai.error.ServiceUnavailableError as service_unavailable_exception:
            return self.report_exception(
                "Oops, OpenAI unavailable. Please try again.",
                service_unavailable_exception.http_status,
            )

        except openai.error.Timeout as timeout_exception:
            return self.report_exception(
                "Oops, OpenAI timeout. Please try again.",
                timeout_exception.http_status,
            )

        except openai.error.OpenAIError as openai_error_exception:
            return self.report_exception(
                str(openai_error_exception.user_message),
                openai_error_exception.http_status,
            )

        except RetryError:
            return self.report_exception(
                str("OpenAI API retry limit reached..."),
                429,
            )

        except Exception as exception:
            self.logger.warning(msg=f"Global exception caught: {exception}")
            raise exception
