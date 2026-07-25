---
title: "Delete a widget"
description: /extensions/{widget_uid}
url: /delete-a-widget
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.958Z
updated_at: 2026-02-18T11:33:59.673Z
---

# Delete a widget

<p>The <span data-type='inlineCode'>Delete a widget</span> call is used to delete a specific custom widget.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span> scope.</p>

**API Endpoint**: `/extensions/{widget_uid}`

**Method**: `DELETE`

## URL Parameters

- **widget_uid** (required)
  <p>Enter the UID of the widget that you want to delete.
</p>

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

