---
title: "Understand Default URL Pattern"
description: "Learn how default URL patterns work in Contentstack and how to generate consistent, structured URLs for your content types."
url: /headless-cms/understand-default-url-pattern
uid: blt6335677b828cf52a
---

# Understand Default URL Pattern

## Understand Default URL Pattern

In Contentstack, a URL defines where your content appears on your website. A well-structured URL improves navigation, consistency, and SEO.

-   **Base URL:** The primary domain of your website (for example, https://www.yourdomain.com)
-   **Relative URL:** The path appended to the base URL that directs users to a specific page (for example, /blog/seo/my-first-page)

The relative URL can include:

-   **Prefix:** Represents the category or structure (for example, /blog/seo)
-   **Entry-specific segment:** The unique identifier of an entry (for example, /my-first-page)

## How URL Patterns Work

The URL pattern feature allows you to define a consistent structure for generating URLs across all entries of a content type.

You can configure patterns using predefined values or dynamic tokens that reference entry data. This helps maintain consistency and ensures predictable URL structures across your content.

For example, you can define a pattern such as:

```
/blog/:locale/:field[title]
```

In this pattern:

-   :locale represents the entry’s language or region
-   :field\[title\] pulls the value from the title field

## Automatic URL Generation

When you create an entry, Contentstack generates a URL based on the configured pattern.

For example:

-   **Entry title**: _Best Running Shoes_
-   **Pattern**: /products/:field\[title\]
-   **Generated URL**: /products/best-running-shoes

**Note:** If you edit values used in the pattern, the URL may update based on your configuration and permissions.

## Editing and Customization

Although URLs are generated automatically, you can modify them if required (based on your configuration and permissions).

This allows you to:

-   Improve readability and SEO
-   Maintain consistency with your website structure
-   Adjust URLs for specific use cases

To configure URL patterns, refer to the [URL pattern configuration](/docs/headless-cms/use-default-url-pattern) documentation.
