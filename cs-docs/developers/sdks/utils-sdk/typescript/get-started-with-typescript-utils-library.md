---
title: "[Typescript] - Get Started with typescript Utils Library"
description: This guide will help you get started with Contentstack TypeScript Utils SDK to build apps powered by Contentstack.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/typescript/get-started-with-typescript-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Typescript] - Get Started with typescript Utils Library

This page explains how to install and use the Contentstack TypeScript Utils SDK to render embedded items (HTML/JSON RTE) when building apps powered by Contentstack. It is intended for developers integrating Contentstack Delivery SDK responses into front-end rendering workflows, especially when working with embedded items in RTE fields.

## Get Started with Typescript Utils Library

This guide will help you get started with Contentstack TypeScript Utils SDK to build apps powered by Contentstack.

## Prerequisites
To get started with the TypeScript Utils SDK, you will need:
- [Node.js](https://nodejs.org/en) Version 22 or later

## SDK Installation and Setup
**Note**: If you are using the TypeScript Contentstack SDK, you don't need to run the command as @contentstack/utils is already imported in the SDK.

Use the following command to install Contentstack TypeScript Utils SDK:

```
npm i @contentstack/utils
```

## Usage
Let's learn how you can use Typescript Utils SDK to render embedded items.

### Create Render Option
To render embedded items on the front-end, use the **renderOption **function, and define the UI elements you want to show in the front-end of your website, as shown in the example below:

```
const renderOption = {
// to render Supercharged RTE NodeType content like paragraph, link, table, order list, un-order list and more.
   p: (node, next) => {
       `${next(node.children)}

` // you will need to call next function with node children contents
   }
   h1: (node, next) => {
       `
# ${next(node.children)}
` // you will need to call next function with node children contents
   }
   // to render Supercharged RTE MarkType content like bold, italic, underline, strikethrough, inlineCode, subscript, and superscript
   bold: (text) => {
       `**${text}**`
   }

//to render block-type embedded items
   block: {
      'product': (entry, metadata) => {
              '

## {entry.title}

                  {entry.price}

              '
        },

//to render the default
       '$default': (entry, metadata) => {
           '

## {entry.title}

               {entry.description}

           '
       }
   },
//to display inline embedded items
   inline: {
       '$default': (entry) => {
           '**{entry.title}** - {entry.description}'
       }
   },
//to display embedded items inserted via link
   link: (entry, metadata) => {
       '[{metadata.text}]({metadata.attributes.href})'
   },

// to display assets
  display: (asset, metadata) => {
    return ``
  }
}
```

## Basic Queries
Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry

#### Render HTML RTE Embedded object
To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the **includeEmbeddedItems **and **Contentstack.Utils.render** functions as shown below:

```
If you have multiple HTML-based RTE fields in an entry and want to fetch the embedded items from a particular RTE field, you need to provide a path of those RTE fields.

Refer to the example code below:

//code to render embedded item from an RTE field and from another RTE field nested within a group field

contentstack.Utils.render({ entry, path: ["rte_fieldUid", "group.rtefieldUID"], renderOption })
```

#### Render JSON RTE Contents
To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the **Contentstack.Utils.jsonToHTML** function as shown below:

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk'

const params: StackConfig = {
  apiKey: '',
  deliveryToken: '',
  environment: '',
}
const stack = contentstack.stack(params)

const result = await stack
  .contentType('')
  .entry('')
  .includeEmbeddedItems()
  .fetch();

Contentstack.Utils.jsonToHTML({
    entry: result,
    paths: ["rte_fieldUid", "group.rteFieldUID"],
    renderOption
})
```
**Note:** To get all embedded items while fetching an entry with a JSON RTE field use **includeEmbeddedItems** function.

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded object
To get embedded items from multiple entries, you need to provide the content type UID. You can also use the path variable in case the entries have multiple HTML-based RTE fields.

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk'

const params: StackConfig = {
  apiKey: '',
  deliveryToken: '',
  environment: '',
}
const Stack = contentstack.stack(params)

const result = await stack
  .contentType('')
  .entry()
  .includeEmbeddedItems()
  .find();

result.entries.forEach(entry => {
  contentstack.Utils.render({
    entry,
    paths: ["rte_fieldUid", "group.rteFieldUID"],
    renderOption
  })
})

```

#### Render JSON RTE contents
To get multiple entries, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the **Contentstack.Utils.jsonToHTML** function as shown below:

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk'

const params: StackConfig = {
  apiKey: '',
  deliveryToken: '',
  environment: '',
}
const Stack = contentstack.stack(params)

const result = await stack
  .contentType('')
  .entry()
  .includeEmbeddedItems()
  .find();

result.entries.forEach(entry => {
  contentstack.Utils.jsonToHTML({
    entry,
    paths: ["rte_fieldUid", "group.rteFieldUID"],
    renderOption
  })
})

```
**Note:**
- To get all embedded items while fetching an entry with a JSON RTE field use **includeEmbeddedItems** function.
- The methods jsonToHTML() and htmlToJson() allow you to transform data between JSON and HTML formats.

## Common questions

### Do I need to install `@contentstack/utils` if I am using the TypeScript Contentstack SDK?
No. **Note**: If you are using the TypeScript Contentstack SDK, you don't need to run the command as @contentstack/utils is already imported in the SDK.

### What Node.js version is required?
- [Node.js](https://nodejs.org/en) Version 22 or later

### When should I use `includeEmbeddedItems()`?
**Note:** To get all embedded items while fetching an entry with a JSON RTE field use **includeEmbeddedItems** function.

### What do `jsonToHTML()` and `htmlToJson()` do?
- The methods jsonToHTML() and htmlToJson() allow you to transform data between JSON and HTML formats.

<!-- filename: typescript-get-started-with-typescript-utils-library.md -->