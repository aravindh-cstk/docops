---
title: "Modular Blocks within Global Fields"
description: "Learn to use Modular Blocks in Global Fields to create reusable content structures, improving efficiency across content types."
url: /headless-cms/modular-blocks-within-global-fields
---

# Modular Blocks within Global Fields

## Modular Blocks within Global Fields

You can include [Modular Blocks](/docs/headless-cms/modular-blocks) within a [Global Field](/docs/headless-cms/about-global-field) to create a reusable structure across multiple [content types](/docs/headless-cms/about-content-types). This approach enables teams to manage dynamic, repeatable components from a single source, ensuring consistency and saving time.

For example, a car manufacturing company might need to manage the following across various web pages:

-   **Car Brands**: To display brand names and logos
-   **SEO Content**: For metadata optimization
-   **Customer Enquiry Form**: For collecting user inputs

Instead of adding these components separately to each content type, you can use a Global Field with Modular Blocks. Content managers can select, update, and maintain these shared components in one place. This reduces redundancy, improves consistency, and simplifies content maintenance.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), and [developer](/docs/headless-cms/types-of-roles#developer) can create Global fields and content types.

To add Modular Blocks within Global fields, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon in the left navigation panel or use the shortcut key “C”.
2.  On the **Content Models** page, select **Global Fields** and click **\+ New Global Field**.
3.  Enter a **Name** and **Description** (optional), then click **Proceed**.
    
    ![Create Global Field modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef6158c560f2d029/6800baac4851b5b6b0d2fec4/1._Complex_Global_Fields-Modular_Blocks_Within_Global_Fields-Create_New_Global_Field.png)
    
4.  Click **Insert a field (+)**, select **Modular Blocks**, and enter a name.
    
    **Note:** You can add up to **5 Modular Blocks** fields in a content type.
    
5.  Click **\+ New Block**, enter a **Title** (e.g., Car Brands), and click **Create**.
6.  Inside this block, click **Insert a field (+)** and add:
    -   **Single Line Textbox**: For Brand Name
    -   **Multi Line Textbox**: For Brand Description
    -   **File**: For Brand Logo
7.  Click **\+ New Block**, enter a name (e.g., SEO Content), and add:
    -   **Multi-line Textbox**: For Meta Description
    -   **Single Line Textbox**: For SEO Title
8.  Click **\+ New Block**, enter a name (e.g., Customer Enquiry Form), and add:
    -   **Single Line Textbox**: For customer email
    -   **Multi-line Textbox**: For message input
9.  Click **Save and Close**.
    
    ![Modular Block saved inside Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd28a6e0a2ae9b261/6800bee615d4c5e4f29228f7/2-modular-blocks.gif)
    
10.  Navigate to **Content Models** and open a **Content Type**.
11.  Click **Insert a field (+)** and select **Global** field.
12.  Select the Global Field you just created and click **Save** or **Save and Close**.

**Tip:** You can reference the same Global Field more than once in a content type or within a single Modular Blocks field. This flexibility supports complex, nested structures and helps future-proof your content model.

By using Modular Blocks within Global fields, you can build dynamic, reusable content structures that scale effortlessly across content types. This approach reduces redundancy, ensures consistency, and simplifies content maintenance for content managers and developers alike.

![Global field with modular blocks in entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4147f3e982ffe013/6800bee59a31913e1363de68/3._modular_blocks_within_global_fields.png)
