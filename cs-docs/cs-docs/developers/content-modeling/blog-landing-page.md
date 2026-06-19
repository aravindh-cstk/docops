---
title: "[Features Content Models] Blog Landing Page"
description: Documentation for the “Blog Landing Page” content model, including its sections, fields, and related content types.
url: https://www.contentstack.com/docs/developers/content-modeling/blog-landing-page
product: Contentstack
doc_type: content-model
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Features Content Models] Blog Landing Page

This page explains the “Blog Landing Page” content model, including its key sections, the fields used to build the content type, and the related **Author** content type. It is intended for developers and content modelers who want to implement or import this prebuilt model for a website blog landing experience.

## Blog Landing Page

The “Blog Landing Page” is a web page that showcases blog posts, including the entire content, author details, release date, related posts, and links to other blog-related content. It serves as the entry point for visitors to access blogs on a website, typically displaying a blog and its author information, along with related posts organized chronologically.

Let’s dive deep into how the “Blog Landing Page” content model will help you create the "Blog Landing Page" for your website.

## Analyzing Requirements for the Blog Landing Page

The “Blog Landing Page” content model includes four main sections:

- The “Blog” hero banner
- The “Blog Content” section including the release date and the Author name
- The “Related Post” section displaying the Other Blog References
- The “Social Sharing” section with links to most-used social media apps

Here’s how your “Blog Landing Page" will look like on your website

## Identifying Content Model

Let's identify the fields that build up your “Blog Landing Page” content type that you see in the above step

## Developing Content Type

The “Blog Landing Page” content model contains the following set of fields. Let’s look in detail at what content types and fields were used to create the model.

**Blog Landing Page **Content Type:

**Title**: This is where you'll provide your blog page a name. The [Title](/docs/developers/create-content-types/title) field defines the title of the blog landing page entry.

**URL**: Here goes the web URL of your blog page. When clicked on, this link provided in the [URL](https://www.contentstack.com/docs/developers/create-content-types/url?_gl=1*571vre*_gcl_au*NzQ1MjIxNjMzLjE2OTc2OTYwMTQ.) field takes users straight to your blog page.

**Author**: For this field, you will find the [Reference](/docs/developers/create-content-types/reference) field that refers to the **Author **content type (explained in the section below) from which it will fetch all the author details.

**Date**: The [Date](/docs/developers/create-content-types/date) field will allow you to select and display the publishing date of the blog.

**Featured Image**: For displaying the featured image, you will see the [File](/docs/developers/create-content-types/file/) field which will let you select the cover image related to the blog and add it to the entry.

**Body**: For the body, you will find a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/) field that should be able to hold the content of your blog which can even include media files in between.

**Related Post**: For this field, you will find the [Reference](/docs/developers/create-content-types/reference#self-referencing) field that refers to the **Blog Landing Page** content type from where you can fetch and display other blogs.

**Is Archived?**: This field will help you set whether a blog post is archived (or not). For this case, a [Boolean](/docs/developers/create-content-types/boolean/) field should be helpful.

**Comments**: Comments is a [Group](/docs/developers/create-content-types/group/) field that records the reader comments for your blog. It holds the following fields:

- **Leave A Reply:** Here you will find a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field that will record the feedback or request from the user.
- **Call To Action**: The [Link](/docs/developers/create-content-types/link/) field will store the button name as a title and you need to provide the link that will submit the user feedback.

**Social Share**: Social Share is [Global](/docs/developers/create-content-types/global/) field that has a [Group](/docs/developers/create-content-types/group/) field named **Social Media Share** consisting of the following set of fields:

- **Title:** You will find the [Title](/docs/developers/create-content-types/title) field that defines the group title for the social media share.
- **Icon**: Here you will see the [File](/docs/developers/create-content-types/file/) field where you get to upload or choose (from Assets) the social media icon.
- **Url**: The [Link](/docs/developers/create-content-types/link/) field here will add a social media app name as a title, say “Twitter,” “Facebook,” “Instagram,” and so on and their respective links for redirection.

**SEO**: SEO is the [Global](/docs/developers/create-content-types/global/) field which covers the following set of fields:

- **Meta Title**: For the Meta Title field, you will see a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the meta title of your entry.
- **Meta Description**: A [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field will be suitable for adding the meta description of your entry as it lets you add large chunks of content easily.
- **Meta Keywords**: Here you will see a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that lets you add the meta keywords of your entry.
- **Enable Search Indexing**: With a [Boolean](/docs/developers/create-content-types/boolean/) field here, you can enable or disable the search indexing for your page.

**Author** Content Type:

- **Full Name**: The [Title](/docs/developers/create-content-types/title) field will store the full name of the author.
- **Picture**: For the Author picture, you will find the [File](/docs/developers/create-content-types/file/) field that allows you to choose the author photograph.
- **Bio**: For the Author bio, you will see the [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the short description about the author.

This completes the creation of your “Blog Landing Page” content model.

**Additional Resource:**

- To import the content model within your stack, refer to the [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) documentation.
- To import the prebuilt Content Model via the Marketplace, refer to the [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model) document.

## Common questions

### What are the main sections included in the “Blog Landing Page” content model?
The “Blog Landing Page” content model includes four main sections: The “Blog” hero banner, The “Blog Content” section including the release date and the Author name, The “Related Post” section displaying the Other Blog References, and The “Social Sharing” section with links to most-used social media apps.

### Which field type is used to store the blog body content?
For the body, you will find a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/) field that should be able to hold the content of your blog which can even include media files in between.

### How are related posts represented in this model?
**Related Post** uses the [Reference](/docs/developers/create-content-types/reference#self-referencing) field that refers to the **Blog Landing Page** content type from where you can fetch and display other blogs.

### Where can I find instructions to import this prebuilt content model?
Refer to **Additional Resource:** links: [Import Prebuilt Content Models](/docs/developers/create-content-types/import-prebuilt-content-models) and [How to Import a Content Model via Marketplace](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model).