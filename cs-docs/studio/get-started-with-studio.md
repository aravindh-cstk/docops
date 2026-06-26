---
title: "[Studio] - Get Started with Studio"
description: Get Started with Studio
url: https://www.contentstack.com/docs/studio/get-started-with-studio
product: Contentstack Studio
doc_type: getting-started
audience:
  - developers
  - content-editors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Get Started with Studio

This page explains how to set up Contentstack Studio and begin creating compositions, including project creation, optional SDK setup for front-end integration, component registration, and using Canvas to design, preview, and deploy pages. It is intended for developers integrating Studio into CSR/SSR projects and content teams building page layouts in Studio.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Contentstack Studio is a visual experience builder that enables developers and content teams to collaboratively create dynamic, responsive web pages.

This guide walks you through setting up Studio, including project configuration, component registration, and composition creation. Whether you're a developer integrating code or a content editor designing page layouts, this guide helps you get started confidently.

## Prerequisites

Before starting, ensure your environment and permissions are correctly configured. This section lists what you’ll need to access, configure, and use Studio effectively.

- A [Stack](../developers/set-up-stack/about-stack.md) where your content and compositions will reside
- [Roles](../developers/invite-users-and-assign-roles/about-stack-users.md) and [permissions](../developers/invite-users-and-assign-roles/about-stack-roles.md) with read/write access to entries and environments
- A **front-end project** (CSR or SSR) with Studio SDK installed (for live preview and deployment)

Follow these steps to get started with Studio for your project:

## Create a Studio Project

Setting up a new project is the first step toward building with Studio. Each project connects to a stack and serves as the workspace where compositions and pages are created.

[Log in](https://www.contentstack.com/login/) to your Contentstack account

- Select **Studio** from the “App Switcher”.
- If you are accessing Studio for the first time, click **New Project**.
- In the **Create New Studio Project** modal:Enter a **Name** for your project.
- Optionally, add a **Description**.
- Select the **Contentstack stack** you want to link.

By default, Studio stores compositions in a content type named **compositions**.

**Note:** You don’t need to change this setting. However, if your stack already has a content type named “compositions”, you can expand **Advanced Settings** to specify a different content type name and UID for storing compositions.

- Click **Create**.

## Set Up Studio SDK in the Front-End (Optional for Playground Use)

By default, Studio provides a built-in playground where you can create and experiment with compositions. To deploy your pages or view live previews, you must first set up a front-end project and connect it to your Studio environment.

**Note:** This step is optional if you plan to use Studio as a standalone playground for testing.

Install the **Studio SDK** and any required dependencies in your front-end codebase ([CSR](./set-up-studio-for-a-csr-project.md) or [SSR](./set-up-studio-for-a-ssr-project.md)).

- Ensure Studio has access to the correct **environment** and **locale** via the **Project Settings** tab.**Tip:** If you don’t have front-end access, you can still use Studio to build and preview compositions directly within the playground Canvas.

## Configure Project Settings (Optional for Playground Use)

Studio requires the base URL of the website you want to integrate with. You can select the base URL by choosing the corresponding environment and language from your CMS settings. Proper configuration ensures that compositions render accurately in your connected front-end.

In your Studio project, open the **Settings** tab.

- Under **Configurations**, select the **Environment** and **Language**.**Note:** You must [configure the environment](../developers/set-up-environments/add-an-environment.md), base URL, and language in your stack settings.
- The **Base URL** configured against the selected environment is displayed.
- Click **Save**.**Note:** This step can be skipped if you are using Studio as a playground. However, real projects with front-end integration require this configuration for proper rendering and deployment.

## Register Components and Set Up Design Tokens (Optional)

Components and tokens form the foundation of your design system within Studio. Registering them ensures your visual and interactive elements stay consistent across pages.

To use your own components and design tokens:

**Register components via CLI:** Add your own React components using the [Agentic CLI](./work-with-studio-cli.md).

- **Import designs and tokens:** Use the [Agentic CLI](./work-with-studio-cli.md) to create and register design tokens directly from your project.**Tip:** You can skip this step for prototyping with built-in components in Canvas.

**When to Use**:

- **Business users:** Use built-in components for layout and styling.
- **Developers:** Register reusable components and tokens for production-grade projects.

## Create a Composition

Compositions define page layouts in Studio. You can create **Linked Compositions** for dynamic templates or **Freeform Compositions** for standalone pages.

Click **New Composition** to create your composition.

- In the modal, select the [type of composition](./manage-a-composition.md#composition-types): **Linked** or **Freeform**.
- Select the **Composition Type**:**Linked Composition:** Best for dynamic templates that reuse the same layout.Select the **Content Type** and specify a `/blog/*` URL Slug.
- **Freeform Composition:** Ideal for standalone pages or specific sections.Provide a custom URL Path (e.g., `/marketing/launch`).
- Enter the **Name** of your composition.
- The **UID** auto-generates based on the name. You can customize it.
- Click **Create**.**Note:** You can convert a freeform composition to a linked composition later if needed.

## Use the Composition UID in Code (Optional for Playground Use)

The **Composition UID** connects Studio compositions to your front-end code via the `StudioComponent` React component.

Open the file that handles the composition’s URL path.

- Copy the **Composition UID** from the listing page.
- Use the UID to render the composition based on your [CSR](./set-up-studio-for-a-csr-project.md#render-the-composition) or [SSR](./set-up-studio-for-a-ssr-project.md#render-the-composition-in-your-page) setup.**Note:** This step is optional unless you have front-end access.

## Studio Migration and CLI Support

To streamline development workflows, Studio supports CLI-based migration of configurations and compositions across stacks. This is useful when promoting changes between environments, replicating setups, or testing new configurations. You can use the Agentic CLI to export efficiently, import, or clone Studio project settings and assets.

**Additional Resource**: For a detailed list of supported operations and usage instructions, refer to the [CLI-Supported Features for Export, Import, and Clone Operations](../developers/cli/cli-supported-features-for-export-import-and-clone-operations.md#studio) document.

## Design the Composition in Canvas

The **Canvas** is a visual drag-and-drop interface for building layouts without writing code.

Drag and drop components from the left panel.

- **Bind content:** Use the [Page Data](./page-data.md) tab and [link](./data-binding.md) a CMS entry. Then go to [Settings](./settings.md) to bind fields.
- **Apply design styles:** Use the [Design](./design.md) tab:**Design tokens** like color, spacing, typography
- **Component props** for variations

## Preview and Deploy (Optional for Playground Use)

Preview lets you test compositions before going live.

**Preview** pages in the Canvas to verify layout and content.

- Studio does not deploy by default. For live deployment:Ensure Studio is integrated into your front-end project.
- Use your hosting pipeline to deploy.

**Note:** Studio supports CSR and SSR frameworks.

Studio simplifies web page creation with reusable components, live content binding, and visual design tools. Once integrated with your front-end, your team can collaboratively build, preview, and publish responsive digital experiences faster and more consistently.

## Common questions

### Is Studio available to all users?
No. **Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

### Do I need a front-end project to use Studio?
No. **Note:** This step is optional if you plan to use Studio as a standalone playground for testing.

### Where are compositions stored by default?
By default, Studio stores compositions in a content type named **compositions**.

### Can I migrate Studio configurations and compositions across stacks?
Yes. Studio supports CLI-based migration of configurations and compositions across stacks using the Agentic CLI.