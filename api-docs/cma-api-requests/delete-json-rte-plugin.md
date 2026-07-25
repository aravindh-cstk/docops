---
title: "Delete JSON RTE plugin"
description: /extensions/{json_rte_plugin_uid}
url: /delete-json-rte-plugin
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.166Z
updated_at: 2026-02-18T11:34:42.523Z
---

# Delete JSON RTE plugin

<p>The <span data-type='inlineCode'>Delete JSON RTE plugin</span> request allows you to delete a specific JSON RTE plugin.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span> scope.</p>

**API Endpoint**: `/extensions/{json_rte_plugin_uid}`

**Method**: `DELETE`

## URL Parameters

- **json_rte_plugin_uid** (required)
  <p>Enter the UID of the JSON RTE plugin that you want to update.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
    "notice": "Extension deleted successfully."
}
```

