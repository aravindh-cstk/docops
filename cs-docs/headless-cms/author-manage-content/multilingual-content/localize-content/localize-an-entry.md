---
title: "Localize an Entry"
description: "Learn how to localize entries in Contentstack to manage multilingual content effectively. Follow these steps to adapt your content for various languages."
url: /headless-cms/localize-an-entry
---

# Localize an Entry

## Localize an Entry

Localizing an [entry](/docs/headless-cms/about-entries) in Contentstack allows you to create independent versions of your content for different languages, breaking the inheritance from [fallback languages](/docs/headless-cms/about-fallback-languages).

To localize an entry, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Entries” icon or use the shortcut key “E” (for both Windows and Mac users).
2.  Locate and open the entry that you want to localize.
3.  Use the **language dropdown** in the top-right corner to select the language you want to localize the entry into.
    
    This opens an unlocalized copy of the original entry with content inherited from its fallback language.
    
4.  Replace the inherited content with the appropriate translations for the selected language, and click **Save** to create the localized version.

**Note:**

-   Localizing an entry creates an independent version with its own versioning and publishing status.
-   To automate content translation, refer to the [Manage Content Translation](/marketplace#translation) guide.
-   Some fields in your entry may be marked as **Non-localizable**. These fields are editable only in the **master-language entry** and appear as **read-only** in localized versions. To learn more, refer to the [Understanding Non-localizable Fields](/docs/headless-cms/understanding-non-localizable-exceptions-for-content-managers) document.

## How Localized Entries Work with the “Copy Entry” Feature

The **Copy Entry** action allows you to duplicate entries before localizing them. When [copying an entry](/docs/headless-cms/copy-an-entry), you can choose between two modes depending on whether you want to copy only the master version or include all existing localized versions.

1.  **Copying an Entry Using “Current Locale Only”**
    
    When you copy an entry using the **Current Locale Only** option, Contentstack creates a copy of the entry in the **currently selected locale**.
    
    -   If the current locale is the **master locale**, only the master entry is copied.
    -   If the current locale is a **non-master locale**, Contentstack also creates a copy of the entry’s **fallback locale** to preserve the localization hierarchy.
    -   Any other localized versions are **not** included in the copy.
    
    After the copy process completes, you can further localize the copied entry into additional languages by following the standard localization steps described above.
    
2.  **Copying an Entry Using “All Locales”**
    
    When you copy an entry using the **All Locales** option, Contentstack creates duplicates of every existing localized version of the entry. Each localized copy retains its language-specific content, ensuring that translations and regional variations are preserved.
    
    However:
    
    -   Fields marked as non-localizable still inherit values from the master entry.
    -   The duplicated entries, including both master and localized versions, receive updated titles and unique fields. When required, a timestamp is appended to maintain uniqueness and to avoid conflicts.

**Note:** If a locale is disabled or removed, it will **not** be copied when selecting **All Locales**.

## API Reference

To localize an entry via API, refer to the [Localize an Entry](/docs/developers/apis/content-management-api/entries#localize-an-entry) API request.
