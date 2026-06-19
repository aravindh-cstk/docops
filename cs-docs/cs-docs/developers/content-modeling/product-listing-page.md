---
title: "[Features Content Models] Product Listing Page"
description: Documentation for the “Product Listing Page” content model, including sections, fields, and related content types.
url: https://www.contentstack.com/docs/developers/content-modeling/product-listing-page
product: Features Content Models
doc_type: content-model
audience:
  - developers
  - content architects
version: v1
last_updated: 2026-03-25
---

# [Features Content Models] Product Listing Page

This page explains the “Product Listing Page” content model, including its main sections and the fields used to build the associated content types. It is intended for developers and content architects who are creating or importing this content model and need to understand how to structure product listing pages and related product entries.

### Item 1

#### Article section

##### Heading

Product Listing Page

##### Content

The “Product Listing Page” content model provides a structured schema to display a list of multiple products and their details. Using this content model, you can choose to display a comprehensive view of your product details such as product images, descriptions, prices, and other information ensuring visitors get a complete understanding in one glance.

Let’s dive deep into how this model will help you create your company’s “Product Listing Page” content model.
- ## Analyzing Requirements for the Product Listing Page

    The Product Listing Page content model includes three main sections:

      The “Product Listing Page” hero banner
- The “Products List” section cards
- The “Related Products” list

    Here’s how your Product Listing Page will look like on your website:
- ## Identifying Content Model

    Let's identify the fields that build up your Product Listing Page content type that you see in the above step.
- ## Developing Content Type

    The “Product Listing Page” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

    **Product Listing Page** Content Type:

      **Title**: This is where you need to provide your “Product Listing Us" page a name. The [Title](/docs/developers/create-content-types/title) field defines the title of the Product Listing page/entry.
- **URL**: Here goes the web URL of your “Product Listing" page. When clicked on, this link provided in the [URL ](/docs/developers/create-content-types/url)field takes users straight to your Product Listing page.
- **Page Components**: The different sections that you see on your “Product Listing" page have been collectively considered together, and hence have used the [Modular Block](/docs/developers/create-content-types/modular-blocks/) field to create the following components:
          **Hero Banner**: This is the first block which is a big, bold section at the top of your page, usually with standout images or messages. In this block, a [reference](/docs/developers/create-content-types/reference) field is used to fetch content from the [Hero Banner](/docs/developers/content-modeling/hero-banner#developing-content-type) content type.
- **Product:** This is the second block where you will be able to see the list of related products. For this block, a [reference](/docs/developers/create-content-types/reference) field is used to fetch content from the **Product** content type as explained in the section below.
- **Widget: **This is the third block that includes the list of products on your page. Your list can appear in cards that contain multiple details.
              **Title H2:** This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field that defines the title of this widget section.
- **Related Products: **This is a [Reference](/docs/developers/create-content-types/reference#self-referencing) field that refers to the **Product Listing Page** content type.
- **SEO**: The SEO [Global](/docs/developers/global-field/about-global-field/) field consists of multiple fields, as listed below:
          **Meta Title: **Meta Title is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the meta title of your entry.
- **Meta Description: **Meta Descriptions is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you can add the meta description of your entry.
- **Meta Keywords: **Meta Keywords is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the meta keywords of your entry.
- **Enable Search Indexing: **You can enable or disable the searches in this [Boolean](/docs/developers/create-content-types/boolean/) field. If you turn it on, it makes sure search engines can find your page. If you turn it off, it keeps the page more private.

**Product** Content Type:
- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the product entry. This is a mandatory field and must be unique.
- **URL**: This is a [URL](/docs/developers/create-content-types/url/) field that adds the redirection URL of the entry. This is a mandatory field.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the product description.
- **Featured Image**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to select the product image(s) and add it to the entry. You can add multiple images to this field.
- **Price**: This is a [Number](/docs/developers/create-content-types/number) field that stores the price of the product.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field that stores the button name as a title and URL for submitting product details.

This completes the creation of your “Product Listing Page” content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

**Q: What are the three main sections included in the Product Listing Page content model?**  
A: The Product Listing Page content model includes three main sections: The “Product Listing Page” hero banner, The “Products List” section cards, and The “Related Products” list.

**Q: What field type is used to create the Page Components on the “Product Listing" page?**  
A: The [Modular Block](/docs/developers/create-content-types/modular-blocks/) field is used to create the Page Components.

**Q: Which content type is referenced to fetch hero banner content?**  
A: A [reference](/docs/developers/create-content-types/reference) field is used to fetch content from the [Hero Banner](/docs/developers/content-modeling/hero-banner#developing-content-type) content type.

**Q: Where can I find instructions to import this content model?**  
A: Refer to [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) and [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model).