---
title: "[Developer Hub guides] - RTE Location"
description: Add the RTE UI location to extend the JSON Rich Text Editor using custom plugins in Developer Hub.
url: https://www.contentstack.com/docs/developers/developer-hub/rte-location
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Developer Hub guides] - RTE Location

This page explains what the RTE Location is and how to add/configure it for an app in the Developer Hub Console. It is intended for developers building custom plugins for the JSON Rich Text Editor and should be used when setting up UI Locations for an app.

## RTE Location

The RTE Location lets you add/ create custom plugins to extend the functionality of your[JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) as per your needs.
You can use third-party applications to interact with your JSON Rich Text Editor content.

Let's see how to add the RTE location to your app:
- **Via the Developer Hub Console:**
To add the RTE location to your app via the Developer Hub console, login to your[Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:

      Click the** Developer Hub** icon on the left navigation panel.
- Select an application for which you want to add the RTE location.
- Click the **UI Locations **tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting **tab.
- In the **Hosting **tab, you can select [Hosting with Launch](/docs/developers/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developers/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.
- Navigate to the **UI Locations **tab to configure the RTE location.
- Hover over the **RTE** location, and click the** + Add UI Location **button.
- On the resulting **Configuration **page, set up the configurations for RTE location by providing details such as **Name**, **Path**, and **Description**. You can also enable the configuration using the **Enabled **toggle button.Properties that can be specified for this UI location:

          **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
- **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developers/developer-hub/securing-your-app/).
- **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
- **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

        You can configure any UI location as **mandatory **using the **Required **toggle. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developers/developer-hub/app-manifest) documentation for comprehensive details.
- Finally, click the **Save** button to save the RTE location’s configuration details.You will see the details of the configured UI location on the **UI Locations **tab in the **App Configuration **screen after installing the app.

        You can enable or disable the non-required UI locations.

        Navigate to the stack. You will see the installed app in the JSON RTE field in the entries page.

You can create new RTE locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developers/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.

## Common questions

### What is the RTE Location used for?
It lets you add/ create custom plugins to extend the functionality of your JSON Rich Text Editor and use third-party applications to interact with JSON Rich Text Editor content.

### Where do I configure the RTE Location in the console?
In the Developer Hub Console, select your application and use the **UI Locations** tab to add and configure the **RTE** location.

### What does enabling “Signed” do?
When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page, which can be used to verify that the request originated from Contentstack.

### Can I make an RTE UI location mandatory?
Yes. You can configure any UI location as **mandatory** using the **Required** toggle; when enabled, the location becomes mandatory and cannot be disabled.