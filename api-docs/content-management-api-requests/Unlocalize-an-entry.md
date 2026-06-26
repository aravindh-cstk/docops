---
title: "Unlocalize an entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}
url: developer-apis/content-management-api-requests/unlocalize-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Unlocalize an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}`

The Unlocalize an entry request is used to unlocalize an existing entry. Read more about [Unlocalization](../../../../../cs-docs/developers/multilingual-content/unlocalize-an-entry.md).   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

## Query Parameters

- **locale** (required)
  Enter the code of the language to unlocalize the entry of that particular language.
  Default: `fr-fr`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Entry unlocalized successfully."
}
```

