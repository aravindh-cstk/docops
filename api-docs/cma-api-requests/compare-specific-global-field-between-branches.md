---
title: "Compare specific global field between branches"
description: /stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true
url: /compare-specific-global-field-between-branches
product: Contentstack
doc_type: api-request
created_at: 2023-05-23T09:34:36.382Z
updated_at: 2023-07-26T13:20:13.397Z
---

# Compare specific global field between branches

<p>The <span data-type='inlineCode'> Compare specific global field between branches</span> request returns all the differences of the specified global field between the two specified branches.</p>

**API Endpoint**: `/stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

**Method**: `GET`

## URL Parameters

- **global_field_uid** (required)
  <p><span style='font-size: 11pt;'>Enter the unique ID of the global field&nbsp; of which you want to retrieve the difference. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.</span></p>

## Query Parameters

- **base_branch** (optional)
  <p>The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.</p>
- **compare_branch** (required)
  <p>Enter the branch you want to compare with the base branch.</p>

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

