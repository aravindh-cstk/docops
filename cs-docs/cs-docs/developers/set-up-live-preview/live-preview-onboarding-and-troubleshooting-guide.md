---
title: "[Set Up Live Preview] - Live Preview Onboarding and Troubleshooting Guide"
description: Live Preview Onboarding and Troubleshooting Guide
url: https://www.contentstack.com/docs/headless-cms/live-preview-onboarding-and-troubleshooting-guide
product: Contentstack
doc_type: troubleshooting-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Live Preview] - Live Preview Onboarding and Troubleshooting Guide

This page explains the Live Preview onboarding experience and provides troubleshooting guidance for common setup errors. It is intended for developers and content creators integrating Live Preview into a website, and should be used during initial setup or when Live Preview setup status indicates configuration issues.

## Live Preview Onboarding and Troubleshooting Guide

The [Live Preview](/docs/content-managers/live-preview/about-live-preview/) Onboarding Experience is a structured, interactive guide designed to streamline the integration of Live Preview into your website. It simplifies setup, resolves common configuration issues, and ensures real-time content updates function smoothly.

Setting up Live Preview can be challenging, especially when dealing with multiple environments, complex caching layers, or restricted access settings. The onboarding experience simplifies this with guided steps tailored for different website architectures. Whether you are a developer or a content creator, this feature ensures that your real-time content changes are accurately reflected without unnecessary technical roadblocks.

To confirm that your Live Preview setup is working, go to **Settings** in your stack. Within the **Live Preview** tab, enable the **Display Setup Status** toggle. This displays configuration details in real time during setup.

## Key Benefits

- **Effortless Integration:** Step-by-step guidance simplifies the Live Preview setup.
- **Immediate Issue Resolution:** Real-time feedback helps identify and fix setup errors instantly.
- **Optimized Productivity: **Minimize troubleshooting time and focus on content creation.
- **Adaptive Implementation:** Works seamlessly with diverse website architectures and environments.
- **Comprehensive Support:** Access relevant documentation, FAQs, and support within the onboarding interface.

## Troubleshooting Errors

If the Live Preview Onboarding UI displays errors, the setup may be incomplete or misconfigured. Below are common errors, their causes, and resolutions.

| Error | Possible Causes | Resolution |
|---|---|---|
| **Could Not Connect to Website** | - Incorrect environment or base URL in the Live Preview settings.<br>- Website restrictions due to CORS policy or `X-Frame-Options` settings. | - Verify that the correct **environment** and **base URL** are selected in Live Preview settings.<br>- Check if a CORS policy or `X-Frame-Options` is blocking access. Add `https://*.contentstack.com `as an allowed origin in your CORS policy.<br>- Use the **Always** **Open in New Tab** feature to avoid iFrame limitations. Starting with **Live Preview SDK v4.0.0**, this feature opens your site in a standalone browser tab, outside the Contentstack iFrame. |
| **Live Preview SDK Not Initialized** | - The SDK is not properly initialized on the client side.<br>- If using a **post message** instead of the SDK, the website did not send the **init post message** correctly. | - Ensure the **Live Preview SDK** is correctly initialized on the client side. Refer to the [Live Preview SDK setup guide](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3) for implementation details.<br>- If using **post messages**, verify that the website sends the init post message with all required details. Refer to the [Live Preview SDK](/docs/developers/set-up-live-preview/how-live-preview-works-with-sdk) documentation. |
| **Outdated Live Preview SDK Version** | - The Live Preview SDK version in use is outdated. | - Update your Live Preview SDK to the latest version to ensure compatibility and access to new features.<br>- If your plan includes this feature but you use an SDK earlier than v4.0.0, selecting **Open in New Tab** still opens the site inside the Contentstack iFrame.<br>- If you are using a post message instead of the Live Preview SDK, set the `sdkVersion` value to `1.4.5` in your `init` post message configuration. Refer to the [Live Preview SDK](/docs/developers/set-up-live-preview/how-live-preview-works-with-sdk) document for more details. |
| **Preview Service Not Enabled** | - The Preview service is not utilized to fetch Live Preview data. | - Migration to the Preview Service is required. Refer to the [Live Preview setup guides](/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website) for details and follow the [Migrate to New Preview Service](/docs/developers/set-up-live-preview/migrate-to-preview-service/) to upgrade the SDK or use the Preview API to fetch data. |
| **Default Environment Not Set** | - The default environment for Live Preview is not configured. | - Configure the default environment by following the Live Preview setup document. Verify that you have the required permissions to modify environment settings. Check your user role settings in the Contentstack dashboard. |

## Common questions

### How do I confirm that my Live Preview setup is working?
Go to **Settings** in your stack. Within the **Live Preview** tab, enable the **Display Setup Status** toggle.

### What should I check if I see “Could Not Connect to Website”?
Verify that the correct **environment** and **base URL** are selected in Live Preview settings, and check whether CORS policy or `X-Frame-Options` settings are blocking access.

### What does “Live Preview SDK Not Initialized” usually mean?
It typically indicates the SDK is not properly initialized on the client side, or (if using **post messages**) the website did not send the **init post message** correctly.

### When should I migrate to the Preview Service?
If the error indicates **Preview Service Not Enabled**, migration to the Preview Service is required to fetch Live Preview data.