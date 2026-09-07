---
title: "Live Preview Implementation for NextJS SSR App Router"
description: "Implement Live Preview in NextJS SSR App Router with Contentstack for seamless real-time content updates and previews."
url: /headless-cms/live-preview-implementation-for-nextjs-ssr-app-router
uid: blt65aa3411c7ec53b4
---

# Live Preview Implementation for NextJS SSR App Router

## Live Preview Implementation for NextJS SSR App Router

Server-side rendering (SSR) means your website’s pages are generated on the server before they reach a visitor’s browser. Instead of building the page in the browser, the server sends fully prepared HTML to display. This guide explains how to configure Live Preview for SSR websites using REST APIs.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens)
-   Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) errors

Follow these steps to configure Live Preview for your NextJS SSR App router:

1.  ## Set Up the Website

    To enable Live Preview on your website, begin by setting up the essentials.

    1.  ### Generate a Preview Token

        Create a preview token by navigating to **Settings** \> **Tokens** \> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac)**.**

        **Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.

        Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **\+ Create Preview Token** option and copy the generated token. ![enable-preview-token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ab5f111f767ae8/684ac9714d8175ee4bc8dc4a/0._enable_preview_token.png)

    2.  ### Update Contentstack's delivery SDK:

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

        **Note**: For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. If your website is hosted on a different data center, use one of the following values:

        -   **AWS EU**: eu-rest-preview.contentstack.com
        -   **Azure NA**: azure-na-rest-preview.contentstack.com
        -   **Azure EU**: azure-eu-rest-preview.contentstack.com
        -   **GCP NA:** gcp-na-rest-preview.contentstack.com
        -   **GCP EU:** gcp-eu-rest-preview.contentstack.com

    3.  ### Migrate to New Preview Service (recommended):

        Upgrade the Contentstack SDK to its latest version to use the new preview service. In your Contentstack.Stack() initialization, replace the management\_token parameter with the preview\_token, as shown below:

        ```
        Contentstack.Stack({
        ...,
        live_preview: {
        enable: true,
        host: "rest-preview.contentstack.com",
        preview_token: "csxxxxxxxxxxxx"
        }
        })
        ```

        **Additional Resource:** For detailed information, refer to the [Migrate to Preview Service](/docs/headless-cms/migrate-to-preview-service) documentation.

        **Warning:** Updating to the latest SDK version won’t affect your current configuration. However, you may experience limited performance improvements in Live Preview for referenced entries and certain operations unless you update both the host and token as shown above.

    4.  ### Install and Initialize the Live Preview Utils SDK:

        Use the [Live Preview Utils SDK](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.

        Install the SDK using one of the following methods:

        1.  **Via npm**:

            Install the Live Preview Utils SDK package via npm by running the following command:

            ```
            npm install @contentstack/live-preview-utils @contentstack/utils
            ```

            Initialize the SDK using the init() method to set up event listeners for content updates:

            ```
            import ContentstackLivePreview from "@contentstack/live-preview-utils";

            ContentstackLivePreview.init({
              enable: true,
              ssr: true,
              stackSdk: Stack,
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

            **Note:** To avoid configuration reset errors due to rerendering, place the initialization code in a separate JavaScript file.

            In Next.js App Router projects, when using npm, initialize the Live Preview SDK inside a dedicated client component.

            This approach ensures the SDK runs only once and prevents re-render issues between server and client environments.

            Create a separate initialization component as shown below:

            ```
            "use client";
            import { useEffect } from "react";
            import ContentstackLivePreview from "@contentstack/live-preview-utils";

            export default function LivePreviewInitComponent() {
              useEffect(() => {
                ContentstackLivePreview.init({
                  enable: true,
                  ssr: true,
                  stackSdk: Stack,
                  // Recommended: Enables Edit Tags
                  editButton: { enable: true },
                  stackDetails: {
                    apiKey: "your api key",
                    environment: "your environment value",
                    branch: "your branch",
                  },
                  clientUrlParams: {
                    protocol: "https",
                    host: "app.contentstack.com", // Use region-specific URL if required
                    port: 443,
                  },
                });
              }, []);

              return null;
            }
            ```

        2.  **Via script**:

            Add the following script tag to your HTML file to load the Live Preview Utils SDK:

            ```
            <script type='module'>
            import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";
            ContentstackLivePreview.init({
              enable: true,
              ssr: false,
              stackSdk: Stack, // Stack instance from delivery sdk,
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

            Define the SDK initialization code within a separate JavaScript file to prevent configuration resetting errors in your Live Preview setup caused by rerendering.
    5.  ### Set Up SDK Initialization and Data Fetching Utilities:

        Create a utility file and add the SDK initialization and data fetching logic to it.

        ```
        // utils.js
        ...
        import Contentstack from 'contentstack';

        export function initializeContentstackDeliverySDK() {
          return Contentstack.Stack({
            // add your config here
          });
        }

         export async function getCMSData(stack, options) {
          return await stack.ContentType("your_content_type")
            .Entry("entry_uid")
            .toJSON()
            .fetch();
        }
        ...
        ```

    6.  ### Configure Live Preview across each webpage

        Whenever you update an entry, the live preview will re-render the entire page. This allows you to implement any coding logic necessary to fetch data within the component.

        ```
        // page.js
        import {
          initializeContentstackDeliverySDK,
          getCMSData
        } from "./utils.js";
        import LivePreviewInitComponent from "../components/LivePreviewInitComponent";

        export default async function Page({ searchParams }) {
          // 1. Create a new SDK client per request
          const stack = initializeContentstackDeliverySDK();

          // 2. Pass live preview query parameters to the SDK
          stack.livePreviewQuery(searchParams);

          // 3. Fetch data using this stack instance
          const entryData = await getCMSData(stack, { url: "/" });

          return (
            <>
              <h1>
                Hello, World! {" " + entryData?.title}
              </h1>
              <LivePreviewInitComponent />
            </>
          );
        }
        ```

        With these steps completed, the user website is ready. Let's proceed to host the website.

2.  ## Host the Website

    To host a website, you can simply use [launch](/docs/launch) or any other website hosting service.

3.  ## Update Stack Settings

    To set up Live Preview for the entries of your stack, you need to perform the following steps:

    1.  Navigate to **Settings** and select **Environments**.
    2.  [Set the base URL](/docs/headless-cms/add-an-environment/)s for different locales and click **Update.**  
        ![Base URL setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbaa7fda3f1479aaa/684ac97134388681002cdeee/1._edit_environment_box.png)
    3.  Select **Visual Experience** from the stack settings.
    4.  In the **General** tab, select the **Enable Live Preview** checkbox.
    5.  Set the **Default Preview Environment** and click **Save** to save the settings.

        **Tip:** You can also update the preview URL and environment from the preview settings available on the entry page.

    6.  Enable the **Display Setup Status** toggle to display the configuration status.       ![Enable_LP_Open_in_New_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b2de40925240e2f/69bd80e04440ed410cb1da8e/Enable_LP_Open_in_New_Tab.png)

        You can now see the Live Preview icon within all the entries of your stack and the feature previews data from the hosted website.

4.  ## Live Edit Tags for Entries (recommended)

    Live Edit tags allow editors to directly jump from the Live Preview pane to the corresponding content fields in the entry editor. Clicking the **Edit** button next to a content block automatically opens the relevant field. If the field refers to another entry, you’ll be redirected to that entry’s editor page.

    **Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest)
