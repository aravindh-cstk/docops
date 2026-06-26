---
title: "[JavaScript Delivery] - About JavaScript Utils Library"
description: About the JavaScript Utils library and its features for the JavaScript Delivery SDK.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/about-javascript-utils-library
product: Contentstack
doc_type: reference
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [JavaScript Delivery] - About JavaScript Utils Library

This page explains what the Contentstack JavaScript Utils library is, what it includes, and when to use it alongside the JavaScript Delivery SDK. It is intended for developers integrating Contentstack content into JavaScript applications and deciding whether they need the Utils SDK separately.

## About JavaScript Utils Library

Contentstack provides the JavaScript Utils library that contains all the utilities for the [JavaScript Delivery SDK](https://github.com/contentstack/contentstack-javascript).

Features included:
- **Embedded Object**: Allows you to fetch embedded [entries](../../../../content-managers/author-content/about-entries.md)/[assets](../../../../content-managers/author-content/about-assets.md) (placed inside the “[Rich Text Editor](../../../create-content-types/rich-text-editor.md)” (RTE) field) and display them on your frontend application. To learn how to embed entries/assets in the RTE field, refer to the [Embed Entry](../../../create-content-types/rich-text-editor.md#embed-entries-in-the-rte) and [Embed Asset](../../../create-content-types/rich-text-editor.md#embed-assets-in-the-rte) documentation.

**Note**:
- The Contentstack [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript) supports [Node.js](https://nodejs.org/en) version 22 or above.
- The Contentstack Delivery SDK incorporates the features of the Utils SDK, eliminating the need for a separate installation of the Utils SDK

To use this Utils SDK in your application, follow the steps specified in the [Get Started with JavaScript Utils library](./get-started-with-javascript-utils-library.md) guide

## Common questions

### Do I need to install the JavaScript Utils SDK separately?
The Contentstack Delivery SDK incorporates the features of the Utils SDK, eliminating the need for a separate installation of the Utils SDK.

### What Node.js versions are supported by the JavaScript Utils SDK?
The Contentstack JavaScript Utils SDK supports Node.js version 22 or above.

### What does the Embedded Object feature do?
It allows you to fetch embedded entries/assets placed inside the Rich Text Editor (RTE) field and display them on your frontend application.

### Where do I start to use the JavaScript Utils SDK?
Follow the steps specified in the Get Started with JavaScript Utils library guide: /docs/developers/javascript-browser/get-started-with-javascript-utils-library/