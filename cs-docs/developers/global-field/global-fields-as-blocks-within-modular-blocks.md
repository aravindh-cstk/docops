---
title: "[Global Field] - Global Fields as Blocks within Modular Blocks"
description: Use Global fields as blocks within the Modular Blocks field while building content types in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/global-fields-as-blocks-within-modular-blocks
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Global Field] - Global Fields as Blocks within Modular Blocks

This page explains how to use Global fields as blocks inside a Modular Blocks field when building content types in Contentstack. It is intended for developers and content modelers who want to reuse predefined field structures across different block types for consistent, scalable content modeling.

## Global Fields as Blocks within Modular Blocks

You can use [Global](./about-global-field.md) fields as blocks within the [Modular Blocks](../create-content-types/modular-blocks.md) field while building [content types](../create-content-types/about-content-types.md) in Contentstack. This setup allows you to reuse predefined field structures across different block types, ensuring consistency, scalability, and faster content modeling.

For example, an e-commerce site may need a structured approach to organize product pages. Instead of manually configuring each page, you can create three Global fields to streamline the process:
- **Clothes Store:** Brand Name ([Single Line Textbox](../create-content-types/single-line-textbox.md)), Description ([JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md)), Apparel Image ([File](../create-content-types/file.md))
- **Footwear Store:** Brand Name, Description
- **Mobile Gallery:** Brand Name, Model Number ([Number](../create-content-types/number.md)) and, Mobile Image

Next, [create a content type](../create-content-types/create-a-content-type.md) and add a **Modular Blocks** field with three blocks: **Clothes**, **Footwear**, and **Mobiles**, each referring to its respective Global field.

With this setup, store owners can customize products across categories, streamlining product page creation while ensuring efficiency and flexibility in content management.

**Note:** Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can create Global fields and Content Types.

To add Global fields within Modular Blocks, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Content Models” icon in the left navigation panel, or press “C” (Windows and Mac).
- Open a **Content Type**, click the **Insert a field (+)** icon, select **Modular Blocks**, and enter a **Name **(eg., My Store).
- Click the **+ New Block** icon inside Modular Blocks and add the following Global fields as individual blocks:**Clothes:** Select the **Clothes Store** Global Field.
- **Footwear:** Select the **Footwear Store** Global Field.
- **Mobiles:** Select the **Mobile Gallery** Global Field.You can add additional blocks referencing other Global Fields such as Toy Store, Sports Equipment Store, Book Store, etc., as needed.

**Note:**
- You can add a maximum of **25 Global** **fields** in a content type.
- Each Global field added to a Modular Blocks field counts as a **single nesting level.**

By using reusable structures within Modular Blocks, developers can optimize content creation while delivering dynamic and personalized experiences. This approach enhances user engagement and simplifies content workflows.

## Common questions

### Who can create Global fields and Content Types?
Only the stack owner, admin, and developer can create Global fields and Content Types.

### How many Global fields can be added in a content type?
You can add a maximum of 25 Global fields in a content type.

### How does a Global field affect nesting when used inside Modular Blocks?
Each Global field added to a Modular Blocks field counts as a single nesting level.

### What is the benefit of using Global fields as blocks within Modular Blocks?
This setup allows you to reuse predefined field structures across different block types, ensuring consistency, scalability, and faster content modeling.