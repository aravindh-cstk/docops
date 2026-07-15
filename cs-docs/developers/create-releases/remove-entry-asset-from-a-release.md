---
title: "[Set Up Your Project] - Remove Entry/Asset from a Release"
description: Remove item(s) (entries/assets) from a Release in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/remove-entry-asset-from-a-release
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Remove Entry/Asset from a Release

This page explains how to remove entry/asset item(s) from a Release in Contentstack. It is intended for users managing Releases in a stack and should be used when you need to remove items from a Release before deploying it.

## Remove Entry/Asset from a Release

**Note**: You can only remove item(s) from a Release if you haven’t deployed the Release.

To remove item(s) from a Release, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md), and click on the “Releases” icon on the left navigation panel. This opens the **Releases** page where you can see a list of existing Releases in the stack. You can also use the shortcut key “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.
- Click on the Release from which you want to remove the item(s).
- Hover over the entry/asset and click on the “Delete” icon that appears on the extreme right.![remove_entry_asset_from_a_release_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltec751ac51d324053/60b3c70fcda43e2520906d4e/remove_entry_asset_from_a_release_1_highlighted.png)
- Click on **Remove** to confirm your action.

Alternatively, you can also select the entry/asset and click on the **Delete** button on the top of the page.

## API Reference

Here are the links to the API requests related to this action:
- [Remove an item from a Release](../../../api-docs/api-detail/content-management-api.md#remove-an-item-from-a-release)
- [Delete multiple items from a Release](../../../api-docs/api-detail/content-management-api.md#delete-multiple-items-from-a-release)

## Common questions

### Can I remove items from a Release after it has been deployed?
No. **Note**: You can only remove item(s) from a Release if you haven’t deployed the Release.

### Is there a keyboard shortcut to open Releases?
Yes. You can use “alt + R” for Windows OS users, and “option + R” for Mac OS users to access Releases.

### Can I remove multiple items at once from a Release?
Yes. You can select the entry/asset and click on the **Delete** button on the top of the page, and there is also an API link for [Delete multiple items from a Release](../../../api-docs/api-detail/content-management-api.md#delete-multiple-items-from-a-release).