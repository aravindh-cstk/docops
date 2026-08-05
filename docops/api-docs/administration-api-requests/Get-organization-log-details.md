---
title: "Get organization log details"
description: /organizations/{organization_uid}/logs
url: /get-organization-log-details
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:20.399Z
updated_at: 2026-04-07T12:55:20.399Z
---

# Get organization log details

<p>The <span class="code">Get organization log details</span> request is used to retrieve the audit log details of an organization.</p><p>You can apply queries to filter the results. Refer to the <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a> section for more details.</p><p>When executing the API call, provide the Organization UID.</p><p class="tip"><strong>Tip</strong>: This request returns only the first <strong>25 audit log items</strong> of the specified organization. If you get more than <strong>25 items</strong> in your response, refer to the <a href="/docs/developers/apis/content-delivery-api#pagination" target="_self">Pagination</a> section to retrieve all the log items in a paginated form.</p>

**API Endpoint**: `/organizations/{organization_uid}/logs`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of a specific organization of which you want to retrieve the audit log details.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

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

