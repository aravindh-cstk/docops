---
title: "Get Localized Entries"
description: "Learn to filter and view localized entries in Contentstack using language settings to streamline multilingual content management and improve localization accuracy."
url: /headless-cms/get-localized-entries
uid: bltfb8c8064333e8d81
---

# Get Localized Entries

## Get Localized Entries

When managing multilingual content, it is important to differentiate between localized entries and those displayed due to [fallback language](/docs/headless-cms/about-fallback-languages) settings.

Contentstack enables users to filter and view entries localized in the selected language, enhancing both the accuracy and efficiency of localization workflows.

**Note:** By default, the entries list displays only localized entries for the selected language because the **Show localized only** toggle is enabled. If you disable the toggle, the list displays both localized entries and their fallback content. To view entries across all available languages, select **All Languages** from the language filter.

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and click the “[Entries](/docs/headless-cms/about-entries)” icon in the left navigation panel or use the shortcut key “E” (for both Windows and Mac users).
2.  Access the **Language** filter using one of the following methods:
    -   Click the **Filters** tab in the left panel and select the **Languages** filter dropdown.

        **Note:** If this option isn’t visible, click **Manage Filters** at the bottom of the panel and enable the Language filter.

    -   Alternatively, click the “Filter” icon in the **Language** column.

        **Note:** If the Language column isn’t visible, enable it from **Table Settings**.

        ![Language column filter example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a470bf40f0b654e/68482f678177eed388c30dc5/3._Lanugage_Filter.png)

3.  Filter the localized content using one of the following methods:
    -   In the **Language** dropdown, select the desired language.
    -   In the **Localized in** dropdown (located within the same menu), select the same language again.

        **For example:** To view localized entries in Chinese, select “Chinese” as the language and select “Chinese” again in the Localized in dropdown.

        ![Example of language dropdown filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50734aaa8b9e6138/6842b60bd6b7cb92c42162db/2._show_localized_entires_-_method_1.png)

    -   Alternatively, enable the **Show localized only** toggle and select one or more languages as needed.

        ![Show Localized Only toggle example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a906fde7e47a706/6842b60ba38f5d989dec8f9a/2._show_localized_entires_-_method_2.png)

4.  Click **Apply** to save your preferences.

The entries list now displays only those entries explicitly localized in the selected language.

![Localized entries list example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76820e0987ca1421/6842b60b22d5698289358851/3._final_output.png)

**Note:** The language filter setting is saved automatically and remains active until changed.

**Additional Resource:** You can further refine your entry list by using [**Advanced Settings**](/docs/headless-cms/localization-operator-real-world-scenarios#case-2-search-for-entries-that-are-localized-only-in-chinese-china) in the Filters panel. This allows for more granular control over how localized content is displayed.
