---
title: "[Content Models] - Contact Us Page"
description: Content model schema and prerequisites for building a Contact Us Page using Contentstack Content Types and Global Fields.
url: https://www.contentstack.com/docs/marketplace-platform-guides/content-models/contact-us-page
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
The Contact Us Page Content Model contains the [Content Types](../../create-content-types/about-content-types.md) - **Contact Us Page** and **Contact**; and [Global Fields](../../create-content-types/global.md) - **SEO** and **Section with HTML Code**.

### Schema for Contact Us Page Content Type
- **Title**: This is a [Title](../../create-content-types/title.md) field that defines the title of the Contact Us Page entry. This is a mandatory field and must be unique.
- **Primary Contact Details**: This is a [Reference](../../create-content-types/reference.md) field that refers to the [Contact](#schema-for-contact-content-type) content type.
- **Page Components**: This is a [Modular Block](../../create-content-types/modular-blocks.md) field containing three Modular Blocks. Let’s discuss in detail.**Other Location**: This is the first block that includes the following:**Other Locations**: This is a [Group](../../create-content-types/group.md) field that holds the following information:**City/Country**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field that stores the city or country name.
- **Address**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field that stores the full address of the organization.
- **Location Image**: This is a [File](../../create-content-types/file.md) field that allows you to choose the image of the location and add it to the Contact Us page.
- **Maps Location**: This is a [Link](../../create-content-types/link.md) field that adds a location name as a title and URL for redirection. You can use this field to add an embed map URL from Google Maps.
- **Section with HTML Code**: This is the second block that contains **Section with HTML Code** [Global](../../create-content-types/global.md) field which includes the following components:**Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field that defines the title of this specific section.
- **Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field that stores the detailed description of the HTML code.
- **HTML Code**: This is a [Custom](../../create-content-types/custom.md) field containing [Ace Editor](../../marketplace-apps/ace-editor.md) as an extension.
- **Is HTML Code Left Aligned?**: This is a [Boolean](../../create-content-types/boolean.md) field which specifies that the HTML Code is left-aligned or right-aligned.
- **Contact Us Form**: This is the third and last block that holds the following:**Contact Fields**: This is a [Group](../../create-content-types/group.md) field that holds the following information:**Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field that shows the group title for the contact form.
- **Placeholder Text**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the placeholder text for the contact form.
- **Short Detailed Message**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field that stores the request/queries of the user.
- **Submit**: This is a [Link](../../create-content-types/link.md) field that adds a submit button name as a title and URL for submission.
- **SEO**: This is the [Global](../../create-content-types/global.md) field which includes the following components:**Meta Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta title of your Contact Us Page. This should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the meta description of your Contact Us Page.
- **Meta Keywords**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta keywords of your Contact Us Page.
- **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](../../create-content-types/boolean.md) field.

### Schema for Contact Content Type
- **Title**: This is a [Title](../../create-content-types/title.md) field that defines the title of the contact entry. This is a mandatory field and must be unique.
- **Address**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field that stores the full address of the company.
- **Contact Number**: This is a [Number](../../create-content-types/number.md) field that stores the contact number of the organization. You can add multiple contact numbers to this field.
- **Email Address**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field that stores the company’s official email address.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)). Refer the [Contact Us Page Content Modeling](../../content-modeling/contact-us-page.md) documentation to understand how to model the "Contact Us" page.

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

