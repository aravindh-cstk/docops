---
title: "[Studio] - Composition Editor Overview"
description: Overview of the Composition Editor in Studio’s visual builder, including layout regions, panels, and key interface elements.
url: https://www.contentstack.com/docs/studio/composition-editor-overview
product: Contentstack Studio
doc_type: overview
audience:
  - developers
  - designers
  - content-authors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Composition Editor Overview

This page explains the Composition Editor in Contentstack Studio, including its main layout regions (Left Panel, Canvas, Right Panel) and supporting interface elements. It is intended for users building and managing page compositions in Studio and should be used when learning the editor’s workspace and core workflows.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

The Composition Editor is the primary workspace in Studio’s visual builder. It enables you to structure your layout, drag and drop components, bind data, and apply design tokens, all with a real-time preview. Whether you're designing a single section or an entire webpage, the Composition Editor offers an interactive interface that reflects your changes instantly.

## Composition Editor Layout

The Composition Editor interface is divided into three key regions: the **Left Panel**, which allows you to manage components and layers; the **Canvas**, which serves as the central drag-and-drop workspace; and the **Right Panel**, which displays context-specific settings for data binding and styling based on the selected component.

### Left Panel: Components and Layers

The Left Panel helps manage your composition’s structure. It includes two tabs:

- **Components**: Drag components from this library to the Canvas.
- **Layers**: View and manage the hierarchy of components.

Within the Layers tab, you can:

- View nested and grouped components (similar to tools like Figma)
- Reorder components using drag handles
- Rename layers for clarity
- Expand or collapse grouped elements

### Canvas

This is your drag-and-drop workspace to visually build layouts.

Use the Canvas to:

- **Drag and drop components** from the library to your layout
- **Reorder layers** via the Layers tab or directly on the Canvas
- **Select and inspect components**, triggering context-aware settings in the Right Panel

### Right Panel

The Right Panel displays settings relevant to the selected component. It includes the following tabs:

- **Settings**: Define properties and behavior
- **Design**: Apply styles such as spacing, color, and typography
- **Page Data**: Bind and manage content entries used in Settings and Design

## Additional Interface Elements

In addition to the main workspace, the Composition Editor includes several interface elements that enhance navigation, publishing, and code generation. These tools streamline workflows and support seamless project management within Studio.

- **URL Bar**: Navigate between pages via URLs
- **Toggle Viewport**: Use the view switcher to test and refine layouts across Desktop, Tablet, and Mobile device types. Design tokens and breakpoints adapt based on the selected view, ensuring consistent design across devices. These settings are fully configurable via the SDK to align with your custom design system.**Tip:** Use the view switcher to preview your composition across devices and validate responsive behavior.
- **Generate Code**: Export front-end code for use outside Studio

## Quick Actions

Use the quick actions in the Composition Editor to manage your workflow efficiently. These options help you save progress, deploy compositions, and configure publishing environments, all from a centralized panel.

- **Configuration**: Manage environments, languages, and the base URL for your composition.
- **Save**: Save your updates and **preview** across devices to verify responsive behavior.
- **Deploy**: Publish the composition

The Composition Editor brings together structure, styling, and interactivity in one streamlined interface. By understanding each panel and applying key workflows, you can design responsive, modular layouts confidently, whether you're working on a single section or a complete digital experience.

## Common questions

**How is the Composition Editor organized?**  
It is divided into three key regions: the Left Panel, the Canvas, and the Right Panel.

**Where do I manage component hierarchy and grouping?**  
Use the Layers tab in the Left Panel to view and manage the hierarchy of components.

**How do I preview responsive behavior across devices?**  
Use **Toggle Viewport** to test and refine layouts across Desktop, Tablet, and Mobile device types.

**What does “Generate Code” do?**  
It exports front-end code for use outside Studio.