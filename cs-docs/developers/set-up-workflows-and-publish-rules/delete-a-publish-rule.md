---
title: "[Set up Workflows and Publish Rules] - Delete a Publish Rule"
description: Documentation for deleting a publish rule in Contentstack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/delete-a-publish-rule
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Set up Workflows and Publish Rules] - Delete a Publish Rule

This page explains how to delete a Publish Rule in Contentstack, who is allowed to perform the deletion, what the impact is, and where to find the API request for deleting publish rules. It is intended for stack owners, admins, and developers who need to remove outdated publish rule configurations.

## Delete a Publish Rule

Deleting a [publish rule](./about-publish-rules.md) removes outdated configurations such as those tied to deprecated [branches](../branches/about-branches.md), [environments](../set-up-environments/about-environments.md), [content types](../create-content-types/about-content-types.md), or [languages](../multilingual-content/about-languages.md). This streamlines the workflow and reduces complexity.

**Note:** Only the stack [owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [admin](../invite-users-and-assign-roles/types-of-roles.md#admin), or [developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can delete a publish rule.

To delete a Publish Rule, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon in the left navigation panel, or press the shortcut key “S” (on both Windows and macOS).
- In the left panel, select [**Workflows**](./about-workflow-stages.md) and go to the **Publish Rules** tab.
- Click the vertical ellipsis icon in the **Actions** column of the desired publish rule and select **Delete**. Alternatively, open the publish rule and click **Delete** at the bottom of the page.![Delete option in Publish Rule actions menu](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt695573b630f8eaaa/682b33666a59be08c6dd4a85/1._Delete_option_Navigation.png)
- In the **Confirmation** modal that appears, click **Delete**.![Confirmation modal for deleting a Publish Rule](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteeb822d9e8e0650f/682b3366a4165a65c3adec1b/2._confirmation_popup.png)

**Warning:** Deleting a publish rule removes the associated constraints on content within the stack. This action is permanent and cannot be undone.

## API Reference

To delete a publish rule via API, refer to the [Delete Publish Rules](../../../api-docs/api-detail/content-management-api.md#delete-publish-rules) API request.

## Common questions

### Who can delete a publish rule?
Only the stack owner, admin, or developer can delete a publish rule.

### Can a deleted publish rule be restored?
No. Deleting a publish rule is permanent and cannot be undone.

### What happens to content constraints after deleting a publish rule?
Deleting a publish rule removes the associated constraints on content within the stack.

### Is there an API to delete publish rules?
Yes. Refer to the Delete Publish Rules API request in the Content Management API documentation.