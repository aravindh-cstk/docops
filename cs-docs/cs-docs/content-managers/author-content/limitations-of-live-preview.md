---
title: "[Author Content] - Limitations of Live Preview"
description: Limitations and compatibility constraints for the Live Preview feature.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-live-preview
product: Author Content
doc_type: guide
audience:
  - content-managers
  - authors
version: v1
last_updated: 2026-03-25
---

# [Author Content] - Limitations of Live Preview

This page lists the known limitations and compatibility constraints of the Live Preview feature. It is intended for content managers and authors who need to understand when Live Preview may not work and what conditions must be met before using it.

## Limitations of Live Preview

- The Live Preview feature is not compatible with websites that use a third-party website builder or CMS to generate HTML.
- The Live Preview feature does not support native mobile applications, as these do not rely on standard HTML rendering mechanisms.
- You cannot preview entry content if your user role does not have the permissions required to access an entry, specific environment and language in which the entry has been published.
- To avoid Cross-Origin Resource Sharing (CORS) errors, confirm that the website you wish to preview supports iFrame embedding. Adjust your website's settings as needed to enable this functionality.

## Common questions

### Why can’t I use Live Preview with my website builder or CMS?
The Live Preview feature is not compatible with websites that use a third-party website builder or CMS to generate HTML.

### Why doesn’t Live Preview work for my mobile app?
The Live Preview feature does not support native mobile applications, as these do not rely on standard HTML rendering mechanisms.

### What permissions do I need to preview an entry?
You cannot preview entry content if your user role does not have the permissions required to access an entry, specific environment and language in which the entry has been published.

### How do I avoid CORS errors when using Live Preview?
To avoid Cross-Origin Resource Sharing (CORS) errors, confirm that the website you wish to preview supports iFrame embedding. Adjust your website's settings as needed to enable this functionality.