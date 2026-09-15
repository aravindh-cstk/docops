---
title: "Add an Environment"
description: "Learn to add an Environment in Contentstack to manage content delivery and streamline content publishing."
url: /headless-cms/add-an-environment
uid: blt93def3b16cf5bf21
---

# Add an Environment

## Add an Environment

An [Environment](/docs/headless-cms/about-environments) is a content delivery destination where you publish and deploy your application or website content. It acts as a platform through which content is served to end users.

**Note:** Only the stack [Admin](/docs/headless-cms/types-of-roles#admin) and [Developer](/docs/headless-cms/types-of-roles#developer) can add an environment.

To add an Environment, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
2.  Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
3.  Click on **\+ New Environment.**

    ![New Environment Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fa53f02a3b351ed/67d7dca717c800ad4ccd96a6/1._Setup_Environments-Add-an-Environment_Navigation.png)

4.  In the **Create Environment** modal, enter the following details:
    1.  **Name:** Enter a name for the environment (e.g., staging).
    2.  **Environment Label Color:** Select a color to represent the environment.
    3.  **Base URLs:**
        -   Enter the base URL where content will be published (e.g., http://localhost:4000 or [http://www.my-site.com](https://www.my-site.com/)).
        -   The first Base URL is assigned to **English - United States** by default (non-editable).
        -   To add language-specific URLs, click **\+ Add Base URL** and select a language (e.g., Hindi, Tamil).

            **Note:** Each Base URL is linked to a specific [language](/docs/headless-cms/about-languages) and acts as a prefix for entry URLs.

    4.  Click **Create** to save the environment. ![Create Environment Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda647e087de8600b/67d7dca72476a982177d6a26/2._Setup_Environments-Add-an-Environment_Create-New-Environment-Modal.png)

To preview your published content, navigate to http://localhost:4000/{relative-url-of-the-published-entry} in your browser. Alternatively, hover over the “preview eye” icon in the **URL** field of your [published entries](/docs/headless-cms/publish-an-entry) to retrieve the URL.

![Preview Published Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef0141c81ff4affe/67d7dca7b0039271c5c21a86/3._Setup_Environments-Add-an-Environment_Create-URL.png)

**Note:** You can use [Webhooks](/docs/headless-cms/about-webhooks) to trigger deployments to multiple web servers each time you publish content to an environment.

## API Reference

To add an environment via API, refer to the [Add an Environment](/docs/developers/apis/content-management-api/environment#add-an-environment) request.
