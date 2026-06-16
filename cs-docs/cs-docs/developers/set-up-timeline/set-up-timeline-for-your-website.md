---
title: "[Timeline] - Set Up Timeline for your Website"
description: Set up Timeline for your Website
url: https://www.contentstack.com/docs/developers/set-up-timeline/set-up-timeline-for-your-website
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Timeline] - Set Up Timeline for your Website

This page explains how to set up the [Timeline] feature for a website using Contentstack Delivery SDKs and Live Preview Utils, including prerequisites, required SDK upgrades, SSR-specific configuration, build optimization, and optional styling customization. It is intended for developers integrating Timeline into CSR or SSR websites and should be used when enabling Timeline and compare/highlight differences functionality in a Contentstack-powered site.

Set Up Timeline for your Website

The [Timeline](/docs/content-managers/timeline/about-timeline) feature enables you to see how your site will appear once scheduled updates are made live, providing a comprehensive view of upcoming content transformations.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Access to [stack settings](/docs/developers/set-up-stack/view-stack-details)
- [Preview token](/docs/developers/create-tokens/about-delivery-tokens#about-preview-tokens)
- Website that uses [Contentstack Delivery SDKs](/docs/developers/sdks)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

## Upgrade Packages

Upgrade the [JavaScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/) and [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk/) to enable the timeline feature.

**Note**: The timeline feature requires Live Preview Utils version **2.0** or above.

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

## Remove Live Preview Utils CSS

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

## Add Timeline Values (For SSR only)

If you are passing the whole request query parameter as mentioned in the live preview SSR setup, you can skip this step.

```
// If You are doing this you can skip this step
app.use((req, response, next) => {
    Stack.livePreviewQuery(req.query);
    next();
});
```

If you are explicitly passing live preview parameters to `Stack.livePreviewQuery`, then you have to pass `preview_timestamp` along with other parameters.

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

## Tree Shake Live Preview Utils

Tree shaking is a technique in JavaScript for removing unused code. Since live preview utilities are only needed on the development server and not on the live website, we can remove this code to reduce the size of the production code.

Set `PURGE_PREVIEW_SDK=true` to optimize the production build size.

### Webpack

For both CSR and SSR websites you can define the `env` variable in webpack config.

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

### CRA

For CSR websites, set variables using `REACT_APP` prefix.

```
"prod:build": "REACT_APP_PURGE_PREVIEW_SDK=true npm run build"
```

## Customize Color Options for Highlight Differences Feature

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

**Note**: Live Preview edit tags are essential for Timeline compare utils to function correctly.

## Common questions

### What SDK versions are required to use the timeline feature?
The timeline feature requires Live Preview Utils version **2.0** or above, and you should upgrade the JavaScript Delivery SDK and Live Preview Utils SDK.

### Do I still need to import Live Preview Utils CSS?
No. Live Preview Utils CSS is now included by default, so you no longer need to import it.

### When do I need to pass `preview_timestamp` for SSR?
If you are explicitly passing live preview parameters to `Stack.livePreviewQuery`, then you have to pass `preview_timestamp` along with other parameters.

### How can I reduce production bundle size related to Live Preview Utils?
Set `PURGE_PREVIEW_SDK=true` to optimize the production build size, for example via Webpack `DefinePlugin` or CRA build variables.