---
title: "[Content Models] - Website Homepage"
description: Website Homepage content model schema, prerequisites, and field definitions for building a homepage in Contentstack.
url: https://www.contentstack.com/docs/developers/marketplace-platform-guides/content-models/website-homepage
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-26
---

# [Content Models] - Website Homepage

This page describes the Website Homepage Content Model, including prerequisites and the schema for the Homepage content type, for developers and content modelers who are setting up or importing prebuilt content models for a website homepage in Contentstack.

### Item 1

#### Article section

##### Heading

Website Homepage

##### Content

At the core of our website lies the homepage that features a captivating hero banner, readily accessible contact details, organized sections with buckets and cards, and much more. The Website Homepage Content Model includes fields and structures thoughtfully designed to capture the key information for the homepage of your website.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Website Homepage Content Model
The Website Homepage Content Model contains six [Content Types](/docs/developers/create-content-types/about-content-types) - **Author**, **Blog Landing Page**, **Contact**, **Hero Banner**, **Homepage**, **Our Team,** and six [Global Fields](/docs/developers/create-content-types/global) - **SEO**, **Social Share**, **Section With HTML Code**, **Section With Cards**, **Section**, and **Section With Buckets**.

### Schema for Homepage Content Type
- **Title**: The [Title](/docs/developers/create-content-types/title) field displays the title of the Website Homepage entry. This is a mandatory field and must be unique.
- **URL**: This [URL](/docs/developers/create-content-types/url/) field displays the URL of the homepage. This is a mandatory field and must be unique.
- **Page Components**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field covers the following components in the webpage:**Hero Banner**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field has the following component:**Hero Banner**: This is a [Reference](/docs/developers/create-content-types/reference) Field that refers to the [Hero Banner](/docs/developers/marketplace-platform-guides/content-models/hero-banner#schema-for-hero-banner-content-type) content type.
- **Section With Buckets**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field contains the **Section with Buckets** [Global](/docs/developers/create-content-types/global) field which has the following components:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that displays the title of the section. The title is displayed as a level-two heading.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the description for the section.
- **Tabular Buckets**: This is a [Boolean](/docs/developers/create-content-types/boolean/) field to specify whether the data is represented in tabular format or not.
- **Buckets**: This [Group](/docs/developers/create-content-types/group/) field includes the following fields:**Title H3**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that stores the title for this subsection. The H3 element defines a level-three heading.
- **Image**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the image for the bucket and add it to the entry.
- **Image Alignment**: This is a [Select](/docs/developers/create-content-types/select) field where you can choose the alignment of an image. Image alignment can be Left, Centre, or Right.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field that stores the description for this bucket.
- **Icon**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the icon for the bucket and add it to the entry. Ideally, the image file for the icon should be less than 100KB in a PNG format.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field that stores bucket button name as a title and links it for redirection.
- **Section**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field contains the **Section** [Global](/docs/developers/create-content-types/global) field which has the following components:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that displays the title of the section. The title is displayed as a level-two heading.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the description for the section.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field where you can add links based on your requirement.
- **Image**: This is a [File](/docs/developers/create-content-types/file/) field where you can add an image as per your requirement.
- **Is Image Right Aligned?**: This is a [Boolean](/docs/developers/create-content-types/boolean/) field that specifies if the image is left-aligned or right-aligned.
- **Section With Cards**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field contains the **Section with Cards** [Global](/docs/developers/create-content-types/global) field which has the following components:**Section Title**: This is a [Title](/docs/developers/create-content-types/title) field that displays the title of the section. This is a mandatory field and must be unique.
- **Section Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the description of the section.
- **Cards**: This [Group](/docs/developers/create-content-types/group/) field includes the following fields to add the card details:**Card Title H3**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the title of the card. The title is displayed as a level-three heading.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the description for the card.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field to add links based on your requirement.
- **Image**: This is a [File](/docs/developers/create-content-types/file/) field to add an image as per your requirement.
- **Section with HTML Code**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field contains **Section with HTML Code** [Global](/docs/developers/create-content-types/global) field which covers the following components:**Title**: Title is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field that defines the title of this specific section.
- **Description**: Description is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the detailed description of the HTML code.
- **HTML Code**: This is a [Custom](/docs/developers/create-content-types/custom/) field containing [Ace Editor](/docs/developers/marketplace-apps/ace-editor/) as an extension.
- **Is HTML Code Left Aligned?**: This is a [Boolean](/docs/developers/create-content-types/boolean/) field which specifies that the HTML Code is left aligned or right aligned.
- **Our Team**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field has the following component:**Our Team**: This is a [Reference](/docs/developers/create-content-types/reference) Field that refers to the [Our Team](/docs/developers/marketplace-platform-guides/content-models/about-us-page#schema-for-our-team-content-type) content type.
- **From Blog**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field covers the following components of a blog in the list:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the title of the reference blog. The title is displayed as a level-two heading.
- **Featured Blogs**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Blog Landing Page](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) content type.
**Note:** You can find the [Author](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-author-content-type) content type and the [Social Share](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) [Global](/docs/developers/create-content-types/global) field in the [Blog Landing Page](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page) content model.
- **View Articles**: This is a [Link](/docs/developers/create-content-types/link/) field to add links to any related articles.
- **Widget**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field covers the following components of the widget section:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the title of the blog in the list. The title is displayed as a level-two heading.
- **Type**: This is a [Select](/docs/developers/create-content-types/select/) field where you can add the widget type. The widget types are as follows:Blog Archive
- Related Posts
- **Contact Us**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field has the following component:**Reference**: This is a [Reference](/docs/developers/create-content-types/reference) Field that refers to the [Contact](/docs/developers/marketplace-platform-guides/content-models/contact-us-page#schema-for-contact-content-type) content type.
- **SEO**: This [Global](/docs/developers/create-content-types/global) field covers the following SEO components:**Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta title of your homepage. Ideally, this should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the meta description of your homepage.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta keywords of your homepage.
- **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](/docs/developers/create-content-types/boolean/) field.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)). Refer the [Website Homepage Content Modeling](/docs/developers/content-modeling/website-homepage/) documentation to understand how to model the "Website Homepage".

Here’s how your Website Homepage will look after you publish the entry:

## Common questions

### What do I need before using the Website Homepage Content Model?
You need a [Contentstack account](https://www.contentstack.com/login/) and access to the Contentstack Organization/Stack as the Owner/Admin.

### What content types and global fields are included in the Website Homepage Content Model?
It contains six [Content Types](/docs/developers/create-content-types/about-content-types) - **Author**, **Blog Landing Page**, **Contact**, **Hero Banner**, **Homepage**, **Our Team,** and six [Global Fields](/docs/developers/create-content-types/global) - **SEO**, **Social Share**, **Section With HTML Code**, **Section With Cards**, **Section**, and **Section With Buckets**.

### Where can I find the Author content type and Social Share global field?
**Note:** You can find the [Author](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-author-content-type) content type and the [Social Share](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) [Global](/docs/developers/create-content-types/global) field in the [Blog Landing Page](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page) content model.

### How can I import the prebuilt Content Models?
You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)).