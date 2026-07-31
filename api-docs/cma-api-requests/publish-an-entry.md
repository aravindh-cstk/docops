---
title: "Publish an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/publish
url: /publish-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.854Z
updated_at: 2025-09-23T14:24:26.900Z
---

# Publish an entry

<p>The <span data-type='inlineCode'>Publish an entry</span> request lets you publish an entry either immediately or schedule it for a later date/time.</p><p class="note"><strong>Note:</strong> When you publish an entry, the associated metadata of that entry will also get published. However, when publishing entries in bulk, the associated metadata of the entries will not get published.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.entry:publish</span> scope.</p><p>In the 'Body' section, you can specify the locales and environments to which you want to publish the entry. When you pass locales in the "Body", the following actions take place:</p><ul><li>If you have not localized your entry in any of your stack locales, the Master Locale entry gets localized in those locales and are published.</li><li>If you have localized any or all of your entries in these locales, the existing localized content of those locales will NOT be published. However, if you need to publish them all, you need to perform a <a href="#publish-entries-and-assets-in-bulk" target="_self">Bulk Publish operation</a>.</li></ul><p>The locale and environment details should be specified in the ‘entry’ parameter. However, if you do not specify any source locale(s), it will be published in the master locale automatically.</p><p>Along with the above details, you also need to mention the master locale and the version number of your entry that you want to publish.</p><p>In case of <strong>Scheduled Publishing</strong>, add the <span data-type='inlineCode'>scheduled_at</span> key and provide the date/time in the ISO format as its value. Example: <span data-type='inlineCode'>"scheduled_at":"2016-10-07T12:34:36.000Z"</span></p><p class="note"><strong>Note</strong>: To publish localized entries, you must include the <span class="code">publish_all_localized=true</span> query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our <a href="mailto:support@contentstack.com" target="_blank">support</a> team to enable this feature for your organization.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry that you wish to publish&nbsp;<strong>Note:</strong> In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **api_version** (required)
  <p>Enter the API version to enable Nested Reference Publishing.</p>
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

