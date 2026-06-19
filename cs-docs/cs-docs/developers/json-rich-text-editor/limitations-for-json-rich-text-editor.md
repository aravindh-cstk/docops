---
title: "[Json Rich Text Editor] - Limitations for JSON Rich Text Editor"
description: Limitations for JSON Rich Text Editor
url: https://www.contentstack.com/docs/headless-cms/limitations-for-json-rich-text-editor
product: Json Rich Text Editor
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Json Rich Text Editor] - Limitations for JSON Rich Text Editor

This page lists the limitations for the JSON Rich Text Editor. It is intended for developers and content modelers who need to understand constraints and migration requirements when configuring or migrating between HTML-based RTE and JSON RTE fields.

## Limitations for JSON Rich Text Editor

- A maximum of **100** entries can be embedded within the JSON RTE.
- A maximum of **15** content types can be selected as reference for a single JSON RTE.
- The maximum number of instances allowed for JSON RTEs marked as "Multiple" is **100**.
- During migration, both the HTML-based and JSON RTEs should be at the **same level** of **field ****depth** to migrate content successfully.
- If the JSON RTE is marked as "Multiple" and HTML RTE is of "Single" type, then you won't be able to migrate content.
- During migration, the HTML RTE and JSON RTE should allow embedded entries from the same set of referenced content types. If the **referenced content types** differ, you cannot migrate content between the RTEs.
- You can have multiple discussions within the JSON Rich Text Editor.
- There can be **one **active discussion associated with each selected content blocks, texts, and images within the JSON RTE.
- You can have a maximum of **500 characters** per JSON RTE comment.
- A maximum of **15 instances** of JSON RTE can be added per content type.

## Common questions

### What happens if the referenced content types differ between HTML RTE and JSON RTE during migration?
During migration, the HTML RTE and JSON RTE should allow embedded entries from the same set of referenced content types. If the **referenced content types** differ, you cannot migrate content between the RTEs.

### How many embedded entries can a JSON RTE contain?
A maximum of **100** entries can be embedded within the JSON RTE.

### How many JSON RTE fields can be added to a single content type?
A maximum of **15 instances** of JSON RTE can be added per content type.

### What is the maximum length for a JSON RTE comment?
You can have a maximum of **500 characters** per JSON RTE comment.