---
title: "Edit a Delivery Token"
description: "Learn to edit delivery tokens in Contentstack: update name, alias, branch, and more to match evolving project needs."
url: /headless-cms/edit-a-delivery-token
uid: blt73dea919dfdd81a7
---

# Edit a Delivery Token

## Edit a Delivery Token

In Contentstack, after [creating a Delivery Token](/docs/headless-cms/create-a-delivery-token), you can modify its details such as name, alias, description, branch, and publishing environment to align with your project's changing requirements.

**Note:** Only the stack [Owner](/docs/headless-cms/types-of-roles#owner), [Admin](/docs/headless-cms/types-of-roles#admin), and [Developer](/docs/headless-cms/types-of-roles#developer) can edit Delivery Tokens.

To edit a Delivery Token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](/docs/headless-cms/about-stack), and perform the following steps:

1.  Click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2.  Click **Tokens** in the settings panel.
3.  On the **Delivery Tokens** tab, click the Delivery Token you want to edit. Alternatively, click the vertical ellipsis in the **Actions** column and select **Edit**.

    **Tip:** If you are on the [Management Tokens](/docs/headless-cms/about-management-tokens) tab, press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.

    ![Edit Delivery Token UI](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1cb85191149b060/67f66ee2301cf1c754983739/1._Edit-a-Delivery-Token_imag-1.png)

4.  Update the necessary fields. If a [Preview Token](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens) has not been created, click **\+ Create Preview Token** to generate one.
5.  Click **Save** to apply your changes.

    ![Save Token Changes](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1431781c70215627/67f66ee294d25d9aaa8672d0/2._Edit-a-delivery-token_img-2.png)


**Note:** The value of a Delivery Token cannot be edited. If you need a different token string, you'll need to create a new Delivery Token.

## API Reference

To edit the details of a Delivery Token via API, refer to the [Update Delivery Token](/docs/developers/apis/content-management-api/tokens#update-delivery-token) request.
