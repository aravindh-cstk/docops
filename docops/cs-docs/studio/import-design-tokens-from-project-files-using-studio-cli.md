---
title: "[Studio] - Import Design Tokens from Project Files Using Studio CLI"
description: Use the Studio CLI to import design tokens from local project files into a Studio project and configure editor access levels.
url: https://www.contentstack.com/docs/studio/import-design-tokens-from-project-files-using-studio-cli
product: Contentstack Studio
doc_type: how-to
audience:
  - developers
  - administrators
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Import Design Tokens from Project Files Using Studio CLI

This page explains how to use the Studio CLI to import design tokens from your local project files into a Studio project, including how to choose an access level that controls what design options content editors can use. It is intended for developers setting up Studio projects and integrating project styling tokens into the Studio canvas.

## Import Design Tokens from Project Files Using Studio CLI

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Use the Studio CLI to import design tokens from your local project files into your Studio project. This allows content editors to work with your custom design components in the Studio canvas. You can also control the design options editors can access by choosing an appropriate access level during the import process.

## Prerequisites

Before you begin, ensure you have the following:
- [Contentstack account](https://www.contentstack.com/login/)
- [Node.js installed on your local machine](https://nodejs.org/en)
- [**Contentstack CLI package**](../developers/cli/install-the-cli.md)
- Access to Studio for your organization.

To import design tokens from your project file to the Studio project, perform the following steps:
- Open the project file and run the following command in your terminal:
```
csdx studio:design-token:add
```
- The Studio CLI prompts you to include Studio’s [default design tokens](./styling-your-compositions.md#default-tokens-in-studio). Choose one of the following options:Enter **Y** to include Studio’s default design tokens along with the tokens in your project files.
- Enter **N** to import only the tokens defined in your project files.
- Select the level of design token access for content editors. The available options are:
  - `**dynamic**`**:** Allows content editors to use only the design options that come from the entries linked to the Studio project. They cannot access or apply custom colors or other styling available in the Studio editing canvas.
  - `**tokens**`: Includes access to the dynamic components and the custom design tokens added through the CLI.
  - `**arbitrary**`: Extends access beyond dynamic and CLI-added tokens, allowing content editors to use any design properties available in the Studio canvas. This includes selecting custom colors, styles, or visual adjustments.
- After you select an access level, the Studio CLI scans your project for design token sources such as JavaScript/TypeScript files and CSS files (such as  `global.css`). It extracts tokens defined using CSS custom properties or JSON/JS structures and generates a `register-design-tokens.ts` file in your project directory.![Design token generation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt089d7eb16de04e1e/692191beaa13cae10b3b7610/1._registered_design_tokens.png)
- Import the generated file to your project’s main file (for example `main.tsx`, `index.tsx`).![How to Import Registered Design Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted53678556b3b0ce/692191bede28bcc09d4e5b77/2._import_design_tokens.png)

Once imported, the design tokens become available inside the Studio canvas, ensuring your components use the same design definitions extracted from your project.

## Common questions

**How do I make Studio include its default design tokens during import?**  
Enter **Y** when the Studio CLI prompts you to include Studio’s default design tokens.

**What access level should I choose if editors must only use linked-entry design options?**  
Choose `**dynamic**`.

**What file does the Studio CLI generate after scanning for design tokens?**  
It generates a `register-design-tokens.ts` file in your project directory.

**Where do I import the generated design tokens file?**  
Import the generated file to your project’s main file (for example `main.tsx`, `index.tsx`).

<!-- filename: studio-import-design-tokens-from-project-files-using-studio-cli.md -->