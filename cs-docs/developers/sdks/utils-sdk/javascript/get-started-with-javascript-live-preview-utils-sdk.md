---
title: "[JavaScript Delivery] - Get Started with JavaScript Live Preview Utils SDK"
description: Get Started with JavaScript Live Preview Utils SDK
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/get-started-with-javascript-live-preview-utils-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: "3"
last_updated: 2026-03-25
---

# [JavaScript Delivery] - Get Started with JavaScript Live Preview Utils SDK

This page explains how to install and initialize the Contentstack JavaScript Live Preview Utils SDK to enable communication between Contentstack SDKs and your website for live preview and live editing. It is intended for developers integrating Contentstack Live Preview into JavaScript projects and should be used when setting up preview capabilities and edit tags.

## Get Started with JavaScript Live Preview Utils SDK

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest.

**Additional Resource**: Refer to our documentation on [Omnichannel Content Preview Experience](../../../../content-managers/author-content/omnichannel-content-preview-experience.md) to learn how we help speed up the content creation process.

Contentstack provides the Live Preview Utils SDK to establish a communication channel between the various Contentstack SDKs and your website, transmitting live changes to the preview pane in the entry editor.

## Prerequisites

The Live Preview Utils SDK package can be loaded for any project that uses Contentstack SDKs. To use edit tags while previewing content, you need a valid stack API Key.

## Setup and Installation

To install the Live Preview Utils SDK package via npm, use the following command:

```
npm install @contentstack/live-preview-utils@3
```

Alternatively, to include the SDK package directly in your website HTML code, use the following command:

```

  import ContentstackLivePreview from 'https://esm.sh/@contentstack/live-preview-utils@3.0.1';
  ContentstackLivePreview.init({
      stackDetails: {
          apiKey: "your-stack-api-key",
      },
  });

```

## Initializing the SDK

Since the Live Preview Utils SDK is responsible for communication, you need to only initialize it. Use the following command to initialize the SDK:

```
import ContentstackLivePreview from "@contentstack/live-preview-utils";

ContentstackLivePreview.init({
    enable: true,
    stackDetails: {
        apiKey: "your-stack-api-key",
    },
});
```

Alternatively, if you want to initialize the SDK directly in the HTML tag, use the class attribute named ContentstackLivePreview as follows:

```

    ContentstackLivePreview.init({
        enable: true,
        stackDetails: {
            apiKey: "your-stack-api-key",
        },
    });

```

## Live Editing

[Live Preview](../../../../content-managers/author-content/about-live-preview.md) allows you to click on edit tags beside specific content blocks in the preview window to quickly scroll to the corresponding field. You can edit and preview the content changes side by side. Live edit tags are identified through the data-cslp attribute within the HTML tags.

To learn how to add live edit tags and configure them for different frameworks or tools, refer to[ Set Up Live Edit Tags for Entries with REST](../../../set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest.md) documentation

**Additional Resource**: For more information on the JavaScript Live Preview Utils SDK, refer to our [GitHub reference documentation](https://github.com/contentstack/live-preview-sdk).

## More Resources

- [Get Started with JavaScript Delivery SDK and Live Preview](../../content-delivery-sdk/javascript-browser/get-started-with-javascript-delivery-sdk-and-live-preview.md)

## Common questions

**How do I install the Live Preview Utils SDK?**  
Use `npm install @contentstack/live-preview-utils@3`, or import it directly from `https://esm.sh/@contentstack/live-preview-utils@3.0.1` in your website HTML code.

**What do I need to use edit tags while previewing content?**  
To use edit tags while previewing content, you need a valid stack API Key.

**What does the Live Preview Utils SDK do?**  
It establishes a communication channel between the various Contentstack SDKs and your website, transmitting live changes to the preview pane in the entry editor.

**How are live edit tags identified in HTML?**  
Live edit tags are identified through the `data-cslp` attribute within the HTML tags.