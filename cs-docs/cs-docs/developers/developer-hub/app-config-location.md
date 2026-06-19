---
title: "[Developer Hub guides] - App Config Location"
description: Manage all the settings for your app centrally using the App Config UI Location, including App Config and Server Config types, best practices, and setup steps.
url: https://www.contentstack.com/docs/developer-hub/app-config-location
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Developer Hub guides] - App Config Location

This page explains what the App Config UI Location is in Contentstack Developer Hub, the types of configurations it supports, and how to create and configure an App Config page. It is intended for developers building or configuring Contentstack apps and should be used when you need a centralized place to manage app settings across installations.

## App Config Location

The App Config UI Location allows you to manage all the settings for your app centrally. You need to configure it once and all the other locations (where the app is installed) can access these configurations.

The app configuration page is a separate entity that allows you to configure your application.  
Setting up an app configuration page allows you to store all the config settings for your application and secure their access from a single location.

## Types of configurations

There are two types of configurations that Contentstack supports:
- **App Config:**  
The app config type of configuration is a public configuration that you can share with all locations. You can view these configurations in your API response.**Note:** It is recommended not to store any sensitive data in the app config as anyone can access it via the APIs.
- **Server Config:**  
The server config contains sensitive configurations of your app. It is directly shared with the backend server.Suppose you register a webhook to capture app installation update events. After the installation is updated, the information is directly sent to the backend apps via the [webhook](/docs/developer-hub/managing-webhooks-in-an-app/).

    **Note:** It is recommended to use server config for configurations that should be kept private and can be accessed only by the admins.

## Best Practices for Building an App Config Page

Your app config page should be straightforward, giving the users a clear idea of the details they need to provide to set up an application. It would be best if you have a simple interface so users can easily interact with your app.

Your app should allow users to manage all the other UI locations from your app. You should capture sensitive information using the server configuration type. Capture non-sensitive details using the app configuration type.

**Note:** The UI need not show the difference between server and app configurations.

## Create an App Config Page

Let's see how to add app config location to your app:
- **Via the Developer Hub Console:**  
To add the app config location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:

      Click the **Developer Hub** icon on the left navigation panel.
- Select the application for which you want to set up the configuration page.
- Click the **UI Locations **tab. To set the **App URL**, click the **View Hosting **link. You will be redirected to the **Hosting **tab.
- In the **Hosting **tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or[Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.
- Navigate to the **UI Locations **tab to configure the App Config UI location.
- Hover over the **App Configuration** location, and click the **+ Add UI Location **button.
- On the resulting **Configuration **page, set up the configurations for your application by providing details such as **Path**, and **Description**. You can also enable the configuration using the **Enabled **toggle button.Properties that can be specified for this UI location:

          **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
- **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
- **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

        You can configure any UI location as **mandatory **using the **Required **toggle. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
- Finally, click the **Save** button to save the configuration details.You will see the details of the configured UI location on the **UI Locations **tab in the **App Configuration **screen after installing the app.

        You can enable or disable the non-required UI locations.

        Apps which have the App Config location configured will be visible in the configuration screen.

**Note:** Each app can have only **one **app config location.

You can create custom app config locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.

## Common questions

**Q: What is the difference between App Config and Server Config?**  
A: App Config is a public configuration that you can share with all locations and view in your API response, while Server Config contains sensitive configurations and is directly shared with the backend server.

**Q: Should I store sensitive data in App Config?**  
A: No. **Note:** It is recommended not to store any sensitive data in the app config as anyone can access it via the APIs.

**Q: Can an app have multiple app config locations?**  
A: No. **Note:** Each app can have only **one **app config location.

**Q: Do users need to see the difference between server and app configurations in the UI?**  
A: No. **Note:** The UI need not show the difference between server and app configurations.

<!-- filename: developer-hub-guides-app-config-location.md -->