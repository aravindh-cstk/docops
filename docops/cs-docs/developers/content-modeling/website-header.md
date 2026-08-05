---
title: "[Features Content Models] Website Header"
description: Documentation for the “Website Header” Content Model, including its purpose and field structure.
url: https://www.contentstack.com/docs/developers/content-modeling/website-header
product: Features Content Models
doc_type: feature-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Features Content Models] Website Header

This page explains the “Website Header” Content Model, including what it represents and which fields it contains. It is intended for developers and content modelers who need to structure and publish a consistent website header across pages.

### Item 1

#### Article section

##### Heading

Website Header

##### Content

The header is a constant element located at the top of each page, including key components such as the website’s title, logo, and navigation menu. The "Website Header" Content Model is thoughtfully designed to gather and structure vital information pertaining to your website’s header, guaranteeing a unified and influential branding encounter.

Let’s dive deep into how this model will help you create your company’s Website Header.

- ## Analyzing Requirements for the Website Header

The “Website Header” content model defines the structure and fields to design the website header of your website.

Here’s how your website header looks after you publish the entry

- ## Identifying Content Model

Let's identify the fields that build up your Website Header content type that you see in the above step

- ## Developing Content Type

The “Website Header” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

**Header **Content Type:

**Title**: This is where you'll provide your Website Header a name. This is a [Title](../create-content-types/title.md) field that displays the title of the website header entry. This mandatory field defines the title of the Website Header.

- **Logo**: Choose an appropriate image file to add as the website logo. The Logo field is a [File](../create-content-types/file.md) field. This is also a mandatory field. The image size must not exceed 100 Kb.
- **Navigation Menu**: This is a [Group](../create-content-types/group.md) field with the following fields in it:
- **Notification Bar**: This is a [Group](../create-content-types/group.md) field with the following fields in it:
- **Label**: This [Single Line Textbox](../create-content-types/single-line-textbox.md) field is used to name the navigation items in the Navigation Menu.
- **Call To Action**: This is a [Link](../create-content-types/link.md) field where you can add the links to the navigation items in the Navigation Menu.
- **Open in New Tab**: This is a [Boolean](../create-content-types/boolean.md) field that, if enabled, lets you open the link in a new tab.
- **Announcement Text**: You can add any announcement to your website using this [JSON Rich Text Editor](../json-rich-text-editor.md) field.
- **Show Announcement?**: You can enable or disable the announcement in this [Boolean](../create-content-types/boolean.md) field.

This completes the creation of your “Website Header” content model.

**Additional Resource**:

- To import the content model within your stack, refer to the [Import Prebuilt Content Models](../create-content-types/import-prebuilt-content-models.md) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](../marketplace-platform-guides/content-models/how-to-import-content-model.md) document.

## Common questions

**How do I import this prebuilt “Website Header” content model into my stack?**  
Use the steps in [Import Prebuilt Content Models](../create-content-types/import-prebuilt-content-models.md).

**Can I import the “Website Header” content model via the Marketplace?**  
Yes. Refer to [How to Import a Content Model via Marketplace](../marketplace-platform-guides/content-models/how-to-import-content-model.md).

**What fields are mandatory in the “Website Header” content model?**  
The **Title** field is described as mandatory, and the **Logo** field is also described as a mandatory field.

**Is there a file size limit for the website logo?**  
Yes. “The image size must not exceed 100 Kb.”

<!-- filename: features-content-models-website-header.md -->