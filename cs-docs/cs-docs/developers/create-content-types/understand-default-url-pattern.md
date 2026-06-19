---
title: "[Headless CMS | Default URL Pattern] - Understand Default URL Pattern"
description: Understand Default URL Pattern
url: https://www.contentstack.com/docs/headless-cms/understand-default-url-pattern
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: unknown
---

# [Headless CMS | Default URL Pattern] - Understand Default URL Pattern

This page explains how Contentstack URL patterns work for generating consistent, predictable URLs for entries in a content type. It is intended for developers and content modelers configuring content types, and should be used when you want to standardize URL structures across your content.

## Understand Default URL Pattern

In Contentstack, a URL defines where your content appears on your website. A well-structured URL improves navigation, consistency, and SEO.
- **Base URL:** The primary domain of your website (for example, `https://www.yourdomain.com`)
- **Relative URL:** The path appended to the base URL that directs users to a specific page (for example, `/blog/seo/my-first-page`)

The relative URL can include:
- **Prefix:** Represents the category or structure (for example, `/blog/seo`)
- **Entry-specific segment:** The unique identifier of an entry (for example, `/my-first-page`)

## How URL Patterns Work

The URL pattern feature allows you to define a consistent structure for generating URLs across all entries of a content type.

You can configure patterns using predefined values or dynamic tokens that reference entry data. This helps maintain consistency and ensures predictable URL structures across your content.

For example, you can define a pattern such as:

```
/blog/:locale/:field[title]
```

In this pattern:
- `:locale` represents the entry’s language or region
- `:field[title]` pulls the value from the title field

## Automatic URL Generation

When you create an entry, Contentstack generates a URL based on the configured pattern.

For example:
- **Entry title**: *Best Running Shoes*
- **Pattern**: `/products/:field[title]`
- **Generated URL**: `/products/best-running-shoes`

**Note:** If you edit values used in the pattern, the URL may update based on your configuration and permissions.

## Editing and Customization

Although URLs are generated automatically, you can modify them if required (based on your configuration and permissions).

This allows you to:
- Improve readability and SEO
- Maintain consistency with your website structure
- Adjust URLs for specific use cases

To configure URL patterns, refer to the [URL pattern configuration](/docs/developers/create-content-types/use-default-url-pattern) documentation.

## Common questions

### What is the difference between a base URL and a relative URL?
A base URL is the primary domain of your website (for example, `https://www.yourdomain.com`), while a relative URL is the path appended to the base URL (for example, `/blog/seo/my-first-page`).

### What do `:locale` and `:field[title]` mean in a URL pattern?
`:locale` represents the entry’s language or region, and `:field[title]` pulls the value from the title field.

### Will the generated URL change if I edit the entry title?
**Note:** If you edit values used in the pattern, the URL may update based on your configuration and permissions.

### Can I manually edit URLs after they are generated?
Although URLs are generated automatically, you can modify them if required (based on your configuration and permissions).