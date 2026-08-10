---
title: "How Live Preview Works with SDK"
description: "Learn how Contentstack’s Live Preview SDK enables real-time content updates, ensuring seamless previews for CSR & SSR websites before publishing."
url: /headless-cms/how-live-preview-works-with-sdk
---

# How Live Preview Works with SDK

## How Live Preview Works with SDK

## Overview

Live Preview renders your website inside an iframe within the Contentstack entry editor. The Live Preview SDK (@contentstack/live-preview-utils) keeps this iframe in sync with the editor so that draft content and UI interactions update in real time.

This guide covers iframe behavior, the ssr option (which tells the SDK whether your website uses server-side rendering (SSR) or client-side rendering (CSR)), and minimal init patterns.

## What You'll Learn

-   Choose between ssr: true and ssr: false for your rendering approach.
-   Make draft content appear correctly in preview.
-   Prevent preview from showing published content.
-   Set up Live Preview for SSR, CSR, and static sites.
-   Debug preview update failures.

## Quick Decision Guide

Choose the ssr value that matches how your application renders:

| Rendering approach | ssr value | Reason | Framework examples |
| --- | --- | --- | --- |
| Server-side rendered (SSR) | ssr: true | The server re-renders on each request and can read the hash from the URL. | Next.js, Nuxt |
| Client-side rendered (CSR) | ssr: false | No server re-render. The SDK injects the hash client-side before every fetch. | React, Angular |
| SSG (static site generation) | ssr: false | No server re-rendering during a Live Preview session. The SDK injects the hash client-side. | Next.js, Astro |
| Hybrid (mixed routes) | Per route: ssr: false for SSG routes, ssr: true for SSR per request routes | Apply the rule per route based on how that route renders. | Next.js, Nuxt, SvelteKit |

**ssr** **default behavior**

The SDK infers ssr if you do not set it explicitly in init():

-   If stackSdk is passed, ssr defaults to false.
-   If stackSdk is not passed, ssr defaults to true.

If stackSdk.live\_preview.ssr is also set, it takes the highest precedence and overrides the ssr value passed to init(). See [Preview is not updating when you edit content](#preview-is-not-updating-when-you-edit-content) for the full resolution order.

## Prerequisites

-   Live Preview is enabled, and the editor iframe loads your preview URL.
-   @contentstack/live-preview-utils runs on that URL (finish [Set up Live Preview for your website](https://www.contentstack.com/docs/headless-cms/set-up-live-preview-for-your-website/) first if you have not completed that setup).
-   If your stack uses any region other than AWS NA, set clientUrlParams in your init call. See the [Setting clientUrlParams for non-NA regions](#setting-clienturlparams-for-non-na-regions) section in this document.

## SDK Setup

Install the Live Preview SDK:

```
npm install @contentstack/live-preview-utils@latest
```

If called during a server-side render, init returns without initializing and no preview session is established. Call it only in the browser. The code below shows the required guard.

```
if (typeof window === "undefined") return;
```

### SSR

Use this pattern when your application re-renders on the server for every request. With ssr: true, the SDK triggers a full page reload on each field edit, and the server reads the preview parameters from the URL to return draft content.

init returns a **Promise**. Call it from an async function with await and handle errors.

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";
async function bootstrapLivePreview() {
  if (typeof window === "undefined") {
    return;
  }
  try {
    await ContentstackLivePreview.init({
      enable: true,
      stackDetails: {
        apiKey: "API_KEY",
      },
    });
  } catch (error) {
    console.error("Live Preview initialization failed:", error);
  }
}

void bootstrapLivePreview();
```

**Setting** **clientUrlParams** **for non-NA regions**

The SDK defaults clientUrlParams to app.contentstack.com (AWS NA). If your stack uses a different region, set clientUrlParams in your init call with the correct host so the Edit button and editor features point to the right app host.

For example, for an EU stack:

```
await ContentstackLivePreview.init({
  enable: true,
  stackDetails: {
    apiKey: "API_KEY",
  },
  clientUrlParams: {
    protocol: "https",
    host: "eu-app.contentstack.com",
    port: 443,
  },
});
```

port is optional. The SDK defaults to 443 for HTTPS and 80 for HTTP.

For the host value for your region, see [clientUrlParams in the SDK configuration reference](https://github.com/contentstack/live-preview-sdk/tree/v4.4.2/docs/live-preview-configs.md#clienturlparams).

### CSR

Use this pattern when your application renders entirely in the browser with no server re-render on field edits. With ssr: false, the SDK injects the Live Preview hash into every delivery API call through stackSdk and fires registered callbacks when content changes.

If you are using

-   **TypeScript Delivery SDK (****@contentstack/delivery-sdk****):** Pass stack.config as stackSdk (shown below).
-   **JavaScript Delivery SDK (****contentstack** **package):** Pass the Stack instance directly as stackSdk. See [Set Up Live Preview with REST for CSR](https://www.contentstack.com/docs/headless-cms/set-up-live-preview-with-rest-for-client-side-rendering) for the full setup.

Without stackSdk, the Delivery SDK fetches published content and editor changes will not appear in preview.

Pass stack.config as stackSdk, not the stack instance. The stack instance does not have the live\_preview field shape the SDK expects.

IStackSdk is a TypeScript interface exported by @contentstack/live-preview-utils. Cast stack.config to it if TypeScript requires an explicit type at the init call site.

If you are debugging stackSdk issues, see the [Troubleshooting](#troubleshooting) section.

```
import contentstack from "@contentstack/delivery-sdk";
import ContentstackLivePreview, { IStackSdk } from "@contentstack/live-preview-utils";

async function bootstrapLivePreview() {
  if (typeof window === "undefined") {
    return;
  }

  const stack = contentstack.stack({
    apiKey: "API_KEY",
    deliveryToken: "DELIVERY_TOKEN",
    environment: "ENVIRONMENT",
    live_preview: {
      enable: true,
      preview_token: "PREVIEW_TOKEN",
      host: "PREVIEW_HOST",
    },
  });

  try {
    await ContentstackLivePreview.init({
      enable: true,
      ssr: false,
      stackSdk: stack.config as IStackSdk,
      stackDetails: {
        apiKey: "API_KEY",
        environment: "ENVIRONMENT",
      },
    });
  } catch (error) {
    console.error("Live Preview initialization failed:", error);
  }
}

void bootstrapLivePreview();
```

**Optional: Register callbacks for entry updates**

Use these to re-fetch and update your UI when entry data changes. They apply only in ssr: false mode.

**onEntryChange**

Use onEntryChange when you want your fetch to run on page load and again on every subsequent edit. The SDK calls your function once on registration and again each time the entry changes.

```
const callbackUid = ContentstackLivePreview.onEntryChange(() => {
  // re-fetch and update your UI here
});
```

**onLiveEdit**

Use onLiveEdit when your page fetches the latest content at load time. Unlike onEntryChange, it does not run on registration. It runs only when the entry is edited in the editor.

```
const callbackUid = ContentstackLivePreview.onLiveEdit(() => {
  // runs only when the entry changes, not on page load
});
```

**Unsubscribing a listener**

Both methods return a UID. Pass it to unsubscribeOnEntryChange to remove the listener (for example, in a React useEffect cleanup). You can also pass the original callback function directly instead of the UID.

```
ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
```

For the full list of init options, see the [SDK configuration reference](https://github.com/contentstack/live-preview-sdk/tree/v4.4.2/docs/live-preview-configs.md#initconfig-iconfig).

### SSG

SSG pages have no server re-rendering during a Live Preview session. Use the same ssr: false setup as CSR: pass stackSdk and register onEntryChange to re-fetch draft content when the editor sends an update.

See [CSR](#csr) above for the complete setup, including the stackSdk requirement, code example, and callback registration.

If any of these patterns behave unexpectedly, see the [Troubleshooting](#troubleshooting) section.

## CDN Installation

CDN is an installation method, not a rendering approach. Use this when you cannot install the SDK as a package via npm. Apply SSR, CSR, or SSG initialization patterns inside the script tag based on how your application renders. Do not call init again in your app bundle on the same page.

```
<script type="module" crossorigin="anonymous">
  // Replace version from your installed package
  import ContentstackLivePreview from "https://esm.sh/@contentstack/live-preview-utils@latest";
  (async () => {
    try {
      await ContentstackLivePreview.init({
        enable: true,
        stackDetails: {
          apiKey: "API_KEY",
        },
      });
    } catch (error) {
      console.error("Live Preview initialization failed:", error);
    }
  })();
</script>
```

## How Updates Work

When you open an entry for preview:

1.  Contentstack generates a **Live Preview hash** that identifies the preview session.
2.  Your preview URL loads inside an **iframe** in the editor.
3.  The SDK uses the browser postMessage API to communicate between the Contentstack editor and your preview page.

**Note:** Live Preview does not affect published content. It runs only inside the Contentstack editor iframe.

### SSR path (ssr: true)

```
Edit field → page reload → server reads URL params → Delivery SDK fetches draft content → page renders
```

1.  The Live Preview SDK reloads the preview page.
2.  The server reads the preview parameters present in the URL (live\_preview, content\_type\_uid, and entry\_uid).
3.  The server returns draft content instead of published content.

### CSR path (ssr: false)

```
Edit field → callback fires (onEntryChange / onLiveEdit) → re-fetch via stackSdk → UI update (no reload)
```

**Required:** Pass stackSdk in your ContentstackLivePreview.init() call.

| Without stackSdk | With stackSdk |
| --- | --- |
| SDK cannot inject the Live Preview hash | SDK injects the hash before every fetch |
| Delivery SDK returns published content | Delivery SDK returns draft content |
| Content edits do not appear in preview | Content edits appear in preview |

See [CSR](#csr) in the SDK Setup section for the full setup.

## Live Preview Hash

The hash flows to your application differently depending on the ssr value:

|   | ssr: true | ssr: false |
| --- | --- | --- |
| How the hash arrives | Query parameter in the preview URL (live\_preview) | SDK receives it via postMessage from the editor |
| Who reads it | Your server, on every page load | The SDK, automatically |
| How it reaches the Delivery SDK | Stack.livePreviewQuery(req.query) on the server | SDK writes it into stackSdk before every fetch |
| What you must do | Nothing extra if init is called correctly | Pass stackSdk in your init() call |

**Reading the current hash**

After init(), you can read the current hash using ContentstackLivePreview.hash. It returns the active session hash when your page is running inside the Contentstack editor. If you open the page directly in a browser, the hash is not available and the property returns an empty string.

Most standard setups do not need to read this property. Use it for the following cases:

-   Fetch content manually and pass the hash.
-   Confirm the SDK has an active hash during debugging.

## Event-Based Communication

| Event | Trigger | What happens | Applies to |
| --- | --- | --- | --- |
| Session start | Page loads in the editor iframe | SDK sends an init message. The editor responds with content type UID and entry UID. Runs automatically on init(). | SSR and CSR |
| Content update | User edits a field in Contentstack | Editor notifies the SDK. SDK updates the hash. In ssr: false mode, registered callbacks (onEntryChange) fire. In ssr: true mode, the page reloads. | SSR and CSR |
| Page URL check | Periodic, during the session | SDK sends the current page URL to the editor. Editor warns if it does not match the entry being edited. | CSR only |

Your only required call is ContentstackLivePreview.init(), which triggers the session start handshake automatically. For CSR mode, you can also register callbacks such as onEntryChange() and onLiveEdit() to handle content updates. The SDK manages the rest internally.

## Troubleshooting

If Live Preview is not working, start with the [Live Preview Onboarding and Troubleshooting Guide](https://www.contentstack.com/docs/headless-cms/live-preview-onboarding-and-troubleshooting-guide). It walks through setup step by step and maps each failure point to a specific fix.

The two issues below are specific to the ssr and stackSdk concepts covered on this page.

### Preview shows published content, not draft content

**Root cause:**

1.  stackSdk is missing from init(). In ssr: false mode, the SDK injects the Live Preview hash into every delivery API call through stackSdk. Without it, the hash is never injected and the Delivery SDK fetches published content.
2.  init() is running on the server. When typeof window === "undefined", the SDK logs a warning and returns without initializing, so no preview session is established.

**Resolution:**

1.  For ssr: false: pass stack.config as stackSdk in your ContentstackLivePreview.init() call.
2.  Confirm init() runs only in the browser. See the [SSR](#ssr) setup example for the required guard pattern.
3.  Confirm enable: true is in your init() call. Passing enable: false silently skips all initialization.

### Preview is not updating when you edit content

**Root cause:** A conflict between two ssr settings. The SDK resolves ssr in this order of precedence:

| Priority | Source | Behavior |
| --- | --- | --- |
| 1 | stackSdk.live\_preview.ssr | Always overrides all other settings |
| 2 | ssr passed to init() | Used when stackSdk.live\_preview.ssr is not set |
| 3 | Automatic default | false if stackSdk is passed, true otherwise |

If stackSdk.live\_preview.ssr is true but you expect ssr: false behavior, the SDK reloads the page instead of firing onEntryChange. The reverse also applies: ssr: true with onEntryChange registered will not fire that callback on edit, because SSR mode is reload-driven.

**Resolution:**

1.  Check both stackSdk.live\_preview.ssr and the ssr value in init(). Remove the duplicate or align both to the same value.
2.  For ssr: true: open the browser network tab when you edit a field. Confirm the page issues a new request.
3.  For ssr: false: confirm onEntryChange is registered and that you are passing stackSdk. Registering onEntryChange before init() resolves is safe. The SDK queues the callback and fires it once initialization completes.

For all other issues, refer to the [Live Preview Onboarding and Troubleshooting Guide](https://www.contentstack.com/docs/headless-cms/live-preview-onboarding-and-troubleshooting-guide).

## Next Steps

-   [Set up Live Preview for your website](https://www.contentstack.com/docs/headless-cms/set-up-live-preview-for-your-website/). Covers full configuration, including SSR and CSR patterns for your app.
-   [Open Live Preview in a new tab](https://www.contentstack.com/docs/headless-cms/open-live-preview-in-a-new-tab). Opens preview outside the default panel (behavior depends on SDK version).
-   [Live Preview Utils SDK configuration reference](https://github.com/contentstack/live-preview-sdk/tree/v4.4.2/docs/live-preview-configs.md). Lists every init option, stackSdk, hash, and callbacks.
