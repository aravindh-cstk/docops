---
title: "[TypeScript Contentstack App SDK] - About Contentstack App SDK"
description: About the Contentstack App SDK for building custom applications that interact with Contentstack’s content management interface.
url: https://www.contentstack.com/docs/developers/sdks/contentstack-app-sdk/typescript/about-contentstack-app-sdk
product: Contentstack
doc_type: overview
audience:
  - developers
  - integrators
version: typescript
last_updated: 2026-03-25
---

# [TypeScript Contentstack App SDK] - About Contentstack App SDK

This page explains what the Contentstack App SDK is, what you can build with it, and where it can run inside the Contentstack UI. It is intended for developers building custom apps, UI extensions, or integrations for use in Contentstack stacks or organizations.

## About Contentstack App SDK

The Contentstack App SDK allows you to build custom applications that interact directly with Contentstack’s content management interface. Developed in TypeScript, it provides type-safe methods to access content data, manage UI extensions, and interact with Contentstack’s core APIs.

## What You Can Build with the App SDK

Using the Contentstack App SDK, you can:
- Create custom UI extensions that run within Contentstack.
- Integrate third-party services into Contentstack workflows.
- Access entry and field data in supported UI locations within the Contentstack interface.
- Share configuration data across app locations.
- Build apps at the stack or organization level.

The SDK is designed for apps distributed through the Contentstack or managed through the Developer Hub.

## Supported UI Locations

The Contentstack App SDK supports the following UI locations:
- [**Custom Field**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#customfield): Build custom fields for content types
- [**Dashboard**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#dashboardwidget): Create widgets for the stack dashboard
- [**Asset Sidebar**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#assetsidebarwidget): Extend asset management workflows
- [**Sidebar**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#sidebarwidget): Add contextual tools to the entry editor
- [**JSON RTE**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#rich-text-editor): Create plugins for the Rich Text Editor
- [**Field Modifier**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#fieldmodifierlocation): Modify entry field behavior dynamically
- [**App Configuration**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#appconfigwidget): Manage app-wide settings
- [**Full Page**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#fullpage): Render full-page applications inside a stack
- [**Global Full Page**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#globalfullpagelocation)**:** Build cross-stack apps at the organization level
- [**Content Type Sidebar**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#contenttypesidebarwidget)**:** Add schema tools to the Content Type builder

Each UI location provides access to specific context objects and APIs through the SDK.

## How the SDK Works

The App SDK initializes when your app loads inside Contentstack. After initialization, the SDK detects the active UI location and exposes only the relevant APIs for that location.

This approach ensures:
- Location-specific access control.
- Predictable app behavior.
- Clear separation of concerns across UI locations.

## When to Use the App SDK

Use the Contentstack App SDK when you want to:
- Extend the Contentstack UI.
- Integrate external tools within Contentstack content workflows.
- Build apps for the Contentstack Marketplace or the Developer Hub.
- Customize content editing, asset handling, or publishing experiences.

## Next Steps

- Install and initialize using the [**Get Started with Contentstack App SDK**](/docs/developers/sdks/contentstack-app-sdk/typescript/get-started-with-contentstack-app-sdk) document.
- Refer to the [**App SDK API Reference**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference) for detailed method and property documentation.
- Refer to the [**App SDK v2.x Migration Guide**](/docs/developers/sdks/contentstack-app-sdk/typescript/contentstack-app-sdk-v2.0.0-migration-guide) if you are upgrading an existing app.

## Common questions

**How do I start using the Contentstack App SDK?**  
Install and initialize using the [**Get Started with Contentstack App SDK**](/docs/developers/sdks/contentstack-app-sdk/typescript/get-started-with-contentstack-app-sdk) document.

**Where can my app run inside Contentstack?**  
The SDK supports multiple UI locations such as Custom Field, Dashboard, Asset Sidebar, Sidebar, JSON RTE, Field Modifier, App Configuration, Full Page, Global Full Page, and Content Type Sidebar.

**Does the SDK expose the same APIs in every UI location?**  
No. After initialization, the SDK detects the active UI location and exposes only the relevant APIs for that location.

**When should I use the App SDK instead of other approaches?**  
Use the Contentstack App SDK when you want to extend the Contentstack UI, integrate external tools within Contentstack content workflows, build apps for the Contentstack Marketplace or the Developer Hub, or customize content editing, asset handling, or publishing experiences.