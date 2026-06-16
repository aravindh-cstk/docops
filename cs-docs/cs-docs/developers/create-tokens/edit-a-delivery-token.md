---
title: "[Create Tokens] - Edit a Delivery Token"
description: Edit a Delivery Token in Contentstack by updating its details such as name, alias, description, branch, and publishing environment.
url: https://www.contentstack.com/docs/developers/create-tokens/edit-a-delivery-token
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Create Tokens] - Edit a Delivery Token

This page explains how to edit an existing Delivery Token in Contentstack, including what fields can be updated and who has permission to make changes. It is intended for stack users managing token configuration and should be used when you need to modify Delivery Token details to match changing project requirements.

## Edit a Delivery Token

In Contentstack, after [creating a Delivery Token](/docs/developers/create-tokens/create-a-delivery-token), you can modify its details such as name, alias, description, branch, and publishing environment to align with your project's changing requirements.

**Note:** Only the stack [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner), [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin), and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can edit Delivery Tokens.

To edit a Delivery Token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/developers/set-up-stack/about-stack), and perform the following steps:
- Click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Click **Tokens** in the settings panel.
- On the **Delivery Tokens** tab, click the Delivery Token you want to edit. Alternatively, click the vertical ellipsis in the **Actions** column and select **Edit**.**Tip:** If you are on the [Management Tokens](/docs/developers/create-tokens/about-management-tokens) tab, press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.
- Update the necessary fields. If a[Preview Token](/docs/developers/create-tokens/about-delivery-tokens#understanding-preview-tokens) has not been created, click **+ Create Preview Token** to generate one.
- Click **Save** to apply your changes.

**Note:** The value of a Delivery Token cannot be edited. If you need a different token string, you'll need to create a new Delivery Token.

## API Reference

To edit the details of a Delivery Token via API, refer to the [Update Delivery Token](/docs/developers/apis/content-management-api#update-delivery-token) request.

## Common questions

### Who can edit Delivery Tokens?
Only the stack Owner, Admin, and Developer can edit Delivery Tokens.

### Can I change the Delivery Token value (token string)?
No. The value of a Delivery Token cannot be edited; you must create a new Delivery Token.

### How do I switch to the Delivery Tokens tab using a keyboard shortcut?
Press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.

### Can I edit a Delivery Token using the API?
Yes. Refer to the [Update Delivery Token](/docs/developers/apis/content-management-api#update-delivery-token) request.