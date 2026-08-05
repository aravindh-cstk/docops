---
title: "Compare content types between branches"
description: /stacks/branches_compare/content_types?base_branch=main&compare_branch=redesign
url: /compare-content-types-between-branches
product: Contentstack
doc_type: api-request
created_at: 2023-05-23T09:07:17.140Z
updated_at: 2023-07-05T10:16:04.538Z
---

# Compare content types between branches

<p>The <span data-type='inlineCode'>Compare content types between branches</span> request returns a list of all the differences in content types between the two specified branches.</p>
<p></p>
<h5>Compare Global Fields between Branches</h5>
<p></p>

**API Endpoint**: `/stacks/branches_compare/content_types?base_branch=main&compare_branch=redesign`

**Method**: `GET`

## Query Parameters

- **base_branch** (optional)
  <p>The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.</p>
- **compare_branch** (required)
  <p>Enter the branch you want to compare with the base branch.</p>
- **skip** (optional)
  <p>Enter the number of branches to be skipped from the response body.</p>
- **limit** (optional)
  <span>Enter the maximum number of branches compare result to be returned.</span> The default limit is set at 100.

## Headers

- **api_key** (required)
  <span>Enter the API key of the stack.</span>
- **authtoken** (optional)
  <span>Enter your authtoken.</span>
- **authorization** (required)
  <span>Enter your management token.</span>

## Response

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

