---
title: "[Visual Editor] - Navigating Your Website in Visual Editor"
description: Use Visual Editor to visually edit and manage your website’s structure and content in real time, including navigation, key interface areas, and canvas interactions.
url: https://www.contentstack.com/docs/headless-cms/navigating-your-website-in-visual-editor
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Visual Editor] - Navigating Your Website in Visual Editor

This page explains how to navigate and work within Contentstack Visual Editor, including the main interface areas and how to trigger interactions inside the canvas. It is intended for content managers and developers using Visual Editor to preview and edit website content in real time.

## Navigating Your Website in Visual Editor

Use Visual Editor to visually edit and manage your website’s structure and content in real time.

**Note:** To use Visual Editor, ensure that the [Live Preview](../author-content/about-live-preview.md) feature is enabled in your stack settings. For setup instructions, refer to the [Set Up Visual Editor for Your Website](../../developers/set-up-visual-editor/set-up-visual-editor-for-your-website.md) guide.

To navigate through your website, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select **Visual Experience**.
- Click **Editor** in the bottom pill menu.
- The Visual Editor interface includes five key areas to help you navigate and manage your website efficiently:
  - **URL Bar**: Displays a list of all available web pages. It helps you quickly understand the structure of your site and switch between pages for editing.
  - **Canvas**: Serves as the main workspace where you can preview your site and make visual edits directly. It reflects real-time changes and simulates the live appearance of the page.
  - **Toolbar**: Appears over page components and provides contextual tools to move elements, add comments, apply field modifiers, and view detailed field information such as the field name and its associated content type.
  - **Right Panel:** Gives you access to the following tools:
    - [**Status**](./status.md) to view the current entry’s state along with all linked or referenced entries on the page.
    - [**Form**](./form.md) to perform inline editing with real-time preview and breadcrumb navigation.
    - [**Drafts**](./drafts.md) to review and manage unsaved changes.
    - [**Discussions**](./discussions.md) to collaborate through field-level feedback.
    - [**Widgets**](./widgets.md) to add features like SEO optimization or translation.
    - [**Audiences**](./audiences.md) to tailor content for specific user segments or regions.
    - [**Automate**](./automate.md) to automate workflows and trigger custom actions.
  - **Publish Panel:**Displays all entries updated during a session, helping you track changes and organize updates.
- You can assign workflows, fix validation errors, and choose between quick publishing for fast deployment or advanced publishing for more control.

## Triggering Interactions within the Canvas

To test interactive elements (e.g., dropdowns, sliders, modals) wrapped in `data-cslp` tags:

- Hold **Alt** (Windows) or **Option** (macOS) while clicking the element in the canvas.
- This action temporarily bypasses the editor's editing mode and lets you interact with the element as it behaves on your live site.

For example, pressing Alt or Option while clicking a dropdown menu opens the menu instead of the editing toolbar.

**Note:**

- This support is available only from version **3.1.3** and **above** of the Live Preview SDK.
- Page navigation is disabled within the canvas. Clicking links does not redirect to another page. Use the **URL Bar** to navigate within the editor, or open your site in a **new browser tab** for full interactivity.

These techniques help you efficiently manage and preview content within Visual Editor.

## Common questions

### Why can’t I click links to navigate to another page inside the canvas?
Page navigation is disabled within the canvas. Use the **URL Bar** to navigate within the editor, or open your site in a **new browser tab** for full interactivity.

### How do I interact with dropdowns, sliders, or modals in the canvas?
Hold **Alt** (Windows) or **Option** (macOS) while clicking the element in the canvas to temporarily bypass the editor's editing mode.

### What do I need enabled to use Visual Editor?
Ensure that the [Live Preview](../author-content/about-live-preview.md) feature is enabled in your stack settings.

### Which Live Preview SDK versions support interaction bypass with Alt/Option?
This support is available only from version **3.1.3** and **above** of the Live Preview SDK.