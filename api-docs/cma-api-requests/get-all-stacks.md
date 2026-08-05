---
title: "Get all stacks"
description: /stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}
url: /get-all-stacks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:07.494Z
updated_at: 2023-01-05T14:09:07.494Z
---

# Get all stacks

<p>The <span data-type="inlineCode">Get all stacks</span> call fetches the list of all stacks owned by and shared with a particular user account.</p>
<p class="note"><strong>Note</strong>: For SSO-enabled organizations, it is mandatory to pass the organization UID in the header.</p>

**API Endpoint**: `/stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}`

**Method**: `GET`

## Query Parameters

- **include_collaborators** (optional)
  <p>Set this parameter to 'true' to include the details of the stack collaborators.</p>
- **include_stack_variables** (optional)
  <p>Set this to 'true' to display the stack variables. Stack variables are extra information about the stack, such as the description, format of date, format of time, and so on. Users can include or exclude stack variables in the response.</p>
- **include_discrete_variables** (optional)
  <p>Set this to 'true' to view the access token of your stack.</p>
- **include_count** (optional)
  <p>Set this to 'true' to include in the response the total count of the stacks owned by or shared with a user account.</p>

## Headers

- **authtoken** (required)
- **organization_uid** (optional)
  <p>Enter the uid of your organization.
</p>

## Response

```json
{
	"stacks": [{
		"created_at": "2014-05-27T09:46:28.488Z",
		"updated_at": "2014-10-21T12:20:00.453Z",
		"uid": "blt123a123b123c",
		"name": "My First Stack",
		"description": "My new test stack",
		"org_uid": "abcdefgh1245",
		"api_key": "abcdefg1234567890",
		"master_locale": "en-us",
		"is_asset_download_public": true,
		"owner_uid": "abcdefg1234567890xyz",
		"user_uids": [
			"blt11e11111d11d1f11111a1b1f",
			"blt22dd2fd22222222e22f2aa22"
		],
		"settings": {
			"webhook_enabled": true,
			"workflow_stages": true,
			"publishing_rules": true
		},
		"master_key": "blta0b0add0e0b0000",
		"SYS_ACL": {
			"others": {
				"invite": false,
				"sub_acl": {
					"create": false,
					"read": false,
					"update": false,
					"delete": false
				}
			},
			"roles": [{
					"uid": "blt0f40fa0e3b989733",
					"name": "Developer",
					"invite": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true
					}
				},
				{
					"uid": "blte000a000a000cff0",
					"name": "Admin",
					"invite": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true
					}
				}
			]
		}
	}]
}
```

