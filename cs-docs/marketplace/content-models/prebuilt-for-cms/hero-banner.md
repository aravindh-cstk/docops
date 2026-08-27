---
title: "Hero Banner"
description: "The Hero Banner Content Model defines the structure, fields, and schema to design the hero banner of your website."
url: /marketplace/hero-banner
uid: bltd00bde4b5dd79f00
---

# Hero Banner

## Hero Banner

The hero banner features prominently on the homepage, commanding attention with its banner title, captivating images, engaging descriptions, useful links etc. The Hero Banner Content Model is thoughtfully crafted to gather and organize essential information for the hero banner content that adorns the front page of your website.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Hero Banner Content Model

The Hero Banner Content Model contains a [Content Type](/docs/headless-cms/about-content-types/) named **Hero Banner**.

### Schema for Hero Banner Content Type

-   **Banner Title**: This is a [Title](/docs/headless-cms/title) field that displays the title of the Hero Banner. This is a mandatory field and must be unique.
-   **Banner Image**: This is a [File](/docs/headless-cms/file/) field where you can choose an appropriate image to add in the banner.
-   **Background Color**: This is a [Custom](/docs/headless-cms/custom/) field that adds [Color Picker](https://www.contentstack.com/docs/marketplace/color-picker/) as an extension that you can use to set the default background color of the page.
-   **Text Color**: This is a [Custom](/docs/headless-cms/custom/) field containing [Color Picker](https://www.contentstack.com/docs/marketplace/color-picker/) as an extension that you can use to set the default text color.
-   **Banner Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the banner description.
-   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field to add links based on your requirement.
-   **Is Banner Image Full Width**?: This is a [Boolean](/docs/headless-cms/boolean) field that lets you enable or disable a full-width banner image on a web page. By default, this field is set to true, i.e. the Banner Image is in full-width.
-   **Banner Image Alignment**: This is a [Select](/docs/headless-cms/select) field with Single Choice as the Selection Type to select the alignment of the Banner Image.
-   **Content Alignment**: This is a [Select](/docs/headless-cms/select) field with Single Choice as the Selection Type to select the alignment of the content.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Hero Banner Content Modeling](/docs/headless-cms/hero-banner/) documentation to understand how to model the "Hero Banner".

Here’s how your Hero Banner looks after you publish the entry:

![Content_Models_Hero_Banner](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0ace167af812ce8/65014e4adc21172bdec3133c/Content_Models_Hero_Banner.png)
