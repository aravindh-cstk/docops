---
title: "Delete Content Type"
description: DELETE /content_types/{content_type_uid}?force={boolean value}
url: developer-apis/content-management-api-requests/delete-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete Content Type

**DELETE** `/content_types/{content_type_uid}?force={boolean value}`

The Delete Content Type call deletes an existing content type and all the entries within it.

When executing the API call, in the “URL Parameters” section, provide the UID of your content type.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

## Query Parameters

- **force** (optional)
  Enter 'true' to force delete a content type.
  Default: `false`

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
	"notice": "Content Type deleted successfully."
}
```

