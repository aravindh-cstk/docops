---
title: "Update fallback language"
description: /locales/{locale_uid}
url: /update-fallback-language
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.883Z
updated_at: 2024-02-28T06:58:50.327Z
---

# Update fallback language

<p>The <span data-type='inlineCode'>Update fallback language</span> request allows you to update the fallback language for an existing language of your stack.</p><p>When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.</p><p>In the 'Body' section, enter the updated details of the fallback language in JSON format.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p class="note"><strong>Note</strong>: The language set as a fallback language will always inherit data from the master language if it does not have localized content.</p>

**API Endpoint**: `/locales/{locale_uid}`

**Method**: `PUT`

## URL Parameters

- **locale_code** (required)
  <p>Enter the language code&nbsp;of the language that you want to assign as a fallback language for an existing language of your stack.</p>

## Query Parameters

- **include_branch** (optional)
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
    "name": "German",
    "code": "de",
    "fallback_locale": "en-us"
      }
}
```

## Response

```json
{
    "notice": "Language updated successfully.",
    "locale": {
        "code": "de",
        "name": "German",
        "fallback_locale": "en-us",
        "uid": "blt9627e0b4fe7b5986",
        "created_by": "blt58fb93b4f1c8e17b",
        "updated_by": "bltf6c2ef24db42bde6",
        "created_at": "2023-02-17T11:56:25.173Z",
        "updated_at": "2023-02-27T13:19:03.106Z",
        "ACL": {},
        "_version": 1
    }
}
```

