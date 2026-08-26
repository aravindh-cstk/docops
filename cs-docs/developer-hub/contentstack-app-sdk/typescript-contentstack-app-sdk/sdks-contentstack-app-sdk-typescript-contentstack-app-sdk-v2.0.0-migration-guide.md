---
title: "Contentstack App SDK v2.0.0 Migration Guide"
description: "App SDK v2.0.0 introduces breaking changes for metadata response, UI location, and extension APIs. Update plugins for improved compatibility and migration stability."
url: /developers/sdks/contentstack-app-sdk/typescript/contentstack-app-sdk-v2.0.0-migration-guide
uid: bltc92902103bb46d51
---

# Contentstack App SDK v2.0.0 Migration Guide

## Contentstack App SDK v2.0.0 Migration Guide

App SDK v2.0.0 introduces breaking changes that improve the structure and enhance plugin development flexibility. Follow the instructions to transition to the updated version.

## Managing Metadata Response Changes

If your application uses the metadata module to manage app metadata, update your code to handle the new response structure.

The following methods now return a simplified format in version 2.0.0:

-   createMetaData()
-   retrieveMetaData()
-   retrieveAllMetaData()
-   updateMetaData()
-   deleteMetaData()

Here's a comparison of the old and new response structures:

**Older Response (Version 1.x):**

```
{
  data: {
    metadata: {} // Actual metadata response to be returned,
  },
  origin: app.contentstack.com, // origin where the app is running
  source: global{} // Source information
}
```

**Newer Response (Version 2.0.0):**

```
{
  "metadata": {} // Actual metadata response to be returned,
}
```

## Field Modifier and Full Page Location Changes

If your app uses the EntryFieldLocation or FullscreenAppWidget properties to manage field modifiers or full-page applications, update these references to match the new names in version 2.0.0:

Replace appSDK.location.EntryFieldLocation with appSDK.location.FieldModifierLocation.

Replace appSDK.location.FullscreenAppWidget with appSDK.location.FullPage.

## Update for \_extension Property

In earlier versions of the App SDK, the \_extension property was available after initialization. Version 2.0.0, replaces this with \_uiLocation. Update your code as follows:

Replace appSdk.\_extension with appSdk.\_uiLocation.

**Example:**

```
ContentstackAppSDK.init((appSdk) => {
  // Previous version
  appSdk._extension; // No longer available

  // Updated version
  appSdk._uiLocation; // Instance of the UiLocation
});
```

## Breaking Changes Overview

The following table summarizes key changes introduced in App SDK v2.0.0. Use this as a quick reference when updating your plugin or extension code:

<table><tbody><tr><td><strong>Old Reference</strong></td><td><strong>New Reference</strong></td></tr><tr><td><span class="code">appSDK.location.EntryFieldLocation</span></td><td><span class="code">appSDK.location.FieldModifierLocation</span></td></tr><tr><td><span class="code">appSDK.location.FullscreenAppWidget</span></td><td><span class="code">appSDK.location.FullPage</span></td></tr><tr><td><span class="code">appSdk._extension</span></td><td><span class="code">appSdk._uiLocation</span></td></tr></tbody></table>

These migration steps help you transition smoothly to App SDK v2.0.0. For any questions, contact [Contentstack Support](mailto:support@contentstack.com).
