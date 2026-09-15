---
title: "Copy a Global Field"
description: "Learn how to copy a Global field in Contentstack to reuse existing field structures with minimal modifications."
url: /headless-cms/copy-a-global-field
uid: blte748ddc9c9400dd9
---

# Copy a Global Field

## Copy a Global Field

Contentstack allows you to duplicate an existing Global field, enabling you to reuse its structure with minimal modifications instead of creating a new one from scratch.

To copy a Global field, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) where you want to copy a Global field.
2.  Click the **Content Models** icon and select **Global Fields** in the left panel.
3.  Locate the Global field you want to copy. Click the vertical ellipsis in the **Actions** column next to it and select **Copy Global Field**.
4.  The **Copy Global Field** modal appears with the name "Copy of {your\_global\_field\_name}". Enter a suitable name and description. The UID is auto-generated, but you can update it as required.

    **Tip:** Refer to the [Restricted Keywords for UIDs](/docs/headless-cms/restricted-keywords-for-uids) to avoid using reserved keywords.

5.  Click **Copy**.

    ![Copy Global Field modal in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23506295b44be3a9/67ff99ec54c6903a91ca9082/1-Copy-of-Global-Field-1.gif)


Once copied, the new Global field retains the original structure, allowing modifications without affecting the source field.

For [Nested Global](/docs/headless-cms/create-a-global-field#using-nested-global-fields) fields, the copied field will maintain its existing structure, including all nested components. You can modify these fields as needed without altering the original Global field.

By following these steps, you can efficiently manage and reuse Global fields in Contentstack, streamlining content modeling workflows.
