---
title: "Update an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: /update-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.049Z
updated_at: 2026-07-20T18:22:20.006Z
---

# Update an entry

<p>The <span data-type='inlineCode'>Update an entry</span> call lets you update the content of an existing entry.</p><p>Passing the <span data-type='inlineCode'>locale</span> parameter will cause the entry to be localized in the specified locale.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.</p><p>In the “Body” section, to update the taxonomy fields, use the following code:</p><pre>{
   "entry":{
      "title":"example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ]
   }
}</pre><p class="note"><strong>Note</strong>: The <span data-type='inlineCode'>Update an entry</span> call does not allow you to update the workflow stage for an entry. To update the workflow stage for the entry, use the <a href="#set-entry-workflow-stage" target="_self">Set Entry Workflow Stage</a> call.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

**Method**: `PUT`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to update.</p>

## Query Parameters

- **locale** (optional)
  <p><span style="background-color: initial;">Enter the code of the language of which the entry&nbsp;you need&nbsp;to update.</span></p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><div></div><span></span></p><p></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
   "entry":{
      "title":"example",
      "url":"/example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ]
   }
}
```

## Response

```json
{
   "notice":"Entry updated successfully.",
   "entry":{
      "title":"example",
      "url":"/example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ],
      "tags":[
         
      ],
      "locale":"en-us",
      "uid":"blt797597f83fafc900",
      "created_by":"bltefbae0de565c0a44",
      "updated_by":"blt4011095e7bc75796",
      "created_at":"2023-11-20T11:26:00.698Z",
      "updated_at":"2024-07-01T12:36:50.925Z",
      "ACL":{
         
      },
      "_version":18,
      "_in_progress":false
   }
}
```

