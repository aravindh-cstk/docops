---
title: "Get Started with JavaScript Live Preview Utils SDK"
description: "Dive into the world of Contentstack's JavaScript Live Preview Utils SDK. This detailed documentation guides you through setting up and implementing the SDK."
url: /developers/sdks/utils-sdk/javascript/get-started-with-javascript-live-preview-utils-sdk
uid: blt707d261e5b2e45db
---

# Get Started with JavaScript Live Preview Utils SDK

## Get Started with JavaScript Live Preview Utils SDK

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest.

**Additional Resource:** Refer to our documentation on [Omnichannel Content Preview Experience](/docs/headless-cms/omnichannel-content-preview-experience) to learn how we help speed up the content creation process.

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
<script type='module'>
  import ContentstackLivePreview from 'https://esm.sh/@contentstack/live-preview-utils@3.0.1';
  ContentstackLivePreview.init({
      stackDetails: {
          apiKey: "your-stack-api-key",
      },
  });
</script>
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
<script>
    ContentstackLivePreview.init({
        enable: true,
        stackDetails: {
            apiKey: "your-stack-api-key",
        },
    });
</script>
```

## Live Editing

[Live Preview](/docs/headless-cms/about-live-preview) allows you to click on edit tags beside specific content blocks in the preview window to quickly scroll to the corresponding field. You can edit and preview the content changes side by side. Live edit tags are identified through the data-cslp attribute within the HTML tags.

To learn how to add live edit tags and configure them for different frameworks or tools, refer to [Set Up Live Edit Tags for Entries with REST](https://www.contentstack.com/docs/headless-cms/set-up-live-edit-tags-for-entries-with-rest) documentation

**Additional Resource**: For more information on the JavaScript Live Preview Utils SDK, refer to our [GitHub reference documentation](https://github.com/contentstack/live-preview-sdk).

## More Resources

-   [Get Started with JavaScript Delivery SDK and Live Preview](/docs/developers/sdks/content-delivery-sdk/javascript-browser/get-started-with-javascript-delivery-sdk-and-live-preview)
