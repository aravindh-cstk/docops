---
title: "[JSON RTE] - Right-to-Left Content Writing within the JSON RTE"
description: Right-to-Left Content Writing within the JSON RTE
url: https://www.contentstack.com/docs/headless-cms/right-to-left-content-writing-within-the-json-rte
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - content-authors
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Right-to-Left Content Writing within the JSON RTE

This page explains how to write or add right-to-left (RTL) content in Contentstack’s JSON Rich Text Editor (JSON RTE). It is intended for developers and content authors working with RTL languages, and should be used when creating, localizing, or editing entries that require RTL script support.

Right-to-Left Content Writing within the JSON RTE

The [JSON Rich Text Editor](./about-json-rich-text-editor.md) supports writing or adding content from right to left (RTL), making content management and editing more efficient and effortless.

There are two ways in which you can leverage the RTL support within the JSON RTE.

## When Creating or Localizing Entries in RTL Languages

When creating entries for a stack that has its master language set to any RTL language such as Arabic, Hebrew, Persian, Urdu, etc., or when localizing an entry in any RTL, the cursor within the JSON RTE will seamlessly adapt and automatically move to the right. This allows you to write or add content from right to left with ease.

**Note**: Once you select a language that supports an entry's RTL script, it is not possible to switch back to the left-to-right direction within the same entry. This directionality remains in effect until you change the language of the entry or remove the language (along with the localized entry) from your stack.

## When Using Keyboard with RTL Scripts

If you have configured your system to support RTL languages for your keyboard, you can select the desired language, and the cursor within the JSON RTE will automatically move to the right. This enables you to write or add content from right-to-left within the JSON RTE.

**Note**:  Depending on your requirements, you can utilize this functionality to add content within the JSON RTE in both left-to-right (LTR) and right-to-left (RTL) languages. However, while entering content using RTL languages through keyboard input, switching back to the LTR format can only be achieved by removing the existing entry content and then selecting an LTR language. If not done so, your cursor will continue to remain on the right side.

Whether you utilize the entry or keyboard language methods, you can quickly write or add content from right-to-left within the JSON RTE. This enhancement improves the overall user experience and makes working with RTL languages more convenient.

## Common questions

### Can I switch back to left-to-right (LTR) after selecting an RTL language for an entry?
**Note**: Once you select a language that supports an entry's RTL script, it is not possible to switch back to the left-to-right direction within the same entry. This directionality remains in effect until you change the language of the entry or remove the language (along with the localized entry) from your stack.

### What are the two ways to use RTL support in the JSON RTE?
There are two ways in which you can leverage the RTL support within the JSON RTE: when creating or localizing entries in RTL languages, and when using keyboard with RTL scripts.

### How can I return to LTR when typing RTL via keyboard input?
While entering content using RTL languages through keyboard input, switching back to the LTR format can only be achieved by removing the existing entry content and then selecting an LTR language.

### Filename
json-rte-right-to-left-content-writing-within-the-json-rte.md