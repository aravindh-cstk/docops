---
title: "[Features Content Models] Hero Banner"
description: Documentation for the Hero Banner content model, including its purpose and fields used to create the model.
url: https://www.contentstack.com/docs/developers/content-modeling/hero-banner
product: Features Content Models
doc_type: content-model
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Features Content Models] Hero Banner

This page explains what a “Hero Banner” is and how the Hero Banner Content Model helps developers and content modelers define the fields needed to create a hero banner for a website’s front page. Use this when you want to build or import a prebuilt Hero Banner content type and understand the purpose of each field.

### Item 1

#### Article section

##### Heading

Hero Banner

##### Content

A “Hero Banner” is a large, visually appealing image or video that is prominently displayed at the top of a website's homepage. It is typically the first thing that visitors see when they land on a webpage and is designed to grab their attention.

The Hero Banner Content Model is a thoughtfully designed system for gathering and organizing essential information for the hero banner content that appears on your website's front page.

Let’s understand how this content model will assist you in creating a Hero Banner for your webpage.
- ## Analyzing Requirements for the Hero Banner
The “Hero Banner” in your webpage will be the point of attraction for your webpage. It will include the brief details about your webpage and a Call-to-Action (CTA) button for the users.

Here is how a Hero Banner will look like on your webpage:
- ## Identifying Content Model
Let's identify the fields that create the Hero Banner for your webpage content type that you see in the above step.
- ## Developing Content Type
The “Hero Banner” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

**Hero Banner **Content Type:

- **Banner Title**: This is a [Title](/docs/developers/create-content-types/title) field where you will add a unique name to your banner. It is a mandatory field and must be clear and concise.
- **Banner Image**: This field allows you to insert images in your banner. We have used a [File](/docs/developers/create-content-types/file/) field to make this possible.
- **Background Color**: You can set a background color of your choice for the banner. Here, we have used a [Custom](/docs/developers/create-content-types/custom/) field that adds [Color Picker](/docs/developers/marketplace-apps/color-picker/) as an extension to make this possible.
- **Text Color**: You can set a text color of your choice for the banner. Here, we have used a [Custom](/docs/developers/create-content-types/custom/) field that adds [Color Picker](/docs/developers/marketplace-apps/color-picker/) as an extension to make this possible.
- **Banner Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field where you can add content in the banner. This content can be a brief description of the content that you have included in the webpage or anything else.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field to add links based on your requirement.
- **Is Banner Image Full Width?**: This is a [Boolean](/docs/developers/create-content-types/boolean) field that controls whether the banner image on a web page is displayed in full width. By default, the banner image is displayed in full width i.e, the default value for this field is true.
- **Banner Image Alignment**: You can set the image alignment in the banner as per your requirement. To do this, we have used a [Select](/docs/developers/create-content-types/select) field with Single Choice as the Selection Type.
- **Content Alignment**: You can set the alignment for the content as per your requirement. To do this, we have used a [Select](/docs/developers/create-content-types/select) field with Single Choice as the Selection Type to select the alignment of the content.

This completes the creation of the “Hero Banner” content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

### What is a “Hero Banner” used for?
A “Hero Banner” is a large, visually appealing image or video that is prominently displayed at the top of a website's homepage.

### Which field is used to add a CTA link?
**Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field to add links based on your requirement.

### How do I control whether the banner image is full width?
**Is Banner Image Full Width?**: This is a [Boolean](/docs/developers/create-content-types/boolean) field that controls whether the banner image on a web page is displayed in full width.

### Where can I find instructions to import this content model?
Refer to **Additional Resource**:
- [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models)
- [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)