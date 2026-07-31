---
title: "Add label"
description: /labels
url: /add-label
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.659Z
updated_at: 2025-07-25T06:36:37.745Z
---

# Add label

<p>The <span data-type='inlineCode'>Add label</span> call is used to create a label.</p>
<p>When executing the API call, under the 'Headers' section, add the API key of your stack and <span data-type='inlineCode'>management_token</span> in the Authorization parameters.</p>
<p>In the 'Body' section, enter the label details, such as the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.<br />To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.labels.management:write</span>scope.</p>

**API Endpoint**: `/labels`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

## Response

```json
{
  "notice": "Label created successfully.",
  "label": {
    "name": "Test",
    "parent": [],
    "uid": "1234567890abcdef",
    "updated_by": "sys_bltf123456789012",
    "created_by": "sys_bltf123456789012",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "content_types": [],
    "_version": "1"
  }
}
```

