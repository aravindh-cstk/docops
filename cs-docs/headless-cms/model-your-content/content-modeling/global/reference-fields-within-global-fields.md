---
title: "Reference Fields within Global Fields"
description: "Learn to add Reference fields within Global Fields in Contentstack to maintain consistent, reusable content across multiple entries."
url: /headless-cms/reference-fields-within-global-fields
uid: blt99d170d85a8ec558
---

# Reference Fields within Global Fields

## Reference Fields within Global Fields

You can add [reference](/docs/headless-cms/reference) fields within [global](/docs/headless-cms/about-global-field) fields to link reusable content across multiple [content types consistently](/docs/headless-cms/about-content-types). This method helps maintain uniformity and simplifies the process of updating related content, such as author details, categories, or tags, especially in large-scale websites and applications.

For example, if your blog frequently displays author information with each post, you can use a Global field that includes a Reference field linked to a content type (e.g., Author Details). Once set up, this ensures that all blog entries pull accurate, consistent author information from a single source. Any updates to the referenced entry automatically reflect wherever it’s used.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), and [developer](/docs/headless-cms/types-of-roles#developer) can create Global fields and content types.

To add a Reference field within Global fields, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

## Step 1: Create the Referenced Content Type

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon in the left navigation panel or use the shortcut key “C” (for Windows and Mac OS users).
2.  Click **\+ New Content Type** and provide a **Name** (e.g., Author Details).
3.  Click **Insert a field (+)** icon and add the following fields:
    -   **Single Line Textbox:** For Author Name
    -   **Multi Line Textbox:** For Author Address
    -   **JSON Rich Text Editor:** For Author Qualification Details
4.  Click **Save and Close**.

## Step 2: Create Global Field

1.  Navigate to **Content Models**, select **Global Fields**, and click **\+ New Global Field**.
2.  In the **Create New Global Field** modal, provide a **Name** (e.g., Blog Post) and click **Proceed**.

    ![Creating Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee6f4d078ab03098/6808f3f15c6380b053662b2a/1._Global_Fields-Reference_Fields_Within_Global_Fields-Global_Field_Creation.png)

3.  Within the **Global Field**, add the following fields:

    -   **Single Line Textbox:** For Blog Title
    -   **JSON Rich Text Editor:** For Blog Content
    -   **Reference field:** To link the **Author Details** content type

    ![Adding Reference Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47a47c765b4c7c09/6808f4bc3cded8049cdb62a1/2._global_field_creation.png)

4.  Click **Save and Close**.

## Step 3: Create Main Content Type

1.  Click **\+ New Content Type** and provide a suitable **Name** (e.g., **Blogs**).
2.  Add the following basic fields:
    -   **Single Line Textbox:** Blog Header
    -   **JSON Rich Text Editor:** Blog Footer
3.  Click the **Insert a field (+)** icon and select the **Global** field.
4.  Click the **Select Global Field** field and select the **Blog Post** global field.

    ![Main Content Type with Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda09e2630d56083a/6808f4daa7e11bf683283dd3/3._global_field_inside_the_content_type.png)

5.  Click **Save** or **Save and Close**.

Using Reference Fields within Global Fields helps you centralize and reuse content elements across entries. This method is ideal for linking dynamic content such as authors, categories, or partners. It reduces repetitive work, ensures consistency, and supports scalable, maintainable content models.
