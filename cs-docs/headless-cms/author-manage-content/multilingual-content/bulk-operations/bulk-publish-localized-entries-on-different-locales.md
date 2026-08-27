---
title: "Bulk Publish Localized Entries on Different Locales"
description: "Display content in multiple locales right from your publishing modul. Learn all about bulk publishing entries in different languages on Contentstack."
url: /headless-cms/bulk-publish-localized-entries-on-different-locales
uid: blte8cb5045b56ad20e
---

# Bulk Publish Localized Entries on Different Locales

## Bulk Publish Localized Entries on Different Locales

Contentstack provides the option to publish all localized versions of an entry right from the publishing modal of the master language entry.

**Note:** This feature is available only if it is part of your plan. To avail of this feature, you can get in touch with our [Support](mailto:support@contentstack.com) team.

A localized entry is a separate entity altogether and will have its own versioning system and publishing queue status. When you publish a localized version of an entry, the latest version of that independent entry is sent for publishing.

An unlocalized entry inherits data from its fallback language. If there is no data in the fallback language, then the entry inherits content from the master language entry. When you publish an unlocalized version of an entry, the latest version of the content available in its fallback language is sent for publishing.

For example, you have a multilingual site that serves content in several languages: English (United States), French (France), Spanish (Spain), and Japanese (Japan).

If you have set English (United States) as the master language, you can publish entry versions available in other languages as well from the publishing modal of English (United States). In the publishing modal, you can select the languages to which you want to publish the selected entries.

To provide content in English (United States), French (France), and Spanish (Spain) but not in Japanese (Japan), deselect the Japanese (Japan) language in the publishing modal.

**Warning:** : When you publish multiple language entries at once, only the latest version of the localized entry will be published.

Learn more about [bulk publishing localized entries](/docs/headless-cms/bulk-publish-localized-entry-versions) in different languages.
