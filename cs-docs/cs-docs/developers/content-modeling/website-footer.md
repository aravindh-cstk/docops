---
title: "[Features Content Models] Website Footer"
description: Documentation for the “Website Footer” prebuilt content model, including fields and structure.
url: https://www.contentstack.com/docs/developers/content-modeling/website-footer
product: Features Content Models
doc_type: content-model
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Features Content Models] Website Footer

This page describes the “Website Footer” content model and its fields, intended for developers and content modelers who want to implement a reusable footer structure across a website and understand how to configure and populate the related content type.

### Item 1

#### Article section

##### Heading

Website Footer

##### Content

The "Website Footer" refers to the content displayed at the bottom of every webpage on a site. It commonly encompasses elements such as navigation menu links, copyright details, contact information, social media icons, and various tools for visitors to interact with the website.

Let’s dive deep into how this model will help you create your company’s Website Footer.

- ## Analyzing Requirements for the Website Footer Page

  The “Website Footer” content model includes fields and structures designed to capture the essential information about the website footer.

  After publishing the entry, you can view the website footer on your website.

- ## Identifying Content Model

  Let's identify the fields that build up your “Website Footer” content type that you see in the above step.

- ## Developing Content Type

  The “Website Footer” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

  **Footer** Content Type:

  **Title**: This is where you'll provide your “Website Footer" a name. The [Title](/docs/developers/create-content-types/title) field defines the title of the “Website Footer” content/entry.

- **Logo**: For logo, you will see a [File](/docs/developers/create-content-types/file/) field that allows you to choose the website logo file and add it to the entry.
- **Navigation**: For the navigation, you will see a [Group](/docs/developers/create-content-types/group/) field that showcases the navigation menu. It contains the following:
  **Link**: For the navigation item, you will see a [Link](/docs/developers/create-content-types/link/) field that adds a navigation menu item as a title and links it for redirection.
- **Open in new tab**: You can choose to enable or disable the **Open in new tab **option with the help of a [Boolean](/docs/developers/create-content-types/boolean/) field.
- **Social Media: **This is a [Global field](/docs/developers/global-field/about-global-field/), and includes the following components:****
  **Social Share**: Social Share is a [Group field](/docs/developers/create-content-types/group) that covers the following set of fields:
  **Title:** You will find the [Title](/docs/developers/create-content-types/title)field that defines the group title for the social media share.
- **Icon**: Here you will see the [File](/docs/developers/create-content-types/file/) field where you get to upload or choose (from Assets) the social media icon.
- **Url**: The [Link](/docs/developers/create-content-types/link/) field here will add a social media app name as a title, say “Twitter,” “Facebook,” “Instagram,” and so on and their respective links for redirection.
- **Copyright**: Copyright is a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/) field that holds the legal copyright information of the website.

This completes the creation of your "Website Footer" content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

### What is the “Website Footer” content model used for?
It is used to structure and manage the content displayed at the bottom of every webpage, such as navigation links, social media icons, and copyright information.

### Which field types are used in the “Footer” content type?
It uses fields such as Title, File, Group, Link, Boolean, a Global field (Social Media), and a JSON Rich Text Editor field (Copyright).

### How do I add social media links and icons?
Use the “Social Media” Global field, which includes “Social Share” with fields for Title, Icon (File), and Url (Link).

### How can I import this prebuilt content model?
Use the guidance in the linked resources: [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) or [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model).