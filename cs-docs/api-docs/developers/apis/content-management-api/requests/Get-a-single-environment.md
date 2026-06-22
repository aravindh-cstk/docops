---
title: "Get a single environment"
description: GET /environments/{environment_name}
url: developers/apis/content-management-api/requests/get-a-single-environment
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Get a single environment


**Method:** `GET`  
**Endpoint:** `/environments/{environment_name}`

The Get a single environment call returns more details about the specified environment of a stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.environments.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| environment_name | development | Enter the name of the environment. |

**Response (200):**

```json
{
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
