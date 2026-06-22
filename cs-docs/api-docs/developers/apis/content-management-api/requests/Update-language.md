---
title: "Update language"
description: PUT /locales/{code}
url: developers/apis/content-management-api/requests/update-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Update language


**Method:** `PUT`  
**Endpoint:** `/locales/{code}`

The Update language call will let you update the details (such as display name) and the fallback language of an existing language of your stack.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of your language name and fallback language in JSON format.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| branch | main | Enter your branch unique ID. |

| code | your_language_code | Enter the code of the language that you wish to update. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
  "locale":{
    "name":"Updated Locale Name",
    "fallback_locale":"zh-cn"
  }
}
```

**Response (200):**

```json
{
    "notice": "Language updated successfully.",
    "locale": {
        "code": "ar-bh",
        "uid": "blt3e7b80f501b604ef",
        "created_by": "blt7b815b05d2fe5dd8",
        "updated_by": "blt7b815b05d2fe5dd8",
        "created_at": "2021-07-01T10:20:16.887Z",
        "updated_at": "2021-07-01T10:47:43.068Z",
        "fallback_locale": "zh-cn",
        "name": "Updated Locale Name",
        "ACL": {},
        "_version": 3
    }
}
```
