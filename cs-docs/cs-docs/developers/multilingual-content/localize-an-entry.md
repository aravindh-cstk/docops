---
title: "[Multilingual Content] - Localize an Entry"
description: Localizing an entry in Contentstack to create independent versions for different languages and how it works with the Copy Entry feature.
url: https://www.contentstack.com/docs/headless-cms/localize-an-entry
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Multilingual Content] - Localize an Entry

This page explains how to localize an entry in Contentstack to create independent language versions, including how localization interacts with the “Copy Entry” feature and where to find the related API reference. It is intended for developers and content managers working with multilingual content and should be used when you need to create or manage localized entry variants.

### Item 1

#### Article section

##### Heading

Localize an Entry

##### Content

Localizing an [entry](/docs/content-managers/author-content/about-entries) in Contentstack allows you to create independent versions of your content for different languages, breaking the inheritance from [fallback languages](/docs/developers/multilingual-content/about-fallback-languages).

To localize an entry, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/developers/set-up-stack/about-stack), and perform the following steps:
- Click the “Entries” icon or use the shortcut key “E” (for both Windows and Mac users).
- Locate and open the entry that you want to localize.
- Use the **language dropdown** in the top-right corner to select the language you want to localize the entry into.This opens an unlocalized copy of the original entry with content inherited from its fallback language.
- Replace the inherited content with the appropriate translations for the selected language, and click **Save** to create the localized version.

**Note:**
- Localizing an entry creates an independent version with its own versioning and publishing status.
- To automate content translation, refer to the [Manage Content Translation](/docs/developers/how-to-guides/manage-content-translation-in-contentstack) guide.
- Some fields in your entry may be marked as **Non-localizable**. These fields are editable only in the **master-language entry** and appear as **read-only** in localized versions. To learn more, refer to the [Understanding Non-localizable Fields](/docs/content-managers/author-content/understanding-non-localizable-exceptions-for-content-managers) document.

## How Localized Entries Work with the “Copy Entry” Feature
The **Copy Entry** action allows you to duplicate entries before localizing them. When [copying an entry](/docs/content-managers/author-content/copy-an-entry), you can choose between two modes depending on whether you want to copy only the master version or include all existing localized versions.
- **Copying an Entry Using “Current Locale Only”**When you copy an entry using the **Current Locale Only** option, Contentstack creates a copy of the entry in the **currently selected locale**.

If the current locale is the **master locale**, only the master entry is copied.
- If the current locale is a **non-master locale**, Contentstack also creates a copy of the entry’s **fallback locale** to preserve the localization hierarchy.
- Any other localized versions are **not** included in the copy.

After the copy process completes, you can further localize the copied entry into additional languages by following the standard localization steps described above.
- **Copying an Entry Using “All Locales”**When you copy an entry using the **All Locales** option, Contentstack creates duplicates of every existing localized version of the entry. Each localized copy retains its language-specific content, ensuring that translations and regional variations are preserved.

However:

Fields marked as non-localizable still inherit values from the master entry.
- The duplicated entries, including both master and localized versions, receive updated titles and unique fields. When required, a timestamp is appended to maintain uniqueness and to avoid conflicts.

**Note**: If a locale is disabled or removed, it will **not** be copied when selecting **All Locales**.

## API Reference
To localize an entry via API, refer to the [Localize an Entry](/docs/developers/apis/content-management-api#localize-an-entry) API request.

## Common questions

### What does it mean to “localize an entry” in Contentstack?
Localizing an entry creates an independent version of the entry for a selected language, breaking inheritance from fallback languages.

### Do localized entries have their own publishing status and versioning?
Yes. Localizing an entry creates an independent version with its own versioning and publishing status.

### What happens to non-localizable fields in localized entries?
Fields marked as **Non-localizable** are editable only in the **master-language entry** and appear as **read-only** in localized versions.

### Where can I find the API request to localize an entry?
See the **API Reference** section and follow the [Localize an Entry](/docs/developers/apis/content-management-api#localize-an-entry) API request link.