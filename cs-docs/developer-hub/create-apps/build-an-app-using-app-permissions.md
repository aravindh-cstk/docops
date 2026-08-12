---
title: "Build an App using App Permissions"
description: "Learn how to build a secure Contentstack Stack app using App Permissions."
url: /developer-hub/build-an-app-using-app-permissions
---

# Build an App using App Permissions

## Build an App using App Permissions

This guide walks through building an example app, a Quick Info Dashboard App, that uses Apps Permissions to securely call Contentstack APIs and display stack-level statistics in a Stack Dashboard location.

## Why App Permissions Matter

Marketplace apps often interact with Contentstack APIs. **Apps Permissions** ensure apps only have defined access to the resources they need; improving security, trust, and governance.

**Benefits for different roles:**

-   **Developers:** Clear APIs, fewer errors, smoother builds.
-   **Security/Compliance:** Least privilege access, better auditability.
-   **PM/Admins:** Safer [Marketplace apps,](/docs/marketplace) well defined access.

## Overview

In this guide, we will walk through building an app example for a Quick Info Dashboard App. We will demonstrate how an app can leverage [Apps Permissions](/docs/developer-hub/about-ui-locations#apps-permissions) to securely interact with Contentstack APIs.

This example app highlights a real-world scenario where stack-level statistics (content types, entries, and assets) are displayed in a Dashboard location.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login) with access to Developer Hub
-   Understanding [Contentstack App Development](/docs/developer-hub)
-   Understanding of [Contentstack Management SDK](https://github.com/contentstack/app-sdk-docs)
-   Quick Info Dashboard app [GitHub](https://github.com/contentstack/marketplace-quick-info-dashboard-app) Repository
-   Marketplace App Boilerplate [GitHub](https://github.com/contentstack/marketplace-app-boilerplate.git) Repository

## What You Will Learn

-   Why Apps Permissions matter and how they enforce least-privilege access.
    
-   How to register a Standard app and add a Stack Dashboard UI location in Developer Hub.
    
-   How to configure read permissions for content types, entries, and assets.
    
-   How to fetch stack statistics with the Management SDK and handle permission errors.
    
-   How to install and test the app with full and limited permissions.
    

## Quick Info Dashboard App

The Quick Info Dashboard App displays stack-level statistics (for example, Content Types, Entries, and Assets).  

![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt095509beca4881fe/690cb010dcc3415b5ca5ec27/Output.png)

### Create an App

The best place to start a new project is by cloning the Marketplace App Boilerplate. It has all the components you need for rapid dashboard UI Location development.

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
    
5.  In the **Create Standard App** modal, select the **App Type**, and give a suitable app **Name** (Quick Info Dashboard) and an optional **Description** as shown below:![Creating_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d100cb6ae8a5c74/690cb00f37acae5d285ac578/Creating_App.png)
6.  Click **Create**. You are redirected to the **UI Locations** landing page.![UI_Locations_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30d73620fa4eac08/690cb01903a5096137730a6e/UI_Locations_Tab.png)
7.  Navigate back to the UI Locations tab, click the vertical ellipses, then click the **\+ Add UI Location** button to add as needed.![Add_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd809c9bbccb90c3b/690cb00f6e7c72992e0a16d6/Add_UI_Location.png)
    -   **Stack Dashboard:** Enter a **Name**, use /stack-dashboardas the **Path**, and select the **Default** **Width**, then click **Save** to apply and store your configuration. This setup ensures your app appears on the Stack Dashboard.
        
        **Note:** The name for each UI Location is optional, and can be used to override the default app name.
        
        ![Stack_Dashboard_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a12dc1893faf892/690df44e6702621d2a7f045a/Stack_Dashboard_Location.png)
        
        **Note:** The **Save** button becomes active once all required fields are completed.
        
8.  Navigate to the **Hosting** tab. You will see [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Enter the **App URL** and click **Save** to apply and confirm your hosting configuration. While running the application locally, select Custom Hosting and use your local app URL (for example, (http://localhost:3000).
    
    After development, you can host your application using **Contentstack** [**Launch**](/docs/launch).
    
    ![Custom_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5f14a9cdecebaff/690cb00f72ff6ed35bbd4fc6/Custom_Hosting.png)

### Configure Permissions

[Permissions](/docs/developer-hub/about-ui-locations) control which Contentstack APIs your app can access.

For the Quick Info App, configure the following permissions in Developer Hub. To do so, follow the steps below:

1.  Click the **UI Locations** tab.
2.  Go to the **Permissions** section. ![Permissions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc236517c33fee36/690cb010e56f96c13b5a06c6/Permissions.png)
3.  Select all the permissions you want to add.![Selected_Permissions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06f8a0cc6f45a911/69133634edf5c29a70b573f7/Selected_Permissions.png)
    
    | Module | Access | Endpoint |
    | --- | --- | --- |
    | Content Types | Read ▼ | /v3/content\_types |
    | Entries | Read ▼ | /v3/content\_types/{uid}/entries |
    | Assets | Read ▼ | /v3/assets |
    

#### Security Best Practices:

-   Rotate tokens periodically (do not rely on long-lived tokens).
-   Use .env files and add them to .gitignore (never commit secrets).
-   Log permission errors (403s) for audit tracking.
-   Review permissions regularly, remove unused ones.

### Implement API Integration

Run the following command to navigate to the Dashboard Widget folder:

```
cd src/containers/DashboardWidget
```

Create a new file named StackMetrics.tsx and add the following code snippet.

This component fetches stack statistics for Content Types, Entries, and Assets using the Contentstack Management SDK and displays them in a widget format.

```
import { useState, useEffect, useCallback } from "react";
import { useAppSdk } from "../../common/hooks/useAppSdk";
import { useManagementClient } from "../../common/hooks/useManagementClient";

export const StackMetrics = () => {
  const appSdk = useAppSdk();
  const managementClient = useManagementClient();
  const [stats, setStats] = useState({ contentTypes: 0, entries: 0, assets: 0 });

  const fetchStackStats = useCallback(async () => {
    if (!appSdk || !managementClient) return;

    const stack = managementClient.stack({ api_key: appSdk.ids.apiKey });

    const { count: contentTypeCount } = await stack.contentType().query({ include_count: true }).find();
    const { count: assetCount } = await stack.asset().query({ include_count: true }).find();

    // Fetch all content types and count total entries
    const contentTypes = await stack.contentType().query().find();
    const entryCounts = await Promise.all(
      contentTypes.items.map(async (ct) => {
        const res = await stack.contentType(ct.uid).entry().query({ include_count: true }).find();
        return res.count ?? 0;
      })
    );

    setStats({
      contentTypes: contentTypeCount,
      entries: entryCounts.reduce((a, b) => a + b, 0),
      assets: assetCount,
    });
  }, [appSdk, managementClient]);

  useEffect(() => {
    fetchStackStats();
  }, [fetchStackStats]);

  return (
    <div>
      <h3>Stack Metrics</h3>
      <ul>
        <li>Content Types: {stats.contentTypes}</li>
        <li>Entries: {stats.entries}</li>
        <li>Assets: {stats.assets}</li>
      </ul>
    </div>
  );
};
```

**Note:** For the complete implementation, refer to the StackMetrics [GitHub](https://github.com/contentstack/marketplace-quick-info-dashboard-app/blob/main/src/components/StackMetrics.tsx) repo.

**Import your component:**

Open ./src/containers/DashboardWidget/StackDashboard.tsx and import your component. You need to replace the entire code with the following code snippet:

```
import "../index.css";
import "./StackDashboard.css";
import { StackMetrics } from "./StackMetrics";
const StackDashboardExtension = () => {
  return (
    <div className="layout-container">
      <StackMetrics />
    </div>
  );
};
export default StackDashboardExtension;
```

**Warning:** Without the Content Types: Read permission, this call will fail with a 403 permission denied error.

### Install and Test Your App

#### Local development:

To install and test the app, follow the steps below:

1.  Initiate your development server by running the following commands:
    
    ```
    npm run dev
    ```
    
2.  Now, install the Quick Info Dashboard app using the following steps:
    1.  Navigate to [Developer Hub](/docs/developer-hub) in Contentstack.
    2.  Go to the app, and click the **Install App** button. ![Install_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf34a2797ee0fd4c1/690cb00f9d9a5717c8825f8f/Install_App.png)
    3.  On the permissions screen, select a **Stack** and mark the checkbox to accept the **Terms of Service** and **Privacy Policy**. Once done, click the **Authorize and Install** button. ![Authorize_and_Install.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8dced953478ef46a/690cb00fd0bcbe4313c50456/Authorize_and_Install.png)
3.  You will see the Stack Dashboard UI location configured for the app. Click **Open Stack** to view the app on the Stack Dashboard. ![Open_Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt02844987273ed11e/690cb01072ff6e8fbebd4fca/Open_Stack.png)
4.  You will see the **Quick Info Dashboard** app as shown below:  
    ![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt095509beca4881fe/690cb010dcc3415b5ca5ec27/Output.png)
    
    If you do not use the [example app configuration](https://github.com/contentstack/marketplace-quick-info-dashboard-app), the Marketplace App Boilerplate shows the following configuration on the Stack Dashboard.
    
    ![Dashboard_Boilerplate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b52585563272e2c/690cb43fd3077f3594d631b4/Dashboard_Boilerplate.png)

The app is now available as a Stack Dashboard app that utilizes the Permissions feature in conjunction with Management SDK and the AppSDK Adapter.

**Full permissions test:**

-   Enable all required permissions in Developer Hub
-   Verify all statistics display correctly
-   Test navigation links to [Content Types](/docs/headless-cms/about-content-types), [Entries](/docs/headless-cms/about-entries), and [Assets](/docs/headless-cms/about-assets)

**Limited permissions test:**

-   Disable specific permissions (e.g., Assets)
-   Verify graceful error handling
-   Check that permission error messages are clear and actionable

## Troubleshooting

-   **UI Location not visible:** Check [UI Location](/docs/developer-hub/about-ui-locations) in Developer Hub.
-   **App SDK not initialized:** Ensure provider wraps components + installs the app.
-   **403 errors:** Verify [Permissions](#configure-permissions) in Developer Hub.
-   **CORS/network errors:** Match hosting URL with Developer Hub configuration.

## Resources and Links

-   [Permission](/docs/developer-hub/about-ui-locations/) Overview
-   [Marketplace App Boilerplate](/docs/developer-hub/marketplace-app-boilerplate/)
