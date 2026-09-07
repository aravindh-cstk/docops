---
title: "Create a Delivery Token"
description: "Unlock seamless access to secure published content with Contentstack's Delivery Tokens for websites and apps. Perfect for developers managing environments."
url: /headless-cms/create-a-delivery-token
uid: bltf3c25c7528b48628
---

# Create a Delivery Token

## Create a Delivery Token

[Delivery Tokens](/docs/headless-cms/about-delivery-tokens) enable secure access and display of published content to external applications, such as websites and mobile apps. This is done by fetching content from specific [branches](/docs/headless-cms/about-branches) and publishing [environments](/docs/headless-cms/about-environments) within your [stack](/docs/headless-cms/about-stack).

**Note:** Only the stack [Owner](/docs/headless-cms/types-of-roles#owner), [Admin](/docs/headless-cms/types-of-roles#admin), and [Developer](/docs/headless-cms/types-of-roles#developer) roles have permission to create Delivery Tokens.

To create a Delivery Token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2.  Click **Tokens** in the settings panel.
3.  Click **\+ Delivery Token** to create a new token.

    **Tip:** If you are on the [Management Tokens](/docs/headless-cms/about-management-tokens) tab, you can press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.

    ![Create Delivery Token UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11e5a85189e4c3de/67f66c214de86407df8ae954/1._Create_Delivery_Token-navigation.png)

4.  Enter a **Name** (required) and a **Description** (optional) for the Delivery Token.
5.  In the **Scope** section, choose the **Branches** or [**Aliases**](/docs/headless-cms/about-aliases) you want to associate with this token.
6.  Select the **Publishing Environments** for which you want to generate the Delivery Token.
7.  (Optional) Enable the **Create Preview Token** toggle to generate a [Preview Token](/docs/headless-cms/about-delivery-tokens#about-preview-tokens) associated with this Delivery Token.
8.  Click **Generate Token**.

A new token appears in both the Delivery Token and Preview Token fields. You can copy the tokens using the “Click to copy” icon.

## Create a Preview Token for an Existing Delivery Token

To create a Preview Token for an existing Delivery Token:

1.  Select a Delivery Token from the **Tokens** page.
2.  Click **\+ Create Preview Token** at the bottom of the page.

    ![Create Preview Token UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78a6581b9ce11367/67f66c203202bbe889ac7b2c/3._Create-Delivery-Token_Create-Preview-Token.png)


**Note:** A Delivery Token is configured for a specific environment and can only retrieve content from that environment.

## API Reference

-   To create a Delivery Token via API, refer to the [Create Delivery Token](/docs/developers/apis/content-management-api/tokens#create-delivery-token) API request.
-   To create a Preview Token via API, refer to the [Create Preview Token](/docs/developers/apis/content-management-api/tokens#create-preview-token) API request.
