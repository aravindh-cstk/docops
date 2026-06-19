---
title: "[Variants CMS] - Limitations for Entry Variants"
description: Limitations and constraints for using Entry Variants and Stack Variant Groups in Variants CMS.
url: https://www.contentstack.com/docs/headless-cms/limitations-for-entry-variants
product: Contentstack
doc_type: reference
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Variants CMS] - Limitations for Entry Variants

This page lists known limitations and constraints for Entry Variants and Stack Variant Groups in Variants CMS. It is intended for content managers and developers who need to understand feature availability and behavioral restrictions before implementing or relying on entry variants in production workflows.

## Limitations for Entry Variants

- The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.
- Deleted entry variants cannot be restored from the Trash.
- Variant groups, variants, and entry variants are only supported on the main branch. When you create a new branch, the entry variants, variant groups, and variants will not be cloned.
- API requests do not support custom [queries](/docs/developers/apis/content-delivery-api#queries) for entry variants. Subqueries (`?query`) with query operators only match data from the base entry, not variant-specific data.
- A maximum of **3 entry variants** can be merged with the base entry when fetching personalized content from the CDN.

## Limitations for Stack Variant Groups

- Variant groups exist only within the specific stack where they were created in.

## Common questions

**Q: Can I restore a deleted entry variant from the Trash?**  
A: No. Deleted entry variants cannot be restored from the Trash.

**Q: Are entry variants supported across branches?**  
A: No. Variant groups, variants, and entry variants are only supported on the main branch, and they will not be cloned when you create a new branch.

**Q: Do Content Delivery API queries work with variant-specific data?**  
A: API requests do not support custom queries for entry variants, and subqueries (`?query`) with query operators only match data from the base entry, not variant-specific data.

**Q: How many entry variants can be merged with the base entry from the CDN?**  
A: A maximum of **3 entry variants** can be merged with the base entry when fetching personalized content from the CDN.