---
title: "Website Homepage"
description: "The Website Homepage Content Model defines the structure, fields, and schema to design the homepage of your website."
url: /marketplace/website-homepage
---

# Website Homepage

## Website Homepage

At the core of our website lies the homepage that features a captivating hero banner, readily accessible contact details, organized sections with buckets and cards, and much more. The Website Homepage Content Model includes fields and structures thoughtfully designed to capture the key information for the homepage of your website.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Website Homepage Content Model

The Website Homepage Content Model contains six [Content Types](/docs/headless-cms/about-content-types) - **Author**, **Blog Landing Page**, **Contact**, **Hero Banner**, **Homepage**, **Our Team,** and six [Global Fields](/docs/headless-cms/global) - **SEO**, **Social Share**, **Section With HTML Code**, **Section With Cards**, **Section**, and **Section With Buckets**.

### Schema for Homepage Content Type

-   **Title**: The [Title](/docs/headless-cms/title) field displays the title of the Website Homepage entry. This is a mandatory field and must be unique.
-   **URL**: This [URL](/docs/headless-cms/url/) field displays the URL of the homepage. This is a mandatory field and must be unique.
-   **Page Components**: This [Modular Block](/docs/headless-cms/modular-blocks/) field covers the following components in the webpage:
    -   **Hero Banner**: This [Modular Block](/docs/headless-cms/modular-blocks/) field has the following component:
        -   **Hero Banner**: This is a [Reference](/docs/headless-cms/reference) Field that refers to the [Hero Banner](/marketplace/hero-banner#schema-for-hero-banner-content-type) content type.
    -   **Section With Buckets**: This [Modular Block](/docs/headless-cms/modular-blocks/) field contains the **Section with Buckets** [Global](/docs/headless-cms/global) field which has the following components:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that displays the title of the section. The title is displayed as a level-two heading.
        -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the description for the section.
        -   **Tabular Buckets**: This is a [Boolean](/docs/headless-cms/boolean/) field to specify whether the data is represented in tabular format or not.
        -   **Buckets**: This [Group](/docs/headless-cms/group/) field includes the following fields:
            -   **Title H3**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that stores the title for this subsection. The H3 element defines a level-three heading.
            -   **Image**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the image for the bucket and add it to the entry.
            -   **Image Alignment**: This is a [Select](/docs/headless-cms/select) field where you can choose the alignment of an image. Image alignment can be Left, Centre, or Right.
            -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field that stores the description for this bucket.
            -   **Icon**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the icon for the bucket and add it to the entry. Ideally, the image file for the icon should be less than 100KB in a PNG format.
            -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field that stores bucket button name as a title and links it for redirection.
    -   **Section**: This [Modular Block](/docs/headless-cms/modular-blocks/) field contains the **Section** [Global](/docs/headless-cms/global) field which has the following components:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that displays the title of the section. The title is displayed as a level-two heading.
        -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the description for the section.
        -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field where you can add links based on your requirement.
        -   **Image**: This is a [File](/docs/headless-cms/file/) field where you can add an image as per your requirement.
        -   **Is Image Right Aligned?**: This is a [Boolean](/docs/headless-cms/boolean/) field that specifies if the image is left-aligned or right-aligned.
    -   **Section With Cards**: This [Modular Block](/docs/headless-cms/modular-blocks/) field contains the **Section with Cards** [Global](/docs/headless-cms/global) field which has the following components:
        -   **Section Title**: This is a [Title](/docs/headless-cms/title) field that displays the title of the section. This is a mandatory field and must be unique.
        -   **Section Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the description of the section.
        -   **Cards**: This [Group](/docs/headless-cms/group/) field includes the following fields to add the card details:
            -   **Card Title H3**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the title of the card. The title is displayed as a level-three heading.
            -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the description for the card.
            -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field to add links based on your requirement.
            -   **Image**: This is a [File](/docs/headless-cms/file/) field to add an image as per your requirement.
    -   **Section with HTML Code**: This [Modular Block](/docs/headless-cms/modular-blocks/) field contains **Section with HTML Code** [Global](/docs/headless-cms/global) field which covers the following components:
        -   **Title**: Title is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that defines the title of this specific section.
        -   **Description**: Description is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the detailed description of the HTML code.
        -   **HTML Code**: This is a [Custom](/docs/headless-cms/custom/) field containing [Ace Editor](/marketplace/ace-editor/) as an extension.
        -   **Is HTML Code Left Aligned?**: This is a [Boolean](/docs/headless-cms/boolean/) field which specifies that the HTML Code is left aligned or right aligned.
    -   **Our Team**: This [Modular Block](/docs/headless-cms/modular-blocks/) field has the following component:
        -   **Our Team**: This is a [Reference](/docs/headless-cms/reference) Field that refers to the [Our Team](/marketplace/about-us-page#schema-for-our-team-content-type) content type.
    -   **From Blog**: This [Modular Block](/docs/headless-cms/modular-blocks/) field covers the following components of a blog in the list:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the title of the reference blog. The title is displayed as a level-two heading.
        -   **Featured Blogs**: This is a [Reference](/docs/headless-cms/reference/) field that refers to the [Blog Landing Page](/docs/marketplace/blog-landing-page#schema-for-blog-landing-page-content-type) content type.
        
        **Note:** You can find the [Author](/docs/marketplace/blog-landing-page#schema-for-author-content-type) content type and the [Social Share](/docs/marketplace/blog-landing-page#schema-for-blog-landing-page-content-type) [Global](/docs/headless-cms/global) field in the [Blog Landing Page](/docs/marketplace/blog-landing-page) content model.
        
        -   **View Articles**: This is a [Link](/docs/headless-cms/link/) field to add links to any related articles.
    -   **Widget**: This [Modular Block](/docs/headless-cms/modular-blocks/) field covers the following components of the widget section:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the title of the blog in the list. The title is displayed as a level-two heading.
        -   **Type**: This is a [Select](/docs/headless-cms/select/) field where you can add the widget type. The widget types are as follows:
            -   Blog Archive
            -   Related Posts
    -   **Contact Us**: This [Modular Block](/docs/headless-cms/modular-blocks/) field has the following component:
        -   **Reference**: This is a [Reference](/docs/headless-cms/reference) Field that refers to the [Contact](/docs/marketplace/contact-us-page#schema-for-contact-content-type) content type.
-   **SEO**: This [Global](/docs/headless-cms/global) field covers the following SEO components:
    -   **Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta title of your homepage. Ideally, this should be between 120 to 160 characters.
    -   **Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the meta description of your homepage.
    -   **Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta keywords of your homepage.
    -   **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](/docs/headless-cms/boolean/) field.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Website Homepage Content Modeling](/docs/headless-cms/website-homepage/) documentation to understand how to model the "Website Homepage".

Here’s how your Website Homepage will look after you publish the entry:

![Content_Models_Website_Homepage.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2149fac3626c203/65014e6c539fa125784aec50/Content_Models_Website_Homepage.gif)
