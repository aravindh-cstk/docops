---
title: "Set a fallback language"
description: POST /locales
url: developers/apis/content-management-api/requests/set-a-fallback-language
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Set a fallback language

**POST** `/locales`

The Set a fallback language request allows you to assign a fallback language for an entry in a particular language.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

In the 'Body' section, enter the language codes in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Note**: The language set as a fallback language will always inherit data from the master language if it does not have localized content.

## Query Parameters

- **include_language** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `the API key of your stack`
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
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```

## Sample Response

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```

