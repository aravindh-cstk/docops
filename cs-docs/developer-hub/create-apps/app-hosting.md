---
title: "App Hosting"
description: "Effortlessly fetch or create new projects in Launch for deployment, and even customize your app URL for integration with third-party web hosting providers."
url: /developer-hub/app-hosting
uid: blt3a56055f6d89b583
---

# App Hosting

## App Hosting in Developer Hub

[UI Locations](/docs/developer-hub/about-ui-locations) are integral to the customization of the Contentstack that allow you to enhance the Contentstack user interface with custom-built elements, providing an enriched user experience. They refer to specific places within the Contentstack dashboard where custom UI components can be embedded. To ensure these components operate seamlessly, their corresponding UI code must be hosted properly.

The App Hosting feature in Contentstack enables you to host your app via Contentstack’s [Launch](/docs/launch#launch-overview) platform or an external web hosting provider.

Contentstack Developer Hub offers two hosting options to cater to your specific needs:

-   Custom Hosting
-   Hosting with Launch

Let’s take a look at the benefits, scenarios and procedure of using the two App Hosting options for hosting the user interface code associated with UI Locations within the Contentstack Developer Hub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in the Developer Hub

## What You Will Learn

-   How to choose between Custom Hosting and Hosting with Launch.

-   How to configure Custom Hosting with your own app URL.

-   How to host your app with a Launch project.

-   How to disconnect a Launch project or open it in Launch.


## Custom Hosting

A self-managed solution if you require hosting on your own servers or need specific configurations.

**Why should you choose Custom Hosting?**

-   Complete control over the hosting environment.
-   Organizations with specific hosting policies and resources.

**Scenarios Custom Hosting is ideal for**

-   Complex UI Locations that need specialized server setups.
-   Custom implementations with dedicated infrastructure.
-   Organizations with specific hosting policies and resources.

### Steps for Custom Hosting

Log in to your [Contentstack account](https://www.contentstack.com/login), [create an app](/docs/developer-hub/creating-an-app-in-developer-hub/) in the Developer Hub and follow the steps below to host your app:

1.  Navigate to the app you created. In the left navigation panel, you will find the icon for **Developer Hub**. Click the icon to navigate to Developer Hub.
2.  You will be directed to the app dashboard where you will see all apps created so far. Select an app to get started.
3.  In the left navigation panel, click the **Hosting** tab.  
    ![Hosting_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt80484a4e2b1ee5d5/69008571fbd2d5fb00bb0473/Hosting_Tab.png)
4.  In the **Hosting Type**, select **Custom Hosting**.
5.  In the **Custom Hosting** option, enter the **App URL** where your app is hosted.![Custom_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt70f292d077e2401c/690088956e50037055d2b297/Custom_Hosting.png)
6.  Click the **Save** button.

## Hosting with Launch

Managed hosting solution recommended for those who wish to leverage Contentstack’s infrastructure for ease of deployment.

**Why should you choose Hosting with Launch?**

-   Quick and easy setup, allowing for immediate deployment.
-   A managed service that reduces the overhead of self-hosting.
-   Automatic scaling and security provided by Contentstack.

**Scenarios Hosting with Launch is ideal for**

-   Standard UI Locations that do not require complex backend logic.
-   Developers who prioritize ease of maintenance and support.
-   Quick integration within the Contentstack ecosystem.

### Steps for Hosting with Launch

1.  Navigate to the app you created. In the left navigation panel, you will find the icon for **Developer Hub**. Click the icon to navigate to Developer Hub.
2.  You will be directed to the app dashboard where you will see all apps created so far. Select an app to get started.
3.  In the left navigation panel, click the **Hosting** tab.  
    ![Hosting_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt80484a4e2b1ee5d5/69008571fbd2d5fb00bb0473/Hosting_Tab.png)
4.  In the Hosting Type, select **Hosting with Launch**.  
    ![Hosting_with_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt733255d1f59845b9/69008571ef3c8724310e3d99/Hosting_with_Launch.png)
5.  Select a **Launch Project** from the dropdown. This will fetch all the projects deployed in your Launch platform.![Select_Create_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc790d7ab63c3e1a8/690085713a6db2633de47d27/Select_Create_Project.png)

    To create a new project in Launch, follow the steps below:

    1.  Click **+ Create a New Project**.

        **Additional Resource:** Launch allows you to create a project by importing the website code from GitHub or by uploading a zip file. Please refer to the [Create a Project using GitHub](/docs/launch/import-project-using-github/) and [Create a Project using File Upload](/docs/launch/import-project-using-file-upload/) documentation for detailed step by step.

    2.  You will see a pop-up to fetch the project from GitHub/Bitbucket or upload a zip file. Click **Next** to proceed further.  
        ![Create_New_Project_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta72e68442dcd343c/6900857100b0546ce8f041ca/Create_New_Project_Button.png)

        **Note:** When deploying an app via **Launch** in **Developer Hub**, the default output directory is ./build. Depending on the selected **Framework** **Preset**, this may automatically update (for example, to ./dist). Users can always **override** or **modify** the output directory as needed to match their framework’s build configuration.


    Once the project is successfully selected or created, you will see **Status** for the project. **Live** status shows successful deployment of the project whereas **Failed** status denotes that the deployment failed.

    ![Live_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c8abba42010193f/69008571f845e47b58d25d5c/Live_Project.png)
6.  Click the **Save** button.

#### Disconnecting Launch Project and Opening in Launch

After saving, you will see a three dots icon besides the **Select Launch Project** dropdown. You can **Disconnect Launch Project** or **Open in Launch**.

![Disconnect.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a47f0a3c9cd25a3/690085714114f63b38db715e/Disconnect.png)

1.  To disconnect, click the three dots icon besides the **Select Launch Project** dropdown and then click the **Disconnect Launch Project**.
2.  In the pop-up. Click **Yes, Disconnect** to disconnect the project.  
    ![Disconnect_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b485b4f021bda74/69008571aeaf65c96324ef40/Disconnect_Project.png)
3.  To open a project in launch, click **Open in Launch**. You are redirected to the Launch projects landing page as shown below:  
    ![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt812542724b72a46b/69008571cdded84f4bd15fb6/Output.png)

With App Hosting, Contentstack empowers developers with the flexibility to host UI code for UI Locations in a manner that best suits their project requirements. Select the hosting option that best facilitates the deployment and optimal functioning of your custom UI components within the Contentstack platform.
