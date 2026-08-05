---
title: "Automations Management API"
description: Automations Management API
url: automations-management-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: unknown
last_updated: 2026-05-04
---

# Automations Management API


## Introduction

### Base URL

- AWS North America (AWS NA): https://automations-api.contentstack.com/
- AWS Europe (AWS EU): https://eu-prod-automations-api.contentstack.com
- AWS Australia (AWS AU): https://au-prod-automations-api.contentstack.com
- Azure North America (Azure NA): https://azure-na-automations-api.contentstack.com
- Azure Europe (Azure EU): https://azure-eu-automations-api.contentstack.com
- GCP North America (GCP NA): https://gcp-na-automations-api.contentstack.com
- GCP Europe (GCP EU): https://gcp-eu-automations-api.contentstack.com

### Overview

Contentstack is a headless, API-first content management system (CMS) that provides everything you need to power your web or mobile properties. To learn more about Contentstack, visit our [website](https://www.contentstack.com/) or refer to our [documentation site](https://www.contentstack.com/docs) to understand what we do.

This document is a detailed reference to Contentstack’s Automations Management API.

The **Automations Management API** is used to manage your projects and automations present in an organization. This includes creation, updation, deletion, and fetching requests.  
  
To use the Automations Management API, you need to authenticate yourself with an [Authtoken](#how-to-get-authtoken). Read more about it in [Authentication](#authentication).

**Note:** The initial release of the Automations Management API currently does not include support for Management token for authentication. However, this feature is scheduled to be introduced in upcoming releases.

### Authentication

Contentstack provides token-based authentication that allows you to create, update, delete, and fetch the content of your [Contentstack account](https://www.contentstack.com/login). You can use the user Authtoken, to make Automations Management API requests.

Authtokens are user-specific tokens generated when a user logs into Contentstack. Read more about the different [types of tokens](../../cs-docs/developers/create-tokens/types-of-tokens.md).

#### For API Key and Authtoken-based authentication

- Pass the user Authtoken against the authtoken parameter as header.
- Pass the Organization ID against the organization_uid parameter as header.

#### How to Get Authtoken

To retrieve the authtoken, log into your Contentstack account by using the “[Log into your account](./content-management-api.md#logging-in-out)” request under “[User Session](./content-management-api.md#user-session).” This request will return the authtoken in the response body.

You can generate multiple authtokens by executing the “[Log into your account](./content-management-api.md#logging-in-out)” request multiple times. These tokens do not have an expiration limit. However, currently, there is a maximum limit of 20 valid tokens that a user can use per account at a time to execute the CMA requests.

**Note:** If you already have valid 20 tokens, creating a new authtoken will automatically expire the oldest authtoken without warning.

For SSO-enabled organizations, the “[Log in to your account](./content-management-api.md#logging-in-out)” request will not return the user authtoken for users who access the organization through Identity Provider login credentials. Consequently, any requests that require a user authtoken will not work. The owner and users of the organization who have permission to access the organization without SSO can use the Content Management APIs. Learn more about [REST API Usage](../../cs-docs/developers/single-sign-on/rest-api-usage.md).

### Rate limiting

Rate limit is the maximum number of requests you can make using Contentstack’s API in a given time period.

By default, the Automations Management API enforces the following rate limits:

- Read (GET) and Write (POST/PUT/DELETE) requests: 10 requests per second per organization

Your application will receive the HTTP 429 response code if the requests for a given time period exceed the defined rate limits.

The aforementioned limits are configurable depending on your plan. For more information, contact our [Support](mailto:support@contentstack.com) team.

### API Conventions

- The base URL for Automations Management API for different regions can be found in the Base URL section.
- The API version can be found in the URL, e.g. automations-api.contentstack.com/v1/endpoint.
- Automations Management API supports GET/POST/PUT/DELETE verbs or methods.
- URL paths are written in lower case.
- Query parameters and JSON fields use lower case, with underscores (_) separating words.
- The success/failure status of an operation is determined by the HTTP status it returns. Additional information is included in the HTTP response body.
- The JSON number type is bounded to a signed 32-bit integer.

### Errors

If there is something wrong with the API request, Automations returns an error.

Automations uses conventional, standard HTTP status codes for errors, and returns a JSON body containing details about the error. In general, codes in the 2xx range signify success. The codes in the 4xx range indicate error, mainly due to information provided (for example, a required parameter or field was omitted). Lastly, codes in the 5xx range mean that there is something wrong with Automation's servers; it is very rare though.

Let’s look at the error code and their meanings.

| HTTP Status Code | Description |
| --- | --- |
| 400 Bad Request | The request was incorrect or corrupted. |
| 401 Access Denied | The login credentials are invalid. |
| 403 Forbidden Error | The page or resource that is being accessed is forbidden. |
| 404 Not Found | The requested page or resource could not be found. |
| 412 Precondition Failed | The entered API key is invalid. |
| 422 Unprocessable Entity (also includes Validation Error and Unknown Field)  | The request is syntactically correct but contains semantic errors. |
| 429 Rate Limit Exceeded | The number of requests exceeds the allowed limit for the given time period. |
| 500 Internal Server Error | The server is malfunctioning and is not specific about what the problem is. |
| 502 Bad Gateway Error | A server received an invalid response from another server. |
| 504 Gateway Timeout Error | A server did not receive a timely response from another server it was accessing while attempting to load the web page or fulfill another request. |

**Note**: The error codes that we get in the JSON response are not HTTP error codes but are custom Automations error codes that are used for internal purposes.

### Using Postman Collection

Contentstack offers you a Postman Collection that helps you try out our Automations Management API. You can download this collection, connect to your Contentstack account, and try out the Automations Management API with ease.

Learn more about how to [get started with using the Postman Collection](/docs/developer-apis/automation-hub-management-api#postman-collection) for Automations Management API.

## API References

### Projects


#### Get All Projects

#### Get all projects

**GET** `/v1/projects?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all projects request returns comprehensive information of all the projects related to the Organization in which they are created.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

##### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of projects (in between 0-100) in your response based on the value you provide. If there are 100 projects and you want to fetch only 30 projects, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of projects and return the remaining ones in your response based on the value you provide.  If there are 12 projects and you want to exclude the first 2 projects, set this to 2 to fetch the remaining 10 projects.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of projects in the ascending order with respect to the value of a specific field. The projects can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of projects in the descending order with respect to the value of a specific field. The projects can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of projects in an organization.
  Default: `true`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "projects": [
        {
            "title": "demo 14dec",
            "description": "",
            "user_id": "bltb71****0e9b7facc",
            "org_id": "bltc14f1***7416061b",
            "shared": [
                "blt82dbdb***5e144b53"
            ],
            "tags": [],
            "updated_by": "bltb712****e9b7facc",
            "type": "standard",
            "created_at": "2024-02-04T13:44:35.265Z",
            "updated_at": "2024-02-04T14:20:22.442Z",
            "id": "bbc469d1f445482****cae6b358479d0",
            "created_by": {
                "uid": "bltb7128*****9b7facc",
                "username": "test1_bltc0ec3c96",
                "email": "sample_user1@example.com",
                "firstName": "John",
                "lastName": "Doe",
                "active": true
            }
        },

        {
            "title": "Demo",
            "description": "",
            "user_id": "bltb712****e9b7facc",
            "org_id": "bltc14f1****416061b",
            "shared": [],
            "tags": [
                "testing"
            ],
            "updated_by": "bltb7128****9b7facc",
            "type": "standard",
            "created_at": "2024-01-31T06:39:54.994Z",
            "updated_at": "2024-01-31T06:39:54.994Z",
            "id": "f2065bad17f24****9faba08539b2753",
            "created_by": {
                "uid": "bltb7128***e9b7facc",
                "username": "test2_bltc0ec3c96",
                "email": "sample_user2@example.com",
                "firstName": "John",
                "lastName": "Smith",
                "active": true
            }
        }
          
    ] 
}
```



#### Get a Single Project

#### Get a single project

**GET** `/v1/projects/{project_uid}`

The Get a single project request fetches a specific project created in your organization. When executing the API request, you need to provide the organization UID and your authtoken in the Request Header.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:read scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "title": "Sample Test Project - Docs",
    "description": "",
    "user_id": "blt762****ae71c6b33",
    "org_id": "blt4051****a6ddf287",
    "shared": [],
    "tags": [],
    "updated_by": "blt76240****71c6b33",
    "type": "standard",
    "created_at": "2024-02-22T11:31:27.837Z",
    "updated_at": "2024-02-22T11:31:27.837Z",
    "id": "05732fe9f7d***791715b09a3792f52"
}
```



#### Create a Project

#### Create a project

**POST** `/v1/projects`

The Create a project request lets you create a project in your organization.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:writescope.

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
 "description": "This is a sample project",
 "tags": ["sample"],
 "title": "Sample Demo Project-Docs"
}
```

##### Sample Response

```json
{
    "title": "Sample Demo Project-Docs",
    "description": "This is a sample project",
    "user_id": "blt7aa853***b03b79c0",
    "org_id": "blt4051c65***ddf287",
    "shared": [],
    "tags": [
        "sample"
    ],
    "updated_by": "blt7aa****ab03b79c0",
    "created_at": "2024-02-22T13:01:00.471Z",
    "updated_at": "2024-02-22T13:01:00.471Z",
    "id": "d8674f45bee847***f044e1da7428a70"
}
```



#### Update a Project

#### Update a project

**PUT** `/v1/projects/{project_uid}`

The Update a project request lets you update certain details such as the description, tags, and title of an existing project in an Organization.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:write scope.

Here’s an example of the Request body:

```
{
  "description": "New Description",
  "tags": ["tag1", "tag2",...],
  "title": "New Title"
}
```

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "description": "This is a New Description for Sample Test",
  "tags": ["Sample 1", "Sample 2"],
  "title": "Updated Sample Test Project -Docs"
}
```

##### Sample Response

```json
{
    "title": "Updated Sample Test Project -Docs",
    "description": "This is a New Description for Sample Test",
    "user_id": "blt762****ae71c6b33",
    "org_id": "blt4051****a6ddf287",
    "shared": [],
    "tags": [
        "Sample1",
        "Sample2"
    ],
    "updated_by": "blt7aa****ab03b79c0",
    "created_at": "2024-02-22T11:31:27.837Z",
    "updated_at": "2024-02-22T13:09:58.161Z",
    "id": "05732fe9f7d***791715b09a3792f52"
}
```



#### Delete a Project

#### Delete a project

**DELETE** `/v1/projects/{project_uid}`

The Delete a project request lets you delete an existing project in an organization.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `f208798e666b45c89c66e66752dd4422`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "message": "Project deleted successfully."
}
```


### Automations


#### Get All Automations

#### Get all automations

**GET** `/v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}`

The Get all automations request returns comprehensive information of all the automations created in a project.

To configure the permissions for your application via OAuth, include the automationhub.automations:read scope.

To get a list of automations that are active, you need to pass the query={'active':'true'} parameter.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID of the project.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of automations (in between 0-100) in your response based on the value you provide. If there are 100 automations and you want to fetch only 30 automations, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of automations and return the remaining ones in your response based on the value you provide. If there are 12 automations and you want to exclude the first 2 automations, set this to 2 to fetch the remaining 10 automations.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of automations in the ascending order with respect to the value of a specific field. The automations can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of automations in the descending order with respect to the value of a specific field. The automations can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of automations present in a project accessible in an organization.
  Default: `true`
- **show_steps** (optional)
  Set this to “true” to return all the steps, triggers associated with each automation in a project.
  Default: `true`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "rules": [
        {
            "id": "345ae3c033c643***f34fe90032eaaad",
            "title": "ChatGPT",
            "description": "",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "org_id": "blt4051c65****df287",
            "user_id": "blt762406d****c6b33",
            "active": true,
            "updated_by": "blt762406****1c6b33",
            "throttle": false,
            "created_at": "2024-02-22T11:32:24.309Z",
            "updated_at": "2024-02-22T12:12:08.109Z"
        },
        {
            "id": "b5b0a755a51d4***81d0968fe19a5f62",
            "title": "ChatGPT Test 2",
            "description": "",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "org_id": "blt4051c6***6ddf287",
            "user_id": "blt76240****71c6b33",
            "active": false,
            "updated_by": "blt76240****71c6b33",
            "throttle": false,
            "created_at": "2024-02-22T12:12:24.422Z",
            "updated_at": "2024-02-22T12:12:24.422Z"
        }
    ]
}
```



#### Get a Single Automation

#### Get a single automation

**GET** `/v1/projects/{project_uid}/automations/{automation_uid}?show_steps={boolean_value}`

The Get a single automation request fetches a specific automation from a project in which it was created.

To configure the permissions for your application via OAuth, include the automationhub.automations:read scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **automation_uid** (required)
  Enter the Automation UID.
  Default: `e82a0f19673b4a808cd39743b71ae624`

##### Query Parameters

- **show_steps** (optional)
  Set this to “true” to return all the steps, triggers associated with each automation in a project.
  Default: `true`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "id": "b5b0a755a51d4****1d0968fe19a5f62",
    "title": "ChatGPT Test 2",
    "description": "",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "org_id": "blt4051c****6ddf287",
    "user_id": "blt76240****71c6b33",
    "active": false,
    "updated_by": "blt7624****e71c6b33",
    "throttle": false,
    "created_at": "2024-02-22T12:12:24.422Z",
    "updated_at": "2024-02-22T12:12:24.422Z"
}
```



#### Activate/Deactivate an Automation

#### Activate/Deactivate an automation

**PATCH** `/v1/projects/{project_uid}/automations/{automation_uid}`

The Activate/Deactivate an automation request sets an automation to an active or inactive state.

To configure the permissions for your application via OAuth, include the automationhub.automations:write scope.

**Note:** To activate/deactivate an automation, you must have a trigger and an action configured in your project.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **automation_uid** (required)
  Enter the Automation UID.
  Default: `bb27e85b4b3b4fdbac4c19b7765b1d0f`

##### Headers

- **authtoken** (optional)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Request

```json
{
 "active": true
}
```

##### Sample Response

```json
{
    "message": "automation has been activated successfully"
}
```


### Execution Logs


#### Get Execution Log

#### Get execution log

**GET** `/v1/projects/{project_uid}/executions?&limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get execution log request is used to retrieve the execution log of a project.

To configure the permissions for your application via OAuth, include the automationhub.executions:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of execution log (in between 0-100) in your response based on the value you provide. If there are 100 execution log and you want to fetch only 30 execution log, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of execution log and return the remaining ones in your response based on the value you provide. If there are 12 log and you want to exclude the first 2 log, set this to 2 to fetch the remaining 10 log.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of execution log in the ascending order with respect to the value of a specific field. The execution log can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of execution log in the descending order with respect to the value of a specific field. The execution log can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of execution log in an organization.
  Default: `true`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "executions": [
        {
            "title": "Slack",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "trigger_payload_id": "1fa815a1d****c59874404adebe2451f",
            "org_id": "blt4051c6***6ddf287",
            "rule_id": "bb27e85b4b3****bac4c19b7765b1d0f",
            "status": "success",
            "task": 3,
            "resume": 0,
            "details": [
                {
                    "start": 1708608898366,
                    "end": 1708608898374,
                    "title": "Trigger",
                    "name": "1",
                    "status": "success"
                },
                {
                    "start": 1708608898374,
                    "end": 1708608898374,
                    "parent": null,
                    "counter": 0,
                    "group": "transform",
                    "name": "110002",
                    "status": "success",
                    "title": "Transform"
                },
                {
                    "start": 1708608898374,
                    "end": 1708608898374,
                    "parent": null,
                    "counter": 0,
                    "group": "response",
                    "name": "110003",
                    "status": "success",
                    "title": "Response"
                }
            ],
            "created_at": "2024-02-22T13:34:58.354Z",
            "updated_at": "2024-02-22T13:34:58.374Z",
            "id": "7cc3a3be3bcd48a4****96d1fc1f2e170f",
            "step_name_map": {
                "1": "1",
                "110002": "2",
                "110003": "3"
            },
            "duration": 8
        }
    ]
}
```



#### Get an Execution Log Item

#### Get an execution log item

**GET** `/v1/projects/{project_uid}/executions/{execution_uid}`

The Get an execution log item request is used to retrieve a specific item from the execution log of a project.

To configure the permissions for your application via OAuth, include the automationhub.executions:read scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **execution_uid** (required)
  Enter the UID of the specific execution log.
  Default: `050efa54ebe646349619e1eaf40cd130`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "title": "Slack",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "trigger_payload_id": "1fa815a1dc27***9874404adebe2451f",
    "org_id": "blt4051c65***ddf287",
    "rule_id": "bb27e85b4b3b****ac4c19b7765b1d0f",
    "status": "success",
    "task": 3,
    "resume": 0,
    "details": [
        {
            "start": 1708608898366,
            "end": 1708608898374,
            "title": "Trigger",
            "name": "1",
            "status": "success"
        },
        {
            "start": 1708608898374,
            "end": 1708608898374,
            "parent": null,
            "counter": 0,
            "group": "transform",
            "name": "110002",
            "status": "success",
            "title": "Transform"
        },
        {
            "start": 1708608898374,
            "end": 1708608898374,
            "parent": null,
            "counter": 0,
            "group": "response",
            "name": "110003",
            "status": "success",
            "title": "Response"
        }
    ],
    "created_at": "2024-02-22T13:34:58.354Z",
    "updated_at": "2024-02-22T13:34:58.374Z",
    "id": "7cc3a3be3bcd48a49***d1fc1f2e170f",
    "step_name_map": {
        "1": "1",
        "110002": "2",
        "110003": "3"
    },
    "duration": 8
}
```


### Audit Logs


#### Get Audit Log

#### Get audit log

**GET** `/v1/projects/{project_uid}/audit-logs?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get audit log request returns the audit log of a specific project.

To configure the permissions for your application via OAuth, include the automationhub.audit-log:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 30 items.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Query Parameters

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

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

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



#### Get an Audit Log Item

#### Get an audit log item

**GET** `/v1/projects/{project_uid}/audit-logs/{auditlog_uid}`

The Get an audit log item request is used to retrieve a specific item from the audit log of a project.

To configure the permissions for your application via OAuth, include the automationhub.audit-logs:read scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **auditlog_uid** (required)
  Enter the UID of the specific log you want to retrieve.
  Default: `cslscb28b96f-f29c-4f68-bfc8-845a8085e948`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
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
}
```


### Project Variables


#### Get All Project Variables

#### Get all project variables

**GET** `/v1/projects/{project_uid}/variables?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all project variables request returns comprehensive information of all the project variables defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

##### URL Parameters

- **project_uid** (required)
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of project variables (in between 0-100) in your response based on the value you provide. If there are 100 project variables and you want to fetch only 30 project variables, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of project variables and return the remaining ones in your response based on the value you provide. If there are 12 project variables and you want to exclude the first 2 project variables, set this to 2 to fetch the remaining 10 project variables.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of project variables in the ascending order with respect to the value of a specific field. The project variables can be sorted by _created_at_and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of project variables in the descending order with respect to the value of a specific field. The project variables can be sorted by _created_at_and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of project variables in an organization.
  Default: `true`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter your Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "variables": [
        {
            "key": "Key1",
            "value": "1234567",
            "org_id": "blt******5ea6ddf287",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "text",
            "created_at": "2024-02-22T11:32:54.440Z",
            "updated_at": "2024-02-22T11:33:09.574Z",
            "id": "fe4c65e93a664948b24854277af477da"
        },
        {
            "key": "Key2",
            "value": "ENC_123456789014;2WjbDeWolmvVJVsm;vjFptQQq3+I/V27Uru97/g==;wKoBGVLgsw==",
            "org_id": "blt******5ea6ddf287",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "password",
            "created_at": "2024-02-22T11:33:03.772Z",
            "updated_at": "2024-02-22T11:33:03.772Z",
            "id": "f7bbf2d9cb894b5aa34b3d28603ae174"
        }
    ]
}
```



#### Get a Single Project Variable

#### Get a single project variable

**GET** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Get a single project variable request fetches a specific project variable defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `f7bbf2d9cb894b5aa34b3d28603ae174`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "key": "Key2",
    "value": "ENC_123456789014;2WjbDeWolmvVJVsm;vjFptQQq3+I/V27Uru97/g==;wKoBGVLgsw==",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "password",
    "created_at": "2024-02-22T11:33:03.772Z",
    "updated_at": "2024-02-22T11:33:03.772Z",
    "id": "f7bbf2d9cb894b5aa34b3d28603ae174"
}
```



#### Create a Project Variable

#### Create a project variable

**POST** `/v1/projects/{project_uid}/variables`

The Create a project variable request lets you create a project variable in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "key": "Key3",
    "type": "text",
    "value": "password@1234"
}
```

##### Sample Response

```json
{
    "key": "Key3",
    "value": "password@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:38:36.439Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```



#### Update a Project Variable

#### Update a project variable

**PUT** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Update a project variable request lets you update the key, value and type of a project variable.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `bd0ce37910cb4172b844308aa07e6bf7`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "key": "Key3",
    "type": "text",
    "value": "abcd@1234"
}
```

##### Sample Response

```json
{
    "key": "Key3",
    "value": "abcd@1234",
    "org_id": "blt******5ea6ddf287",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "type": "text",
    "created_at": "2024-02-22T13:38:36.439Z",
    "updated_at": "2024-02-22T13:42:23.560Z",
    "id": "bd0ce37910cb4172b844308aa07e6bf7"
}
```



#### Delete a Project Variable

#### Delete a project variable

**DELETE** `/v1/projects/{project_uid}/variables/{variable_uid}`

The Delete a project variable request lets you delete a specific project variable from a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:write scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **variable_uid** (required)
  Enter the UID of the project variable.
  Default: `bd0ce37910cb4172b844308aa07e6bf7`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "message": "Project variable deleted successfully."
}
```


### Accounts


#### Get All Accounts

#### Get all accounts

**GET** `/v1/projects/{project_uid}/accounts?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all accounts request returns comprehensive information of all the accounts in a project.

To configure the permissions for your application via OAuth, include the automationhub.accounts:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`

##### Query Parameters

- **limit** (optional)
  The “limit” parameter will return a specific number of accounts (in between 0-100) in your response based on the value you provide. If there are 100 accounts and you want to fetch only 30 accounts, set the limit as 30.
  Default: `30`
- **skip** (optional)
  The “skip” parameter will skip a specific number of accounts and return the remaining ones in your response based on the value you provide.  If there are 12 accounts and you want to exclude the first 2 accounts, set this to 2 to fetch the remaining 10 accounts.
  Default: `2`
- **asc** (optional)
  The “asc” parameter allows you to sort the list of accounts in the ascending order with respect to the value of a specific field. The accounts can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **desc** (optional)
  The “desc” parameter allows you to sort the list of accounts in the descending order with respect to the value of a specific field. The accounts can be sorted by _created_at_, _title_, and _updated_at_values.
  Default: `created_at`
- **include_count** (optional)
  Set this to “true” to include the total number (count) of accounts in an organization.
  Default: `true`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "accounts": [
        {
            "group_name": "chatgpt",
            "title": "Test ChatGPT Account #1",
            "description": "chatGPT auth",
            "auth_id": "cb*********94bc590ea30bddfcdad9b",
            "user_id": "blt******dae71c6b33",
            "org_id": "blt******5ea6ddf287",
            "connector_id": "6e4******73e4230b282283164091c07",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "custom",
            "source": "automations",
            "updated_by": "blt******dae71c6b33",
            "scope_join_char": ",",
            "created_at": "2024-02-22T12:05:29.854Z",
            "updated_at": "2024-02-22T12:05:29.854Z",
            "id": "f8cb5c59b72a46858fc709281cf27e50"
        },
        {
            "group_name": "launch",
            "title": "Test Launch Account #1",
            "auth_id": "0e5a*********60dab5021b434c3ba24",
            "user_id": "blt******dae71c6b33",
            "org_id": "blt******5ea6ddf287",
            "connector_id": "40a****f55c7485b807bb23a536e2a55",
            "type": "oauth2",
            "source": "automations",
            "meta": "{\"scope\":{\"launch:manage\":true}}",
            "scope_join_char": ",",
            "created_at": "2024-02-22T12:14:18.382Z",
            "updated_at": "2024-02-22T12:14:56.891Z",
            "id": "94c48b974b9045b3a1327eeb10ada605",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "updated_by": "blt******dae71c6b33"
        }
    ]
}
```



#### Get a Single Account

#### Get a single account

**GET** `/v1/projects/{project_uid}/accounts/{account_uid}`

The Get a single account request fetches a specific account in a project.

To configure the permissions for your application via OAuth, include the automationhub.accounts:read scope.

##### URL Parameters

- **project_uid** (required)
  Enter the Project UID.
  Default: `05732fe9f7d6454791715b09a3792f52`
- **account_uid** (required)
  Enter the UID of the account.
  Default: `94c48b974b9045b3a1327eeb10ada605`

##### Headers

- **authtoken** (required)
  Enter your authtoken. Refer [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) for more details.
  Default: `your_authtoken`
- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`

##### Sample Response

```json
{
    "group_name": "launch",
    "title": "Test Launch Account #1",
    "auth_id": "0e5a*********60dab5021b434c3ba24",
    "user_id": "blt******dae71c6b33",
    "org_id": "blt******5ea6ddf287",
    "connector_id": "40a****f55c7485b807bb23a536e2a55",
    "type": "oauth2",
    "source": "automations",
    "meta": "{\"scope\":{\"launch:manage\":true}}",
    "scope_join_char": ",",
    "created_at": "2024-02-22T12:14:18.382Z",
    "updated_at": "2024-02-22T12:14:56.891Z",
    "id": "94c48b974b9045b3a1327eeb10ada605",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "updated_by": "blt******dae71c6b33"
}
```


## Postman Collection

### About Automations Postman Collection

The Automations Postman collection is a set of preconfigured REST API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developer-apis/) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.

### Install Postman

To use the Automations Postman collection you will need to have the [Postman](https://www.postman.com/downloads/). You can either download the **Desktop app**or use **Postman for Web**.

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection for Automations](#download-latest-collection) section.

Postman is available for [Windows (x32)](https://dl.pstmn.io/download/latest/win32), [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64) / [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.

### Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the Automations Management API endpoints for Contentstack.

**Note:** The Automations Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app](https://www.postman.com/downloads/).

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Automations Postman collection in the following three ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection
- Download Collection from GitHub Page

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the Automations Management API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation.Note: If you want to try out the API requests, you can either import a copy of the collection or fork the collection.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the Automations Management API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.
3. You will see a copy of the latest Postman collection in the left navigation panel.

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the Automations Management API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Under Notifications, check Watch original collection to get notified of any changes that are made to the original collection.
5. Once done, click Fork Collection to fork the Postman collection into your selected workspace.

#### Download Collection from GitHub Page

We have also hosted our Postman collection on [GitHub](https://github.com/contentstack/contentstack-postman-collections/blob/collections/automate-collection.json). You can follow the steps mentioned in the Readme file to download and start using it.

You can also choose to watch the latest Postman collection to get notifications of new releases or updates.

To do so, click the following **Watch**button and select **Watching**.

### Configure Environment Variables

When you download and install the latest version of the Automations Management API Postman Collection, you also download and import the respective environment along with the environment variables.

Once your Environment is imported, next you need to set your Automations account specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman Collection.

Some of the important variables that you need to set are as follows:

| Environment Variable | Value |
| --- | --- |
| base_url | automations-api.contentstack.com  |
| organization_uid  | your_organization_uid |
| authtoken | your_authtoken |

**Note:** The Automations Postman Collection will require a valid Authtoken to make API calls. Check out the [Authentication](/docs/developer-apis/automation-hub-management-api#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select Automations Management API - Environment.
3. Click the "eye" icon present in the top right corner of Postman. It opens up in the environment variables modal. Click Edit to make changes in the variables.
4. In the VARIABLE field, enter the name of the environment variable. In the INITIAL VALUE field, enter your Automations-account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API Requests from your Automations Postman collection using your environment.

### Make an API Request

With the Automations Postman Collection loaded into the Postman app (on the left panel) and the environment created, you can now make API requests to the Automations API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, Automations Management API - Environment, from the dropdown.
2. Select an API Request from the Automations Postman Collection. In this example, we will use the Get all projects request which is a part of the Projects folder.Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click Send at the top right to make the API request.The API call should return with a response under the Body tab in the bottom half of the screen.

### Secure Organization UID and Tokens

We strongly advise against storing your Organization UID and authtokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your Automations account-specific Organization UID and tokens in your environment or directly to the sample requests.

#### Users using Authtoken

For users who use authtoken to authenticate their calls, when you make the **Log in to your account** API Request, your authtoken will be saved in cookies.

If you want to prevent this action, perform the steps given below:

1. Click Cookies on the far right corner.
2. In the Cookies modal under the Manage Cookies tab, click the Domains Allowlist at the bottom left.
3. Add automations-api.contentstack.com and click Add.

This will allow you to access [cookies of this domain in scripts](https://learning.postman.com/docs/sending-requests/cookies/#accessing-cookies-in-scripts) programmatically.

**Note:** To avoid this situation, we recommend you to use the Organization UID along with the Authtoken to make valid Automations Management API requests. For more information, refer to [Authentication](/docs/developer-apis/automation-hub-management-api#authentication).

### Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](/docs/developer-apis/automation-hub-management-api#download-latest-collection) again and you are good to go.

You can also choose to watch for the latest Postman Collection updates on our [GitHub repository](https://github.com/contentstack/contentstack-postman-collections/blob/collections/automate-collection.json) and get notifications of new releases or updates to the repository. The GitHub Readme doc will help you with the steps that you need to follow.

## Regions


| Region | Host |
|--------|------|

| North America | https://automations-api.contentstack.com |

| Europe | https://eu-prod-automations-api.contentstack.com |

| AWS - Australia | https://au-prod-automations-api.contentstack.com |

| Azure - North America | https://azure-na-automations-api.contentstack.com |

| Azure - Europe | https://azure-eu-automations-api.contentstack.com |

| GCP - North America | https://gcp-na-automations-api.contentstack.com |

| GCP - Europe | https://gcp-eu-automations-api.contentstack.com |
