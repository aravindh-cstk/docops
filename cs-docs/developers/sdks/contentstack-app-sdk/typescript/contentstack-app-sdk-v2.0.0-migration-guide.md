---
title: "[TypeScript Contentstack App SDK] - Contentstack App SDK v2.0.0 Migration Guide"
description: Contentstack App SDK v2.0.0 Migration Guide
url: https://www.contentstack.com/docs/developers/sdks/contentstack-app-sdk/typescript/contentstack-app-sdk-v2.0.0-migration-guide
product: Contentstack
doc_type: migration-guide
audience:
  - developers
version: v2.0.0
last_updated: 2026-03-25
---

# [TypeScript Contentstack App SDK] - Contentstack App SDK v2.0.0 Migration Guide

This page describes the breaking changes in Contentstack App SDK v2.0.0 and the specific code updates required to migrate from earlier versions. It is intended for developers maintaining Contentstack apps, plugins, or extensions and should be used when upgrading to App SDK v2.0.0.

## Contentstack App SDK v2.0.0 Migration Guide

App SDK v2.0.0 introduces breaking changes that improve the structure and enhance plugin development flexibility. Follow the instructions to transition to the updated version.

## Managing Metadata Response Changes

If your application uses the metadata module to manage app metadata, update your code to handle the new response structure.

The following methods now return a simplified format in version 2.0.0:
- `createMetaData()`
- `retrieveMetaData()`
- `retrieveAllMetaData()`
- `updateMetaData()`
- `deleteMetaData()`

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

If your app uses the `EntryFieldLocation` or `FullscreenAppWidget` properties to manage field modifiers or full-page applications, update these references to match the new names in version 2.0.0:

Replace `appSDK.location.EntryFieldLocation` with `appSDK.location.FieldModifierLocation`.

Replace `appSDK.location.FullscreenAppWidget` with `appSDK.location.FullPage`.

## Update for _extension Property

In earlier versions of the App SDK, the `_extension` property was available after initialization. Version 2.0.0, replaces this with `_uiLocation`. Update your code as follows:

Replace `appSdk._extension` with `appSdk._uiLocation`.

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

| Old Reference | New Reference |
|---|---|
| `appSDK.location.EntryFieldLocation` | `appSDK.location.FieldModifierLocation` |
| `appSDK.location.FullscreenAppWidget` | `appSDK.location.FullPage` |
| `appSdk._extension` | `appSdk._uiLocation` |

These migration steps help you transition smoothly to App SDK v2.0.0. For any questions, contact [Contentstack Support](mailto:support@contentstack.com).

## Common questions

**Q: Which metadata methods changed their response structure in v2.0.0?**  
A: `createMetaData()`, `retrieveMetaData()`, `retrieveAllMetaData()`, `updateMetaData()`, and `deleteMetaData()`.

**Q: What should I replace `appSDK.location.EntryFieldLocation` with?**  
A: Replace `appSDK.location.EntryFieldLocation` with `appSDK.location.FieldModifierLocation`.

**Q: What replaced `appSdk._extension` in v2.0.0?**  
A: Version 2.0.0 replaces `_extension` with `_uiLocation`, so use `appSdk._uiLocation`.

**Q: Who should I contact if I have questions about the migration?**  
A: Contact [Contentstack Support](mailto:support@contentstack.com).