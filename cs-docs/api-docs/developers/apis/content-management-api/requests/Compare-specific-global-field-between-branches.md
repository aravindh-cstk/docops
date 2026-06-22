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


**Method:** `GET`  
**Endpoint:** `/stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The  Compare specific global field between branches request returns all the differences of the specified global field between the two specified branches.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| global_field_uid | global_field_uid | Enter the unique ID of the global field  of which you want to retrieve the difference. The UID is generated based on the title of the global field. The unique I |

| base_branch | main | The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default. |

| compare_branch | redesign | Enter the branch you want to compare with the base branch. |

**Response (200):**

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
