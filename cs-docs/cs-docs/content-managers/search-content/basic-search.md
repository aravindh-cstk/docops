---
title: "[Search Content] - Basic Search"
description: Basic Search in Contentstack for locating entries and assets within a stack.
url: https://www.contentstack.com/docs/headless-cms/basic-search
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Search Content] - Basic Search

This page explains how to use Basic Search in Contentstack to quickly find entries and assets in your stack. It is intended for content managers and anyone managing content who needs to locate items efficiently while working in Entries or Assets.

## Basic Search

Basic Search in Contentstack allows you to quickly locate [entries](../author-content/about-entries.md) and [assets](../author-content/about-assets.md) within your stack by scanning across various fields. This feature is designed to help you find relevant content with minimal effort, whether you're looking for a specific entry or asset.

For example, if your stack contains numerous content types with several entries and assets, and you're searching for a specific entry like "Smartphone," you no longer need to browse through multiple [content types](../../developers/create-content-types/about-content-types.md) to locate it. Simply enter your search term in the search bar, and the Search will quickly surface the desired entry, streamlining your workflow and improving efficiency.

To access the search bar, navigate to your [stack](../../developers/set-up-stack/about-stack.md) and locate the search bar within **Entries** or **Assets**.

You will notice a dropdown before the search bar, with the options **All**, **Title**, **URL**, and **Specific field**. These options allow you to define the scope of search and help you find exactly what you are looking for.

Let’s look at these options in detail:
- **All (Search within all fields)**: This default option searches for a keyword across all fields of all entries and assets.
- **Title (Search within title only)**: This option retrieves entries or assets containing the searched term (e.g., “Ramification”) in the title field.
- **URL (Search within url only)**: This option restricts the search to the URL field of your entries or assets.
- **Specific Field (Search within a specific field)**: This option allows you to search for entries where a specific field of a specific content type contains the given keyword.Select the **Specific field** option to open up a modal enlisting all the content types and their respective fields. You can choose any field from any content type.

Your search results are filtered depending on the field selected.

**Note:** The Specific field search is exclusive to entries.

These filters enable you to refine your search results quickly and easily, ensuring you find precisely what you need with greater accuracy.

**Additional Resources:** For more advanced filtering options, refer to our [Use Filters](./use-filters.md) document to further enhance your search results.

## Common questions

### Where can I access Basic Search in Contentstack?
You can access the search bar by navigating to your stack and locating the search bar within **Entries** or **Assets**.

### What does the **All** option search?
**All (Search within all fields)** searches for a keyword across all fields of all entries and assets.

### Can I search within a specific field?
Yes. Use **Specific Field (Search within a specific field)** to search for entries where a specific field of a specific content type contains the given keyword.

### Is **Specific field** search available for assets?
No. **Note:** The Specific field search is exclusive to entries.