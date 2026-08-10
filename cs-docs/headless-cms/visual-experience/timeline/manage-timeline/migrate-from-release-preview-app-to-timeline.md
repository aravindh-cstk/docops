---
title: "Migrate from Release Preview App to Timeline"
description: "Seamlessly migrate from Release Preview App to Timeline. Follow our detailed guide for upgrading packages and removing outdated setup logic for CSR and SSR."
url: /headless-cms/migrate-from-release-preview-app-to-timeline
---

# Migrate from Release Preview App to Timeline

## Migrate from Release Preview App to Timeline

This migration guide provides a detailed breakdown of the necessary changes needed to transition from using the Release Preview App to [Timeline](/docs/headless-cms/about-timeline).

The Release Preview App is a third party extension to preview your release, whereas the Timeline feature offers more functionality and versatility to preview how your site will appear once scheduled updates are made live, providing a comprehensive view of upcoming content transformations.

**Note:** The Release Preview app is no longer supported and has been removed from the Contentstack marketplace.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](/docs/headless-cms/about-delivery-tokens#about-preview-tokens)
-   Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

1.  ## Upgrade Packages
    
    Upgrade the [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/) and [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk/) to enable the timeline feature.
    
    **Note:** The timeline feature requires Live Preview Utils version **2.0** or above.
    
    **For Client-side Rendering (CSR)**
    
    Use the following code snippet to update the SDKs for your CSR websites.
    
    ```
    // UPGRADE
    npm i contentstack@latest @contentstack/live-preview-utils@latest
    ```
    
    **For Server-side Rendering (SSR)**
    
    Use the following code snippet to update the SDKs for your SSR websites.
    
    ```
    // UPGRADE
    npm i contentstack@latest @contentstack/live-preview-utils@latest
    ```
    
2.  ## Remove Live Preview Utils CSS
    
    Live Preview Utils CSS is now included by default, so you no longer need to import it.
    
    **For Client-side Rendering (CSR)**
    
    Remove the following from your CSR website code.
    
    ```
    // REMOVE LIVE PREVIEW UTILS
    import "@contentstack/live-preview-utils/dist/main.css";
    import "@contentstack/delivery-plugin-release-preview/dist/compareUtils.browser.min.js";
    import "@contentstack/delivery-plugin-release-preview/dist/compareUtilsStyle.css";
    ```
    
    **For Server-side Rendering (SSR)**
    
    Remove the following from your SSR website code.
    
    ```
    // REMOVE LIVE PREVIEW UTILS
    import "@contentstack/live-preview-utils/dist/main.css";
    import "@contentstack/delivery-plugin-release-preview/dist/compareUtils.browser.min.js";
    import "@contentstack/delivery-plugin-release-preview/dist/compareUtilsStyle.css";
    ```
    
3.  ## Remove Release Preview App Setup Logic
    
    Remove the following functions from your CSR and SSR website codes as they are by default handled by the server and SDK.
    
    **For Client-side Rendering (CSR)**
    
    Remove the ReleasePreviewPlugin code, ReleasePreview.init and Compare Utils as these functions are now handled by server and SDK.
    
    ```
    import * as contentstack from "contentstack";
    // REMOVE
    import { releaseReplaceAlgorithm, releaseReplacePreReq } from "@contentstack/delivery-plugin-release-preview";
    
    // REMOVE
    class ReleasePreviewPlugin {
     onRequest (stack, request) {
       releaseReplacePreReq(stack, request);
       return request;
     }
     async onResponse(stack, request, response, data) {
       const _data = data['entries'] || data['assets'] || data['entry'] || data['asset'];
       await releaseReplaceAlgorithm(_data, stack);
       return data
     }
    }
    
    export const stack = contentstack.Stack({
     plugins: [
       // REMOVE
       new ReleasePreviewPlugin()
     ]
    });
    ```
    
    Also remove the ReleasePreview.init functionality.
    
    ```
    // App.tsx
    import ReleasePreview from "@contentstack/delivery-plugin-release-preview"; // REMOVE
    import { useSearchParams } from "react-router-dom";
    import { stack } from "./sdk";
    import { getReleasePreviewSession } from "./utils"; // REMOVE
    
    function App() {
        const [isLoading, setLoading] = useState(true);
        const [searchParams] = useSearchParams();
        useEffect(() => {
    	    (async () => {
    	   //* REMOVE start
    	   const release_preview_options = getReleasePreviewSession(searchParams);
            await ReleasePreview.init(stack, release_preview_options);
    	   //* REMOVE END
            setLoading(false);
          })();
         }, []);
        return (isLoading ? null : /*YOUR COMPONENT HERE*/)
    }
    ```
    
    **For Server-side Rendering (SSR)**
    
    Remove the ReleasePreviewPlugin code, ReleasePreview.init and Compare Utils as these functions are now handled by server and SDK.
    
    ```
    // sdk.js
    const contentstack = require("contentstack");
    // REMOVE
    const { releaseReplaceAlgorithm, releaseReplacePreReq } = require("@contentstack/delivery-plugin-release-preview");
    
    // REMOVE
    class ReleasePreviewPlugin {
     onRequest (stack, request) {
       releaseReplacePreReq(stack, request);
       return request;
     }
     async onResponse(stack, request, response, data) {
       const _data = data['entries'] || data['assets'] || data['entry'] || data['asset'];
       await releaseReplaceAlgorithm(_data, stack);
       return data
     }
    }
    export const stack = contentstack.Stack({
     plugins: [
       // REMOVE
       new ReleasePreviewPlugin()
     ]
    });
    ```
    
    Also remove the ReleasePreview.init functionality.
    
    ```
    // app.js
    const { default: ReleasePreview } =  require('@contentstack/delivery-plugin-release-preview');
    const { stack } = require('./sdk');
    // REMOVE
    const { getReleasePreviewSession } = require('./utils');
    
    app.use(async (req, res, next) => {
    // REMOVE whole try catch block for init
     try {
       const release_preview_options = getReleasePreviewSession(req, res)
       await ReleasePreview.init(stack, release_preview_options);
     } catch(err) {
       console.error('error while setting release preview', err);
     }
     next();
    })
    ```
    

**Note:** For first-time users, additional details on how to tree shake live preview utils and slim down your production build can be found in the [Set Up Timeline for your Website](/docs/headless-cms/set-up-timeline-for-your-website/) documentation.
