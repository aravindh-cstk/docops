---
title: "[Content Models] - Frequently Asked Questions"
description: Frequently Asked Questions (FAQs) content model schema, prerequisites, and related resources.
url: https://www.contentstack.com/docs/marketplace-platform-guides/content-models/faqs
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Content Models] - Frequently Asked Questions

This page describes the Frequently Asked Questions (FAQs) Content Model, including prerequisites and the schema for the FAQs content type and related components, for developers and admins setting up or importing Content Models for an FAQs page.

## Frequently Asked Questions

The Frequently Asked Questions (FAQs) page in your website features a dynamic hero banner, a well-structured section with cards, etc. The FAQs Content Model is specially crafted to capture and organize essential information about the FAQs section of your website, ensuring you have all the key details at your fingertips.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Frequently Asked Questions Content Model
The FAQs Content Model contains two [Content Types](../../create-content-types/about-content-types.md) - **FAQs**, **Hero Banner**, and two [Global Fields](../../create-content-types/global.md) - **SEO**, **Section with Cards**.

### Schema for FAQs Content Type
- **Title**: The [Title](../../create-content-types/title.md) field displays the title of the FAQs entry. This is a mandatory field and must be unique.
- **URL**: The [URL](../../create-content-types/url.md) field displays the URL of the FAQs page. This is a mandatory field and must be unique.
- **Page Components**: This [Modular Block](../../create-content-types/modular-blocks.md) field includes the following components in the webpage:**Hero Banner**: This [Modular Block](../../create-content-types/modular-blocks.md) field has the following component:**Hero Banner**: This is a [Reference Field](../../create-content-types/reference.md) that refers to the [Hero Banner](/docs/marketplace-platform-guides/content-models/hero-banner#schema-for-hero-banner-content-type) content type.
- **Section With Cards**: This [Modular Block](../../create-content-types/modular-blocks.md) field contains the **Section with Cards** [Global](../../create-content-types/global.md) field which has the following components:**Section Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field that displays the title of the section. This is a mandatory field and must be unique.
- **Section Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the description of the section.
- **Cards**: This [Group](../../create-content-types/group.md) field includes the following fields to add the question-answers to the FAQs section:**Card Title H3**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the frequently asked questions about your product/business. The title is displayed as a level-three heading.
- **Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the answers to the frequently asked questions about your product/business.
- **Call To Action**: This is a [Link](../../create-content-types/link.md) field to add links based on your requirement.
- **Image**: This is a [File](../../create-content-types/file.md) field to add an image as per your requirement.
- **SEO**: This [Global](../../create-content-types/global.md) field includes the following SEO components:**Meta Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta title of your FAQs page. Ideally, this should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the meta description of your FAQs page.
- **Meta Keywords**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta keywords of your FAQs page.
- **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](../../create-content-types/boolean.md) field.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)). Refer the [Frequently Asked Questions Content Modeling](../../content-modeling/faqs.md) documentation to understand how to model the "Frequently Asked Questions (FAQs)" page.

Here’s how your FAQs page looks after you publish the entry:

## Common questions

### Who should have access before working with this content model?
You need a Contentstack account and access to the Contentstack Organization/Stack as the Owner/Admin.

### What content types and global fields are included in the FAQs Content Model?
It contains two Content Types (**FAQs**, **Hero Banner**) and two Global Fields (**SEO**, **Section with Cards**).

### Can I import these prebuilt Content Models instead of creating them manually?
Yes, you can import the prebuilt Content Models via the Marketplace or via the CMS using the referenced import documentation.

### What is the purpose of the SEO global field in this model?
It includes SEO components such as Meta Title, Meta Description, Meta Keywords, and Enable Search Indexing.