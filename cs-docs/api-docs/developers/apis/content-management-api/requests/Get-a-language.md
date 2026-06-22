---
title: "Get a language"
description: GET /locales/{code}
url: developers/apis/content-management-api/requests/get-a-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Get a language


**Method:** `GET`  
**Endpoint:** `/locales/{code}`

The Get a language call returns information about a specific language available on the stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| code | fr-fr | Enter the code of the language that you want to retrieve. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
  "locale": {
    "code": "zh-cn",
    "uid": "qwertyuiop123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "name": "Chinese - China",
    "ACL": {},
    "_version": 1,
    "tags": []
  }
}
```
