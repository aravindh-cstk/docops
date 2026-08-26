---
title: "Studio CLI"
description: "Learn how to use the Studio CLI to register components, sync designs from Figma, and import design tokens directly from your terminal."
url: /studio/studio-cli
uid: blt670599b17e5b19bd
---

# Studio CLI

## Studio CLI

The Studio CLI is a code-side tool for registering components, syncing them between Figma and code, and importing design tokens. It runs from your terminal and writes files into your project directly, with no Studio web app interaction needed.

Use it when you want a scriptable, repeatable component registration flow alongside (or instead of) hand-written registerComponent calls.

## Installation

The CLI is a plugin on Contentstack's main CLI (csdx).

```
# Install the Contentstack CLI globally
npm install -g @contentstack/cli

# Install the Studio plugin
csdx plugins:install @contentstack/studio
```

## One-time setup

Three commands to bind the CLI to your account, region, and Studio project.

### 1\. Pick your region

```
csdx config:set:region
```

Pick from the available list (North America, Europe, Asia-Pacific, etc.). The CLI session targets that region for the rest of its commands.

### 2\. Log in

```
csdx login --oauth
```

Opens a browser for OAuth. After signing in, pick the organisation.

### 3\. Link to a Studio project

```
csdx studio:project:set
```

Interactive, picks from the projects your account has access to. Or directly:

```
csdx studio:project:set --project-id=<project-id>
```

Find the project ID in Studio, under your project, Settings, General.

## The full command set

| Command | What it does |
| --- | --- |
| studio:project:set | Connect the CLI to a Studio project |
| studio:component:add | Generate a code component from a Figma design |
| studio:component:register | Register a local component with Studio |
| studio:component:sync | Sync existing code components to the Figma plugin |
| studio:design-token:add | Import or auto-generate design tokens |

## Generate a component from Figma

```
csdx studio:component:add --component-id=<figma-component-id>
```

Reads the Figma component design, detects your project's styling method (Tailwind, CSS Modules, styled-components, vanilla CSS), and writes a React component file + style file + metadata into your project's component directory.

To override the detected styling method, respond to the CLI's interactive prompt: _"Use CSS Modules instead of Tailwind."_ Alternatively, pass your preference via the \--styling flag: \--styling=css-modules.

This is the CLI equivalent of the [Figma generate components](/docs/studio/generate-components-from-figma) flow, same outcome, runs from terminal instead of an LLM chat.

## Register a component you've already written

A single file:

```
csdx studio:component:register --component-path=./src/components/Navbar.tsx
```

A whole directory:

```
csdx studio:component:register --component-dir=./src/components/
```

Scans the file or directory for valid React components, infers their prop schema (TypeScript types, PropTypes, JSDoc), generates the registerComponent calls, and adds them to your Studio components registry. After running, the components appear in Studio's palette under **Registered Components**.

This is the CLI equivalent of the [register-component](/docs/studio/register-components) LLM skill, useful when you prefer terminal commands over chat-driven flows.

## Sync components to the Figma plugin

```
csdx studio:component:sync --component-path=./src/components/HeroBanner.tsx
```

Makes the component available in the Figma plugin's mapping dropdown, so designers can then link Figma layers to this code component. Use this when your team works Figma-first and you want designers to see what components are available before they design.

## Import or generate design tokens

### From a Figma design token ID

```
csdx studio:design-token:add --design-token-id=<id>
```

Fetches tokens from Figma and writes configuration files in your project.

### Auto-detect from your project files

```
csdx studio:design-token:add
```

Without an ID, the CLI scans for token sources:

1.  Looks for CSS custom properties (:root { --color-primary: ... })
2.  Looks for JS/TS token definitions (e.g. tokens.ts)
3.  Generates a register-design-tokens.ts file
4.  Prompts for the design token access level:
5.  dynamic: Only CMS-linked values. Example output: { "color-primary": "var(--cms-color)" }, editors see only values driven by the linked entry.
6.  tokens: Design tokens + CMS values. Example output: { "color-primary": "#0066ff", "color-secondary": "#6b7280" }, editors see your registered design tokens alongside CMS-linked values.
7.  arbitrary: Custom values + tokens + CMS values. Example output: { "color-primary": "#0066ff", "custom-bg": "#fafafa" }, editors can apply any design property available in the Studio canvas, including values not in your token registry.

Import the generated file into your app's entry point (main.tsx, index.tsx, etc.) so the tokens register at boot.

To update existing tokens, re-run the same command, and the CLI auto-refreshes.

## Migration support

The CLI also supports moving Studio configurations between stacks:

-   Export project settings and compositions
-   Import to a target stack
-   Clone setups between environments (e.g. dev to staging to production)

See [CLI-Supported Features for Export, Import, and Clone Operations](/docs/headless-cms/cli-supported-features-for-export-import-and-clone-operations/v1) for the full list of supported entity types.

## When to use the CLI vs the LLM skills

Both paths exist; pick what fits your workflow.

| Use the CLI when… | Use the LLM skills when… |
| --- | --- |
| You prefer terminal commands and scripts | You prefer natural-language chat in your editor |
| You're automating component registration in CI | You're working interactively on a single component |
| You're running a one-time migration | You want the agent to infer decisions and ask clarifying questions |
| Your team standardises on Contentstack tooling | Your team uses different LLMs across different IDEs |

The CLI is more deterministic (the same command produces the same output). The LLM skills are more conversational (the agent can ask "TypeScript or JS?" and adapt).

## Typical workflow

```
Install CLI + plugin
        ↓
Set region → Login → Set project
        ↓
Sync existing components to Figma plugin           (one-time)
        ↓
Add components from Figma designs                   (per component)
        ↓
Register components in Studio                       (per component or per directory)
        ↓
Import/generate design tokens                       (initial setup + refreshes)
```

For greenfield projects, the order is roughly: register tokens, sync to Figma, designers design components, CLI generates code, CLI registers.

For projects with an existing component library, the order is: register tokens, register existing components, optionally sync to Figma for design alignment.

## See also

-   [Registering components](/docs/studio/register-components): the underlying API the CLI calls
-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): what the token files generated by the CLI look like
-   [Figma generate components](/docs/studio/generate-components-from-figma): the agentic equivalent of studio:component:add
-   The register-component, import-design-tokens, and figma-generate-components LLM skills under prompts/: alternatives to the CLI for chat-driven workflows
