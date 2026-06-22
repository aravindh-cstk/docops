---
title: "Add an environment"
description: POST /environments
url: developers/apis/content-management-api/requests/add-an-environment
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Add an environment


**Method:** `POST`  
**Endpoint:** `/environments`

The Add an environment call will add a publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, mention the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

**Request Body:**

```json
{
	"environment": {
		"name": "development",
		"urls": [{
			"locale": "en-us",
			"url": "http://example.com/"
		}]
	}
}
```

**Response (201):**

```json
{
  "notice": "Environment created successfully.",
  "environment": {
    "name": "production",
     "urls": [
      {
        "locale": "en-us",
        "url": "http://example.com/"
      }
    ],
    "uid": "asdfghjkl123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "tags": [],
    "_version": 1
  }
}
```
