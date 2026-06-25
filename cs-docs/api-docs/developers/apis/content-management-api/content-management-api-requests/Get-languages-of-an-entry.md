---
title: "Get languages of an entry"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/locales
url: developers/apis/content-management-api/requests/get-languages-of-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get languages of an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/locales`

The Get languages of an entry call returns the details of all the languages that an entry exists in.   
To configure the permissions for your application via OAuth, please include the cm.entry:read scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

