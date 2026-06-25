---
title: "[Developer Hub guides] - Stack Dashboard Location"
description: Stack Dashboard Location
url: https://www.contentstack.com/docs/developer-hub/dashboard-location
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Stack Dashboard Location

This page explains what the Stack Dashboard Location is in Contentstack Developer Hub, what it enables you to build, and how to add and configure the Dashboard UI location for an app via the Developer Hub console. It is intended for developers configuring apps and UI locations, and should be used when you want your app to appear as a widget on a stack dashboard.

## Stack Dashboard Location

The Dashboard Location is a type of location that lets you create widgets for your[stack dashboard](../set-up-stack/about-stack-dashboard.md).
Using this location, you can create several useful widgets.
Consider a widget that does the following operations:
- Shows real-time data of stack usage
- Lists all the entries published recently
- Allows you to add your "To-Dos" for the day or take notes.

Let's see how to add Dashboard Location to your app:
- **Via the Developer Hub Console:**
To add the Dashboard Location to your app via the Developer Hub console, log in to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:

Click the **Developer Hub** icon on the left navigation panel.
- Select an application for which you want to add the Dashboard Location.
- Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting **link. You will be redirected to the **Hosting **tab.
- In the **Hosting **tab, you can select [Hosting with Launch](./app-hosting.md#hosting-with-launch) or [Custom Hosting](./app-hosting.md#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.
- Navigate to the **UI Locations **tab to configure the Dashboard location.
- Hover over the **Dashboard** location, and click the **+ Add UI Location **button.
- On the resulting Configuration page, set up the configurations for Dashboard Location by providing details such as **Name**, **Path**, **Description **and **Default Width **to select the size of the widget. You can also enable the configuration using the **Enabled **toggle button.Properties that can be specified for this UI location:

**Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
- **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](./securing-your-app.md).
- **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
- **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

You can configure any UI location as **mandatory **using the **Required **toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

**Additional Resource:** Refer to the [Marketplace App Manifest](./app-manifest.md) documentation for comprehensive details.
- Finally, click the **Save** button to save the Dashboard Location’s configuration details.

You will see the details of the configured UI location on the **UI Locations **tab in the **App Configuration **screen after installing the app. You can enable or disable the non-required UI locations.

Apps which have the Dashboard location configured will be visible in your stack homepage.
For example, the app can be viewed in the Dashboard Location as shown below:

**Note:** A single app supports up to **three** Dashboard Locations.

Once you create a dashboard location, it is reflected on the stack’s dashboard page.
Contentstack also allows you to [customize your dashboard view](../set-up-stack/customize-your-dashboard-view.md) and arrange widgets as per your requirements.

## Common questions

**Q: What is the Dashboard Location used for?**  
A: The Dashboard Location is a type of location that lets you create widgets for your stack dashboard.

**Q: Where do I configure the Dashboard Location for an app?**  
A: In the Developer Hub console, select your application, then use the **UI Locations** tab to add and configure the **Dashboard** location.

**Q: How many Dashboard Locations can a single app support?**  
A: A single app supports up to **three** Dashboard Locations.

**Q: Can the Dashboard UI location be made mandatory?**  
A: Yes, you can configure any UI location as **mandatory **using the **Required **toggle button.