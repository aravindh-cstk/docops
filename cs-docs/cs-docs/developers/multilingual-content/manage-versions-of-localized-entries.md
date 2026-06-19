---
title: "[Set Up Your Project] - Manage Versions of Localized Entries"
description: Manage versions of localized entries and view localization status in the Edit Entry page.
url: https://www.contentstack.com/docs/headless-cms/manage-versions-of-localized-entries
product: Set Up Your Project
doc_type: guide
audience:
  - developers
  - content-managers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Manage Versions of Localized Entries

This page explains how versioning works for entries saved in different languages and how to view localization status for an entry. It is intended for developers and content managers working with multilingual content, and should be used when you need to understand or manage localized entry versions in your stack.

## Manage Versions of Localized Entries

Once an entry has been saved in a different language, it becomes independent of the master language or the fallback language. You can modify this data as per your requirement. Modifying and saving your entry multiple times will increment the version count. Therefore, each language entry has a separate versioning system. This enables you to compare your entry with earlier versions, if needed.

**Note**: The [Content Manager](/docs/developers/invite-users-and-assign-roles/types-of-roles#content-manager) can view or create content in multiple languages only if the languages are added to the stack by the [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)/[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer).

You can view information about the localization status of an entry through the ‘Edit Entry’ page of an entry. To do so, click the ‘Entry Information’ tab on the right-hand side panel of the ‘Edit Entry’ page of your entry. Under the ‘Localization Status’ section, you will find a list of all the languages that are part of your stack.

The languages are separated under three sections: ‘Master’, ‘Localized’, and ‘Unlocalized’. Each language is linked to the latest version of the entry in the specific language.

Let’s understand the different subsections under Localization Status:
- The ‘Master’ subsection possesses the link to the version of the entry in the master language.
- The ‘Localized’ subsection displays the languages in which your entry has been localized.
- The ‘Unlocalized’ subsection displays the languages in which your entry has not yet been localized.

Clicking on any of the above links will take you to the ‘Edit Entry’ page of the localized entry where you can view and manage them.

## Common questions

### Do localized entries share the same version history as the master entry?
No. Each language entry has a separate versioning system.

### What causes the version count of a localized entry to increase?
Modifying and saving your entry multiple times will increment the version count.

### Where can I see the localization status for an entry?
On the ‘Edit Entry’ page, click the ‘Entry Information’ tab and check the ‘Localization Status’ section.

### Who can add languages to the stack so Content Managers can work in multiple languages?
The languages must be added to the stack by the [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)/[Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer).

