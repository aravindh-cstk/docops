---
title: "Create a taxonomy"
description: /taxonomies/
url: /create-a-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T10:30:24.175Z
updated_at: 2025-10-09T10:35:25.624Z
---

# Create a taxonomy

<p>The <span class="code">Create a taxonomy</span> request creates a taxonomy in a particular stack of your organization.</p><p class="note"><strong>Note</strong>: Refer to the <a href="/docs/developers/create-content-types/restricted-keywords-for-uids" target="_self">Restricted Keywords for UIDs</a> to avoid using reserved keywords.</p>

**API Endpoint**: `/taxonomies/`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

## Request Body

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy."
    }
}
```

## Response

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy.",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:30:20.509Z",
        "updated_by": "b****************44"
    }
}
```

