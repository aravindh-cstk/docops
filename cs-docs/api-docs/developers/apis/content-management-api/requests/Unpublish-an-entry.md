---
title: "Unpublish an entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/unpublish
url: developers/apis/content-management-api/requests/unpublish-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-05
---

# Unpublish an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

The Unpublish an entry call will unpublish an entry at once, and also, gives you the provision to unpublish an entry automatically at a later date/time.

To configure the permissions for your application via OAuth, please include the cm.entry:unpublish scope.

In the 'Body' section, you can specify the locales and environments from which you want to unpublish the entry. These details should be specified in the ‘entry’ parameter. However, if you do not specify a locale, it will be unpublished from the master locale automatically.

You also need to mention the master locale and the version number of your entry that you want to publish.

In case of **Scheduled Unpublishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

**Note**: To unpublish localized entries, you must include the publish_all_localized=true query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to import **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
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

