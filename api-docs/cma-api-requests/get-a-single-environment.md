---
title: "Get a single environment"
description: /environments/{environment_name}
url: /get-a-single-environment
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.839Z
updated_at: 2024-02-28T07:02:56.246Z
---

# Get a single environment

<p>The <span data-type='inlineCode'>Get a single environment</span> call returns more details about the specified environment of a stack.</p><p>When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.environments.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/environments/{environment_name}`

**Method**: `GET`

## URL Parameters

- **environment_name** (required)
  <p>Enter the name of the environment.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
  "environment": {
    "name": "production",
     "urls": [
      {
        "locale": "en-us",
        "url": "http://example.com/"
      }
    ],
    "uid": "asdfghjkl123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "tags": [],
    "_version": 1
  }
}
```

