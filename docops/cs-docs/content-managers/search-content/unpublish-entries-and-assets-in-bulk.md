---
title: "[Search Content] - Unpublish Entries and Assets in Bulk"
description: Unpublish entries and assets found in search results in bulk.
url: https://www.contentstack.com/docs/headless-cms/unpublish-entries-and-assets-in-bulk
product: Contentstack
doc_type: how-to
audience:
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Search Content] - Unpublish Entries and Assets in Bulk

This page explains how content managers can unpublish multiple entries and assets at once from search results in Contentstack, including how to choose environments, languages, and scheduling options, and when to use bulk unpublish limitations.

## Unpublish Entries and Assets in Bulk

To unpublish entries and assets found in your search results in bulk, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select the “[Entries](../author-content/about-entries.md)” or “[Assets](../author-content/about-assets.md)” module.
- Search for the entries and assets you want to unpublish. You can use [Basic Search](./basic-search.md), [Advanced Search](./advanced-search.md), [Filters](./use-filters.md), and [Views](./about-views.md) to refine your search results.
- From the search results, select the entries or assets you want to unpublish. Click the **Unpublish** button on the floating bar at the top.![Unpublish Entries and Assets in Bulk_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt068ecbfee2753657/67d9659084e6683c0c3e1956/1._Bulk_Actions_on_Search_Items-Bulk_Unpublish-Unpublish_Icon.png)
- On the **Unpublish Entries**/**Unpublish Assets** screen:**Select Environment(s)** to which you want to unpublish the selected entries.
- **Select Language(s)** for which you want to unpublish the selected entries.

  **Note:** While unpublishing multiple localized and unlocalized versions of a single entry, you can select a maximum of **50** **languages** and **50** **environments**.
- Under **Unpublish**, you can select – **Now** (to unpublish immediately) or **Later** (to unpublish at a later date/time that you provide)
- Click **Send** to unpublish the entries/assets.![Unpublish Entries and Assets in Bulk_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9dbedc31382b9a26/67d96590dc713111100e3d18/2._Bulk_Actions_on_Search_Items-Bulk_Unpublish-Unpublish_Modal.png)

## Limitations for Unpublishing Entries and Assets in Bulk

- You can unpublish **10** **entries/assets** in **10** **languages** and **10** **environments** at a time
- The bulk-action date cannot extend beyond **12 months** when scheduling the bulk operation

## Common questions

### Why can’t I select more than 10 entries/assets for bulk unpublish?
Because you can unpublish **10** **entries/assets** in **10** **languages** and **10** **environments** at a time.

### How far in advance can I schedule a bulk unpublish operation?
The bulk-action date cannot extend beyond **12 months** when scheduling the bulk operation.

### Can I unpublish multiple localized and unlocalized versions of a single entry at once?
Yes. While unpublishing multiple localized and unlocalized versions of a single entry, you can select a maximum of **50** **languages** and **50** **environments**.