---
title: "About Contentstack App SDK"
description: "Build custom apps in the Contentstack UI with the App SDK to extend UI locations, access entry data, and integrate APIs for predictable, in-context workflows."
url: /developers/sdks/contentstack-app-sdk/typescript/about-contentstack-app-sdk
---

# About Contentstack App SDK

## About Contentstack App SDK

The Contentstack App SDK allows you to build custom applications that interact directly with Contentstack’s content management interface. Developed in TypeScript, it provides type-safe methods to access content data, manage UI extensions, and interact with Contentstack’s core APIs.

## What You Can Build with the App SDK

Using the Contentstack App SDK, you can:

-   Create custom UI extensions that run within Contentstack.
-   Integrate third-party services into Contentstack workflows.
-   Access entry and field data in supported UI locations within the Contentstack interface.
-   Share configuration data across app locations.
-   Build apps at the stack or organization level.

The SDK is designed for apps distributed through the Contentstack or managed through the Developer Hub.

## Supported UI Locations

The Contentstack App SDK supports the following UI locations:

-   [**Custom Field**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#customfield): Build custom fields for content types
-   [**Dashboard**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#dashboardwidget): Create widgets for the stack dashboard
-   [**Asset Sidebar**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#assetsidebarwidget): Extend asset management workflows
-   [**Sidebar**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#sidebarwidget): Add contextual tools to the entry editor
-   [**JSON RTE**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#rich-text-editor): Create plugins for the Rich Text Editor
-   [**Field Modifier**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#fieldmodifierlocation): Modify entry field behavior dynamically
-   [**App Configuration**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#appconfigwidget): Manage app-wide settings
-   [**Full Page**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#fullpage): Render full-page applications inside a stack
-   [**Global Full Page**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#globalfullpagelocation)**:** Build cross-stack apps at the organization level
-   [**Content Type Sidebar**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#contenttypesidebarwidget)**:** Add schema tools to the Content Type builder

Each UI location provides access to specific context objects and APIs through the SDK.

## How the SDK Works

The App SDK initializes when your app loads inside Contentstack. After initialization, the SDK detects the active UI location and exposes only the relevant APIs for that location.

This approach ensures:

-   Location-specific access control.
-   Predictable app behavior.
-   Clear separation of concerns across UI locations.

## When to Use the App SDK

Use the Contentstack App SDK when you want to:

-   Extend the Contentstack UI.
-   Integrate external tools within Contentstack content workflows.
-   Build apps for the Contentstack Marketplace or the Developer Hub.
-   Customize content editing, asset handling, or publishing experiences.

## Next Steps

-   Install and initialize using the [**Get Started with Contentstack App SDK**](/docs/developers/sdks/contentstack-app-sdk/typescript/get-started-with-contentstack-app-sdk) document.
-   Refer to the [**App SDK API Reference**](/docs/developers/sdks/contentstack-app-sdk/typescript/reference) for detailed method and property documentation.
-   Refer to the [**App SDK v2.x Migration Guide**](/docs/developers/sdks/contentstack-app-sdk/typescript/contentstack-app-sdk-v2.0.0-migration-guide) if you are upgrading an existing app.
