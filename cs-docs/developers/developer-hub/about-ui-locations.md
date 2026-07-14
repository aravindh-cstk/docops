---
title: "[Developer Hub guides] - About UI Locations"
description: About UI Locations in the Contentstack App Framework and how to add apps permissions in the UI Locations tab.
url: https://www.contentstack.com/docs/developer-hub/about-ui-locations
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Developer Hub guides] - About UI Locations

This page explains what UI Locations are in the Contentstack App Framework and lists the supported locations. It also provides steps for developers and administrators to configure app permissions from the UI Locations tab when setting up or managing an app in the Developer Hub.

## About UI Locations

An application is a container of one or more UI locations that allow you to extend the Contentstack platform to facilitate integrations, add new functionality, and customize the platform experience

You can use different locations within a single app to build an immersive experience that integrates third-party applications or introduces custom functionality and workflows for users.

After you create an app, you can distribute it as a single application based on the app's use case.

The Contentstack App Framework currently supports the following UI locations:
- [App Config Location](./app-config-location.md)
- [Asset Sidebar Location](./asset-sidebar-location.md)
- [Custom Field Location](./custom-field-location.md)
- [Content Type Sidebar Location](./content-type-sidebar-location.md)
- [Stack Dashboard Location](./dashboard-location.md)
- [Entry Sidebar Location](./sidebar-location.md)
- [Field Modifier Location](./field-modifier-location.md)
- [Full Page Location](./full-page-location.md)
- [Global Full Page Location](./global-full-page.md)
- [RTE Location](./rte-location.md)

## Apps Permissions

To add the apps permissions In the UI Locations tab, follow these steps:
- Log in to your [Contentstack account](https://www.contentstack.com/login).
- On the Dashboard page, click the **Developer Hub** icon.
- Select the application for which you want to add the permissions or click the** + New App **button to [create](./creating-an-app-in-developer-hub.md) a new application.
- Click the **UI Locations** tab.
- Go to the **Permissions** section in the **UI Locations** tab.
- Select all the permissions you wish to add.

  **Note: **By default, no permissions are selected.![permissions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9bbd9a5843b9bad8/68a6bd5f9319d8bfc187e46b/permissions.png)
- Once you have selected the desired permissions, click the **Save** button.

**Additional Resource: **Refer to the [OAuth Scopes](./oauth-scopes.md) document to learn more about the app and user token scopes.

## Common questions

**Q: What is a UI location in the Contentstack App Framework?**  
A: A UI location is a place within the Contentstack platform where an app can extend the platform to facilitate integrations, add new functionality, and customize the platform experience.

**Q: Can a single app use multiple UI locations?**  
A: Yes, you can use different locations within a single app to build an immersive experience that integrates third-party applications or introduces custom functionality and workflows for users.

**Q: Are any permissions selected by default in the UI Locations tab?**  
A: No. By default, no permissions are selected.

**Q: Where can I learn more about app and user token scopes?**  
A: Refer to the [OAuth Scopes](./oauth-scopes.md) document.