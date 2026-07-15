---
title: "[Global Field] - Global Fields within Group Fields"
description: How to add a Global field within a Group field when creating a content type in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/global-fields-within-group-fields
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Global Field] - Global Fields within Group Fields

This page explains how to add a Global field within a Group field while creating a content type in Contentstack. It is intended for developers and content modelers who want to reuse predefined field sets in a modular structure, and should be used when designing scalable, consistent content models across multiple content types.

## Global Fields within Group Fields

You can add a [Global](./about-global-field.md) field within a [Group](../create-content-types/group.md) field when creating a [content type](../create-content-types/about-content-types.md). This setup allows you to reuse predefined field sets while organizing them in a modular, structured layout. It improves consistency, simplifies maintenance, and accelerates content modeling across multiple content types.

For example, to make SEO data reusable across web pages, you can create a Global field called **SEO Metadata**, which includes:
- [Single Line Textbox](../create-content-types/single-line-textbox.md) for SEO Title
- [Multi Line Textbox](../create-content-types/multi-line-textbox.md) for Meta Description
- Single Line Textbox for Meta Keywords

Then, inside a content type like a web page, you can create a Group Field named **SEO Content** and insert the **SEO Metadata** Global Field into it. This approach encapsulates all SEO-related fields in one place, ensuring consistency across entries and making global updates fast and effortless.

Integrating the Global field within the Group field ensures all associated fields are included in the content type, promoting consistency and simplifying updates.

**Note:** Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can create Global fields and Content Types.

To add a Global field within a Group field, log in to your [Contentstack account](https://www.contentstack.com/login) and follow these steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Content Models” icon in the left navigation panel or press “C”.
- On the **Content Models** page, select **Global Fields** and click **+ New Global Field**.
- Enter a **Name** (e.g., SEO Metadata) and optional **Description**, then click **Proceed**.![Create Global Field screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73de037bba97de50/6805ff0ea090550e147f015b/1._Complex_Global_Fields-Global_Fields_Within_Group_Fields-Create-a-Global-Field.png)
- Click the **Insert Field (+)** icon and add the following fields:**Single Line Textbox** for meta title
- **Multi Line Textbox** for meta description
- **Single Line Textbox** for meta keywords
- Click **Save** or **Save and Close**.![Saved Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacfaf1fd7c30c34e/6805ff0df6991c169db59c0e/2._global_field_crated.png)
- Click the “Content Models” icon again, then click **+ New Content Type** and select **Create New**.
- In the **Create New Content Type** modal:Provide a **Name** (e.g., SEO Optimized Page)
- Provide a **Description** (optional)
- Select **Type**
- Click **Save and proceed**
- On the “Content Type Builder” page, click **Insert Field (+)** and select **Group**.
- In the **Group Properties** modal, enter a **Display Name** (e.g., SEO Content).
- Within the Group field, click **Insert Field (+)** and select **Global**.
- In the **Global Properties** modal, choose the **SEO Metadata** Global Field and click **Proceed**.
- Click **Save** or **Save and Close**.

**Note:** When adding a Group field inside your Global field, each Group counts as **one nesting level**. You can nest up to **5 levels** only.

By adding Global Fields within Group Fields, you build modular, reusable, and easily maintainable content structures. This nesting strategy supports consistency across content types, improves scalability, and aligns with best practices for building future-proof content models in Contentstack.

## Common questions

### Who can create Global fields and Content Types?
Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can create Global fields and Content Types.

### Why add a Global field within a Group field?
This setup allows you to reuse predefined field sets while organizing them in a modular, structured layout.

### How many nesting levels are allowed when adding Group fields inside a Global field?
When adding a Group field inside your Global field, each Group counts as **one nesting level**. You can nest up to **5 levels** only.