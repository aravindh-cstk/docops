---
title: "[Visual Editor] - Audiences"
description: How to use the Audiences feature in Visual Editor to customize and preview content variations for different user segments.
url: https://www.contentstack.com/docs/headless-cms/audiences
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Visual Editor] - Audiences

This page explains how to use the Audiences feature in Contentstack Visual Editor to customize, preview, and publish content variants for different user segments. It is intended for content managers and teams using Personalize and experiences to deliver segmented or A/B tested content.

## Audiences

The Audiences feature in Visual Editor allows you to customize content for various user segments or groups, such as geographic regions, customer types, or languages configured in Personalize. This functionality helps you create content variations for different audiences, ensuring each group receives the most relevant and engaging experience.

**Note:** To view [audiences](../../personalize/about-audiences.md), enable [Personalize](../../personalize/about-personalize.md) for your organization, and link an [experience](../../personalize/about-experiences.md) to your stack.

To access the Audiences feature within Visual Editor, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select **Visual Experience**.
- Click **Editor** in the bottom pill menu.
- In the right sidebar, click the “Audiences” icon.
- From the **Audiences** dropdown, select one or more predefined audiences (for example, Mobile, iOS, India, US) to determine which variant displays.![Descriptive view of the interface element](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c53171cc9afb252/68c9111c70c36f79d08b2d49/1._Select_audiences_-_Audience_dropdown.png)
- Select **Segmented Experience** or **A/B Test**. Then choose from the available experiences to view the audience conditions that trigger your variant.
- Once the audience conditions are met, Visual Editor displays the active variant in the experience dropdown.
- By default, Visual Editor shows variant components as read-only. To enable editing for specific audiences, click the “Edit” icon for an experience.
- Enable the **Highlight variant fields** toggle to highlight the variant fields in purple.![Variant fields highlighted in Visual Builder](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11affdd58c71996a/68c911200ccc4b4e7d86e9f9/2-edit-an-experience.gif)
- Make the necessary edits. These updates apply to both the entry variants and base entries in real time.
- Review the changes, then click **Save**.
- Click [Publish](./publish-page.md) to make the content live for the selected audiences, ensuring each user segment sees the most relevant version of your content.

Using the **Audiences** feature in Visual Editor helps you efficiently create, edit, and preview personalized content experiences, ensuring each audience receives content that meets their needs.

## Common questions

### Do I need Personalize enabled to use Audiences in Visual Editor?
Yes. **Note:** To view [audiences](../../personalize/about-audiences.md), enable [Personalize](../../personalize/about-personalize.md) for your organization, and link an [experience](../../personalize/about-experiences.md) to your stack.

### Can I select more than one audience at a time?
Yes. From the **Audiences** dropdown, select one or more predefined audiences (for example, Mobile, iOS, India, US) to determine which variant displays.

### Why are variant components read-only by default?
By default, Visual Editor shows variant components as read-only. To enable editing for specific audiences, click the “Edit” icon for an experience.

### Do edits apply only to the variant?
No. Make the necessary edits. These updates apply to both the entry variants and base entries in real time.

<!-- filename: visual-editor-audiences.md -->