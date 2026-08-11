---
title: "Website Header"
description: "The Website Header  Content Model defines the structure, fields, and schema to design the website header of your website."
url: /marketplace/website-header
---

# Website Header

## Website Header

The website header is a consistent presence atop every page, featuring essential elements such as the website title, logo, navigation menu, etc. The Website Header Content Model is meticulously crafted to capture and organize crucial information for the header of your website, ensuring a cohesive and impactful brand experience.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Schema for Website Header Content Model

The Website Header Content Model contains one [Content Type](/docs/headless-cms/about-content-types/) named **Header**.

### Schema for Header Content Type

-   **Title**: This is a [Title](/docs/headless-cms/title) field that displays the title of the website header entry. This is a mandatory field and must be unique.
-   **Logo**: Logo is a [File](/docs/headless-cms/file/) field that allows you to choose the website logo and add it to the entry. This is a mandatory field. Ideally, the image file for the logo should be less than 100KB in a PNG format.
-   **Navigation Menu**: This is a [Group](/docs/headless-cms/group/) field which can be used to add multiple navigation items, with the following fields in it:
    -   **Label**: This [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field is used to name the navigation items in the Navigation Menu.
    -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field where you can add the URLs to the navigation items in the Navigation Menu.
    -   **Open in New Tab**: This is a [Boolean](/docs/headless-cms/boolean/) field that, if enabled, lets you open the link in a new tab.
-   **Notification Bar**: This is a [Group field](/docs/headless-cms/group/) with the following fields in it:
    -   **Announcement Text**: You can add any announcement to your website using this [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.
    -   **Show Announcement?**: You can enable or disable the announcement in this [Boolean](/docs/headless-cms/boolean/) field.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Website Header Content Modeling](/docs/headless-cms/website-header/) documentation to understand how to model the "Website Header".

Here’s how your Website Header looks after you publish the entry:

![Content_Models_Website_Header](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad3dde4561853839/65014e4ac40f773bf7a5371f/Content_Models_Website_Header.png)
