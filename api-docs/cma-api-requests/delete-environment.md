---
title: "Delete environment"
description: /environments/{environment_name}
url: /delete-environment
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:06.508Z
updated_at: 2024-02-28T07:09:18.023Z
---

# Delete environment

<p>The <span data-type='inlineCode'>Delete environment</span> call will delete an existing publishing environment from your stack.</p><p>When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.environments.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/environments/{environment_name}`

**Method**: `DELETE`

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
  "notice": "Environment deleted successfully."
}
```

