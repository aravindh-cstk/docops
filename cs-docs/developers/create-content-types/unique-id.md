---
title: Set Up Your Project - Unique ID
description: Documentation for the Unique ID (UID) property for fields in content types.
url: https://www.contentstack.com/docs/headless-cms/unique-id
product: Contentstack
doc_type: concept
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# Set Up Your Project - Unique ID

This page explains what the **Unique ID (UID)** property is for fields, how it is used to identify fields within a content type, and what to consider before changing it. It is intended for developers and content modelers setting up or maintaining content types and fields.

## Unique ID

The **Unique ID** (**UID**) property represents a unique alphanumeric string that is associated with a [field](./about-fields.md). The system identifies each field with its UID.

By default, the UID of each field is the same as the [display name](./display-name.md) of the field. While you can change the UID as per your requirements, you cannot have two fields with the same UID within a content type.

**Warning**: If you change the UID after an entry has been saved under a [content type](./about-content-types.md), the data for that field will be lost and you will have to enter it again. Also, there are certain restrictions when providing a user-defined UID. These restrictions are covered in the [**Restricted keywords for UIDs**](./restricted-keywords-for-uids.md) section.

## Common questions

### Can two fields in the same content type share the same UID?
No. You cannot have two fields with the same UID within a content type.

### What happens if I change a field UID after entries are saved?
If you change the UID after an entry has been saved under a content type, the data for that field will be lost and you will have to enter it again.

### Where can I find the rules for user-defined UIDs?
The restrictions are covered in the **Restricted keywords for UIDs** section: /docs/developers/create-content-types/restricted-keywords-for-uids.