---
title: "[Content Models] - Contact Us Page"
description: Content model schema and prerequisites for building a Contact Us Page using Contentstack Content Types and Global Fields.
url: https://www.contentstack.com/docs/developers/marketplace-platform-guides/content-models/contact-us-page
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Content Models] - Contact Us Page

This page describes the Contact Us Page content model in Contentstack, including prerequisites and the schema for the related content types and global fields. It is intended for developers and stack administrators who need to set up or import the Contact Us Page structure and publish entries for use on a website.

### Item 1

#### Article section

##### Heading

Contact Us Page

##### Content

The Contact Us Page is a section of a website that provides information about the company or organization that owns the website. It typically includes details about the company's history, mission statement, team members, and any notable accomplishments or awards.

The Contact Us Page is also a place where website visitors can learn about the company's values, priorities, and approach to business. This important page can establish trust and credibility with potential customers and help them understand more about the company.

The Contact Us Page Content Model includes fields and structures designed to capture the essential information about the Contact Us page.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Contact Us Page Content Model
The Contact Us Page Content Model contains the [Content Types](/docs/developers/create-content-types/about-content-types) - **Contact Us Page** and **Contact**; and [Global Fields](/docs/developers/create-content-types/global) - **SEO** and **Section with HTML Code**.

### Schema for Contact Us Page Content Type
- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the Contact Us Page entry. This is a mandatory field and must be unique.
- **Primary Contact Details**: This is a [Reference](/docs/developers/create-content-types/reference) field that refers to the [Contact](#schema-for-contact-content-type) content type.
- **Page Components**: This is a [Modular Block](/docs/developers/create-content-types/modular-blocks/) field containing three Modular Blocks. Let’s discuss in detail.**Other Location**: This is the first block that includes the following:**Other Locations**: This is a [Group](/docs/developers/create-content-types/group/) field that holds the following information:**City/Country**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that stores the city or country name.
- **Address**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the full address of the organization.
- **Location Image**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the image of the location and add it to the Contact Us page.
- **Maps Location**: This is a [Link](/docs/developers/create-content-types/link/) field that adds a location name as a title and URL for redirection. You can use this field to add an embed map URL from Google Maps.
- **Section with HTML Code**: This is the second block that contains **Section with HTML Code** [Global](/docs/developers/create-content-types/global/) field which includes the following components:**Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that defines the title of this specific section.
- **Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the detailed description of the HTML code.
- **HTML Code**: This is a [Custom](/docs/developers/create-content-types/custom/) field containing [Ace Editor](/docs/developers/marketplace-apps/ace-editor/) as an extension.
- **Is HTML Code Left Aligned?**: This is a [Boolean](/docs/developers/create-content-types/boolean/) field which specifies that the HTML Code is left-aligned or right-aligned.
- **Contact Us Form**: This is the third and last block that holds the following:**Contact Fields**: This is a [Group](/docs/developers/create-content-types/group/) field that holds the following information:**Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that shows the group title for the contact form.
- **Placeholder Text**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the placeholder text for the contact form.
- **Short Detailed Message**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the request/queries of the user.
- **Submit**: This is a [Link](/docs/developers/create-content-types/link/) field that adds a submit button name as a title and URL for submission.
- **SEO**: This is the [Global](/docs/developers/create-content-types/global/) field which includes the following components:**Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta title of your Contact Us Page. This should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the meta description of your Contact Us Page.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta keywords of your Contact Us Page.
- **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](/docs/developers/create-content-types/boolean/) field.

### Schema for Contact Content Type
- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the contact entry. This is a mandatory field and must be unique.
- **Address**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the full address of the company.
- **Contact Number**: This is a [Number](/docs/developers/create-content-types/number) field that stores the contact number of the organization. You can add multiple contact numbers to this field.
- **Email Address**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that stores the company’s official email address.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)). Refer the [Contact Us Page Content Modeling](/docs/developers/content-modeling/contact-us-page/) documentation to understand how to model the "Contact Us" page.

After publishing the entry, you can view the Contact Us Page on your website.

## Common questions

### Who should use this Contact Us Page content model?
Developers and Contentstack stack users with Owner/Admin access who need to create or import the Contact Us Page structure and publish entries for a website.

### What Content Types and Global Fields are included in this model?
The model contains the Content Types **Contact Us Page** and **Contact**; and the Global Fields **SEO** and **Section with HTML Code**.

### Can I import this content model instead of creating it manually?
Yes. You can import the prebuilt Content Models via the Marketplace or via the CMS using the referenced import documentation.

### What do I need before setting up this content model?
A [Contentstack account](https://www.contentstack.com/login/) and access to the Contentstack Organization/Stack as the Owner/Admin.

