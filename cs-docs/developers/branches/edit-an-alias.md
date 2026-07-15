---
title: "[Set Up Your Project] - Edit an Alias"
description: How to edit an alias to change its name, description, or target branch in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/edit-an-alias
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Edit an Alias

This page explains how to edit an alias in Contentstack Branches, including changing the alias details and reassigning it to a different target branch. It is intended for developers or stack administrators managing branches and aliases, and should be used after an alias has already been created and needs updates.

## Edit an Alias

Once created, you can edit an [alias](./about-aliases.md)to make changes, such as edit the name, description, or change the target branch.

To edit an alias, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon on the left navigation panel, select **Branches,** and click on the **Aliases** tab.
- Hover over the alias you want to edit, and click on the “Edit” icon (pencil) that appears at the extreme right.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd4b6c9e986ebe3b3/615a8198db34085ff954a01a/image.png)
- The **Edit Alias** form opens up where you can see the current target branch as well. Change the target branch as per your needs.  
**Note:** Once you edit and assign the alias to another branch, it will stop pointing to the existing target branch and instead point to the newly selected target branch.
- After making the necessary changes, click **Save** to save your changes.  
**Note:** An Alias can point only to a single branch at a time.![Edit_an_Alias.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte0332b40d13c7ce7/62192f316f0333490a0e6a80/Edit_an_Alias.png)

**Note:** The content from the new target branch can now be displayed on your website.

## Common questions

### Can I make an alias point to multiple branches?
No. **Note:** An Alias can point only to a single branch at a time.

### What happens when I change an alias to a different target branch?
**Note:** Once you edit and assign the alias to another branch, it will stop pointing to the existing target branch and instead point to the newly selected target branch.

### Where do I edit an alias in the Contentstack UI?
Click the “Settings” icon on the left navigation panel, select **Branches,** and click on the **Aliases** tab. Hover over the alias you want to edit, and click on the “Edit” icon (pencil) that appears at the extreme right.