---
title: "[Global Field] - Modular Blocks within Global Fields"
description: How to include Modular Blocks within a Global Field to create reusable structures across multiple content types.
url: https://www.contentstack.com/docs/headless-cms/modular-blocks-within-global-fields
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Global Field] - Modular Blocks within Global Fields

This page explains how to include Modular Blocks within a Global Field in Contentstack to create reusable, dynamic structures across multiple content types. It is intended for developers and content modelers who need repeatable components managed from a single source, and should be used when designing scalable content models that require consistency across entries and content types.

## Modular Blocks within Global Fields

You can include [Modular Blocks](../create-content-types/modular-blocks.md) within a [Global Field](./about-global-field.md) to create a reusable structure across multiple [content types](../create-content-types/about-content-types.md). This approach enables teams to manage dynamic, repeatable components from a single source, ensuring consistency and saving time.

For example, a car manufacturing company might need to manage the following across various web pages:
- **Car Brands**: To display brand names and logos
- **SEO Content**: For metadata optimization
- **Customer Enquiry Form**: For collecting user inputs

Instead of adding these components separately to each content type, you can use a Global Field with Modular Blocks. Content managers can select, update, and maintain these shared components in one place. This reduces redundancy, improves consistency, and simplifies content maintenance.

**Note:** Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can create Global fields and content types.

To add Modular Blocks within Global fields, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Content Models” icon in the left navigation panel or use the shortcut key “C”.
- On the **Content Models** page, select **Global Fields** and click **+ New Global Field**.
- Enter a **Name** and **Description** (optional), then click **Proceed**.![Create Global Field modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef6158c560f2d029/6800baac4851b5b6b0d2fec4/1._Complex_Global_Fields-Modular_Blocks_Within_Global_Fields-Create_New_Global_Field.png)
- Click **Insert a field (+)**, select **Modular Blocks**, and enter a name.

  **Note:** You can add up to **5 Modular Blocks** fields in a content type.
- Click **+ New Block**, enter a **Title** (e.g., Car Brands), and click **Create**.
- Inside this block, click **Insert a field (+)** and add:  
      **Single Line Textbox**: For Brand Name
- **Multi Line Textbox**: For Brand Description
- **File**: For Brand Logo
- Click **+ New Block**, enter a name (e.g., SEO Content), and add:  
      **Multi-line Textbox**: For Meta Description
- **Single Line Textbox**: For SEO Title
- Click **+ New Block**, enter a name (e.g., Customer Enquiry Form), and add:  
      **Single Line Textbox**: For customer email
- **Multi-line Textbox**: For message input
- Click **Save and Close**.![Modular Block saved inside Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd28a6e0a2ae9b261/6800bee615d4c5e4f29228f7/2-modular-blocks.gif)
- Navigate to **Content Models** and open a **Content Type**.
- Click **Insert a field (+)** and select **Global** field.
- Select the Global Field you just created and click **Save** or **Save and Close**.

**Tip:** You can reference the same Global Field more than once in a content type or within a single Modular Blocks field. This flexibility supports complex, nested structures and helps future-proof your content model.

By using Modular Blocks within Global fields, you can build dynamic, reusable content structures that scale effortlessly across content types. This approach reduces redundancy, ensures consistency, and simplifies content maintenance for content managers and developers alike.

## Common questions

**How many Modular Blocks fields can I add in a content type?**  
You can add up to **5 Modular Blocks** fields in a content type.

**Who can create Global fields and content types?**  
Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can create Global fields and content types.

**Can I reference the same Global Field more than once?**  
Yes, you can reference the same Global Field more than once in a content type or within a single Modular Blocks field.