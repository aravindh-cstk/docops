---
title: "[Json Rich Text Editor] - Limitations of Embedded Entries and Assets"
description: Limitations of embedded entries and assets in a JSON Rich Text Editor (JSON RTE) field.
url: https://www.contentstack.com/docs/headless-cms/limitations-of-embedded-entries-and-assets
product: Json Rich Text Editor
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Json Rich Text Editor] - Limitations of Embedded Entries and Assets

This page lists the limitations and default behaviors for embedded entries and assets in a JSON Rich Text Editor (JSON RTE) field. It is intended for developers configuring or using JSON RTE fields and should be referenced when designing content models that rely on embedded references.

## Limitations of Embedded Entries and Assets

- A maximum of **100** entries can be embedded in a [JSON RTE](./about-json-rich-text-editor.md) field.
- By default, a maximum of **15** content types can be selected for a JSON RTE as a reference.
- Assets are by default embedded within a JSON RTE field.
- Any references within the embedded entry will not be resolved.

## Common questions

**Q: What happens if I try to embed more than 100 entries in a JSON RTE field?**  
A: A maximum of **100** entries can be embedded in a [JSON RTE](./about-json-rich-text-editor.md) field.

**Q: How many content types can be selected for a JSON RTE as a reference by default?**  
A: By default, a maximum of **15** content types can be selected for a JSON RTE as a reference.

**Q: Are assets embedded or referenced by default in a JSON RTE field?**  
A: Assets are by default embedded within a JSON RTE field.

**Q: Will references inside an embedded entry be resolved automatically?**  
A: Any references within the embedded entry will not be resolved.