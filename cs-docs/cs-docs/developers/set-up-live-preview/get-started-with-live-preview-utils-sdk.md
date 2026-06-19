---
title: "[Set up Live Preview] - Get Started with Live Preview Utils SDK V2.0"
description: Get Started with Live Preview Utils SDK V2.0
url: https://www.contentstack.com/docs/headless-cms/get-started-with-live-preview-utils-sdk
product: Contentstack
doc_type: get-started
audience:
  - developers
version: "2.0"
last_updated: 2026-03-25
---

# [Set up Live Preview] - Get Started with Live Preview Utils SDK V2.0

This page explains how to install, initialize, and use the Live Preview Utils SDK version 2.0 to listen to entry change events and update your website in real time, including configuration options like SSR/CSR behavior and the “Edit” button. It is intended for developers integrating Contentstack Live Preview into web applications and should be used when setting up Live Preview with the Utils SDK v2.

## Get Started with Live Preview Utils SDK V2.0

**Note:** Use [Live Preview Utils SDK version 3.0](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3/) or later for improved compatibility with the latest feature updates.

The Live Preview Utils SDK version 2 allows you to listen to entry change events triggered by the Contentstack app and update your website in real time. You can also configure the “Edit” button functionality to enhance collaboration and content editing workflows.

## Prerequisite

- [Node.js](https://nodejs.org/) version 4.4.7 or later

## Installation and Setup

To install the `live-preview-utils` package via `npm`, run the following command:

```
npm install @contentstack/live-preview-utils
```

Alternatively, include the live-preview-utils package directly in your website’s HTML code:

```

  import ContentstackLivePreview from 'https://esm.sh/@contentstack/live-preview-utils@2.0.0';
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
| --- | --- | --- |
| boolean | true | yes |

#### ssr

The `ssr` property defines the data update strategy for previewed content based on your app's rendering approach ([Server-Side Rendering](/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-server-side-rendering/) or [Client-Side Rendering](/docs/developers/set-up-live-preview/set-up-live-preview-with-rest-for-client-side-rendering/)).

| Type | Default | Optional |
| --- | --- | --- |
| boolean | true | yes |

- `ssr: true`: For SSR apps, requests a fresh HTML page on each content edit.
- `ssr: false`: For CSR apps, the app listens to entry changes and updates the page content dynamically.

**Note:** In CSR mode, the `stackSdk` property is required. Passing this object will automatically switch the mode to CSR, allowing you to override the default behavior.

#### editButton

The `editButton` object lets you manage the "Edit" button. It includes the following properties:

##### enable

The `enable` property displays or hides the "Edit" button.

| Type | Default | Optional |
| --- | --- | --- |
| boolean | true | no |

##### exclude

The `exclude` property provides an option to exclude the "Edit" button from either inside or outside the Live Preview portal.

| Type | Default | Optional |
| --- | --- | --- |
| array | [] | yes |

The array accepts the following string values:

- `insideLivePreviewPortal`: Used when you want to remove the "Edit" button from within the Live Preview portal.
- `outsideLivePreviewPortal`: Used when you want to remove the "Edit" button from outside the Live Preview portal.

**Note:** Although you have excluded the "Edit" button for Live Preview, you can add the `cslp-buttons` query parameter in your website URL to display the "Edit" button outside of your Live Preview-enabled website.

##### includeByQueryParameter

The `includeByQueryParameter` property overrides the `cslp-buttons` query parameter to enable/disable the "Edit" button.

| Type | Default | Optional |
| --- | --- | --- |
| boolean | true | yes |

##### position

The `position` property places the "Edit" button in predefined positions (e.g., top-right, bottom-center).

| Type | Default | Optional |
| --- | --- | --- |
| string | top | yes |

**Note:** The default position of the "Edit" button is set to "top". In a collaborative work environment, you can manually position the “Edit” button on your website using the `data-cslp-button-position` attribute.

**Example Configuration:**

```
ContentstackLivePreview.init({
    editButton: {
        enable: true,
        position: "top-right",
    },
});
```

#### cleanCslpOnProduction

The `cleanCslpOnProduction` object removes `data-cslp` attributes from the website if `enable` is set to `false`.

| Type | Default | Optional |
| --- | --- | --- |
| boolean | true | yes |

#### stackDetails

The `stackDetails` object contains stack-specific information for redirection to the corresponding entry whenever you use [edit tags](/docs/developers/set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest/) within your website.

```
stackDetails: {
    apiKey: "string", //api_key of the stack
    environment: "string",
    branch: "string"
}
```

**Note:** If you do not use live edit tags, then you don't need to use the `stackDetails` property.

#### clientUrlParams

The `clientUrlParams` object specifies the stack's URL details for your webpage content. By default, it is configured for the North American (NA) region.

```
//For North American Region
{
    protocol: "https",
    host: "app.contentstack.com",
    port: 443
}
//For European Region
{
    protocol: "https",
    host: "eu-app.contentstack.com",
    port: 443
}
//For Azure EU Region
{
    protocol: "https",
    host: "azure-eu-app.contentstack.com",
    port: 443
}
//For Azure NA Region
{
    protocol: "https",
    host: "azure-na-app.contentstack.com",
    port: 443
}
//For GCP NA Region
{
    protocol: "https",
    host: "gcp-na-app.contentstack.com",
    port: 443
}
```

**Note:** Use the `clientUrlParams` object only when you need to customize the URL.

#### stackSdk

The `stackSdk` object represents the Stack class obtained by executing the `Contentstack.Stack()` method. It is essential for Client-Side Rendering (CSR) to inject the Live Preview hash and content type UID into the Stack class.

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

**Note:** In SSR mode, the `hash` may not populate automatically. You may need to pass it explicitly using the `setConfigFromParams()` method.

**Example:**

```
console.log(ContentstackLivePreview.hash); //"hash"
```

### getGatsbyDataFormat(sdkQuery: IStackSdk, prefix: string)

Gatsby primarily fetches data using the `gatsby-source-contentstack` plugin. However, Live Preview is compatible only with the Contentstack SDK. To enable Live Preview in Gatsby, follow these steps:

- Fetch the data using the Contentstack SDK.
- Store the fetched data in a React state.
- Re-render the page using the `onEntryChange()` method.

Since the data format returned by `gatsby-source-contentstack` differs from the Contentstack SDK, you can use the `getGatsbyDataFormat()` method to adjust the entry names to match Gatsby's expectations. This method accepts two parameters:

- The **Contentstack Stack object** (returned by `Contentstack.Stack()`).
- The **prefix** defined in the `gatsby-config.js` file (default: `contentstack`).

**Example:**

```
const query = Stack.ContentType("your-contentype").Entry("entry-uid");

const formattedData = ContentstackLivePreview.getGatsbyDataFormat(
    query,
    "contentstack" // Prefix defined in gatsby-config.js
);

setData(formattedData);

```

**Before using **`**getGatsbyDataFormat()**`:

```
{
  "footer_lib": {
    "title": "footer",
    ...
  }
}

```

**After using **`**getGatsbyDataFormat()**`** with the prefix **`**contentstack**`:

```
{
  "contentstackFooterLib": {
    "title": "footer",
    ...
  }
}

```

## Common questions

### When should I use `ssr: true` vs `ssr: false`?
Use `ssr: true` for SSR apps, requests a fresh HTML page on each content edit. Use `ssr: false` for CSR apps, the app listens to entry changes and updates the page content dynamically.

### Do I need `stackDetails` if I am not using live edit tags?
**Note:** If you do not use live edit tags, then you don't need to use the `stackDetails` property.

### Why is `stackSdk` required in CSR mode?
**Note:** In CSR mode, the `stackSdk` property is required. Passing this object will automatically switch the mode to CSR, allowing you to override the default behavior.

### What does `skipInitialRender: true` do for `onEntryChange`?
This prevents an unnecessary initial API call, ensuring the function only executes when new data is available.

<!-- filename: set-up-live-preview-get-started-with-live-preview-utils-sdk-v2-0.md -->