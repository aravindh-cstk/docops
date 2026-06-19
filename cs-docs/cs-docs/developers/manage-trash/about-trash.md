---
title: "[Manage Trash] - About Trash"
description: About the Trash feature in Contentstack, including retention period, what items are stored, how to access Trash, and how to manage and restore deleted items.
url: https://www.contentstack.com/docs/headless-cms/about-trash
product: Contentstack
doc_type: concept
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Manage Trash] - About Trash

This page explains how the Trash feature in Contentstack works, what types of deleted items it stores, how to access it, and how to manage or restore deleted content during the retention period. It is intended for users who need to recover or review deleted content and configurations within a stack.

## About Trash

The Trash feature in Contentstack retains deleted content for **14 days** before permanently removing it from the stack.

It prevents data loss by enabling users to recover, edit, and restore items in bulk, supporting a flexible and efficient content management workflow.

## Items Stored in Trash

When content is deleted from the stack, it is not immediately removed. Instead, the following items are moved to the Trash section:
- [Content Types](/docs/developers/create-content-types/about-content-types)
- [Global Fields](/docs/developers/global-field/about-global-field)
- [Entries](/docs/content-managers/working-with-entries/about-entries)
- [Assets](/docs/content-managers/working-with-assets/about-assets)
- [Taxonomies](/docs/developers/taxonomy/about-taxonomy)

Each item is listed into separate tabs within the Trash view, allowing you to locate specific content for review or restoration.

## Accessing the Trash

To access the Trash, login to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon, or press the shortcut key “S” (on both Windows and macOS).
- Select **Trash** in the **Settings** panel or press the shortcut key “Alt + T” on Windows and “Option + T” on macOS.
- Use the tabs to browse deleted content by type.

**Note:** You can view or restore items in Trash only if you had access before they were deleted. Items remain restorable until the system or a user with appropriate [permissions](/docs/developers/invite-users-and-assign-roles/create-a-role#permissions-on-entries) removes them permanently.

## Managing Deleted Items

The Trash gives you flexibility in how you manage deleted content during the **14-day** retention period. You can restore content to its original location or edit it before restoring.

### Editable Items

You can edit deleted items such as **Entries**, **Assets** and **Global Fields** before restoring them. The restored version reflects the latest changes made in Trash.

**Note:** Editing and restoring these items increases their [version](/docs/content-managers/entry-versions) number.

### Read-Only Items

Read-only access to **Content Types** and **Taxonomies** preserves configuration integrity while allowing you to view deleted structures.

## Bulk Restoration Support

Contentstack supports bulk restoration for scenarios involving related or grouped deletions. This reduces manual recovery efforts and increases operational efficiency.

Examples of bulk restoration include:
- Restore a content type with its associated entries.
- Restore a taxonomy with its linked content type.
- Restore an asset folder with all its assets.

This capability is useful when managing structured content or large sets of assets.

## Common questions

### How long does Contentstack keep deleted items in Trash?
The Trash feature in Contentstack retains deleted content for **14 days** before permanently removing it from the stack.

### What types of items can be restored from Trash?
The Trash can store and restore items such as **Content Types**, **Global Fields**, **Entries**, **Assets**, and **Taxonomies**.

### Can I edit items while they are in Trash?
You can edit deleted items such as **Entries**, **Assets** and **Global Fields** before restoring them, and the restored version reflects the latest changes made in Trash.

### Why can’t I see or restore an item in Trash?
You can view or restore items in Trash only if you had access before they were deleted; items remain restorable until the system or a user with appropriate permissions removes them permanently.