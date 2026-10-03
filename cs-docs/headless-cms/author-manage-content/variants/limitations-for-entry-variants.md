---
title: "Limitations for Entry Variants"
description: "Learn about the limitations of using Entry Variants in Contentstack."
url: /headless-cms/limitations-for-entry-variants
uid: blt6a08e8c4c02249c2
---

# Limitations for Entry Variants

## Limitations for Entry Variants

-   The Entry Variants feature is enabled per organization and may not be available on all plans. To have it enabled for your organization, contact the [support](mailto:support@contentstack.com) team.
-   Deleted entry variants cannot be restored from the Trash.
-   Variant groups and variants are shared across all branches, while linked content types and entry variants are branch-specific. For details, refer to [Branch Support for Variants](/docs/headless-cms/branch-support-for-variants).
-   API requests do not support custom [queries](/docs/developers/apis/content-delivery-api/queries) for entry variants. Subqueries (?query) with query operators only match data from the base entry, not variant-specific data.
-   A maximum of **3 entry variants** can be merged with the base entry when fetching personalized content from the CDN.

## Limitations for Stack Variant Groups

-   Variant groups exist only within the specific stack where they were created in.
