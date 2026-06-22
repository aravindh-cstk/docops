---
title: "Update fallback language"
description: PUT /locales/{locale_uid}
url: developers/apis/content-management-api/requests/update-fallback-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Update fallback language


**Method:** `PUT`  
**Endpoint:** `/locales/{locale_uid}`

The Update fallback language request allows you to update the fallback language for an existing language of your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

In the 'Body' section, enter the updated details of the fallback language in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Note**: The language set as a fallback language will always inherit data from the master language if it does not have localized content.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| branch | main | Enter your branch unique ID. |

| locale_code | zh-cn | Enter the language code of the language that you want to assign as a fallback language for an existing language of your stack. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
  "locale": {
    "name": "German",
    "code": "de",
    "fallback_locale": "en-us"
      }
}
```

**Response (201):**

```json
{
    "notice": "Language updated successfully.",
    "locale": {
        "code": "de",
        "name": "German",
        "fallback_locale": "en-us",
        "uid": "blt9627e0b4fe7b5986",
        "created_by": "blt58fb93b4f1c8e17b",
        "updated_by": "bltf6c2ef24db42bde6",
        "created_at": "2023-02-17T11:56:25.173Z",
        "updated_at": "2023-02-27T13:19:03.106Z",
        "ACL": {},
        "_version": 1
    }
}
```
