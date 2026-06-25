---
title: "[AM2.0] - Field Types"
description: Field types available in Asset Management 2.0, including use cases and configurable properties.
url: https://www.contentstack.com/docs/assets/field-types
product: Asset Management
doc_type: reference
audience:
  - developers
  - administrators
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Field Types

This page explains the available field types in Asset Management 2.0, what each field type is used for, and why selecting the correct type matters for consistent metadata entry, validation, and display.

### Item 1

#### Article section

##### Heading

Field Types

##### Content

When you create a field in Asset Management, you must choose a field type. Each field type controls how data is entered, validated, and displayed. Selecting the correct field type ensures metadata is captured accurately and consistently across your assets.

This document explains the available field types, their use cases, and the properties you can configure.
- **Single Line Textbox**: Designed for short text values, e.g., product SKU, author name, or campaign code.
- **Multi Line Textbox**: Captures longer text entries, e.g., description, usage notes, or legal terms.
- **Link**: Stores URLs, such as a reference to an external product page, license agreement, or a hosted video.
- **Select**: Provides predefined options for controlled choices, e.g., region (North America, Europe, Asia) or image angle (Front, Back, Side).
- **Number**: Records numerical values, e.g., DPI, duration (seconds), or model version.
- **Date**: Tracks date-specific information, e.g., shoot date, license expiration, or release date.
- **Boolean**: Represents true/false or yes/no conditions, e.g., model release obtained or is_featured.
- **Group**: Bundles related fields into a single logical unit, e.g., Image Properties (with resolution, color profile, and DPI).

Choosing the right field type ensures that metadata is accurate, reusable, and easy to manage.

## Common questions

### How do I choose the right field type for a new metadata field?
Choose the field type based on the kind of data you need to store (text, URL, controlled options, numbers, dates, true/false) and how you want it validated and displayed.

### When should I use Select instead of a textbox?
Use **Select** when you need predefined options for controlled choices (for example, region or image angle) to keep metadata consistent.

### What is the purpose of a Group field type?
A **Group** bundles related fields into a single logical unit (for example, Image Properties with resolution, color profile, and DPI) to keep metadata organized.

### Can field types affect validation and display?
Yes. Each field type controls how data is entered, validated, and displayed, which helps ensure metadata is captured accurately and consistently.