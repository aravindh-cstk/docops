---
title: "[Author Content] - Relink a Discussion"
description: Relink unlinked discussions to a field in Contentstack entries.
url: https://www.contentstack.com/docs/content-managers/author-content/relink-a-discussion
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: current
last_updated: 2026-03-25
---

# [Author Content] - Relink a Discussion

This page explains why discussions can become unlinked from fields in Contentstack entries and how content managers/authors can relink those discussions to an appropriate field when editing an entry.

## Relink a Discussion

Some discussions are unlinked from their fields due to the recent changes in content type or entry. This typically occurs in the following scenarios:
- **Marking fields as "Multiple" or reverting them to "Single":** Fields such as “[Group](/docs/developers/create-content-types/group),” “[Modular Blocks](/docs/developers/create-content-types/modular-blocks),” or “[Global](/docs/developers/global-field/about-global-field)” are made up of multiple subfields, and you can create discussions for each subfield. However, when you change the parent field to “[Multiple](/docs/developers/create-content-types/multiple),” the discussion loses track of the subfield it was linked to. The same issue occurs when you change a parent field from "Multiple" back to "Single".**Note:** You can add comments only to the primitive subfields within “Group,” “Modular Blocks,” or “Global” fields, such as “Boolean,” “Select,” “Link,” “Single Line Textbox,” “Multiline Textbox,” and so on.
- **Metadata not provided via API:** To identify each instance of a field marked as "Multiple," you must include the `_metadata` parameter in the API request. If the `_metadata` parameter is not provided, the discussion cannot identify the specific field instance it was linked to.

When a discussion is unlinked from a field, it moves to the “Active” section in the right navigation panel and remains in the “Unlinked” state.

To relink such discussions to a field of your choice, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and edit an existing entry.
- Go to the “Discussions” tab, where the **Active** section is displayed by default.
- Go to the unlinked discussion and click on **ReLink**.
- A popup titled **Relink Field With** appears with a list of alternative fields from which you can select one to link this discussion to.**Note:** You cannot relink a discussion to a field that has an active discussion.
- Click **Confirm** to relink the discussion to a field.

After relinking the comments to a field, the discussion becomes active and appears in the field view on the entry page.

## Common questions

### Why did my discussion become unlinked?
Some discussions are unlinked from their fields due to recent changes in content type or entry, such as changing a parent field between "Multiple" and "Single," or not providing `_metadata` via API for fields marked as "Multiple."

### Where do unlinked discussions appear?
When a discussion is unlinked from a field, it moves to the “Active” section in the right navigation panel and remains in the “Unlinked” state.

### Can I relink a discussion to any field?
A popup titled **Relink Field With** appears with a list of alternative fields from which you can select one to link this discussion to. **Note:** You cannot relink a discussion to a field that has an active discussion.

### What happens after I relink a discussion?
After relinking the comments to a field, the discussion becomes active and appears in the field view on the entry page.