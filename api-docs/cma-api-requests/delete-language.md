---
title: "Delete language"
description: /locales/{code}
url: /delete-language
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.712Z
updated_at: 2024-02-28T06:56:04.080Z
---

# Delete language

<p>The <span data-type='inlineCode'>Delete language</span> call deletes an existing language from your stack.</p><p>When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/locales/{code}`

**Method**: `DELETE`

## URL Parameters

- **code** (required)
  <p>Enter the code of the language that you wish to delete.&nbsp;</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "notice": "Language removed successfully."
}
```

