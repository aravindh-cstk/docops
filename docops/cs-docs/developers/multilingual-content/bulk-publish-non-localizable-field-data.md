---
title: "[Multilingual Content] - Bulk Publish Non-localizable Field Data"
description: Bulk publish localized entries from the master-language entry to reflect updates to Non-localizable fields across locales.
url: https://www.contentstack.com/docs/headless-cms/bulk-publish-non-localizable-field-data
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Multilingual Content] - Bulk Publish Non-localizable Field Data

This page explains how to bulk publish localized entries from the publishing modal of a master-language entry so updates to Non-localizable fields can be reflected across locales. It is intended for developers and content managers working with multilingual content who need to keep Non-localizable field data consistent across localized entries.

## Bulk Publish Non-localizable Field Data

When you update a **Non-localizable** field in the **master language entry**, you may want to reflect these changes across all **localized entries**. Instead of updating each entry manually, Contentstack allows you to **bulk publish** localized entries directly from the **publishing modal** of the master-language entry.

This bulk publishing action ensures that localized entries receive the latest updates from the **Non-localizable** field while maintaining content consistency across languages.

**Note**: When you update the **Non-localizable** setting for a field inside a **multiple type structure** (such as a Group, Modular Block, or Global), the change does not immediately reflect in existing entries. If you disable the Non-localizable setting, all child entries get updated, new versions are created, and the field becomes editable per locale—but this only happens after the entry is edited. If you enable the setting, it applies only to **new instances** added in the** master language entry **going forward. Learn more about [Managing Non-Localizable Fields](../create-content-types/managing-non-localizable-fields.md).

**Additional Resource**: To bulk publish entries in different languages, refer to our [Bulk Publish Localized Entries](./bulk-publish-localized-entries-on-different-locales.md) document.

## Common questions

**How do I bulk publish localized entries after updating a Non-localizable field?**  
Use the **publishing modal** of the **master-language entry** to **bulk publish** the localized entries.

**Will changing the Non-localizable setting inside a Group, Modular Block, or Global update existing entries immediately?**  
No. The change does not immediately reflect in existing entries.

**What happens if I disable the Non-localizable setting for a field inside a multiple type structure?**  
All child entries get updated, new versions are created, and the field becomes editable per locale—but this only happens after the entry is edited.

**Where can I learn more about managing Non-localizable fields and related bulk publishing?**  
See [Managing Non-Localizable Fields](../create-content-types/managing-non-localizable-fields.md) and [Bulk Publish Localized Entries](./bulk-publish-localized-entries-on-different-locales.md).