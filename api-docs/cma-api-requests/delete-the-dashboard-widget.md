---
title: "Delete the Dashboard Widget"
description: /extensions/{extension_uid}
url: /delete-the-dashboard-widget
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.720Z
updated_at: 2025-07-18T09:15:20.860Z
---

# Delete the Dashboard Widget

<p>The <span data-type='inlineCode'>Delete dashboard widget</span> call is used to delete a specific custom dashboard.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span> scope.</p>

**API Endpoint**: `/extensions/{extension_uid}`

**Method**: `DELETE`

## URL Parameters

- **extension_uid** (required)

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
    "notice": "Extension deleted successfully."
}
```

