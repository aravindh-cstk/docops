---
title: "[Headless CMS | Default URL Pattern] - About URLs"
description: About URLs and how to set and format URLs in Contentstack, including URL patterns and best practices.
url: https://www.contentstack.com/docs/developers/create-content-types/about-urls
product: Contentstack
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: unknown
---

# [Headless CMS | Default URL Pattern] - About URLs

This page explains what URLs are, how URL fields can be set in Contentstack (including manual entry and URL patterns), and provides URL format guidance and best practices. It is intended for developers and content managers who create entries and configure URL behavior, and should be used when defining or standardizing URL structures for content delivery.

## About URLs

A URL (Uniform Resource Locator) serves as the address of your website and its web pages. It helps structure content and allows users and systems to access resources across platforms such as websites, APIs, and applications.

URLs play a key role in organizing content and ensuring consistent delivery across channels.

## Setting URLs in Contentstack

When [creating an entry](/docs/content-managers/working-with-entries/create-an-entry) in Contentstack, you can define the URL in the following ways:
- Manually enter a structured URL
- Use [URL patterns](/docs/developers/create-content-types/use-default-url-pattern) to automatically generate URLs based on predefined rules and selected values

URL patterns let you construct URLs using values such as fields, locale, or taxonomy. This helps maintain consistency and reduces manual effort.

**Additional Resource:** For more details on configuring URL patterns, refer to the [URL](/docs/developers/create-content-types/url) field documentation.

**Note:** URL field properties cannot be modified for [Single](/docs/developers/create-content-types/single-vs-multiple-content-types#single) content types because they contain only one entry and do not require dynamic URL generation.

## URL Format and Syntax

A URL follows a standard structure that defines how a resource is accessed:

```
protocol://domain-name/path/resource
```

- **Protocol:** Defines the communication method (for example, http:// or https://)
- **Domain Name:** The name of the website (for example, `example.com`)
- **Path:** The directory or category of the webpage (for example, `/blog`)
- **Resource:** The specific page or file (for example, `/about-us`)

**Example:**

```
https://www.example.com/products/shoes
```

- **Protocol:** https:// (secure connection)
- **Domain Name:** `www.example.com`
- **Path:** `/products` (category)
- **Resource:** `/shoes` (specific product page)

### Best Practices for URLs

Follow these best practices to create SEO-friendly URLs and improve user experience:
- **Use descriptive URLs:** Keep them short, meaningful, and easy to read (for example, `/services/web-design` instead of `/p123`)
- **Use consistent separators:** Choose a word separator (hyphen (`-`), underscore (`_`), or plus (`+`)) and use it consistently across URLs
- **Maintain a consistent structure:** Helps with navigation and content organization
- **Use lowercase URLs:** Improves consistency and avoids issues on case-sensitive systems
- **Avoid frequent changes:** Changing URLs can impact SEO and user experience

URL configuration in Contentstack helps you create consistent and structured URLs. By combining manual input with pattern-based generation, you can reduce errors and improve content delivery across channels.

## Common questions

### What are the ways to define a URL when creating an entry in Contentstack?
You can manually enter a structured URL or use URL patterns to automatically generate URLs based on predefined rules and selected values.

### What values can URL patterns use to construct URLs?
URL patterns let you construct URLs using values such as fields, locale, or taxonomy.

### Why can’t URL field properties be modified for Single content types?
URL field properties cannot be modified for Single content types because they contain only one entry and do not require dynamic URL generation.

### What is the standard structure of a URL?
A URL follows the structure `protocol://domain-name/path/resource`.