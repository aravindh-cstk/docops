---
title: "Build an App with Advanced Settings"
description: "Learn how to configure Advanced Settings in Contentstack to integrate external APIs securely using Contentstack Developer Hub.
"
url: /developer-hub/build-an-app-with-advanced-settings
---

# Build an App with Advanced Settings

## Build an App with Advanced Settings

Building Marketplace apps for Contentstack often requires connecting to external APIs such as AI models, analytics tools, webhooks, or SaaS integrations. Managing these integrations securely and efficiently can be challenging when handling API keys, endpoints, and customer-specific values. Advanced Settings in Developer Hub simplifies this process by allowing developers to manage configurations, credentials, and API interactions directly within Contentstack without maintaining a custom backend.

## What You Will Learn

-   How to register a Standard app in Developer Hub with App Configuration and Entry Sidebar UI locations.
    
-   How to configure Advanced Settings Mappings and Rewrites for an external API.
    
-   How to call an external API securely from an app using the App SDK .api() method.
    
-   How to install and test the app in a stack.
    

### When to use Advanced Settings:

-   The app integrates with third-party APIs.
-   You want per-customer configuration.
-   You want to avoid managing backend infrastructure.

**Additional Resource:** Refer to the [Introduction to Advanced Settings](/docs/developer-hub/introduction-to-advanced-settings) document to learn more.

This guide will take you through building an application using Advanced Settings.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login) with access to Developer Hub
-   [Peekalink account](https://www.peekalink.io/) for API key
-   Understanding [Contentstack App Development](/docs/developer-hub)
-   Understanding of [Contentstack App SDK](https://github.com/contentstack/app-sdk-docs)
-   Understanding of [Server Configuration](/docs/developer-hub/app-config-location)
-   Marketplace App Boilerplate [GitHub](https://github.com/contentstack/marketplace-app-boilerplate.git) Repository

## Quick Web Lookup

The Quick Web Lookup is an app that uses an entry sidebar widget to quickly preview links in an entry.

The app uses [Peekalink API](https://www.peekalink.io/) to fetch metadata like the page title, description, and preview image. This enriches content creation by automating data entry and ensuring consistency.

## Steps

1.  [Create an App](#create-an-app)
2.  [Register the App in Developer Hub](#register-the-app-in-developer-hub)
3.  [Configure Advanced Settings](#configure-advanced-settings)
4.  [Calling External APIs](#calling-external-apis)

### Create an App

The best place to start a new project is by cloning Marketplace App Boilerplate. It includes necessary components for rapid app development.

Clone the [Marketplace Boilerplate](https://github.com/contentstack/marketplace-app-boilerplate.git) repository and run the following commands:

```
npm install
npm run dev
```

### Register the App in Developer Hub

To register an app in Developer Hub, perform the steps given below:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
2.  On the Dashboard page, click the **Developer Hub** icon.
3.  Click the **+ New App** button.
4.  Contentstack supports two types of Apps based on two categories: [Standard and Machine to Machine](/docs/developer-hub/introduction-to-contentstack-applications). Here, we will use the **Standard** application.
    
    **Additional Resource:** Refer to the [Creating an App in Developer Hub](/docs/developer-hub/creating-an-app-in-developer-hub) documentation to know more about **Standard** and **Machine to Machine** app categories.
    
5.  In the **Create Standard App** modal, select the **App Type**, and give a suitable app **Name** (Quick Web Lookup) and an optional **Description** as shown below: ![Create_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt221595105fdee051/690a03d94f0dee6fb8efbea0/Create_App.png)
6.  Click **Create**. You are redirected to the **UI Locations** landing page.![UI_Locations_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdbaaa4597cd51f87/690a03d9d3150529396abe1d/UI_Locations_Tab.png)
7.  Navigate back to the UI Locations tab, click the vertical ellipses in the App Configuration UI location, then click the **\+ Add UI Location** button to add as needed. ![Add_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c8db3ffeb3f2841/690a0527249d496c8de05c78/Add_UI_Location.png)
    -   **App Configuration:** Enter /app-configurationas the **Path**, then click **Save** to apply and store your configuration. This setup displays a dedicated app configuration page (after app installation) where you can manage app configuration.
        
        **Note:** The **App Configuration** UI location lets you add a **Peekalink API** key for the Quick Web Lookup app.
        
        ![App_Config_Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3df86a8627d15f23/690a03d8edbe82113bb501e4/App_Config_Screen.png)
    -   **Entry Sidebar:** Enter a **Name** and use /entry-sidebar as the **Path**, then click **Save** to apply and store your configuration. This setup ensures your app appears in the sidebar of the entry editor, allowing you to perform actions or view information related to an entry.
        
        **Note:** The Entry Sidebar UI location allows you to view the app in the Entry Sidebar of an entry.
        
        ![Entry_Sidebar_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89f3f40f64d046dc/690a03d9c1ae535009f89a05/Entry_Sidebar_Location.png)
8.  Navigate to the **Hosting** tab. You will see [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application.
    
    Enter the **App URL** and click **Save** to apply and confirm your hosting configuration. While running the application locally, select Custom Hosting and use your local app URL (for example, http://localhost:3000).
    
    After development, you can host your application using Contentstack [Launch](/docs/launch).
    
    ![Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1235ad67d0567c86/690a03d858d2e52534c2de11/Hosting.png)

### Configure Advanced Settings

Advanced Settings comprises three features: **Variables**, **Mappings**, and **Rewrites**.

**Additional Resource:** Refer to the [Introduction to Advanced Settings](/docs/developer-hub/introduction-to-advanced-settings) document to learn more.

**Configure Mappings:** For the Quick Web Lookup app, configure a new mapping, API\_KEY which will be linked to peekalink\_api\_key stored in the server configuration. Later, we will use the same key to store the configuration in the next step.

![Mappings_Value.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta02de3c757419857/690a03d94f0deed415efbea4/Mappings_Value.png)

**Configure Rewrites:** Configure a Rewrite rule which calls the peekalink\_api\_key, prefixed with **/preview** as shown below: 

![Rewrites_Value.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb7d8502eeec35382/690a03da5ba74c09048699db/Rewrites_Value.png)

### Calling External APIs

1.  **Setup configuration**
    
    Quick Web Lookup application needs peekalink\_api\_key to be configured earlier to be stored in server configuration. Let’s design an app configuration screen where the user can enter his peekalink api key.
    
    **Additional Resource:** Refer to [this](https://github.com/contentstack/quick-web-lookup/blob/main/src/containers/AppConfiguration/AppConfiguration.tsx) document for the reference code of peekalink\_api\_key.
    
    The following code sets up the App Configuration UI with the Peekalink API key:
    
    ```
    import React, { useRef } from 'react';
    // useInstallationData hook will help to get and set server configurations.
    // Server configurations are required when you need installation specific sensitive data
    import { useInstallationData } from '../../common/hooks/useInstallationData';
    
    const AppConfiguration: React.FC = () => {
     const { installationData, setInstallationData } = useInstallationData();
     const peekalinkApiKeyInputRef = useRef<HTMLInputElement>(null);
    
     const updateConfig = async () => {
       if (typeof setInstallationData !== 'undefined') {
         setInstallationData({
           configuration: {},
           serverConfiguration: {
             peekalink_api_key: peekalinkApiKeyInputRef.current?.value,
           },
         });
       }
     };
     return (
       // Render UI
     );
    };
    export default AppConfiguration;
    ```
    
2.  **Fetch and show link preview**
    1.  Iterate through all URLs in the entry and fetch meta data from Peekalink API for preview details.
        
        **Additional Resource:** Refer to [this](https://github.com/contentstack/quick-web-lookup/blob/main/src/containers/SidebarWidget/EntrySidebar.tsx) document to check the Reference code for fetching API using Contentstack App [SDK](/docs/developer-hub/api-integration-in-developer-hub-apps).
        
        ```
        import React from 'react';
        import { useAppSdk } from '../../common/hooks/useAppSdk';
        import { useEntry } from '../../common/hooks/useEntry';
        // Implement this function, to extract URLs from a JSON Object
        import { extractUrls } from '../../utils/urlExtractor';
        
        const EntrySidebarExtension: React.FC = () => {
          // gets data from current entry
          const { entryData } = useEntry();
          // gets app sdk
          const appSdk = useAppSdk();
          // gets urls from entry data
          const urls = entryData ? extractUrls(entryData) : [];
        
          // fetch link preview from peekalink api
          const fetchLinkPreview = async (url: string): Promise<any> => {
            const response = await appSdk?.api(`/preview`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer {{map.API_KEY}}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ link: url }),
            });
            return response?.json();
          };
          return (
            // Render UI here
            <>
          );
        };
        ```
        
        **Note:** The App SDK API method is designed to simplify how Contentstack apps integrate with APIs. It allows apps to interact with Contentstack's platform APIs using the configured permissions, and with external APIs using the Rewrite rules set up as part of Advanced Settings.
        

### Install and Test Your App

To install and test the app, follow the steps below:

1.  Navigate to [Developer Hub](/docs/developer-hub) in Contentstack.
2.  Go to the app, and click the **Install App** button.![Install_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0a8d997f432ae39e/690a03d936c0886041db3d81/Install_App.png)
3.  On the permissions screen, select a **Stack** and mark the checkbox to accept the **Terms of Service** and **Privacy Policy**. Once done, click the **Install** button.![Authorize_Install.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b41dff3aee8fdcb/690a03d9aef8bb61324fb8c9/Authorize_Install.png)
4.  You will be redirected to the **App Configuration** Screen. Enter the Peekalink API Key and click **Save**. Click **Open Stack**.
    
    **Note:** Refer to the [Peekalink site](https://www.peekalink.io/) to fetch the API Key. You **must** create an account to get the API Key.
    
    ![Peekaling_Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9694f1e6a562f41f/690a070cd3150585086abe2c/Peekaling_Config.png)
5.  Navigate to the [Entries](/docs/headless-cms/about-entries) page. Open any entry with a URL. From the right-hand side panel, click the **Apps** icon.![Apps_Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7843abe5cb0ed8f8/69384315b5ddb922fac24002/Apps_Icon.png)
6.  Click the **Quick Web Lookup** app under the **All Apps** section.
7.  You will see previews of all the links present in your entry, fetched securely without exposing sensitive front-end data by the app.![Output](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a9bcef3a0619a78/693846da8943a3e20a70c403/Output.png)
    
    This app connects to third-party APIs securely using Contentstack’s app and server configuration, without building or deploying a custom backend or worrying about future maintenance.
    

## Security and Best Practices

-   **Rotate API keys** regularly.
-   Never hardcode keys in repo or .env; store them in **Server Configurations** or **Variables** only.
-   Always use **Rewrites** instead of direct API calls to third-party services.
-   **Validate inputs** (length, regex) before sending to external APIs.
-   Respect Retry-After headers (429) to avoid bans.
-   Keep API error messages generic in UI (avoid leaking information).

## Common Issues and Fixes

-   **401 unauthorized:** Check that the Peekalink API key is correctly saved in configuration.
-   **429 too many requests:** Implement exponential backoff and honor Retry-After headers.
-   **App not visible in the sidebar:** Confirm the Entry Sidebar location is registered correctly in manifest.
-   **Configuration not saved:** Ensure setInstallationData is called on the config screen whenever user input is changed.
-   **CORS errors**
    -   Verify the /preview rewrite.
    -   The client should never call Peekalink directly.

## Further Resources and Links

-   [Advanced Settings Overview](/docs/developer-hub/introduction-to-advanced-settings)
-   [How to Use Advanced Settings](/docs/developer-hub/api-integration-in-developer-hub-apps)
-   [Marketplace App Boilerplate](/docs/developer-hub/marketplace-app-boilerplate)
