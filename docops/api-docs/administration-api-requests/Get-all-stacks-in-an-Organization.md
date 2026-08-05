---
title: "Get all stacks in an Organization"
description: /organizations/{organization_uid}/stacks?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}
url: /get-all-stacks-in-an-organization
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:18.220Z
updated_at: 2026-04-07T12:55:18.220Z
---

# Get all stacks in an Organization

<p>The <span data-type="inlineCode">Get all stacks in an organization</span> call fetches the list of all stacks in an Organization.
</p><p>When executing the API call, provide the Organization UID.</p>

**API Endpoint**: `/organizations/{organization_uid}/stacks?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of the Organization of which you want to retrieve all the stacks.</p>

## Query Parameters

- **limit** (optional)
  <p><span style="background-color: initial;">The ‘limit’ parameter will return a specific number of stacks in the output. Example, if there are 10 organization stacks and you wish to fetch only the first 2, you need to specify '2' as value in this parameter.</span></p>
- **skip** (optional)
  <p><span style="background-color: initial;">The ‘skip’ parameter will skip a specific number of organization stacks in the output. Example, if there are 12 stacks and you want to skip the last 2 to get only the first 10 in the response body, you need to specify ‘2’ here.</span></p>
- **asc** (optional)
  <p><span style="background-color: initial;">The ‘asc’ parameter allows you to sort the list of stacks in an organization in the ascending order.</span></p>
- **desc** (optional)
  <p><span style="background-color: initial;">The ‘desc’ parameter allows you to sort the list of stacks in an organization in the descending order.</span></p>
- **include_count** (optional)
  <p><span style="background-color: initial;">The ‘include_count’ parameter returns the total number of stacks in an organization. Example: If you wish to know the total number of stacks in your organization, you need to mention ‘true’.</span></p>
- **typeahead** (optional)
  <p><span style="background-color: initial;">The ‘typeahead’ parameter allows you to perform a name-based search on all the stacks on an organization based on the value provided.</span></p>

## Headers

- **authtoken** (required)
  <p>Enter the authtoken of the user.</p>

## Response

```json
{
	"stacks": [{
		"created_at": "2017-09-28T06:09:19.912Z",
		"updated_at": "2017-09-29T07:29:00.879Z",
		"uid": "blt046702aa419c8f9d",
		"name": "testv3-B",
		"api_key": "blt01a49e20d89b197e",
		"owner_uid": "blt02f4a95744f5301e",
		"owner": {
			"email": "aravind.kumar@contentstack.com",
			"first_name": "Aravind",
			"last_name": "Kumar"
		},
		"users": {
			"count": 5
		}
	}],
	"count": 4
}
```

