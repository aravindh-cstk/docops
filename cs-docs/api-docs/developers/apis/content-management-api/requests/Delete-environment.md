---
title: "Delete environment"
description: DELETE /environments/{environment_name}
url: developers/apis/content-management-api/requests/delete-environment
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Delete environment


**Method:** `DELETE`  
**Endpoint:** `/environments/{environment_name}`

The Delete environment call will delete an existing publishing environment from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| environment_name | development | Enter the name of the environment. |

**Response (200):**

```json
{
  "notice": "Environment deleted successfully."
}
```
