---
title: "View Stack Details"
description: "Learn to access and manage stack details in Contentstack, including settings, API credentials, and last modified timestamps for improved control and audit tracking."
url: /headless-cms/view-stack-details
uid: blt19ad99935eabb064
---

# View Stack Details

## View Stack Details

Accessing stack details helps you manage configuration settings, authentication credentials (stack UID), and user permissions efficiently.

To view your stack details, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2.  In the **General** section, you can view or update the following details:
    -   **Name** of your stack
    -   The **description** provided for the stack
    -   The **Stack Owner Email** in read-only mode
3.  The **Appearance** section allows you to manage the visual identification of your stack. You can select a predefined color under **Stack Color** to visually identify your stack across the interface.

    **Note:** If no color is selected, a default color is applied.

4.  In the **API Credentials** section, view the stack **API Key** (stack UID) used for authentication and API requests.
5.  If you are the stack [Owner](https://www.contentstack.com/docs/headless-cms/types-of-roles#owner), you can [delete the stack](/docs/administration/organization-stacks#delete-a-stack) or [transfer ownership](/docs/headless-cms/transfer-stack-ownership). Other users can only [leave the stack](/docs/headless-cms/leave-a-stack). ![Stack Color in Stack Settings.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c4738688592bef4/69a402b9fbdb4daac37752eb/Stack_Color_in_Stack_Settings.png)

Accessing these settings allows you to manage stack configuration, authentication credentials, and user permissions effectively.

## View Last Modified Timestamp for Stack Settings

The last modified timestamp shows when the stack settings were most recently updated, helping you track changes and maintain auditability.

To view the last modified timestamp of a stack, perform the following steps:

1.  Click the “Stacks” icon in the top-left corner of the screen.
2.  This displays all accessible stack cards. Each card displays the **Last Modified** timestamp, which indicates when a user last made changes to the stack settings. ![Stack Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1b537808c2922a0/69a402b9f902d86aa729bb28/Stack_Dashboard.png)

**Note:** The last modified timestamp reflects changes to stack settings only. It does not update when content within the stack is changed.

## API Reference

To view stack details via API, refer to the [Get Single Stack](/docs/developers/apis/content-management-api?_gl=1*81q8tb*_gcl_au*MTE2NTg1NDE5Ny4xNzQ4NDE1MjI1#get-a-single-stack) request.
