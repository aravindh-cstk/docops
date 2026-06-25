---
title: "[Content Models] - Hero Banner"
description: Hero Banner content model schema and fields for homepage hero banner content.
url: https://www.contentstack.com/docs/marketplace-platform-guides/content-models/hero-banner
product: Contentstack
doc_type: marketplace-platform-guide
audience:
  - developers
  - content-modelers
version: v1
last_updated: 2026-03-25
---

# [Content Models] - Hero Banner

This page describes the Hero Banner content model, including prerequisites and the schema/fields used to structure hero banner content on a homepage. It is intended for developers and admins setting up Content Types in Contentstack and should be used when creating or importing the Hero Banner content model into a stack.

## Hero Banner

The hero banner features prominently on the homepage, commanding attention with its banner title, captivating images, engaging descriptions, useful links etc. The Hero Banner Content Model is thoughtfully crafted to gather and organize essential information for the hero banner content that adorns the front page of your website.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

## Schema for Hero Banner Content Model
The Hero Banner Content Model contains a [Content Type](../../create-content-types/about-content-types.md) named **Hero Banner**.

### Schema for Hero Banner Content Type
- **Banner Title**: This is a [Title](../../create-content-types/title.md) field that displays the title of the Hero Banner. This is a mandatory field and must be unique.
- **Banner Image**: This is a [File](../../create-content-types/file.md) field where you can choose an appropriate image to add in the banner.
- **Background Color**: This is a [Custom](../../create-content-types/custom.md) field that adds [Color Picker](../../marketplace-apps/color-picker.md) as an extension that you can use to set the default background color of the page.
- **Text Color**: This is a [Custom](../../create-content-types/custom.md) field containing [Color Picker](../../marketplace-apps/color-picker.md) as an extension that you can use to set the default text color.
- **Banner Description**: This is a [Multi Line Textbox](../../create-content-types/multi-line-textbox.md) field to add the banner description.
- **Call To Action**: This is a [Link](../../create-content-types/link.md) field to add links based on your requirement.
- **Is Banner Image Full Width**?: This is a [Boolean](../../create-content-types/boolean.md) field that lets you enable or disable a full-width banner image on a web page. By default, this field is set to true, i.e. the Banner Image is in full-width.
- **Banner Image Alignment**: This is a [Select](../../create-content-types/select.md) field with Single Choice as the Selection Type to select the alignment of the Banner Image.
- **Content Alignment**: This is a [Select](../../create-content-types/select.md) field with Single Choice as the Selection Type to select the alignment of the content.

**Additional Resource**: You can import the prebuilt Content Models via the Marketplace (refer to [How to Import a Content Model](./how-to-import-content-model.md)) or via the CMS (refer to [Import Prebuilt Content Models to your Stack](../../create-content-types/import-prebuilt-content-models.md)). Refer the [Hero Banner Content Modeling](../../content-modeling/hero-banner.md) documentation to understand how to model the "Hero Banner".

Here’s how your Hero Banner looks after you publish the entry:

## Common questions

**How do I get the Hero Banner content model into my stack?**  
You can import the prebuilt Content Models via the Marketplace or via the CMS using the referenced import documentation.

**Which fields control the hero banner colors?**  
**Background Color** and **Text Color** are Custom fields that use the Color Picker extension.

**How do I control whether the banner image spans the full width?**  
Use **Is Banner Image Full Width**? (Boolean). By default, it is set to true.

**How do I control alignment in the hero banner?**  
Use **Banner Image Alignment** and **Content Alignment** (Select fields with Single Choice as the Selection Type).