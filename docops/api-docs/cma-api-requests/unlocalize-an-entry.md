---
title: "Unlocalize an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}
url: /unlocalize-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.884Z
updated_at: 2026-07-20T16:52:35.695Z
---

# Unlocalize an entry

<p>The <span data-type='inlineCode'>Unlocalize an entry</span> request is used to unlocalize an existing entry. Read more about <a href="/docs/headless-cms/unlocalize-an-entry" target="_self">Unlocalization</a>. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entry:write</span> scope.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).</p>

## Query Parameters

- **locale** (required)
  <p>Enter the code of the language to unlocalize the entry of that particular language.</p>

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
	"notice": "Entry unlocalized successfully."
}
```

