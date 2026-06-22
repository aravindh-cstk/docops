---
title: "Delete entries and assets in bulk"
description: POST /bulk/delete
url: developers/apis/content-management-api/requests/delete-entries-and-assets-in-bulk
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-04
---

# Delete entries and assets in bulk


**Method:** `POST`  
**Endpoint:** `/bulk/delete`

The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time.  
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:delete scope.

**Note**: At a time, you can delete **100****entries** in a bulk delete request.

In the 'Body' section, you need to specify the content type UIDs, entry UIDs or asset UIDs, and locales of which the entries or assets you want to delete.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

**Request Body:**

```json
{
    "entries":[{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}}",
        "locale":"{{locale}}"
    },{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}",
        "locale":"{{entry_locale}}"
    }
    ],
     "assets": [{
         "uid": "{{uid}}"
     }]
}
```

**Response (200):**

```json
{
    "notice": "Your bulk delete request is in progress. Please check bulk task queue for more details."
}
```
