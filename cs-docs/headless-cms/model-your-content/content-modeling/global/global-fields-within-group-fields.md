---
title: "Global Fields within Group Fields"
description: "Learn to use Global Fields within a Group Field in Contentstack to ensure consistency and simplify updates across content types."
url: /headless-cms/global-fields-within-group-fields
uid: blt7f649d10a65303c8
---

# Global Fields within Group Fields

## Global Fields within Group Fields

You can add a [Global](/docs/headless-cms/about-global-field) field within a [Group](/docs/headless-cms/group) field when creating a [content type](/docs/headless-cms/about-content-types). This setup allows you to reuse predefined field sets while organizing them in a modular, structured layout. It improves consistency, simplifies maintenance, and accelerates content modeling across multiple content types.

For example, to make SEO data reusable across web pages, you can create a Global field called **SEO Metadata**, which includes:

-   [Single Line Textbox](/docs/headless-cms/single-line-textbox) for SEO Title
-   [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) for Meta Description
-   Single Line Textbox for Meta Keywords

Then, inside a content type like a web page, you can create a Group Field named **SEO Content** and insert the **SEO Metadata** Global Field into it. This approach encapsulates all SEO-related fields in one place, ensuring consistency across entries and making global updates fast and effortless.

Integrating the Global field within the Group field ensures all associated fields are included in the content type, promoting consistency and simplifying updates.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), and [developer](/docs/headless-cms/types-of-roles#developer) can create Global fields and Content Types.

To add a Global field within a Group field, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon in the left navigation panel or press “C”.
2.  On the **Content Models** page, select **Global Fields** and click **\+ New Global Field**.
3.  Enter a **Name** (e.g., SEO Metadata) and optional **Description**, then click **Proceed**.

    ![Create Global Field screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73de037bba97de50/6805ff0ea090550e147f015b/1._Complex_Global_Fields-Global_Fields_Within_Group_Fields-Create-a-Global-Field.png)

4.  Click the **Insert Field (+)** icon and add the following fields:
    -   **Single Line Textbox** for meta title
    -   **Multi Line Textbox** for meta description
    -   **Single Line Textbox** for meta keywords
5.  Click **Save** or **Save and Close**.

    ![Saved Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacfaf1fd7c30c34e/6805ff0df6991c169db59c0e/2._global_field_crated.png)

6.  Click the “Content Models” icon again, then click **\+ New Content Type** and select **Create New**.
7.  In the **Create New Content Type** modal:

    -   Provide a **Name** (e.g., SEO Optimized Page)
    -   Provide a **Description** (optional)
    -   Select **Type**
    -   Click **Save and proceed**

    ![Create Content Type modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83f2c4a372370487/6805ff0d1ef983cdf8f7a007/3._Complex_Global_Fields-Global_Fields_Within_Group_Fields-Create-a-content-type.png)

8.  On the “Content Type Builder” page, click **Insert Field (+)** and select **Group**.
9.  In the **Group Properties** modal, enter a **Display Name** (e.g., SEO Content).
10.  Within the Group field, click **Insert Field (+)** and select **Global**.
11.  In the **Global Properties** modal, choose the **SEO Metadata** Global Field and click **Proceed**.
12.  Click **Save** or **Save and Close**.

![Group field with Global field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7cfaa2a21e5a7408/6805ff0ddac2584c34adf433/4._Content_type_created.png)

**Note:** When adding a Group field inside your Global field, each Group counts as **one nesting level**. You can nest up to **5 levels** only.

By adding Global Fields within Group Fields, you build modular, reusable, and easily maintainable content structures. This nesting strategy supports consistency across content types, improves scalability, and aligns with best practices for building future-proof content models in Contentstack.
