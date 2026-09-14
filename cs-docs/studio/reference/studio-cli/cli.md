---
title: "Studio CLI Chapter Guide"
description: "The complete Studio CLI reference: install the csdx plugin, connect a project, and run every studio command for components, design tokens, responsive options, and sections."
url: /studio/cli
uid: blt598c31f33ff770bb
---

# Studio CLI Chapter Guide

## Studio CLI

The Studio CLI is a code-side tool that runs from your terminal and writes files into your project (or entries into your Studio project) directly, no Studio web app interaction needed. Use it when you want a scriptable, repeatable alternative to the web UI and the LLM skills: register components, sync designs from Figma, import design tokens, sync responsive breakpoints, and generate Sections.

The CLI is a plugin on Contentstack's main CLI (csdx). Every command is deterministic (the same command produces the same result) which makes it a good fit for continuous integration (CI) and one-time migrations.

## Installation

```
# Install the Contentstack CLI globally
npm install -g @contentstack/cli

# Install the Studio plugin
csdx plugins:install @contentstack/studio
```

## One-time setup

Three steps bind the CLI to your account, region, and Studio project.

### 1\. Pick your region

```
csdx config:set:region
```

Pick from the available list (North America, Europe, Asia-Pacific, etc.). The session targets that region for the rest of its commands.

### 2\. Log in

```
csdx login --oauth
```

Opens a browser for Open Authorization (OAuth). After signing in, pick the organization.

### 3\. Link to a Studio project

```
csdx studio:project:set
```

Interactive: picks from the projects your account can access. Or pass one directly:

```
csdx studio:project:set --project-id=<project-id>
```

Confirm which project is active with csdx studio:project:get.

## The full command set

Each command has its own page with usage, flags, and examples.

| Command | What it does |
| --- | --- |
| [studio:project:set](/docs/studio/cli-project-set) | Set the active Studio project for subsequent commands |
| [studio:project:get](/docs/studio/cli-project-get) | Show the currently active project and its details |
| [studio:component:add](/docs/studio/cli-component-add) | Generate a code component from a Figma design |
| [studio:component:register](/docs/studio/cli-component-register) | Register local component(s) with Studio by scanning a file or directory |
| [studio:component:sync](/docs/studio/cli-component-sync) | Make a code component available in the Figma plugin for mapping |
| [studio:design-token:add](/docs/studio/cli-design-token-add) | Fetch design tokens from Figma, or generate them by analyzing the project |
| [studio:design-token:config](/docs/studio/cli-design-token-config) | Update configuration values in the generated register-design-tokens file |
| [studio:responsive-options:sync](/docs/studio/cli-responsive-options-sync) | Sync responsive breakpoints from your registerBreakpoints function to the project |
| [studio:section:create](/docs/studio/cli-section-create) | Generate a Studio Section from a component + a connected content type |

## When to use the CLI vs the LLM skills

Both paths exist. Pick what fits your workflow.

| Use the CLI when | Use the LLM skills when |
| --- | --- |
| You prefer terminal commands and scripts | You prefer natural-language chat in your editor |
| You're automating in CI | You're working interactively on a single component |
| You're running a one-time migration | You want the agent to infer decisions and ask clarifying questions |
| Your team standardizes on Contentstack tooling | Your team uses different LLMs across different IDEs |

The CLI is more deterministic. The LLM skills are more conversational. Several commands have an equivalent that runs as an agent under [prompts/](https://studio-documentation.contentstackapps.com/prompts/).

The Section generator has the richest flow of the set (matching a component to a content type, adding wrapper sections, and making inner components composable), so start with [Generate a Section](/docs/studio/cli-section-create) if that's why you're here.

## Related

-   [Studio CLI in the component workflow](/docs/studio/studio-cli): the CLI seen from the "bring your own components" angle (register, Figma sync, tokens), with the typical component workflow.
-   [Registering components](/docs/studio/register-components), [Generate components from Figma](/docs/studio/generate-components-from-figma), [Design tokens](/docs/studio/configure-design-tokens-in-studio): the concepts the component/token commands operate on.
