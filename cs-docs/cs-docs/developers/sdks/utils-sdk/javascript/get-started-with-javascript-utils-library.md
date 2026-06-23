---
title: "[JavaScript Delivery] - Get Started with JavaScript Utils Library"
description: Get Started with JavaScript Utils Library
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/get-started-with-javascript-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - javascript-developers
version: unknown
last_updated: 2026-03-25
---

# [JavaScript Delivery] - Get Started with JavaScript Utils Library

This page explains how to install and use the Contentstack JavaScript Utils SDK to render embedded items from Rich Text Editor fields, including setup, rendering options, and examples for single and multiple entry queries.

## Get Started with JavaScript Utils Library

This guide describes how to install the [Contentstack JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript) and use it to render embedded items from Rich Text Editor fields. Understand the basic setup, supported methods, and the steps required to integrate the SDK into your application.

## Prerequisites
To get started with the JavaScript Utils SDK, you need:
- [Node.js Version 22 or later](https://nodejs.org/en)

## SDK Installation and Setup
**Note:** The Contentstack JavaScript and TypeScript Delivery SDKs already include `@contentstack/utils`, so installation is not required when using those SDKs.

Use the following command to install Contentstack JavaScript Utils SDK:

```
npm i @contentstack/utils
```

### Create Render Option
To render embedded items on the frontend, use the `renderOption` function. This configuration specifies how different RTE nodes, marks, and embedded items should be converted into HTML:

```
const renderOption = {
  // Render node-level elements such as paragraphs, headings, lists, and tables
  p: (node, next) => {
    return `${next(node.children)}

`;
  },
  h1: (node, next) => {
    return `
# ${next(node.children)}
`;
  },
  // Render text-level marks such as bold, italic, underline, strikethrough, inline code, subscript, and superscript
  bold: (text) => {
    return `**${text}**`;
  },
  // Render block-level embedded entries
  block: {
    product: (entry, metadata) => {
      return `

## ${entry.title}

        ${entry.price}

      `;
    }
  },
  // Render block embedded entries using the default format
  $default: (entry, metadata) => {
    return `

## ${entry.title}

      ${entry.description}

    `;
  },
  // Render inline embedded entries
  inline: {
    $default: (entry) => {
      return `**${entry.title}** - ${entry.description}`;
    }
  },
  // Render embedded items inserted through links
  link: (entry, metadata) => {
    return `[${metadata.text}](${metadata.attributes.href})`;
  },
  // Render asset elements
  display: (asset, metadata) => {
    return ``;
  }
};
```

## Basic Queries
Contentstack Utils SDK lets you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api/) and retrieve embedded items from the RTE field of an entry. This section explains how to handle both HTML and JSON RTE content from single or multiple entries.

### Fetch Embedded Item(s) from a Single Entry

#### Render HTML RTE Embedded object
Render embedded items in a single entry by providing the stack API key, environment, delivery token, content type UID, and entry UID. Call `includeEmbeddedItems()` on the entry and pass the result to `Contentstack.Utils.render()` as shown below.

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk';
const params: StackConfig = {
  apiKey: ,
  deliveryToken: ,
  environment: ,
};
const Stack = contentstack.stack(params);
const result = await Stack
  .contentType('')
  .entry('')
  .includeEmbeddedItems()
  .fetch();
Contentstack.Utils.jsonToHTML({
  entry: result,
  paths: ["rte_fieldUid", "group.rteFieldUID"],
  renderOption
});
```
If the entry contains multiple HTML-based RTE fields, specify the path of the fields you want to process. The example below shows how to provide these paths:

```
// code to render embedded item from an RTE field and from another RTE field nested within a group field
Contentstack.Utils.render({
  entry: result,
  paths: ["rte_fieldUid", "group.rtefieldUID"],
  renderOption
});
```

#### Render JSON RTE Content
To render JSON RTE content for a single entry, provide the required stack configuration values and use the `Contentstack.Utils.jsonToHTML()` method as shown below:

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk';
const params: StackConfig = {
  apiKey: ,
  deliveryToken: ,
  environment: ,
};
const Stack = contentstack.stack(params);
const result = await Stack
  .contentType('')
  .entry('')
  .includeEmbeddedItems()
  .fetch();
Contentstack.Utils.jsonToHTML({
  entry: result,
  paths: ["rte_fieldUid", "group.rteFieldUID"],
  renderOption
});
```
**Note:** To retrieve all embedded items when fetching an entry with a JSON RTE field, use the `includeEmbeddedItems` function.

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded object
Render embedded items across multiple entries by providing the content type UID. Use the `paths` parameter if the entries include multiple HTML-based RTE fields.

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk';
const params: StackConfig = {
  apiKey: ,
  deliveryToken: ,
  environment: ,
};
const Stack = contentstack.stack(params);
const result = await Stack
  .contentType('')
  .entry()
  .includeEmbeddedItems()
  .find();
result.entries.forEach(entry => {
  Contentstack.Utils.render({
    entry,
    paths: ["rte_fieldUid", "group.rteFieldUID"],
    renderOption
  });
});
```

### Render JSON RTE content
Render JSON RTE content for multiple entries by passing each entry’s JSON RTE field to the `Contentstack.Utils.jsonToHTML()` method. Make sure your stack configuration and content type UID are set before fetching the entries.

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk';
const params: StackConfig = {
  apiKey: ,
  deliveryToken: ,
  environment: ,
};
const Stack = contentstack.stack(params);
const result = await Stack
  .contentType('')
  .entry()
  .includeEmbeddedItems()
  .find();
result.entries.forEach(entry => {
  Contentstack.Utils.jsonToHTML({
    entry,
    paths: ["rte_fieldUid", "group.rteFieldUID"],
    renderOption
  });
});
```
**Note:**
- Use `includeEmbeddedItems()` to fetch all embedded items from JSON RTE fields. The `jsonToHTML()` and `htmlToJson()` methods convert content between JSON and HTML formats.

### Get Contentstack Endpoints
The `getContentstackEndpoint()` method enables you to retrieve endpoint URLs for various Contentstack services based on region. You can fetch either a single service endpoint or all service endpoints for a given region.

```
import * as Utils from '@contentstack/utils';
Utils.getContentstackEndpoint('AWS-EU', 'contentDelivery');
// returns contentDelivery endpoint of AWS-EU region
// https://eu-cdn.contentstack.com
Utils.getContentstackEndpoint('GCP-NA', 'contentManagement', true);
// returns contentManagement endpoint of GCP-NA region without https
// gcp-na-api.contentstack.com
```

**Parameters**

| Name | Type | Description |
|---|---|---|
| `region` | string | Specifies the region for which endpoints are fetched. |
| `service` (optional) | string | Specifies the service whose endpoint is fetched. If not provided, the method returns endpoints of all services in that region. |
| `omitHttps` (optional) | boolean | Indicates whether the returned endpoint omits the `https://` prefix. Default is false. |

## Common questions

### Do I need to install `@contentstack/utils` if I’m using the Contentstack JavaScript or TypeScript Delivery SDK?
No. **Note:** The Contentstack JavaScript and TypeScript Delivery SDKs already include `@contentstack/utils`, so installation is not required when using those SDKs.

### When should I use `includeEmbeddedItems()`?
Use `includeEmbeddedItems()` when you want to fetch embedded items from RTE fields, including JSON RTE fields.

### How do I render embedded items for multiple entries?
Fetch entries using `.find()` and then call `Contentstack.Utils.render()` or `Contentstack.Utils.jsonToHTML()` for each entry in `result.entries`.

### What does `omitHttps` do in `getContentstackEndpoint()`?
It indicates whether the returned endpoint omits the `https://` prefix. Default is false.

<!-- filename: javascript-delivery-get-started-with-javascript-utils-library.md -->