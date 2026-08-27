---
title: "Delete a Delivery Token"
description: "Learn to delete delivery and preview tokens in Contentstack to enhance API security and manage tokens effectively."
url: /headless-cms/delete-a-delivery-token
uid: blt2ee03817d746647b
---

# Delete a Delivery Token

## Delete a Delivery Token

Contentstack allows you to remove unnecessary [Delivery Tokens](/docs/headless-cms/about-delivery-tokens) and [Preview Tokens](https://www.contentstack.com/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens) to improve security and organization.

**Warning:** Deleting a Delivery Token will end all sessions associated with it.

To delete a Delivery Token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2.  Click **Tokens** in the settings panel.
3.  On the **Delivery Tokens** tab, click the vertical ellipsis in the **Actions** column and select **Delete**.

    **Tip:** If you are on the [Management Tokens](/docs/headless-cms/about-management-tokens) tab, press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.

    ![Delete Delivery Token option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6716df3cd376bb03/67f670e316c10fa30f57ac3a/1._delete-a-delivery-token-1.navigation.png)

4.  Confirm your action in the **Delete Delivery Token** modal.

    ![Delete confirmation modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt019ea4b7774225dc/67f670e353db7b607d224f9d/2._delete-a-token-2.confirmation.png)


Once done, the Delivery Token and its associated Preview Token are deleted.

## Delete Only the Preview Token

To remove only the Preview Token without deleting the Delivery Token, perform the following steps:

1.  Select the Delivery Token associated with the Preview Token you want to delete.
2.  Click the **Delete** icon beside the Preview Token.
3.  Confirm your action in the **Delete Preview Token** modal.

## API Reference

-   To delete a Delivery Token via API, refer to the [Delete Delivery Token](/docs/developers/apis/content-management-api/tokens#delete-delivery-token) API request.
-   To delete a Preview Token via API, refer to the [Delete Preview Token](/docs/developers/apis/content-management-api/tokens#delete-preview-token) API request.
