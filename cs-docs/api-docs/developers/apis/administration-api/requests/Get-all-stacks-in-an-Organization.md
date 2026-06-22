---
title: "Get all stacks in an Organization"
description: GET /organizations/{organization_uid}/stacks?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}
url: developers/apis/administration-api/requests/get-all-stacks-in-an-organization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Get all stacks in an Organization


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}/stacks?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&typeahead={value_to_be_searched}`

The Get all stacks in an organization call fetches the list of all stacks in an Organization.

When executing the API call, provide the Organization UID.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| organization_uid | blt4001c00ea0ddf287 | Enter the UID of the Organization of which you want to retrieve all the stacks. |

| limit | limit_value | The ‘limit’ parameter will return a specific number of stacks in the output. Example, if there are 10 organization stacks and you wish to fetch only the first 2 |

| skip | skip_value | The ‘skip’ parameter will skip a specific number of organization stacks in the output. Example, if there are 12 stacks and you want to skip the last 2 to get on |

| asc | field_uid | The ‘asc’ parameter allows you to sort the list of stacks in an organization in the ascending order. |

| desc | field_uid | The ‘desc’ parameter allows you to sort the list of stacks in an organization in the descending order. |

| include_count | false | The ‘include_count’ parameter returns the total number of stacks in an organization. Example: If you wish to know the total number of stacks in your organizatio |

| typeahead | Aravind | The ‘typeahead’ parameter allows you to perform a name-based search on all the stacks on an organization based on the value provided. |

**Response (200):**

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
