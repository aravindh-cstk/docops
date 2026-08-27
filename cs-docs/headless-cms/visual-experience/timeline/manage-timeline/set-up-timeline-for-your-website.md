---
title: "Set Up Timeline for your Website"
description: "Learn how to set up Contentstack's Timeline feature for your website to easily visualize and manage scheduled updates on your website."
url: /headless-cms/set-up-timeline-for-your-website
uid: blt0a6c0b080c7a172a
---

# Set Up Timeline for your Website

## Set Up Timeline for your Website

The [Timeline](/docs/headless-cms/about-timeline) feature enables you to see how your site will appear once scheduled updates are made live, providing a comprehensive view of upcoming content transformations.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to [stack settings](/docs/headless-cms/view-stack-details)
-   [Preview token](/docs/headless-cms/about-delivery-tokens#about-preview-tokens)
-   Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
-   IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) errors

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
    // REMOVE LIVE PREVIEW UTILS CSS
    import "@contentstack/live-preview-utils/dist/main.css";
    ```

    **For Server-side Rendering (SSR)**

    Remove the following from your SSR website code.

    ```
    // REMOVE LIVE PREVIEW UTILS CSS
    import "@contentstack/live-preview-utils/dist/main.css";
    ```

3.  ## Add Timeline Values (For SSR only)

    If you are passing the whole request query parameter as mentioned in the live preview SSR setup, you can skip this step.

    ```
    // If You are doing this you can skip this step
    app.use((req, response, next) => {
        Stack.livePreviewQuery(req.query);
        next();
    });
    ```

    If you are explicitly passing live preview parameters to Stack.livePreviewQuery, then you have to pass preview\_timestamp along with other parameters.

    ```
    app.use((req, response, next) => {
        Stack.livePreviewQuery({
            // YOUR EXISTING PARAMS
            ...,
            preview_timestamp: req.query['preview_timestamp']
        });
        next();
    });
    ```

4.  ## Tree Shake Live Preview Utils

    Tree shaking is a technique in JavaScript for removing unused code. Since live preview utilities are only needed on the development server and not on the live website, we can remove this code to reduce the size of the production code.

    Set PURGE\_PREVIEW\_SDK=true to optimize the production build size.

    1.  ### Webpack

        For both CSR and SSR websites you can define the env variable in webpack config.

        ```
        import { merge } from "webpack-merge";
        import common from "./webpack.common.js";
        import * as webpack from "webpack";

        export default merge(common, {
            mode: "production",
            plugins: [
          	 // Like this you can set .env variable
                new webpack.default.DefinePlugin({
                    'process.env.PURGE_PREVIEW_SDK': true,
                })
            ]
        });
        ```

    2.  ### CRA

        For CSR websites, set variables using REACT\_APP prefix.

        ```
        "prod:build": "REACT_APP_PURGE_PREVIEW_SDK=true npm run build"
        ```

5.  ## Customize Color Options for Highlight Differences Feature

    When using the highlight differences feature to compare the website, differences are currently highlighted in red and green. To customize the color scheme, use the following CSS code:

    ```
    :root {
      --added-item-color: /* add your preferred color e.g.rgba(0, 255, 0) */;
      --added-item-light-color: /* add your preferred color e.g.rgba(0, 255, 0, 0.2) */;
      --removed-item-color: /* add your preferred color e.g.rgba(255, 0, 0) */;
      --removed-item-light-color: /* add your preferred color e.g.rgba(255, 0, 0, 0.2) */;
    }

    cs-compare.cs-compare--added {
      background: var(--added-item-light-color);
      border-bottom: 2px solid var(--added-item-color);
    }
    .cs-compare__void--added {
      background: var(--added-item-light-color);
      outline: 2px solid var(--added-item-color);
    }
    cs-compare.cs-compare--removed {
      background: var(--removed-item-light-color);
      text-decoration: line-through 2px solid var(--removed-item-color);
    }
    .cs-compare__void--removed {
      background: var(--removed-item-light-color);
      outline: 2px solid var(--removed-item-color);
    }
    ```


**Note:** Live Preview edit tags are essential for Timeline compare utils to function correctly.
