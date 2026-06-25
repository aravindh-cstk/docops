---
title: "[Drafts and Auto Save] - Delete Draft Entry"
description: Instructions for discarding draft changes and restoring an entry to its last saved version in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/delete-draft-entry
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - editors
version: early-access
last_updated: 2026-05-07
---

# [Drafts and Auto Save] - Delete Draft Entry

This page explains how Contentstack Drafts and Auto Save works when you want to discard auto-saved draft changes for an entry, who should follow these steps (content managers and editors), and when to use it (when you want to revert an entry to its last saved version).

## Delete Draft Entry

**Note**: Drafts and Auto Save is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team for more information.

Drafts and Auto Save automatically stores changes as drafts while you edit an entry. If you no longer need those changes, you can discard the draft and revert the entry to its last saved version.

This guide explains:
- How to identify entries with draft changes
- How to delete a draft
- What happens after deleting a draft

**Warning:** Discarding a draft permanently removes all unsaved changes. This action cannot be undone.

To delete a draft entry, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries” icon in the left navigation panel.
- On the [Entry Listing](./entries-list-overview.md) page, review the **Version** column. Entries with draft changes display a **Draft** pill next to the version number.
- Open the entry that contains draft changes.
- In the entry editor, click the horizontal ellipsis.
- Select **Discard Draft**.
- Review the confirmation message.
- Click **Delete Draft** to confirm.

Contentstack removes all auto-saved changes and restores the entry to its last saved version, if one exists.

**Note:**
- If the entry was in a **Draft** state, deleting the draft removes all unsaved content associated with that entry.
- If another user is actively editing the entry, field-level locks may restrict certain actions. Confirm that no active edits are in progress before discarding a draft.
- Draft versions are retained only for the **five most recent major versions** of an entry. When new major versions are created, draft versions associated with older major versions are automatically removed.

## When to Delete a Draft

You may want to delete a draft when:
- The draft contains unintended changes
- The draft was created during testing
- You want to discard all in-progress edits
- Experimental updates from collaborators should not be retained

Before discarding a draft, review the changes carefully to ensure that no required updates are lost.

## Common questions

### Does deleting a draft delete the entry itself?
No. Deleting a draft removes auto-saved/unsaved changes and restores the entry to its last saved version, if one exists.

### Can I undo a discarded draft?
No. **Warning:** Discarding a draft permanently removes all unsaved changes. This action cannot be undone.

### How can I find entries that have draft changes?
Review the **Version** column on the [Entry Listing](./entries-list-overview.md) page for a **Draft** pill, or use **Advanced Search** to filter entries that contain draft changes.

### Why might I be unable to discard a draft?
If another user is actively editing the entry, field-level locks may restrict certain actions. Confirm that no active edits are in progress before discarding a draft.