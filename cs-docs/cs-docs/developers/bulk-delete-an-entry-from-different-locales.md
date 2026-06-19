---
title: "[Set Up Your Project] - Bulk Delete an Entry from Different Locales"
description: Bulk delete all localized versions of an entry from the “Delete” modal of the master language entry in Contentstack.
url: https://www.contentstack.com/docs/developers/bulk-delete-an-entry-from-different-locales
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Bulk Delete an Entry from Different Locales

This page explains how to delete all localized versions of an entry in Contentstack using the “Delete” modal from the master language entry. It is intended for developers and content managers working with multilingual stacks and should be used when you need to remove an entry across multiple locales (including its versions) in bulk.

## Bulk Delete an Entry from Different Locales

Contentstack allows you to delete all localized versions of an entry right from the “Delete” modal of the master language entry.

Earlier, you could only delete the master language variant of an entry. This meant that the localized versions of that entry remained intact within the stack. This is because each localized entry version forms a separate entity altogether and comprises its own versioning system.

With the option to delete a localized version of an entry, all the [versions](/docs/content-managers/entry-versions) of that entry can also be permanently deleted from the stack.

**Additional Resource**: Learn more about [how localization works in Contentstack](/docs/developers/multilingual-content/about-localization) to handle localized entry versions in a better way.

Let us look at an example to understand how to delete localized versions of an entry.

Consider a scenario where you have the following languages available within your stack: English (United States), Japanese (Japan), French (France), and Spanish (Spain). English (United States) is set as the master language of the stack.

You can delete entry versions available in other languages from the deletion modal of English (United States). In the deletion modal, you can select the languages from which you want to delete the entry.

**Tip**: To delete content present in Japanese (Japan), Spanish (Spain), and French (France) but not in the master language entry, you can simply deselect English (United States) in the “Delete” modal and select the remaining language versions for deletion.

Learn more about [deleting multiple language versions of an entry](/docs/content-managers/bulk-delete-localized-entry-versions).

**Note**: You can select and delete up to **100 entries **at a time. To delete more than 100 entries, repeat the process in batches.

## Common questions

### Can I delete localized versions without deleting the master language entry?
Yes. You can deselect the master language (for example, English (United States)) in the “Delete” modal and select the remaining language versions for deletion.

### What happens to entry versions when I delete a localized version?
With the option to delete a localized version of an entry, all the versions of that entry can also be permanently deleted from the stack.

### Is there a limit to how many entries I can bulk delete at once?
Yes. You can select and delete up to 100 entries at a time. To delete more than 100 entries, repeat the process in batches.

### Where can I learn more about localization and deleting multiple language versions?
See **Additional Resource**: [how localization works in Contentstack](/docs/developers/multilingual-content/about-localization) and [deleting multiple language versions of an entry](/docs/content-managers/bulk-delete-localized-entry-versions).

[set-up-your-project-bulk-delete-an-entry-from-different-locales.md]