---
title: "previous"
description: "The previous method retrieves the previous set of response values and skips the current number of responses."
url: "https://www.contentstack.com/typescript-delivery-pagination-previous"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## previous

The previous method retrieves the previous set of response values and skips the current number of responses.

No parameters.

Returns:
Type
Pagination

**Example:**

```
const pagedResult = await query
                            .paginate()
                            .find<BlogPostEntry>();
const prevPageResult = await query
                            .previous()
                            .find<BlogPostEntry>();
```
