---
title: "RTE Location"
description: "Extend your JSON Rich Text Editor with the RTE Location by adding custom plugins and third-party integrations."
url: /developer-hub/rte-location
---

# RTE Location

## RTE Location

The RTE Location lets you add/ create custom plugins to extend the functionality of your [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) as per your needs.  
You can use third-party applications to interact with your JSON Rich Text Editor content.

Let's see how to add the RTE location to your app:

-   **Via the Developer Hub Console:**  
    To add the RTE location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:
    
    1.  Click the **Developer Hub** icon on the left navigation panel.  
        ![Welcome_to_Developer_Hub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c63262317460a13/665eb3af653cb9d069a7f067/Welcome_to_Developer_Hub.png)
    2.  Select an application for which you want to add the RTE location.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.   
        ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879b2d8d0af9821/68343990c589ead0184bdd34/View_Hosting.png)
    4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0ab1619e05e9133/68303234bcb194e9539ac1d6/App_URL.png)
    5.  Navigate to the **UI Locations** tab to configure the RTE location.
    6.  Hover over the **RTE** location, and click the **+ Add UI Location** button.   
        ![Add_JSON_RTE_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94a135da14e035ff/683959e77f9f733d5d7dbf8e/Add_JSON_RTE_Location.png)
    7.  On the resulting **Configuration** page, set up the configurations for RTE location by providing details such as **Name**, **Path**, and **Description**. You can also enable the configuration using the **Enabled** toggle button.
        
        Properties that can be specified for this UI location:
        
        -   **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
        -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
        -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.
        
        You can configure any UI location as **mandatory** using the **Required** toggle. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.
        
        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
        
        ![RTE_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt420304458880a7a1/683959e6f809c133d23dfa36/RTE_Location.png)
    8.  Finally, click the **Save** button to save the RTE location’s configuration details.
        
        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app.
        
        You can enable or disable the non-required UI locations.
        
        Navigate to the stack. You will see the installed app in the JSON RTE field in the entries page.
        

You can create new RTE locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.
