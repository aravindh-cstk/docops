---
title: "Set Version Name for Asset"
description: POST /assets/{asset_uid}/versions/{version_number}/name
url: developers/apis/content-management-api/requests/set-version-name-for-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Set Version Name for Asset


**Method:** `POST`  
**Endpoint:** `/assets/{asset_uid}/versions/{version_number}/name`

The Set Version Name for Asset request allows you to assign a name to a specific version of an asset.

In the request body, you need to specify the version name to be assigned to the asset version.

To configure the permissions for your application via OAuth, please include the cm.asset:writescope.

##### Get Details of All Versions of an Asset

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| asset_uid | blt04d762f8af902c97 | Enter the UID of the asset of which you want to assign a name to a specific asset version. |

| version_number | 2 | Enter the version number of the asset version that you want to assign a name to. |

**Request Body:**

```json
{
	"upload": {
		"_version_name": "Version name"
	}
}
```

**Response (201):**

```json
{
	"notice": "Version name assigned successfully."
}
```
