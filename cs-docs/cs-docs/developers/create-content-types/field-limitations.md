---
title: "[Headless CMS | Fields] - Field Limitations"
description: Default field limitations in Contentstack.
url: https://www.contentstack.com/docs/developers/create-content-types/field-limitations
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: unknown
---

# [Headless CMS | Fields] - Field Limitations

This page lists the default field limitations in Contentstack. It is intended for developers designing content types and planning field usage, and should be used when validating schema constraints and scalability limits.

## Field Limitations

This table lists the default field limitations in Contentstack.

| Field | Unit of Measure | Default Limitations |
|---|---|---|
| Total Fields | Maximum fields per content type | 400 |
| Title field and Display Name property | Maximum character length | 200 |
| Select | Maximum number of options | 100 |
| Select | Maximum character length of a single-value option | 100 |
| Select | Maximum character length of a key-value pair option | 100 characters for key and 100 characters for value |
| Group | Maximum level of nesting | 5 |
| Group | Maximum number of fields (including nested fields) | 100 |
| Modular Blocks | Maximum number of Modular Blocks fields per content type | 5 |
| Modular Blocks | Maximum number of fields in a Modular Block | Depends on the total fields used in the content type. |
| Modular Blocks | Note | **Note:** The total number of fields in a content type (including fields inside Modular Blocks) is **100**. |
| Modular Blocks | Maximum number of block schema definitions per Modular Blocks field | 100 |
| Modular Blocks | Maximum number of block instances per Modular Blocks field in an entry | 100 |
| Modular Blocks | Maximum level of nested blocks | 3 |
| Field Visibility Rules | Maximum rules per content type | 10 |
| Field Visibility Rules | Maximum conditions per rule | 5 |
| Field Visibility Rules | Maximum target fields per rule | 5 |
| Custom Fields | Maximum custom fields per content type | 10 |
| Global Fields | Maximum global fields per organization | 1000 |
| Global Fields | Maximum global fields referenced in a content type | 25 |
| Global Fields | Maximum fields within a global field | 100 |
| Global Fields | Maximum level of nesting | 5 |

## Common questions

### Do fields inside Modular Blocks count toward the total fields limit?
Yes. **Note:** The total number of fields in a content type (including fields inside Modular Blocks) is **100**.

### What is the maximum number of Modular Blocks fields allowed per content type?
Maximum number of Modular Blocks fields per content type is **5**.

### How many options can a Select field have?
Select supports a maximum number of options of **100**.

### What is the maximum nesting level for Group fields?
Group supports a maximum level of nesting of **5**.