---
title: "Get all roles in an Organization"
description: /organizations/{organization_uid}/roles?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&include_stack_roles={boolean_value}
url: /get-all-roles-in-an-organization
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.566Z
updated_at: 2023-01-05T14:09:04.566Z
---

# Get all roles in an Organization

<p>The <span data-type="inlineCode">Get all roles in an organization</span> call&nbsp;gives the details of all the roles that are set to users in an Organization.</p><p>When executing the API call, provide the Organization's&nbsp;UID.</p>

**API Endpoint**: `/organizations/{organization_uid}/roles?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&include_stack_roles={boolean_value}`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>

## Query Parameters

- **limit** (optional)
  <p>The ‘limit’ parameter will return a specific number of Organization roles in the output. Example, if there are 10 organization roles and you wish to fetch only the first 2, you need to specify '2' as the value in this parameter.</p>
- **skip** (optional)
  <p>The ‘skip’ parameter will skip a specific number of Organization roles in the output. For example, if there are 12 organization roles and you want to skip the first 2 to get only the last 10 in the response body, you need to specify ‘2’ here.</p>
- **asc** (optional)
  <p>The ‘asc’ parameter allows you to sort the list of organization roles in an ascending order on the basis of a parameter.</p>
- **desc** (optional)
  <p>The ‘desc’ parameter allows you to sort the list of organization roles in a descending order on the basis of a parameter.</p>
- **include_count** (optional)
  <p>The ‘include_count’ parameter returns the total number of roles in an organization. For example: If you want to know the total number of roles in an organization, you need to mention ‘true’.</p>
- **include_stack_roles** (optional)
  <p>The ‘include_stack_roles’ parameter,&nbsp;when set to ‘true’, includes the details of stack-level roles in the Response body.</p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken of the user.</p>

## Response

```json
{
	"roles": [{
			"uid": "blt888bdcb888fefc88d8888e8a",
			"name": "Admin",
			"description": "Admin Role",
			"org_uid": "blt6eb666a6feb6666b6b6e666e",
			"admin": true,
			"default": true,
			"users": [
				"blt33dd3fd33333333e33f3aa33",
				"bltf44c4ca4f444e444",
				"blt55bcad5ae5cc5b5d"
			],
			"created_at": "2017-09-17T11:50:52.557Z",
			"update_at": "2017-09-17T11:50:52.557Z"
		},
		{
			"uid": "blt084e2101471d9d2a27a5abb4",
			"name": "Member",
			"description": "Member Role",
			"org_uid": "blt6eb149a1feb2263b6b6e454e",
			"default": true,
			"users": [
				"blt11dd3fd11111111e11f1aa11",
				"bltf22c2ca2f2222e222",
				"blt22bcad2ae2cc2b2d"
			],
			"created_at": "2017-09-17T11:50:52.190Z",
			"update_at": "2017-09-17T11:50:52.190Z"
		}
	]
}
```

