---
title: "[Global Field] - Limitations of Global Field"
description: Limitations of Global Field
url: https://www.contentstack.com/docs/developers/global-field/limitations-of-global-field
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-05-05
---

# [Global Field] - Limitations of Global Field

This page lists the limitations of Global fields in Contentstack. It is intended for developers and administrators who design content models and need to understand field, nesting, and role constraints when using Global fields.

## Limitations of Global Field

- You can add up to **5****00 fields** within a Global field, which aligns with the maximum field limit per content type.
- A single content type can include a maximum of **25 Global fields**.
- If a Global field is marked as **Multiple**, the total number of instances cannot exceed **100**.
- A Global field and a content type cannot share the same name.
- You can nest Global fields up to **5 levels**, including the parent field.
- Fields within nested Global fields are included in the total field count for the content type.
- Labels are not supported in Global fields.
- Field visibility rules cannot be applied to Global fields.
- Only users with the **Owner**, **Admin**, or **Developer** role can create Global fields.

## Common questions

### What is the maximum number of fields allowed within a Global field?
You can add up to **5****00 fields** within a Global field.

### How many Global fields can a single content type include?
A single content type can include a maximum of **25 Global fields**.

### How deep can Global fields be nested?
You can nest Global fields up to **5 levels**, including the parent field.

### Who can create Global fields?
Only users with the **Owner**, **Admin**, or **Developer** role can create Global fields.