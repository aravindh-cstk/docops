---
url: /headless-cms/get-started-with-live-preview-utils-sdk-v4
marker: "Headless CMS | Live Preview"
heading: "Get Started with Live Preview Utils SDK V4.0"
---

The Live Preview Utils SDK version 4 allows you to listen to entry change events triggered by the Contentstack app and update your website in real time. You can also configure the “Edit” button functionality to enhance collaboration and content editing workflows.

## Prerequisite

-   Node.js version 4.4.7 or later

## Installation and Setup

To install the live-preview-utils package via npm, run the following command:

Alternatively, include the live-preview-utils package directly in your website’s HTML code:

If you initialize the SDK using this snippet, do not initialize it again in your app bundle on the same page.

### Initialize the SDK

Initialize the SDK to enable communication between your site and Contentstack:

## init(config: IConfig)

The init() method initializes the Live Preview Utils SDK by setting up the necessary event listeners. It accepts a configuration object as a parameter. The following options are available for the configuration.

### enable

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>true</td><td>yes</td></tr></tbody></table>

The enable property determines whether Live Preview communications are enabled.

### ssr

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>true</td><td>yes</td></tr></tbody></table>

The ssr property determines the data-update strategy for previewed content whenever you change entry content. It depends on whether your app is SSR or CSR.

If you set the property to true, your app or website is rendered from the server (SSR), and a request is sent for a fresh HTML page every time you edit content.

If you set the property to false, the app is rendered from the client side (CSR). Your framework, such as React, fetches the data and reloads the existing page.

> **Note:** For CSR mode, stackSdk is required, so Contentstack automatically switches the mode to CSR when you pass this object. This config overrides the default behavior.

### mode

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>string</td><td>preview</td><td>yes</td></tr></tbody></table>

The mode property specifies whether the site is editable in the Live Preview or Visual Builder environment.

If set to preview, clicking the hovered Edit button navigates to the Contentstack Live Preview panel.

If set to builder, clicking the Start Editing button navigates to the Contentstack Visual Builder. The site still functions in the Live Preview panel even when set to builder.

### editButton

The editButton object lets you manage the Edit button both within and outside the Live Preview portal. It offers the following:

-   Enable or disable the Edit button
-   Include or exclude the Edit button from inside or outside the Live Preview panel
-   Adjust the position of the Edit button using eight predefined positions

The editButton object contains four keys:

#### enable

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>true</td><td>no</td></tr></tbody></table>

Specifies whether to display the Edit button. Boolean, with a value of true or false.

#### exclude

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>array</td><td>[ ]</td><td>yes</td></tr></tbody></table>

Excludes the editButton from either inside or outside the Live Preview portal for certain conditions. Array, with any of the following string values:

-   insideLivePreviewPortal: removes the Edit button from within the Live Preview portal.
-   outsideLivePreviewPortal: removes the Edit button from outside the Live Preview portal.
    
    > **Note:** Even if you exclude the Edit button for Live Preview, you can add the cslp-buttons query parameter to your website URL to display the Edit button outside a Live Preview-enabled website.
    

#### includeByQueryParameter

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>true</td><td>yes</td></tr></tbody></table>

Overrides the cslp-buttons query parameter. Set it to true or false to enable or disable the Edit button option.

#### position

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>string</td><td>top</td><td>yes</td></tr></tbody></table>

Places the Edit button in one of eight predefined positions within or over the Live Preview portal: left, right, top-left (or top), top-right, top-center, bottom-left (or bottom), bottom-right, and bottom-center.

> **Note:** The default position is top. In a collaborative environment, you can also position the Edit button manually by applying the data-cslp-button-position attribute to the HTML tag with one of the position values.

**For example:**

```
ContentstackLivePreview.init({
    ...
    editButton: {
        enable: true,
        exclude: ["outsideLivePreviewPortal"],
        includeByQueryParameter: false,
        position: 'top-right',
    }
});
```

### enableLivePreviewOutsideIframe

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>undefined (off)</td><td>yes</td></tr></tbody></table>

Enables Live Preview behavior when your site runs outside the Contentstack iframe — that is, on the live site itself rather than embedded in the Live Preview or Visual Builder panel. Set to true to enable.

### editInVisualBuilderButton

The editInVisualBuilderButton object lets you manage the Start Editing button outside Visual Builder. It offers the following:

-   Enable or disable the Start Editing button
-   Adjust the position of the Start Editing button using four predefined positions

The editInVisualBuilderButton object contains two keys:

#### enable

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>true</td><td>yes</td></tr></tbody></table>

Specifies whether to display the Start Editing button. Boolean, with a value of true or false.

#### position

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>string</td><td>bottom-right</td><td>yes</td></tr></tbody></table>

Places the Start Editing button in one of four predefined positions: top-left, top-right, bottom-left, and bottom-right.

### overlayPropagation

Use this option when hovering or clicking a field in your app does nothing — no outline appears and the Edit button does not show. This typically happens when another element, such as a navigation overlay, image layer, or layout spacer, sits on top of the field and captures the mouse event instead.

Enabling overlayPropagation tells the SDK to look through stacked elements at the cursor position to find the field underneath. It works in both Visual Builder and the standalone Live Preview Edit button.

> **Tip:** When to enable: turn this on only if you notice fields that do not respond to hover or click in your specific app layout. It is off by default.

The overlayPropagation object contains one key:

#### enable

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>false</td><td>yes</td></tr></tbody></table>

Set to true to let the SDK detect fields that are visually covered by other elements.

**For example:**

```
ContentstackLivePreview.init({
    ...
    overlayPropagation: {
        enable: true,
    }
});
```

### cleanCslpOnProduction

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Optional</strong></td></tr><tr><td>boolean</td><td>true</td><td>yes</td></tr></tbody></table>

When enable is set to false and cleanCslpOnProduction is set to true, the data-cslp attributes are removed from the website.

### stackDetails

The stackDetails object contains stack-related information that helps redirect to the corresponding entry whenever you use edit tags within your website. If you do not use live edit tags, you do not need the stackDetails property.

```
stackDetails {
    apiKey: string
    environment: string
}
```

#### apiKey

The API key of the concerned stack.

<table><tbody><tr><td colspan="2"><strong>Note: </strong>This is required if you are using live edit tags.</td></tr><tr><td><strong>Type</strong></td><td><strong>Optional</strong></td></tr><tr><td>string</td><td>yes (no, if you are using edit tags)</td></tr></tbody></table>

#### environment

The environment name of the concerned stack.

<table><tbody><tr><td><strong>Type</strong></td><td><strong>Optional</strong></td></tr><tr><td>string</td><td>yes</td></tr></tbody></table>

### clientUrlParams

The clientUrlParams object contains the URL information of the stack that holds your webpage content. By default, the configuration is set for the NA region.

#### NA config

```
{
    protocol: "https",
    host: "app.contentstack.com",
    port: 443,
}
```

#### EU config

```
{
    protocol: "https",
    host: "eu-app.contentstack.com",
    port: 443,
}
```

Pass the clientUrlParams object only if you need to modify the URL.

### stackSdk

The stackSdk object represents the Stack class returned by the Contentstack.Stack() method. It is required for Client-Side Rendering (CSR), because the Live Preview hash and content type UID are injected into the Stack class.

## onLiveEdit(callback: () => void)

The onLiveEdit method modifies the content inside the Live Preview panel as soon as a change is made in the entry. It runs a single API request to retrieve draft content and display the changes in the Live Preview panel.

> **Note:** The onLiveEdit method does not fetch published content and applies only in Client-Side Rendering (CSR) mode.

For CSR, the framework handles data collection and rendering, so create a function, such as updateData, to fetch data and pass it to onLiveEdit. The method runs updateData whenever new data is available. In a React app, call onLiveEdit inside useEffect and pass the updateData function to it.

```
// utils.js
...
export const onLiveEdit = ContentstackLivePreview.onLiveEdit;
...
 
// Footer.js
import React from "react";
import ContentstackLivePreview from "./utils.js";
 
const Footer = () => {
    const [data, setData] = React.useState({});
 
    const updateData = () => {
        const fetchedData = SomeCallToGetData();
        setData(fetchedData);
    };
 
    React.useEffect(() => {
        ContentstackLivePreview.onLiveEdit(updateData);
    }, []);
 
    return <div>{data.company_name}</div>;
};
```

## onEntryChange(callback: () => void)

For CSR, the framework handles data collection and rendering, so create a function responsible for fetching and storing data, such as updatePage(), and pass it to onEntryChange(). The method runs the function whenever new data is available.

> **Note:** **Note**:This function works only when ssr is set to false, indicating a CSR application.

```
// utils.js
...
export const onEntryChange = ContentstackLivePreview.onEntryChange;
...
 
// Footer.js
import React from "react";
import ContentstackLivePreview from "live-preview-utils";
 
const Footer = () => {
    const [data, setData] = React.useState({});
 
    const updateData = () => {
        const fetchedData = SomeCallToGetData();
        setData(fetchedData);
    };
 
    React.useEffect(() => {
        ContentstackLivePreview.onEntryChange(updateData);
    }, []);
 
    return <div>{data.company_name}</div>;
};
```

> **Note:** To make onEntryChange behave like onLiveEdit, use the optional parameter skipInitialRender: true, which calls the Contentstack API only once.

**For example:**

```
onEntryChange(fetchData, { skipInitialRender: true });
```

## setPageContext(context)

The setPageContext() method tells Visual Builder which entry the current page renders, so the Start Editing button and the init handshake target the correct entry, even when a page is served from a custom URL that the SDK cannot map to an entry on its own.

The context is used in two places: on the initial init handshake, so Visual Builder can confirm whether the entry it has open matches the page rendered in the iframe; and on the Start Editing button click, so it can navigate to the correct entry. Because init() run before your async data fetch resolves, calling setPageContext() once your entry is available sends the context to Visual Builder so it can update its current entry.

Place the call alongside your existing addEditableTags call, since both reference the same entry object.

<table><tbody><tr><td><strong>Parameter</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">context.entryUid</span></td><td>string</td><td>UID of the entry the current page renders</td></tr><tr><td><span class="code">context.contentTypeUid</span></td><td>string</td><td>UID of that entry’s content type</td></tr></tbody></table>

**For example:**

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Utils from "@contentstack/utils";
 
// In your page component (for example, inside useEffect, once the entry is fetched)
Utils.addEditableTags(entry, "blog_post", true, "en-us");
ContentstackLivePreview.setPageContext({
    entryUid: entry.uid,
    contentTypeUid: "blog_post",
});
```

> **Note:** Inside the Visual Builder or Live Preview iframe, the context is also sent to Contentstack through a post message. Outside an iframe, the context is stored locally and used only to build the Start Editing redirect URL.

**Alternative ways to supply page context**

If you cannot call setPageContext() directly — for example, when no JavaScript hook is available for injecting runtime values — the SDK resolves the page context from these sources, in order of precedence:

1.  The value set with ContentstackLivePreview.setPageContext().
2.  A window.\_\_CS\_PAGE\_CONTEXT\_\_ global:
    
    ```
    window.__CS_PAGE_CONTEXT__ = {
        entryUid: "entry-123",
        contentTypeUid: "blog_post",
    };
    ```
    
3.  <meta> tags in the page <head>:
    
    ```
    <meta name="contentstack:entry-uid" content="entry-123" />
    <meta name="contentstack:content-type-uid" content="blog_post" />
    ```
    

Meta tags are a useful fallback for frameworks that render <meta> natively (for example, Next.js App Router metadata / generateMetadata(), or Nuxt useHead()) and for sites with a strict Content Security Policy that blocks inline scripts but allows meta tags.

## hash

The hash property returns the Live Preview hash of the entry. It returns an empty string if the page is not opened in the Live Preview pane.

> **Note:** In SSR mode, the hash may not be populated automatically. To extract and use the hash manually, refer to [Utilize the Live Preview Hash](/docs/headless-cms/live-preview-implementation-for-ssr-without-contentstack-sdk#utilize-the-live-preview-hash) in the Set Up the Website section.

**For example:**

```
console.log(ContentstackLivePreview.hash); // "hash"
```

## config

The config property returns the following properties and their values:

1.  ssr: Indicates if server-side rendering (SSR) is enabled.
2.  enable: Specifies whether Live Preview is active.
3.  cleanCslpOnProduction: Determines if Live Preview configurations are cleaned in the production environment.
4.  stackDetails: The stackDetails object contains essential context for the Live Preview environment, including:
    -   apiKey: The API key of the stack.
    -   environment: The environment in which the preview is running.
    -   contentTypeUid: The UID of the content type.
    -   entryUid: The UID of the specific entry.
5.  clientUrlParams: Provides parameters related to the client URL.
6.  windowType: Determines the context of the parent window, with the following possible values:
    -   preview: The site is loaded as an iframe in the Live Preview or Timeline preview environment.
    -   builder: The site is loaded as an iframe in the Visual Editor environment.
    -   independent: The site is loaded directly, outside of the Contentstack platform.
7.  hash: Contains the hash value for the current Live Preview session.
8.  editButton: Refers to the state or presence of the edit button.
9.  mode: Specifies the operating mode (preview or builder).
