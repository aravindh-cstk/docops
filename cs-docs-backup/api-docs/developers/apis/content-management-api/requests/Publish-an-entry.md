---
title: "Publish an entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/publish
url: developers/apis/content-management-api/requests/publish-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-09-23
---

# Publish an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

The Publish an entry request lets you publish an entry either immediately or schedule it for a later date/time.

**Note:** When you publish an entry, the associated metadata of that entry will also get published. However, when publishing entries in bulk, the associated metadata of the entries will not get published.

To configure the permissions for your application via OAuth, please include the cm.entry:publish scope.

In the 'Body' section, you can specify the locales and environments to which you want to publish the entry. When you pass locales in the "Body", the following actions take place:

- If you have not localized your entry in any of your stack locales, the Master Locale entry gets localized in those locales and are published.
- If you have localized any or all of your entries in these locales, the existing localized content of those locales will NOT be published. However, if you need to publish them all, you need to perform a Bulk Publish operation.

The locale and environment details should be specified in the ‘entry’ parameter. However, if you do not specify any source locale(s), it will be published in the master locale automatically.

Along with the above details, you also need to mention the master locale and the version number of your entry that you want to publish.

In case of **Scheduled Publishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

**Note**: To publish localized entries, you must include the publish_all_localized=true query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to publish **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

```json
{
	"notice": "The requested action has been performed."
}
```

