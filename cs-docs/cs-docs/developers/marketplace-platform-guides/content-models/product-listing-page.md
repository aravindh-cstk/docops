---
title: "[Content Models] - Product Listing Page"
description: Product Listing Page content model schema, prerequisites, and related content types and global fields.
url: https://www.contentstack.com/docs/developers/marketplace-platform-guides/content-models/product-listing-page
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Content Models] - Product Listing Page

This page explains what a Product Listing Page is and describes the Contentstack Content Model schema used to build it. It is intended for developers or admins setting up content types and global fields for an eCommerce product listing experience, and should be used when creating or importing the Product Listing Page content model into a stack.

## Product Listing Page

A Product Listing Page is a web page that displays a list of products along with their relevant information such as product images, descriptions, prices, and other information to the customers.

A Product Listing Page is a web page that displays a list of products that are offered for sale by a retailer or an eCommerce company. It is usually the main page of an online store, and it provides customers with an overview of the products available for purchase. The page typically displays product images, descriptions, prices, and any other relevant information. Customers can then click a product to view its details and complete the purchase. The Product Listing Page is a critical component of any eCommerce site, as it enables customers to easily browse and discover products they may be interested in buying.

The Product Listing Page Content Model includes fields and structures designed to capture the essential information about the product listing.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Product Listing Page Content Model

The Product Listing Content Model contains the [Content Types](/docs/developers/create-content-types/about-content-types/) - **Product Listing Page**, **Product**, and **Hero Banner**; and [Global Fields](/docs/developers/create-content-types/global/) - **SEO**.

### Schema for Product Listing Page Content Type

- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the Product Listing Page entry. This is a mandatory field and must be unique.
- **URL**: This is a [URL](/docs/developers/create-content-types/url/) field that adds the redirection URL of the Product Listing page. This is a mandatory field.
- **Page Components**: This is a [Modular Block](/docs/developers/create-content-types/modular-blocks/) field containing three Modular Blocks. Let’s discuss in detail.**Hero Banner**: This is the first block that includes the following:**Hero Banner**: This is a [Reference](/docs/developers/create-content-types/reference) field that refers to the [Hero Banner](/docs/developers/marketplace-platform-guides/content-models/hero-banner#schema-for-hero-banner-content-type) content type.
- **Product**: This is the second block that includes the following:**Product**: This is a [Reference](/docs/developers/create-content-types/reference) field that refers to the [Product](#schema-for-product-content-type) content type. There can be multiple products.
- **Widget**: This is the third block that includes the following:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field that defines the title of this widget section.
- **Related Products**: This is a [Reference](/docs/developers/create-content-types/reference#self-referencing) field that refers to the [Product Listing Page](#schema-for-product-listing-page-content-type) content type.
- **SEO**: This is the [Global](/docs/developers/create-content-types/global/) field which includes the following components:**Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta title of your Product Listing Page. This should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the meta description of your Product Listing Page.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta keywords of your Product Listing Page.
- **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](/docs/developers/create-content-types/boolean/) field.

### Schema for Product Content Type

- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the product entry. This is a mandatory field and must be unique.
- **URL**: This is a [URL](/docs/developers/create-content-types/url/) field that adds the redirection URL of the entry. This is a mandatory field.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the product description.
- **Featured Image**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to select the product image(s) and add it to the entry. You can add multiple images to this field.
- **Price**: This is a [Number](/docs/developers/create-content-types/number) field that stores the price of the product.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field that stores button name as a title and URL for submitting product details.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)). Refer the [Product Listing Page Content Modeling](/docs/developers/content-modeling/product-listing-page/) documentation to understand how to model the "Product Listing" page.

After publishing the entry, you can view the product listing on your website.

## Common questions

### Who should use the Product Listing Page content model?
Developers and stack Owner/Admin users who need to create or import content types and global fields for a product listing experience.

### What content types are included in the Product Listing Content Model?
**Product Listing Page**, **Product**, and **Hero Banner**.

### What global field is used for Product Listing Page SEO?
The **SEO** [Global](/docs/developers/create-content-types/global/) field.

### Can the Product Listing Page reference other Product Listing Pages?
Yes, via **Related Products**, a [Reference](/docs/developers/create-content-types/reference#self-referencing) field that refers to the [Product Listing Page](#schema-for-product-listing-page-content-type) content type.

<!-- filename: content-models-product-listing-page.md -->