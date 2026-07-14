---
title: "[Studio] - Deploy a Composition"
description: How to deploy a composition in Contentstack Studio so it is available for preview, live editing, and front-end integration.
url: https://www.contentstack.com/docs/studio/deploy-a-composition
product: Contentstack Studio
doc_type: how-to
audience:
  - developers
  - content-authors
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Deploy a Composition

This page explains how to deploy a composition in Contentstack Studio after creating and configuring it, so it becomes available for preview, live editing, and integration with your front-end application. It is intended for users working in Studio who need to publish composition updates to a selected stack and environment.

## Deploy a Composition

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

After creating and configuring a composition in Studio, the next step is to deploy it. Deployment makes your page or section available for preview, live editing, and integration with your front-end application.

Publishing a composition ensures your changes are accessible in the selected stack and environment for review, staging, or live use.

**Note:** Save your changes before using the [Preview](./live-preview-and-visual-editing-with-studio.md) feature. Unsaved edits won’t appear in the landing page preview.

## Save vs Deploy

Understand the difference between saving and deploying:
- **Save**: Stores your current changes in draft mode.
- **Deploy**: Publishes your most recently saved version to your selected environment.

**Note:** Changes that are saved but not deployed will appear in live preview and not on your front end.

To deploy a composition, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- From the **App Switcher**, click **Studio**.
- Navigate to your project and select the composition you want to deploy.
- Click the **Deploy** button.
- You will be redirected to the publish page where you can see the composition entry and publish it.

  **Note:** Studio will only publish the UI changes. To view your data on the front end, you will have to manually publish the related entries.
- Select the **environment** where you want to publish, such as staging or production.

  **Note:** Publishing with references will also publish the symbols in that composition.

**Tip:** Studio includes live preview and visual editing by default, allowing you to view and modify updates in real time.

Deploying a composition ensures your updates are available where they matter, whether for review, live editing, or production. By following the structured deployment process, you maintain consistency across environments and streamline collaboration between developers and content teams.

**Note:** You must have a local project to deploy a composition. If you build a page only in the built-in canvas, you cannot deploy that composition.

## Common questions

### What is the difference between Save and Deploy in Studio?
Save stores your current changes in draft mode, while Deploy publishes your most recently saved version to your selected environment.

### Why don’t my changes appear on the front end after deploying?
Studio will only publish the UI changes. To view your data on the front end, you will have to manually publish the related entries.

### Do I need to save before using Preview?
Yes. Save your changes before using the Preview feature, because unsaved edits won’t appear in the landing page preview.

### Can I deploy a composition created only in the built-in canvas?
No. You must have a local project to deploy a composition; if you build a page only in the built-in canvas, you cannot deploy that composition.