---
title: "Get languages of an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/locales
url: /get-languages-of-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.965Z
updated_at: 2024-03-21T13:04:33.622Z
---

# Get languages of an entry

<p>The <span data-type='inlineCode'>Get languages of an entry</span> call returns the details of all the languages that an entry exists in. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entry:read</span> scope.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/locales`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "locales": [
    {
      "code": "ja-jp",
      "localized": true
    }
  ]
}
```

