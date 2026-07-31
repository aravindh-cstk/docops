---
title: "Delete label"
description: /labels/{label_uid}
url: /delete-label
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.626Z
updated_at: 2025-07-25T06:37:44.639Z
---

# Delete label

<p>The <span data-type='inlineCode'>Delete label</span> call is used to delete a specific label.</p>
<p>When executing the API call, add the <span data-type='inlineCode'>management_token</span> in the Authorization parameters.<br />To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.labels.management:write</span>scope.</p>

**API Endpoint**: `/labels/{label_uid}`

**Method**: `DELETE`

## URL Parameters

- **label_uid** (required)
  <p>Enter the unique ID of the label that you want to delete.</p>

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
  "notice": "Label deleted successfully."
}
```

