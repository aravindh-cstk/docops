---
title: "[Studio] - Work with the Studio Figma Plugin"
description: Use the Studio Figma plugin to convert design layers into reusable UI components, authenticate via Contentstack, map design layers to code components, apply design tokens, and export into Studio.
url: https://www.contentstack.com/docs/studio/work-with-studio-figma-plugin
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Work with the Studio Figma Plugin

This page explains how to use the Studio Figma plugin to turn Figma designs into reusable Studio UI components, including authentication, selection, responsiveness options, export methods, component mapping, and design token workflows. It is intended for designers and developers integrating Figma designs into Contentstack Studio, and should be used when preparing designs for export and reuse in Studio projects.

## Work with the Studio Figma Plugin

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Use the Studio Figma plugin to convert design layers into reusable UI components, without writing code. This plugin offers a guided flow to authenticate via Contentstack, select design layers, map them to code components, apply design tokens for visual consistency, and export them into Studio.

## Prerequisites

Before using the plugin, ensure the following:
- A valid [Contentstack account](https://www.contentstack.com/login/) with access to at least one [stack](../developers/set-up-stack/about-stack.md) and Studio project.
- [User roles](../developers/invite-users-and-assign-roles/about-stack-users.md) and [permissions](../developers/invite-users-and-assign-roles/about-stack-roles.md) with read/write access to [entries](../content-managers/author-content/about-entries.md) and [environments](../developers/set-up-environments/about-environments.md).
- A Figma file with edit permissions.

Before you begin, review the [Figma Best Practices](./figma-best-practices.md) document to ensure your designs are properly set up and optimized for use.

To integrate Figma designs with Studio, open your Figma file and perform the following steps:
- Install the plugin from the [**Figma Marketplace**](https://www.figma.com/community/plugin/1541766192464484605/contentstack-studio) and click **Run**.
- In the login page, choose your organization’s [region](../developers/contentstack-regions/about-regions.md) and click **Authorize** to proceed.
- The plugin redirects you to the Contentstack application. Select the desired organization from the list.
- After authentication, return to Figma. The plugin displays the list of projects linked to your organization in Studio.
- Select a frame or component, or hold Shift and click to select multiple items. Alternatively, drag a selection box across the canvas to select multiple frames.

  **Note:** To enhance accuracy and avoid duplication, map your pre-built components and design tokens before generation.
- Define layout or visual requirements using short prompts such as “Make this a carousel,” “Arrange elements in a grid,” or “Keep text above the image.”

  **Note:** Prompts affect design only, such as layout, spacing, and responsiveness. They do not define functional behavior (no click handlers, modals, etc.).
- When multiple frames are selected, you can add individual prompts to each frame or apply a single shared prompt to all selected frames.
- Choose a responsiveness option:**Optimize for responsiveness:** Generates code that adapts to desktop, tablet, and mobile views.
- **Fixed-size screens:** Keeps the selected frame dimensions across all views.

  **Note:** The selected responsiveness applies to all frames in the export. Mixing responsive and fixed layouts within the same export session is not supported.
- Click **Generate Design** to create the component’s code, styles, and mapping metadata.
- After code generation, choose one of the following export options:**Copy to Studio**Copies the generated component to your clipboard as composition JSON, which you can paste into the Studio editing canvas.
- Use this when the Figma design includes components that are already built and registered in Studio and do not require further changes before import.
- **Copy CLI Command**Generates a CLI command to [add the component](./work-with-studio-cli.md#add-component) to your local project and [register it in Studio](./work-with-studio-cli.md#register).
- Use this option when the Figma design includes a component that does not have generated code or needs refinement, such as color, spacing, or behavior adjustments, before adding it to Studio. This is useful for advanced JavaScript components.

## Map Design Components

Mapping helps the Figma plugin identify and reuse components that already exist in Studio when you export new designs. This prevents duplicate components and keeps your design system consistent

**Note:** Before mapping design components in Figma, make sure the components are [synced using the CLI](./work-with-studio-cli.md#sync-your-existing-components). Only synced components appear in the Figma plugin map.
- Go to the **Component Mapping** tab to view the detected Figma components and corresponding code components.
- Click **Auto Map** to match design layers to code components automatically.

  **Note:** The mapping is based on component name, description, and properties. Layers without a matching component remain unmapped and can be linked manually.
- Review and adjust mappings before export to ensure accuracy.

## Apply Design Tokens

Design tokens store values for visual properties like color, typography, and spacing. When applied in Studio, these values map directly to component styles, keeping designs consistent across your application.

Export design tokens using one of the following methods:
- **Import Design Tokens** to import and register design tokens into Studio.
- **Copy CSS variables** to use in external stylesheets or codebases.

Use the copied design token command from the plugin in the CLI to import and register the tokens in your Studio project. Once imported, you can use these tokens during visual editing.

**Additional Resource:** To learn more about importing design tokens, refer to the [Work with Studio CLI](./work-with-studio-cli.md) documentation.

## Common questions

### Who can use the Studio Figma plugin?
Studio is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack support team to review eligibility.

### What does the responsiveness option control?
**Optimize for responsiveness:** Generates code that adapts to desktop, tablet, and mobile views. **Fixed-size screens:** Keeps the selected frame dimensions across all views.

### Why should I map design components before exporting?
Mapping helps the Figma plugin identify and reuse components that already exist in Studio when you export new designs, which prevents duplicate components and keeps your design system consistent.

### How do I get design tokens into Studio?
Use **Import Design Tokens** in the plugin and then use the copied design token command from the plugin in the CLI to import and register the tokens in your Studio project.