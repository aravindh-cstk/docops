---
title: "Get all Releases"
description: GET /releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}
url: developer-apis/content-management-api-requests/get-all-releases
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Get all Releases

**GET** `/releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all Releases request retrieves a list of all Releases of a stack along with details of each Release. To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

## Query Parameters

- **include_count** (optional)
  The ‘include_count’ parameter includes the count of total number of releases in your stack, along with the details of each release. Example: If you want to know the total number of releases, you need to mention ‘true’ as the value of this parameter.
  Default: `false`
- **count** (optional)
  The ‘count’ parameter works similar to the ‘include_count’ parameter but returns ONLY the total count of releases in your stack and not the details of the releases in the response. Example: If you want to know the total number of releases in your stack, you need to mention ‘true’ as value for this parameter.
  Default: `true`
- **include_items_count** (optional)
  The ‘include_items_count’ parameter returns the total number of items in a specific release. Example: If you want to know the total number of items in a release, you need to mention ‘true’ as the value of this parameter.
  Default: `true`
- **limit** (optional)
  The ‘limit’ parameter will return a specific number of releases in the output. Example, if there are 10 releases and you want to fetch the  five latest updated releases, you need to specify '5' as value in this parameter.
  Default: `2`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of releases in the response. Example: If there are 12 releases and you want to skip the first two updated releases to get only the next 10 in the response body, you need to specify ‘2’ here.
  Default: `2`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"releases": [{
		"name": "Release Name",
		"description": "2018-12-12",
		"uid": "blt123123bfc123fdd1",
		"created_by": "blt42e123123a2b1239f",
		"updated_by": "blt42e123123a2b1239f",
		"created_at": "2018-11-05T11:22:20.027Z",
		"updated_at": "2019-03-08T10:30:19.493Z",
		"locked": true,
		"status": [{
			"environment": "bltfd123123123123cb",
			"time": "2019-03-08T10:30:19.451Z",
			"status": "success",
			"user": "blt42e55757d70d5f81026a2b9f"
		}],
		"items_count": 10
	}]
}
```

