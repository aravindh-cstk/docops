---
title: "Delete Draft Entry"
description: "Learn how to delete unwanted draft changes in Contentstack, including how to identify draft entries and what happens after discarding a draft."
url: /headless-cms/delete-draft-entry
---

# Delete Draft Entry

## Delete Draft Entry

**Note:** Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team for more information.

Drafts and Auto Save automatically stores changes as drafts while you edit an entry. If you no longer need those changes, you can discard the draft and revert the entry to its last saved version.

This guide explains:

-   How to identify entries with draft changes
-   How to delete a draft
-   What happens after deleting a draft

**Warning:** Discarding a draft permanently removes all unsaved changes. This action cannot be undone.

To delete a draft entry, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon in the left navigation panel.
2.  On the [Entry Listing](/docs/headless-cms/entries-list-overview) page, review the **Version** column. Entries with draft changes display a **Draft** pill next to the version number.
3.  Open the entry that contains draft changes.
4.  In the entry editor, click the horizontal ellipsis.
5.  Select **Discard Draft**.
6.  Review the confirmation message.
7.  Click **Delete Draft** to confirm.

Contentstack removes all auto-saved changes and restores the entry to its last saved version, if one exists.

![Delete_Draft_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68d5acadbfedda74/69b83214ab97e956730a5a78/Delete_Draft_Entry.gif)

**Note:**

-   If the entry was in a **Draft** state, deleting the draft removes all unsaved content associated with that entry.
-   If another user is actively editing the entry, field-level locks may restrict certain actions. Confirm that no active edits are in progress before discarding a draft.
-   Draft versions are retained only for the **five most recent major versions** of an entry. When new major versions are created, draft versions associated with older major versions are automatically removed.
    

## When to Delete a Draft

You may want to delete a draft when:

-   The draft contains unintended changes
-   The draft was created during testing
-   You want to discard all in-progress edits
-   Experimental updates from collaborators should not be retained

Before discarding a draft, review the changes carefully to ensure that no required updates are lost.
