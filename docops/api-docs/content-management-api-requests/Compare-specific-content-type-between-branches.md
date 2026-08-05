---
title: "Compare specific content type between branches"
description: GET /stacks/branches_compare/content_types/{content_type_uid}?base_branch=main&compare_branch=redesign&include_schemas=true
url: developer-apis/content-management-api-requests/compare-specific-content-type-between-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-06-09
---

# Compare specific content type between branches

**GET** `/stacks/branches_compare/content_types/{content_type_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The Compare specific content type between branches request returns all the differences of the specified content type between the two specified branches.

##### Compare Specific Global Fields between Branches

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the difference. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `content_type_uid`

## Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`

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
   "diff":{
      "uid":"homepage",
      "type":"content_type",
      "status":"modified",
      "base_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Categories",
               "display_type":"dropdown",
               "enum":{
                  "advanced":false,
                  "choices":[
                     {
                        "value":"Option A"
                     },
                     {
                        "value":"Option B"
                     }
                  ]
               },
               "multiple":false,
               "uid":"categories",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "version":3
               },
               "mandatory":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "data_type":"text",
               "display_name":"Featured A",
               "uid":"featured_a",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[2]"
            },
            {
               "data_type":"text",
               "display_name":"Topics",
               "uid":"topics",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[3]"
            }
         ],
         "schema":null
      },
      "compare_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Featured B",
               "uid":"featured_a",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "data_type":"text",
               "display_name":"SEO Description",
               "uid":"seo_description",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[2]"
            }
         ],
         "schema":null
      }
   }
}
```

