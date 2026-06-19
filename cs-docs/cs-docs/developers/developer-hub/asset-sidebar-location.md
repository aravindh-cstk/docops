---
title: "[Developer Hub guides] - Asset Sidebar Location"
description: Asset Sidebar Location
url: https://www.contentstack.com/docs/developer-hub/asset-sidebar-location
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Asset Sidebar Location

This page explains how to add and configure the Asset Sidebar Location in the Developer Hub so you can create customized sidebar widgets for assets. It is intended for developers building Contentstack apps and should be used when setting up UI Locations and hosting for an app.

## Asset Sidebar Location

The Asset Sidebar Location lets you create customized sidebar widgets that extend the functionality of your [assets](/docs/content-managers/working-with-assets/about-assets) and enhance their editorial experience to suit your needs.
You can efficiently manage, transform, and optimize the assets in your [stack](/docs/developers/set-up-stack/about-stack).

Let's see how to add asset sidebar location to your app:
- **Via the Developer Hub Console:**
To add the asset sidebar location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:

- Click the **Developer Hub** icon on the left navigation panel.
- Select an application for which you want to add the asset sidebar location.
- Click the **UI Locations **tab. To set the **App URL**, click the **View Hosting **link. You will be redirected to the **Hosting **tab.
- In the Hosting tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.
- Navigate to the **UI Locations **tab to configure the Asset Sidebar Modifier UI location.
- Hover over the **Asset Sidebar** location, and click the **+ Add** **UI Location** button.
- On the resulting **Configuration **page, set up the configurations for asset sidebar location by providing details such as **Name**, **Path**, **Width**, **Blur**, and **Description**. You can also enable the configuration using the **Enabled **toggle button.Properties that can be specified for this UI location:

  - **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
  - **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
  - **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
  - **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

You can configure any UI location as **mandatory **using the **Required **toggle. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

**Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
- Finally, click the **Save** button to save the asset sidebar location’s configuration details.You will see the details of the configured UI location on the **UI Locations **tab in the **App Configuration **screen after installing the app.

You can enable or disable the non-required UI locations.

Apps which have the Asset Sidebar location configured will be visible in the [**Assets**](/docs/content-managers/author-content#create-and-manage-assets)** **section.

Navigate to a particular asset and in the right navigation panel, click **Widgets**.

For example, the app can be viewed in the Asset Sidebar location as shown below:

**Note:** A single app supports up to **three** asset sidebar locations.

You can create new asset sidebar locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.

## Common questions

### How many Asset Sidebar locations can a single app support?
**Note:** A single app supports up to **three** asset sidebar locations.

### Where do apps configured with the Asset Sidebar location appear?
Apps which have the Asset Sidebar location configured will be visible in the [**Assets**](/docs/content-managers/author-content#create-and-manage-assets)** **section.

### What does enabling “Signed (optional)” do?
When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).

### Can I create new asset sidebar locations using custom code?
You can create new asset sidebar locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.