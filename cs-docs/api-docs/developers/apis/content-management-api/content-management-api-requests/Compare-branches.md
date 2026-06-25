---
title: "Compare branches"
description: GET /stacks/branches_compare?base_branch=main&compare_branch=redesign
url: developers/apis/content-management-api/requests/compare-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-05
---

# Compare branches

**GET** `/stacks/branches_compare?base_branch=main&compare_branch=redesign`

The Compare branches request returns a list of all the differences between two branches.

**Note:**

- The compare branches feature is only available for the content types and global fields modules.
- If the number of Content Types/Global Fields that need to be compared is more than 100, you will receive a Next URL in the response body. The comparison limit is set at 100, and for every comparison that goes beyond this limit, the process will be completed in segments of 100.

##### Compare Content Type between Branches

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

