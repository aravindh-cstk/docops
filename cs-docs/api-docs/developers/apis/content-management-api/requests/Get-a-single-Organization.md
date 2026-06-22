---
title: "Get a single Organization"
description: GET /organizations/{organization_uid}?include_plan={boolean_value}
url: developers/apis/content-management-api/requests/get-a-single-organization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get a single Organization


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}?include_plan={boolean_value}`

The Get a single organization call gets the comprehensive details of a specific organization related to the system user.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| organization_uid | enter_the_organization_uid | Enter the UID of the organization that you want to retrieve. |

| include_plan | true | The include_plan parameter includes the details of the plan that the organization has subscribed to. To include the details of the subscribed plan in the Respon |

**Response (200):**

```json
{
	"organizations": [{
		"uid": "blt4444c44ea4ddf444",
		"name": "Sample2",
		"plan_id": "testing",
		"owner_uid": "blt22e22222d22d2f22222a2b2f",
		"is_transfer_set": false,
		"expires_on": "2020-01-31T00:00:00.000Z",
		"enabled": true,
		"is_over_usage_allowed": true,
		"created_at": "2016-09-30T05:08:10.076Z",
		"updated_at": "2019-04-18T08:45:57.936Z",
		"settings": {
			"sso": {
				"sso_roles": {
					"enabled": false
				}
			}
		},
		"plan": {
			"plan_id": "testing",
			"name": "Testing",
			"message": "",
			"price": "$0",
			"features": [{
					"uid": "users",
					"name": "Users",
					"limit": 1000,
					"enabled": true
				},
				{
					"uid": "stacks",
					"name": "Stacks",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "content_types",
					"name": "Content Types",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "assets",
					"name": "Assets",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "entries",
					"name": "Entries",
					"limit": 10000000,
					"enabled": true
				},
				{
					"uid": "environments",
					"name": "Environments",
					"limit": 40000000,
					"enabled": true
				},
				{
					"uid": "getLimit",
					"name": "GET Requests Limit",
					"limit": 100,
					"enabled": true
				},
				{
					"uid": "limit",
					"name": "API Requests Limit",
					"limit": 100,
					"enabled": true
				},
				{
					"uid": "bulkLimit",
					"name": "Bulk Requests Limit",
					"limit": 15,
					"enabled": true
				},
				{
					"uid": "sso",
					"name": "SSO",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "workflow",
					"name": "Workflow",
					"limit": 10,
					"enabled": true
				},
				{
					"uid": "globalSearch",
					"name": "globalSearch",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "extension",
					"name": "extension",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "extension_widget",
					"name": "Custom Widgets",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "maxExtensionScopeCtRef",
					"name": "Scope of CT for custom widgets",
					"limit": 23,
					"enabled": true
				},
				{
					"uid": "workflow_old_api",
					"name": "workflow_old_api",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "bulk-action",
					"name": "Bulk Action",
					"limit": 25,
					"enabled": true
				},
				{
					"uid": "ssoEntityId",
					"name": "SSO Entity ID",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "graphql",
					"name": "GraphQL",
					"limit": 100,
					"enabled": true
				},
				{
					"uid": "graphqlLimit",
					"name": "GraphQL Limit",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "deliveryTokens",
					"name": "Delivery Tokens",
					"limit": 3,
					"enabled": true
				},
				{
					"uid": "ssoRoles",
					"name": "SSO Roles",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "dashboard_widget",
					"name": "Dashboard Widget",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "total_extensions",
					"name": "Total Extensions",
					"limit": 50,
					"enabled": true
				},
				{
					"uid": "analyticsDashboard",
					"name": "Analytics Dashboard",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "maxDynamicBlocksPerContentType",
					"name": "maxDynamicBlocksPerContentType",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "maxDynamicBlockDefinations",
					"name": "maxDynamicBlockDefinations",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "maxDynamicBlockObjects",
					"name": "maxDynamicBlockObjects",
					"limit": 20,
					"enabled": true
				},
				{
					"uid": "dashboard",
					"name": "Dashboard",
					"enabled": true,
					"limit": 1
				},
				{
					"uid": "languageFallback",
					"name": "Fallback Language",
					"enabled": true,
					"limit": 1
				},
				{
					"uid": "fieldLevelLocalization",
					"name": "fieldLevelLocalization",
					"limit": 1,
					"enabled": true
				},
				{
					"uid": "stackCreationLimit",
					"name": "Stack Creation Limit",
					"enabled": true,
					"limit": 10
				},
				{
					"uid": "inProgressEntries",
					"name": "In-Progress Entries",
					"enabled": true,
					"limit": 1
				},
				{
					"uid": "publishLocalizedVersions",
					"name": "publishLocalizedVersions",
					"limit": 50,
					"enabled": false
				}
			],
			"created_at": "2017-12-15T12:18:34.602Z",
			"updated_at": "2019-07-11T12:52:44.965Z"
		},
		"owner": true
	}]
}
```
