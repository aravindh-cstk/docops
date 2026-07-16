---
title: "Delete language"
description: DELETE /locales/{code}
url: developer-apis/content-management-api-requests/delete-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Delete language

**DELETE** `/locales/{code}`

The Delete language call deletes an existing language from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

## URL Parameters

- **code** (required)
  Enter the code of the language that you wish to delete.
  Default: `fr-fr`

## Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "notice": "Language removed successfully."
}
```

