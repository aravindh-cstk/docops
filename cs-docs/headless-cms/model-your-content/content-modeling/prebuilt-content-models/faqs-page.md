---
title: "Frequently Asked Questions (FAQs)"
description: "The FAQs Content Model is tailored to gather & organize essential information for your website's FAQ section, providing easy access to key details."
url: /headless-cms/faqs-page
uid: bltabfded0cfcc2fe9f
---

# Frequently Asked Questions (FAQs)

## FAQs Page

Your website's "Frequently Asked Questions" (FAQs) page includes a dynamic hero banner, a well-structured section with cards, and so on. The FAQs Content Model is specifically designed to capture and organize critical information about your website's Frequently Asked Questions (FAQs) area, ensuring you have all the relevant details at your fingertips.

Let’s understand how this model will assist you create your company’s “Frequently Asked Questions (FAQs)” page.

1.  ## Analyzing Requirements for the FAQs Page

    The FAQs content model contains the following main sections:

    -   The “FAQs” Hero Banner
    -   The “Connect with an Advisor” section
    -   The “Quick Links” section to get the user started
    -   The “View Articles” section for reference

    Here’s how your “FAQs” page will look like on your website:![Analyze_Requirements_for_the_Frequently_Asked_Questions_(FAQs)_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcaf9f22bb2d89ef5/65360bda377588ef1d648b0c/Analyze_Requirements_for_the_Frequently_Asked_Questions_(FAQs)_Page.png)
2.  ## Identifying Content Model

    Let's identify the fields that build up your FAQs Page content type that you see in the above step.![Identifying_the_Content_Model_for_the_Frequently_Asked_Questions_(FAQs)_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb56b3d42489f83c5/65360bda5a382f4bb4a25a48/Identifying_the_Content_Model_for_the_Frequently_Asked_Questions_(FAQs)_Page.png)
3.  ## Developing Content Type

    The “FAQs” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

    **FAQs** Content Type:

    **Title**: The [Title](/docs/headless-cms/title) field is where you will provide your webpage a unique name. It should be clear and concise, and accurately reflect the contents of the webpage. The title field is a required field.

    **URL**: Here goes the web URL of your “FAQs" page. When clicked on, this link provided in the [URL](/docs/headless-cms/url) field takes users straight to your FAQs webpage.

    **Page Components**: This content type hosts different sections that you see in your webpage. The field is a [Modular Block](/docs/headless-cms/modular-blocks/) that contains two other Modular Blocks. Let’s take a closer look at each one.

    -   **Hero Banner**: The Hero Banner is typically the first thing that visitors see when they land on a webpage and is designed to grab their attention. is used to communicate the most important content of the page and should have a clear call to action (CTA). This [Modular Block](/docs/headless-cms/modular-blocks/) field has the following component:
        -   **Hero Banner**: This is a [Reference Field](/docs/headless-cms/reference/) that refers to the [Hero Banner](/docs/headless-cms/hero-banner#developing-content-type) content type.
    -   **Section With Cards**: This section contains the different components of the web page. It is a [Modular Block](/docs/headless-cms/modular-blocks/) field that contains a Section with Cards [Global](/docs/headless-cms/global/) field which has the following components:
        -   **Section Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field where you will provide a unique title of the section. It is a mandatory field and must be clear and concise.
        -   **Section Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field where you will add the description of the section.
        -   **Cards**: This is a [Group](/docs/headless-cms/group/) field where you will add the question-answers to the FAQs section. It includes the following fields:
            -   **Card Title H3**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field where you will add the frequently asked questions about your product/business. The title is displayed as a level-three heading.
            -   **Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field where you will add the answers to the frequently asked questions about your product/business.
            -   **Call To Action**: This is a [Link](/docs/headless-cms/link/) field to add links based on your requirement.
            -   **Image**: This is a [File](/docs/headless-cms/file/) field which allows you to add an image for this section. The ideal file size for the location image is less than 100 KB and the file format should be PNG.

    **SEO**: This is the [Global](/docs/headless-cms/global/) field with the following components:

    -   **Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that allows you to enter the meta title of your webpage, which should be between 120 and 160 characters.
    -   **Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field that allows you to add the meta description of your webpage.
    -   **Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field that allows you to add the meta keywords of your webpage.
    -   **Enable Search Indexing**: This is a [Boolean](/docs/headless-cms/boolean/) field that allows you to enable or disable search indexing for your webpage.

This completes the creation of the “FAQs" content model.

![faqs-page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e08de16bca66910/65ea94405d771346ee38e407/faqs-page.png)

**Additional Resource**:

-   To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/headless-cms/import-prebuilt-content-models) documentation.
-   To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/marketplace/how-to-import-content-model) document.
