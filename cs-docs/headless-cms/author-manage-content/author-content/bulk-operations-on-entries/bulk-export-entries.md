---
title: "Bulk Export Entries"
description: "Bulk export entries in Contentstack. Export selected, page-level, or all entries in JSON or CSV format for analysis or backup."
url: /headless-cms/bulk-export-entries
---

# Bulk Export Entries

## Bulk Export Entries

Use the bulk export entries feature to export selected, page-level, or all entries from the [entries list](/docs/headless-cms/entries-list-overview) page. Additionally, you can customize which columns to include and choose to export the data in JSON or CSV format.

Bulk export saves time with large entry sets and ensures data is in a consistent format.

To bulk export entries, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and go to the **Entries** module.
2.  Define the entries to export using the following methods:
    1.  **Search**: Use different [search methods](/docs/headless-cms/about-search) (e.g., keyword or full-text) to display matching entries.
    2.  **Filter**: [Apply filters](/docs/headless-cms/use-filters) on the entry list page to narrow down the results.
    3.  **Select**: Manually select specific entries in the list.
3.  Click the “Export” icon in the top-right corner of the Entries page. If entries are manually selected, click the **Export** option in the floating panel.
    
    ![Export option in entries page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f829c97b0224aa8/68fb66f6f8c18b3e0c488848/1._Export_button.png)
    
4.  In the **Export Entries** modal, configure your export:
    1.  **Scope**: Choose whether to export selected entries, entries from the current page, or all filtered results.
        
        **Tip:** The total number of entries to be exported is listed in brackets.
        
    2.  **Manage columns**: Export all columns, or choose specific ones. Selected columns appear as solid pills, while hidden columns appear as dashed outlines.
        
        **Tip:** Use column selection to reduce file size and export only the data you need.
        
    3.  **Export format**: Choose between JSON or CSV (default is JSON). ![Export entries modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07129bbf5a36d20a/68fb66f570f7d33c7463d1bd/2._export_entries_modal.png)
5.  Click **Export**. You can start multiple exports, and each one is listed separately in the queue with its current status.
6.  After completion, the export file downloads automatically. You can also manage or download exports later from the [**Bulk Task Queue**](/docs/headless-cms/stack-bulk-task-queue).
7.  You can cancel exports while they are in progress. To cancel individual exports, click **Cancel**. To cancel all the exports, click the “X” icon.

Bulk export ensures consistent data formats and faster entry management for high-volume tasks.
