---
title: "[Studio] - Get Started with Studio React SDK"
description: Use this guide to get started with the Studio React SDK.
url: https://www.contentstack.com/docs/developers/sdks/studio-sdk/react/get-started-with-studio-react-sdk
product: Contentstack Studio
doc_type: sdk-guide
audience:
  - developers
  - frontend-engineers
version: latest
last_updated: 2026-03-25
---

# [Studio] - Get Started with Studio React SDK

This page explains how to install and initialize the Studio React SDK in a React app, connect it to the Contentstack Delivery SDK (with Live Preview enabled), and render compositions using the provided hooks and components. It is intended for developers integrating Contentstack Studio composition rendering and preview/edit workflows into React, including SSR scenarios.

## Get Started with Studio React SDK

Use this guide to get started with the Studio React SDK. You will learn how to install the `@contentstack/studio-react` package, connect it to the Contentstack Delivery SDK, and render your first composition in a React component.

In this guide, you will:
- Set up the stack client.
- Initialize the SDK using `studioSdk.init`.
- Load and render a composition with `useCompositionData` and `StudioComponent`.

## Prerequisites
Before you begin, ensure the following requirements are met:
- A [Contentstack stack](/docs/developers/set-up-stack/about-stack) is set up, and you have valid API credentials.
- The [Contentstack Delivery SDK (TypeScript)](/docs/developers/sdks/content-delivery-sdk/typescript) is installed and imported into your React app.
- Live Preview is enabled in the Delivery SDK configuration.
- [**Node.js v18 or later**](https://nodejs.org/en) is running in your development environment.

## Installation and Setup
Open your terminal and install the Studio React SDK using the `npm` command.

```
npm install @contentstack/studio-react
```

Once the SDK is installed, initialize it to connect your React app to Studio.

## Initialize the SDK
The `studioSdk` object manages configuration and communication between your React app and Studio. Initialization allows you to fetch and render compositions, including support for SSR.

When you initialize the SDK, you create a runtime link between your app and Studio. During initialization, perform the following steps:
- Pass the **Contentstack Delivery SDK** `stack` (with **Live Preview** enabled) to `studioSdk.init()`.
- Register the SDK configuration options (for example, content type, CSLP settings, and “Open in Studio” button options).
- Optional parameters are automatically applied with default values.
- Gain access to helper methods and configuration (via `getConfig()` and other returned utilities) for fetching and rendering compositions, including support for **SSR**.

### studioSdk.init()
The `studioSdk.init()` method initializes the SDK with your configuration.

**Returns:** An object containing methods to fetch the compositions in SSR mode.

**Parameters:**

| Name | Type | Description |
|---|---|---|
| stackSdk (required) | stack | Contentstack Delivery SDK instance with Live Preview enabled. |
| contentTypeUid | string | UID of the content type storing the UI specification. |
| cslp | object | Contentstack Live Preview configuration. |
| appendTags | boolean | Whether to append CSLP tags. Defaults to `false`. |
| openInStudioButton | object | Configuration for the “Open in Studio” button. |
| openInStudioButton.enable | boolean | Enable/disable “Open in Studio” button. Defaults to `true`. |
| openInStudioButton.position | string | Position of the button. Options: `top`, `top-left`, `top-right`, `top-center`, `bottom`, `bottom-left`, `bottom-right`, `bottom-center`. Defaults to `bottom`. |

**Example:**

```
import { studioSdk } from '@contentstack/studio-react';
import contentstack from '@contentstack/delivery-sdk';
const stack = contentstack.stack({
  apiKey: "YOUR_API_KEY",
  deliveryToken: "YOUR_DELIVERY_TOKEN",
  environment: "YOUR_ENVIRONMENT",
  live_preview: {
    preview_token: "YOUR_PREVIEW_TOKEN",
    enable: true,
  },
});
// Initialize the SDK with your configuration
studioSdk.init({
  stackSdk: stack, // Contentstack Delivery SDK instance (REQUIRED)
});
```

**Note:** If options are not provided, the SDK uses the following default values:

```
{
  contentTypeUid: "",
  cslp: {
    appendTags: false,
  },
  openInStudioButton: {
    enable: true,
    position: "bottom",
  }
}
```

### fetchComposition(compositionQuery, options)
The `fetchComposition(compositionQuery, options)` method fetches composition data and specifications from Studio.

**Returns:**

Type `Promise <CompositionData>`

**Parameters:**

| Name | Type | Description |
|---|---|---|
| compositionQuery | CompositionQuery | Query object to fetch the composition data. |
| options | CompositionQueryOptions | (Optional) Delivery SDK options for linked data. |

**Example:**

```
const composition = await studioSdk.fetchComposition({
  compositionUid: 'my-composition-uid',
  searchQuery: window.location.search,
});
```

### getConfig()
The `getConfig()` method retrieves the current SDK configuration.

**Returns:**

Type `Config` - The current SDK configuration.

**Example:**

```
const config = studioSdk.getConfig();
```

## Core Components
Studio provides a list of React Components that render the composition in different scenarios. `StudioComponent` is the primary component that enables editing and preview of the spec.

### StudioComponent
The `StudioComponent` React component renders a complete Studio composition in edit or preview mode.
- **Edit Mode:** Enables drag-and-drop, inline editing, and all Studio features.
- **Preview Mode:** Displays the composition as end users see it, without editing tools.

**Props:**

| Name | Type | Description |
|---|---|---|
| specOptions | StudioComponentSpecOptions | Options returned from `useCompositionData` or `fetchComposition`. |
| data | Record<string, any> | (Optional) Component data linked to the composition. |

**Example:**

```
export function Home() {
  const { specOptions } = useCompositionData({
    compositionUid: "homepage",
  });
  return (
    <>

  );
}
```

### PreviewRenderer
The `PreviewRenderer` React component renders UI specifications in a lightweight, read-only format without providing editing capabilities.

**Props:**

| Name | Type | Description |
|---|---|---|
| spec | Omit<StudioSpec, "compositionEntry"> | The composition specification. |
| data | Record<string, any> | (Optional) Component data linked to the composition. |

**Example:**

```
import { PreviewRenderer } from '@contentstack/studio-react';

```

### StudioCanvas
The `StudioCanvas` React component enables visual editing and composition building.

It automatically detects the composition being edited and fetches its data, without requiring `spec` or `data` props. This component is useful when rendering compositions without setting up a page in the project, such as through a wildcard route.

**Example:**

```
import { StudioCanvas } from '@contentstack/studio-react';

```

## Next Steps
- Use advanced hooks like `useSelected` and `useHiddenElementNotification` to manage component states.
- Register custom components, JSON RTE elements, and design tokens to customize composition behavior.
- Refer to the API Reference for detailed documentation on all methods, utilities, and configuration options.

## Common questions

### Do I need Live Preview enabled to use the Studio React SDK?
Yes. Live Preview is listed as a prerequisite, and `stackSdk` is described as a Contentstack Delivery SDK instance with Live Preview enabled.

### What does `studioSdk.init()` return?
An object containing methods to fetch the compositions in SSR mode.

### How do I fetch a composition?
Use `fetchComposition(compositionQuery, options)` to fetch composition data and specifications from Studio.

### Which component should I use to render a composition?
`StudioComponent` is the primary component that enables editing and preview of the spec.