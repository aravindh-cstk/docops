---
title: "Delete an Entry"
description: "Learn how to safely delete entries in your Contentstack account with step-by-step guidance, tips for recovery, and bulk deletion options."
url: /headless-cms/delete-an-entry
uid: blt9a68c626c43533a3
---

# Delete an Entry

## Delete an Entry

Deleting an [entry](/docs/headless-cms/about-entries) removes it from your stack and any [environments](/docs/headless-cms/about-environments) or entries where it is being used. Use this action with caution, as deleted entries will no longer be available unless restored from the trash within the retention period.

To delete an entry, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click on the “Entries” icon (press "E"), on the left navigation panel.
2.  Open the entry you want to delete.
3.  Click on **horizontal ellipses** at the bottom of the entry editor and select **Delete**.
4.  Click **Delete** to confirm your action.

Alternatively, you can also delete an entry from the entries list page. To do so, perform the following steps:

1.  On the entries list page, locate the entry you want to delete.
2.  Select one of the following methods to delete the entry:
    1.  Click the **vertical ellipsis** in the **Actions** column.
    2.  Select the checkbox next to the entry, and use the options available in the floating panel.
3.  Select **Delete**.
4.  Click **Delete** to confirm your action.

**Note:**

-   If the entry is available in multiple languages, delete each language version separately.
-   You cannot delete a specific version of an entry. The delete action applies to the entire entry and all its versions.
-   Deleted entries move to the **Trash**, where they remain for **14 days**. During this period, you can restore them if needed. After **14 days**, they are permanently deleted and cannot be recovered.

**Tip:** For efficiency, you can [delete entries in bulk](/docs/headless-cms/bulk-delete-entries/).

**Additional Resource:** To delete specific entry variants, refer to our [Delete an Entry Variant](/docs/headless-cms/delete-an-entry-variant) document.

## API Reference

To delete an entry via API request, refer to the [Delete an entry](/docs/developers/apis/content-management-api/entries#delete-an-entry) API request.
