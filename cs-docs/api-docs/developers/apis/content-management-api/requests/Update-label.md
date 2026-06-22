---
title: "Update label"
description: PUT /labels/{label_uid}
url: developers/apis/content-management-api/requests/update-label
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-25
---

# Update label


**Method:** `PUT`  
**Endpoint:** `/labels/{label_uid}`

The Update label call is used to update an existing label.

When executing the API call add the label_uid as a URL parameter and management_token in the Authorization parameters.

In the 'Body' section, enter the updated details of your label, which include the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| branch | main | Enter your branch unique ID. |

| label_uid | blt5d1761bce4b36d57 | Enter the unique ID of the label that needs to be updated. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

**Response (200):**

```json
{
	"notice": "Label updated successfully.",
	"label": {
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"updated_by": "sys_bltf123456789012",
		"created_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"tags": [],
		"content_types": [],
		"_version": "2",
		"isLabel": true
	}
}
```
