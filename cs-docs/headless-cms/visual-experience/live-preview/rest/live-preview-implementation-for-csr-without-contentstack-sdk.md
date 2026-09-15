---
title: "Live preview for CSR without Contentstack Delivery SDK"
description: "Learn how to configure live preview for SSR websites without using Contentstack Delivery SDK."
url: /headless-cms/live-preview-implementation-for-csr-without-contentstack-sdk
uid: blt68b30471e7c5b43e
---

# Live preview for CSR without Contentstack Delivery SDK

## Live Preview for CSR without Contentstack Delivery SDK

Client-side rendering (CSR) means your website loads data and builds pages directly inside the browser using JavaScript. This guide walks you through setting up Contentstack Live Preview for CSR websites using REST APIs.

**Tip:** CSR mode can also be used for static site generators (SSG) that load dynamic content on the browser.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) errors

Follow these steps to configure Live Preview for your CSR website:

1.  ## Set Up the Website

    To enable Live Preview on your website, begin by setting up the essentials.

    1.  ### Generate a Preview Token

        Create a preview token by navigating to **Settings** \> **Tokens** \> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac)**.**

        **Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

        Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **\+ Create Preview Token** option and copy the generated token.  
        ![enable-preview-token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ab5f111f767ae8/684ac9714d8175ee4bc8dc4a/0._enable_preview_token.png)

    2.  ### Install and Initialize the Live Preview Utils SDK

        Use the [Live Preview Utils SDK](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.

        Install the SDK using one of the following methods:

        1.  **Via npm**:

            Install the Live Preview Utils SDK package via npm by running the following command:

            ```
            npm install @contentstack/live-preview-utils@contentstack/utils
            ```

            Initialize the SDK using the init() method to set up event listeners for content updates:

            ```
            import ContentstackLivePreview from "@contentstack/live-preview-utils";
            ContentstackLivePreview.init({
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
            ```

        2.  **Via script**:

            Add the following script tag to your HTML file to load the Live Preview Utils SDK::

            ```
            <script type='module'>
            import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";

            ContentstackLivePreview.init({
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
            </script>
            ```

            **Note:** To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

    3.  ### Update the REST URL and Headers

        To make sure your website works properly in the Live Preview panel, you need to update the REST API hostname. When the site loads in the preview panel, the Live Preview SDK detects a special value (called a hash) in the URL. You can use this value to tell your site to fetch data from the correct preview server.

        You can use a code snippet like the one below to fetch data from the Contentstack CDN accordingly:

        ```
        // utils.js

        function getHeaders() {
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
          headers.append("api_key", REACT_APP_CONTENTSTACK_API_KEY);
          return headers;
        }
        export const fetchData = async (ctUID, entryUID) => {
          const contentstackURL = new URL(
            `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`,
          );
          const headers = getHeaders();
          const res = await fetch(contentstackURL.toString(), {
            method: "GET",
            headers: headers,
          });
          return res.json();
        };
        ```

        By default, the contentstackURL points to the Contentstack CDN. The getHeaders() function adds the required headers. The fetchData() function sends the request and fetches the data.

        To support Live Preview, check if a hash is present, update the URL and headers to use the Preview Service instead.

        ```
        // utils.js
        import ContentstackLivePreview from "@contentstack/live-preview-utils";
        const CONTENTSTACK_CDN_URL = "cdn.contentstack.io";
        const LIVE_PREVIEW_HOST_NAME = "rest-preview.contentstack.com";
        function getHeaders() {
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
          headers.append("api_key", REACT_APP_CONTENTSTACK_API_KEY);
          return headers;
        }
        export const fetchData = async (ctUID, entryUID) => {
          const contentstackURL = new URL(
            `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`,
          );
          const hash = ContentstackLivePreview.hash;
          const headers = getHeaders();
          if (hash) {
            headers.append("live_preview", hash);
            headers.append("preview_token", REACT_APP_CONTENTSTACK_PREVIEW_TOKEN);
            // Optionally, to enable variant support add the include_applied_variants header.
            headers.append("include_applied_variants", "true");

            contentstackURL.hostname = LIVE_PREVIEW_HOST_NAME;
          } else {
            contentstackURL.hostname = CONTENTSTACK_CDN_URL;
          }
          const res = await fetch(contentstackURL.toString(), {
            method: "GET",
            headers: headers,
          });
          return res.json();
        };
        ```

        In this example, the hash helps you switch the hostname and set the right headers. To enable Live Preview, make sure you send both the hash and the preview\_token. Once this is set up, you can continue using the REST API as usual.

        **Note**: For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. For other data centers:

        -   **AWS EU**: eu-rest-preview.contentstack.com
        -   **Azure NA**: azure-na-rest-preview.contentstack.com
        -   **Azure EU**: azure-eu-rest-preview.contentstack.com
        -   **GCP NA:** gcp-na-rest-preview.contentstack.com
        -   **GCP EU:** gcp-eu-rest-preview.contentstack.com

            For other base urls like the CDN, refer to our documentation on [API Endpoints](/docs/administration/api-endpoints#base-api-urls-for-azure-north-america-region).


    4.  ### Configure Live Preview across Each Webpage

        When you update an entry, the onEntryChange() method detects the change and runs your defined logic to fetch updated data. In a React-based setup, each page typically includes a function that retrieves data and updates the component state.

        In the example below, an updateData() function handles the data fetch and state update. Pass this function to onEntryChange() inside a useEffect() hook to automatically refresh the data whenever the entry content changes.

        ```
        // utils.js
        ...
        export const onEntryChange = ContentstackLivePreview.onEntryChange;
         ...

        import React from "react";
        import { onEntryChange, fetchData } from "./utils.js";
        const Footer = () => {
          const [data, setData] = React.useState({});
          React.useEffect(() => {
            // For Initial render
            fetchData("your_content_type_uid", "your_entry_uid").then((data) => {
              const entry = data.entry;
              setData(entry);
            });
            // To fetch the live preview data
            onEntryChange(() => {
              fetchData("your_content_type_uid", "your_entry_uid").then((data) => {
                const entry = data.entry;
                setData(entry);
              });
            });
          }, []);
          return <div>{data.company_name}</div>;
        };/pre>
        ```

2.  ## Host the Website

    To host a website, you can simply use [launch](/docs/launch) or any other website hosting service.

3.  ## Update Stack Settings

    To set up Live Preview for the entries of your stack, perform the following steps:

    1.  Navigate to **Settings** and select **Environments**.
    2.  [Set the base URL](/docs/headless-cms/add-an-environment/)s for different locales, and click **Update**.![Base URL setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbaa7fda3f1479aaa/684ac97134388681002cdeee/1._edit_environment_box.png)
    3.  Select **Visual Experience** from the stack settings.
    4.  In the **General** tab, select the **Enable Live Preview** checkbox.
    5.  Set the **Default Preview Environment** and click **Save** to save the settings.

        **Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.

    6.  Enable the **Display Setup Status** toggle to display the configuration status.       ![Enable_LP_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b2de40925240e2f/69bd80e04440ed410cb1da8e/Enable_LP_Open_in_New_Tab.png)

        You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

4.  ## Live Edit Tags for Entries (recommended)

    Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

    **Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest)
