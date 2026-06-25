---
title: "[Set Up Your Project] - Edit a Management Token"
description: Edit a Management Token in Contentstack by updating management token details after it is generated.
url: https://www.contentstack.com/docs/headless-cms/edit-a-management-token
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Edit a Management Token

This page explains how to edit an existing management token in Contentstack, including which token details can be updated and which cannot. It is intended for developers or administrators managing stack access and token settings, and should be used when you need to change a token’s metadata, scope, permissions, expiration, or rate limits.

## Edit a Management Token

In Contentstack, you can update the management token details after it is generated. However, you cannot modify the token value itself.

To edit an existing management token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon in the left navigation panel.
- Select **Tokens** from the list.
- Navigate to the **Management Tokens** tab and click a management token you want to edit.
- Update the necessary fields such as name, description, selected branches or aliases (scope), stack-level permissions (read/write), expiration date, or manage rate limits.

**Note:** Manage Rate Limits is a plan-based feature. For more details, contact our [support](mailto:support@contentstack.com) team.
- Click **Save** to apply the changes.

**Note:** You can update most details of a management token, but you can't view or change the token string after you create it. If you need a new token value, you must generate a new management token.

## Common questions

### Can I change the token value (token string) of an existing management token?
No. You cannot modify the token value itself, and you can't view or change the token string after you create it.

### What details can I update for a management token?
You can update fields such as name, description, selected branches or aliases (scope), stack-level permissions (read/write), expiration date, or manage rate limits.

### What should I do if I need a new token value?
If you need a new token value, you must generate a new management token.

### What if I don’t see the Manage Rate Limits option?
Manage Rate Limits is a plan-based feature. For more details, contact the [support](mailto:support@contentstack.com) team.