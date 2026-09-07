---
title: "Copy an Entry"
description: "Learn how to copy entries in Contentstack to reuse content efficiently. Duplicate current locale or all localized entries with auto-updated unique fields."
url: /headless-cms/copy-an-entry
uid: bltc2ee1c246903fe7e
---

# Copy an Entry

## Copy an Entry

Copying an entry in Contentstack allows you to reuse existing content quickly without recreating it from scratch. Depending on your needs, you can copy a **single locale** or create copies **across all available languages**, making it easier to scale and manage content efficiently.

The copy behavior varies based on the option you choose in the **Copy Entry** modal.

To copy an [entry](/docs/headless-cms/about-entries), log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the **Entries** icon, or press **E** on your keyboard (available for both Windows and Mac).
2.  Find the entry you want to copy.
3.  Open the entry, click the horizontal ellipsis at the bottom of the editor, and select **Copy**.
4.  Alternatively, from the Entries list page, click the vertical ellipsis in the **Actions** column next to the entry, and select **Copy**.
5.  In the **Copy Entry** modal, choose one of the following options:
    1.  **Current Locale Only**: Creates a copy of the entry in the **currently selected locale**. Use this option when you want to duplicate a single locale for reuse or editing. The copied entry opens immediately, allowing you to edit fields before saving.

        **Note:** If you are copying a **non-master locale**, Contentstack also creates a copy of its **fallback locale** to preserve the locale relationship.

        ![1._Copy_Current_Locale_Only.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf166f65d3091dfde/69809a34a8684b7c11f1982e/1._Copy_Current_Locale_Only.gif)
    2.  **All Locales**: Creates a copy of all localized versions of the entry. Useful when you want to duplicate fully localized content.

        To maintain uniqueness, Contentstack automatically appends a timestamp to the title and unique fields during the copy process.

        **Example**:

        -   **Original title**: Product Overview
        -   **Copied title**: Product Overview – Copy (2025-01-10 14:22:18)

        **Note**:

        -   Copying entries across all locales may take longer depending on the size and complexity of the content.
        -   Localized entries remain localized, while unlocalized entries stay unlocalized until explicitly saved.

            **Example**: If fr is localized and es is unlocalized in the original entry, the copied fr version will stay localized, and es will remain unlocalized until saved.


        ![2._Copy_All_Locales.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea55bfc797151b4a/69809aeb813b083be239e73f/2._Copy_All_Locales.gif)

        **Warning:** If your content type enforces validations that do not allow these automatic updates, the copy operation may fail.


The Copy Entry feature helps streamline content operations by enabling fast duplication of single-locale or fully localized entries. This improves consistency, speeds up workflows, and reduces manual effort.
