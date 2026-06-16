---
title: "[Set Up Your Project] - Single vs Multiple Content Types"
description: Guidance on choosing Single vs Multiple when creating content types (Webpage or Content Block).
url: https://www.contentstack.com/docs/developers/create-content-types/single-vs-multiple-content-types
product: Documentation
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Single vs Multiple Content Types

This page explains how to choose between **Single** and **Multiple** when creating a content type, with examples for webpages and content blocks. It is intended for developers setting up content models and should be used when deciding whether a content type should allow one entry or many entries.

Single vs Multiple Content Types

Irrespective of the type of [content type](/docs/developers/create-content-types/about-content-types) (“Webpage” or “Content Block”) you are creating, you should mark it as either **Single** or **Multiple**. “Single” lets you create a single [entry](/docs/content-managers/working-with-entries/about-entries), while “Multiple” aids in creating more than one entry of the same structure.

## Single

To create one-off pages with a unique content structure, you must mark the content type as **Single**. So, for instance, to create a homepage of a website, you will create a [Webpage](/docs/developers/create-content-types/webpage-vs-content-block#webpage) content type and mark it as **Single**. This is because a website only has one homepage. Other example pages would be:

- About Us
- Contact Us

To create a website header, you need to create a **Content Block** content type and mark it as **Single**. Other example pages of “Single Content Block” content type would be:

- Footer
- Navigation menu

## Multiple

To create multiple entries using the same content type, you need to mark that content type as **Multiple**. You can use this kind of content type to create streams of similar content. So, for instance, if you create a “News” content type, you can create multiple news entries for your site using the same content type.

To understand this concept clearly, let’s consider two examples:

- On a website, the “Home,” “About Us,” “Career,” and other such pages have different structures. Each of these pages follows a unique pattern for content. That is why such pages should be made using a content type marked as **Single**.
- However, if we consider a blog, several blog posts have the same structure: header, title, body, and footer. Hence, you will need to create several instances. For this, you need to set this “Blog” content type as **Multiple**.

## Common questions

### When should I mark a content type as **Single**?
Use **Single** when you need to create one-off pages or blocks with a unique content structure, such as a homepage, About Us page, or a website header.

### When should I mark a content type as **Multiple**?
Use **Multiple** when you need to create more than one entry of the same structure, such as multiple “News” entries or multiple blog posts.

### Can both “Webpage” and “Content Block” content types be marked as **Single** or **Multiple**?
Yes. Irrespective of whether you are creating a “Webpage” or “Content Block” content type, you should mark it as either **Single** or **Multiple**.

### What is the key difference between **Single** and **Multiple**?
“Single” lets you create a single [entry](/docs/content-managers/working-with-entries/about-entries), while “Multiple” aids in creating more than one entry of the same structure.