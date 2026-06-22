---
title: "Delete global field"
description: DELETE /global_fields/{global_field_uid}?force=true
url: developers/apis/content-management-api/requests/delete-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete global field


**Method:** `DELETE`  
**Endpoint:** `/global_fields/{global_field_uid}?force=true`

The Delete global field request allows you to delete a specific global field.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Warning**: If your Global field has been referred within a particular content type, then you will need to pass an additional query parameter force:true to delete the Global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| global_field_uid | global_field_uid | Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is |

| force | true | Set the force parameter to 'true' to delete the Global field. |

**Response (200):**

```json
{
  "notice": "Global Field deleted successfully."
}
```
