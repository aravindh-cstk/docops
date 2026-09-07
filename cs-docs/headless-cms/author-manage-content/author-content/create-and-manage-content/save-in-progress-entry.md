---
title: "Save In-progress Entry"
description: "Learn how to save entries with incomplete mandatory fields in Contentstack, allowing you to preserve work-in-progress content and prevent data loss."
url: /headless-cms/save-in-progress-entry
uid: blt3cf1fef3caf3ba31
---

# Save In-progress Entry

## Save In-progress Entry

**Note:** This feature is available only for V3 stacks and may require activation. If the feature is not enabled in your account, contact Contentstack [support](mailto:support@contentstack.com).

When working with large or complex content types, completing an entry in a single session may not always be practical. Contentstack allows you to save your work while editing, even if some mandatory fields are not yet completed. These entries are referred to as **in-progress entries**.

Saving in-progress entries helps preserve unfinished work so you can return later to complete and publish the entry.

## In-Progress Entries with Drafts and Auto Save

If [Drafts and Auto Save](/docs/headless-cms/about-drafts-and-auto-save) is enabled in your stack, a draft entry is automatically created when you click **New Entry**. As you edit the entry, your changes are saved automatically as draft updates.

This allows you to begin working on an entry immediately without manually saving it first. The entry remains in **draft state** until you explicitly click **Save** or **Publish**, which creates a version of the entry.

This behavior is useful when you need to temporarily leave the entry editor, for example, to create referenced entries, and then return later to complete the original entry.

![Creating_New_Entries_with_Auto_Draft_Enabled.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc221a1fe5ba3c7d2/69b851d86a3f178606c4b408/Creating_New_Entries_with_Auto_Draft_Enabled.gif)

## Entry Versions and In-Progress Entries

New entries remain in **Draft** state (version 0) until they are saved for the first time. Some actions are not available while the entry is in this state.

Clicking **Save** confirms the changes and creates a new major version of the entry.

**Note:** Entries with incomplete mandatory fields cannot be published, scheduled for publishing, included in bulk publishing, added to releases, or referenced for publishing until the required fields are completed.

Saving in-progress entries allows you to work on content without needing to complete all mandatory fields in a single session. By preserving unfinished work and automatically capturing draft updates, this feature helps prevent data loss and supports flexible content creation workflows.

Once all required fields are completed, you can save the entry to create a version and proceed with publishing or other content management actions.
