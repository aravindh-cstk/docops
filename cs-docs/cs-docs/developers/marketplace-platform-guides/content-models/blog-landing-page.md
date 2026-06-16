---
title: "[Content Models] - Blog Landing Page"
description: Blog Landing Page content model schema, including Blog Landing Page and Author content types plus SEO and Social Share global fields.
url: https://www.contentstack.com/docs/developers/marketplace-platform-guides/content-models/blog-landing-page
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Content Models] - Blog Landing Page

This page describes the Blog Landing Page content model, including its purpose and the schema for the Blog Landing Page and Author content types (plus related global fields). It is intended for developers and stack administrators setting up or importing prebuilt content models for a blog section in Contentstack.

### Item 1

#### Article section

##### Heading

Blog Landing Page

##### Content

The Blog Landing Page is a web page designed to display the blog content to readers. It contains the entire blog post, author details, blog release date and time, and related posts.

The Blog Landing Page is the first page of a blog section on a website where visitors are directed to access blogs. It typically displays a blog and its author details, and a list of related blog posts, which are usually organized in chronological order, with the most recent being at the top. The purpose of the Blog Landing Page is to showcase the full article available on the blog section of a website. It usually includes links to other blog-related content, such as archives, categories, and tags.

The Blog Landing Page Content Model includes fields and structures designed to capture the essential information about the Blog Landing Page.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer

## Schema for Blog Landing Page Content Model

The Blog Landing Page Content Model contains the [Content Types](/docs/developers/create-content-types/about-content-types/) - **Blog Landing Page** and **Author**; and [Global Fields](/docs/developers/create-content-types/global/) - **SEO** and **Social Share**.

### Schema for Blog Landing Page Content Type
- **Title**: This is a [Title](/docs/developers/create-content-types/title) field that defines the title of the Blog Landing Page entry. This is a mandatory field and must be unique.
- **URL**: This is a [URL](/docs/developers/create-content-types/url/) field that adds the redirection URL of the Blog Landing Page. This is a mandatory field and must be unique.
- **Author**: This is a [Reference](/docs/developers/create-content-types/reference) field that refers to the [Author](#schema-for-author-content-type) content type.
- **Date**: This is a [Date](/docs/developers/create-content-types/date) field that stores the publishing date of the blog.
- **Featured Image**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to select the image related to the blog and add it to the Blog Landing Page.
- **Body**: This is a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/) field that holds the content of the blog.
- **Related Post**: This is a [Reference](/docs/developers/create-content-types/reference#self-referencing) field that refers to the [Blog Landing Page](#schema-for-blog-landing-page-content-type) content type. You can refer to multiple blog articles.
- **Is Archived?**: This is a [Boolean](/docs/developers/create-content-types/boolean/) field which describes whether the article or blog is archived or not.
- **Comments**: This is a [Group](/docs/developers/create-content-types/group/) field that holds the following information:**Leave A Reply**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field that stores the reply or request of the user.
- **Call To Action**: This is a [Link](/docs/developers/create-content-types/link/) field that stores button name as a title and URL for reply/comment submission.
- **Social Share**: This is a [Global](/docs/developers/create-content-types/global/) field that includes the following components:**Social Media Share**: This is a [Group](/docs/developers/create-content-types/group/) field that holds the following fields:**Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field that defines the group title for the social media share.
- **Icon**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the social media icon and add it to the blog. Ideally, the image file for the icon should be less than 100KB in a PNG format.
- **URL**: This is a [Link](/docs/developers/create-content-types/link/) field that adds a social media name as a title and URL for redirection.
- **SEO**: This is the [Global](/docs/developers/create-content-types/global/) field which includes the following components:**Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta title of your Blog Landing Page. This should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the meta description of your Blog Landing Page.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta keywords of your Blog Landing Page.
- **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](/docs/developers/create-content-types/boolean/) field.

### Schema for Author Content Type
- **Full Name**: This is a [Title](/docs/developers/create-content-types/title) field that stores the full name of the author. This is a mandatory field and must be unique.
- **Picture**: This is a [File](/docs/developers/create-content-types/file/) field that allows you to choose the author's photograph. Ideally, the image file for the picture should be less than 100KB in a PNG format.
- **Bio**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox) field to add a short description about the author.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)). Refer the [Blog Landing Page Content Modeling](/docs/developers/content-modeling/blog-landing-page/) documentation to understand how to model the "Blog Landing" page.

After publishing the entry, you can view the Blog Landing Page on your website.

## Common questions

### What content types and global fields are included in the Blog Landing Page Content Model?
The Blog Landing Page Content Model contains the **Blog Landing Page** and **Author** content types, and the **SEO** and **Social Share** global fields.

### Can the Blog Landing Page reference other blog articles?
Yes. The **Related Post** field is a reference field that refers to the **Blog Landing Page** content type, and you can refer to multiple blog articles.

### How can I import the prebuilt Content Models?
You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)).

### What do I need before using this content model?
You need a [Contentstack account](https://www.contentstack.com/login/) and access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer.