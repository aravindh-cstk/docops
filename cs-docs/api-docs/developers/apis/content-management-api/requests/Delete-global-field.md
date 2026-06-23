---
title: "Delete global field"
description: DELETE /global_fields/{global_field_uid}?force=true
url: developers/apis/content-management-api/requests/delete-global-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete global field

**DELETE** `/global_fields/{global_field_uid}?force=true`

The Delete global field request allows you to delete a specific global field.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Warning**: If your Global field has been referred within a particular content type, then you will need to pass an additional query parameter force:true to delete the Global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

## URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

## Query Parameters

- **force** (required)
  Set the force parameter to 'true' to delete the Global field.
  Default: `true`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "notice": "Global Field deleted successfully."
}
```

