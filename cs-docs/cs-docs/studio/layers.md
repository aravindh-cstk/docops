---
title: "[Studio] - Layers"
description: Layers in Studio define the structure and hierarchy of your layout on the Visual Builder canvas.
url: https://www.contentstack.com/docs/studio/layers
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - designers
  - content-authors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Layers

This page explains how layers work in Contentstack Studio, how they appear and behave in the composition tree, and how to manage them using the Layers tab. It is intended for users building layouts in Studio who need to organize, reorder, and maintain component hierarchy on the Visual Builder canvas.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

In Studio, each component added to the canvas becomes a layer. Layers define the structure and hierarchy of your layout, similar to frames in Figma or elements in the DOM. Managing layers effectively helps you build clean, modular, and scalable designs.

A layer represents a single instance of a component placed on the Visual Builder canvas. Layers are created when you:
- Drag a component from the component panel onto the canvas
- Use an AI plugin to convert Figma layers to JSON and paste generated JSON into Studio
- Register and add a custom component

These layers appear in a composition tree that defines the visual and functional structure of your page.

## Layer Structure and Behavior

Layers follow a top-down hierarchy and render in the order they appear in the composition tree. Each layer includes:
- **Parent-child relationships**: Nest components within others (e.g., a Button inside a Section).
- **Grouping containers**: Use Section, Grid, or Container components to group related layers.
- **Layout behavior**: Inherit styles such as flex, grid, or absolute positioning.
- **Rendering order**: Defined by the composition tree unless overridden by styling.

## Using the Layers Tab

The Layers tab in the left sidebar shows a tree view of all layers in your layout. You can:
- Expand/collapse nested layers
- Select and edit individual layers
- Rename layers for clarity
- Reorder layers using drag-and-drop
- Duplicate, delete, or group layers

**Tip:** The Layers tab updates in real time to reflect changes in your JSON layout.

## Managing Layer Hierarchy

A clear hierarchy makes layouts easier to understand and maintain. In Studio:
- Parent components (e.g., Section, Container) wrap child elements.
- Nesting influences layout flow, especially for Flex and Grid containers.
- Reordering layers changes their rendering order on the canvas.

## Reordering Layers

To reorder or nest layers:
- Drag a layer up or down within the same hierarchy level.
- Drag a layer into another to nest it as a child.

## Component Menu

Click the vertical ellipsis next to a layer in the Layers tab to open a context menu with quick actions. Depending on the component, options may include:
- **Move to**: Change the position of the component in the layer hierarchy.
- **Wrap in container**: Group the selected layer inside a container (e.g., Section or Grid).
- **Convert to Symbol**: Save the component as a reusable symbol.
- **Rename**: Update the layer name for better clarity.
- **Show/Hide**: Toggle the component’s visibility on the canvas.
- **Lock/Unlock**: Prevent or allow changes to the component.
- **Duplicate**: Create an exact copy of the component.
- **Delete**: Remove the component from the composition.
- **Copy Style / Paste Style**: Copy and apply styles across layers.

This menu helps you manage layout actions quickly and efficiently.

## Best Practices for Layer Naming

Descriptive layer names improve clarity, especially in complex compositions:
- Use names that reflect purpose, not just type (e.g., Hero Banner, CTA Section, ProductImage).
- Follow naming conventions like `HeroSection` or `CTA-Form`.
- Rename default names like Text or Image to reflect their role.
- Match names to the intent of the component, not just the component type.

## Common Use Cases

Here are some examples of how layers typically map to use cases:

| Scenario | Layer Structure |
|---|---|
| Hero section with heading and CTA | Section → Text + Button |
| Card layout | Grid → multiple Card components |
| Content block with image + text | Container → Image + Text |

## Tips for Working with Layers

A well-structured layer tree improves layout clarity, enhances performance, and makes collaboration easier.
- Keep your layer tree shallow for better readability and performance.
- Use containers and sections to group logically related components.
- Collapse unused layers to reduce visual clutter.
- Name layers clearly to identify their role at a glance.
- Remove unused layers to keep your composition clean.

The Layers tab is your control center for structuring, organizing, and editing components in Studio. By understanding how to manage hierarchy, nesting, and layer actions, you can create modular, responsive layouts that are easier to navigate and scale. A well-maintained layer structure not only improves your workflow but also sets the foundation for seamless handoffs and ongoing collaboration.

## Common questions

### What is a layer in Studio?
A layer represents a single instance of a component placed on the Visual Builder canvas.

### How do I reorder or nest layers?
Drag a layer up or down within the same hierarchy level, or drag a layer into another to nest it as a child.

### Where can I rename, duplicate, or delete a layer?
Use the Layers tab for renaming and drag-and-drop reordering, or click the vertical ellipsis next to a layer to open the Component Menu for actions like Duplicate and Delete.

### Why should I name layers descriptively?
Descriptive layer names improve clarity, especially in complex compositions.