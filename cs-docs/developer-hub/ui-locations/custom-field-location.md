---
title: "Custom Field Location"
description: "Use the Custom Field location to enhance your content types and integrate with apps like Bynder and Shopify."
url: /developer-hub/custom-field-location
uid: blt4aaddb14a82a57b6
---

# Custom Field Location

## Custom Field Location

The Custom Field Location of an app lets you add/ create custom fields that you can use in your content type. Apart from using the default [fields](/docs/headless-cms/about-fields) such as "Single-line textbox", "Rich Text Editor", and so on, you can integrate with numerous business applications, such as "[Bynder](https://www.bynder.com/en/products/digital-asset-management/)", "[Cloudinary](https://cloudinary.com/)", "[Shopify](https://help.shopify.com/en/manual/intro-to-shopify)", by adding them as [custom](/docs/headless-cms/custom) fields to your stack's content type.

**Additional Resource:** Refer to the App SDK [Custom Field](https://github.com/contentstack/app-sdk-docs?tab=readme-ov-file#customfield) Location documentation to learn more.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   How to add a Custom Field location to your app through the Developer Hub console.

-   Which properties you can configure for the location.

-   Where the location appears in an entry's custom fields after installation.


## Add a Custom Field Location to your App

Let's see how to add custom field location to your app:

-   **Via the Developer Hub Console:**  
    To add the custom field location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login/) and follow the steps given below:

    1.  Navigate to **App Switcher** on the top-right corner and select **Developer Hub**.
    2.  Select an application for which you want to add the custom field location.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
        ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4502661279fd5aa6/68303235980bb6ba0872715f/View_Hosting.png)
    4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0ab1619e05e9133/68303234bcb194e9539ac1d6/App_URL.png)
    5.  Navigate to the **UI Locations** tab to configure the Custom Field location.
    6.  Hover over the **Custom Field** location, and click the **\+ Add** **UI Location** button.  
        ![Add_Custom_Field_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6ce7cfb2b9b7cad/68341c6042d6ef56ab91e363/Add_Custom_Field_Location.png)
    7.  On the resulting Configuration page, set up the configurations for custom field location by providing details such as **Name**, **Path**, **Data Type**, and **Description**. You can also enable the configuration using the **Enabled** toggle button.

        Properties that can be specified for this UI location:

        -   **Name (optional):** Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
        -   **Signed (optional):** When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app).
        -   **Path (optional):** Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

        You can configure any UI location as **mandatory** using the **Required** toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory. With the **Multiple** field, you can save input values in array.

        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.

        ![Config_Screen_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9638281bc9697dc/665eb2844ddc4b422a09ccd7/Config_Screen_New.png)
    8.  Finally, click the **Save** button to save the custom field location’s configuration details.  

        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app.  

        You can enable or disable the non-required UI locations. Apps which have the Custom Field location configured will be visible in the custom fields of an entry. Navigate to the entries page to view the app on the Custom Field location.

        ![Custom_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec6e5ee50d1f2411/65b66c6a568d54e20a35d0a5/Custom_App.png)

**Note:** A single app supports up to **ten** custom field locations.

You can create new custom field locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.
