---
title: "Set a fallback language"
description: /locales
url: /set-a-fallback-language
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.618Z
updated_at: 2024-02-28T06:57:28.369Z
---

# Set a fallback language

<p>The <span data-type='inlineCode'>Set a fallback language</span> request allows you to assign a fallback language for an entry in a particular language.</p><p>When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.</p><p>In the 'Body' section, enter the language codes in JSON format.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p class="note"><strong>Note</strong>: The language set as a fallback language will always inherit data from the master language if it does not have localized content.</p>

**API Endpoint**: `/locales`

**Method**: `POST`

## Query Parameters

- **include_language** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```

## Response

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```

