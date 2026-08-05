---
title: "Delete global field"
description: /global_fields/{global_field_uid}?force=true
url: /delete-global-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.792Z
updated_at: 2024-03-21T12:25:10.121Z
---

# Delete global field

<p>The <span data-type='inlineCode'>Delete global field</span> request allows you to delete a specific global field. </p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.global-fields.management:write</span> scope.</p><p class="warning"><strong>Warning</strong>: If your Global field has been referred within a particular content type, then you will need to pass an additional query parameter <span data-type='inlineCode'>force:true</span> to delete the Global field.</p><p>When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.<br /></p>

**API Endpoint**: `/global_fields/{global_field_uid}?force=true`

**Method**: `DELETE`

## URL Parameters

- **global_field_uid** (required)
  <p>Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.</p>

## Query Parameters

- **force** (required)
  <p>Set the <span data-type="inlineCode">force</span> parameter to 'true' to delete the Global field.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "notice": "Global Field deleted successfully."
}
```

