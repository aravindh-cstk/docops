---
title: "Global Fields as Blocks within Modular Blocks"
description: "Global Fields as Blocks within Modular Blocks"
url: /headless-cms/global-fields-as-blocks-within-modular-blocks
---

# Global Fields as Blocks within Modular Blocks

## Global Fields as Blocks within Modular Blocks

You can use [Global](/docs/headless-cms/about-global-field) fields as blocks within the [Modular Blocks](/docs/headless-cms/modular-blocks) field while building [content types](/docs/headless-cms/about-content-types) in Contentstack. This setup allows you to reuse predefined field structures across different block types, ensuring consistency, scalability, and faster content modeling.

For example, an e-commerce site may need a structured approach to organize product pages. Instead of manually configuring each page, you can create three Global fields to streamline the process:

-   **Clothes Store:** Brand Name ([Single Line Textbox](/docs/headless-cms/single-line-textbox)), Description ([JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor)), Apparel Image ([File](/docs/headless-cms/file))
-   **Footwear Store:** Brand Name, Description
-   **Mobile Gallery:** Brand Name, Model Number ([Number](/docs/headless-cms/number)) and, Mobile Image

Next, [create a content type](/docs/headless-cms/create-a-content-type) and add a **Modular Blocks** field with three blocks: **Clothes**, **Footwear**, and **Mobiles**, each referring to its respective Global field.

With this setup, store owners can customize products across categories, streamlining product page creation while ensuring efficiency and flexibility in content management.

**Note:** Only the stack [owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), and [developer](/docs/headless-cms/types-of-roles#developer) can create Global fields and Content Types.

To add Global fields within Modular Blocks, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Content Models” icon in the left navigation panel, or press “C” (Windows and Mac).
2.  Open a **Content Type**, click the **Insert a field (+)** icon, select **Modular Blocks**, and enter a **Name** (eg., My Store).
3.  Click the **\+ New Block** icon inside Modular Blocks and add the following Global fields as individual blocks:
    -   **Clothes:** Select the **Clothes Store** Global Field.
    -   **Footwear:** Select the **Footwear Store** Global Field.
    -   **Mobiles:** Select the **Mobile Gallery** Global Field.
        
        You can add additional blocks referencing other Global Fields such as Toy Store, Sports Equipment Store, Book Store, etc., as needed.
        

![Modular blocks with global field integration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5a431ebdccbc70/6805fc7698505f6afe0f2e38/1-global-fiels-within-modular-bl.gif)

**Note:**

-   You can add a maximum of **25 Global** **fields** in a content type.
-   Each Global field added to a Modular Blocks field counts as a **single nesting level.**

By using reusable structures within Modular Blocks, developers can optimize content creation while delivering dynamic and personalized experiences. This approach enhances user engagement and simplifies content workflows.
