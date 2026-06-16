---
title: "[Developer Hub guides] - Types of Apps"
description: Types of Apps in Contentstack Developer Hub, including Organization Apps and Stack Apps, UI locations, webhook events, and limitations.
url: https://www.contentstack.com/docs/developers/developer-hub/types-of-apps
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

Contentstack currently supports two categories of apps: [Introduction to Contentstack Applications](/docs/developers/developer-hub/introduction-to-contentstack-applications).

Standard apps can be created at either the stack or organization level, while Machine-to-Machine apps are currently limited to the organization level.

Let's discuss stack and organization apps.
- **Stack Apps** - These apps can be installed for any specific stack, and the scope is limited only to that stack. This type of app can be installed by only the [owners](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[admins](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) of the stack or by the [owners](/docs/developers/organization/organization-roles#organization-owner)/[admins](/docs/developers/organization/organization-roles#organization-admin) of the corresponding org. The org owners/admins need to be part of the stack.
- **Organization Apps** - These apps have a broader scope, and the changes are applicable throughout the organization. A good example is the SCIM app that allows automatic user provisioning for all new users of the organization. This type of app can be installed by only the [owners](/docs/developers/organization/organization-roles#organization-owner)/[admins](/docs/developers/organization/organization-roles#organization-admin) of the corresponding org.

## Organization Apps

Organization Apps are the apps that are installed at the Organization level, and they utilize Organization-level permissions such as SSO.

**Note**: Only Organization Admins are authorized to install Organization Apps.

### Step to Create an Organization App

To create/register your organization app with Contentstack, refer to the [Creating an App in Developer Hub](https://www.contentstack.com/docs/developers/developer-hub/creating-an-app-in-developer-hub/) documentation.

### List of UI locations in Organization Apps

UI locations help you define the UI touch points where the user can experience the App. These UI Locations enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.

For organization apps, there is only one UI location available.
- [App Configuration](https://www.contentstack.com/docs/developers/developer-hub/app-config-location/)

### Enable UI locations in Organization Apps

- Click the **+ Add** icon on App configuration to add the UI Location.
- Add the necessary details for the app, such as its **Description**; select whether it’s **Signed **or not; provide a valid **Path**; and select if **Enabled** or not.
- Click the **Save** button to save the changes.

### List Webhook Events in Organization Apps

[Webhooks](/docs/developers/developer-hub/managing-webhooks-in-an-app/) provide a mechanism to send real-time information to any third-party app or service, when an event occurs in your app. Organization app only supports App events.

### Limitations of Organization App

- Organization Apps cannot target UI locations inside individual stacks.
- Organization Apps cannot target webhook inside individual stacks.

**Additional Resource:** For more information, refer to the [About UI Locations](/docs/developers/developer-hub/about-ui-locations) document to know more about each location.

## Stack Apps

### Steps to Create a Stack App

To create/register your stack app with Contentstack, refer to the [Creating an App in Developer Hub](https://www.contentstack.com/docs/developers/developer-hub/creating-an-app-in-developer-hub/) documentation.

### List of UI locations in Stack Apps

UI locations help you define the UI touch points where the user can experience the App. These UI Locations enable you to customize the Contentstack experience, by customizing Contentstack's default UI and behavior.  
For stack apps, six UI locations are available:
- [Custom Field](/docs/developers/developer-hub/custom-field-location)
- [Dashboard](/docs/developers/developer-hub/dashboard-location)
- [Asset Sidebar](/docs/developers/developer-hub/asset-sidebar-location)
- [App configuration](/docs/developers/developer-hub/app-config-location)
- [RTE](/docs/developers/developer-hub/rte-location)
- [Sidebar](/docs/developers/developer-hub/sidebar-location)
- [Field Modifier](/docs/developers/developer-hub/field-modifier-location/)
- [Full Page](/docs/developers/developer-hub/full-page-location/)

### Enable UI Locations in Stack Apps

- Click the **+ Add** button that appears when you hover on any UI Locations, to add the UI Location. Let’s consider that we add the **Custom Field **location.
- Add the necessary details for the app, such as its **Name**, **Data Type**, and **Description**; select whether it’s **Signed** or not; provide a valid **Path**; and select if **Enabled** or not.
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
For organization apps, there is only one UI location available: [App Configuration](https://www.contentstack.com/docs/developers/developer-hub/app-config-location/).

### Do Stack Apps and Organization Apps support the same webhook events?
Organization app only supports App events, while Stack app has both stack events and app events.