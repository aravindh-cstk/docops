---
title: "JSON Editor App Installation Guide"
description: "The JSON Editor app enables to view, edit, and format input data in JSON. You can also save the data as an object or a string composition."
url: /marketplace/json-editor
uid: blt194aef2a900841dc
---

# JSON Editor App Installation Guide

## JSON Editor App Installation Guide

To further enhance the business user experience, Contentstack provides prebuilt custom field applications that let you extend the functionality of your custom fields to serve your unique business needs while providing a native Contentstack look and feel.

Using Contentstack [Custom Field](/docs/developer-hub/custom-field-location), you can now input a JSON text into an entry field. With the JSON Editor custom field, you can edit and format JSON text, and view it in modes like code, trees, etc. within your Contentstack entry.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/ Stack as the Owner/Admin

This step-by-step guide explains how to install and configure JSON Editor within your stack.

## Steps for Execution

1.  [Install and Configure JSON Editor in Contentstack Marketplace](#install-and-configure-json-editor-in-contentstack-marketplace)
2.  [Use JSON Editor within your Stack](#use-json-editor-within-your-stack)

1.  ## Install and Configure JSON Editor in Contentstack Marketplace

    Follow the steps below to install the JSON Editor app in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **JSON Editor** app and click **Install**.  
        ![json_editor_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am04bb38fc0dbe538a/e89c4a9b0d9b16bb651084ff/json_editor_app_Install.png?locale=en-us)
    5.  In the popup window, select the stack where you want the JSON Editor app to be installed and click the **Install** button.  
        ![JSON-Editor-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt891e4d58d13fa76d/64b917c70c8ace3f5402ebec/JSON-Editor-Install-App.png)  

    6.  Now on the **Configuration** screen, choose the global format in which you want to store the JSON. Select **JSON Object** to store the JSON in JSON format or select **JSON Stringified** to store the JSON as a String.  
        ![JSON-Editor-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd56c81dabf7a2f24/65b81df80b2014fe69411663/JSON-Editor-Configuration.png)  

    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![JSON-Editor-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c680d251ad433f4/65b81e015f12edfa6de21eb9/JSON-Editor-UI-Locations.png)
    8.  **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    9.  After selecting the configuration details, click the **Save** button.
    10.  Click **Open Stack** to start using the JSON Editor application.
2.  ## Use JSON Editor within your Stack

    To use the JSON Editor application within an entry of your stack, follow the steps given below:

    1.  Go to your stack and click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:  
        ![JSON-Editor-ContentType](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f498e5e468bbae5/64061056ce1f78108607fa4a/JSON-Editor-ContentType.png)  

    3.  In the Content Type Builder page, add a [Custom field](/docs/developer-hub/custom-field-location) in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension/App**, select **JSON Editor** and then click **Proceed**.  
        ![JSON-Editor-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87f9a90cadd91607/64a3b0cfade08cb396cb0e48/JSON-Editor-Add-App.png)  
        This adds JSON Editor in the custom field.  
        ![JSON-Editor-CT-JSONapp](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ec391ca067a78cf/640610678bbba310615dd449/JSON-Editor-CT-JSONapp.png)
    5.  Under **Advanced Properties**, you also have an option to set the **Config Parameter** for all the entries of a particular content type. This will override the global format which was configured at the time of installation in the Configuration page.  
        ![JSON-Editor-CT-JSONapp-config-example](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7d696204feb53ab6/63c1597f2eab183f8e9cf913/JSON-Editor-CT-JSONapp-config-example.png)

        Add a key as stringify and its value as true (or false) in the following format:  

        ```
        {
        "stringify": true
        }
        ```

        After adding this config parameter "stringify" and setting it to true, the JSON data will be stored as a string for all the entries of this content type even if the global configuration is set to JSON Object, and vice-versa.
    6.  After adding the app in a custom field, click either **Save** or **Save and Close** to save your changes.  

    7.  To use the JSON Editor app, create an entry for this content type, and you will see this JSON Editor custom field on your entry page as shown below:  
        ![JSON-Editor-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt321d34a0e36e6a85/6406107e952945362ea1aeba/JSON-Editor-Sample-Entry.png)  

    8.  You can input, edit, format, compact, and repair the JSON data, and perform undo and redo operations in the JSON editor. The content can be filtered, sorted, or transformed by JMESPath query language and can be viewed in different visual representations. There are five editor modes for writing:
        1.  Code Editor mode:  
            ![JSON-Editor-Type-Code](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte677076dd43f6f7d/63bf9dc3788423108f1fa869/JSON-Editor-Type-Code.png)
        2.  Form Editor mode:  
            ![JSON-Editor-Type-Form](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf25cf1e7fecc42d6/63bf9dc399e03c1edceda402/JSON-Editor-Type-Form.png)
        3.  Text Editor mode:  
            ![JSON-Editor-Type-Text](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt352e3f2c3b60ca55/63bf9dc38ac6c810b28360b1/JSON-Editor-Type-Text.png)
        4.  Tree Editor mode:  
            ![JSON-Editor-Type-Tree](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt05fed97f23217d79/63bf9dc30dc3963ccff8ad74/JSON-Editor-Type-Tree.png)
        5.  View Editor mode:  
            ![JSON-Editor-Type-View](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6e677c7d09b36f6f/63bf9dc3efe19d10ac157cc2/JSON-Editor-Type-View.png)
    9.  After adding your JSON content, **Save** and **Publish** your entry.
