---
title: "[Create Content Types] - Limitations of Content Types"
description: Limitations of Content Types
url: https://www.contentstack.com/docs/developers/create-content-types/limitations-of-content-types
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Create Content Types] - Limitations of Content Types

This page lists the limitations of Content Types, intended for developers designing content type schemas and managing schema versions, and should be used when planning naming, field counts, and versioning workflows.

## Limitations of Content Types

- The UID of a content type can have a maximum of **200 characters**.
- The UID accepts only **alphanumeric characters **and** underscores**.
- The description of a content type can have a maximum of **255 characters**.
- You can add up to **500 fields** in a content type schema.
- The **Title** field and the **Display Name** property can each have up to **200 characters**.
- While you can compare, you cannot restore or apply an older schema version directly.
- Contentstack automatically numbers versions sequentially. You cannot rename, merge, or manually manage version numbers.
- Version comparison doesn’t show how schema changes affect entries across environments (e.g., breaking changes or validations that may fail in certain locales).
- Changes to the **order of fields** are not tracked in version comparisons.
- The content type editor does not show which schema version you are viewing.

## Common questions

**How long can a content type UID be?**  
The UID of a content type can have a maximum of **200 characters**.

**What characters are allowed in a content type UID?**  
The UID accepts only **alphanumeric characters **and** underscores**.

**How many fields can a content type schema include?**  
You can add up to **500 fields** in a content type schema.

**Can I restore or apply an older schema version directly?**  
While you can compare, you cannot restore or apply an older schema version directly.