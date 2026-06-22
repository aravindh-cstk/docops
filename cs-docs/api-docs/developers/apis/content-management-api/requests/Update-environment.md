---
title: "Update environment"
description: PUT /environments/{environment_name}
url: developers/apis/content-management-api/requests/update-environment
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Update environment


**Method:** `PUT`  
**Endpoint:** `/environments/{environment_name}`

The Update environment call will update the details of an existing publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of the environment. You can modify the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| environment_name | development | Enter the name of the environment. |

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

**Response (200):**

```json
{
  "notice": "Environment updated successfully.",
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
