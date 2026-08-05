---
title: "Personalize Edge API"
description: The Personalize Edge API lets you set and manage user attributes, get manifest, and track events for your Personalize project
url: personalize-edge-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: x.x.1
last_updated: 2025-11-21
---

# Personalize Edge API


## Introduction

### Overview

The Personalize Edge API enables real-time, dynamic interactions closer to the end user by utilizing [edge computing](/blog/tech-talk/revolutionizing-digital-experiences-with-edge-computing) infrastructure to retrieve your personalized content and display it to your visitors on your digital properties.

This documentation provides information on endpoints, operations, parameters, and responses for the Contentstack Personalize Edge API. The API allows you to set and manage user attributes, get manifest, and track events for your Personalize project.

### Base URL

**For Personalize Edge API**

- AWS US (North America, or NA): https://personalize-edge.contentstack.com
- AWS Europe (EU): https://eu-personalize-edge.contentstack.com
- Azure North America (Azure NA): https://azure-na-personalize-edge.contentstack.com
- Azure Europe (Azure EU): https://azure-eu-personalize-edge.contentstack.com
- GCP North America (GCP NA): https://gcp-na-personalize-edge.contentstack.com
- GCP Europe (GCP EU): https://gcp-eu-personalize-edge.contentstack.com
- AWS Australia (AU): https://au-personalize-edge.contentstack.com

### Authentication

The Personalize Edge API **does not** require any authentication since it is used on the public facing digital properties.

#### Headers

Some endpoints require x-cs-personalize-user-uid and x-project-uid headers for user and project identification.

**For Project User UID, and Project UID**

- Pass the Personalize User’s UID against the x-cs-personalize-user-uid parameter as header.
- Pass the Project’s UID against the x-project-uid parameter as header for project-based APIs.

**Note:** When trying out POST/PUT calls, for Project UID, you need to mandatorily pass Content-Type:application/json in the Header.

**How to Get Project UID**

To retrieve the project UID, perform the steps given below:

1. Navigate to Personalize > your preferred project.
2. Click the Settings icon in the left navigation panel.
3. In the General tab, under Project Details, you will find the 24-character project UID.
4. Click the Copy icon to copy the project UID to your clipboard which will be used for the API calls.

**How to get Personalize User’s UID**

To retrieve the user’s UID, perform the steps given below:

1. Run the Get Manifest API request without a User UID.
2. From the Response Headers, copy your x-cs-personalize-user-uid: 60******-****-****-****-**********50

### API Conventions

- Currently, the base URL for Personalize Edge API is available for all the regions and can be found in the Base URL section.
- Personalize Edge API supports GET/POST/PATCH verbs or methods.
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

Contentstack provides the OpenAPI files of the Contentstack’s Personalize Edge APIs that you can use to try out Contentstack APIs on any OpenAPI platform such as Swagger. You can download the [OpenAPI JSON file](https://personalize-edge.contentstack.com/openapi) of the Personalize Management API and open it on Swagger Editor to start using it.

To use Contentstack Personalize Management APIs with Swagger, perform the following steps:

1. Download the JSON file from the above endpoints and go to Swagger Editor.
2. On the Swagger Editor page, click File, and select the Import file option.
3. Open any API request and click the Try it out button. Clicking this button will unlock the fields for you to add the values for x-cs-personalize-user-uid and x-project-uid.
4. Open any API request and click the Try it out button. Clicking this button will unlock the fields.
5. Click Execute to run the API request.

## Regions


| Region | Host |
|--------|------|

| North America | https://personalize-edge.contentstack.com |

| Europe | https://eu-personalize-edge.contentstack.com |

| Azure - North America | https://azure-na-personalize-edge.contentstack.com |

| Azure - Europe | https://azure-eu-personalize-edge.contentstack.com |

| GCP - North America | https://gcp-na-personalize-edge.contentstack.com |

| GCP - Europe | https://gcp-eu-personalize-edge.contentstack.com |

| AWS - Australia | https://au-personalize-edge.contentstack.com |
