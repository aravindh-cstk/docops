---
title: "Get a language"
description: /locales/{code}
url: /get-a-language
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.668Z
updated_at: 2024-02-28T06:18:04.344Z
---

# Get a language

<p>The <span data-type='inlineCode'>Get a language</span> call returns information about a specific language available on the stack.</p><p>When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/locales/{code}`

**Method**: `GET`

## URL Parameters

- **code** (required)
  <p>Enter the code of the language that you want to retrieve.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "locale": {
    "code": "zh-cn",
    "uid": "qwertyuiop123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "name": "Chinese - China",
    "ACL": {},
    "_version": 1,
    "tags": []
  }
}
```

