---
title: "Delete a Management Token"
description: "Learn how to delete a management token in Contentstack and revoke its access permanently."
url: /headless-cms/delete-a-management-token
---

# Delete a Management Token

## Delete a Management Token

You can delete a management token in Contentstack if it's no longer required. Deleting a token is permanent and will immediately terminate all sessions using that token. Only authorized users, such as the stack [Owner](/docs/headless-cms/types-of-roles#owner) or [Admin](/docs/headless-cms/types-of-roles#admin), must perform this action with caution.

To delete a management token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon.
2.  Select **Tokens** in the list.
3.  Navigate to the **Management Tokens** tab to view the list of all the existing management tokens for the stack.
4.  Click the vertical ellipses next to the token you wish to delete and click **Delete**.
    
    ![Delete option from management token list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32411f11cee0e6bb/67f5c0ec61ba905952f364a7/Delete_Management_Token.png)
    
5.  In the **Delete Management Token** confirmation modal, enter the exact name of the token and click **Delete**.
    
    ![Confirmation modal to delete management token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c755f609ea51ee6/67f5c0eb8b8c703e01bfb2e1/Delete_Management_Token_Confirmation.png)
    

**Warning:** Deleting a management token **instantly revokes all permissions and sessions** associated with it. Ensure that no active operations depend on the token before deletion.
