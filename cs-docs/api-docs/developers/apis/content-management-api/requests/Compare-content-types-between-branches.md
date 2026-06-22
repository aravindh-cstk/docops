---
title: "Compare content types between branches"
description: GET /stacks/branches_compare/content_types?base_branch=main&compare_branch=redesign
url: developers/apis/content-management-api/requests/compare-content-types-between-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-05
---

# Compare content types between branches


**Method:** `GET`  
**Endpoint:** `/stacks/branches_compare/content_types?base_branch=main&compare_branch=redesign`

The Compare content types between branches request returns a list of all the differences in content types between the two specified branches.

##### Compare Global Fields between Branches

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| base_branch | main | The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default. |

| compare_branch | redesign | Enter the branch you want to compare with the base branch. |

| skip | 2 | Enter the number of branches to be skipped from the response body. |

| limit | 100 | Enter the maximum number of branches compare result to be returned. The default limit is set at 100. |

**Response (200):**

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Banner",
         "uid":"banner",
         "type":"content_type",
         "status":"compare_only"
      },
      {
         "title":"Author",
         "uid":"author",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Product",
         "uid":"product",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Footer",
         "uid":"footer",
         "type":"content_type",
         "status":"base_only"
      },
      {
         "title":"Homepage",
         "uid":"homepage",
         "type":"content_type",
         "status":"modified"
      }
   ],
"next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```
