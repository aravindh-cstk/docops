---
title: "Types of Apps"
description: "Explore Contentstack apps to customize your CMS effortlessly, connect third-party services, and optimize user experience at stack or organization level."
url: /developer-hub/types-of-apps
uid: bltfcc4cd3332e63690
---

# Types of Apps

## Types of Apps

Apps help you extend the capabilities of our core CMS and customize its functionalities. They help you enhance the Contentstack experience by connecting to various third-party services in a few simple clicks.

Contentstack currently supports two categories of apps: [Introduction to Contentstack Applications](/docs/developer-hub/introduction-to-contentstack-applications).

Standard apps can be created at either the stack or organization level, while Machine-to-Machine apps are currently limited to the organization level.

Let's discuss stack and organization apps.

-   **Stack Apps** - These apps can be installed for any specific stack, and the scope is limited only to that stack. This type of app can be installed by only the [owners](/docs/headless-cms/types-of-roles#owner)/[admins](/docs/headless-cms/types-of-roles#admin) of the stack or by the [owners/admins](/docs/administration/about-administration-roles) of the corresponding org. The org owners/admins need to be part of the stack.
-   **Organization Apps** - These apps have a broader scope, and the changes are applicable throughout the organization. A good example is the SCIM app that allows automatic user provisioning for all new users of the organization. This type of app can be installed by only the [owners/admins](/docs/administration/about-administration-roles)[](/docs/administration/about-administration-roles#organization-admin) of the corresponding org.

## Organization Apps

Organization Apps are the apps that are installed at the Organization level, and they utilize Organization-level permissions such as SSO.

**Note:** Only Organization Admins are authorized to install Organization Apps.

### Step to Create an Organization App

To create/register your organization app with Contentstack, refer to the [Creating an App in Developer Hub](/docs/developer-hub/creating-an-app-in-developer-hub) documentation.

### List of UI locations in Organization Apps

UI locations help you define the UI touch points where the user can experience the App. These UI Locations enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

For organization apps, there is only one UI location available.

-   [App Configuration](/docs/developer-hub/app-config-location/)

### Enable UI locations in Organization Apps

1.  Click the **\+ Add** icon on App configuration to add the UI Location.  
    ![Organization_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8cb0dda705839a97/66b1c803e3c58c3912d5cc94/Organization_UI_Location.png)
2.  Add the necessary details for the app, such as its **Description**; select whether it’s **Signed** or not; provide a valid **Path**; and select if **Enabled** or not.  
    ![App_Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7ab077c4b70eaea/65b2908b450fa44f13015b7f/App_Config.png)
3.  Click the **Save** button to save the changes.

### List Webhook Events in Organization Apps

[Webhooks](/docs/developer-hub/managing-webhooks-in-an-app/) provide a mechanism to send real-time information to any third-party app or service, when an event occurs in your app. Organization app only supports App events. ![List_of_Webhook_Events_in_the_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf29a91b21ddd3aaa/66b1c8031370b663549d1554/List_of_Webhook_Events_in_the_Organization.png)

### Limitations of Organization App

-   Organization Apps cannot target UI locations inside individual stacks.
-   Organization Apps cannot target webhook inside individual stacks.

**Additional Resource:** For more information, refer to the [About UI Locations](/docs/developer-hub/about-ui-locations) document to know more about each location.

## Stack Apps

### Steps to Create a Stack App

To create/register your stack app with Contentstack, refer to the [Creating an App in Developer Hub](/docs/developer-hub/creating-an-app-in-developer-hub/) documentation.

### List of UI locations in Stack Apps

UI locations help you define the UI touch points where the user can experience the App. These UI Locations enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.  
For stack apps, six UI locations are available:

-   [Custom Field](/docs/developer-hub/custom-field-location)
-   [Dashboard](/docs/developer-hub/dashboard-location)
-   [Asset Sidebar](/docs/developer-hub/asset-sidebar-location)
-   [App configuration](/docs/developer-hub/app-config-location)
-   [RTE](/docs/developer-hub/rte-location)
-   [Sidebar](/docs/developer-hub/sidebar-location)
-   [Field Modifier](/docs/developer-hub/field-modifier-location/)
-   [Full Page](/docs/developer-hub/full-page-location/)  
    ![Stack_App_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43822c74ea1bd941/66acb07733b37f79832a69ab/Stack_App_UI_Location.png)

### Enable UI Locations in Stack Apps

1.  Click the **\+ Add** button that appears when you hover on any UI Locations, to add the UI Location. Let’s consider that we add the **Custom Field** location.  
    ![Custom_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt600f2da072ca8a5c/65b2908b55a88a11bfda5bbf/Custom_Field.png)
2.  Add the necessary details for the app, such as its **Name**, **Data Type**, and **Description**; select whether it’s **Signed** or not; provide a valid **Path**; and select if **Enabled** or not.  
    ![Custom_Field_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ddaa7b3f091c521/65b2908bd2067b7d6f8c39e2/Custom_Field_Configuration.png)
3.  Once done, click **Save**.

### List Webhook Events in Stack Apps

Webhooks provide a mechanism to send real-time information to any third-party app or service. When an event occurs in your app. Stack app has both stack events and app events.

![Webhooks_Events.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f979647040c41ad/65b2908c568d54319a35c60c/Webhooks_Events.png)

### Available Webhook Events for Stack App

<table><tbody><tr><td><strong>Modules</strong></td><td><strong>Events</strong></td></tr><tr><td>Entry</td><td><ul><li>Created</li><li>Updated</li><li>Deleted</li><li>Published</li><li>Unpublished</li></ul></td></tr><tr><td>Content Type</td><td><ul><li>Created</li><li>Updated</li><li>Deleted</li></ul></td></tr><tr><td>Asset</td><td><ul><li>Created</li><li>Updated</li><li>Deleted</li><li>Published</li><li>Unpublished</li></ul></td></tr><tr><td>Global Field</td><td><ul><li>Created</li><li>Updated</li><li>Deleted</li></ul></td></tr><tr><td>Release</td><td><ul><li>Deployed</li></ul></td></tr></tbody></table>

### Limitations of Stack App

-   Stack Apps cannot target UI locations outside the individual stack.
-   Stack Apps cannot target webhook outside the individual stack.
