---
title: "[Author Content] - Bulk Delete Localized Entry Versions"
description: Bulk delete multiple localized and unlocalized versions of an entry from the Delete modal of the entry's master language version.
url: https://www.contentstack.com/docs/headless-cms/bulk-delete-localized-entry-versions
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Bulk Delete Localized Entry Versions

This page explains how to delete multiple localized and unlocalized versions of an entry using the **Delete Entry** modal from the entry’s master language version. It is intended for Contentstack content managers and authors who manage multilingual entries and need to remove multiple language versions at once.

## Bulk Delete Localized Entry Versions

You can delete multiple localized and unlocalized versions of an entry directly from the “Delete” modal of the entry's [master language](/docs/developers/multilingual-content/set-the-master-language) version.

**Note**: When you delete only selected localized versions of an [entry](/docs/content-managers/working-with-entries/about-entries), the remaining localized versions of the entry continue to exist within the stack.

To bulk delete localized and unlocalized entries, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
- Open the entry you want to delete.
- In the top-right corner of the page, select the master language from the **language dropdown**. The master language is marked with an **(M)** at the end.
- Click the **horizontal ellipses** located at the bottom of the entry editor, and click **Delete**.
- In the **Delete Entry** modal, click **Select all languages** and then **Delete**.

**Note**:
- Deleting a master language entry moves it and all its localized versions to the [Trash](/docs/developers/manage-trash/about-trash). These can be restored within **14 days**. After that, they will be permanently deleted.
- Localized entry versions can only be deleted through the “Delete” modal of the master language entry. They cannot be deleted directly from the “Delete” modal of the localized entries themselves.
- When deleting entries in bulk from the entry list page, you cannot delete the corresponding localized versions of the selected entries.

## Common questions

**Can I delete localized versions from a localized entry’s Delete modal?**  
No. Localized entry versions can only be deleted through the “Delete” modal of the master language entry.

**What happens if I delete only some localized versions?**  
When you delete only selected localized versions of an entry, the remaining localized versions of the entry continue to exist within the stack.

**What happens when I delete the master language entry?**  
Deleting a master language entry moves it and all its localized versions to the Trash. These can be restored within 14 days; after that, they will be permanently deleted.

**Can I bulk delete entries from the entry list page and also remove their localized versions?**  
No. When deleting entries in bulk from the entry list page, you cannot delete the corresponding localized versions of the selected entries.