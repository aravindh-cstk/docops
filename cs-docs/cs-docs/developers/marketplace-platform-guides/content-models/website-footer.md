---
title: "[Content Models] - Website Footer"
description: Content model schema and prerequisites for creating a Website Footer in Contentstack, including Footer content type and Social Share global field.
url: https://www.contentstack.com/docs/developers/marketplace-platform-guides/content-models/website-footer
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Content Models] - Website Footer

This page describes the Website Footer content model in Contentstack, including prerequisites and the schema for the Footer content type and Social Share global field. It is intended for developers and stack owners/admins configuring or importing prebuilt content models for a website footer.

### Item 1

#### Article section

##### Heading

Website Footer

##### Content

The Website Footer is the information that appears at the bottom of each website page. It typically includes navigation menu links, copyright and contact information, social media icons, and other options for website visitors to engage with the site.

The Website Footer Content Model includes fields and structures designed to capture the essential information about the Website Footer.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Schema for Website Footer Content Model
The Website Footer Content Model contains the **Footer** [Content Types](/docs/developers/create-content-types/about-content-types/) and **Social Share** [Global Field](/docs/developers/create-content-types/global/).

### Schema for Footer Content Type
- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the Website Footer entry. This is a mandatory field and must be unique.
- **Logo**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the website logo and add it to the entry. This is a mandatory field. Ideally, the image file for the logo should be less than 100KB in a PNG format.
- **Navigation**: This is a [Group](/docs/developers/create-content-types/group/) field which can be used to add multiple navigation items, with the following fields in it:**Link**: This is a [Link](/docs/developers/create-content-types/link/) field that adds a navigation menu item as a title and URL for redirection.
- **Open in new tab**: You can enable or disable the **Open in new tab** option using this [Boolean](/docs/developers/create-content-types/boolean/) field.
- **Social Media**: This is a **Social Share** [Global](/docs/developers/create-content-types/global/) field, and includes the following components:**Social Media Share**: This is a [Group](/docs/developers/create-content-types/group/) field that holds the following fields:**Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title for the Social Media Share.
- **Icon**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the social media icon and add it to the footer. Ideally, the image file for the icon should be less than 100KB in a PNG format.
- **URL**: This is a [Link](/docs/developers/create-content-types/link/) field that adds a social media name as a title and links it for redirection.
- **Copyright**: This is a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/) field that holds the legal copyright information of the website.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)). Refer the [Website Footer Content Modeling](/docs/developers/content-modeling/website-footer/) documentation to understand how to model the "Website Footer".

After publishing the entry, you can view the Website Footer on your website.

## Common questions

### What does the Website Footer typically include?
The Website Footer typically includes navigation menu links, copyright and contact information, social media icons, and other options for website visitors to engage with the site.

### What are the prerequisites to use this content model?
You need a Contentstack account and access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer.

### What components are included in the Website Footer Content Model?
The Website Footer Content Model contains the **Footer** [Content Types](/docs/developers/create-content-types/about-content-types/) and **Social Share** [Global Field](/docs/developers/create-content-types/global/).

### How can I import the prebuilt Content Models?
You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)).