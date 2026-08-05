---
title: "Update language"
description: /locales/{code}
url: /update-language
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.699Z
updated_at: 2024-02-28T06:54:36.219Z
---

# Update language

<p>The <span data-type='inlineCode'>Update language</span> call will let you update the details (such as display name) and the fallback language of an existing language of your stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.</p><p>In the 'Body' section, enter the updated details of your language name and fallback language in JSON format.</p>

**API Endpoint**: `/locales/{code}`

**Method**: `PUT`

## URL Parameters

- **code** (required)
  <p></p>
<p>Enter the code of the language that you wish to update.</p>
<p></p>

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
    "name":"Updated Locale Name",
    "fallback_locale":"zh-cn"
  }
}
```

## Response

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

