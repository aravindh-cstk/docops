---
title: "Get Started with typescript Utils Library"
description: "A comprehensive guide to the Typescript Utils SDK, including features, installation, and usage."
url: /developers/sdks/utils-sdk/typescript/get-started-with-typescript-utils-library
uid: blt13e51ca071982c71
---

# Get Started with typescript Utils Library

## Get Started with Typescript Utils Library

This guide will help you get started with Contentstack TypeScript Utils SDK to build apps powered by Contentstack.

## Prerequisites

To get started with the TypeScript Utils SDK, you will need:

-   [Node.js](https://nodejs.org/en) Version 22 or later

## SDK Installation and Setup

**Note:** If you are using the TypeScript Contentstack SDK, you don't need to run the command as @contentstack/utils is already imported in the SDK.

Use the following command to install Contentstack TypeScript Utils SDK:

```
npm i @contentstack/utils
```

## Usage

Let's learn how you can use Typescript Utils SDK to render embedded items.

### Create Render Option

To render embedded items on the front-end, use the **renderOption** function, and define the UI elements you want to show in the front-end of your website, as shown in the example below:

```
const renderOption = {
// to render Supercharged RTE NodeType content like paragraph, link, table, order list, un-order list and more.
   p: (node, next) => {
       `<p class='class-id'>${next(node.children)}</p>` // you will need to call next function with node children contents
   }
   h1: (node, next) => {
       `<h1 class='class-id'>${next(node.children)}</h1>` // you will need to call next function with node children contents
   }
   // to render Supercharged RTE MarkType content like bold, italic, underline, strikethrough, inlineCode, subscript, and superscript
   bold: (text) => {
       `<b>${text}</b>`
   }

//to render block-type embedded items
   block: {
      'product': (entry, metadata) => {
              '<div>
                  <h2>{entry.title}</h2>
                   <img src={entry.product_image.url}   alt={entry.product_image.title}/>
                  <p>{entry.price}</p>
              </div>'
        },


//to render the default
       '$default': (entry, metadata) => {
           '<div>
               <h2>{entry.title}</h2>
               <p>{entry.description}</p>  
           </div>'
       }
   },
//to display inline embedded items
   inline: {
       '$default': (entry) => {
           '<span><b>{entry.title}</b> - {entry.description}</span>'
       }
   },
//to display embedded items inserted via link
   link: (entry, metadata) => {
       '<a href="{metadata.attributes.href}">{metadata.text}</a>'
   },

// to display assets
  display: (asset, metadata) => {
    return `<img src=${asset.url || metadata.attributes.src || metadata.attributes['asset-link']} alt=${metadata.alt} />`
  }
}
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry

#### Render HTML RTE Embedded object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the **includeEmbeddedItems** and **Contentstack.Utils.render** functions as shown below:

If you have multiple HTML-based RTE fields in an entry and want to fetch the embedded items from a particular RTE field, you need to provide a path of those RTE fields.

Refer to the example code below:

```
//code to render embedded item from an RTE field and from another RTE field nested within a group field

contentstack.Utils.render({ entry, path: ["rte_fieldUid", "group.rtefieldUID"], renderOption })
```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the **Contentstack.Utils.jsonToHTML** function as shown below:

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk'

const params: StackConfig = {
  apiKey: '<API_KEY>',
  deliveryToken: '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>',
  environment: '<ENVIRONMENT>',
}
const stack = contentstack.stack(params)

const result = await stack
  .contentType('<CONTENT_TYPE_UID>')
  .entry('<ENTRY_UID>')
  .includeEmbeddedItems()
  .fetch<BlogPostEntry>();

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
  apiKey: '<API_KEY>',
  deliveryToken: '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>',
  environment: '<ENVIRONMENT>',
}
const Stack = contentstack.stack(params)

const result = await stack
  .contentType('<CONTENT_TYPE_UID>')
  .entry()
  .includeEmbeddedItems()
  .find<BlogPostEntry>();

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
  apiKey: '<API_KEY>',
  deliveryToken: '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>',
  environment: '<ENVIRONMENT>',
}
const Stack = contentstack.stack(params)

const result = await stack
  .contentType('<CONTENT_TYPE_UID>')
  .entry()
  .includeEmbeddedItems()
  .find<BlogPostEntry>();

result.entries.forEach(entry => {  
  contentstack.Utils.jsonToHTML({
    entry,
    paths: ["rte_fieldUid", "group.rteFieldUID"],
    renderOption
  })
})
```

**Note:**

-   To get all embedded items while fetching an entry with a JSON RTE field use **includeEmbeddedItems** function.
-   The methods jsonToHTML() and htmlToJson() allow you to transform data between JSON and HTML formats.
