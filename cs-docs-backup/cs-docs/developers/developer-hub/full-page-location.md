---
title: "[Developer Hub guides] - Full Page Location"
description: Documentation for the Full Page UI location in Contentstack Developer Hub and how to configure it for an app.
url: https://www.contentstack.com/docs/developer-hub/full-page-location
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
  - app-builders
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Full Page Location

This page explains what the Full Page UI location is in Contentstack Developer Hub and how to configure it for your app. It is intended for developers and app builders who want their app to appear as a standalone page/module in a stack’s left navigation, and should be used when setting up UI Locations and hosting for a Developer Hub app.

## Full Page Location

The Full Page UI location is amongst the most versatile UI locations available in Developer Hub, as it allows you to create custom apps that function as separate, independent pages or modules (unlike other UI locations that are restricted to and are part of other modules). This powerful element provides you with a blank canvas, to create, customize and optimize your users stack experience. Examples of this location in action can be viewed through Contentstacks Workflow Board or Calendar apps.

Once you install an app that utilizes a Full Page location, you will see it appear on the main left navigation bar within your stack.

Here’s how you can add the Full Page location to your app:

**Via the Developer Hub Console:******To add the Full Page location to your app via the Developer Hub console, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:
- Click the **Developer Hub** icon in the left navigation panel.
- Select an application for which you want to add the Full Page location.
- Click the **UI Locations** tab. To set the App URL, click the **View Hosting** link. You will be redirected to the **Hosting **tab.
- In the **Hosting **tab, you can select [Hosting with Launch](./app-hosting.md#hosting-with-launch) or [Custom Hosting](./app-hosting.md#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.
- Navigate to the **UI Locations **tab to configure the Full Page UI location.
- Hover over the **Full Page** location, and click the **+ Add** **UI Location **button.
- On the resulting **Configuration **page, set up the configurations for Full Page location by providing details such as **Name**, **Path**, **Location Icon**, and **Description**. You can also enable the location by default using the **Enabled **toggle button.Properties that can be specified for this UI location:

      **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
- **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](./securing-your-app.md).
- **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
- **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

    You can mark any UI location as **mandatory **using the **Required **toggle. If the toggle is enabled, the location becomes mandatory to your app users and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

    **Note:** The location icon file size must be less than **1 MB **and must be in **.svg** format.

    **Additional Resource:** Refer to the [Marketplace App Manifest](./app-manifest.md) documentation for comprehensive details.
- Finally, click the **Save** button to save the Full Page location’s configuration details.You will see the details of the configured UI location on the **UI Locations **tab in the **App Configuration **screen after installing the app and will have the option to enable or disable the non-required UI locations.

    Apps which have the Full Page Modifier location configured will be visible in the Full Page UI location.

    Navigate to the [stack](../set-up-stack/about-stack.md). In the left navigation, you will see the installed app in the Full Page UI location.

    For example, the Release Preview app i.e., the Calendar app can be viewed in the Full Page location as shown below:

    **Additional Resources: **For more information, refer to the [Release Preview](../marketplace-apps/release-preview.md) documentation.

**Note:** Contentstack Marketplace currently offers the Release Preview app which can be viewed on the Full Page location. For more information, refer to the [Release Preview](../marketplace-apps/release-preview.md) documentation.

## Common questions

### Where does a Full Page location appear after installing an app?
It will appear on the main left navigation bar within your stack.

### What hosting options are mentioned for setting the App URL?
The page mentions [Hosting with Launch](./app-hosting.md#hosting-with-launch) and [Custom Hosting](./app-hosting.md#custom-hosting).

### What does enabling “Signed (optional)” do?
When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page to verify that the request originated from Contentstack.

### What are the requirements for the location icon?
The location icon file size must be less than **1 MB **and must be in **.svg** format.

<!-- filename: developer-hub-guides-full-page-location.md -->