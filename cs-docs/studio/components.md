---
title: "[Studio] - Components"
description: Studio components overview, including default and registered components, props, usage, reuse, and best practices.
url: https://www.contentstack.com/docs/studio/components
product: Contentstack Studio
doc_type: concept-guide
audience:
  - developers
  - content-authors
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Components

This page explains what components are in Contentstack Studio, the types of components available, and how to use, configure, and reuse them when building pages with a modular, drag-and-drop workflow.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio lets you build web pages using modular components, reusable blocks that represent visual or functional UI elements such as headers, buttons, sections, and carousels. You can use built-in components, register custom ones, or generate them from Figma designs.

Components streamline page creation, maintain design consistency, and support drag-and-drop workflows.

## Types of Components

Studio supports two types of components, each designed to meet different needs based on design fidelity, customization, and development effort.

### Default Components

Default components are prebuilt layout and content elements, such as containers, text blocks, and images. They appear in the left panel by default and are optimized for common use cases.

- Ready-to-use for most layout needs
- Seamlessly integrated with Live Edit and design tokens
- Ideal for quick assembly without writing code

**Tip:** Default components come preconfigured for Live Preview and support design token integration.

### Registered Components

Registered components are user-defined React components that handle business logic or complex UI. Once registered via the CLI, they appear in the left panel under categorized sections.

- Built using the Studio CLI and React (Next.js recommended)
- Support advanced interactivity, dynamic behavior, and internal design systems
- Enable version control and centralized updates across compositions

**Note:** Registered components can be reused across projects and offer greater flexibility for enterprise-grade applications.

## Working with Component Props

Components expose editable props that you can configure in the right-hand **Design** panel. These props determine the content, behavior, or appearance of each instance.

Common prop types include:

- Text (e.g., headings or labels)
- Images (URLs or asset references)
- Links and actions
- Booleans (e.g., show/hide options)
- Style controls (e.g., size, color, alignment)

You can manage props in the **right-hand panel** under the **Design** tab.

## Using Components on the Canvas

You can visually manage components in Studio:

- Drag components from the sidebar to the canvas or into containers
- Rearrange components using the visual editor or layer tree
- Nest components (e.g., place a button inside a hero section)

## Reusing Components

Once built, components can be reused across multiple compositions. You can:

- Save components as part of shared projects
- Register reusable libraries using the CLI

**Note:** Reusable components support centralized updates and version control across all instances.

## Best Practices

To ensure consistent and scalable component design:

- Use semantic, descriptive names (e.g., `HeroBanner`, `PricingTable`)
- Pass props instead of hardcoding values
- Use Container or Section components to wrap layout elements
- Prefer CLI-registered components in enterprise projects for greater control

Components give you the flexibility and structure needed to build scalable, design-consistent digital experiences. Whether you’re using built-in defaults, registering custom React components, or generating from Figma, each method supports a modular, composable approach to development.

## Common questions

### What’s the difference between Default Components and Registered Components?

Default components are prebuilt layout and content elements that appear in the left panel by default, while registered components are user-defined React components registered via the CLI and organized under categorized sections.

### Where do I edit a component’s props?

You can configure component props in the right-hand **Design** panel, under the **Design** tab.

### Can I reuse components across multiple compositions?

Yes. Once built, components can be reused across multiple compositions, including saving components as part of shared projects and registering reusable libraries using the CLI.

### Are registered components suitable for enterprise projects?

Yes. The page notes that registered components enable version control and centralized updates across compositions and recommends preferring CLI-registered components in enterprise projects for greater control.