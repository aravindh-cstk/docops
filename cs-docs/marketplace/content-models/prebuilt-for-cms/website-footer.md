---
title: "Website Footer"
description: "The Website Footer Content Model defines the structure, fields, and schema to design the website footer."
url: /marketplace/website-footer
uid: blte54f19fe2a136c20
---

# Website Footer

## Website Footer

The Website Footer is the information that appears at the bottom of each website page. It typically includes navigation menu links, copyright and contact information, social media icons, and other options for website visitors to engage with the site.

The Website Footer Content Model includes fields and structures designed to capture the essential information about the Website Footer.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Schema for Website Footer Content Model

The Website Footer Content Model contains the **Footer** [Content Types](/docs/headless-cms/about-content-types/) and **Social Share** [Global Field](/docs/headless-cms/global/).

### Schema for Footer Content Type

-   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title of the Website Footer entry. This is a mandatory field and must be unique.
-   **Logo**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the website logo and add it to the entry. This is a mandatory field. Ideally, the image file for the logo should be less than 100KB in a PNG format.
-   **Navigation**: This is a [Group](/docs/headless-cms/group/) field which can be used to add multiple navigation items, with the following fields in it:
    -   **Link**: This is a [Link](/docs/headless-cms/link/) field that adds a navigation menu item as a title and URL for redirection.
    -   **Open in new tab**: You can enable or disable the **Open in new tab** option using this [Boolean](/docs/headless-cms/boolean/) field.
-   **Social Media**: This is a **Social Share** [Global](/docs/headless-cms/global/) field, and includes the following components:
    -   **Social Media Share**: This is a [Group](/docs/headless-cms/group/) field that holds the following fields:
        -   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title for the Social Media Share.
        -   **Icon**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the social media icon and add it to the footer. Ideally, the image file for the icon should be less than 100KB in a PNG format.
        -   **URL**: This is a [Link](/docs/headless-cms/link/) field that adds a social media name as a title and links it for redirection.
-   **Copyright**: This is a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field that holds the legal copyright information of the website.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Website Footer Content Modeling](/docs/headless-cms/website-footer/) documentation to understand how to model the "Website Footer".

After publishing the entry, you can view the Website Footer on your website.

![Website-Footer-Content-Model](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2fe19dd65f87bb3d/650096adec933787e1ec6d47/Website-Footer-Content-Model.png)
