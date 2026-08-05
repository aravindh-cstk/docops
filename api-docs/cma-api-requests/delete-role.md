---
title: "Delete role"
description: /roles/{role_uid}
url: /delete-role
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.220Z
updated_at: 2024-02-29T10:47:22.308Z
---

# Delete role

<p>The <span data-type='inlineCode'>Delete role</span> call deletes an existing role from your stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.roles.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/roles/{role_uid}`

**Method**: `DELETE`

## URL Parameters

- **role_uid** (required)
  <p>Enter the unique ID of the role that you want to delete.<br></p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
  "notice": "The role deleted successfully."
}
```

