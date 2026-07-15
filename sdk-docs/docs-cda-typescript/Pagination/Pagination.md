---
title: "Pagination"
description: "In a single instance, a query will retrieve only the first 100 items in the response. You can paginate and retrieve the rest of the items in batches using the skip and limit parameters in subsequent requests. Example: const query = stack.contentType(\"contentTypeUid\").entry().query(); const pagedResult = await query .paginate() .find<BlogPostEntry>(); // OR const pagedResult = await query .paginate({ skip: 20, limit: 20 }) .find<BlogPostEntry>();"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/pagination"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Pagination

## Pagination

In a single instance, a query will retrieve only the first 100 items in the response. You can paginate and retrieve the rest of the items in batches using the skip and limit parameters in subsequent requests.

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const pagedResult = await query
                            .paginate()
                            .find<BlogPostEntry>(); 
// OR
const pagedResult = await query
                            .paginate({ skip: 20, limit: 20 })
                            .find<BlogPostEntry>();
```
