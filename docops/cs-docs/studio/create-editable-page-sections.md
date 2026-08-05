---
title: "[Studio] - Create Editable Page Sections"
description: Create editable page sections in Studio using components, page data, settings, and design tools.
url: https://www.contentstack.com/docs/studio/create-editable-page-sections
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - content-authors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Create Editable Page Sections

This page explains how to set up, edit, and deploy editable webpage sections using Contentstack Studio. It is intended for content teams and developers working on Studio compositions who need to build page sections with components, bind entry data, and apply design tokens without developer intervention for each change.

### Item 1

#### Article section

##### Heading

Create Editable Page Sections

##### Content

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio allows content teams to visually design and manage editable sections on a webpage, without developer intervention.

This guide outlines how to set up, edit, and deploy a page section using Studio.

## Prerequisites
Before exposing editable sections:
- Ensure Studio is set up and connected to your front-end project (CSR or SSR).
- You have **Admin** or **Developer** permissions to modify composition structure.

The previous article introduced an empty section by creating a composition and linking it to the front-end code using the generated composition UID in the URL path file.

**Additional Resource**: To learn how to create a composition and embed it in the code for use in Studio Canvas, refer to the [Set Up Studio for Your Project](./set-up-studio-for-your-project.md) use-case.

With the foundation in place, it's time to construct and configure a page section using components, content bindings, and design tools.

## Components
Studio supports two types of components, each suited to different levels of customization and development effort.

### Default Components
Default components are prebuilt elements, such as containers, text blocks, and images, optimized for common layout use cases.
- Ready-to-use for layout needs
- Integrated with Live Edit and design tokens
- Require no coding for quick assembly

**Tip**: Default components are preconfigured for Live Preview and support design token integration.

### Registered Components
Registered components are custom React components built and registered via the Studio CLI.
- Enable complex UI and business logic
- Support dynamic behavior and internal design systems
- Allow centralized updates across projects

**Note**: Registered components are reusable across projects and offer flexibility for enterprise-grade applications.

### Building the Page Section
Components are accessible from the left panel. After placing them on the canvas, a structural layout is established, design and data can be applied in later steps.

**Additional Resource**: Learn more about the [components](./components.md) through our documentation.

## Adding Entries from the Page Data Tab
The **Page Data** tab defines a page’s structure, identity, and runtime behavior. It includes:
- **Page Details:** SEO metadata (title, description, Open Graph)
- **Preview Entries:** Linked content for Canvas previews
- **Page Entries:** Additional entries from Contentstack for data binding

**Note**: Page Data is configured per composition. Settings do not carry over between compositions.

In this example, an existing homepage entry is used. Data from its modular block is linked to render the feature section.

**Additional Resource:** Learn more about the [Page Data](./page-data.md) through our documentation.

## Linking Entry Data to Fields
Use the **Settings** tab to control component behavior, appearance, and data bindings, without writing code.
- Select a component on the canvas.
- Open the **Settings** tab to configure properties and bind data fields.

This approach allows customization for each instance while keeping logic consistent.

Each component property is mapped to the corresponding field in the features modular block.

**Additional Resource**: Learn more about the [Settings](./settings.md) through our documentation.

## Applying Design to Components
The **Design** tab provides control over visual styling without the need for CSS. When a component is selected, relevant design tokens appear in the Design tab.

Design tokens enable:
- Consistent styling across pages and components
- Seamless alignment with the design system
- Easy global updates

To apply styles:
- Select the component.
- Click the **Design** tab in the right panel.
- Choose design tokens or input custom values.
- Preview responsive styles using the device view toggles.

**Tip**: Use tokens instead of hardcoded values to maintain styling consistency across the composition.

In this example, typography is styled using design tokens, while the component provides baseline styles.

With components in place, content bound, and design applied, the page section is now ready for deployment. Use Studio’s intuitive interface to iterate quickly and deliver visually rich, editable experiences without code.

## Common questions

### Do I need developer help to create page sections in Studio?
Studio allows content teams to visually design and manage editable sections on a webpage, without developer intervention.

### What permissions are required to modify composition structure?
You have **Admin** or **Developer** permissions to modify composition structure.

### What is the difference between Default Components and Registered Components?
Default components are prebuilt elements, such as containers, text blocks, and images, optimized for common layout use cases. Registered components are custom React components built and registered via the Studio CLI.

### Do Page Data settings carry over between compositions?
**Note**: Page Data is configured per composition. Settings do not carry over between compositions.