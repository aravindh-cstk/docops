---
title: "Delete an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&delete_all_localized={boolean_value}
url: /delete-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.156Z
updated_at: 2024-03-21T13:00:13.452Z
---

# Delete an entry

<p>The <span data-type='inlineCode'>Delete an entry</span> request allows you to delete a specific entry from a content type. This API request also allows you to delete single and/or multiple&nbsp;localized entries. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.</p><p>This API Request&nbsp;supports the following actions as well:</p><ul><li><strong>Delete specific localized entry</strong>: For this request, you need to only specify the locale code of the language in the <span data-type='inlineCode'>locale</span> query parameter. If the locale parameter is not been specified, by default, the master language entry will be deleted.</li><li><strong>Delete master language along with all its localized entries</strong>: For this request, instead of the <span data-type='inlineCode'>locale</span> query parameter, you need to pass the <span data-type='inlineCode'>delete_all_localized:true</span> query parameter.<br /><p class="note"><strong>Note</strong>: The <span data-type='inlineCode'>delete_all_localized</span> parameter will work only if you are deleting localized versions from the master language.</p></li><li><strong>Delete multiple localized entry</strong>: Additionally, you can delete specific localized entries by passing the locale codes in the Request body using the <span data-type='inlineCode'>locales</span> key as follows:<pre>{<br />  "entry": {<br />    "locales": ["hi-in", "mr-in", "es"]<br />  }<br />}</pre></li></ul>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&delete_all_localized={boolean_value}`

**Method**: `DELETE`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to delete the entry. The content type UID is generated based on the title of the content type and it is unique across a stack.&nbsp;</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to delete.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language of which the entry needs to be deleted.</p>
- **delete_all_localized** (optional)
  <p>Set the "delete_all_localized" parameter to "true" to delete all the localized versions of the entry.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><div></div><span></span></p><p></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"notice": "Entry deleted successfully."
}
```

