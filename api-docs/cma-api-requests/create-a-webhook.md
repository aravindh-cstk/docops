---
title: "Create a webhook"
description: /webhooks
url: /create-a-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.151Z
updated_at: 2026-07-20T16:31:54.049Z
---

# Create a webhook

<p>The <span class="code">Create a webhook</span> request allows you to create a new webhook in a specific stack.</p><p>In the “Body” section, you need to enter the name of the webhook; the destination details i.e., target URLs, authentication details, and custom headers; and the channels; and set the <span class="code">disabled</span> and <span class="code">concise_payload</span> parameters as per requirement.</p><p>The <span class="code">disabled</span> parameter, allows you to enable or disable the webhook. You can set its value to either <span class="code">false</span> to enable the webhook and <span class="code">true</span> to disable the webhook.</p><p>The <span class="code">concise_payload</span> parameter allows you to send a concise JSON payload to the target URL when a specific event occurs. To send a comprehensive JSON payload, you can set its value to <span class="code">false</span>. However, to send a concise payload, set the value of the <span class="code">concise_payload</span> parameter to <span class="code">true</span>.</p><p class="note"><strong>Note</strong>: Refer to our <a href="https://www.contentstack.com/docs/headless-cms/webhook-events">Webhook Events</a> document to get a list of conditions that can be included in your request body. You can also set trigger conditions based on actions performed on <a href="https://www.contentstack.com/docs/headless-cms/webhook-events#entry-comments">entry comments</a> and <a href="https://www.contentstack.com/docs/headless-cms/webhook-events#entry-discussions">discussions</a>.</p><p>The <span class="code">authentication_type</span> parameter specifies the type of authentication to be used for the webhook, such as <strong>Basic Auth</strong>, <strong>OAuth2.0 Client Credential</strong>, <strong>Bearer Token</strong>, and <strong>None</strong>. Based on the selected authentication type, you will need to provide the relevant authentication details in the request body.</p><p>To add OAuth 2.0 Client Credential authentication, use the following schema in the request body:</p><pre>    "destinations": [<br />            {<br />                "target_url": "http://example.com",<br />                "access_token_url": "your_access_token_url",<br />                "client_id": "your_client_id",<br />                "client_secret": "your_client_secret",<br />                "request_query_parameters": "=",<br />                "authentication_type": "OAuth2",<br />                "custom_header": [<br />                    {<br />                        "header_name": "",<br />                        "value": ""<br />                    }<br />                ]<br />            }<br />        ],<br /></pre><p class="note"><strong>Note</strong>: To get the <span class="code">access_token_url</span>, <span class="code">client_id</span>, <span class="code">client_secret</span>, and <span class="code">request_query_parameters</span> refer to your OAuth application settings. The request query parameters will be appended to the access token URL.</p><p>To add Bearer Token authentication, use the following schema in the request body:</p><pre>    "destinations": [<br />            {<br />                "target_url": "http://example.com",<br />                "bearer_token": "your_bearer_token",<br />                "authentication_type": "Bearer",<br />                "custom_header": [<br />                    {<br />                        "header_name": "",<br />                        "value": ""<br />                    }<br />                ]<br />            }<br />        ],</pre><p>To configure your webhook without any authentication, use the following schema in the request body:</p><pre>    "destinations": [<br />            {<br />                "target_url": "http://example.com",<br />                "authentication_type": "None",<br />                "custom_header": [<br />                    {<br />                        "header_name": "",<br />                        "value": ""<br />                    }<br />                ]<br />            }<br />        ],</pre><p>When creating a webhook, you can specify the branch scope through the following schema in the request body:</p><pre>"branches":[<br />    "main"<br />]<br /></pre><p class="note"><strong>Note</strong>: To configure the permissions for applications that are using Contentstack OAuth, add the <span class="code">cm.webhooks.management:write</span> user-related permission scope under the OAuth settings of your app in Developer Hub. For more details, refer to the <a href="https://www.contentstack.com/docs/developers/developer-hub/contentstack-oauth">Contentstack OAuth documentation</a>.</p>

**API Endpoint**: `/webhooks`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token or management token. Learn more about <a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication">authentication</a></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
  "webhook":{
    "name":"Basic Test",
    "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "password",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
    "notifiers": "john.doe@gmail.com",
    "channels":[
      "assets.create"
    ],
    "branches":[
      "main"
    ],
    "retry_policy":"automatic",
    "disabled":false,
    "concise_payload":true
  }
}
```

## Response

```json
{
    "notice": "The webhook was created successfully",
    "webhook": {
        "name": "Basic Test",
        "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "********",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "assets.create"
        ],
        "retry_policy": "automatic",
        "branches": [
            "main"
        ],
        "notifiers": [
            "john.doe@gmail.com"
        ],
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************de",
        "concise_payload": true,
        "uid": "cs******2e-b**f-4**0-b**7-ba********19",
        "created_at": "2024-07-11T06:09:00.827Z",
        "updated_at": "2024-07-11T06:09:00.827Z"
    }
}
```

