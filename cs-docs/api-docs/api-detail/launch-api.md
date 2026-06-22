---
title: "Launch API"
description: The Launch API lets you manage projects, environments, and deployments within your Contentstack Launch workspace via REST endpoints.
url: launch-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: unknown
last_updated: 2026-01-13
---

# Launch API


## Introduction

### Overview

The Launch API lets you manage all the resources (Projects, Environments and Deployments) in your Launch project using REST API. This documentation provides information on endpoints, operations, parameters, and responses for the Contentstack Launch API.

### Base URLs

**For Launch API(s)**

- AWS US (North America, or NA): https://launch-api.contentstack.com
- AWS Europe (EU): https://eu-launch-api.contentstack.com
- AWS Australia (AU): https://au-launch-api.contentstack.com
- Azure North America (Azure NA): https://azure-na-launch-api.contentstack.com
- Azure Europe (Azure EU): https://azure-eu-launch-api.contentstack.com
- GCP North America (GCP NA): https://gcp-na-launch-api.contentstack.com
- GCP Europe (GCP EU): https://gcp-eu-launch-api.contentstack.com

### Authentication

Contentstack provides you with two ways to authenticate the API requests:

- Contentstack OAuth: The Contentstack OAuth server generates access tokens for both users and apps (Machine-to-Machine), allowing client applications to access restricted data on behalf of the resource owner. Read more about how to generate a Contentstack OAuth token.
- Authtoken: A user-specific session token, used to make authorized Launch requests. Learn how to get authtoken.

#### OAuth Token-based Authentication

- Pass the OAuth Token value against the Authorization parameter as header.Example:Authorization: Bearer <access_token>

#### OAuth Scopes for Launch APIs

| Scopes | Description | APIs | Supports Tokens |
| --- | --- | --- | --- |
| launch:manage | This scope lets you read, update, and manage resources | Get all Projects | user token, app token |
|   |   | Get a Project | user token, app token |
|   |   | Create a Project (Using Git Provider) | user token |
|   |   | Create a Project (Using File Upload) | user token, app token |
|   |   | Update a Project | user token, app token |
|   |   | Delete a Project | user token, app token |
|   |   | Get all Environments | user token, app token |
|   |   | Get an Environment | user token, app token |
|   |   | Create an Environment (Using Git Provider) | user token |
|   |   | Create an Environment (Using File Upload) | user token, app token |
|   |   | Update an Environment | user token, app token |
|   |   | Delete an Environment | user token, app token |
|   |   | Revalidate CDN Cache | user token, app token |
|   |   | Get a Signed Upload URL for a Project | user token, app token |
|   |   | Get a Signed Upload URL for an Environment | user token, app token |
|   |   | Get a Signed Upload URL for a Deployment | user token, app token |
|   |   | Get a Download URL for the Uploaded File | user token, app token |
|   |   | Get all Deployments | user token, app token |
|   |   | Get a Deployment | user token, app token |
|   |   | Create a Deployment (Using Git Provider) | user token |
|   |   | Create a Deployment (Using Previously Uploaded File) | user token, app token |
|   |   | Create a Deployment (Using Newly Uploaded File) | user token, app token |
|   |   | Get Deployment Logs | user token, app token |
|   |   | Get Server Logs | user token, app token |
| launch.projects:read | This scope lets you read resources | Get all Projects | user token, app token |
|   |   | Get a Project | user token, app token |
|   |   | Get all Environments | user token, app token |
|   |   | Get an Environment | user token, app token |
|   |   | Get all Deployments | user token, app token |
|   |   | Get a Deployment | user token, app token |
|   |   | Get a Download URL for the Uploaded File | user token, app token |
|   |   | Get Deployment Logs | user token, app token |
|   |   | Get Server Logs | user token, app token |
| launch.projects:write | This scope lets you create and update resources | Create a Project (Using Git Provider) | user token |
|   |   | Create a Project (Using File Upload) | user token, app token |
|   |   | Get a Signed Upload URL for a Project | user token, app token |
|   |   | Update a Project | user token, app token |
|   |   | Create an Environment (Using Git Provider) | user token |
|   |   | Create an Environment (Using File Upload) | user token, app token |
|   |   | Get a Signed Upload URL for an Environment | user token, app token |
|   |   | Update an Environment | user token, app token |
|   |   | Create a Deployment (Using Git Provider) | user token |
|   |   | Create a Deployment (Using Previously Uploaded File) | user token, app token |
|   |   | Create a Deployment (Using Newly Uploaded File) | user token, app token |
|   |   | Get a Signed Upload URL for a Deployment | user token, app token |
|   |   | Revalidate CDN Cache | user token, app token |
| launch.projects:delete | This scope lets you delete resources | Delete a Project | user token, app token |
|   |   | Delete an Environment | user token, app token |

#### Auth Token-based Authentication

- Pass the user Authtoken against the authtoken parameter as header.
- Pass the organization UID against the organization_uid parameter as header.Example:authtoken: <authtoken>organization_uid: blt483xxxxxxx3589

#### Authtokens vs OAuth Token

An Authtoken is a read-write token used to make authorized Contentstack Launch API requests, and it is a user-specific token. This means that your personal user details are attached to every API request that you make using the authtoken. So, if a person were to obtain access to your authtoken, and knew the Project UID, this person would be able to make API requests that appeared to be coming from you.

Contentstack OAuth employs the **OAuth 2.0 protocol**, enabling external applications to access Contentstack APIs on behalf of users. It issues access tokens (User and App tokens) to client applications, allowing them to retrieve restricted data from the Contentstack resource server without the need for the resource owner to share their credentials. Learn more about [Contentstack OAuth](/docs/developers/developer-hub/contentstack-oauth) and [OAuth Scopes](/docs/developers/developer-hub/oauth-scopes).

**For Launch APIs, we recommend using the**[**Contentstack OAuth**](/docs/developers/developer-hub/contentstack-oauth) **tokens.**

**Note:** When trying out POST/PUT calls, in addition to the Project UID and Authtoken, you **must** pass Content-Type:application/json in the Header.

#### How to Get Project UID

To retrieve the project UID, perform the steps given below:

1. Navigate to Launch > your preferred project.
2. Click the Settings icon in the top navigation panel.
3. In the General tab, under Project Details, you find the 24-character project UID.
4. Click the Copy icon to copy the project UID to your clipboard which will be used for the API calls.

#### How to Get Authtoken

To retrieve the authtoken, log in to your Contentstack account by using the "[Log in to your account](/docs/developers/apis/content-management-api/#logging-in-out)" request under "[User Session](/docs/developers/apis/content-management-api/#user-session)". This request will return the authtoken in the response body.

You can generate multiple authtokens by executing the "[Log in to your account](/docs/developers/apis/content-management-api/#logging-in-out)" request multiple times. These tokens do not have an expiration time limit. However, currently, there is a maximum limit of **20 valid tokens** that a user can use per account at a time, to execute the Launch API requests.

**Warning:** If you already have valid 20 tokens, creating a new authtoken will automatically cause the oldest authtoken to expire without warning.

For SSO-enabled organizations, the "[Log in to your account](/docs/developers/apis/content-management-api/#logging-in-out)" request will not return the user authtoken for users who access the organization through Identity Provider login credentials. Consequently, any requests that require user authtoken will not work. Only the owner of the organization and users with permission to access the organization without SSO can use the Launch APIs. Learn more about [REST API Usage](/docs/developers/single-sign-on/rest-api-usage).

#### How to Get OAuth Tokens

To get the OAuth Token, perform the steps given within the [Configuring Contentstack OAuth](/docs/developers/developer-hub/contentstack-oauth#configuring-contentstack-oauth) section after logging into your Contentstack account.

**Note:** Only the organization [Owners](/docs/developers/organization/organization-roles#organization-owner) and [Admins](/docs/developers/organization/organization-roles#organization-admin) can create OAuth Tokens.

### Rate Limiting

Rate limit is the maximum number of requests you can make using Contentstack’s APIs in a given time period.

By default, the Launch API enforces the following rate limits:

- Launch Read (GET) and Manage (POST/PUT/PATCH) requests: 10 requests per second per organization.

Your application will receive the **HTTP 429 response code** if the requests for a given time period exceed the defined rate limits.

The aforementioned limits are configurable depending on your plan. For more information, contact our [support](mailto:support@contentstack.com) team.

### API Conventions

- Currently, the base URL for Launch API is available for all the regions and can be found in the Base URLs section.
- Launch API supports GET/POST/PUT/DELETE verbs or methods.
- URL paths are written in lowercase.
- Query parameters and JSON fields use camel case. For example: uploadUid
- The success/failure status of an operation is determined by the HTTP status it returns. Additional information is included in the HTTP response body.

### Errors

If there is something wrong with the API request, Contentstack returns an error.

Launch uses conventional, standard HTTP status codes for errors, and returns a JSON body containing details about the error. In general, codes in the 2xx range signify success. The codes in the 4xx range indicate error, mainly due to information provided (for example, a required parameter or field was omitted). Lastly, codes in the 5xx range mean that there is something wrong with Contentstack’s servers; it is very rare though.

Let’s look at the error codes and their meanings.

| HTTP status code | Description |
| --- | --- |
| 400 Bad Request | The request was incorrect or corrupted. |
| 401 Access Denied | The login credentials are invalid. |
| 403 Forbidden Error | The page or resource that is being accessed is forbidden. |
| 404 Not Found | The requested page or resource could not be found. |
| 409 Conflict | Resources with the same name already exist. |
| 500 Internal Server Error | The server is malfunctioning and is not specific about what the problem is. |
| 502 Bad Gateway Error | A server received an invalid response from another server. |
| 504 Gateway Timeout Error | A server did not receive a timely response from another server that it was accessing while attempting to load the web page or fill another request by the browser. |

**Note:**The error codes that we get in the JSON response are not HTTP error codes but are custom Contentstack error codes that are used for internal purposes.

### Using OpenAPI Files

Contentstack provides the OpenAPI files of Contentstack’s Launch APIs that you can use to try out Contentstack APIs on any OpenAPI platform such as Swagger. You can download the OpenAPI JSON file of the Launch API and open it on Swagger Editor to start using it.

To use Contentstack Launch APIs with Swagger, perform the following steps:

1. Download the JSON file from the above endpoints and go to Swagger Editor.
2. On the Swagger Editor page, click File, and select the Import File option.

#### Region-specific OpenAPI URLs

- AWS NA: https://launch-api.contentstack.com/openapi
- AWS EU: https://eu-launch-api.contentstack.com/openapi
- AWS AU: https://au-launch-api.contentstack.com/openapi
- Azure NA: https://azure-na-launch-api.contentstack.com/openapi
- Azure EU: https://azure-eu-launch-api.contentstack.com/openapi
- GCP NA: https://gcp-na-launch-api.contentstack.com/openapi
- GCP EU: https://gcp-eu-launch-api.contentstack.com/openapi

## Regions


| Region | Host |
|--------|------|

| North America | https://launch-api.contentstack.com |

| Europe | https://eu-launch-api.contentstack.com |

| AWS - Australia | https://au-launch-api.contentstack.com |

| Azure - North America | https://azure-na-launch-api.contentstack.com |

| Azure - Europe | https://azure-eu-launch-api.contentstack.com |

| GCP - North America | https://gcp-na-launch-api.contentstack.com |

| GCP - Europe | https://gcp-eu-launch-api.contentstack.com |
