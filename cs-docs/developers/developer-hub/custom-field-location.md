---
title: "[Developer Hub guides] - Custom Field Location"
description: Documentation for configuring the Custom Field UI location for an app in the Contentstack Developer Hub.
url: https://www.contentstack.com/docs/developer-hub/custom-field-location
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
  - app-builders
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Custom Field Location

This page explains what the Custom Field Location is and how to configure it for an app using the Contentstack Developer Hub Console. It is intended for developers building or configuring apps that add custom fields to content types, and should be used when setting up UI Locations and hosting for an app.

## Custom Field Location

The Custom Field Location of an app lets you add/ create custom fields that you can use in your content type. Apart from using the default [fields](../create-content-types/about-fields.md) such as "Single-line textbox", "Rich Text Editor", and so on, you can integrate with numerous business applications, such as "[Bynder](https://www.bynder.com/en/products/digital-asset-management/)", "[Cloudinary](https://cloudinary.com/)", "[Shopify](https://help.shopify.com/en/manual/intro-to-shopify)", by adding them as [custom](../create-custom-fields/about-custom-fields.md) fields to your stack's content type.

**Additional Resource: **Refer to the App SDK [Custom Field](https://github.com/contentstack/app-sdk-docs?tab=readme-ov-file#customfield) Location documentation to learn more.

Let's see how to add custom field location to your app:
- **Via the Developer Hub Console:**
To add the custom field location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login/) and follow the steps given below:

      Click the **Developer Hub **icon in the left navigation panel.![Welcome_to_Developer_Hub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c63262317460a13/665eb3af653cb9d069a7f067/Welcome_to_Developer_Hub.png)
- Select an application for which you want to add the custom field location.
- Click the **UI Locations** tab. To set the **App URL**, click the** View Hosting **link. You will be redirected to the **Hosting **tab.![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4502661279fd5aa6/68303235980bb6ba0872715f/View_Hosting.png)
- In the **Hosting **tab, you can select [Hosting with Launch](./app-hosting.md#hosting-with-launch) or [Custom Hosting](./app-hosting.md#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0ab1619e05e9133/68303234bcb194e9539ac1d6/App_URL.png)
- Navigate to the **UI Locations** tab to configure the Custom Field location.
- Hover over the **Custom Field** location, and click the **+ Add**** UI Location** button.![Add_Custom_Field_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6ce7cfb2b9b7cad/68341c6042d6ef56ab91e363/Add_Custom_Field_Location.png)
- On the resulting Configuration page, set up the configurations for custom field location by providing details such as **Name**, **Path**, **Data Type**, and **Description**. You can also enable the configuration using the **Enabled **toggle button.Properties that can be specified for this UI location:

          **Name (optional):** Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
- **Signed (optional):** When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](./securing-your-app.md).
- **Path (optional): **Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
- **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

        You can configure any UI location as **mandatory **using the **Required **toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory. With the **Multiple** field, you can save input values in array.

        **Additional Resource:** Refer to the [Marketplace App Manifest](./app-manifest.md) documentation for comprehensive details.
- Finally, click the **Save** button to save the custom field location’s configuration details.

        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration **screen after installing the app.

You can enable or disable the non-required UI locations. Apps which have the Custom Field location configured will be visible in the custom fields of an entry. Navigate to the entries page to view the app on the Custom Field location.

**Note:** A single app supports up to **ten** custom field locations.

You can create new custom field locations by writing your custom code, or you can use the prebuilt [boilerplate](./marketplace-app-boilerplate.md) and modify the given code to suit your requirements.

## Common questions

### How do I add a Custom Field location to my app?
Use the Developer Hub Console: configure Hosting (App URL), then go to **UI Locations**, choose **Custom Field**, click **+ Add UI Location**, fill in the configuration details, and click **Save**.

### What configuration properties can be specified for the Custom Field UI location?
Properties include **Name**, **Signed**, **Path**, and **Enabled** (all optional), and you can also use the **Required** toggle and the **Multiple** field.

### Where will the app appear after configuring the Custom Field location?
Apps which have the Custom Field location configured will be visible in the custom fields of an entry. Navigate to the entries page to view the app on the Custom Field location.

### How many custom field locations can a single app support?
**Note:** A single app supports up to **ten** custom field locations.

<!-- filename: developer-hub-guides-custom-field-location.md -->