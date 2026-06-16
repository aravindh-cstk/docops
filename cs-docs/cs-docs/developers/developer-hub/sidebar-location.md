---
title: "[Developer Hub guides] - Entry Sidebar Location"
description: Entry Sidebar Location provides functionalities that you can integrate into your stack to analyze entry content and recommend ideas.
url: https://www.contentstack.com/docs/developers/developer-hub/sidebar-location
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Developer Hub guides] - Entry Sidebar Location

This page explains what the Entry Sidebar Location is and how developers can add and configure it for an app using the Developer Hub Console. Use this when you want to integrate sidebar capabilities into entries within a stack and manage the UI location configuration.

### Entry Sidebar Location

The Entry Sidebar Location provides powerful functionalities that you can integrate into your [stack](/docs/developers/set-up-stack/about-stack) to analyze your [entry](/docs/content-managers/working-with-entries/about-entries) content and recommend ideas.  
These sidebar locations allow users to provide additional capabilities over content, thus optimizing the content to suit their requirements.

Examples of such sidebar locations are SEO tag recommendations, sentiment analysis, language translation, and so on.

Let's see how to add entry sidebar location to your app:

- **Via the Developer Hub Console:**  
  To add the entry sidebar location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:
  - Click the **Developer Hub** icon on the left navigation panel.
  - Select an application for which you want to add the entry sidebar location.
  - Click the **UI Locations **tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting **tab.
  - In the **Hosting **tab, you can select [Hosting with Launch](/docs/developers/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developers/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting **option to enter the hosted URL of your application. Click the **Save **button to save your hosting configuration.
  - Navigate to the **UI Locations **tab to configure the Entry Sidebar location.
  - Hover over the **Entry Sidebar** location, and click the **+ Add** **UI Location **button.
  - On the resulting **Configuration **page, set up the configurations for the entry sidebar location by providing details such as **Name**, **Path**, and **Description**. You can also enable the configuration using the **Enabled **toggle button. Properties that can be specified for this UI location:

    - **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
    - **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developers/developer-hub/securing-your-app/).
    - **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
    - **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

    You can configure any UI location as **mandatory **using the **Required **toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

    **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developers/developer-hub/app-manifest) documentation for comprehensive details.

  - Finally, click the **Save **button to save the entry sidebar location’s configuration details. You will see the details of the configured UI location on the **UI Locations **tab in the **App Configuration **screen after installing the app.

    You can enable or disable the non-required UI locations.

    Apps which have the Entry Sidebar location configured will be visible in the left navigation panel under the **Widgets **section.

    Navigate to the [stack](/docs/developers/set-up-stack/about-stack). In the right navigation, you will see the **Widgets** icon. Click to view the sidebar widget. You will see two tabs: **Apps **and **Extensions**.

    - To set the app as the default, go to the **Apps **tab, click the three dots icon, and then click the **Set as Default App** option to pin the app at the top. OR
    - To set the extension as the default, go to the **Extensions **tab, click the three dots icon, and then click the **Set as Default Extension** option to pin the app at the top.

You can create new entry sidebar locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developers/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.

## Common questions

**Q: Where do apps with the Entry Sidebar location configured appear in Contentstack?**  
A: Apps which have the Entry Sidebar location configured will be visible in the left navigation panel under the **Widgets **section.

**Q: What does the Signed (optional) setting do?**  
A: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack.

**Q: Can the Entry Sidebar UI location be made mandatory?**  
A: You can configure any UI location as **mandatory **using the **Required **toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled.

**Q: Can I build an entry sidebar location without starting from scratch?**  
A: You can use the prebuilt [boilerplate](/docs/developers/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.