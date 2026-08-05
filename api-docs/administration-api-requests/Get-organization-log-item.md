---
title: "Get organization log item"
description: /organizations/{organization_uid}/logs/{log_uid}
url: /get-organization-log-item
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:22.510Z
updated_at: 2026-04-07T12:55:22.510Z
---

# Get organization log item

<p>The <span class="code">Get organization log item</span> request is used to retrieve a specific item from the audit log of an organization.</p><p>When executing the <span data-type='inlineCode'>Get organization log details</span> request, you get the Organization UID and Log UID. Use these values to execute the <span><span data-type='inlineCode'>Get organization log item</span></span> API request.</p>

**API Endpoint**: `/organizations/{organization_uid}/logs/{log_uid}`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of a specific organization of which you want to retrieve the audit log details.</p>
- **log_uid** (required)
  <p>Enter the UID of a specific log item of which you want to retrieve the details.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

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

