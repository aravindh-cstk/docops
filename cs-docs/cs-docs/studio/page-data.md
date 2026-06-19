---
title: "[Studio] - Page Data"
description: "Configure metadata, routing, and entry bindings for each composition in Studio using the Page Data panel."
url: https://www.contentstack.com/docs/studio/page-data
product: "Contentstack Studio"
doc_type: "guide"
audience:
  - developers
  - content-authors
  - admins
version: "early-access"
last_updated: 2026-03-25
---

# [Studio] - Page Data

This page explains how to use the Page Data panel in Contentstack Studio to configure page metadata, preview behavior, and data bindings for compositions. It is intended for users building and managing compositions who need to control SEO/sharing details and connect Contentstack entries for preview and component data binding.

### Item 1

#### Article section

##### Heading

Page Data

##### Content

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

The **Page Data** panel in Studio allows you to configure metadata, routing, and entry bindings for each composition. These settings define how a page is indexed, previewed, and rendered, ensuring it integrates seamlessly with both your design system and front-end logic.

## What Is Page Data?
Page Data includes the configuration attributes that define a page’s structure, identity, and runtime behavior. It typically covers:
- **Page Details:** SEO metadata such as title, description, and Open Graph settings.
- **Preview Entries:** The linked content entry used for preview in Canvas.
- **Page Entries:** Additional entries from Contentstack available for data binding.

**Note:** Page Data is configured per composition. Settings do not carry over between compositions.

## Page Details
This section lets you define SEO and sharing metadata for your composition:
- **Page Title:** Displayed in the browser tab and search engine results.
- **Page Description:** Shown in search listings; keep under 160 characters.
- **Open Graph Image:** Used in link previews for social sharing.Select from the asset library.
- Upload a new image.
- Or provide a direct image URL.

**Note:** Recommended Open Graph image size is 1200 x 630 pixels for optimal preview rendering.

### Using in code

## Preview Entry (Linked Compositions)
For [Linked Compositions](/docs/studio/manage-a-composition#linked-composition), Studio selects the first available entry from the connected Content Type by default. You can change this entry to preview different content variations in Canvas.

## Page Entries (Data Binding)
You can associate additional content entries from Contentstack to a composition. These entries become available in the **Page Data** panel for binding to component props.

This enables richer, modular content connections without editing the structure of your composition.

## SEO Best Practices
To maximize visibility and ranking:
- Use **descriptive slugs** that include keywords.
- Keep **page titles short**, unique, and relevant.
- Write **meta descriptions under 160 characters**.
- Avoid duplication of metadata across pages.

The Page Data panel helps you manage how each composition behaves and appears across your digital experience. Whether you’re linking to dynamic content, optimizing for SEO, or configuring global behavior, Page Data ensures that every page is ready for performance, discoverability, and scale.

## Common questions

### Is Page Data shared across compositions?
No. **Note:** Page Data is configured per composition. Settings do not carry over between compositions.

### What entry is used by default for preview in Linked Compositions?
For Linked Compositions, Studio selects the first available entry from the connected Content Type by default.

### What is the recommended Open Graph image size?
**Note:** Recommended Open Graph image size is 1200 x 630 pixels for optimal preview rendering.

### What can Page Entries be used for?
Page Entries can be associated to a composition and become available in the **Page Data** panel for binding to component props.