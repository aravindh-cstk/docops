---
title: "[Set Up Live Preview] Live Preview Implementation for NextJS CSR App Router"
description: "Implement Live Preview in NextJS CSR App Router with Contentstack for seamless real-time content updates and previews."
url: /headless-cms/live-preview-implementation-for-nextjs-csr-app-router
---

# [Set Up Live Preview] Live Preview Implementation for NextJS CSR App Router

## Live Preview Implementation for NextJS CSR App Router

Client-side rendering (CSR) means your website loads data and builds pages directly inside the browser using JavaScript. This guide walks you through setting up Contentstack Live Preview for CSR websites using REST APIs.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens)
-   Website that uses [Contentstack Delivery SDKs](https://www.contentstack.com/docs/developers/sdks)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview for your NextJS CSR App router:

1.  ## Set Up the Website
    
    To enable Live Preview on your website, begin by setting up the essentials.
    
    1.  ### Generate a Preview Token
        
        Create a preview token by navigating to **Settings** \> **Tokens** \> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac)**.**
        
        **Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.
        
        Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **\+ Create Preview Token** option and copy the generated token.  
        ![enable-preview-token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ab5f111f767ae8/684ac9714d8175ee4bc8dc4a/0._enable_preview_token.png)
        
    2.  ### Update Contentstack's Delivery SDK:
        
        Add the Live Preview configuration inside the Contentstack.Stack() method when configuring Contentstack’s Delivery SDK. For example, here’s a sample configuration using the [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/):
        
        ```
        // utils.js
        import Contentstack from 'contentstack'
        const Stack = Contentstack.Stack({ 
          ...
          // update your configs here
          live_preview: {
            preview_token: preview_token,
            enable: true,
            host: 'rest-preview.contentstack.com' //recommended
          },
          ...
        })
        ```
        
        **Note**: For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. For other data centers:
        
        -   **AWS EU**: eu-rest-preview.contentstack.com
        -   **Azure NA**: azure-na-rest-preview.contentstack.com
        -   **Azure EU**: azure-eu-rest-preview.contentstack.com
        -   **GCP NA:** gcp-na-rest-preview.contentstack.com
        -   **GCP EU:** gcp-eu-rest-preview.contentstack.com
        
    3.  ### Migrate to New Preview Service (recommended)
        
        Upgrade the Contentstack SDK to its latest version. Find the Contentstack.Stack() initialization method and replace the management\_token parameter with the preview\_token as shown below:
        
        ```
        // utils.js
        Contentstack.Stack({
          ...
          live_preview: {
            enable: true,
            host: "rest-preview.contentstack.com", // optional    preview_token: "csxxxxxxxxxxxx"
          }
        })
        ```
        
        **Note:** For detailed information on migrating to the preview service refer to the [Migrate to Preview Service](/docs/headless-cms/migrate-to-preview-service/) documentation.
        
        **Warning:** Upgrading to the latest SDK version won't disrupt your existing configuration, but you might notice suboptimal performance in live preview within references and other operations. To enhance efficiency, update the host and replace management\_token with preview\_token.
        
    4.  ### Install and Initialize the Live Preview Utils SDK:
        
        Use the [Live Preview Utils SDK](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.
        
        You can either use npm or yarn to install the Live Preview Utils SDK.
        
        To install the package via npm use the following command:
        
        ```
        npm install @contentstack/live-preview-utils@contentstack/utils
        ```
        
        Initialize the SDK using the init() method to set up event listeners for content updates:
        
        ```
        // utils.js
        ...
        import ContentstackLivePreview from "@contentstack/live-preview-utils";
        ContentstackLivePreview.init({
          stackSdk: Stack,
          enable: true,
          ssr: false,
          // Recommended: Enables Edit Tags
          editButton: { enable: true },
          stackDetails: {
            apiKey: "your api key",
            environment: "your environment value",
            branch: "your branch",
          },
          clientUrlParams: {
            protocol: "https",
            host: "app.contentstack.com", // Use region-specific host if applicable
            port: 443,
          },
        });
        export const onEntryChange = ContentstackLivePreview.onEntryChange;
        ...
        ```
        
        **Note:** To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.
        
    5.  ### Configure Live Preview across Each Webpage
        
        When you update an entry, the onEntryChange() method detects the change and runs your defined logic to fetch updated data. In a React-based setup, each page typically includes a function that retrieves data and updates the component state.
        
        In the example below, an updateData() function handles the data fetch and state update. Pass this function to onEntryChange() inside a useEffect() hook to automatically refresh the data whenever the entry content changes.
        
        ```
        // Footer.js
                import React from "react";
                import { onEntryChange } from "./utils.js";
                const Footer = () => {
                    const [data, setData] = React.useState({});
                    const updateData = async () => {
          const fetchedData = await getCMSData();
          setData(fetchedData);
        };
                    React.useEffect(() => {
                        onEntryChange(updateData);
                    }, []);
                    return <div>{data.company_name}</div>;
                };
        ```
        
2.  ## Host the Website
    
    To host a website, you can simply use [launch](/docs/launch) or any other website hosting service.
    
3.  ## Update Stack Settings
    
    To set up Live Preview for the entries of your stack, perform the following steps:
    
    1.  Navigate to **Settings** and select **Environments**.
    2.  [Set the base URL](/docs/headless-cms/add-an-environment/)s for different locales, and click **Update**. ![Base URL setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbaa7fda3f1479aaa/684ac97134388681002cdeee/1._edit_environment_box.png)
    3.  Select **Visual Experience** from the stack settings.
    4.  In the **General** tab, select the **Enable Live Preview** checkbox.
    5.  Set the **Default Preview Environment** and click **Save** to save the settings.
        
        **Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.
        
    6.  Enable the **Display Setup Status** toggle to display the configuration status.       ![Enable_LP_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b2de40925240e2f/69bd80e04440ed410cb1da8e/Enable_LP_Open_in_New_Tab.png)
        
        You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.
        
4.  ## Live Edit Tags for Entries (recommended)
    
    Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.
    
    **Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest)
