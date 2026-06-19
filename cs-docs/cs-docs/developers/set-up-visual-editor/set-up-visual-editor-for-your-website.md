---
title: "[Visual Editor] - Set Up Visual Editor for Your Website"
description: Set up and configure Contentstack Visual Editor for your website, including prerequisites, SDK upgrades, configuration, and edit tags.
url: https://www.contentstack.com/docs/headless-cms/set-up-visual-editor-for-your-website
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: latest
last_updated: 2026-03-25
---

# [Visual Editor] - Set Up Visual Editor for Your Website

This page explains how to set up and configure Contentstack’s Visual Editor for a website, including required prerequisites, SDK upgrades, initialization configuration, and edit tag setup. It is intended for developers enabling Visual Editor and Live Preview capabilities for content managers during website editing and preview workflows.

## Set Up Visual Editor for Your Website

Contentstack’s Visual Editor transforms the content management experience, enabling content managers to edit and preview website content in real time. Unlike the standard Live Preview feature, which only allows previews within entries, the Visual Editor offers advanced capabilities—letting you modify the website’s structure and design from the same interface. This feature provides an intuitive and interactive environment for updating content, ensuring greater control over the final published result.

This guide outlines the steps to set up and configure Visual Editor for your website. Follow these instructions to enable Live Preview, upgrade SDKs, and set up the Visual Editor for an optimized editing experience.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to [stack settings](/docs/developers/set-up-stack/view-stack-details)
- [Live Preview](/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website) must be set up for your website
- [Preview token](/docs/developers/create-tokens/about-delivery-tokens#about-preview-tokens)
- IFrame-compatible website to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors

## Upgrade Delivery and Live Preview SDKs

The Visual Editor requires Live Preview Utils version **3.0** or above and delivery SDK version 3.20.3 or above. To update to the latest versions, run the following command:

```
npm install contentstack@latest @contentstack/live-preview-utils@latest
```

## Configure Visual Editor

Pass the following config to the Live Preview `init` method:

```
...
import ContentstackLivePreview from "@contentstack/live-preview-utils"
ContentstackLivePreview.init({
  stackDetails: {
    apiKey: "your-stack-api-key",
    environment: "your-environment",
  },
  mode: "editor",
  ...
});
...
```

**Note**: To explore the different configuration properties, refer to the [config](/docs/developers/set-up-live-preview/get-started-with-live-preview-utils-sdk-v3#config) section.
Ensure Live Preview is set up for your website. Refer [Set Up Live Preview for Your Website](/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website) for more information.

## Set Up Edit Tags

Once you’ve set up Live Preview, you should be able to see your website in Visual Editor.

Edit tags contain the location where the corresponding field lies within the entry. The Live Preview Utils SDK searches for the elements which contain the edit tags referred to as `data-cslp`.
Setting up edit tags will enable edit functionalities within your website.

```

# {post.title}

  {post.author.name}
  {post.body}

```

When your website runs in production, you should remove the edit tags. This will throw an error when you try to destructure an `undefined` value. Hence, we use the [Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) and pass an empty object value.Refer to [Set Up Live Edit Tags for Entries with REST](/docs/developers/set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest) to configure your tags. To enable actions like adding, deleting, and ordering an instance of a multiple field type, add live edit tags for each instance of the field. Refer to the [Enable Support for Multiple Field Actions in Visual Editor](/docs/developers/set-up-live-preview/set-up-live-edit-tags-for-entries-with-rest#enable-support-for-multiple-field-actions-in-visual-editor) section for more information.By following these steps, you can fully configure the Visual Editor for your website, allowing seamless content management and live preview capabilities.

## [Optional] Enable Empty Placeholder for Multiple Fields

Additionally, to display an empty placeholder when a modular blocks field is not populated, import the `VB_EmptyBlockParentClass` from Live Preview Utils:

```
import { VB_EmptyBlockParentClass } from '@contentstack/live-preview-utils'
```

Add it as a class to the parent HTML element of all the block components:

```

{/* Block components */}

```

Once added, you should see a empty placeholder for multiple fields.

## Tutorial Video

## Common questions

### Do I need Live Preview set up before using Visual Editor?
Yes. “[Live Preview](/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website) must be set up for your website” before configuring Visual Editor.

### What SDK versions are required for Visual Editor?
“The Visual Editor requires Live Preview Utils version **3.0** or above and delivery SDK version 3.20.3 or above.”

### What does `mode: "editor"` do in the Live Preview init config?
It configures Live Preview Utils to run in Visual Editor mode by setting `mode: "editor"` in the `init` configuration.

### Why do edit tags need to be removed in production?
“When your website runs in production, you should remove the edit tags. This will throw an error when you try to destructure an `undefined` value.”