---
title: "Get organization log item"
description: GET /organizations/{organization_uid}/logs/{log_uid}
url: administration-api-requests/item
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Get organization log item

**GET** `/organizations/{organization_uid}/logs/{log_uid}`

The Get organization log item request is used to retrieve a specific item from the audit log of an organization.

When executing the Get organization log details request, you get the Organization UID and Log UID. Use these values to execute the Get organization log item API request.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of a specific organization of which you want to retrieve the audit log details.
  Default: `656s5d1c65ea6ddf287`
- **log_uid** (required)
  Enter the UID of a specific log item of which you want to retrieve the details.
  Default: `bget22758ff32ccd88ece`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_authtoken`

## Sample Response

```json
{
	"log": {
		"uid": "blt8a6de4d89d4dcffbd1b6",
		"org_uid": "blt3cbc7416a3d8a026",
		"created_at": "ISODate(2018-02-13T12:41:24.625Z)",
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
				"invited_at": "ISODate(2018-02-13T12:41:24.617Z)",
				"status": "pending",
				"created_at": "ISODate(2018-02-13T12:41:24.615Z)",
				"updated_at": "ISODate(2018-02-13T12:41:24.615Z)"
			}]
		}
	}
}
```

