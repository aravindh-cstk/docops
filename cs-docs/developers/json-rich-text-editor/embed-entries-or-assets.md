---
title: "[JSON RTE] - Embed Entries or Assets"
description: Embed entries and assets directly within the JSON Rich Text Editor field, including inline, block, and hyperlink embed types.
url: https://www.contentstack.com/docs/headless-cms/embed-entries-or-assets
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Embed Entries or Assets

This page explains how to embed entries and assets inside Contentstack’s JSON Rich Text Editor (JSON RTE), including how embedded data behaves and how to add or edit embeds. It is intended for developers and content authors configuring or using JSON RTE fields when building structured, media-rich content.

## Embed Entries or Assets

Contentstack allows you to embed
  [entries](../../content-managers/author-content/about-entries.md) and
  [assets](../../content-managers/author-content/about-assets.md) directly within the
  [JSON Rich Text Editor](./about-json-rich-text-editor.md) field. These embedded items are dynamically updated whenever the source entry or asset is modified, ensuring your content stays in sync.

  The JSON RTE field lets you embed entries inline within the flow of text, as a separate content block, or as a dynamic hyperlink.

  **Note:** The embed feature is only available in the **Advanced** and **Custom** Rich Text Editor fields. **Basic RTE** does not support this option.

  When you embed entries or assets in the JSON RTE, the **data of the embedded items** is stored directly, not just a reference. As a result:
- **Updates to the original entries or assets** are **not reflected** automatically in the RTE content.
- The RTE field will continue to display the **original embedded data**.

  However, the **latest versions** of these embedded items can be accessed through the
  `_embedded_items` section.

  **Note:** The RTE field does not auto-replace old data with the updated versions from
  `_embedded_items`. It is the **user's responsibility** to update the content as needed.

## Embed Entries in the JSON RTE

  By embedding entries, you can dynamically insert structured content such as product listings, event details, or blog excerpts.

  In the **Custom** editor type, enable the **Embed Objects** option and select the content type from which you want to embed entries.

Here are some examples of how embedded entries can enhance content:
- **Inline Entries:** Embed dynamic values like working titles or links triggering modal pop-ups.
- **Block Entries:** Add rich elements like image carousels, product lists, or surveys as content blocks.
- **Hyperlinks:** Create links that reflect changes in the linked entries automatically.

  **Note:** When embedding localized entries, updates to localized versions must be applied manually. For example, if a "Blog" entry is linked within the "Home" entry in English and later localized to Arabic, you’ll need to manually update the Arabic "Home" entry to link to the Arabic version of the "Blog."

  To embed an entry within your JSON RTE, log in to your
  [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](../set-up-stack/about-stack.md), then click the **Entries** icon in the left navigation panel.
- Create a new entry or open an existing one containing a JSON RTE field.
- In the **JSON RTE field**, click the **Embed Entry** icon in the toolbar.
- In the **Select Entry** modal that appears, select the content type from which you want to embed an entry.
- From the list of available entries, select the entry.
- Choose the **Embed Type**:

      **Block Embed:** Embeds the entry as a standalone block.
- **Inline Embed:** Embeds the entry within a text flow.
- Click **Embed Selected Entry** to embed it into the RTE.

  **Note:** You can embed up to **100 entries** in a single RTE field.

## Embed Assets in the JSON RTE

  Embedding assets enriches your content with media that updates automatically when changed in the Asset Manager, ensuring consistency.

  Assets can be embedded by default into the JSON RTE field. In the **Custom** editor type, select the **Asset** option.

Here are some examples of how embedded assets can enhance content:
- **Displayable Component:** Images or media are automatically updated on the frontend when modified in the Asset Manager.
- **Downloadable Files:** Provide links to PDFs or other reference files for download.

  To embed an asset within your JSON RTE, log in to your
  [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](../set-up-stack/about-stack.md), then click the **Entries** icon in the left navigation panel.
- Create a new entry or open an existing one containing a JSON RTE field.
- In the **JSON RTE field**, click the **Asset** icon in the toolbar.
- From the dropdown menu, select **Choose from assets** or **Upload new asset(s)**.
- **Choose from Assets:**

      In the **Select Asset** modal, browse or search for the desired asset.
- Select the asset you wish to embed.
- **Upload New Asset(s):**

      In the **Upload Asset** modal, click the “+” icon to create a new folder if needed.
- Select files from your system (supported formats: images, PDFs, videos).
- Choose the **Embed Type**:

      **Block Embed:** Embeds the asset as a standalone block.
- **Inline Embed:** Embeds the asset within a text flow.
- Click **Add Selected Asset** to embed it into the RTE.

  **Note:** If an asset is deleted from the library later, any linked instances in the JSON output will become invalid.

### Editing Embedded Assets

You can edit an embedded asset directly within the JSON RTE:
- Hover over the embedded asset and click the **Edit** icon.
- The **Edit Image** modal appears with the following options:

      **Alt Text:** Provide alternative text for better accessibility and SEO.
- **Alignment:** Set the asset alignment (e.g., left, center, right).
- **Caption:** Add a descriptive caption beneath the asset.
- **Embed Link:** Insert a URL to hyperlink the asset.
- **Auto-adjust dimensions:** Automatically adjust dimensions based on the RTE width, or manually enter **Width** and **Height**.
- **Lock aspect ratio:** Maintain the original aspect ratio during resizing.
- **Open link in a new tab:** Enable or disable link target behavior.
- **Inline image:** Display the asset inline with the text.
- Click **Save**.

    **Note:** These edits affect only the current embed instance and do not modify the original asset in the Asset Manager.

  Embedding entries and assets within the JSON RTE enriches your content with dynamic and structured elements. By following this guide, you can seamlessly integrate entries and assets, whether as inline components, blocks, or hyperlinks.

## Common questions

### Why don’t updates to the original entry or asset show up automatically in the JSON RTE content?
When you embed entries or assets in the JSON RTE, the **data of the embedded items** is stored directly, not just a reference, so the RTE continues to display the **original embedded data**.

### Where can I find the latest versions of embedded items?
The **latest versions** of embedded items can be accessed through the `_embedded_items` section.

### How many entries can I embed in a single RTE field?
You can embed up to **100 entries** in a single RTE field.

### Do edits made in “Editing Embedded Assets” change the original asset?
No. These edits affect only the current embed instance and do not modify the original asset in the Asset Manager.

<!-- filename: json-rte-embed-entries-or-assets.md -->