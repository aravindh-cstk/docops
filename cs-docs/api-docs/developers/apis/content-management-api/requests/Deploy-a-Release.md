---
title: "Deploy a Release"
description: POST /releases/{release_uid}/deploy
url: developers/apis/content-management-api/requests/deploy-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Deploy a Release


**Method:** `POST`  
**Endpoint:** `/releases/{release_uid}/deploy`

The Deploy a Release request deploys a specific Release to specific environment(s) and locale(s).

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the Release that you want to deploy. For example, you need to provide the scheduled time (in case of scheduled release), action, and environment(s) on which the Release should be deployed.

To configure the permissions for your application via OAuth, please include the cm.release:deploy scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter application/json to pass a request body. |

| branch | main | Enter your branch unique ID. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release which you want to deploy on a specific environment and locale. |

**Request Body:**

```json
{
	"release": {
		"scheduled_at": "2018-12-12T13:13:13.122Z",
		"action": "publish/unpublish",
		"environments": [
			"Production",
			"UAT"
		]
	}
}
```

**Response (200):**

```json
{
	"notice": "Release sent successfully for deployment."
}
```
