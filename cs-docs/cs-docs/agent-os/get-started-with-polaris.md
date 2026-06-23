---
title: "[Automations guides and connectors] - Get Started with Polaris | Contentstack"
description: Get Started with Polaris (Agent OS Early Access) in Contentstack CMS across Entry Editor, Assets Editor, and Visual Editor contexts.
url: https://www.contentstack.com/docs/agent-os/get-started-with-polaris
product: Contentstack
doc_type: getting-started
audience:
  - developers
  - content-managers
  - admins
version: early-access
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Get Started with Polaris | Contentstack

This page explains how to access and use Polaris (Agent OS) inside the Contentstack CMS, including how prompts are planned, previewed, and confirmed in the Entry Editor, Assets Editor, and Visual Editor. It is intended for Contentstack users with appropriate stack access who want to perform CMS actions using natural language prompts while staying within the CMS interface and permission model.

## Get Started with Polaris

**Note:** **Agent OS** is currently in **Early Access**. Features may change and limitations may apply. We recommend using it in non-production environments until general availability. For more information, contact [support](mailto:support@contentstack.com).

Polaris is an AI-powered co-pilot embedded directly within the Contentstack CMS. It allows you to use natural language prompts to perform real CMS actions, such as creating or updating [entries](../content-managers/author-content/about-entries.md) and [assets](../content-managers/author-content/about-assets.md), all while staying fully within the CMS interface and permission model.

This guide shows how to get started with Polaris across three common CMS contexts. For each context, we will detail how Polaris works, the types of prompts you can use, and how it safely executes actions using previews and confirmations.
- Entry Editor
- Assets Editor
- Visual Editor

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Admin](../developers/invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../developers/invite-users-and-assign-roles/types-of-roles.md#owner) access for the Contentstack stack
- Polaris plan for your organization

## Accessing Polaris

Let's start by logging into the [Contentstack account](https://www.contentstack.com/login/) and following the steps given below:
- Open the stack.
- Navigate to an [Entry](../content-managers/author-content/about-entries.md), or [Asset](../content-managers/author-content/about-assets.md), or [Visual Editor](/docs/content-managers/visual-builder/about-visual-builder) page.
- Click the **Polaris** icon to open the **Polaris** **panel** within the CMS interface.The Polaris panel opens as a side panel within the CMS UI. This panel is where you enter prompts and review planned actions and results.

## Using Polaris in the Entry Editor

This section shows how Polaris works when you are inside an **Entry Editor** page.

### Step 1: Open an entry context
- Navigate to your stack.
- Open a content type.
- Open an existing entry or create a new one.

Once the Entry Editor is open, Polaris automatically receives the entry context, including the content type schema and fields.

### Step 2: Enter a prompt

In the Polaris panel, enter a prompt related to the open entry.

**Prompt example:*** Improve the tone and clarity of this entry to make it more engaging.*

This prompt is interpreted by Polaris using:
- The currently open entry
- The existing field content
- The content type structure

### Step 3: Review planned actions

After you submit the prompt, Polaris enters a planning state and analyzes the request.
- Identifies the relevant entry fields
- Determines that the request requires updating content
- Prepares a write action for review

At this stage, no changes are made to the entry.

### Step 4: Review the preview

Because this is a write operation, Polaris displays a preview showing:
- The current content
- The proposed improved version of the content

This preview allows you to clearly see what will change before anything is applied.

**Note:** If a prompt is identified as a** read-only operation** (for example, asking for explanations, summaries, or insights without requesting updates), Polaris:
- Executes the request immediately
- Does **not** display a preview step
- Does **not** require confirmation
- Does **not** modify entries, assets, or pages

The result is shown directly in the Polaris panel.

### Step 5: Confirm the update

To proceed:
- Review the proposed changes.
- Click **Confirm** to apply the update.

If you click **Cancel**, Polaris stops execution and the entry remains unchanged.

### Step 6: Review the result

Once confirmed:
- The entry fields are updated with the improved content.
- The entry remains in draft state unless otherwise modified.
- Polaris displays a confirmation message in the panel.

You can continue working on the entry or enter additional prompts to refine the content further.

## Using Polaris in the Assets Editor

This section explains how Polaris works in the **Assets Editor**.

### Step 1: Open an asset context
- Navigate to your stack.
- Go to the **Assets** section.
- Open an existing asset in the Assets Editor.

Once the asset is open, Polaris automatically receives the asset context, including available metadata fields.

### Step 2: Enter a prompt

In the Polaris panel, enter the following prompt:

**Prompt example: ***Update metadata for this image to include SEO-friendly tags and publish the image to the development environment.*

This prompt is interpreted by Polaris using:
- The currently open asset
- Existing asset metadata
- The user’s permissions for asset updates

### Step 3: Polaris plans the action

After submitting the prompt, Polaris enters a planning state.

In the panel, Polaris:
- Identifies editable asset metadata fields
- Determines that the request requires updating metadata
- Prepares a write action for review

At this stage, no changes are applied.

### Step 4: Review the preview

Because this is a write operation, Polaris displays a preview showing:
- Existing asset metadata
- The proposed SEO-friendly tags to be added or updated

This preview allows you to verify the changes before execution.

**Note:** If a prompt is identified as a **read-only operation** (for example, asking for explanations, summaries, or insights without requesting updates), Polaris:
- Executes the request immediately
- Does **not** display a preview step
- Does **not** require confirmation
- Does **not** modify entries, assets, or pages

The result is shown directly in the Polaris panel.

### Step 5: Confirm the update

To apply the changes:
- Review the proposed metadata updates.
- Click **Confirm** to proceed.

If you click **Cancel**, Polaris stops execution and the asset metadata remains unchanged.

### Step 6: Review the result

Once confirmed:
- Polaris displays a confirmation message in the panel.
- The asset metadata is updated successfully.
- The updated values are visible in the Assets Editor.

You can continue refining the asset or enter additional prompts to improve metadata or accessibility.

## Using Polaris in the Visual Editor

This section shows how Polaris works within Visual Editor.

### Step 1: Open Visual Editor context
- Navigate to your stack.
- Open Visual Editor.
- Load a page or experience in preview mode.

Once the page loads, Polaris operates within the Visual Editor context.

### Step 2: Select a page element

In the Visual Editor canvas, click a content element on the page (for example, a text block or section).

Polaris identifies:
- The selected visual element
- The underlying entry and mapped field(s)

### Step 3: Enter a prompt

In the Polaris panel, enter the following prompt:

Prompt example: Shorten and sharpen the content on this page to improve readability.

Polaris interprets this prompt using:
- The selected Visual Editor element
- The mapped entry fields
- The existing content structure

### Step 4: Polaris plans the action

After submitting the prompt, Polaris enters a planning state.

In the panel, Polaris:
- Determines which entry fields are associated with the selected element
- Plans content updates scoped only to those fields
- Prepares a write action for review

No updates are applied at this stage.

### Step 5: Review the preview

Because this is a write operation, Polaris displays a preview showing:
- The current content
- The proposed shortened and refined version

This preview allows you to clearly compare changes before execution.

**Note:** If a prompt is identified as a read-only operation (for example, asking for explanations, summaries, or insights without requesting updates), Polaris:
- Executes the request immediately
- Does **not** display a preview step
- Does **not** require confirmation
- Does **not** modify entries, assets, or pages

The result is shown directly in the Polaris panel.

### Step 6: Confirm the update

To apply the changes:
- Review the proposed updates.
- Click **Confirm** to proceed.

If you click **Cancel**, Polaris stops execution and no changes are applied.

### Step 7: Review the result

Once confirmed:
- The underlying entry fields are updated.
- The Visual Editor preview reflects the updated content.
- Polaris displays a confirmation message in the panel.

You can continue refining the page or select another element and enter additional prompts.

## Common questions

### Does Polaris always require confirmation before making changes?
No. If a prompt is identified as a read-only operation, Polaris executes the request immediately and does **not** display a preview step or require confirmation.

### Where do I access Polaris in Contentstack?
Click the **Polaris** icon to open the **Polaris** **panel** within the CMS interface on an Entry, Asset, or Visual Editor page.

### What happens if I click Cancel during a write operation?
Polaris stops execution and the entry, asset metadata, or page remains unchanged.

### What contexts does this guide cover for using Polaris?
Entry Editor, Assets Editor, and Visual Editor.