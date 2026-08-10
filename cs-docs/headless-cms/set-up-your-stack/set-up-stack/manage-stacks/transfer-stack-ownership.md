---
title: "Transfer Stack Ownership"
description: "Easily transfer stack ownership in Contentstack during team changes with our step-by-step guide. Only current owners can initiate the transfer."
url: /headless-cms/transfer-stack-ownership
---

# Transfer Stack Ownership

## Transfer Stack Ownership

You can transfer the stack ownership during role transitions, team restructuring, or organizational changes.

**Note:**

-   Only the stack [owners](https://www.contentstack.com/docs/headless-cms/types-of-roles#owner) can perform this action.
-   If a stack owner is removed from the organization, stack ownership is automatically transferred to the user with organization Owner role.
-   If the former stack owner email ID has been deactivated but has not yet been removed from the stack or organization, an user with organization Owner can remove that user to gain stack access.
-   If no available user can complete the transfer, contact Contentstack [support](mailto:support@contentstack.com) to request an ownership transfer.

To transfer stack ownership, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac OS users).
2.  On the **Stack Settings** page, click **Transfer Ownership**.
    
    ![Transfer Ownership option in Contentstack settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteab5d652f2acd1c3/67bf1d8c959e4ea6c3e47c2f/Setup-a-Stack-Transfer-stack-Ownership-Transfer-Ownership-button.png)
    
3.  Enter the recipient email address and click **Transfer Ownership.**
    
    ![Enter email for stack ownership transfer in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb37bbfb07f5d41f0/67bf1ddd809db01f0fb4feb8/setup-a-stack-transfer-stack-ownership-email-field.png)
    

**Note:** Make sure the recipient is an existing Contentstack user.

The recipient will receive an email request to accept the stack ownership. Once they accept, they become the new **Stack Owner**, and you will no longer have control over the stack and its content.

## API Reference

-   To transfer stack ownership via API, refer to the [Transfer Ownership API](https://www.contentstack.com/docs/developers/apis/content-management-api/stacks#transfer-stack-ownership-to-other-users) request.
-   To accept a stack ownership via API, refer to the [Accept Stack Ownership API](https://www.contentstack.com/docs/developers/apis/content-management-api/stacks#accept-stack-owned-by-other-user) request.
