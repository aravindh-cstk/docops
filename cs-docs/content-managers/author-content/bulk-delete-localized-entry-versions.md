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

You can delete multiple localized and unlocalized versions of an entry directly from the “Delete” modal of the entry's [master language](../../developers/multilingual-content/set-the-master-language.md) version.

**Note**: When you delete only selected localized versions of an [entry](./about-entries.md), the remaining localized versions of the entry continue to exist within the stack.

To bulk delete localized and unlocalized entries, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
- Open the entry you want to delete.
- In the top-right corner of the page, select the master language from the **language dropdown**. The master language is marked with an **(M)** at the end.![Bulk_Delete_LocalEntryVersions_MasterLangg.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt80c8946c6306ca57/677cb932ef8fc91badfc2c89/Bulk_Delete_LocalEntryVersions_MasterLangg.png)
- Click the **horizontal ellipses** located at the bottom of the entry editor, and click **Delete**.![Bulk_Delete_Localized_Entry_Versions_DeleteButton.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61ae237325233a7a/677cb93181e2c03eb879838b/Bulk_Delete_Localized_Entry_Versions_DeleteButton.png)
- In the **Delete Entry** modal, click **Select all languages** and then **Delete**.![Bulk_Delete_Localized_Entry_Versions_DeleteModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt548ce1dd2b6064f5/677cb93289f49bd66f894cc7/Bulk_Delete_Localized_Entry_Versions_DeleteModal.png)

**Note**:
- Deleting a master language entry moves it and all its localized versions to the [Trash](../../developers/manage-trash/about-trash.md). These can be restored within **14 days**. After that, they will be permanently deleted.
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