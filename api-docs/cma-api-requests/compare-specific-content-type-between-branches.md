---
title: "Compare specific content type between branches"
description: /stacks/branches_compare/content_types/{content_type_uid}?base_branch=main&compare_branch=redesign&include_schemas=true
url: /compare-specific-content-type-between-branches
product: Contentstack
doc_type: api-request
created_at: 2023-05-23T09:28:41.590Z
updated_at: 2023-06-09T07:02:23.217Z
---

# Compare specific content type between branches

<p>The <span data-type='inlineCode'>Compare specific content type between branches</span> request returns all the differences of the specified content type between the two specified branches.</p>
<p></p>
<h5>Compare Specific Global Fields between Branches</h5>
<p></p>

**API Endpoint**: `/stacks/branches_compare/content_types/{content_type_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p><span style='font-size: 11pt;'>Enter the unique ID of the content type of which you want to retrieve the difference. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</span></p>

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

