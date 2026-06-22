---
title: "Delete label"
description: DELETE /labels/{label_uid}
url: developers/apis/content-management-api/requests/delete-label
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-25
---

# Delete label


**Method:** `DELETE`  
**Endpoint:** `/labels/{label_uid}`

The Delete label call is used to delete a specific label.

When executing the API call, add the management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| label_uid | blt5d1761bce4b36d57 | Enter the unique ID of the label that you want to delete. |

**Response (200):**

```json
{
  "notice": "Label deleted successfully."
}
```
