---
title: "Get audit log"
description: GET /v1/projects/{project_uid}/audit-logs?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: developer-apis/automations-management-api-requests/get-audit-log
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get audit log

**GET** `/v1/projects/{project_uid}/audit-logs?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get audit log request returns the audit log of a specific project.

To configure the permissions for your application via OAuth, include the automationhub.audit-log:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 30 items.

## URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

## Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of audit log (in between 0-100) in your response based on the value you provide. If there are 100 audit log and you want to fetch only 30 audit log, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of audit log and return the remaining ones in your response based on the value you provide.  If there are 12 audit log and you want to exclude the first 2 audit log, set this to 2 to fetch the remaining 10 audit log.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of audit log in the ascending order with respect to the value of a specific field. The audit log can be sorted only by _created_at_value.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of audit log in the descending order with respect to the value of a specific field. The audit log can be sorted only by _created_at_value.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of audit log in an organization.
  Default: `true`

## Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

## Sample Response

```json
{
    "logs": [
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T12:06:02.262Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Update",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "__v": 0,
                "_id": "65******6323264738b10b29",
                "active": false,
                "audience": [],
                "created_at": "2024-02-22T11:32:24.309Z",
                "description": "",
                "id": "345ae3c033c6432baf34fe90032eaaad",
                "isDraftRule": false,
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "shared": [],
                "step_groups": [
                    "http",
                    "chatgpt"
                ],
                "steps": [
                    {
                        "action_title": "Chat",
                        "auth": "f8******b72a46858fc709281cf27e50",
                        "connector_id": "6e40e092773e4230b282283164091c07",
                        "connector_title": "ChatGPT",
                        "description": "This action returns the chat response(s) from the OpenAI platform.",
                        "group_name": "chatgpt",
                        "help": "https://www.contentstack.com/docs/developers/automation-hub-connectors/chatgpt/#action-1-select-the-chat-action",
                        "id": "1377cbb3032e4f1b9a7dbe664f938c73",
                        "input_data": "{\"model\":\"{(gpt-3.5-turbo-0613||gpt-3.5-turbo-0613)}\",\"prompt\":\"convert to german language\",\"role\":\"user\",\"max_tokens\":500,\"temperature\":0.5,\"n\":1,\"escaped_response\":true}",
                        "input_schema": "{\n  \"type\": \"object\",\n  \"required\": [\n    \"model\",\n    \"prompt\",\n    \"role\"\n  ],\n  \"properties\": {\n    \"model\": {\n      \"type\": \"string\",\n      \"title\": \"Select Model\",\n      \"description\": \"Select the API model to use for the chat response.Note that \\\"continuous\\\" models (gpt-3.5-turbo, gpt-4 and gpt-4-32k) will always point to the latest stable versions. Experimental models (listed with dates or the \\\"preview\\\" label) are only available for a limited time and will return an error after they are deprecated. Please check with OpenAl's documentation for more information.\",\n      \"lookup\": {\n        \"id\": \"get_chat_models\",\n        \"edit\": true\n      },\n      \"minLength\": 1\n    },\n    \"prompt\": {\n      \"type\": \"string\",\n      \"title\": \"Prompt Text\",\n      \"format\": \"textarea\",\n      \"description\": \"Enter the input text to generate a response. Add multiple prompt texts within the Show optional fields below.\",\n      \"minLength\": 5\n    },\n    \"role\": {\n      \"type\": \"string\",\n      \"title\": \"Select Role\",\n      \"description\": \"Select the role identifier to send to the API model request.\",\n      \"default\": \"user\",\n      \"enum\": [\n        \"user\",\n        \"system\",\n        \"assistant\"\n      ],\n      \"minLength\": 1\n    },\n    \"max_tokens\": {\n      \"show\": false,\n      \"type\": \"integer\",\n      \"title\": \"Number of Tokens\",\n      \"description\": \"Enter the maximum number of tokens to generate the content. This must be within the range of 1 to 2048.\",\n      \"default\": 500,\n      \"minimum\": 1,\n      \"maximum\": 2048,\n      \"minLength\": 1\n    },\n    \"temperature\": {\n      \"show\": false,\n      \"type\": \"number\",\n      \"title\": \"Randomness of Responses\",\n      \"description\": \"Enter the value for the randomness of the generated content, 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.\",\n      \"default\": 0.5,\n      \"minimum\": 0,\n      \"maximum\": 2,\n      \"minLength\": 1\n    },\n    \"n\": {\n      \"show\": false,\n      \"type\": \"integer\",\n      \"title\": \"Number of Chat Responses\",\n      \"description\": \"Enter the maximum number of chat responses. This must be within the range of 1 to 3.\",\n      \"default\": 1,\n      \"minimum\": 1,\n      \"maximum\": 3\n    },\n    \"frequency_penalty\": {\n      \"show\": false,\n      \"type\": \"number\",\n      \"title\": \"Frequency of Repeated Words\",\n      \"description\": \"Enter the value to set the frequency of repeated words. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.\",\n      \"minimum\": -2,\n      \"maximum\": 2\n    },\n    \"presence_penalty\": {\n      \"show\": false,\n      \"type\": \"number\",\n      \"title\": \"Presence of Repeated Responses\",\n      \"description\": \"Enter the value to set the presence of  repeated responses. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.\",\n      \"minimum\": -2,\n      \"maximum\": 2\n    },\n    \"messages\": {\n      \"show\": false,\n      \"type\": \"array\",\n      \"title\": \"Additional Prompt Text\",\n      \"description\": \"Enter multiple messages in key-value pairs.\",\n      \"maxItems\": 10,\n      \"items\": {\n        \"type\": \"object\",\n        \"properties\": {\n          \"role\": {\n            \"title\": \"Role\",\n            \"type\": \"string\",\n            \"minLength\": 1,\n            \"enum\": [\n              \"user\",\n              \"system\",\n              \"assistant\"\n            ],\n            \"default\": \"user\"\n          },\n          \"content\": {\n            \"title\": \"Input Query\",\n            \"type\": \"string\",\n            \"minLength\": 1\n          }\n        }\n      }\n    },\n    \"escaped_response\": {\n      \"show\": false,\n      \"title\": \"Sanitize text\",\n      \"description\": \"Enable to format text for compatibility, ensuring proper escape of special characters to prevent interference with API processes or webpage code. Disable this option to format manually.\",\n      \"type\": \"boolean\",\n      \"default\": true\n    }\n  }\n}",
                        "name": "119202",
                        "next": [],
                        "origin_id": "cc219f3a5c75433bb859c24e315a13fa",
                        "skipped": true,
                        "tested": false,
                        "title": "Chat",
                        "type": "action",
                        "version": 5
                    }
                ],
                "tags": [],
                "throttle": false,
                "title": "ChatGPT",
                "trigger": {
                    "id": "fc4a630beb984aff9ca2cdf02e27c844",
                    "next": [
                        "119202"
                    ]
                },
                "updated_at": "2024-02-22T12:06:02.256Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Automation",
            "module_uid": "345ae3c033c6432baf34fe90032eaaad",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "7b176535-bfc6-4b08-9f2d-58f7c7056598",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "cslsc21851b3-0cf4-4767-84b4-a30e873bbcc3"
        },
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T12:03:01.283Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Update",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "__v": 0,
                "_id": "65******6323264738b10b29",
                "active": false,
                "audience": [],
                "created_at": "2024-02-22T11:32:24.309Z",
                "description": "",
                "id": "345ae3c033c6432baf34fe90032eaaad",
                "isDraftRule": false,
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "shared": [],
                "step_groups": [
                    "http",
                    null
                ],
                "steps": [],
                "tags": [],
                "throttle": false,
                "title": "ChatGPT",
                "trigger": {
                    "id": "fc4a630beb984aff9ca2cdf02e27c844",
                    "next": []
                },
                "updated_at": "2024-02-22T12:03:01.279Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Automation",
            "module_uid": "345ae3c033c6432baf34fe90032eaaad",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "5f17ae07-697c-40c0-9a8f-bdd8b5fc3eb0",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "cslscb28b96f-f29c-4f68-bfc8-845a8085e948"
        },
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T12:12:08.115Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Enabled",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "__v": 0,
                "_id": "65******6323264738b10b29",
                "active": true,
                "audience": [],
                "created_at": "2024-02-22T11:32:24.309Z",
                "description": "",
                "id": "345ae3c033c6432baf34fe90032eaaad",
                "isDraftRule": false,
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "shared": [],
                "step_groups": [
                    "http",
                    "chatgpt"
                ],
                "steps": [
                    {
                        "action_title": "Chat",
                        "auth": "f8******b72a46858fc709281cf27e50",
                        "connector_id": "6e40e092773e4230b282283164091c07",
                        "connector_title": "ChatGPT",
                        "description": "This action returns the chat response(s) from the OpenAI platform.",
                        "group_name": "chatgpt",
                        "help": "https://www.contentstack.com/docs/developers/automation-hub-connectors/chatgpt/#action-1-select-the-chat-action",
                        "id": "1377cbb3032e4f1b9a7dbe664f938c73",
                        "input_data": "{\"model\":\"{(gpt-3.5-turbo-0613||gpt-3.5-turbo-0613)}\",\"prompt\":\"convert to german language\",\"role\":\"user\",\"max_tokens\":500,\"temperature\":0.5,\"n\":1,\"escaped_response\":true}",
                        "input_schema": "{\n  \"type\": \"object\",\n  \"required\": [\n    \"model\",\n    \"prompt\",\n    \"role\"\n  ],\n  \"properties\": {\n    \"model\": {\n      \"type\": \"string\",\n      \"title\": \"Select Model\",\n      \"description\": \"Select the API model to use for the chat response.Note that \\\"continuous\\\" models (gpt-3.5-turbo, gpt-4 and gpt-4-32k) will always point to the latest stable versions. Experimental models (listed with dates or the \\\"preview\\\" label) are only available for a limited time and will return an error after they are deprecated. Please check with OpenAl's documentation for more information.\",\n      \"lookup\": {\n        \"id\": \"get_chat_models\",\n        \"edit\": true\n      },\n      \"minLength\": 1\n    },\n    \"prompt\": {\n      \"type\": \"string\",\n      \"title\": \"Prompt Text\",\n      \"format\": \"textarea\",\n      \"description\": \"Enter the input text to generate a response. Add multiple prompt texts within the Show optional fields below.\",\n      \"minLength\": 5\n    },\n    \"role\": {\n      \"type\": \"string\",\n      \"title\": \"Select Role\",\n      \"description\": \"Select the role identifier to send to the API model request.\",\n      \"default\": \"user\",\n      \"enum\": [\n        \"user\",\n        \"system\",\n        \"assistant\"\n      ],\n      \"minLength\": 1\n    },\n    \"max_tokens\": {\n      \"show\": false,\n      \"type\": \"integer\",\n      \"title\": \"Number of Tokens\",\n      \"description\": \"Enter the maximum number of tokens to generate the content. This must be within the range of 1 to 2048.\",\n      \"default\": 500,\n      \"minimum\": 1,\n      \"maximum\": 2048,\n      \"minLength\": 1\n    },\n    \"temperature\": {\n      \"show\": false,\n      \"type\": \"number\",\n      \"title\": \"Randomness of Responses\",\n      \"description\": \"Enter the value for the randomness of the generated content, 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.\",\n      \"default\": 0.5,\n      \"minimum\": 0,\n      \"maximum\": 2,\n      \"minLength\": 1\n    },\n    \"n\": {\n      \"show\": false,\n      \"type\": \"integer\",\n      \"title\": \"Number of Chat Responses\",\n      \"description\": \"Enter the maximum number of chat responses. This must be within the range of 1 to 3.\",\n      \"default\": 1,\n      \"minimum\": 1,\n      \"maximum\": 3\n    },\n    \"frequency_penalty\": {\n      \"show\": false,\n      \"type\": \"number\",\n      \"title\": \"Frequency of Repeated Words\",\n      \"description\": \"Enter the value to set the frequency of repeated words. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.\",\n      \"minimum\": -2,\n      \"maximum\": 2\n    },\n    \"presence_penalty\": {\n      \"show\": false,\n      \"type\": \"number\",\n      \"title\": \"Presence of Repeated Responses\",\n      \"description\": \"Enter the value to set the presence of  repeated responses. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.\",\n      \"minimum\": -2,\n      \"maximum\": 2\n    },\n    \"messages\": {\n      \"show\": false,\n      \"type\": \"array\",\n      \"title\": \"Additional Prompt Text\",\n      \"description\": \"Enter multiple messages in key-value pairs.\",\n      \"maxItems\": 10,\n      \"items\": {\n        \"type\": \"object\",\n        \"properties\": {\n          \"role\": {\n            \"title\": \"Role\",\n            \"type\": \"string\",\n            \"minLength\": 1,\n            \"enum\": [\n              \"user\",\n              \"system\",\n              \"assistant\"\n            ],\n            \"default\": \"user\"\n          },\n          \"content\": {\n            \"title\": \"Input Query\",\n            \"type\": \"string\",\n            \"minLength\": 1\n          }\n        }\n      }\n    },\n    \"escaped_response\": {\n      \"show\": false,\n      \"title\": \"Sanitize text\",\n      \"description\": \"Enable to format text for compatibility, ensuring proper escape of special characters to prevent interference with API processes or webpage code. Disable this option to format manually.\",\n      \"type\": \"boolean\",\n      \"default\": true\n    }\n  }\n}",
                        "name": "119202",
                        "next": [],
                        "origin_id": "cc219f3a5c75433bb859c24e315a13fa",
                        "skipped": true,
                        "tested": false,
                        "title": "Chat",
                        "type": "action",
                        "version": 5
                    }
                ],
                "tags": [],
                "throttle": false,
                "title": "ChatGPT",
                "trigger": {
                    "id": "fc4a630beb984aff9ca2cdf02e27c844",
                    "next": [
                        "119202"
                    ]
                },
                "updated_at": "2024-02-22T12:12:08.109Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Automation",
            "module_uid": "345ae3c033c6432baf34fe90032eaaad",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "462f3d58-ee03-49b7-9a2c-93cb2ac16a36",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "cslsfc416711-4e65-4328-9da6-aa8ea084ed5c"
        },
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T11:32:35.932Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Update",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "__v": 0,
                "_id": "65******6323264738b10b29",
                "active": false,
                "audience": [],
                "created_at": "2024-02-22T11:32:24.309Z",
                "description": "",
                "id": "345ae3c033c6432baf34fe90032eaaad",
                "isDraftRule": false,
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "shared": [],
                "step_groups": [],
                "steps": [],
                "tags": [],
                "throttle": false,
                "title": "ChatGPT",
                "trigger": {
                    "next": []
                },
                "updated_at": "2024-02-22T11:32:35.928Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Automation",
            "module_uid": "345ae3c033c6432baf34fe90032eaaad",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "faf97354-8540-46c7-8ae6-c3f8c78b3ea4",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "cslse7ba2777-d0f7-4d14-9635-417a3f31e1c1"
        },
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T11:31:27.865Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Create",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "audience": [],
                "created_at": "2024-02-22T11:31:27.837Z",
                "description": "",
                "id": "05732fe9f7d6454791715b09a3792f52",
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "shared": [],
                "tags": [],
                "title": "Sample Test Project - Docs",
                "type": "standard",
                "updated_at": "2024-02-22T11:31:27.837Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Project",
            "module_uid": "05732fe9f7d6454791715b09a3792f52",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "9e91ca1c-a936-4097-9ef5-f52fd9e343a3",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "csls1a6077b3-9caf-4744-8421-e086d5a637bb"
        },
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T12:05:29.859Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Create",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "auth": "ENC_123456789014;RKJYcErInW++33CR;5jVdinG8bti1Wf7qlKHLeg==;MeMNX8CswW+tViVt9yQaVgPznfjIV+01wBbrQ5mKUDXIt5rNkuvHezYRidUSZS952qijQlTsziOkr8Je/ntzqtLhvD91C+19nGAhcdkF3tbLX/7Lizi6wX0YT1VQ/UV41xzQPbhZ9Pf1",
                "auth_id": "cb70c43793194bc590ea30bddfcdad9b",
                "callback_url": "https://automations-api.contentstack.com/userauths/auth/callback",
                "connector_id": "6e40e092773e4230b282283164091c07",
                "content_type": "application/json",
                "created_at": "2024-02-22T12:05:29.854Z",
                "description": "chatGPT auth",
                "done": false,
                "group_name": "chatgpt",
                "has_connect": false,
                "id": "f8******b72a46858fc709281cf27e50",
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "scope_join_char": ",",
                "source": "automations",
                "title": "Test ChatGPT Account #1",
                "type": "custom",
                "updated_at": "2024-02-22T12:05:29.854Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Connected Apps",
            "module_uid": "f8******b72a46858fc709281cf27e50",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "491d1513-7b96-47af-8315-360b7e97dc17",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "cslsac6ada7c-f73e-41c5-b75b-b3f3a5fc7c2a"
        },
        {
            "app_type": "",
            "branch": "",
            "channels": null,
            "created_at": "2024-02-22T12:14:56.897Z",
            "created_by": {
                "uid": "blt******dae71c6b33",
                "username": "user_blt88a8d584",
                "email": "sample_user@example.com",
                "first_name": "Jane",
                "last_name": "Doe",
                "role": 1,
                "active": true
            },
            "event": "Create",
            "headers": null,
            "management_token_uid": "",
            "metadata": {
                "access_call_opts": "{\n  \"code\": \"{{code}}\",\n  \"client_id\": \"{{client_id}}\",\n  \"client_secret\": \"{{client_secret}}\",\n  \"redirect_uri\": \"{{redirect_url}}\",\n  \"grant_type\": \"authorization_code\"\n}",
                "access_url": "https://developerhub-api.contentstack.com/apps/token",
                "auth": "ENC_123456789014;iWLyGiWkQ7Ridg9o;fE/WD914O5aYfIBgJcKp8w==;SSYQLAQ6tsSeI+jVKkzKxf1Krjn3Kyw4+2P1tSugIwnaDcZ5LBb1Z038YmxmaNI5rXiaf08mtoQHqAuNFw+NgORmbjfhX9ctviPHd4ugk3MwV0vQ0JmaS3xHtC24LiY6GqRQNJRmbj5pFinI/e8o22c0l4CotT4ujDUJ7ed0EaxMO3fp3PYfshv6gLtiJyRx0jmjurLLkp0+Uil7SmJwPB9A2iWMWZpQou/gwxm164z4e6ZLeE9EmNzELyJIObFLI+Moq8a6JsEajLkVugskOhF5ypYtSrkGnCmqsEO51I9QsDeZCbWa1DEJjNq1lBOdNg6w9RVL1UzQIoifVPg6113YJ4aiXxTdGME9DoXnpUV45kyBnqFdHrJIame9WNtZmSLze2PcL2L9h//pQYI0LiLJNN4NjL9ysWBTpqkmFg==",
                "auth_id": "0e5a5280bf51460dab5021b434c3ba24",
                "callback_url": "https://automations-api.contentstack.com/userauths/auth/callback",
                "client_id": "C_9TIxT8Sam76IMG",
                "client_secret": "hgBXMqgoJIjxyPo2xEc1beKKJYoMZCoa",
                "code_challenge": null,
                "code_verifier": null,
                "connector_id": "40a86f3f55c7485b807bb23a536e2a55",
                "content_type": "application/json",
                "created_at": "2024-02-22T12:14:18.382Z",
                "done": true,
                "expires_at": 1708607679225,
                "group_name": "launch",
                "id": "94c48b974b9045b3a1327eeb10ada605",
                "meta": "{\"scope\":{\"launch:manage\":true}}",
                "org_id": "blt******5ea6ddf287",
                "project_id": "05732fe9f7d6454791715b09a3792f52",
                "published": true,
                "refresh_call_opts": "{\n  \"refresh_token\": \"{{refresh_token}}\",\n  \"client_id\": \"{{client_id}}\",\n  \"client_secret\": \"{{client_secret}}\",\n  \"redirect_uri\": \"{{redirect_url}}\",\n  \"grant_type\": \"refresh_token\"\n}",
                "refresh_url": "https://developerhub-api.contentstack.com/apps/token",
                "scope_join_char": ",",
                "source": "automations",
                "title": "Test Launch Account #1",
                "type": "oauth2",
                "updated_at": "2024-02-22T12:14:56.891Z",
                "updated_by": "blt******dae71c6b33",
                "user_id": "blt******dae71c6b33"
            },
            "module": "Connected Apps",
            "module_uid": "94c48b974b9045b3a1327eeb10ada605",
            "org_uid": "blt******5ea6ddf287",
            "payload": null,
            "project_uid": "05732fe9f7d6454791715b09a3792f52",
            "remote_addr": "223.***.**.180",
            "request": {},
            "request_id": "e0bda81e-a0bf-452b-a5db-e4c409fd7740",
            "response": {},
            "sort": null,
            "stack": "",
            "uid": "csls9688341b-4529-4d1b-bf7f-8d433d45c5d1"
        }
    ]
}
```

