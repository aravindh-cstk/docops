---
title: "Global Full Page Location"
description: "Build full-page apps across stacks with Global UI Location in Contentstack. Ideal for dashboards, workflows, and integrated organization-level tools."
url: /developer-hub/global-full-page
uid: blt715c4c4c28ae4d20
---

# Global Full Page Location

## Global Full Page

The **Global Full Page UI Location** is a new interface option for app developers that enables building full-page applications at the **Organization level**. Unlike the **Stack Full Page UI Location**, which limits scope to a single stack, this global variant provides access to APIs and data across **multiple stacks and Contentstack products** within the organization.

This makes it ideal for developing **cross-stack applications** such as:

-   Admin dashboards
-   Workflow management tools
-   Content governance or review systems

## Example Use Cases

Let’s see some use cases to understand how Global Full Page UI location is useful:

1.  **Centralized Admin Dashboard for Content Management**  
    Build a unified admin interface to review and approve entries, manage workflows, and moderate comments across multiple stacks. Include features like bulk actions and cross-stack visibility to streamline content operations.
2.  **Embed Third-Party Services**  
    Develop a full-page app that integrates external tools such as **Confluence**, **Jira**, or **business intelligence dashboards** that are all accessible directly within the Contentstack platform.
3.  **Internal Intranet, Guides and Documentation Hub**Create a centralized knowledge base for content editors to easily access company-wide **best** **practices**, **editorial guidelines**, and **workflow documentation** across stacks.

## Setting up your Global Full Page App

### Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Developer Hub-enabled Organization with [Admin](/docs/administration/about-administration-roles) or Stack [Admin](/docs/headless-cms/types-of-roles#admin) permissions
-   [Node.js](https://nodejs.org/en/download/) (v20 or above) installed.
-   Contentstack CLI [installed](/docs/headless-cms/install-the-cli/v1) and configured.

### Create your App

The **Global Full Page UI Location** enables developers to build standalone, full-page apps at the **Organization** **level**, with access to APIs and data across **multiple** **stacks** and all **Contentstack** **products**. Unlike other UI locations tied to specific modules or single stacks, it offers greater flexibility for cross-stack development.

Installed apps appear in the left-hand navigation, ensuring seamless access across your organization.

Here is how you can add the Global Full Page location to your app:

**Via the Developer Hub Console:**To add the Global Full Page location to your app via the Developer Hub console, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:

1.  Click the **Developer Hub** icon in the left navigation panel.
2.  Select an application for which you want to add the Global Full Page location.
3.  Click the **UI Locations** tab. To set the App URL, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
    ![UI_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd320d58f58a4464a/68184482ae96e72088d3893c/UI_Screen.png)
4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.
5.  Navigate to the **UI Locations** tab to configure the Global Full Page UI location.
6.  Click the three vertical dots and then, click **\+ Add UI Location.**![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf93b6d37d9ad105c/68184482a6dd34245b226e2c/image4.png)
7.  On the resulting **Configuration** page, set up the configurations for Global Full Page location by providing details such as **Name**, **Path**, **Location Icon**, and **Description**. You can also enable the location by default using the **Enabled** toggle button.

    Properties that can be specified for this UI location:

    -   **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
    -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app#securing-ui-locations).
    -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
    -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

    You can mark any UI location as **mandatory** using the **Required** toggle. If the toggle is enabled, the location becomes mandatory to your app users and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.  

    ![Configuration_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc45d8f8ac42f7033/681844829b09250e54def651/Configuration_Screen.png)

    **Note:** The location icon file size must be less than **1 MB** and must be in **.svg** format.

    **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.

8.  Finally, click the **Save** button to save the Global Full Page location’s configuration details.

    You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app and will have the option to enable or disable the non-required UI locations.

    Navigate to the stack. In the left navigation, you will see the installed app in the Full Page UI location.![Output_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd3716c1d1bbf2cd/681844820307cd80b7edfa92/Output_Screen.png)


### Customize and Deploy

Refer to the [Marketplace App Boilerplate](/docs/developer-hub/marketplace-app-boilerplate) to learn more.
