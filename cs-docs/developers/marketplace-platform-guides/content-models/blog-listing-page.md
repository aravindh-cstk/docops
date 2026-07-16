---
title: "[Content Models] - Blog Listing Page"
description: Blog Listing Page content model schema, prerequisites, and field definitions for Contentstack Marketplace platform guides.
url: https://www.contentstack.com/docs/marketplace-platform-guides/content-models/blog-listing-page
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
The Blog Listing Page Content Model contains four [Content Types](../../create-content-types/about-content-types.md) - **Blog Listing Page**, **Blog Landing Page**, **Hero Banner**, **Author**, and two [Global Fields](../../create-content-types/global.md) - **SEO**, **Social Share**.

### Schema for Blog Listing Page Content Type
- **Title**: The [Title](../../create-content-types/title.md) field displays the title of the Blog Listing Page entry. This is a mandatory field and must be unique.
- **URL**: This [URL](../../create-content-types/url.md) field displays the URL of the Blog Listing page. This is a mandatory field and must be unique.
- **Search**: This [Group](../../create-content-types/group.md) field includes the following fields:**Placeholder Text**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the placeholder text for the search box.
- **Search Button**: This is a [Link](../../create-content-types/link.md) field to add the redirect link for search.
- **Page Components**: This [Modular Block](../../create-content-types/modular-blocks.md) field includes the following components in the webpage:**Hero Banner**: This [Modular Block](../../create-content-types/modular-blocks.md) field has the following component:**Hero Banner**: This is a [Reference](../../create-content-types/reference.md) field that refers to the [Hero Banner](/docs/marketplace-platform-guides/content-models/hero-banner#schema-for-hero-banner-content-type) content type.
- **From Blog**: This [Modular Block](../../create-content-types/modular-blocks.md) field includes the following components of a blog in the list:**Title H2**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field where you can add the title of the reference blog. The title is displayed as a level-two heading.
- **Featured Blogs**: This is a [Reference](../../create-content-types/reference.md) field that refers to the [Blog Landing Page](/docs/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) content type.**Note:** You can find the [Author](/docs/marketplace-platform-guides/content-models/blog-landing-page#schema-for-author-content-type) content type and the [Social Share](/docs/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) [Global](../../create-content-types/global.md) field in the [Blog Landing Page](/docs/marketplace-platform-guides/content-models/blog-landing-page) content model.
- **View Articles**: This is a [Link](../../create-content-types/link.md) field to add links to any related articles.
- **Widget**: This [Modular Block](../../create-content-types/modular-blocks.md) field includes the following components of the widget section:**Title H2**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the title of the blog in the list. The title is displayed as a level-two heading.
- **Type**: This is a [Select](../../create-content-types/select.md) field where you can add the widget type. The widget types are as follows:Blog Archive
- Related Posts
- **Related Blogs**: This is a [Reference](../../create-content-types/reference.md) field that refers to the [Blog Landing Page](/docs/marketplace-platform-guides/content-models/blog-landing-page#schema-for-blog-landing-page-content-type) content type.
- **SEO**: This [Global](../../create-content-types/global.md) field includes the following SEO components:**Meta Title**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta title of your Blog Listing page. Ideally, this should be between 120 to 160 characters.
- **Meta Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the meta description of your Blog Listing page.
- **Meta Keywords**: This is a [Single Line Textbox](../../create-content-types/single-line-textbox.md) field to add the meta keywords of your Blog Listing page.
- **Enable Search Indexing**: You can enable or disable the searches in this [Boolean](../../create-content-types/boolean.md) field.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)). Refer the [Blog Listing Page Content Modeling](../../content-modeling/blog-listing-page.md) documentation to understand how to model the "Blog Listing" page.

Here’s how your Blog Listing Page will look after you publish the entry:

## Common questions

### Who can set up the Blog Listing Page content model?
Access to the Contentstack Organization/Stack as the Owner/Admin is required.

### What content types and global fields are included in the Blog Listing Page Content Model?
It contains four Content Types - **Blog Listing Page**, **Blog Landing Page**, **Hero Banner**, **Author**, and two Global Fields - **SEO**, **Social Share**.

### Can I import the prebuilt Content Models instead of creating them manually?
Yes. You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)).

### Where can I learn how to model the "Blog Listing" page?
Refer the [Blog Listing Page Content Modeling](../../content-modeling/blog-listing-page.md) documentation to understand how to model the "Blog Listing" page.