---
title: "[Content Models] - Website Header"
description: Website Header Content Model schema, prerequisites, and related resources.
url: https://www.contentstack.com/docs/marketplace-platform-guides/content-models/website-header
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Content Models] - Website Header

This page describes the Website Header Content Model in Contentstack, including prerequisites and the schema for the Header content type. It is intended for developers and stack administrators who need to set up or import a prebuilt website header model for consistent site-wide navigation and branding.

### Item 1

#### Article section

##### Heading

Website Header

##### Content

The website header is a consistent presence atop every page, featuring essential elements such as the website title, logo, navigation menu, etc. The Website Header Content Model is meticulously crafted to capture and organize crucial information for the header of your website, ensuring a cohesive and impactful brand experience.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Schema for Website Header Content Model
The Website Header Content Model contains one [Content Type](../../create-content-types/about-content-types.md) named **Header**.

### Schema for Header Content Type
- **Title**: This is a [Title](../../create-content-types/title.md) field that displays the title of the website header entry. This is a mandatory field and must be unique.
- **Logo**: Logo is a [File](../../create-content-types/file.md) field that allows you to choose the website logo and add it to the entry. This is a mandatory field. Ideally, the image file for the logo should be less than 100KB in a PNG format.
- **Navigation Menu**: This is a [Group](../../create-content-types/group.md) field which can be used to add multiple navigation items, with the following fields in it:**Label**: This [Single Line Textbox](../../create-content-types/single-line-textbox.md) field is used to name the navigation items in the Navigation Menu.
- **Call To Action**: This is a [Link](../../create-content-types/link.md) field where you can add the URLs to the navigation items in the Navigation Menu.
- **Open in New Tab**: This is a [Boolean](../../create-content-types/boolean.md) field that, if enabled, lets you open the link in a new tab.
- **Notification Bar**: This is a [Group field](../../create-content-types/group.md) with the following fields in it:**Announcement Text**: You can add any announcement to your website using this [JSON Rich Text Editor](../../json-rich-text-editor.md) field.
- **Show Announcement?**: You can enable or disable the announcement in this [Boolean](../../create-content-types/boolean.md) field.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)). Refer the [Website Header Content Modeling](../../content-modeling/website-header.md) documentation to understand how to model the "Website Header".

Here’s how your Website Header looks after you publish the entry:

## Common questions

**Q: Who can set up or modify the Website Header Content Model?**  
A: Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer.

**Q: What content type is included in the Website Header Content Model?**  
A: The Website Header Content Model contains one [Content Type](../../create-content-types/about-content-types.md) named **Header**.

**Q: How can I import the prebuilt Website Header Content Model?**  
A: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)).

**Q: Where can I learn more about modeling the "Website Header"?**  
A: Refer the [Website Header Content Modeling](../../content-modeling/website-header.md) documentation to understand how to model the "Website Header".