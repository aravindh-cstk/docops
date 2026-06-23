---
title: "[JavaScript Utils] - Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content"
description: Step-by-step guide to use GraphQL-powered Delivery SDK with JavaScript Utils SDK to render JSON Rich Text Editor content.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/use-graphql-queries-with-javascript-utils-sdk-to-render-json-rte-content
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - frontend-engineers
version: latest
last_updated: 2026-03-26
---

# [JavaScript Utils] - Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content

This page explains how to fetch content using GraphQL queries (via a GraphQL-powered Delivery SDK) and then render JSON Rich Text Editor (JSON RTE) content using the Contentstack JavaScript Utils SDK. It is intended for developers building JavaScript applications that consume Contentstack content via GraphQL and need to render JSON RTE fields on the frontend.

## Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content

This step-by-step guide explains how to use a GraphQL-powered Delivery SDK to deliver content to your [JavaScript SDK](https://github.com/contentstack/contentstack-javascript) apps and the [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript) to render [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) content.

**Note**: We recommend that you either use GraphQL queries with “Apollo Client SDK” or “[JavaScript Delivery SDK](https://github.com/contentstack/contentstack-javascript)” to fetch and deliver content to your frontend website. To render JSON RTE content, we must use the Contentstack Utils SDK.

## Prerequisites

To get started with the [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript), you will need:
- [Node.js](https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/use-graphql-queries-with-javascript-utils-sdk-to-render-json-rte-content) version 20 or later

## SDK Installation and Setup

To consume content delivered by the GraphQL Content Delivery API, you need to use [GraphQL queries with the Apollo Client JavaScript SDK](/docs/developers/graphql-api/use-the-graphql-queries-with-apollo-sdks/use-graphql-queries-with-apollo-client-javascript-sdk).

Subsequently, to render JSON RTE content while delivering data to the front-end website, you need to use the [Contentstack JavaScript Utils SDK](/docs/developers/javascript-browser/about-javascript-utils-library). To install the [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript), run the following command:

```
npm i @contentstack/utils
```

## Usage

Let’s learn how you can use [GraphQL queries](/docs/developers/apis/graphql-content-delivery-api#queries) to fetch entry content and Javascript Utils SDK to render JSON Rich Text Editor content.

### Create Render Option

To render embedded items on the front-end, use the renderOption function, and define the UI elements you want to show in the front-end of your website, as shown in the example below:

```
const renderOption = {
// to render Supercharged RTE NodeType content such as paragraph, link, table, ordered list, unordered list and more.
   p: (node,next) => {
       `${next(node.children)}

`
 // you will need to call the next function with node children contents
   }
   h1: (node,next) => {
       `
# ${next(node.children)}
`
 // you will need to call the next function with node children contents
   }
   //to render Supercharged RTE MarkType content like bold, italic, underline, strikethrough, inline code, subscript, and superscript
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

//to display assets
   display: (asset, metadata) => {
       ''
   }
}
```

### Render JSON RTE Content

To render the JSON Rich Text Editor content along with other entry data, use the Utils.jsonToHtml function as shown below:

```
client
  .query({
    query: gql`query {
      all_product(locale: "en-us") {
        items {
          title
          description
          price
                    rte_fieldUid
          featured_imageConnection(limit: 10) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }`
  })
  .then(result =>{
    Utils.jsonToHtml({ entry: result.all_product.items, paths: ["rte_fieldUid"], renderOption})
  })
);
```

**Note**: To get all embedded items while fetching an entry with a JSON RTE field, use the includeEmbeddedItems function.

### Include Embedded JSON RTE Items

To include embedded items while fetching JSON Rich Text Editor content using GraphQL Delivery API, you can specify the name of the content types to which the embedded entries belong under the embedded_itemsConnection field schema. To fetch embedded assets, provide the system-generated typename, SysAsset.

Here is a sample of the embedded_itemsConnection field schema:

```
embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on KitchenAppliances {
                title
                kitchen_appliance_price_in_usd
              }
              ... on SysAsset {
                title
              }
            }
          }
        }
```

**Additional Resource**: For more information on querying embedded items, you can refer to the [Include Embedded RTE Items](/docs/developers/apis/graphql-content-delivery-api#include-embedded-rte-items) documentation.

## Common questions

### Do I need the JavaScript Utils SDK if I’m already using GraphQL queries?
Yes. **Note**: We recommend that you either use GraphQL queries with “Apollo Client SDK” or “[JavaScript Delivery SDK](https://github.com/contentstack/contentstack-javascript)” to fetch and deliver content to your frontend website. To render JSON RTE content, we must use the Contentstack Utils SDK.

### What Node.js version is required?
- [Node.js](https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/use-graphql-queries-with-javascript-utils-sdk-to-render-json-rte-content) version 20 or later

### Which function is used to render JSON Rich Text Editor content?
To render the JSON Rich Text Editor content along with other entry data, use the Utils.jsonToHtml function as shown below:

### How do I query embedded items and assets in GraphQL?
To include embedded items while fetching JSON Rich Text Editor content using GraphQL Delivery API, you can specify the name of the content types to which the embedded entries belong under the embedded_itemsConnection field schema. To fetch embedded assets, provide the system-generated typename, SysAsset.