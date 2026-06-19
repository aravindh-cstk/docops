---
title: "[Features Content Models] Frequently Asked Questions (FAQs)"
description: FAQs content model fields and structure for building a website Frequently Asked Questions page.
url: https://www.contentstack.com/docs/developers/content-modeling/faqs
product: Features Content Models
doc_type: faq
audience:
  - developers
  - content-modelers
version: v1
last_updated: 2026-03-25
---

# [Features Content Models] Frequently Asked Questions (FAQs)

This page explains the FAQs Content Model used to build a website “Frequently Asked Questions (FAQs)” page, including its main sections and the fields that make up the related content type. It is intended for developers and content modelers who need to create, understand, or import the prebuilt FAQs content model.

## FAQs Page

Your website's "Frequently Asked Questions" (FAQs) page includes a dynamic hero banner, a well-structured section with cards, and so on. The FAQs Content Model is specifically designed to capture and organize critical information about your website's Frequently Asked Questions (FAQs) area, ensuring you have all the relevant details at your fingertips.

Let’s understand how this model will assist you create your company’s “Frequently Asked Questions (FAQs)” page.

## Analyzing Requirements for the FAQs Page

The FAQs content model contains the following main sections:The “FAQs” Hero Banner
- The “Connect with an Advisor” section
- The “Quick Links” section to get the user started
- The “View Articles” section for reference

Here’s how your “FAQs” page will look like on your website:

## Identifying Content Model

Let's identify the fields that build up your FAQs Page content type that you see in the above step.

## Developing Content Type

The “FAQs” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.**FAQs** Content Type:

**Title**: The [Title](/docs/developers/create-content-types/title) field is where you will provide your webpage a unique name. It should be clear and concise, and accurately reflect the contents of the webpage. The title field is a required field.

**URL**: Here goes the web URL of your “FAQs" page. When clicked on, this link provided in the [URL](/docs/developers/create-content-types/url) field takes users straight to your FAQs webpage.

**Page Components**: This content type hosts different sections that you see in your webpage. The field is a [Modular Block](/docs/developers/create-content-types/modular-blocks/) that contains two other Modular Blocks. Let’s take a closer look at each one.

**Hero Banner**: The Hero Banner is typically the first thing that visitors see when they land on a webpage and is designed to grab their attention. is used to communicate the most important content of the page and should have a clear call to action (CTA). This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field has the following component:**Hero Banner**: This is a [Reference Field](/docs/developers/create-content-types/reference/) that refers to the [Hero Banner](/docs/developers/content-modeling/hero-banner#developing-content-type) content type.
- **Section With Cards**: This section contains the different components of the web page. It is a [Modular Block](/docs/developers/create-content-types/modular-blocks/) field that contains a Section with Cards [Global](/docs/developers/create-content-types/global/) field which has the following components:**Section Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field where you will provide a unique title of the section. It is a mandatory field and must be clear and concise.
- **Section Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you will add the description of the section.
- **Cards**: This is a [Group](/docs/developers/create-content-types/group/) field where you will add the question-answers to the FAQs section. It includes the following fields:**Card Title H3**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you will add the frequently asked questions about your product/business. The title is displayed as a level-three heading.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you will add the answers to the frequently asked questions about your product/business.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field to add links based on your requirement.
- **Image**: This is a [File](/docs/developers/create-content-types/file/) field which allows you to add an image for this section. The ideal file size for the location image is less than 100 KB and the file format should be PNG.

**SEO**: This is the [Global](/docs/developers/create-content-types/global/) field with the following components:
- **Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that allows you to enter the meta title of your webpage, which should be between 120 and 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field that allows you to add the meta description of your webpage.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that allows you to add the meta keywords of your webpage.
- **Enable Search Indexing**: This is a [Boolean](/docs/developers/create-content-types/boolean/) field that allows you to enable or disable search indexing for your webpage.

This completes the creation of the “FAQs" content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

**Q: What are the main sections included in the FAQs content model?**  
A: The FAQs content model contains the following main sections:The “FAQs” Hero Banner, the “Connect with an Advisor” section, the “Quick Links” section to get the user started, and the “View Articles” section for reference.

**Q: What field type is used for “Page Components”?**  
A: The “Page Components” field is a [Modular Block](/docs/developers/create-content-types/modular-blocks/) that contains two other Modular Blocks.

**Q: What fields are included under the “Cards” group in “Section With Cards”?**  
A: It includes **Card Title H3**, **Description**, **Call To Action**, and **Image**.

**Q: Where can I find instructions to import this content model?**  
A: Refer to **Additional Resource** links: [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) and [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model).

