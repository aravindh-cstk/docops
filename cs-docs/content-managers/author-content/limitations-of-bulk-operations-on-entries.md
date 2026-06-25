---
title: "[Author Content] - Limitations of Bulk Operations on Entries"
description: Limits and constraints for bulk operations on entries in Author Content.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-bulk-operations-on-entries
product: Contentstack
doc_type: reference
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Limitations of Bulk Operations on Entries

This page lists the operational limits and constraints for performing bulk actions on entries in Author Content. It is intended for content managers and administrators who need to plan or troubleshoot bulk publishing, unpublishing, exporting, deleting, and workflow updates across languages and environments.

## Limitations of Bulk Operations on Entries

- You can publish or unpublish up to **100 entries** in **10 languages** across **10 environments** at a time.
- You can export up to **10,000 entries** at a time.
- You can select and delete up to **10 entries** at a time.
- You can publish up to **10 localized entry versions** across **10 environments** at a time.
- When scheduling bulk publishing/unpublishing, the date cannot exceed **12 months** from the current date.
- There is no option to delete all entries in a stack at once.
- You can update the workflow stage for a maximum of **10 entries** at a time, provided they share the same workflow and workflow stage.
- You can change the workflow stage of up to **10 selected entries** to a common stage. For example, you can move entries in the “Ready for Review” stage to the “Complete” stage at once.
- Localized entry versions can only be deleted through the “Delete” modal of the master language entry. They cannot be deleted directly from the “Delete” modal of the localized entries themselves.
- When deleting entries in bulk from the entry list page, you cannot delete the corresponding localized versions of the selected entries.

**Note**: If you need to increase these limits, please contact our [support](mailto:support@contentstack.com) team.

## Common questions

**Q: Can I bulk publish more than 100 entries at a time?**  
A: The limit is **100 entries** per bulk publish/unpublish operation; to increase limits, contact [support](mailto:support@contentstack.com).

**Q: Can I bulk delete localized versions of entries from the entry list page?**  
A: No. When deleting entries in bulk from the entry list page, you cannot delete the corresponding localized versions of the selected entries.

**Q: How far in advance can I schedule bulk publishing/unpublishing?**  
A: When scheduling bulk publishing/unpublishing, the date cannot exceed **12 months** from the current date.

**Q: Can I delete all entries in a stack at once?**  
A: No. There is no option to delete all entries in a stack at once.