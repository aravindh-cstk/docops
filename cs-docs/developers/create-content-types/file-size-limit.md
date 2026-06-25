---
title: "[Set Up Your Project] - File size limit"
description: Documentation for configuring the File size limit (MB) property for a File field in content types.
url: https://www.contentstack.com/docs/headless-cms/file-size-limit
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - File size limit

This page explains how to configure the **File size limit (MB)** property for a **File** field when setting up your project’s content types. It is intended for developers defining field validations and should be used when you need to restrict the minimum and/or maximum upload size allowed on entry pages.

## File size limit

The **File size limit (MB)** property of the [**File**](./file.md)** **field enables you to set size limits on the file, in MB, that the user will upload on the [entry](../../content-managers/author-content/about-entries.md) page.

Once you set this limit, users will not be able to upload files that have sizes which do not fall within the mentioned range.

Under this property, there are following options:
- **Minimum**: Lets you set the minimum size for the file to upload.
- **Maximum**: Lets you set the maximum size for the file to upload.

**Additional Resources**: Validations let you eliminate errors while writing content. You can check out the [Validations](../security/validations.md) guide to know more.

Making changes in existing field properties may result in data loss. To prevent this, make sure you go through our [Content Type Change Management](../content-modeling/content-type-change-management.md) guide before you go ahead.

## Common questions

**How is the file size limit enforced?**  
Once you set this limit, users will not be able to upload files that have sizes which do not fall within the mentioned range.

**What units are used for the file size limit?**  
The limit is set in MB under the **File size limit (MB)** property.

**Can I set only a minimum or only a maximum limit?**  
Yes. Under this property, there are following options: **Minimum** and **Maximum**.

**Is it safe to change this property after content exists?**  
Making changes in existing field properties may result in data loss. To prevent this, make sure you go through our [Content Type Change Management](../content-modeling/content-type-change-management.md) guide before you go ahead.