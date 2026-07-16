---
title: "[Search Content] - Partial Search"
description: Contentstack partial keyword search behavior, including prefix search and suffix/infix matching.
url: https://www.contentstack.com/docs/headless-cms/partial-search
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Search Content] - Partial Search

This page explains how partial keyword search works in Contentstack, including default prefix search and optional suffix/infix matching, and is intended for users who search for entries or assets in the app and want faster, more flexible results.

## Partial Search

Contentstack allows you to perform partial keyword search, so you can find relevant entries faster. Partial keyword search means searching by just a part of the keyword.

You can perform a simple partial keyword search by typing in the start of the keyword to get relevant results. For example, use `tech` to get entries that contain the terms "technology" or "technical". This is known as **prefix (or start-with) partial search**, which can be performed directly by entering the start of the keyword, without having to add any special character. This is supported by default in the app search.

**Note**: The search function skips common stop words such as "and," "the," "is," and "in" to prioritize meaningful terms and deliver more relevant results.

The other type of partial keyword search is **suffix **or **infix matching **that allows you to search by the middle or the end of the keyword. To perform this kind of search, you will have to prefix * to your partial keyword. For example, use `*chno` or `*logy` to look for entries containing "technology".

For proficient search results, you can:
- Use double quotes for exact match searching. For instance, searching `"technology"` will retrieve all entries or assets where the term "technology" is used.![Partial Search_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte803f873d441159c/684030e7aa31f70ee61b2f50/3._Partial_Search_Exact_Term.png)
- Use prefix keywords to search for entries containing the specified partial keyword. For example, searching `tec` will retrieve all entries or assets where the term `tec` is present.
- Use an asterisk (*) to search by the middle or end of the word. For example, searching `*olog` will retrieve all entries or assets where the term `olog` is present.

**Note**: The search feature supports prefix search by default, allowing you to find entries or assets based on the beginning of words or phrases.

The partial search feature enhances the search experience within the application, providing you with efficient and customizable search capabilities. By leveraging partial keywords and advanced search options, you can quickly locate relevant entries and assets, increasing productivity and streamlining workflow processes.

## Common questions

### Does Contentstack support partial search without special characters?
Yes. **prefix (or start-with) partial search** is supported by default in the app search and can be performed by entering the start of the keyword.

### How do I search by the middle or end of a word?
Use an asterisk (*) before your partial keyword (for example, `*chno`, `*logy`, or `*olog`) for **suffix** or **infix matching**.

### Why are some words ignored in search results?
The search function skips common stop words such as "and," "the," "is," and "in" to prioritize meaningful terms and deliver more relevant results.

### How do I search for an exact match?
Use double quotes for exact match searching (for example, `"technology"`).