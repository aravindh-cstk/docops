---
title: "Get Started with Polaris | Contentstack"
description: "Learn how to get started with Polaris, the AI-powered co-pilot in Contentstack CMS, to create, update, and manage content using natural language prompts."
url: /agent-os/get-started-with-polaris
---

# Get Started with Polaris | Contentstack

## Get Started with Polaris

**Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

Polaris is an AI-powered co-pilot embedded directly within the Contentstack CMS. It allows you to use natural language prompts to perform real CMS actions, such as creating or updating [entries](/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets), all while staying fully within the CMS interface and permission model.

This guide shows how to get started with Polaris across three common CMS contexts. For each context, we will detail how Polaris works, the types of prompts you can use, and how it safely executes actions using previews and confirmations.

-   Entry Editor
-   Assets Editor
-   Visual Editor

## Prerequisites

1.  [Contentstack account](https://www.contentstack.com/login)
2.  [Admin](/docs/headless-cms/types-of-roles#admin)/[Owner](/docs/headless-cms/types-of-roles#owner) access for the Contentstack stack
3.  Polaris plan for your organization

## Accessing Polaris

Let's start by logging into the [Contentstack account](https://www.contentstack.com/login/) and following the steps given below:

1.  Open the stack.
2.  Navigate to an [Entry](/docs/headless-cms/about-entries), or [Asset](/docs/headless-cms/about-assets), or [Visual Editor](/docs/content-managers/visual-editor/about-visual-editor) page.
3.  Click the **Polaris** icon to open the **Polaris** **panel** within the CMS interface.
    
    The Polaris panel opens as a side panel within the CMS UI. This panel is where you enter prompts and review planned actions and results.
    
    ![Entry_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a965efbde2aeda0/69a163888c618d824cbf756a/Entry_Page.png)

## Using Polaris in the Entry Editor

This section shows how Polaris works when you are inside an **Entry Editor** page.

### Step 1: Open an entry context

1.  Navigate to your stack.
2.  Open a content type.
3.  Open an existing entry or create a new one.

Once the Entry Editor is open, Polaris automatically receives the entry context, including the content type schema and fields.

### Step 2: Enter a prompt

In the Polaris panel, enter a prompt related to the open entry.

**Prompt example:** _Improve the tone and clarity of this entry to make it more engaging._

This prompt is interpreted by Polaris using:

-   The currently open entry
-   The existing field content
-   The content type structure

![Polaris_Entry_Prompt.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f0e6c6c77bcdfa0/69a16388b488fe51d7d15bce/Polaris_Entry_Prompt.png)

### Step 3: Review planned actions

After you submit the prompt, Polaris enters a planning state and analyzes the request.

-   Identifies the relevant entry fields
-   Determines that the request requires updating content
-   Prepares a write action for review

At this stage, no changes are made to the entry.

![Polaris_entry_next_move.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9f1c77e2cabc95b/6996dd54c9b89800084dcd93/Polaris_entry_next_move.png)

### Step 4: Review the preview

Because this is a write operation, Polaris displays a preview showing:

-   The current content
-   The proposed improved version of the content

This preview allows you to clearly see what will change before anything is applied.

**Note:** If a prompt is identified as a **read-only operation** (for example, asking for explanations, summaries, or insights without requesting updates), Polaris:

-   Executes the request immediately
-   Does **not** display a preview step
-   Does **not** require confirmation
-   Does **not** modify entries, assets, or pages

The result is shown directly in the Polaris panel.

### Step 5: Confirm the update

To proceed:

1.  Review the proposed changes.
2.  Click **Update** to apply the update.

If you click **Cancel**, Polaris stops execution and the entry remains unchanged.

![Entry_Confirmation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ae72d71e0a90e2d/69a16383ed0eb0a3b95d1617/Entry_Confirmation.png)

### Step 6: Review the result

Once confirmed:

-   The entry fields are updated with the improved content.
-   The entry remains in draft state unless otherwise modified.
-   Polaris displays a confirmation message in the panel.

You can continue working on the entry or enter additional prompts to refine the content further.

![Entry_Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt678d086f49fae5d8/69a163822f1cb9d6b662e387/Entry_Updated.png)

## Using Polaris in the Assets Editor

This section explains how Polaris works in the **Assets Editor**.

### Step 1: Open an asset context

1.  Navigate to your stack.
2.  Go to the **Assets** section.
3.  Open an existing asset in the Assets Editor.

Once the asset is open, Polaris automatically receives the asset context, including available metadata fields.

![Asset_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3368e1e5143cf1a7/69a16388716ab84e4d441f94/Asset_Page.png)

### Step 2: Enter a prompt

In the Polaris panel, enter the following prompt:

**Prompt example:** _Update metadata for this image to include SEO-friendly tags and publish the image to the development environment._

This prompt is interpreted by Polaris using:

-   The currently open asset
-   Existing asset metadata
-   The user’s permissions for asset updates

![Assets_Prompt.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9fe6e623b03eac99/69a164f5c10aad3e4ac829b5/Assets_Prompt.png)

### Step 3: Polaris plans the action

After submitting the prompt, Polaris enters a planning state.

In the panel, Polaris:

-   Identifies editable asset metadata fields
-   Determines that the request requires updating metadata
-   Prepares a write action for review

At this stage, no changes are applied.  

![Asset_Planning.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93966f7b8926333d/69a16382e0cee6f947390662/Asset_Planning.png)

### Step 4: Review the preview

Because this is a write operation, Polaris displays a preview showing:

-   Existing asset metadata
-   The proposed SEO-friendly tags to be added or updated

This preview allows you to verify the changes before execution.

**Note:** If a prompt is identified as a **read-only operation** (for example, asking for explanations, summaries, or insights without requesting updates), Polaris:

-   Executes the request immediately
-   Does **not** display a preview step
-   Does **not** require confirmation
-   Does **not** modify entries, assets, or pages

The result is shown directly in the Polaris panel.  

![Asset Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde345417edbd0e69/69a16383914d592219788f5f/Asset_Update.png)

### Step 5: Confirm the update

To apply the changes:

1.  Review the proposed metadata updates.
2.  Click **Publish** to proceed.

If you click **Cancel**, Polaris stops execution and the asset metadata remains unchanged.  

![Asset_Environment_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt791c5eb347b64771/69a165e0fbdb4df8df774dac/Asset_Environment_Update.png)

### Step 6: Review the result

Once confirmed:

-   Polaris displays a confirmation message in the panel.
-   The asset metadata is updated successfully.
-   The updated values are visible in the Assets Editor.

You can continue refining the asset or enter additional prompts to improve metadata or accessibility.  

![Asset_Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5555e462d68759e5/69a16383716ab84089441f90/Asset_Updated.png)

## Using Polaris in the Visual Editor

This section shows how Polaris works within Visual Editor.

### Step 1: Open Visual Editor context

1.  Navigate to your stack.
2.  Open Visual Editor.
3.  Load a page or experience in preview mode.  
    ![Visual_Editor.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8c8d38b8205a3a5/69a16388c461db85626a238f/Visual_Editor.png)

Once the page loads, Polaris operates within the Visual Editor context.

### Step 2: Select a page element

In the Visual Editor canvas, click a content element on the page (for example, a text block or section).

Polaris identifies:

-   The selected visual element
-   The underlying entry and mapped field(s)

### Step 3: Enter a prompt

In the Polaris panel, enter the following prompt:

Prompt example: Shorten and sharpen the content on this page to improve readability.

Polaris interprets this prompt using:

-   The selected Visual Editor element
-   The mapped entry fields
-   The existing content structure  
    ![Visual_Editor_Prompt.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt568ecf93588e5bb4/69a1638348e3e8b6920ba667/Visual_Editor_Prompt.png)

### Step 4: Polaris plans the action

After submitting the prompt, Polaris enters a planning state.

In the panel, Polaris:

-   Determines which entry fields are associated with the selected element
-   Plans content updates scoped only to those fields
-   Prepares a write action for review

No updates are applied at this stage.  

![Visual_Editor_Planning.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf521d42e731fb584/69a163828dcc72421a0581db/Visual_Editor_Planning.png)

### Step 5: Review the preview

Because this is a write operation, Polaris displays a preview showing:

-   The current content
-   The proposed shortened and refined version

This preview allows you to clearly compare changes before execution.

**Note:** If a prompt is identified as a read-only operation (for example, asking for explanations, summaries, or insights without requesting updates), Polaris:

-   Executes the request immediately
-   Does **not** display a preview step
-   Does **not** require confirmation
-   Does **not** modify entries, assets, or pages

The result is shown directly in the Polaris panel.

### Step 6: Confirm the update

To apply the changes:

1.  Review the proposed updates.
2.  Click **Update** to proceed.

If you click **Cancel**, Polaris stops execution and no changes are applied.

### Step 7: Review the result

Once confirmed:

-   The underlying entry fields are updated.
-   The Visual Editor preview reflects the updated content.
-   Polaris displays a confirmation message in the panel.

You can continue refining the page or select another element and enter additional prompts.

![Visual_Editor_Updated.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd69ce5cb132092fc/69a16383c10aad5a9fc829a9/Visual_Editor_Updated.png)
