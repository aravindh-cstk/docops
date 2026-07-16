---
title: "[Set Up Stack] - Transfer Stack Ownership"
description: Transfer Stack Ownership
url: https://www.contentstack.com/docs/headless-cms/transfer-stack-ownership
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Stack] - Transfer Stack Ownership

This page explains how to transfer ownership of a Contentstack stack, including prerequisites and the steps to complete the transfer in the UI, plus related API references. It is intended for stack owners and administrators handling role transitions, team restructuring, or organizational changes.

## Transfer Stack Ownership

You can transfer the stack ownership during role transitions, team restructuring, or organizational changes.

**Note:** Only the stack [owners](../invite-users-and-assign-roles/types-of-roles.md#owner) can perform this action.

To transfer stack ownership, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](./about-stack.md) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for both Windows and Mac OS users).
- On the **Stack Settings** page, click **Transfer Ownership**.![Transfer Ownership option in Contentstack settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteab5d652f2acd1c3/67bf1d8c959e4ea6c3e47c2f/Setup-a-Stack-Transfer-stack-Ownership-Transfer-Ownership-button.png)
- Enter the recipient email address and click **Transfer Ownership.**![Enter email for stack ownership transfer in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb37bbfb07f5d41f0/67bf1ddd809db01f0fb4feb8/setup-a-stack-transfer-stack-ownership-email-field.png)

**Note:** Make sure the recipient is an existing Contentstack user.

The recipient will receive an email request to accept the stack ownership. Once they accept, they become the new **Stack Owner**, and you will no longer have control over the stack and its content.

## API Reference

- To transfer stack ownership via API, refer to the [Transfer Ownership API](../../../api-docs/api-detail/content-management-api.md#transfer-stack-ownership-to-other-users) request.
- To accept a stack ownership via API, refer to the [Accept Stack Ownership API](../../../api-docs/api-detail/content-management-api.md#accept-stack-owned-by-other-user) request.

## Common questions

**Q: Who can transfer stack ownership?**  
A: Only the stack owners can perform this action.

**Q: Does the recipient need to have a Contentstack account already?**  
A: Yes. Make sure the recipient is an existing Contentstack user.

**Q: What happens after the transfer is accepted?**  
A: The recipient becomes the new Stack Owner, and you will no longer have control over the stack and its content.

**Q: Can stack ownership be transferred and accepted via API?**  
A: Yes. Use the Transfer Ownership API to transfer, and the Accept Stack Ownership API to accept.