---
title: "[Studio] - Live Preview and Visual Editing with Studio"
description: Live Preview and Visual Editing with Studio
url: https://www.contentstack.com/docs/studio/live-preview-and-visual-editing-with-studio
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - content-managers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Live Preview and Visual Editing with Studio

This page explains how Contentstack Studio integrates with Live Preview and Visual Editor, who should use each tool, and when to use them together to design layouts and edit content in real time.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio integrates seamlessly with Contentstack’s Live Preview and Visual Editor, enabling teams to design layouts and edit content in real time. This guide explains how the tools work together, when to use each, and how to get the most from the integration.

## Tool Comparison

The primary purpose of each tool is to better align your workflow across layout, editing, and preview.

| Tool | Primary Use |
|---|---|
| Studio | Structure and layout (page/template building) |
| Visual Editor | Content editing (field-level updates) |
| Live Preview | In-context review of real-time content changes |

## Workflow Integration

This section outlines the typical workflow when using Studio alongside Live Preview and Visual Editor.

- **Create Structure in Studio**Use Studio to:
  - Add or import components
  - Define layout and styling
  - Bind fields to CMS entries
  - Configure page metadata and slugs
- **Link to Contentstack Entry**When a composition is connected to a **content type**, it inherits the entry fields needed for binding content. This enables:
  - Live Preview of content from linked entries
  - Inline editing in Visual Editor
- **Enable Live Edit Tags**Studio automatically wraps supported components with **Live Edit Tags**, which:
  - Allow content managers to click and edit content directly in the UI
  - Power in-context editing in Visual Editor

**Tip:** All default and Figma-generated components support live editing by default. Custom components must follow specific guidelines for live-edit compatibility.

## Using Live Preview

Live Preview renders your page with real data and updates in real time as you edit the linked entry.

- Works for both default and custom compositions
- Auto-refreshes on save
- Uses the slug defined in **Page Data**

**Example:**

If you’ve linked your “Product Page” composition to the products content type and selected an entry with slug `smartwatch-pro`, the URL will be `/smartwatch-pro`.

## Using Visual Editor

Visual Editor enables inline editing of content fields directly in the context of the rendered page. When integrated with Studio:

- You can update text, images, and links on live-editable components.
- You can switch between different entry variants (e.g., languages, segments).
- You get full visibility into which content field maps to which component.

**Note:** You can’t modify the layout or design from Visual Editor—that must be done in Studio.

## Key Benefits of Integration

This section summarizes the major advantages of using Studio, Live Preview, and Visual Editor together.

- **Streamlined workflow**: Layout and content live in harmony.
- **Empowered business users**: Update content without dev involvement.
- **Design system consistency**: Components maintain structure and style while content is swapped dynamically.
- **Faster time to publish**: Visual feedback and in-context editing reduce iteration cycles.

## Best Practices

Follow these best practices to get the most out of your integrated workflow.

- Test your compositions in Live Preview before deploying.
- Ensure field names and labels in the CMS match their purpose in the UI.
- For campaigns or personalized pages, use Visual Editor to manage variants and localization.

By combining Studio’s layout capabilities with the real-time editing power of Live Preview and Visual Editor, you create a flexible yet consistent content workflow. Developers retain full control over structure and design, while content managers can manage updates independently, all in a visually intuitive environment. This integrated approach reduces delays, improves collaboration, and helps you publish faster with confidence.

## Common questions

**Q: Can I change layout and design in Visual Editor?**  
A: No. You can’t modify the layout or design from Visual Editor—that must be done in Studio.

**Q: Does Live Preview work with custom compositions?**  
A: Yes. Live Preview works for both default and custom compositions.

**Q: What enables clicking and editing content directly in the UI?**  
A: Studio automatically wraps supported components with **Live Edit Tags**, which allow content managers to click and edit content directly in the UI.

**Q: How is the Live Preview URL determined?**  
A: Live Preview uses the slug defined in **Page Data**.