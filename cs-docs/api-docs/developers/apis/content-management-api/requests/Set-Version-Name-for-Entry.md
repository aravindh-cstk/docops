---
title: "Set Version Name for Entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name
url: developers/apis/content-management-api/requests/set-version-name-for-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-04-24
---

# Set Version Name for Entry


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Set Version Name for Entry request allows you to assign a name to a specific version of an entry.

In the request body, you need to specify the version name to be assigned and the locale of the entry.

To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

**Tip**: You can add an additional parameter force:true to force update the version name of the master entry.

##### Get Details of All Versions of an Entry

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| content_type_uid | product | Enter the content type UID of the entry version to which you want to assign a specific name. |

| entry_uid | blt01638c90cc28fb6d | Enter the UID of the entry to which you want to assign a specific version name. |

| version_number | 1 | Enter the version number of the entry to which you want to assign a name. |

**Request Body:**

```json
{
	"entry": {
		"_version_name": "Test version",
		"locale": "fr-fr",
		"force": true
	}
}
```

**Response (201):**

```json
{
	"notice": "Version name assigned successfully"
}
```
