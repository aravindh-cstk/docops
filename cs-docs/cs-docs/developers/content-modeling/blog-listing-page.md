---
title: "[Features Content Models] Blog Listing Page"
description: Documentation for the “Blog Listing Page” content model, including fields and structures used to create a blog listing page.
url: https://www.contentstack.com/docs/developers/content-modeling/blog-listing-page
product: Features Content Models
doc_type: content-modeling-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Features Content Models] Blog Listing Page

This page explains the “Blog Listing Page” content model, including its sections and the fields used to build it. It is intended for developers and content modelers who need to create or import a Blog Listing Page content type and configure its components for use on a website.

## Article content

### Item 1

#### Article section

##### Heading

Blog Listing Page

##### Content

The “Blog Listing Page” features a prominent hero banner and user-friendly widgets, all conveniently accessible through the navigation pane. The “Blog Listing Page” Content Model is designed with fields and structures to effectively capture and organize essential information about the various blogs on your website.

Let’s dive deep into how the “Blog Listing Page” content model will help you create the “Blog Listing Page” page for your website.

- ## Analyzing Requirements for the Blog Listing Page

  The “Blog Listing Page” content model includes three main sections:

  The “Blog” hero banner
- The main “Blog Listing” page that includes blog references with their titles, small description, date of publish, and the respective author names
- The “Archived blogs” section on the right

  Here’s how your “Blog Listing Page will look like on your website

- ## Identifying Content Model

  Let's identify the fields that build up your “Blog Listing Page” content type that you see in the above step

- ## Developing Content Type

  The “Blog Listing Page” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

  **Blog Listing Page** Content Type:****

  **Title**: The [Title](/docs/developers/create-content-types/title/) field displays the title of the Blog Listing Page entry. This is a mandatory field and must be unique.

  **URL**: This [URL](/docs/developers/create-content-types/url/) field displays the URL of the Blog Listing page. This is a mandatory field and must be unique.

  **Search**: This [Group](/docs/developers/create-content-types/group/) field includes the following fields:

  **Placeholder Text**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the placeholder text for the search box.
- **Search Button**: This is a [Link](/docs/developers/create-content-types/link/) field to add the redirect link for search.

  **Page Components**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field includes the following components in the webpage:
- **Hero Banner**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field has the following component:  
  **Hero Banner**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Hero Banner](/docs/developers/content-modeling/hero-banner#developing-content-type) content type.
- **From Blog**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field includes the following components of a blog in the list:  
  **Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the title of the reference blog. The title is displayed as a level-two heading.
- **Featured Blogs**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Blog Landing Page](/docs/developers/content-modeling/blog-landing-page#developing-content-type) content type. You can find the Author content type in the [Blog Landing Page](/docs/developers/content-modeling/blog-landing-page#developing-content-type) content model.

  **View Articles**: This is a [Link](/docs/developers/create-content-types/link/) field to add links to any related articles.

  **Widget**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field includes the following components of the widget section:
- **Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the title of the blog in the list. The title is displayed as a level-two heading.
- **Type**: This is a [Select](/docs/developers/create-content-types/select/) field where you can add the widget type. The widget types are as follows:  
  Blog Archive
- Related Posts
- **Related Blogs**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Blog Landing Page ](/docs/developers/content-modeling/blog-landing-page#3-developing-content-type)content type.

  **SEO**: This [Global](/docs/developers/create-content-types/global/) field includes the following SEO components:
- **Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field to add the meta title of your Blog Listing page. Ideally, this should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the meta description of your Blog Listing page.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta keywords of your Blog Listing page.
- **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](/docs/developers/create-content-types/boolean/) field.

This completes the creation of your “Blog Listing Page” content model.

**Additional Resource**:
- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

### What is the “Blog Listing Page” content model used for?
It is used to capture and organize essential information about the various blogs on your website, including hero banner content, blog references, and widget/SEO configuration.

### What are the main sections included in the “Blog Listing Page” content model?
The “Blog” hero banner, the main “Blog Listing” page with blog references, and the “Archived blogs” section on the right.

### Which field type is used to group the search-related fields?
The **Search** field is a [Group](/docs/developers/create-content-types/group/) field that includes fields such as **Placeholder Text** and **Search Button**.

### How can I import this prebuilt content model?
Use the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation or the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.