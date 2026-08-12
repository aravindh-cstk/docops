---
title: "Contact Us Page"
description: "The Contact Us Page Content Model defines the structure, fields, and schema to design the Contact Us page of the website."
url: /marketplace/contact-us-page
---

# Contact Us Page

## Contact Us Page

The Contact Us Page is a section of a website that provides information about the company or organization that owns the website. It typically includes details about the company's history, mission statement, team members, and any notable accomplishments or awards.

The Contact Us Page is also a place where website visitors can learn about the company's values, priorities, and approach to business. This important page can establish trust and credibility with potential customers and help them understand more about the company.

The Contact Us Page Content Model includes fields and structures designed to capture the essential information about the Contact Us page.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Contact Us Page Content Model

The Contact Us Page Content Model contains the [Content Types](/docs/headless-cms/about-content-types) - **Contact Us Page** and **Contact**; and [Global Fields](/docs/headless-cms/global) - **SEO** and **Section with HTML Code**.

### Schema for Contact Us Page Content Type

-   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title of the Contact Us Page entry. This is a mandatory field and must be unique.
-   **Primary Contact Details**: This is a [Reference](/docs/headless-cms/reference) field that refers to the [Contact](#schema-for-contact-content-type) content type.
-   **Page Components**: This is a [Modular Block](/docs/headless-cms/modular-blocks/) field containing three Modular Blocks. Let’s discuss in detail.
    -   **Other Location**: This is the first block that includes the following:
        -   **Other Locations**: This is a [Group](/docs/headless-cms/group/) field that holds the following information:
            -   **City/Country**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that stores the city or country name.
            -   **Address**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the full address of the organization.
            -   **Location Image**: This is a [File](/docs/headless-cms/file/) field that allows you to choose the image of the location and add it to the Contact Us page.
            -   **Maps Location**: This is a [Link](/docs/headless-cms/link/) field that adds a location name as a title and URL for redirection. You can use this field to add an embed map URL from Google Maps.
    -   **Section with HTML Code**: This is the second block that contains **Section with HTML Code** [Global](/docs/headless-cms/global/) field which includes the following components:
        -   **Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that defines the title of this specific section.
        -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the detailed description of the HTML code.
        -   **HTML Code**: This is a [Custom](/docs/headless-cms/custom/) field containing [Ace Editor](/marketplace/ace-editor/) as an extension.
        -   **Is HTML Code Left Aligned?**: This is a [Boolean](/docs/headless-cms/boolean/) field which specifies that the HTML Code is left-aligned or right-aligned.
    -   **Contact Us Form**: This is the third and last block that holds the following:
        -   **Contact Fields**: This is a [Group](/docs/headless-cms/group/) field that holds the following information:
            -   **Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that shows the group title for the contact form.
            -   **Placeholder Text**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the placeholder text for the contact form.
        -   **Short Detailed Message**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the request/queries of the user.
        -   **Submit**: This is a [Link](/docs/headless-cms/link/) field that adds a submit button name as a title and URL for submission.
-   **SEO**: This is the [Global](/docs/headless-cms/global/) field which includes the following components:
    -   **Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta title of your Contact Us Page. This should be between 120 to 160 characters.
    -   **Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the meta description of your Contact Us Page.
    -   **Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta keywords of your Contact Us Page.
    -   **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](/docs/headless-cms/boolean/) field.

### Schema for Contact Content Type

-   **Title**: This is a [Title](/docs/headless-cms/title) field that defines the title of the contact entry. This is a mandatory field and must be unique.
-   **Address**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox) field that stores the full address of the company.
-   **Contact Number**: This is a [Number](/docs/headless-cms/number) field that stores the contact number of the organization. You can add multiple contact numbers to this field.
-   **Email Address**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that stores the company’s official email address.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Contact Us Page Content Modeling](/docs/headless-cms/contact-us-page/) documentation to understand how to model the "Contact Us" page.

After publishing the entry, you can view the Contact Us Page on your website.

![Contact-Us-Page-Content-Model](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte66d86a80cd31dd1/6500ba27dc211772fcc31037/Contact-Us-Page-Content-Model.png)
