---
title: "Add a language"
description: /locales
url: /add-a-language
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.742Z
updated_at: 2024-02-28T06:19:27.240Z
---

# Add a language

<p>This call lets you add a new language to your stack. You can either add a <a href="/docs/developers/multilingual-content/supported-languages">supported language</a> or a <a href="/docs/developers/multilingual-content/add-a-custom-language">custom language</a> of your choice.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.</p><p>In the 'Body' section, enter the language name and code in JSON format. You can also specify the fallback language you want to assign to the new language within the same JSON.</p><p class="warning"><strong>Warning</strong>: Once generated, you cannot modify a custom language code. However, you can update the language name and fallback language if required.</p>

**API Endpoint**: `/locales`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
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
  "locale":{
    "name":"Arabic - Bahrain",
    "code":"ar-bh",
    "fallback_locale":"en-us"
  }
}
```

## Response

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

