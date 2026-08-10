---
title: "About Trash"
description: "Learn how to manage and restore deleted content in Contentstack using the Trash feature. Edit and bulk-restore items within a 14-day retention window."
url: /headless-cms/about-trash
---

# About Trash

## About Trash

The Trash feature in Contentstack retains deleted content for **14 days** before permanently removing it from the stack.

It prevents data loss by enabling users to recover, edit, and restore items in bulk, supporting a flexible and efficient content management workflow.

## Items Stored in Trash

When content is deleted from the stack, it is not immediately removed. Instead, the following items are moved to the Trash section:

-   [Content Types](/docs/headless-cms/about-content-types)
-   [Global Fields](/docs/headless-cms/about-global-field)
-   [Entries](/docs/headless-cms/about-entries)
-   [Assets](/docs/headless-cms/about-assets)
-   [Taxonomies](/docs/headless-cms/about-taxonomy)

Each item is listed into separate tabs within the Trash view, allowing you to locate specific content for review or restoration.

## Accessing the Trash

To access the Trash, login to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon, or press the shortcut key “S” (on both Windows and macOS).
2.  Select **Trash** in the **Settings** panel or press the shortcut key “Alt + T” on Windows and “Option + T” on macOS.
    
    ![Navigating to the Trash Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt256109b2740a6060/687514b43db20004741d6850/1._Trash_Navigation.png)
    
3.  Use the tabs to browse deleted content by type.
    
    ![Tabs in Trash](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta82182c4aaaf7cf2/687514cbb38bd1dd8678fc03/2._tabs_categorization.png)
    

**Note:** You can view or restore items in Trash only if you had access before they were deleted. Items remain restorable until the system or a user with appropriate [permissions](/docs/headless-cms/create-a-role#permissions-on-entries) removes them permanently.

## Managing Deleted Items

The Trash gives you flexibility in how you manage deleted content during the **14-day** retention period. You can restore content to its original location or edit it before restoring.

### Editable Items

You can edit deleted items such as **Entries**, **Assets** and **Global Fields** before restoring them. The restored version reflects the latest changes made in Trash.

**Note:** Editing and restoring these items increases their [version](/docs/headless-cms/understanding-entry-versions) number.

### Read-Only Items

Read-only access to **Content Types** and **Taxonomies** preserves configuration integrity while allowing you to view deleted structures.

## Bulk Restoration Support

Contentstack supports bulk restoration for scenarios involving related or grouped deletions. This reduces manual recovery efforts and increases operational efficiency.

Examples of bulk restoration include:

-   Restore a content type with its associated entries.
-   Restore a taxonomy with its linked content type.
-   Restore an asset folder with all its assets.

This capability is useful when managing structured content or large sets of assets.
