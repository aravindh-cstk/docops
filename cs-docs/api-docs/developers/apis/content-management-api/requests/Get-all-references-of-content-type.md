---
title: "Get all references of content type"
description: GET /content_types/{content_type_uid}/references?include_global_fields={boolean_value}
url: developers/apis/content-management-api/requests/get-all-references-of-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-08
---

# Get all references of content type


**Method:** `GET`  
**Endpoint:** `/content_types/{content_type_uid}/references?include_global_fields={boolean_value}`

The Get all references of content type request retrieves a list of all content types where the specified content type is referenced. This includes both direct and nested references.

For example, if content type A is referenced in B, B in C, then making this request for C will return A and B.

This ensures you have complete visibility into every referenced content type, direct or nested, within the specified content type.

To configure the permissions for your application via OAuth, please include the cm.content-type:readscope.

Additionally, to fetch all Global fields in which the specified content type is referenced, you need to pass include_global_fields as a query parameter. Set this parameter to true to include the Global fields along with the content types.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| content_type_uid | brand | Enter the unique ID of the content type of which you wish to retrieve the references. The Unique ID of a content type is unique across a stack. |

| include_global_fields | true | Set the include_global_fields parameter to “true” to retrieve all the Global fields in which the specified content type is referenced. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"references": [
		"Product",
		"Blog"
	]
}
```
