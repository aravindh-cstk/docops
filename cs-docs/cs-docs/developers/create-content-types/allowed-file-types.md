---
title: "[Set Up Your Project] - Allowed file type(s)"
description: Documentation for the Allowed file type(s) property used with the File field when creating content types.
url: https://www.contentstack.com/docs/headless-cms/allowed-file-types
product: Set Up Your Project
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - Allowed file type(s)

This page explains the **Allowed file type(s)** property for the **File** field, who should use it (developers configuring content types), and when to apply it (to restrict which file formats users can upload in entries).

## Allowed file type(s)

The **Allowed file type(s)** property allows you to specify the file types that the user can upload using the [File](/docs/developers/create-content-types/file) field. Once you set the permitted file types for a field, users will not be able to upload any other file types apart from the ones mentioned in this property.

For example, if you set the values for this property as "pdf, png, md," the user will only be able to upload files PDF documents, PNG graphic images, and Markdown files on the [entry](/docs/content-managers/working-with-entries/about-entries) page.

**Additional Resources**: Validations let you eliminate errors while writing content. You can check out the [Validations](/docs/developers/how-to-guides/validations) guide to know more.

Making changes in existing field properties may result in data loss. To prevent this, make sure you go through our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide before you go ahead.

## Common questions

### What field does the Allowed file type(s) property apply to?
It applies to the [File](/docs/developers/create-content-types/file) field.

### What happens if a user tries to upload a file type not listed?
Users will not be able to upload any other file types apart from the ones mentioned in this property.

### Where do users upload files after this is configured?
Users upload files on the [entry](/docs/content-managers/working-with-entries/about-entries) page.

### Where can I learn more about validations and safe changes?
See the [Validations](/docs/developers/how-to-guides/validations) guide and the [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide.