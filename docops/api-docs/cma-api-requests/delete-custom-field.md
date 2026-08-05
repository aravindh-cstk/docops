---
title: "Delete custom field"
description: /extensions/{custom_field_uid}
url: /delete-custom-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.121Z
updated_at: 2026-02-18T11:33:07.672Z
---

# Delete custom field

<p>The <span data-type='inlineCode'>Delete custom field</span> request is used to delete a specific custom field.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/extensions/{custom_field_uid}`

**Method**: `DELETE`

## URL Parameters

- **custom_field_uid** (required)
  <p>Enter the UID of the custom field that you want to delete.</p>

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

