---
title: "Update an entry"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: developers/apis/content-management-api/requests/update-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-01
---

# Update an entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update an entry call lets you update the content of an existing entry.

Passing the locale parameter will cause the entry to be localized in the specified locale.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the “Body” section, to update the taxonomy fields, use the following code:

```
{
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
}
```

**Note**: The Update an entry call does not allow you to update the workflow stage for an entry. To update the workflow stage for the entry, use the [Set Entry Workflow Stage](#set-entry-workflow-stage) call.

#####

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to update.
  Default: `enter your entry uid`

## Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entry you need to update.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

