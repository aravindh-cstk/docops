---
title: "Personalize Management API"
description: The Personalize Management API lets you manage all the resources (Attributes, Audiences, Events, and Experiences) in your Personalize project using REST API.
url: personalize-management-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: unknown
last_updated: 2026-04-24
---

# Personalize Management API


## Introduction

### Overview

The Personalize Management API lets you manage all the resources (Attributes, Audiences, Events, and Experiences) in your Personalize project using REST API. This documentation provides information on endpoints, operations, parameters, and responses for the Contentstack Personalize Management API.

### Base URL

**For Personalize Management API**

- AWS US (North America, or NA): https://personalize-api.contentstack.com
- AWS Europe (EU): https://eu-personalize-api.contentstack.com
- Azure North America (Azure NA): https://azure-na-personalize-api.contentstack.com
- Azure Europe (Azure EU): https://azure-eu-personalize-api.contentstack.com
- GCP North America (GCP NA): https://gcp-na-personalize-api.contentstack.com
- GCP Europe (GCP EU): https://gcp-eu-personalize-api.contentstack.com
- AWS Australia (AU): https://au-personalize-api.contentstack.com

### Authentication

Contentstack provides you two ways to authenticate the API requests:

- Contentstack OAuth: Contentstack OAuth server generates access tokens (currently only User tokens), which client applications can employ to retrieve restricted data on behalf of the resource owner. Read more about how to generate a Contentstack OAuth token.
- Authtoken: A user-specific session token, used along with the stack API key, to make authorized Content Management requests. For more information please refer to this documentation.

The OAuth scopes available for Personalize Management API authorization are:

- personalize:manage: This scope lets you read, update and manage resources.
- personalize:read: This scope lets you only read and fetch the resources.

**For Project UID and Authtoken-based authentication**

- Pass the Project’s UID against the x-project-uid parameter as header.
- Pass the user Authtoken against the authtoken parameter as header.

**For Project UID and OAuth Token-based authentication**

- Pass the Project’s UID against the x-project-uid parameter as header for project-based APIs.
- Pass the OAuth Token value against the authorization parameter as header.

**Authtokens vs OAuth Token**

An [Authtoken](/docs/developers/create-tokens/types-of-tokens#authentication-tokens-authtokens) is a read-write token used to make authorized Contentstack Personalize Management API requests, and it is a user-specific token. This means that your personal user details are attached to every API request that you make using the authtoken. So, if a person were to obtain access to your authtoken, and knows the Project UID, this person would be able to make API requests that appeared to be coming from you.

Contentstack OAuth employs the OAuth 2.0 protocol, enabling external applications to access Contentstack APIs on behalf of users. It issues access tokens (currently only User tokens) to client applications, allowing them to retrieve restricted data from the Contentstack resource server without the need for the resource owner to share their credentials. Learn more about [Contentstack OAuth](/docs/developers/developer-hub/contentstack-oauth) and [OAuth Scopes](/docs/developers/developer-hub/oauth-scopes).

**For Personalize Management API, we recommend using the**[**Contentstack OAuth**](/docs/developers/developer-hub/contentstack-oauth)**tokens.**

**Note:** When trying out POST/PUT calls, in addition to the Project UID and Authtoken, you need to mandatorily pass Content-Type:application/json in the Header.

**How to Get Project UID**

To retrieve the project UID, perform the steps given below:

1. Navigate to Personalize > your preferred project.
2. Click the Settings icon in the left navigation panel.
3. In the General tab, under Project Details, you will find the 24-character project UID.
4. Click the Copy icon to copy the project UID to your clipboard which will be used for the API calls.

#### How to Get Authtoken

To retrieve the authtoken, log in to your Contentstack account by using the "[Log in to your account](/docs/developers/apis/content-management-api/#logging-in-out)" request under "[User Session](/docs/developers/apis/content-management-api/#user-session)". This request will return the authtoken in the response body.

You can generate multiple authtokens by executing the "[Log in to your account](/docs/developers/apis/content-management-api/#logging-in-out)" request multiple times. These tokens do not have an expiration time limit. However, currently, there is a maximum limit of 20 valid tokens that a user can use per account at a time, to execute Personalize Management API requests. If you already have valid 20 tokens, creating a new authtoken will automatically cause the oldest authtoken to expire without warning.

For SSO-enabled organizations, the "[Log in to your account](/docs/developers/apis/content-management-api/#logging-in-out)" request will not return the user authtoken for users who access the organization through Identity Provider login credentials. Consequently, any requests that require user authtoken will not work. Only the owner of the organization and users with permission to access the organization without SSO can use the Personalize Management APIs. Learn more about [REST API Usage](/docs/developers/single-sign-on/rest-api-usage).

#### How to Get OAuth Tokens

To get the OAuth Token, perform the steps given within the [Configuring Contentstack OAuth](/docs/developers/developer-hub/contentstack-oauth#configuring-contentstack-oauth) section after logging into your Contentstack account.

**Note:** Only the organization Owner and Admin users can create OAuth Tokens.

### Rate Limiting

Rate limit is the maximum number of requests you can make using the Contentstack’s APIs in a given time period.

By default, the Personalize Management API enforces the following rate limits:

- Personalize Read (GET) and Manage (POST/PUT/PATCH) requests: 10 requests per second per organization.

Your application will receive the HTTP 429 response code if the requests for a given time period exceed the defined rate limits.

The aforementioned limits are configurable depending on your plan. For more information, contact our [support team](mailto:support@contentstack.com).

### API Conventions

- Currently, the base URL for Personalize Management API is available for all the regions and can be found in the Base URL section.
- Personalize Management API supports GET/POST/PUT/DELETE verbs or methods.
- URL paths are written in lower case.
- Query parameters and JSON fields use camel casing.
- The success/failure status of an operation is determined by the HTTP status it returns. Additional information is included in the HTTP response body.

### Errors

If there is something wrong with the API request, Contentstack returns an error.

Personalize uses conventional, standard HTTP status codes for errors, and returns a JSON body containing details about the error. In general, codes in the 2xx range signify success. The codes in the 4xx range indicate error, mainly due to information provided (for example, a required parameter or field was omitted). Lastly, codes in the 5xx range mean that there is something wrong with our servers; it is very rare though.

Let’s look at the error code and their meanings.

  
    

| HTTP status code | Description |
| --- | --- |
| 400 Bad Request | The request was incorrect or corrupted. |
| 401 Unauthorized User | The user is not authorized. |
| 403 Forbidden Error | The page or resource that is being accessed is forbidden. |
| 404 Not Found | The requested page or resource could not be found. |
| 500 Internal Server Error | The server is malfunctioning and is not specific on what the problem is. |
| 502 Bad Gateway Error | A server received an invalid response from another server. |
| 504 Gateway Timeout Error | A server did not receive a timely response from another server that it was accessing while attempting to load the web page or fill another request by the browser. |

  

**Note:**The error codes that we get in the JSON response are not HTTP error codes but are custom Contentstack error codes that are used for internal purposes.

### Using OpenAPI Files

Contentstack provides the OpenAPI files of the Contentstack’s Personalize Management APIs that you can use to try out Contentstack APIs on any OpenAPI platform such as Swagger. You can download the [OpenAPI JSON file](https://personalize-api.contentstack.com/openapi) of the Personalize Management API and open it on Swagger Editor to start using it.

To use Contentstack Personalize Management APIs with Swagger, perform the following steps:

1. Download the JSON file from the above endpoints and go to Swagger Editor.
2. On the Swagger Editor page, click File, and select the Import file option.
3. To run any API request, enter either the OAuth token or Authtoken to authorize.
4. Open any API request and click the Try it out button. Clicking this button will unlock the fields.
5. Click Execute to run the API request.

## Regions


| Region | Host |
|--------|------|

| North America | https://personalize-api.contentstack.com |

| Europe | https://eu-personalize-api.contentstack.com |

| AWS - Australia | https://au-personalize-api.contentstack.com |

| Azure - North America | https://azure-na-personalize-api.contentstack.com |

| Azure - Europe | https://azure-eu-personalize-api.contentstack.com |

| GCP - North America | https://gcp-na-personalize-api.contentstack.com |

| GCP - Europe | https://gcp-eu-personalize-api.contentstack.com |
