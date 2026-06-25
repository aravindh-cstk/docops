---
title: "Compare global fields between branches"
description: GET /stacks/branches_compare/global_fields?base_branch=main&compare_branch=redesign
url: developers/apis/content-management-api/requests/compare-global-fields-between-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-05
---

# Compare global fields between branches

**GET** `/stacks/branches_compare/global_fields?base_branch=main&compare_branch=redesign`

The Compare global fields between branches request returns a list of all the differences in global fields between the two specified branches.

##### Compare Specific Content Types between Branches

## Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

## Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Search",
         "uid":"search",
         "type":"global_field",
         "status":"compare_only"
      },
      {
         "title":"SEO",
         "uid":"ui",
         "type":"global_field",
         "status":"modified"
      }
   ],
"next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```

