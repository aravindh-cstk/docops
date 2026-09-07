---
title: "About Us Page"
description: "The About Us Page Content Model defines the structure, fields, and schema to design the About Us page of the website."
url: /marketplace/about-us-page
uid: bltf2f7b60afb002e63
---

# About Us Page

## About Us Page

The About Us page is a section of a website that provides information about the company or organization that owns the website. It typically includes details about the company's history, mission statement, team members, and any notable accomplishments or awards. The About Us page is also a place where website visitors can learn about the company's values, priorities, and approach to business. This page is important because it can establish trust and credibility with potential customers and help them understand more about the company behind the website.

The About Us Page Content Model provides the structure, fields, and schema to build the About Us web page.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for About Us Page Content Model

The About Us Page Content Model contains the [Content Types](/docs/headless-cms/about-content-types/) - **About Us Page**, **Contact**, **Hero Banner**, and **Our Team**; and [Global Fields](/docs/headless-cms/global/) - **SEO**, **Section**, and **Section with Buckets**.

### Schema for About Us Page Content Type

-   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title of the About Us entry. This is a mandatory field and must be unique.
-   **URL**: This is a [URL](/docs/headless-cms/url/) field that adds the redirection URL of the About Us page . This is also a mandatory field.
-   **Page Components**: This is a [Modular Block](/docs/headless-cms/modular-blocks/) field containing six Modular Blocks. Let’s discuss in detail.
    -   **Hero Banner**: This is the first block that includes the following:
        -   **Hero Banner**: This is a [Reference](/docs/headless-cms/reference) field that refers to the [Hero Banner](/marketplace/hero-banner#schema-for-hero-banner-content-type) content type.
    -   **Section with Bucket**: This is the second block that contains **Section with Buckets** [Global](/docs/headless-cms/global/) field which includes the following components:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that defines the title for the section. The H2 element defines a level-two heading.
        -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the description for this section.
        -   **Tabular Buckets**: This is a [Boolean](/docs/headless-cms/boolean/) field which describes whether the data is represented in tabular format or not.
        -   **Buckets**: This is a [Group](/docs/headless-cms/group/) field that holds the following information:
            -   **Title H3**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that stores the title for this subsection. The H3 element defines a level-three heading.
            -   **Image**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the image for the bucket.
            -   **Image Alignment**: This is a [Select](/docs/headless-cms/select) field where you can choose the alignment of an image. Image alignment can be Left, Center, or Right.
            -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the description for this bucket.
            -   **Icon**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the icon for the bucket and add it to the entry. Ideally, the image file for the icon should be less than 100KB in a PNG format.
            -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field that stores bucket button name as a title and URL for redirection.
    -   **Awards & Achievements**: This is the third block that includes the following:
        -   **Awards & Achievements**: This is a [Group](/docs/headless-cms/group/) field that holds the following information:
            -   **Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that stores the name of awards or achievements.
            -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the information about the company’s awards and achievements.
            -   **Image**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the image of the award or achievement and add it to the entry.
            -   **Link**: This is a [Link](/docs/headless-cms/link/) field that adds a recognition title and URL for redirection.
    -   **Sections**: This is the fourth block that contains **Section** [Global](/docs/headless-cms/global/) field which includes the following components:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field that defines the title for the section. The title is displayed as a level-two heading.
        -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field to add the description for this section.
        -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field that stores button name as a title and URL for redirection.
        -   **Image**: This is a [File](/docs/headless-cms/file/) field where you can add an image as per your requirement.
        -   **Is Image Right Aligned?**: This is a [Boolean](/docs/headless-cms/boolean/) field which specifies that the image is right-aligned or left-aligned.
    -   **Team**: This is the fifth block that includes the following:
        -   **Team**: This is a [Reference](/docs/headless-cms/reference) field that refers to the [Our Team](#schema-for-our-team-content-type) content type.
    -   **Contact Us**: This is the sixth block that includes the following:
        -   **Contact**: This is a [Reference](/docs/headless-cms/reference) field that refers to the [Contact](/docs/marketplace/contact-us-page#schema-for-contact-content-type) content type.
-   **SEO**: This is the [Global](/docs/headless-cms/global) field which includes the following components:
    -   **Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta title of your About Us Page. This should be between 120 to 160 characters.
    -   **Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the meta description of your About Us Page.
    -   **Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta keywords of your About Us Page.
    -   **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](/docs/headless-cms/boolean/) field.

### Schema for Our Team Content Type

-   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title of our team entry. It is a mandatory field and must be unique.
-   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field to add the team’s description.
-   **Employees**: This is a [Group](/docs/headless-cms/group/) field that holds the following information:
    -   **Name**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field to add the employee name.
    -   **Designation**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field to add the employee designation.
    -   **Image**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the photograph of an employee.
    -   **Short Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field to add a short description about the employee.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [About Us Page Content Modeling](/docs/headless-cms/about-us-page) documentation to understand how to model the "About Us" page.

After publishing the entry, you can view the About Us Page on your website.

![About-Us-Page-Content-Model](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2e4b38fc22f3f29/6500dd6f9e7ba6710acab3ce/About-Us-Page-Content-Model.png)
