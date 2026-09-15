---
title: "Edit an Entry"
description: "Easily update and manage your Contentstack entries. Learn editing, preview changes, and publish updates seamlessly with our guide."
url: /headless-cms/edit-an-entry
uid: blt2775dbe9e98c83e8
---

# Edit an Entry

## Edit an Entry

Editing an entry in Contentstack allows you to quickly update your content to reflect the latest information or changes.

When [Drafts and Auto Save](/docs/headless-cms/about-drafts-and-auto-save) is enabled, Contentstack automatically captures draft updates while you edit an entry. Changes are saved continuously in the background and synced with other active users viewing the same entry. Because changes are automatically saved as draft updates, you do not need to manually save after every modification. 

This feature also supports collaborative editing. When one user edits a field, that field is temporarily locked to prevent other users from modifying it at the same time.

To edit an [entry](/docs/headless-cms/about-entries), log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and select **Entries**.
2.  Locate the entry you want to modify and update the necessary fields in the entry.
3.  Click **Save** to create a new version of the entry, or click **Publish** to make the latest version live.
4.  Alternatively, to edit an entry from the Entries list page, click the **vertical ellipsis** in the **Actions** column, select **Edit**, make the changes, and click **Save** or **Publish**.

![Edit_an_Entry.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b3b7dc07d09aca0/69b8542c56a5aed20eb830b0/Edit_an_Entry.gif)

**Note:**

-   Use the **locale dropdown** to edit entries in different languages and save or publish changes as needed. To create new language versions, refer to the [Localize an Entry](/docs/headless-cms/localize-an-entry) guide.  
    For newly created entries that have not yet been saved (version 0), the locale cannot be changed until the entry is saved for the first time.
-   To edit entry variants for delivering personalized content to specific user groups, refer to our [Edit an Entry Variant](/docs/headless-cms/edit-an-entry-variant) document.
-   Use the **version dropdown** at the top-right to switch between [entry versions](/docs/headless-cms/understanding-entry-versions), compare changes, restore previous states, and save modifications as the latest version.
-   When you open an entry, the browser tab displays the entry title. This makes it easier to identify and switch between multiple open entries. If the entry has no title, the tab displays **Untitled Entry**. If the entry cannot be found, it displays **Entry Not Found**.

## Preview Entry Changes

Contentstack provides multiple features designed to simplify entry editing and ensure efficient content management. These tools include:

1.  [**Live Preview**](/docs/headless-cms/about-live-preview): See real-time updates to your content before saving or publishing.
2.  [**Visual Builder**](/docs/headless-cms/about-visual-editor): Edit page layouts in real-time directly on the preview of your website without developer assistance.
3.  [**Timeline**](/docs/headless-cms/about-timeline): Visualize and manage the publishing history and future updates. Preview scheduled updates and track publishing history.

**Additional Resource:** Within an entry that contains reference fields (or is referenced by other entries), you can click [View Reference Map](/docs/headless-cms/view-entry-references#understanding-the-reference-map) to visualize relationships.

## API Reference

To edit entries via API, refer to the [Update an entry](/docs/developers/apis/content-management-api/entries#update-an-entry) API request.
