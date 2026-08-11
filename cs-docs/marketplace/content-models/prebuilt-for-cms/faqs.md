---
title: "Frequently Asked Questions"
description: "The Frequently Asked Questions Content Model defines the structure, fields, and schema to design the FAQs page of your website."
url: /marketplace/content-models/prebuilt-for-cms/faqs
---

# Frequently Asked Questions

## Frequently Asked Questions

The Frequently Asked Questions (FAQs) page in your website features a dynamic hero banner and a well-structured section with cards. The FAQs Content Model is specially crafted to capture and organize essential information about the FAQs section of your website, ensuring you have all the key details at your fingertips.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/).
- Access to the Contentstack Organization/Stack as the Owner/Admin.

## Schema for Frequently Asked Questions Content Model

The FAQs Content Model contains two [Content Types](/docs/headless-cms/about-content-types/) - **FAQs**, **Hero Banner**, and two [Global Fields](/docs/headless-cms/global/) - **SEO**, **Section with Cards**.

### Schema for FAQs Content Type

- **Title**: The [Title](/docs/headless-cms/title) field displays the title of the FAQs entry. This is a mandatory field and must be unique.
- **URL**: The [URL](/docs/headless-cms/url/) field displays the URL of the FAQs page. This is a mandatory field and must be unique.
- **Page Components**: This [Modular Block](/docs/headless-cms/modular-blocks/) field includes the following components in the webpage.
- **Page Components > Hero Banner**: This [Modular Block](/docs/headless-cms/modular-blocks/) field has the following component.
- **Page Components > Hero Banner > Hero Banner**: This is a [Reference Field](/docs/headless-cms/reference/) that refers to the [Hero Banner](/docs/marketplace/hero-banner#schema-for-hero-banner-content-type) content type.
- **Page Components > Section With Cards**: This [Modular Block](/docs/headless-cms/modular-blocks/) field contains the **Section with Cards** [Global](/docs/headless-cms/global/) field which has the following components.
- **Page Components > Section With Cards > Section Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that displays the title of the section. This is a mandatory field and must be unique.
- **Page Components > Section With Cards > Section Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the description of the section.
- **Page Components > Section With Cards > Cards**: This [Group](/docs/headless-cms/group/) field includes the following fields to add the question-answers to the FAQs section.
- **Page Components > Section With Cards > Cards > Card Title H3**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the frequently asked questions about your product/business. The title is displayed as a level-three heading.
- **Page Components > Section With Cards > Cards > Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the answers to the frequently asked questions about your product/business.
- **Page Components > Section With Cards > Cards > Call To Action**: This is a [Link](/docs/headless-cms/link/) field to add links based on your requirement.
- **Page Components > Section With Cards > Cards > Image**: This is a [File](/docs/headless-cms/file/) field to add an image as per your requirement.
- **SEO**: This [Global](/docs/headless-cms/global/) field includes the following SEO components.
- **SEO > Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field to add the meta title of your FAQs page. Ideally, this should be between 120 to 160 characters.
- **SEO > Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the meta description of your FAQs page.
- **SEO > Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta keywords of your FAQs page.
- **SEO > Enable Search Indexing**: You can enable or disable the searches in this [Boolean](/docs/headless-cms/boolean/) field.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Frequently Asked Questions Content Modeling](/docs/headless-cms/faqs-page/) documentation to understand how to model the "Frequently Asked Questions (FAQs)" page.

Here's how your FAQs page looks after you publish the entry:

![Content_Models_FAQs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1bea02f5133454a4/65014e4ab169ad11a904c384/Content_Models_FAQs.png)
