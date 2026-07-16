---
title: "[Author Content] - Bulk Export Entries"
description: Use the bulk export entries feature to export selected, page-level, or all entries from the entries list page, with customizable columns and JSON/CSV formats.
url: https://www.contentstack.com/docs/headless-cms/bulk-export-entries
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content] - Bulk Export Entries

This page explains how to use the Bulk Export Entries feature in Contentstack to export entries from the Entries module. It is intended for content managers (and developers supporting content operations) who need to export entry data in JSON or CSV, especially when working with large entry sets.

## Bulk Export Entries

Use the bulk export entries feature to export selected, page-level, or all entries from the [entries list](./entries-list-overview.md) page. Additionally, you can customize which columns to include and choose to export the data in JSON or CSV format.

Bulk export saves time with large entry sets and ensures data is in a consistent format.

To bulk export entries, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and go to the **Entries** module.
- Define the entries to export using the following methods:**Search**: Use different [search methods](../search-content/about-search.md) (e.g., keyword or full-text) to display matching entries.
- **Filter**: [Apply filters](../search-content/use-filters.md) on the entry list page to narrow down the results.
- **Select**: Manually select specific entries in the list.
- Click the “Export” icon in the top-right corner of the Entries page. If entries are manually selected, click the **Export** option in the floating panel.![Export option in entries page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f829c97b0224aa8/68fb66f6f8c18b3e0c488848/1._Export_button.png)
- In the **Export Entries** modal, configure your export:**Scope**: Choose whether to export selected entries, entries from the current page, or all filtered results.**Tip:** The total number of entries to be exported is listed in brackets.
- **Manage columns**: Export all columns, or choose specific ones. Selected columns appear as solid pills, while hidden columns appear as dashed outlines.

  **Tip:** Use column selection to reduce file size and export only the data you need.
- **Export format**: Choose between JSON or CSV (default is JSON).![Export entries modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07129bbf5a36d20a/68fb66f570f7d33c7463d1bd/2._export_entries_modal.png)
- Click **Export**. You can start multiple exports, and each one is listed separately in the queue with its current status.
- After completion, the export file downloads automatically. You can also manage or download exports later from the [**Bulk Task Queue**](./stack-bulk-task-queue.md).
- You can cancel exports while they are in progress. To cancel individual exports, click **Cancel**. To cancel all the exports, click the “X” icon.

Bulk export ensures consistent data formats and faster entry management for high-volume tasks.

## Common questions

**Q: Can I export only the entries currently visible on the page?**  
A: Yes. In the **Export Entries** modal, use **Scope** to export entries from the current page.

**Q: Can I choose which fields/columns are included in the export?**  
A: Yes. Use **Manage columns** to export all columns or choose specific ones.

**Q: What export formats are supported?**  
A: You can choose between JSON or CSV (default is JSON).

**Q: Where can I find past exports if I don’t download them immediately?**  
A: You can manage or download exports later from the [**Bulk Task Queue**](./stack-bulk-task-queue.md).

filename: author-content-bulk-export-entries.md