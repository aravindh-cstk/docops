---
title: "Add a language"
description: POST /locales
url: developers/apis/content-management-api/requests/add-a-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Add a language

**POST** `/locales`

This call lets you add a new language to your stack. You can either add a [supported language](/docs/developers/multilingual-content/supported-languages) or a [custom language](/docs/developers/multilingual-content/add-a-custom-language) of your choice.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the language name and code in JSON format. You can also specify the fallback language you want to assign to the new language within the same JSON.

**Warning**: Once generated, you cannot modify a custom language code. However, you can update the language name and fallback language if required.

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
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `false`

## Sample Request

```json
{
  "locale":{
    "name":"Arabic - Bahrain",
    "code":"ar-bh",
    "fallback_locale":"en-us"
  }
}
```

## Sample Response

```json
{
    "notice": "Language added successfully.",
    "locale": {
        "code": "ar-bh",
        "uid": "blt3e7b80f501b604ef",
        "created_by": "blt7b815b05d2fe5dd8",
        "updated_by": "blt7b815b05d2fe5dd8",
        "created_at": "2021-07-01T10:20:16.887Z",
        "updated_at": "2021-07-01T10:20:16.887Z",
        "fallback_locale": "en-us",
        "name": "Arabic - Bahrain",
        "ACL": {},
        "_version": 1
    }
}
```

