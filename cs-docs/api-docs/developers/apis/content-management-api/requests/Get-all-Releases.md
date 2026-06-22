---
title: "Get all Releases"
description: GET /releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}
url: developers/apis/content-management-api/requests/get-all-releases
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Get all Releases


**Method:** `GET`  
**Endpoint:** `/releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all Releases request retrieves a list of all Releases of a stack along with details of each Release. To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authorization | your_management_token | Enter your management token. |

| authtoken | your_authtoken | Enter your authtoken. |

| branch | main | Enter your branch unique ID. |

| include_count | false | The ‘include_count’ parameter includes the count of total number of releases in your stack, along with the details of each release. Example: If you want to know |

| count | true | The ‘count’ parameter works similar to the ‘include_count’ parameter but returns ONLY the total count of releases in your stack and not the details of the relea |

| include_items_count | true | The ‘include_items_count’ parameter returns the total number of items in a specific release. Example: If you want to know the total number of items in a release |

| limit | 2 | The ‘limit’ parameter will return a specific number of releases in the output. Example, if there are 10 releases and you want to fetch the  five latest updated  |

| skip | 2 | The ‘skip’ parameter will skip a specific number of releases in the response. Example: If there are 12 releases and you want to skip the first two updated relea |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
