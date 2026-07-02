---
title: "next"
description: "The next method retrieves the next set of response values and skips the current number of responses."
url: "https://www.contentstack.com/typescript-delivery-pagination-next"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## next

The next method retrieves the next set of response values and skips the current number of responses.

No parameters.

Returns:
Type
Pagination

**Example:**

```
const pagedResult = await query
                            .paginate()
                            .find<BlogPostEntry>();
const nextPageResult = await query.next().find<BlogPostEntry>();
```
