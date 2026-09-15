---
title: "Blog Listing Page"
description: "The Blog Listing Page Content Model defines the structure, fields, and schema to design the blog listing of your website."
url: /marketplace/blog-listing-page
uid: bltaff46eaa67f738a7
---

# Blog Listing Page

## Blog Listing Page

The blog listing page on your website showcases a prominent hero banner, user-friendly widgets, etc., all accessible via the navigation pane. The Blog Listing Page Content Model includes fields and structures designed to capture and organize vital information for the diverse blogs within your website.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Blog Listing Page Content Model

The Blog Listing Page Content Model contains four [Content Types](/docs/headless-cms/about-content-types/) - **Blog Listing Page**, **Blog Landing Page**, **Hero Banner**, **Author**, and two [Global Fields](/docs/headless-cms/global/) - **SEO**, **Social Share**.

### Schema for Blog Listing Page Content Type

-   **Title**: The [Title](/docs/headless-cms/title/) field displays the title of the Blog Listing Page entry. This is a mandatory field and must be unique.
-   **URL**: This [URL](/docs/headless-cms/url/) field displays the URL of the Blog Listing page. This is a mandatory field and must be unique.
-   **Search**: This [Group](https://www.contentstack.com/docs/headless-cms/group/) field includes the following fields:
    -   **Placeholder Text**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the placeholder text for the search box.
    -   **Search Button**: This is a [Link](/docs/headless-cms/link/) field to add the redirect link for search.
-   **Page Components**: This [Modular Block](/docs/headless-cms/modular-blocks/) field includes the following components in the webpage:
    -   **Hero Banner**: This [Modular Block](/docs/headless-cms/modular-blocks/) field has the following component:
        -   **Hero Banner**: This is a [Reference](/docs/headless-cms/reference/) field that refers to the [Hero Banner](/marketplace/hero-banner#schema-for-hero-banner-content-type) content type.
    -   **From Blog**: This [Modular Block](/docs/headless-cms/modular-blocks/) field includes the following components of a blog in the list:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field where you can add the title of the reference blog. The title is displayed as a level-two heading.
        -   **Featured Blogs**: This is a [Reference](/docs/headless-cms/reference/) field that refers to the [Blog Landing Page](/docs/marketplace/blog-landing-page#schema-for-blog-landing-page-content-type) content type.

            **Note:** You can find the [Author](/docs/marketplace/blog-landing-page#schema-for-author-content-type) content type and the [Social Share](/docs/marketplace/blog-landing-page#schema-for-blog-landing-page-content-type) [Global](/docs/headless-cms/global) field in the [Blog Landing Page](/docs/marketplace/blog-landing-page) content model.

        -   **View Articles**: This is a [Link](/docs/headless-cms/link/) field to add links to any related articles.
    -   **Widget**: This [Modular Block](/docs/headless-cms/modular-blocks/) field includes the following components of the widget section:
        -   **Title H2**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the title of the blog in the list. The title is displayed as a level-two heading.
        -   **Type**: This is a [Select](/docs/headless-cms/select/) field where you can add the widget type. The widget types are as follows:
            -   Blog Archive
            -   Related Posts
        -   **Related Blogs**: This is a [Reference](/docs/headless-cms/reference/) field that refers to the [Blog Landing Page](/docs/marketplace/blog-landing-page#schema-for-blog-landing-page-content-type) content type.
-   **SEO**: This [Global](/docs/headless-cms/global/) field includes the following SEO components:
    -   **Meta Title**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox) field to add the meta title of your Blog Listing page. Ideally, this should be between 120 to 160 characters.
    -   **Meta Description**: This is a [Multi Line Textbox](/docs/headless-cms/multi-line-textbox/) field to add the meta description of your Blog Listing page.
    -   **Meta Keywords**: This is a [Single Line Textbox](/docs/headless-cms/single-line-textbox/) field to add the meta keywords of your Blog Listing page.
    -   **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](/docs/headless-cms/boolean/) field.

**Additional Resource:** You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/marketplace/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/headless-cms/import-prebuilt-content-models)). Refer the [Blog Listing Page Content Modeling](/docs/headless-cms/blog-listing-page/) documentation to understand how to model the "Blog Listing" page.

Here’s how your Blog Listing Page will look after you publish the entry:

![Content_Models_Blog_Listing](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta605d2f50b4f8a85/65014e4a9da015067d1ecaa4/Content_Models_Blog_Listing.png)
