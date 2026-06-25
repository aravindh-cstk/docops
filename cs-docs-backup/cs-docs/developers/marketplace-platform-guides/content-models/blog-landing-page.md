---
title: "[Content Models] - Blog Landing Page"
description: Blog Landing Page content model schema, including Blog Landing Page and Author content types plus SEO and Social Share global fields.
url: https://www.contentstack.com/docs/marketplace-platform-guides/content-models/blog-landing-page
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

The Blog Landing Page Content Model contains the [Content Types](../../create-content-types/about-content-types.md) - **Blog Landing Page** and **Author**; and [Global Fields](../../create-content-types/global.md) - **SEO** and **Social Share**.

### Schema for Blog Landing Page Content Type
- **Title**: This is a [Title](../../create-content-types/title.md) field that defines the title of the Blog Landing Page entry. This is a mandatory field and must be unique.
- **URL**: This is a [URL](../../create-content-types/url.md) field that adds the redirection URL of the Blog Landing Page. This is a mandatory field and must be unique.
- **Author**: This is a [Reference](../../create-content-types/reference.md) field that refers to the [Author](#schema-for-author-content-type) content type.
- **Date**: This is a [Date](../../create-content-types/date.md) field that stores the publishing date of the blog.
- **Featured Image**: This is a [File](../../create-content-types/file.md) field that allows you to select the image related to the blog and add it to the Blog Landing Page.
- **Body**: This is a [JSON Rich Text Editor](../../json-rich-text-editor.md) field that holds the content of the blog.
- **Related Post**: This is a [Reference](../../create-content-types/reference.md#self-referencing) field that refers to the [Blog Landing Page](#schema-for-blog-landing-page-content-type) content type. You can refer to multiple blog articles.
- **Is Archived?**: This is a [Boolean](../../create-content-types/boolean.md) field which describes whether the article or blog is archived or not.
- **Comments**: This is a [Group](../../create-content-types/group.md) field that holds the following information:**Leave A Reply**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field that stores the reply or request of the user.
- **Call To Action**: This is a [Link](../../create-content-types/link.md) field that stores button name as a title and URL for reply/comment submission.
- **Social Share**: This is a [Global](../../create-content-types/global.md) field that includes the following components:**Social Media Share**: This is a [Group](../../create-content-types/group.md) field that holds the following fields:**Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field that defines the group title for the social media share.
- **Icon**: This is a [File](../../create-content-types/file.md) field that allows you to choose the social media icon and add it to the blog. Ideally, the image file for the icon should be less than 100KB in a PNG format.
- **URL**: This is a [Link](../../create-content-types/link.md) field that adds a social media name as a title and URL for redirection.
- **SEO**: This is the [Global](../../create-content-types/global.md) field which includes the following components:**Meta Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta title of your Blog Landing Page. This should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the meta description of your Blog Landing Page.
- **Meta Keywords**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta keywords of your Blog Landing Page.
- **Enable Search Indexing**: You can enable or disable the search indexing in this [Boolean](../../create-content-types/boolean.md) field.

### Schema for Author Content Type
- **Full Name**: This is a [Title](../../create-content-types/title.md) field that stores the full name of the author. This is a mandatory field and must be unique.
- **Picture**: This is a [File](../../create-content-types/file.md) field that allows you to choose the author's photograph. Ideally, the image file for the picture should be less than 100KB in a PNG format.
- **Bio**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add a short description about the author.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)). Refer the [Blog Landing Page Content Modeling](../../content-modeling/blog-landing-page.md) documentation to understand how to model the "Blog Landing" page.

After publishing the entry, you can view the Blog Landing Page on your website.

## Common questions

### What content types and global fields are included in the Blog Landing Page Content Model?
The Blog Landing Page Content Model contains the **Blog Landing Page** and **Author** content types, and the **SEO** and **Social Share** global fields.

### Can the Blog Landing Page reference other blog articles?
Yes. The **Related Post** field is a reference field that refers to the **Blog Landing Page** content type, and you can refer to multiple blog articles.

### How can I import the prebuilt Content Models?
You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)).

### What do I need before using this content model?
You need a [Contentstack account](https://www.contentstack.com/login/) and access to the Contentstack Organization/Stack as the Owner/Admin or Stack Developer.