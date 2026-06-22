---
title: "Delete language"
description: DELETE /locales/{code}
url: developers/apis/content-management-api/requests/delete-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Delete language


**Method:** `DELETE`  
**Endpoint:** `/locales/{code}`

The Delete language call deletes an existing language from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of your stack |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| code | fr-fr | Enter the code of the language that you wish to delete. |

**Response (200):**

```json
{
  "notice": "Language removed successfully."
}
```
