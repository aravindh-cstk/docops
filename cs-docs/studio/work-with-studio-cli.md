---
title: "[Studio] - Work with the Studio CLI"
description: Step-by-step guide to integrate Figma designs into Studio using the CLI.
url: https://www.contentstack.com/docs/studio/work-with-studio-cli
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - designers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Work with the Studio CLI

This page explains how to use the Contentstack CLI with the Studio plugin to connect to a Studio project, sync and register components, and import components and design tokens from Figma. It is intended for developers and designers working with Studio projects who need CLI-based workflows for integrating Figma designs and managing reusable components.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio is a low-code platform that allows developers and designers to build modern websites using Contentstack-managed content and reusable design components. While the UI provides drag-and-drop composition, the CLI supports tasks such as sync and register components and importing design tokens, ensuring those reusable components are available in code-based workflows.

This step-by-step guide explains how to integrate Figma designs into Studio using the CLI.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- [Install Node.js in your local machine](https://nodejs.org/en/download/)
- [Install Contentstack CLI](../developers/cli/install-the-cli.md)
- Access to Studio for your organization
- [Install Studio Figma plugin](./work-with-studio-figma-plugin.md) within your Figma account

## Overview of the CLI Workflow
The following steps provide an overview of the CLI workflow for importing Figma designs into Studio.
- Install the Contentstack CLI and Studio plugin to enable Studio-specific commands in your local environment.
- Set the region to route API requests to the correct Contentstack environment.
- Log in to authenticate your CLI session and access your organization and projects.
- Set the project to link your CLI session with a specific Studio workspace.
- Sync existing components to make your local code components available in the Figma plugin.
- Add components and design tokens to generate reusable UI elements and import styles from Figma.
- Register components to make them available for reuse in Studio’s visual editor.

## Available CLI Commands
The workflow uses the following CLI commands to import Figma designs into Studio.:
- `Project:` Connect your CLI to a specific Studio project. It ensures that all component and design token actions are linked to the correct project and retrieves details of the currently selected project when needed.
- `Sync:` Makes existing code components in your current Studio project available to the Figma plugin for mapping.
- `Add:` Generates a code component from a Figma design and adds it locally. It is used after getting the CLI command from the plugin.
- `Register:` Adds a local or custom component to Studio for reuse.

## Install Studio CLI
To work with Studio using the CLI, install the Contentstack CLI and then add the Studio plugin.

Run the following commands in your terminal:

```
$ npm i -g @contentstack/cli
```

After installing the Contentstack CLI, install the Studio plugin:

```
$ csdx plugins:install @contentstack/studio
```

Once the installation is complete, you can start using Studio-specific CLI commands to manage Studio projects and workflows.

## Set the Region
The `set:region` command configures your CLI session to a specific Contentstack region.

This ensures that all authentication, API calls, and Studio plugin interactions are directed to the correct environment (for example, North America, Europe, or Asia-Pacific).

**Note:** Region selection is a default Contentstack CLI behavior and must be completed before you log in.
- Use the following command to select a region:
```
csdx config:set:region
```
- The CLI displays a list of available Contentstack regions. Use the arrow keys to navigate and press **Enter** to select one.
- After you select a region, the CLI displays the API endpoints specific to that region.

## Login
The `login` command authenticates your CLI session, allowing secure access to stacks, projects, and components in Studio.
- To initiate login, run the following command in your terminal:
```
csdx login --oauth
```
- The CLI attempts to redirect you to the Contentstack application in your default browser.**Note:** If the browser does not open automatically, a URL will be generated in the terminal. Copy and paste the URL into your browser.
- Select the organization you want to work with.
- After selecting the organization, return to your terminal. A confirmation message will indicate successful authentication.

## Set the Project
The `project` command links your CLI session to a specific Studio project, ensuring that all component and design token actions are executed in the correct project environment.
- To set a project, run the following command:
```
csdx studio:project:set
```
- Use the arrow keys to navigate and press **Enter** to select one.
- Alternatively, you can set a project directly using its ID:
```
csdx studio:project:set --project-id=
```

Once the project is set, you can start using component and design token commands in your CLI session.

**Additional Resource:** To get the project ID of your project, refer to the [Create a Project](./create-a-project.md) document.

## Sync your Existing Components
The `sync` command makes your existing local code components in your Studio project available to the Figma plugin for mapping.

To sync your existing code components with the Figma plugin, run the following command in your terminal:

```
csdx studio:component:sync --component-path=
```

Once executed, the CLI registers and maps the specified component internally. The component appears in the plugin’s mapping dropdown, allowing designers to link Figma layers to corresponding code components.

**Additional Resource:**To map components using the Figma plugin, refer to the [Work with the Studio Figma Plugin](./work-with-studio-figma-plugin.md) documentation.

**Options**
- `<path-to-file>` – The full path to a single component file. Required.

**Example:** To sync the HeroBanner.tsx component:

```
csdx studio:component:sync --component-path=./components/HeroBanner.tsx;
```

## Add
The `add` command integrates components from Figma into your local project. It supports two subcommands:
- `add component:` Generates reusable UI components (structure, styles, metadata) from Figma designs.
- `add design-tokens:` Imports visual properties such as color, typography, and effects from Figma and saves them as configuration files.

### Add Component
To add a Figma component to your Studio project, perform the following steps:
- Get the CLI command for the selected Figma frame from the plugin and run it:
```
csdx studio:component:add --component-id=
```
**Tip:** You can run this command without keeping Studio open.
- The CLI analyzes your project and identifies a styling method (e.g., Tailwind CSS or CSS Modules).**Tip:** To override the detected styling method, include your preference in the prompt. Example: “Use CSS Modules instead of Tailwind.”
- Optionally, provide a prompt to customize layout or behavior. Example: “Add a carousel with auto-scroll or “Use a two-column layout.”
- The CLI generates a complete component package including:A React component file
- A style file (based on the detected or specified styling method)
- A metadata file
- If not satisfied with the output, press **Y** to regenerate with a new prompt. Press **N** to accept the output.

The generated files are saved directly to your local project directory. Register and reuse the components in Studio or use the code independently.

### Add Design Tokens
The `design-token:add` command retrieves and registers all design elements such as colors, typography, and effects associated with a specific Figma component.

To add the design tokens to your project, perform the following steps:
- Run the following command, replacing the placeholder:
```
csdx studio:design-token:add --design-token-id=
```
**Additional Resource:** To learn how to retrieve the design token ID, refer to the [Work with Studio Figma Plugin](./work-with-studio-figma-plugin.md) documentation.
- The CLI fetches the design tokens and generates configuration files in your project directory.
- Import the generated design token registry files (register-design-tokens) into your main codebase. This allows Studio to detect and apply them across your project.

Once registered, the design tokens appear in the **Design** tab of Studio for visual editing.

**Tip:** To update existing design tokens, run the same command again. The CLI auto-refreshes any previously registered tokens.

## Register
The `register` command adds your custom local UI components to Studio, making them available for reuse in the visual editor.

You can register either a single component file or all components in a directory, depending on your use case.
- **Register a Single Component File:**Run the following command to register a specific component:

```
csdx studio:component:register --component-path=
```

**Example:**

```
csdx studio:component:register --component-path=./src/components/Navbar.tsx
```

- **Register All Components in a Directory:**Run the following command to register multiple components at once:

```
csdx studio:component:register --component-dir=
```

**Example:**

```
csdx studio:component:register --component-dir=./src/components/
```

Once executed, the CLI scans the provided file or folder for valid component declarations (e.g., `export default`, `type`, or `interface`) and registers them with Studio.

After registration, the components appear in Studio’s visual editor for drag-and-drop reuse.

## Common questions

### Do I need to set the region before logging in?
Yes. The page notes that region selection is a default Contentstack CLI behavior and must be completed before you log in.

### What is the difference between sync and register?
`sync` makes existing local code components available to the Figma plugin for mapping, while `register` adds local or custom components to Studio for reuse in the visual editor.

### Can I register multiple components at once?
Yes. You can register all components in a directory using `csdx studio:component:register --component-dir=`.

### How do I update design tokens after changes in Figma?
Run the same `csdx studio:design-token:add --design-token-id=` command again; the page states the CLI auto-refreshes any previously registered tokens.