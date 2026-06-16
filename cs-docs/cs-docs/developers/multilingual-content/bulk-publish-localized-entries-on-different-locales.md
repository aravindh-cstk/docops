---
title: "[Set Up Your Project] - Bulk Publish Localized Entries on Different Locales"
description: Bulk Publish Localized Entries on Different Locales
url: https://www.contentstack.com/docs/developers/multilingual-content/bulk-publish-localized-entries-on-different-locales
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Bulk Publish Localized Entries on Different Locales

This page explains how to bulk publish localized versions of an entry across different locales from the publishing modal of the master language entry. It is intended for developers and content managers working with multilingual Contentstack projects who need to publish multiple language versions efficiently.

## Bulk Publish Localized Entries on Different Locales

Contentstack provides the option to publish all localized versions of an entry right from the publishing modal of the master language entry.

**Note**: This feature is available only if it is part of your plan. To avail of this feature, you can get in touch with our [Support](mailto:support@contentstack.com) team.

A localized entry is a separate entity altogether and will have its own versioning system and publishing queue status. When you publish a localized version of an entry, the latest version of that independent entry is sent for publishing.

An unlocalized entry inherits data from its fallback language. If there is no data in the fallback language, then the entry inherits content from the master language entry. When you publish an unlocalized version of an entry, the latest version of the content available in its fallback language is sent for publishing.

For example, you have a multilingual site that serves content in several languages: English (United States), French (France), Spanish (Spain), and Japanese (Japan).

If you have set English (United States) as the master language, you can publish entry versions available in other languages as well from the publishing modal of English (United States). In the publishing modal, you can select the languages to which you want to publish the selected entries.

To provide content in English (United States), French (France), and Spanish (Spain) but not in Japanese (Japan), deselect the Japanese (Japan) language in the publishing modal.

**Warning** : When you publish multiple language entries at once, only the latest version of the localized entry will be published.

Learn more about [bulk publishing localized entries](/docs/content-managers/bulk-operations-on-entries-and-assets/bulk-publish-localized-entry-versions) in different languages.

## Common questions

### Can I publish all localized versions of an entry from the master language entry?
Yes, Contentstack provides the option to publish all localized versions of an entry right from the publishing modal of the master language entry.

### What gets published when I bulk publish multiple language entries at once?
Only the latest version of the localized entry will be published.

### What is the difference between a localized entry and an unlocalized entry when publishing?
A localized entry is a separate entity with its own versioning system and publishing queue status, while an unlocalized entry inherits data from its fallback language (or the master language entry if no fallback data exists).

### Is this bulk publish feature available on all plans?
No, this feature is available only if it is part of your plan; you can contact [Support](mailto:support@contentstack.com) to avail of it.