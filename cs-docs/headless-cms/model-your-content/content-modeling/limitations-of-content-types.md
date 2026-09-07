---
title: "Limitations of Content Types"
description: "Learn the character limits, field restrictions, and versioning rules for Contentstack content types."
url: /headless-cms/limitations-of-content-types
uid: bltb9cd9617579016bc
---

# Limitations of Content Types

## Limitations of Content Types

-   The UID of a content type can have a maximum of **200 characters**.
-   The UID accepts only **alphanumeric characters** and **underscores**.
-   The description of a content type can have a maximum of **255 characters**.
-   You can add up to **500 fields** in a content type schema.
-   The **Title** field and the **Display Name** property can each have up to **200 characters**.
-   While you can compare, you cannot restore or apply an older schema version directly.
-   Contentstack automatically numbers versions sequentially. You cannot rename, merge, or manually manage version numbers.
-   Version comparison doesn’t show how schema changes affect entries across environments (e.g., breaking changes or validations that may fail in certain locales).
-   Changes to the **order of fields** are not tracked in version comparisons.
-   The content type editor does not show which schema version you are viewing.
