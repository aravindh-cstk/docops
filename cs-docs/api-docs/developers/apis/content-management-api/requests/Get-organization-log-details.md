---
title: "Get organization log details"
description: GET /organizations/{organization_uid}/logs
url: developers/apis/content-management-api/requests/get-organization-log-details
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-16
---

# Get organization log details


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}/logs`

The Get organization log details request is used to retrieve the audit log details of an organization.

You can apply queries to filter the results. Refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section for more details.

When executing the API call, provide the Organization UID.

**Tip**: This request returns only the first **25 audit log items** of the specified organization. If you get more than **25 items** in your response, refer to the [Pagination](/docs/developers/apis/content-delivery-api#pagination) section to retrieve all the log items in a paginated form.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | Your_authtoken | Enter your authtoken. |

| organization_uid | 656s5d1c65ea6ddf287 | Enter the UID of a specific organization of which you want to retrieve the audit log details. |

**Response (200):**

```json
{
	"logs": [{
			"uid": "blt8a6de4d89d4dcffbd1b6",
			"org_uid": "blt3cbc7416a3d8a026",
			"created_at": "ISODate(2018 - 02 - 13 T12: 41: 24.625 Z)",
			"created_by": "bltdd494873d2e0fee7",
			"module": "user",
			"event_type": "share",
			"metadata": {
				"uid": "blt3cbc7416a3d8a026"
			},
			"remote_addr": "54.174.130.249",
			"request": {
				"share": {
					"users": [{
						"email": "contentstacktest+128@raweng.com",
						"org_roles": ["bltbd1cb8a0838069de"]
					}],
					"stacks": []
				}
			},
			"response": {
				"notice": "The invitation has been sent successfully.",
				"shares": [{
					"uid": "blt567a680139f45088",
					"email": "contentstacktest+128@raweng.com",
					"user_uid": null,
					"message": null,
					"org_uid": "blt3cbc7416a3d8a026",
					"org_roles": ["bltbd1cb8a0838069de"],
					"invited_by": "bltdd494873d2e0fee7",
					"invited_at": "ISODate(2018 - 02 - 13 T12:41: 24.617 Z)",
					"status": "pending",
					"created_at": "ISODate(2018-02-13 T12:41:24.615Z)",
					"updated_at": "ISODate(2018-02-13 T12:41:24.615Z)"
				}]
			}
		},
		{
			"uid": "blt5839ff8426cb98d7eddc",
			"org_uid": "blt84dad57ea71e7cbe",
			"created_at": "ISODate(2019-03-06T07:00:47.029Z)",
			"created_by": "bltd3bb71a3e7cfbf16",
			"module": "user",
			"event_type": "logout",
			"metadata": {
				"uid": "bltd3bb71a3e7cfbf16",
				"logout_at": "ISODate(2019-03-06T07:00:47.029Z)"
			},
			"remote_addr": "::ffff:127.0.0.1",
			"request": {},
			"response": {
				"notice": "systemUser.success.logout"
			}
		}
	]
}
```
