"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[686],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,v=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={},l="The Management API",o={unversionedId:"Authorization/adding-event",id:"Authorization/adding-event",title:"The Management API",description:"There is a Management API for adding events and listing events. The API is secured with a Management ID token. The Management ID token is stored in the Azure Storage Account management table. The management table is created when the proxy service is deployed and started.",source:"@site/docs/30-Authorization/30-adding-event.md",sourceDirName:"30-Authorization",slug:"/Authorization/adding-event",permalink:"/azure-openai-service-proxy/Authorization/adding-event",draft:!1,editUrl:"https://github.com/gloveboxes/azure-openai-service-proxy/tree/master/docs/docs/30-Authorization/30-adding-event.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure OpenAI rate limits",permalink:"/azure-openai-service-proxy/Authorization/openai-rate-limits"},next:{title:"OpenAI model deployments",permalink:"/azure-openai-service-proxy/openai-deployments"}},s={},p=[{value:"Adding events",id:"adding-events",level:2},{value:"Listing events",id:"listing-events",level:2},{value:"List all events",id:"list-all-events",level:3},{value:"List active events",id:"list-active-events",level:3},{value:"Event Code Cache",id:"event-code-cache",level:2},{value:"Upserting Azure OpenAI Model Deployments",id:"upserting-azure-openai-model-deployments",level:2},{value:"Listing Azure OpenAI Model Deployments",id:"listing-azure-openai-model-deployments",level:2},{value:"List all Azure OpenAI model deployments",id:"list-all-azure-openai-model-deployments",level:3},{value:"List active Azure OpenAI model deployments",id:"list-active-azure-openai-model-deployments",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-management-api"},"The Management API"),(0,r.kt)("p",null,"There is a Management API for adding events and listing events. The API is secured with a Management ID token. The Management ID token is stored in the Azure Storage Account ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table is created when the proxy service is deployed and started."),(0,r.kt)("p",null,"For now, the only way to manage events is via the Management API. In the future, there may be a web UI for managing events."),(0,r.kt)("h2",{id:"adding-events"},"Adding events"),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to add an event to the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_MANAGEMENT_ID_TOKEN" -d \'{\n    "event_name": ".NET OpenAI Hack",\n    "start_utc" : "2023-11-16T00:00:00",\n    "end_utc": "2023-12-16T00:00:00",\n    "max_token_cap": 2048,\n    "event_url": "http://www.example.com/event_name",\n    "event_url_text": "Join the .NET OpenAI Hack",\n    "organizer_name": "Ant Blogs",\n    "organizer_email": "ablogs@example.com"\n}\' https://YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/addevent | jq\n')),(0,r.kt)("h2",{id:"listing-events"},"Listing events"),(0,r.kt)("p",null,"For now, you can list all events or all active events."),(0,r.kt)("h3",{id:"list-all-events"},"List all events"),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to list all events in the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET -H "Authorization: Bearer YOUR_MANAGEMENT_ID_TOKEN" https://YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/listevents/all | jq\n')),(0,r.kt)("h3",{id:"list-active-events"},"List active events"),(0,r.kt)("p",null,"An active event is an event where the current UTC time is is between the event ",(0,r.kt)("inlineCode",{parentName:"p"},"StartUTC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndUTC")," times and the event is active. The API is secured with a Management ID token. The Management ID token is stored in the Azure Storage Account ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table is created when the proxy service is deployed and started."),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to list all active events in the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET -H "Authorization: Bearer YOUR_MANAGEMENT_ID_TOKEN" YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/listevents/active | jq\n')),(0,r.kt)("h2",{id:"event-code-cache"},"Event Code Cache"),(0,r.kt)("p",null,"Event data, namely the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventCode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"StartUTC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EndUTC"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxTokenCap")," are cached by the proxy service. The cache is refreshed every 10 minutes. Caching is implemented to improve performance by reducing the number of calls to the Azure Storage Account table. Because of caching, it may take up to 10 minutes for the changes to be reflected in the proxy service."),(0,r.kt)("h2",{id:"upserting-azure-openai-model-deployments"},"Upserting Azure OpenAI Model Deployments"),(0,r.kt)("p",null,"There a Management API for adding Azure OpenAI model deployments to the system. The API is secured with a Management ID token. The Management ID token is stored in the Azure Storage Account ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table is created when the proxy service is deployed and started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_MANAGEMENT_ID_TOKEN" -d \'{\n    "deployment_class": "openai-chat",\n    "friendly_name" : "chat-glovebox",\n    "deployment_name": "turbo-gpt",\n    "endpoint_key": "1234455",\n    "resource_name": "my-resource-name",\n    "active": false\n}\' https://YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/modeldeployment/upsert\n')),(0,r.kt)("h2",{id:"listing-azure-openai-model-deployments"},"Listing Azure OpenAI Model Deployments"),(0,r.kt)("p",null,"You can list all Azure OpenAI model deployments or all active Azure OpenAI model deployments. The API is secured with a Management ID token. The Management ID token is stored in the Azure Storage Account ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"management")," table is created when the proxy service is deployed and started."),(0,r.kt)("h3",{id:"list-all-azure-openai-model-deployments"},"List all Azure OpenAI model deployments"),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to list all Azure OpenAI model deployments in the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'https://YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/modeldeployment/list/all\ncurl -X GET -H "Authorization: Bearer YOUR_MANAGEMENT_ID_TOKEN" https://YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/listevents/all | jq\n')),(0,r.kt)("h3",{id:"list-active-azure-openai-model-deployments"},"List active Azure OpenAI model deployments"),(0,r.kt)("p",null,"An active Azure OpenAI model deployment is an Azure OpenAI model deployment where the ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," property is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET -H "Authorization: Bearer YOUR_MANAGEMENT_ID_TOKEN" https://YOUR_OPENAI_PROXY_ENDPOINT/v1/api/management/listevents/active | jq\n')))}c.isMDXComponent=!0}}]);