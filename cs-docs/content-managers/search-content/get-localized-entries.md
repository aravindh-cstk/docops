---
title: "[Search Content] - Get Localized Entries"
description: How to filter and view entries that are explicitly localized in a selected language (and distinguish them from fallback content).
url: https://www.contentstack.com/docs/headless-cms/get-localized-entries
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Search Content] - Get Localized Entries

This page explains how to filter your entries list to show only entries that are explicitly localized in a selected language (as opposed to entries shown via fallback language settings). It is intended for users managing multilingual content who need accurate localization visibility while searching and filtering entries.

### Get Localized Entries

When managing multilingual content, it is important to differentiate between localized entries and those displayed due to [fallback language](../../developers/multilingual-content/about-fallback-languages.md) settings.

Contentstack enables users to filter and view entries localized in the selected language, enhancing both the accuracy and efficiency of localization workflows.

**Note**: By default, the entries list displays only localized entries for the selected language because the **Show localized only** toggle is enabled. If you disable the toggle, the list displays both localized entries and their fallback content. To view entries across all available languages, select **All Languages** from the language filter.

- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and click the “[Entries](../author-content/about-entries.md)” icon in the left navigation panel or use the shortcut key “E” (for both Windows and Mac users).
- Access the **Language** filter using one of the following methods:
  - Click the **Filters** tab in the left panel and select the **Languages** filter dropdown.
    - **Note:** If this option isn’t visible, click **Manage Filters** at the bottom of the panel and enable the Language filter.
  - Alternatively, click the “Filter” icon in the **Language** column.
    - **Note:** If the Language column isn’t visible, enable it from **Table Settings**.
- Filter the localized content using one of the following methods:
  - In the **Language** dropdown, select the desired language.
  - In the **Localized in** dropdown (located within the same menu), select the same language again.
    - **For example:** To view localized entries in Chinese, select “Chinese” as the language and select “Chinese” again in the Localized in dropdown.
  - Alternatively, enable the **Show localized only** toggle and select one or more languages as needed.![Show Localized Only toggle example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a906fde7e47a706/6842b60ba38f5d989dec8f9a/2._show_localized_entires_-_method_2.png)
- Click **Apply** to save your preferences.

The entries list now displays only those entries explicitly localized in the selected language.

**Note:** The language filter setting is saved automatically and remains active until changed.

**Additional Resources:** You can further refine your entry list by using [**Advanced Settings**](./localization-operator-real-world-scenarios.md#case-2-search-for-entries-that-are-localized-only-in-chinese-china) in the Filters panel. This allows for more granular control over how localized content is displayed.

## Common questions

**Q: Why do I see entries in a language even if they aren’t localized?**  
A: They may be displayed due to [fallback language](../../developers/multilingual-content/about-fallback-languages.md) settings rather than being explicitly localized.

**Q: What does the “Show localized only” toggle do?**  
A: When enabled, the entries list displays only localized entries for the selected language; when disabled, it shows both localized entries and fallback content.

**Q: How can I view entries across all languages?**  
A: Select **All Languages** from the language filter.

**Q: What if I don’t see the Language filter or Language column?**  
A: Use **Manage Filters** to enable the Language filter, and use **Table Settings** to enable the Language column.