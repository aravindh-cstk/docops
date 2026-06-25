---
title: "Update language"
description: PUT /locales/{code}
url: developer-apis/content-management-api-requests/update-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Update language

**PUT** `/locales/{code}`

The Update language call will let you update the details (such as display name) and the fallback language of an existing language of your stack.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of your language name and fallback language in JSON format.

## URL Parameters

- **code** (required)
  Enter the code of the language that you wish to update.
  Default: `your_language_code`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
  "locale":{
    "name":"Updated Locale Name",
    "fallback_locale":"zh-cn"
  }
}
```

## Sample Response

```json
{
    "notice": "Language updated successfully.",
    "locale": {
        "code": "ar-bh",
        "uid": "blt3e7b80f501b604ef",
        "created_by": "blt7b815b05d2fe5dd8",
        "updated_by": "blt7b815b05d2fe5dd8",
        "created_at": "2021-07-01T10:20:16.887Z",
        "updated_at": "2021-07-01T10:47:43.068Z",
        "fallback_locale": "zh-cn",
        "name": "Updated Locale Name",
        "ACL": {},
        "_version": 3
    }
}
```

