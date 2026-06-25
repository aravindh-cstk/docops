---
title: "[Author Content] - Delete an Entry"
description: How to delete an entry in Contentstack and what happens after deletion, including trash retention and related resources.
url: https://www.contentstack.com/docs/headless-cms/delete-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content] - Delete an Entry

This page explains how to delete an entry in Contentstack, what deletion affects across stacks and environments, and what options exist for restoring deleted entries. It is intended for content managers (and developers using the API) who need to remove entries safely and understand retention behavior.

Deleting an [entry](./about-entries.md) removes it from your stack and any [environments](../../developers/set-up-environments/about-environments.md) or entries where it is being used. Use this action with caution, as deleted entries will no longer be available unless restored from the trash within the retention period.

To delete an entry, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click on the “Entries” icon (press "E"), on the left navigation panel.
- Open the entry you want to delete.
- Click on **horizontal ellipses** at the bottom of the entry editor and select **Delete**.
- Click **Delete **to confirm your action.

Alternatively, you can also delete an entry from the entries list page. To do so, perform the following steps:
- On the entries list page, locate the entry you want to delete.
- Select one of the following methods to delete the entry:Click the **vertical ellipsis** in the **Actions** column.
- Select the checkbox next to the entry, and use the options available in the floating panel.
- Select **Delete**.
- Click **Delete** to confirm your action.

**Note:**
- If the entry is available in multiple languages, delete each language version separately.
- You cannot delete a specific version of an entry. The delete action applies to the entire entry and all its versions.
- Deleted entries move to the **Trash**, where they remain for **14 days**. During this period, you can restore them if needed. After **14 days**, they are permanently deleted and cannot be recovered.

**Tip:** For efficiency, you can [delete entries in bulk](./bulk-delete-entries.md).

**Additional Resource:** To delete specific entry variants, refer to our [Delete an Entry Variant](../entry-variants/delete-an-entry-variant.md) document.

## API Reference

To delete an entry via API request, refer to the [Delete an entry](../../../api-docs/api-detail/content-management-api.md#delete-an-entry) API request.

## Common questions

**Q: What happens to an entry after I delete it?**  
A: Deleted entries move to the **Trash**, where they remain for **14 days**. During this period, you can restore them if needed. After **14 days**, they are permanently deleted and cannot be recovered.

**Q: Can I delete only one version of an entry?**  
A: You cannot delete a specific version of an entry. The delete action applies to the entire entry and all its versions.

**Q: If an entry exists in multiple languages, do I delete it once?**  
A: If the entry is available in multiple languages, delete each language version separately.

**Q: Where can I find the API request for deleting an entry?**  
A: Refer to the [Delete an entry](../../../api-docs/api-detail/content-management-api.md#delete-an-entry) API request.