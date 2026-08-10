---
title: "Embed Entries or Assets"
description: "Streamline content management with Contentstack's JSON Rich Text Editor. Easily embed and update entries and assets for dynamic, SEO-friendly content."
url: /headless-cms/embed-entries-or-assets
---

# Embed Entries or Assets

## Embed Entries or Assets

Contentstack allows you to embed [entries](/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets/) directly within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field. These embedded items are dynamically updated whenever the source entry or asset is modified, ensuring your content stays in sync.

The JSON RTE field lets you embed entries inline within the flow of text, as a separate content block, or as a dynamic hyperlink.

**Note:** The embed feature is only available in the **Advanced** and **Custom** Rich Text Editor fields. **Basic RTE** does not support this option.

When you embed entries or assets in the JSON RTE, the **data of the embedded items** is stored directly, not just a reference. As a result:

-   **Updates to the original entries or assets** are **not reflected** automatically in the RTE content.
-   The RTE field will continue to display the **original embedded data**.

However, the **latest versions** of these embedded items can be accessed through the \_embedded\_items section.

**Note:** The RTE field does not auto-replace old data with the updated versions from \_embedded\_items. It is the **user's responsibility** to update the content as needed.

## Embed Entries in the JSON RTE

By embedding entries, you can dynamically insert structured content such as product listings, event details, or blog excerpts.

In the **Custom** editor type, enable the **Embed Objects** option and select the content type from which you want to embed entries.

![Enable embed entry in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac26000463553c87/6819d07a6c26f452e9e600db/1-enable-embedding-in-content-ty.gif)

Here are some examples of how embedded entries can enhance content:

1.  **Inline Entries:** Embed dynamic values like working titles or links triggering modal pop-ups.
2.  **Block Entries:** Add rich elements like image carousels, product lists, or surveys as content blocks.
3.  **Hyperlinks:** Create links that reflect changes in the linked entries automatically.

**Note:** When embedding localized entries, updates to localized versions must be applied manually. For example, if a "Blog" entry is linked within the "Home" entry in English and later localized to Arabic, you’ll need to manually update the Arabic "Home" entry to link to the Arabic version of the "Blog."

To embed an entry within your JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), then click the **Entries** icon.
2.  Create a new entry or open an existing one containing a JSON RTE field.
3.  In the **JSON RTE field**, click the **Embed Entry** icon in the toolbar.
4.  In the **Select Entry** modal that appears, select the content type from which you want to embed an entry.
5.  From the list of available entries, select the entry.
6.  Choose the **Embed Type**:
    1.  **Block Embed:** Embeds the entry as a standalone block.
    2.  **Inline Embed:** Embeds the entry within a text flow.
7.  Click **Embed Selected Entry** to embed it into the RTE.

**Note:** You can embed up to **100 entries** in a single RTE field.

## Embed Assets in the JSON RTE

Embedding assets enriches your content with media that updates automatically when changed in the Asset Manager, ensuring consistency.

Assets can be embedded by default into the JSON RTE field. In the **Custom** editor type, select the **Asset** option.

Here are some examples of how embedded assets can enhance content:

1.  **Displayable Component:** Images or media are automatically updated on the frontend when modified in the Asset Manager.
2.  **Downloadable Files:** Provide links to PDFs or other reference files for download.

To embed an asset within your JSON RTE, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to the desired [stack](/docs/headless-cms/about-stack), then click the **Entries** icon.
2.  Create a new entry or open an existing one containing a JSON RTE field.
3.  In the **JSON RTE field**, click the **Asset** icon in the toolbar.
4.  From the dropdown menu, select **Choose from assets** or **Upload new asset(s)**.
5.  **Choose from Assets:**
    -   In the **Select Asset** modal, browse or search for the desired asset.
    -   Select the asset you wish to embed.
6.  **Upload New Asset(s):**
    -   In the **Upload Asset** modal, click the “+” icon to create a new folder if needed.
    -   Select files from your system (supported formats: images, PDFs, videos).
7.  Choose the **Embed Type**:
    -   **Block Embed:** Embeds the asset as a standalone block.
    -   **Inline Embed:** Embeds the asset within a text flow.
8.  Click **Add Selected Asset** to embed it into the RTE.

**Note:** If an asset is deleted from the library later, any linked instances in the JSON output will become invalid.

### Editing Embedded Assets

You can edit an embedded asset directly within the JSON RTE:

1.  Hover over the embedded asset and click the **Edit** icon.
2.  The **Edit Image** modal appears with the following options:
    -   **Alt Text:** Provide alternative text for better accessibility and SEO.
    -   **Alignment:** Set the asset alignment (e.g., left, center, right).
    -   **Caption:** Add a descriptive caption beneath the asset.
    -   **Embed Link:** Insert a URL to hyperlink the asset.
    -   **Auto-adjust dimensions:** Automatically adjust dimensions based on the RTE width, or manually enter **Width** and **Height**.
    -   **Lock aspect ratio:** Maintain the original aspect ratio during resizing.
    -   **Open link in a new tab:** Enable or disable link target behavior.
    -   **Inline image:** Display the asset inline with the text.
3.  Click **Save**.
    
    ![Edit embedded asset in JSON RTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f02f4b9a8b380d1/6819d07ab55bf31e8007eaa2/2._edit_embedded_assets_walkthrough.gif)
    
    **Note:** These edits affect only the current embed instance and do not modify the original asset in the Asset Manager.
    

Embedding entries and assets within the JSON RTE enriches your content with dynamic and structured elements. By following this guide, you can seamlessly integrate entries and assets, whether as inline components, blocks, or hyperlinks.
