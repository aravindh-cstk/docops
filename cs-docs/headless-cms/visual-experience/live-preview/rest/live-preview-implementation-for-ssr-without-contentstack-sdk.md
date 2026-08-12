---
title: "Live Preview for SSR without Contentstack SDK"
description: "Learn how to configure Live Preview for SSR websites using REST APIs. Enhance your Contentstack integration for optimal UX and seamless content updates."
url: /headless-cms/live-preview-implementation-for-ssr-without-contentstack-sdk
---

# Live Preview for SSR without Contentstack SDK

## Live Preview for SSR without Contentstack Delivery SDK

Server-side rendering (SSR) means your website’s pages are generated on the server before they reach a visitor’s browser. Instead of building the page in the browser, the server sends fully prepared HTML to display. This guide explains how to configure Live Preview for SSR websites using REST APIs.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

Follow these steps to configure Live Preview for your SSR website without Contentstack SDK:

1.  ## Set Up the Website
    
    To enable Live Preview on your website, begin by setting up the essentials.
    
    1.  ### Generate a Preview Token
        
        Create a preview token by navigating to **Settings** \> **Tokens** \> **Delivery Tokens** (press “alt + O” for Windows or “option key + O” for Mac).
        
        **Note:** It is recommended to use a preview token for Live Preview instead of a previously utilized, read-only management token.
        
        Each preview token is associated with a delivery token and shares access to the specific environment. If a delivery token doesn't exist, create one and enable the **Create Preview Token** toggle. For an existing delivery token, use the **\+ Create Preview Token** option and copy the generated token. ![enable-preview-token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ab5f111f767ae8/684ac9714d8175ee4bc8dc4a/0._enable_preview_token.png)
        
    2.  ### Install and Initialize the Live Preview Utils SDK
        
        Use the [Live Preview Utils SDK](/docs/headless-cms/get-started-with-live-preview-utils-sdk-v3) to listen for content updates and fetch real-time preview data on the client side.
        
        You can use the script tag in your HTML page or any other view engine code to install the package. To do so, run the following command:
        
        ```
        <script type='module'>
        import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@3.0.1";
        ContentstackLivePreview.init({
          enable: true,
          ssr: true,
        
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
        
    3.  ### Utilize the Live Preview Hash
        
        When the Live Preview panel is open in SSR (server-side rendering) mode, Contentstack automatically adds a **hash** as a query parameter in the URL. This hash helps the system identify that the request is coming from Live Preview and ensures the correct version of the content is displayed. To make Live Preview work properly, you need to pass this hash to the Contentstack Delivery SDK while fetching data.
        
        Here’s a simple example:
        
        ```
        app.get('/', async (request, response) => {
            const livePreviewHash = request.query.live_preview  // This implementation may vary across frameworks, but the Live Preview hash will always be available in the query string.
        
        
        	const data = await fetchData(ctUID, entryUID, livePreviewHash); // check step 4 for function definition
        
        ...utilise the data to populate your template html
        });
        ```
        
    4.  ### Update the REST URL and Headers
        
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
                `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`
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
        const CONTENTSTACK_CDN_URL = "cdn.contentstack.io";
        const PREVIEW_HOST_NAME = "rest-preview.contentstack.com";
        function getHeaders() {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("access_token", REACT_APP_CONTENTSTACK_DELIVERY_TOKEN);
            headers.append("api_key", REACT_APP_CONTENTSTACK_API_KEY);
            return headers;
        }
        export const fetchData = async (ctUID, entryUID, hash = null) => {
            const contentstackURL = new URL(
                `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${REACT_APP_CONTENTSTACK_ENVIRONMENT}`
            );
            const headers = getHeaders();
            if (hash) {
                headers.append("live_preview", hash);
                headers.append("preview_token", REACT_APP_CONTENTSTACK_PREVIEW_TOKEN);
                // Optionally, to enable variant support add the include_applied_variants header.
                  headers.append("include_applied_variants", "true");
        
                contentstackURL.hostname = PREVIEW_HOST_NAME;
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
        
        Note: For the **North America** endpoint, set the host parameter to rest-preview.contentstack.com. For other data centers:
        
        -   **AWS EU**: eu-rest-preview.contentstack.com
        -   **Azure NA**: azure-na-rest-preview.contentstack.com
        -   **Azure EU**: azure-eu-rest-preview.contentstack.com
        -   **GCP NA:** gcp-na-rest-preview.contentstack.com
        -   **GCP EU:** gcp-eu-rest-preview.contentstack.com  
            For other base urls like the CDN, refer to our documentation on [API Endpoints](/docs/administration/api-endpoints#base-api-urls-for-azure-north-america-region).
        
        To fetch content in the Live Preview panel, it is recommended to use a preview token rather than a read-only management token. For more information, refer to our documentation on [Preview Tokens](/docs/headless-cms/preview-api).
        
2.  ## Host the Website
    
    To host a website, you can simply use [launch](/docs/launch) or any other website hosting service.
    
    **Note:** Make sure your website is HTTPS enabled.
    
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
    
    **Additional Resource:** For detailed information on how to set up Live Edit tags, please refer to our documentation on [Set Up Live Edit Tags for Entries with REST](https://www.contentstack.com/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest)
