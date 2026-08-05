---
title: "Unpublish an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/unpublish
url: /unpublish-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.789Z
updated_at: 2025-02-05T13:23:20.867Z
---

# Unpublish an entry

<p>The <span data-type='inlineCode'>Unpublish an entry</span> call will unpublish an entry at once, and also, gives you the provision to unpublish an entry automatically at a later date/time.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.entry:unpublish</span> scope.</p><p>In the 'Body' section, you can specify the locales and environments from which you want to unpublish the entry. These details should be specified in the ‘entry’ parameter. However, if you do not specify a locale, it will be unpublished from the master locale automatically.</p><p>You also need to mention the master locale and the version number of your entry that you want to publish.</p><p>In case of <strong>Scheduled Unpublishing</strong>, add the <span data-type='inlineCode'>scheduled_at</span> key and provide the date/time in the ISO format as its value. Example: <span data-type='inlineCode'>"scheduled_at":"2016-10-07T12:34:36.000Z"</span></p><p class="note"><strong>Note</strong>: To unpublish localized entries, you must include the <span class="code">publish_all_localized=true</span> query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our <a href="mailto:support@contentstack.com" target="_blank">support</a> team to enable this feature for your organization.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.&nbsp;</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to import <strong>Note:</strong> In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><div></div><span></span></p>
- **Content-Type** (required)
- **api_version** (required)
  <p>Enter the API version to include Nested Reference Publishing.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"entry": {
		"environments": ["development"],
		"locales": ["en-us"]
	},
	"locale": "en-us",
	"version": 1,
	"scheduled_at": "2019-02-14T18:30:00.000Z"
}
```

## Response

```json
{
	"notice": "The requested action has been performed."
}
```

