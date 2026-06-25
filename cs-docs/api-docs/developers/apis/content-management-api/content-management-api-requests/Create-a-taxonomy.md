---
title: "Create a taxonomy"
description: POST /taxonomies/
url: developers/apis/content-management-api/requests/create-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-10-09
---

# Create a taxonomy

**POST** `/taxonomies/`

The Create a taxonomy request creates a taxonomy in a particular stack of your organization.

**Note**: Refer to the [Restricted Keywords for UIDs](../../../../../cs-docs/developers/create-content-types/restricted-keywords-for-uids.md) to avoid using reserved keywords.

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy."
    }
}
```

## Sample Response

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

