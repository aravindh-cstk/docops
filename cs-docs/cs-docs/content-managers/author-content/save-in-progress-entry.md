---
title: "[Author Content] - Save In-progress Entry"
description: Save in-progress entries while editing, even if mandatory fields are not yet completed.
url: https://www.contentstack.com/docs/content-managers/author-content/save-in-progress-entry
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - authors
version: v3
last_updated: 2026-03-25
---

# [Author Content] - Save In-progress Entry

This page explains how saving in-progress entries works in Contentstack, including how it relates to Drafts and Auto Save and entry versions. It is intended for content managers and authors working in V3 stacks who need to preserve unfinished entry work and return to complete it later.

### Save In-progress Entry

**Note**: This feature is available only for V3 stacks and may require activation. If the feature is not enabled in your account, contact Contentstack [support](mailto:support@contentstack.com).

When working with large or complex content types, completing an entry in a single session may not always be practical. Contentstack allows you to save your work while editing, even if some mandatory fields are not yet completed. These entries are referred to as **in-progress entries**.

Saving in-progress entries helps preserve unfinished work so you can return later to complete and publish the entry.

## In-Progress Entries with Drafts and Auto Save

If [Drafts and Auto Save](/docs/content-managers/author-content/about-drafts-and-auto-save) is enabled in your stack, a draft entry is automatically created when you click **New Entry**. As you edit the entry, your changes are saved automatically as draft updates.

This allows you to begin working on an entry immediately without manually saving it first. The entry remains in **draft state** until you explicitly click **Save** or **Publish**, which creates a version of the entry.

This behavior is useful when you need to temporarily leave the entry editor, for example, to create referenced entries, and then return later to complete the original entry.

## Entry Versions and In-Progress Entries

New entries remain in **Draft** state (version 0) until they are saved for the first time. Some actions are not available while the entry is in this state.

Clicking **Save** confirms the changes and creates a new major version of the entry.

**Note**: Entries with incomplete mandatory fields cannot be published, scheduled for publishing, included in bulk publishing, added to releases, or referenced for publishing until the required fields are completed.

Saving in-progress entries allows you to work on content without needing to complete all mandatory fields in a single session. By preserving unfinished work and automatically capturing draft updates, this feature helps prevent data loss and supports flexible content creation workflows.

Once all required fields are completed, you can save the entry to create a version and proceed with publishing or other content management actions.

## Common questions

### Can I save an entry if mandatory fields are incomplete?
Yes. Contentstack allows you to save your work while editing even if some mandatory fields are not yet completed; these are referred to as **in-progress entries**.

### What happens if Drafts and Auto Save is enabled?
A draft entry is automatically created when you click **New Entry**, and changes are saved automatically as draft updates while you edit.

### When is a new version created?
A new major version is created when you explicitly click **Save** (and **Publish** also creates a version of the entry).

### What actions are blocked until mandatory fields are completed?
Entries with incomplete mandatory fields cannot be published, scheduled for publishing, included in bulk publishing, added to releases, or referenced for publishing until the required fields are completed.