---
title: "[Search Content] - Limitations of Advanced Search"
description: Limitations and constraints for using Advanced Search in Search Content.
url: https://www.contentstack.com/docs/content-managers/search-content/limitations-of-advanced-search
product: Search Content
doc_type: reference
audience:
  - content-managers
  - developers
version: v1
last_updated: 2026-03-26
---

# [Search Content] - Limitations of Advanced Search

This page lists the limitations of Advanced Search for Search Content. It is intended for content managers and developers who build or run Advanced Search queries and need to understand constraints before saving or executing searches.

## Limitations of Advanced Search

- The maximum size of a search term (in bytes) is **32,766**
- The maximum number of search queries allowed at a time is **20**
- The allowed level of nesting in conditions is **1**
- The maximum number of search conditions that can be saved at a time is **500**
- You can only search for Custom Fields of type **text** through the [Advanced Search](/docs/content-managers/search-content/run-advanced-search).

## Common questions

### What happens if my search term exceeds the maximum size?

Your Advanced Search term must be within the maximum size of **32,766** bytes.

### How many queries can I run at once?

The maximum number of search queries allowed at a time is **20**.

### Can I nest conditions more than one level deep?

No. The allowed level of nesting in conditions is **1**.

### Which Custom Field types are searchable in Advanced Search?

You can only search for Custom Fields of type **text** through the Advanced Search.