---
title: "Delete Content Type"
description: DELETE /content_types/{content_type_uid}?force={boolean value}
url: developers/apis/content-management-api/requests/delete-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete Content Type


**Method:** `DELETE`  
**Endpoint:** `/content_types/{content_type_uid}?force={boolean value}`

The Delete Content Type call deletes an existing content type and all the entries within it.

When executing the API call, in the “URL Parameters” section, provide the UID of your content type.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | your_content_type_uid | Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is |

| force | false | Enter 'true' to force delete a content type. |

**Response (200):**

```json
{
	"notice": "Content Type deleted successfully."
}
```
