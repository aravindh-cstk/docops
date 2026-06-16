---
title: "[Content Models] - Blog Listing Page"
description: Blog Listing Page content model schema, prerequisites, and field definitions for Contentstack Marketplace platform guides.
url: https://www.contentstack.com/docs/developers/marketplace-platform-guides/content-models/blog-listing-page
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Content Models] - Blog Listing Page

This page describes the Blog Listing Page content model in Contentstack, including prerequisites and the schema/fields used to build a blog listing experience. It is intended for developers and stack administrators who need to create, import, or understand the structure of the Blog Listing Page content type and its related content types and global fields.

## Blog Listing Page

The blog listing page on your website showcases a prominent hero banner, user-friendly widgets, etc., all accessible via the navigation pane. The Blog Listing Page Content Model includes fields and structures designed to capture and organize vital information for the diverse blogs within your website.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Blog Listing Page Content Model
The Blog Listing Page Content Model contains four [Content Types](/docs/developers/create-content-types/about-content-types/) - **Blog Listing Page**, **Blog Landing Page**, **Hero Banner**, **Author**, and two [Global Fields](/docs/developers/create-content-types/global/) - **SEO**, **Social Share**.

### Schema for Blog Listing Page Content Type
- **Title**: The [Title](/docs/developers/create-content-types/title/) field displays the title of the Blog Listing Page entry. This is a mandatory field and must be unique.
- **URL**: This [URL](/docs/developers/create-content-types/url/) field displays the URL of the Blog Listing page. This is a mandatory field and must be unique.
- **Search**: This [Group](https://www.contentstack.com/docs/developers/create-content-types/group/) field includes the following fields:**Placeholder Text**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the placeholder text for the search box.
- **Search Button**: This is a [Link](/docs/developers/create-content-types/link/) field to add the redirect link for search.
- **Page Components**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field includes the following components in the webpage:**Hero Banner**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field has the following component:**Hero Banner**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Hero Banner](/docs/developers/marketplace-platform-guides/content-models/hero-banner#schema-for-hero-banner-content-type) content type.
- **From Blog**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field includes the following components of a blog in the list:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field where you can add the title of the reference blog. The title is displayed as a level-two heading.
- **Featured Blogs**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Blog Landing Page](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) content type.**Note:** You can find the [Author](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-author-content-type) content type and the [Social Share](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) [Global](/docs/developers/create-content-types/global) field in the [Blog Landing Page](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page) content model.
- **View Articles**: This is a [Link](/docs/developers/create-content-types/link/) field to add links to any related articles.
- **Widget**: This [Modular Block](/docs/developers/create-content-types/modular-blocks/) field includes the following components of the widget section:**Title H2**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the title of the blog in the list. The title is displayed as a level-two heading.
- **Type**: This is a [Select](/docs/developers/create-content-types/select/) field where you can add the widget type. The widget types are as follows:Blog Archive
- Related Posts
- **Related Blogs**: This is a [Reference](/docs/developers/create-content-types/reference/) field that refers to the [Blog Landing Page](/docs/developers/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) content type.
- **SEO**: This [Global](/docs/developers/create-content-types/global/) field includes the following SEO components:**Meta Title**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox) field to add the meta title of your Blog Listing page. Ideally, this should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](/docs/developers/create-content-types/multi-line-textbox/) field to add the meta description of your Blog Listing page.
- **Meta Keywords**: This is a [Single Line Textbox](/docs/developers/create-content-types/single-line-textbox/) field to add the meta keywords of your Blog Listing page.
- **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](/docs/developers/create-content-types/boolean/) field.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)). Refer the [Blog Listing Page Content Modeling](/docs/developers/content-modeling/blog-listing-page/) documentation to understand how to model the "Blog Listing" page.

Here’s how your Blog Listing Page will look after you publish the entry:

## Common questions

### Who can set up the Blog Listing Page content model?
Access to the Contentstack Organization/Stack as the Owner/Admin is required.

### What content types and global fields are included in the Blog Listing Page Content Model?
It contains four Content Types - **Blog Listing Page**, **Blog Landing Page**, **Hero Banner**, **Author**, and two Global Fields - **SEO**, **Social Share**.

### Can I import the prebuilt Content Models instead of creating them manually?
Yes. You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](/docs/developers/marketplace-platform-guides/content-models/how-to-import-content-model)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](/docs/developers/create-content-types/import-prebuilt-content-models)).

### Where can I learn how to model the "Blog Listing" page?
Refer the [Blog Listing Page Content Modeling](/docs/developers/content-modeling/blog-listing-page/) documentation to understand how to model the "Blog Listing" page.