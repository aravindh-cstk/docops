---
title: "Get Started with Polaris | Contentstack"
description: "Learn how to get started with Polaris, the AI-powered co-pilot in Contentstack CMS, to create, update, and manage content using natural language prompts."
url: /agent-os/get-started-with-polaris
uid: blt9e42a8381100ccd4
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
2.  Navigate to an [Entry](/docs/headless-cms/about-entries), or [Asset](/docs/headless-cms/about-assets), or [Visual Editor](/docs/headless-cms/about-visual-editor) page.
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

This section shows how Polaris works in the [Visual Editor](/docs/headless-cms/about-visual-editor), where it knows the open page, its language, the audience you are viewing, and the entries behind the page.

### Step 1: Open a page in the Visual Editor

1.  Navigate to your stack.
2.  Click **Visual Experience** in the top navigation to open the Visual Editor.
3.  Select the page you want to work on, and the language you want to view.
4.  Click the **Polaris** icon to open the Polaris panel.

The Polaris panel shows the open page as context above the message box (for example, **Page: Docs QA Campaign**). When you open another page in the Visual Editor, the context updates.

### Step 2: Ask about the page

Before you make changes, you can ask Polaris about the page you are viewing. This is a read-only request, so Polaris answers right away and changes nothing.

**Prompt example:** _Which page am I on, which language and audience am I viewing, and which entry does each section of this page come from?_

Polaris responds with:

-   The page and its language
-   The audience you are viewing, or the base experience if no audience is selected
-   The entries that make up the page, such as the page entry, header, footer, and linked content, each with a link to the entry

![Polaris lists the page, language, audience, and the entries behind the page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amca4c876ed15d9bac/648a99a2f934083e08bce4b9/polaris-ve-page-awareness.png)

### Step 3: Select a page element (optional)

To focus a request on one part of the page, click the element in the Visual Editor canvas (for example, a heading or a text block). The Polaris context shows the content type and field of the selected element (for example, **Campaign › Name**), and Polaris applies your request to that field.

If you don't select an element, Polaris uses the whole page as context.

### Step 4: Enter a prompt

In the Polaris panel, describe the change you want.

**Prompt example:** _Change only this text to 'Docs QA Winter Campaign'. Keep the page URL as it is._

Polaris interprets this prompt using:

-   The open page and the selected element
-   The entry and fields behind the page
-   The language and audience you are viewing

**Tip:** When you change a page's title, Polaris also updates the page URL to match the new title. Check the URL on the confirmation card before you click **Update**.

### Step 5: Review the confirmation card

Because this is a write operation, Polaris displays an **Update an entry** card before it changes anything. The card shows:

-   The **Content Type**, **Entry**, and **Locale** that Polaris will update
-   Each field that will change and its new value. If a value such as the URL changes, the card shows the old and new values.

![The Update an entry card with the content type, entry, locale, and new value](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am73bbf8701c20d101/d32746d9d04b3e52b060742d/polaris-ve-update-card.png)

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

-   Polaris saves the change to the entry and language shown on the card.
-   The Visual Editor preview shows the change without a page reload.
-   Polaris shows **Entry updated** and a summary of what was saved on the page.

Polaris saves the change as a new version of the entry. It doesn't publish the entry. To make the change live, publish the page from the Visual Editor or the entry.

![Entry updated, with the saved changes listed and the new title in the preview](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdb0039a7927cc1de/3f178390b610cc9e71c9989d/polaris-ve-entry-updated.png)

You can continue refining the page or select another element and enter additional prompts.

### Add a Language Version of a Page

Polaris can check whether a page exists in another language and add the missing version, including a page URL for that language.

**Prompt example:** _Does this page have a French version? If not, add a French version with a suitable French page URL and translated title and description._

Polaris shows a **Localize this entry?** card with the language, the translated fields, and the proposed URL. Click **Confirm** to save the new language version. If the Visual Editor is showing a different language, Polaris tells you the new version isn't visible on the current page yet and gives you a link to open it.

### Open Another Page

Polaris doesn't switch the page you are viewing. When you ask for another page or another language, Polaris replies with a link to open that page in the Visual Editor. Click the link to open it. The Polaris panel and your conversation stay open.

**Prompt example:** _Give me a link to open the French version of this page._

![Polaris replies with a link to open the French version of the page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama5c6561f2c7033e2/4c869d974b019b659f03d2fb/polaris-ve-open-link.png)

### Edit a Page for an Audience

If your stack uses [Personalize](/docs/personalize/about-personalize), you can view the page as an audience in the Visual Editor and ask Polaris to change the content for that audience. Polaris applies the change to that audience's variant of the entry and leaves the base page unchanged.

If the page has no variant for the audience you mention, Polaris tells you that the audience must be set up and linked to the page first. It doesn't change the base page instead.

**Prompt example:** _Adapt this page for new visitors: write a more welcoming headline, but only for that audience._
