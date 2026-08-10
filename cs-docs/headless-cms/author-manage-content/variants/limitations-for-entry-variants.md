---
title: "Limitations for Entry Variants"
description: "Learn about the limitations of using Entry Variants in Contentstack."
url: /headless-cms/limitations-for-entry-variants
---

# Limitations for Entry Variants

## Limitations for Entry Variants

-   The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.
-   Deleted entry variants cannot be restored from the Trash.
-   Variant groups, variants, and entry variants are only supported on the main branch. When you create a new branch, the entry variants, variant groups, and variants will not be cloned.
-   API requests do not support custom [queries](/docs/developers/apis/content-delivery-api/queries) for entry variants. Subqueries (?query) with query operators only match data from the base entry, not variant-specific data.
-   A maximum of **3 entry variants** can be merged with the base entry when fetching personalized content from the CDN.

## Limitations for Stack Variant Groups

-   Variant groups exist only within the specific stack where they were created in.
