---
title: "[Set up Live Preview] - Get Started with Live Preview Utils SDK V3.0"
description: Get Started with Live Preview Utils SDK V3.0
url: https://www.contentstack.com/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3
product: Contentstack
doc_type: get-started
audience:
  - developers
version: "3.0"
last_updated: 2026-03-25
---

# [Set up Live Preview] - Get Started with Live Preview Utils SDK V3.0

This page explains how to install, initialize, and use the Live Preview Utils SDK v3.0 to listen to entry change events, update your website in real time, and configure editing-related buttons. It is intended for developers integrating Contentstack Live Preview into SSR or CSR websites and should be used when setting up or migrating Live Preview functionality.

## Get Started with Live Preview Utils SDK V3.0

The Live Preview Utils SDK version 3 allows you to listen to entry change events triggered by the Contentstack app and update your website in real time. You can also configure the “Edit” button functionality to enhance collaboration and content editing workflows.

## Prerequisite
- [Node.js](https://nodejs.org/) version 4.4.7 or later

## Migrate from V2 to V3 (optional)
If you are upgrading from version 2 to version 3 of the Live Preview Utils SDK, there are some key changes that may impact your existing implementation. Below are the important updates and recommended alternatives to ensure a smooth transition.
- **Removal of **`**setConfigFromParams**`The `setConfigFromParams` method, previously used to extract the Live Preview hash from the request query string (available via `Contentstack.hash`), has been removed.

If you have implemented `setConfigFromParams` in your middleware, you can safely remove it. To manually extract and use the Live Preview hash, refer to **Step 3: Utilize the Live Preview Hash** in the [Set Up the Website](/docs/developers/set-up-live-preview/live-preview-implementation-for-ssr-without-contentstack-sdk#set-up-the-website) section.
- **Removal of **`**getGatsbyDataFormat**`The `getGatsbyDataFormat` method has been deprecated in version 3. This method is no longer necessary because the `gatsby-source-contentstack` plugin now handles data formatting internally.

Use the [`gatsby-source-contentstack`](https://www.gatsbyjs.com/plugins/gatsby-source-contentstack/) plugin for your Gatsby project to ensure seamless compatibility with Live Preview.

By addressing these changes during your migration, you can ensure smooth integration with version 3 of the Live Preview Utils SDK.

## Installation and Setup
To install the `live-preview-utils` package via `npm`, run the following command:

```
npm install @contentstack/live-preview-utils@3
```
Alternatively, include the live-preview-utils package directly in your website’s HTML code:

```

  import ContentstackLivePreview from 'https://esm.sh/@contentstack/live-preview-utils@3.0.1';
  ContentstackLivePreview.init({
      stackDetails: {
          apiKey: "your-stack-api-key",
      },
  });

```

## Initialize the SDK
To initialize the Live Preview Utils SDK, import and execute the following command:

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init({
    stackDetails: {
        apiKey: "your-stack-api-key",
    },
});
```
Alternatively, initialize the SDK inside the HTML tag using the `ContentstackLivePreview.init()` method:

```

    ContentstackLivePreview.init({
        stackDetails: {
            apiKey: "your-stack-api-key"
        },
    });

```

### init(config: IConfig)
The `init()` method initializes the Live Preview Utils SDK by setting up the necessary event listeners. It accepts a configuration object with the following properties:

#### enable
The `enable` property determines enablement or disablement of Live Preview communications.

| Type | Default | Optional |
|---|---|---|
| boolean | true | yes |

#### ssr
The `ssr` property defines the data update strategy for previewed content based on your app's rendering approach ([Server-Side Rendering](/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-server-side-rendering/) or [Client-Side Rendering](/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-client-side-rendering/)).

| Type | Default | Optional |
|---|---|---|
| boolean | true | yes |

- `ssr: true`: For SSR apps, requests a fresh HTML page on each content edit.
- `ssr: false`: For CSR apps, the app listens to entry changes and updates the page content dynamically.

**Note:** In CSR mode, the `stackSdk` property is required. Passing this object will automatically switch the mode to CSR. This configuration allows you to override the default behavior.

#### mode
The `mode` property determines whether the site operates in the **Live Preview** or **Visual Builder** environment.

If set to `preview`, clicking the hovered Edit button navigates to the Contentstack Live Preview panel.

If set to `builder`, clicking the Start Editing button navigates to the Contentstack Visual Builder.

| Type | Default | Optional |
|---|---|---|
| string | preview | yes |

**Note:** The site will still function in the Live Preview panel even when the mode is set to `builder`.

#### editButton
The `editButton` object lets you manage the "Edit" button.

##### enable
The `enable` property displays or hides the "Edit" button.

| Type | Default | Optional |
|---|---|---|
| boolean | true | no |

##### exclude
The `exclude` property provides an option to exclude the "Edit" button from either inside or outside the Live Preview portal.

| Type | Default | Optional |
|---|---|---|
| array | [] | yes |

The array accepts the following string values:
- `insideLivePreviewPortal`: Used when you want to remove the "Edit" button from within the Live Preview portal.
- `outsideLivePreviewPortal`: Used when you want to remove the "Edit" button from outside the Live Preview portal.

**Note:** Although you have excluded the "Edit" button for Live Preview, you can add the `cslp-buttons` query parameter in your website URL to display the "Edit" button outside of your Live Preview-enabled website.

##### includeByQueryParameter
The `includeByQueryParameter` property overrides the `cslp-buttons` query parameter to enable/disable the "Edit" button.

| Type | Default | Optional |
|---|---|---|
| boolean | true | yes |

##### position
The `position` property places the "Edit" button in predefined positions (e.g., top-right, bottom-center).

| Type | Default | Optional |
|---|---|---|
| string | top | yes |

**Note:** The default position of the "Edit" button is set to "top". In a collaborative work environment, you can also manually position the "Edit" button on your website by applying the `data-cslp-button-position` attribute to the HTML tag with one of the position values.

**Example Configuration:**

```
ContentstackLivePreview.init({
    editButton: {
        enable: true,
        exclude: ["outsideLivePreviewPortal"],
        includeByQueryParameter: false,
        position: "top-right",
    },
});
```

#### editInVisualBuilderButton
The `editInVisualBuilderButton` object allows you to manage the **Start Editing** button on your website. It provides the following functionalities:
- Enable or disable the **Start Editing** button
- Adjust the button's position using four predefined placements

##### enable
The `enable` property displays or hides the **Start Editing** button on your website.

| Type | Default | Optional |
|---|---|---|
| boolean | true | yes |

##### position
The `position `property places the **Start Editing** button in predefined positions (e.g., top-right, top-left, bottom-right, bottom-left).

| Type | Default | Optional |
|---|---|---|
| string | bottom-right | yes |

**Tip**: Choose a position that doesn't overlap with other UI elements to ensure a seamless editing experience.

#### cleanCslpOnProduction
The `cleanCslpOnProduction` object removes `data-cslp` attributes from the website if `enable` is set to `false`.

| Type | Default | Optional |
|---|---|---|
| boolean | true | yes |

#### stackDetails
The `stackDetails` object contains stack-specific information for redirection to the corresponding entry whenever you use [edit tags](/docs/developers/set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest/) within your website.

```
stackDetails: {
    apiKey: "string", // API key of the stack
    environment: "string",
    branch: "string"
}
```
**Note:** If you do not use live edit tags, then you don't need to use the `stackDetails` property.

#### clientUrlParams
The `clientUrlParams` object specifies the stack's URL details for your webpage content. By default, it is configured for the North American (NA) region.

```
// For North American Region
{
    protocol: "https",
    host: "app.contentstack.com",
    port: 443
}
// For European Region
{
    protocol: "https",
    host: "eu-app.contentstack.com",
    port: 443
}
// For Azure EU Region
{
    protocol: "https",
    host: "azure-eu-app.contentstack.com",
    port: 443
}
// For Azure NA Region
{
    protocol: "https",
    host: "azure-na-app.contentstack.com",
    port: 443
}
// For GCP NA Region
{
    protocol: "https",
    host: "gcp-na-app.contentstack.com",
    port: 443
}
```
**Note:** Use the `clientUrlParams` object only when you need to customize the URL.

#### stackSdk
The `stackSdk` object represents the Stack class obtained by executing the `Contentstack.Stack()` method. It is essential for Client-Side Rendering (CSR) to inject the Live Preview hash and content type UID into the Stack class.

#### enableLivePreviewOutsideIframe
The `enableLivePreviewOutsideIframe` property controls whether Live Preview opens the website in a new browser tab outside the iframe.

| type | default | optional |
|---|---|---|
| boolean | false | yes |

## Properties and Methods
This section explains the essential properties and methods provided by the Live Preview Utils SDK to handle real-time content updates.

### onLiveEdit(callback: () => void)
The `onLiveEdit` method updates the content displayed in the Live Preview panel whenever an entry is modified. It sends a single API request to retrieve the draft content and reflect the changes in real time.

**Note:** The `onLiveEdit` method is designed exclusively for Client-Side Rendering (CSR) and does not fetch published content.

To use the `onLiveEdit` method in a CSR setup, create a function (e.g., `updateData()`) to fetch and process data. Pass this function to the `onLiveEdit` method, which will execute it whenever new data is available.

```
// utils.js
import ContentstackLivePreview from '@contentstack/live-preview-utils';

export const onLiveEdit = ContentstackLivePreview.onLiveEdit;
```
Here’s how you can use the `onLiveEdit` method in a React component:

```
// Footer.js
import React from "react";
import { onLiveEdit } from "./utils.js";

const Footer = () => {
    const [data, setData] = React.useState({});

    // Function to fetch data and update the state
    const updateData = () => {
        const fetchedData = SomeCallToGetData();
        setData(fetchedData);
    };

    // Set up the onLiveEdit method to execute the updateData function
    React.useEffect(() => {
        onLiveEdit(updateData);
    }, []);

    return {data.company_name};
};
```

### onEntryChange(callback: () => void)
The `onEntryChange` method is designed for Client-Side Rendering (CSR) applications, where the framework manages data collection and rendering. This method triggers a specified callback function, such as `updatePage()`, whenever new content is available, ensuring real-time updates.

**Note:** The `onEntryChange` method only works when `SSR` is set to `false`, indicating that the application is using CSR.

```
// utils.js
import ContentstackLivePreview from '@contentstack/live-preview-utils';

// Export the onEntryChange method for use in components
export const onEntryChange = ContentstackLivePreview.onEntryChange;
```
To use the `onEntryChange` method, create a function (e.g., `updateData`) that fetches and stores updated data. Pass this function to `onEntryChange` to execute it whenever new data is available.

```
// Footer.js
import React from "react";
import { onEntryChange } from "./utils.js";

const Footer = () => {
    const [data, setData] = React.useState({});

    // Define a function to fetch and update data
    const updateData = () => {
        const fetchedData = SomeCallToGetData(); // Replace with actual data fetch logic
        setData(fetchedData);
    };

    // Use the onEntryChange method to trigger updates
    React.useEffect(() => {
        onEntryChange(updateData);
    }, []);

    return {data.company_name};
};
```
You can enhance the `onEntryChange` method by using the optional `skipInitialRender: true` parameter. This prevents an unnecessary initial API call, ensuring the function only executes when new data is available.

**Example:**

```
onEntryChange(fetchData, { skipInitialRender: true })
```

### hash
The `hash` property retrieves the live preview hash of the entry. If the page is not opened in the Live Preview pane, it returns an empty string.

**Example:**

```
console.log(ContentstackLivePreview.hash); //"hash"
```

### config
The `config` property provides the following properties and their values:
- **ssr**: Indicates if server-side rendering (SSR) is enabled.
- **enable**: Specifies whether Live Preview is active.
- **cleanCslpOnProduction:** Determines if Live Preview configurations are cleaned in the production environment.
- **stackDetails**: The `stackDetails` object contains essential context for the Live Preview environment, including:**apiKey**: The API key of the stack.
- **environment**: The environment in which the preview is running.
- **contentTypeUid**: The UID of the content type.
- **entryUid**: The UID of the specific entry.
- **clientUrlParams**: Provides parameters related to the client URL.
- **windowType**: Determines the context of the parent window, with the following possible values:**preview**: The site is loaded as an iframe in the Live Preview or Timeline preview environment.
- **builder**: The site is loaded as an iframe in the Visual Builder environment.
- **independent**: The site is loaded directly, outside of the Contentstack platform.
- [**hash**](#hash): Contains the hash value for the current Live Preview session.
- **editButton**: Refers to the state or presence of the edit button.
- **mode**: Specifies the operating mode (`preview` or `builder`).

## Common questions

### Do I need `stackDetails` to initialize the SDK?
No. **Note:** If you do not use live edit tags, then you don't need to use the `stackDetails` property.

### When should I set `ssr` to `false`?
Set `ssr: false` for CSR apps, where the app listens to entry changes and updates the page content dynamically.

### Why would I customize `clientUrlParams`?
Use the `clientUrlParams` object only when you need to customize the URL.

### How can I avoid an unnecessary initial API call with `onEntryChange`?
Use the optional `skipInitialRender: true` parameter: `onEntryChange(fetchData, { skipInitialRender: true })`

<!-- filename: set-up-live-preview-get-started-with-live-preview-utils-sdk-v3-0.md -->