---
title: "[Developer Hub guides] - Types of Apps"
description: Types of Apps in Contentstack Developer Hub, including Organization Apps and Stack Apps, UI locations, webhook events, and limitations.
url: https://www.contentstack.com/docs/developer-hub/types-of-apps
product: Contentstack
doc_type: developer-hub-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Types of Apps

This page explains the types of apps supported in Contentstack Developer Hub, including how Organization Apps and Stack Apps differ in scope, permissions, UI locations, webhook events, and limitations. It is intended for developers and admins deciding which app type to build and where it can be installed and configured.

## Types of Apps

Apps help you extend the capabilities of our core CMS and customize its functionalities. They help you enhance the Contentstack experience by connecting to various third-party services in a few simple clicks.

Contentstack currently supports two categories of apps: [Introduction to Contentstack Applications](./introduction-to-contentstack-applications.md).

Standard apps can be created at either the stack or organization level, while Machine-to-Machine apps are currently limited to the organization level.

Let's discuss stack and organization apps.
- **Stack Apps** - These apps can be installed for any specific stack, and the scope is limited only to that stack. This type of app can be installed by only the [owners](../invite-users-and-assign-roles/types-of-roles.md#owner)/[admins](../invite-users-and-assign-roles/types-of-roles.md#admin) of the stack or by the [owners](../organization/organization-roles.md#organization-owner)/[admins](../organization/organization-roles.md#organization-admin) of the corresponding org. The org owners/admins need to be part of the stack.
- **Organization Apps** - These apps have a broader scope, and the changes are applicable throughout the organization. A good example is the SCIM app that allows automatic user provisioning for all new users of the organization. This type of app can be installed by only the [owners](../organization/organization-roles.md#organization-owner)/[admins](../organization/organization-roles.md#organization-admin) of the corresponding org.

## Organization Apps

Organization Apps are the apps that are installed at the Organization level, and they utilize Organization-level permissions such as SSO.

**Note**: Only Organization Admins are authorized to install Organization Apps.

### Step to Create an Organization App

To create/register your organization app with Contentstack, refer to the [Creating an App in Developer Hub](./creating-an-app-in-developer-hub.md) documentation.

### List of UI locations in Organization Apps

UI locations help you define the UI touch points where the user can experience the App. These UI Locations enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

For organization apps, there is only one UI location available.
- [App Configuration](./app-config-location.md)

### Enable UI locations in Organization Apps

- Click the **+ Add** icon on App configuration to add the UI Location.![Organization_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8cb0dda705839a97/66b1c803e3c58c3912d5cc94/Organization_UI_Location.png)
- Add the necessary details for the app, such as its **Description**; select whether it’s **Signed **or not; provide a valid **Path**; and select if **Enabled** or not.![App_Config.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7ab077c4b70eaea/65b2908b450fa44f13015b7f/App_Config.png)
- Click the **Save** button to save the changes.

### List Webhook Events in Organization Apps

[Webhooks](./managing-webhooks-in-an-app.md) provide a mechanism to send real-time information to any third-party app or service, when an event occurs in your app. Organization app only supports App events.![List_of_Webhook_Events_in_the_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf29a91b21ddd3aaa/66b1c8031370b663549d1554/List_of_Webhook_Events_in_the_Organization.png)

### Limitations of Organization App

- Organization Apps cannot target UI locations inside individual stacks.
- Organization Apps cannot target webhook inside individual stacks.

**Additional Resource:** For more information, refer to the [About UI Locations](./about-ui-locations.md) document to know more about each location.

## Stack Apps

### Steps to Create a Stack App

To create/register your stack app with Contentstack, refer to the [Creating an App in Developer Hub](./creating-an-app-in-developer-hub.md) documentation.

### List of UI locations in Stack Apps

UI locations help you define the UI touch points where the user can experience the App. These UI Locations enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.  
For stack apps, six UI locations are available:
- [Custom Field](./custom-field-location.md)
- [Dashboard](./dashboard-location.md)
- [Asset Sidebar](./asset-sidebar-location.md)
- [App configuration](./app-config-location.md)
- [RTE](./rte-location.md)
- [Sidebar](./sidebar-location.md)
- [Field Modifier](./field-modifier-location.md)
- [Full Page](./full-page-location.md)![Stack_App_UI_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43822c74ea1bd941/66acb07733b37f79832a69ab/Stack_App_UI_Location.png)

### Enable UI Locations in Stack Apps

- Click the **+ Add** button that appears when you hover on any UI Locations, to add the UI Location. Let’s consider that we add the **Custom Field **location.![Custom_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt600f2da072ca8a5c/65b2908b55a88a11bfda5bbf/Custom_Field.png)
- Add the necessary details for the app, such as its **Name**, **Data Type**, and **Description**; select whether it’s **Signed** or not; provide a valid **Path**; and select if **Enabled** or not.![Custom_Field_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ddaa7b3f091c521/65b2908bd2067b7d6f8c39e2/Custom_Field_Configuration.png)
- Once done, click **Save**.

### List Webhook Events in Stack Apps

Webhooks provide a mechanism to send real-time information to any third-party app or service. When an event occurs in your app. Stack app has both stack events and app events.

### Available Webhook Events for Stack App

**Modules** | **Events**
---|---
Entry | - Created<br>- Updated<br>- Deleted<br>- Published<br>- Unpublished
Content Type | - Created<br>- Updated<br>- Deleted
Asset | - Created<br>- Updated<br>- Deleted<br>- Published<br>- Unpublished
Global Field | - Created<br>- Updated<br>- Deleted
Release | - Deployed

### Limitations of Stack App

- Stack Apps cannot target UI locations outside the individual stack.
- Stack Apps cannot target webhook outside the individual stack.

## Common questions

### What is the difference between Stack Apps and Organization Apps?
Stack Apps are installed for a specific stack and their scope is limited only to that stack, while Organization Apps are installed at the Organization level and changes are applicable throughout the organization.

### Who can install Organization Apps?
**Note**: Only Organization Admins are authorized to install Organization Apps.

### What UI locations are available for Organization Apps?
For organization apps, there is only one UI location available: [App Configuration](./app-config-location.md).

### Do Stack Apps and Organization Apps support the same webhook events?
Organization app only supports App events, while Stack app has both stack events and app events.