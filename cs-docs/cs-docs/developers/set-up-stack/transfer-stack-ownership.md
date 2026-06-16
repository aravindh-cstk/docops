---
title: "[Set Up Stack] - Transfer Stack Ownership"
description: Transfer Stack Ownership
url: https://www.contentstack.com/docs/developers/set-up-stack/transfer-stack-ownership
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

**Note:** Only the stack [owners](https://www.contentstack.com/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) can perform this action.

To transfer stack ownership, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for both Windows and Mac OS users).
- On the **Stack Settings** page, click **Transfer Ownership**.
- Enter the recipient email address and click **Transfer Ownership.**

**Note:** Make sure the recipient is an existing Contentstack user.

The recipient will receive an email request to accept the stack ownership. Once they accept, they become the new **Stack Owner**, and you will no longer have control over the stack and its content.

## API Reference

- To transfer stack ownership via API, refer to the [Transfer Ownership API](https://www.contentstack.com/docs/developers/apis/content-management-api#transfer-stack-ownership-to-other-users) request.
- To accept a stack ownership via API, refer to the [Accept Stack Ownership API](https://www.contentstack.com/docs/developers/apis/content-management-api#accept-stack-owned-by-other-user) request.

## Common questions

**Q: Who can transfer stack ownership?**  
A: Only the stack owners can perform this action.

**Q: Does the recipient need to have a Contentstack account already?**  
A: Yes. Make sure the recipient is an existing Contentstack user.

**Q: What happens after the transfer is accepted?**  
A: The recipient becomes the new Stack Owner, and you will no longer have control over the stack and its content.

**Q: Can stack ownership be transferred and accepted via API?**  
A: Yes. Use the Transfer Ownership API to transfer, and the Accept Stack Ownership API to accept.