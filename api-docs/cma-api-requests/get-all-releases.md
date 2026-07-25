---
title: "Get all Releases"
description: /releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}
url: /get-all-releases
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:00.785Z
updated_at: 2026-01-06T10:05:51.208Z
---

# Get all Releases

<p>The <span data-type='inlineCode'>Get all Releases</span> request retrieves a list of all Releases of a stack along with details of each Release. To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.releases.management:read</span> scope.</p>

**API Endpoint**: `/releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}`

**Method**: `GET`

## Query Parameters

- **include_count** (optional)
  <p><span style="background-color: initial;">The ‘include_count’ parameter includes the count of total number of releases in your stack, along with the details of each release. Example: If you want to know the total number of releases, you need to mention ‘true’ as the value of this parameter.</span></p>
- **count** (optional)
  <p><span style="background-color: initial;">The ‘count’ parameter works similar to the ‘include_count’ parameter but returns ONLY the total count of releases in your stack and not the details of the releases in the response. Example: If you want to know the total number of releases in your stack, you need to mention ‘true’ as value for this parameter.</span></p>
- **include_items_count** (optional)
  <p><span style="background-color: initial;">The ‘include_items_count’ parameter returns the total number of items in a specific release. Example: If you want to know the total number of items in a release, you need to mention ‘true’ as the value of this parameter.</span></p>
- **limit** (optional)
  <p><span style="background-color: initial;">The ‘limit’ parameter will return a specific number of releases in the output. Example, if there are 10 releases and you want to fetch the&nbsp; five latest updated releases, you need to specify '5' as value in this parameter.</span></p>
- **skip** (optional)
  <p><span style="background-color: initial;">The ‘skip’ parameter will skip a specific number of releases in the response. Example: If there are 12 releases and you want to skip the first two updated releases&nbsp;to get only the next 10 in the response body, you need to specify ‘2’ here.</span></p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **release_version** (optional)
  <p>Enter the release version.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

