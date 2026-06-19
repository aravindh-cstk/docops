---
title: "[Set Up Your Project] - Allow images only"
description: Documentation for the “Allow images only” option for the File field, including supported image types and file size limits.
url: https://www.contentstack.com/docs/headless-cms/allow-images-only
product: Set Up Your Project
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Allow images only

This page explains how the **Allow images only** option works for the **File** field, who it applies to (developers configuring content types), and when to use it (to restrict uploads to image formats and set file size limits).

## Allow images only

The **Allow images only **option is only applicable for the [**File**](/docs/developers/create-content-types/file) field. It allows users to upload only image files instead of any other file type.

Here's the list of file types that the “File” field supports when you select the **Allow images only** option: svg, svg+xml, gif, jpeg, jpg, png, tif, tiff, bmp, ico, x-icon, ief, cis-cod, pipeg, x-cmu-raster, x-cmx, x-portable-anymap, x-portable-bitmap, x-portable-graymap, x-portable-pixmap, x-rgb, x-xbitmap, x-xpixmap, x-xwindowdump, x-pcx, and webp.

When you select this option, you can specify the **File size limit **by selecting the minimum and maximum** MB.** This will prompt the user to upload an image of the specific dimension on the [entry](/docs/content-managers/working-with-entries/about-entries) page.

**Additional Resource**: You can check out the [Validations](/docs/developers/how-to-guides/validations) guide to learn more about the several types of validation that you can set up on a field.

If you want to make changes to any field’s properties, make sure you go through our [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management) guide to avoid data loss.

## Common questions

**Q: Which field supports the “Allow images only” option?**  
A: The **Allow images only **option is only applicable for the [**File**](/docs/developers/create-content-types/file) field.

**Q: What file types are allowed when “Allow images only” is enabled?**  
A: The supported types are: svg, svg+xml, gif, jpeg, jpg, png, tif, tiff, bmp, ico, x-icon, ief, cis-cod, pipeg, x-cmu-raster, x-cmx, x-portable-anymap, x-portable-bitmap, x-portable-graymap, x-portable-pixmap, x-rgb, x-xbitmap, x-xpixmap, x-xwindowdump, x-pcx, and webp.

**Q: Can I set a file size limit for image uploads?**  
A: Yes—when you select this option, you can specify the **File size limit **by selecting the minimum and maximum** MB.**

**Q: Where can I learn more about validations and safe field changes?**  
A: See [Validations](/docs/developers/how-to-guides/validations) and [Content Type Change Management](/docs/developers/how-to-guides/content-type-change-management).