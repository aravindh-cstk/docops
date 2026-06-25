---
title: "Compare specific global field between branches"
description: GET /stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true
url: developers/apis/content-management-api/requests/compare-specific-global-field-between-branches
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-26
---

# Compare specific global field between branches

**GET** `/stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The  Compare specific global field between branches request returns all the differences of the specified global field between the two specified branches.

## URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field  of which you want to retrieve the difference. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

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
      "uid":"ui",
      "type":"global_field",
      "status":"modified",
      "base_branch":{
         "differences":[
            {
               "value":"SEO",
               "path":"title"
            },
            {
               "data_type":"text",
               "display_name":"Title",
               "uid":"title",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
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
               "path":"schema[0]"
            },
            {
               "data_type":"text",
               "display_name":"Description",
               "uid":"description",
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
            }
         ],
         "schema":null
      },
      "compare_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Markdown",
               "uid":"markdown",
               "field_metadata":{
                  "description":"",
                  "markdown":true,
                  "version":3
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[0]"
            },
            {
               "data_type":"file",
               "display_name":"File",
               "uid":"file",
               "extensions":[
                  
               ],
               "field_metadata":{
                  "description":"",
                  "rich_text_type":"standard"
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
               "value":"UI",
               "path":"title"
            }
         ],
         "schema":null
      }
   }
}
```

