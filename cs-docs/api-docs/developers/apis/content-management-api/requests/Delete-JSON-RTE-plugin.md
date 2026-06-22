---
title: "Delete JSON RTE plugin"
description: DELETE /extensions/{json_rte_plugin_uid}
url: developers/apis/content-management-api/requests/delete-json-rte-plugin
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete JSON RTE plugin


**Method:** `DELETE`  
**Endpoint:** `/extensions/{json_rte_plugin_uid}`

The Delete JSON RTE plugin request allows you to delete a specific JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| json_rte_plugin_uid | blt123ea123b123a123f | Enter the UID of the JSON RTE plugin that you want to update. |

**Response (200):**

```json
{
    "notice": "Extension deleted successfully."
}
```
