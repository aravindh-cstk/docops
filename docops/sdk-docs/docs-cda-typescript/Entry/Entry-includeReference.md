---
title: "includeReference"
description: "The includeReference method retrieves the content of the referred entries in your response."
url: "https://www.contentstack.com/typescript-delivery-query-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReference

The includeReference method retrieves the content of the referred entries in your response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceFieldUid | string | Yes | — | UID of the reference field to include |

Returns:
Type
Entry

**Example:**

```
const query = stack.contentType(contentType_uid).entry();
const result = await query
                      .includeReference("brand")
                      .find<BlogPostEntry>();
```

To retrieve all referred entries, use the following code snippet:
```
const result = await query.addParams({ include_all: true, include_all_depth: 2 }).find();
```

**Note**: The maximum supported value for `include_all_depth` is **100**.
