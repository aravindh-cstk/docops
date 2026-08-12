---
title: "Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content"
description: "Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content"
url: /developers/sdks/utils-sdk/javascript/use-graphql-queries-with-javascript-utils-sdk-to-render-json-rte-content
---

# Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content

## Use GraphQL Queries with JavaScript Utils SDK to Render JSON RTE Content

This step-by-step guide explains how to use a GraphQL-powered Delivery SDK to deliver content to your [JavaScript SDK](https://github.com/contentstack/contentstack-javascript) apps and the [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript) to render [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) content.

**Note:** We recommend that you either use GraphQL queries with “Apollo Client SDK” or “[JavaScript Delivery SDK](https://github.com/contentstack/contentstack-javascript)” to fetch and deliver content to your frontend website. To render JSON RTE content, we must use the Contentstack Utils SDK.

## Prerequisites

To get started with the [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript), you will need:

-   [Node.js](https://www.contentstack.com/docs/developers/sdks/utils-sdk/javascript/use-graphql-queries-with-javascript-utils-sdk-to-render-json-rte-content) version 20 or later

## SDK Installation and Setup

To consume content delivered by the GraphQL Content Delivery API, you need to use [GraphQL queries with the Apollo Client JavaScript SDK](/docs/headless-cms/use-graphql-queries-with-apollo-client-javascript-sdk).

Subsequently, to render JSON RTE content while delivering data to the front-end website, you need to use the [Contentstack JavaScript Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-utils-library). To install the [JavaScript Utils SDK](https://github.com/contentstack/contentstack-utils-javascript), run the following command:

```
npm i @contentstack/utils
```

## Usage

Let’s learn how you can use [GraphQL queries](/docs/developers/apis/graphql-content-delivery-api/queries) to fetch entry content and Javascript Utils SDK to render JSON Rich Text Editor content.

### Create Render Option

To render embedded items on the front-end, use the renderOption function, and define the UI elements you want to show in the front-end of your website, as shown in the example below:

```
const renderOption = {
// to render Supercharged RTE NodeType content such as paragraph, link, table, ordered list, unordered list and more.
   p: (node,next) => {
       `<p class='class-id'>${next(node.children)}</p>`
 // you will need to call the next function with node children contents
   }
   h1: (node,next) => {
       `<h1 class='class-id'>${next(node.children)}</h1>`
 // you will need to call the next function with node children contents
   }
   //to render Supercharged RTE MarkType content like bold, italic, underline, strikethrough, inline code, subscript, and superscript
   bold: (text) => {
       `<b>${text}</b>`
   }

//to render block-type embedded items
   block: {
      'product': (entry, metadata) => {
              '<div>
                  <h2 >{entry.title}</h2>
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

//to display assets
   display: (asset, metadata) => {
       '<img src={metadata.attributes.src} alt={metadata.alt} />'
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

**Note:** To get all embedded items while fetching an entry with a JSON RTE field, use the includeEmbeddedItems function.

### Include Embedded JSON RTE Items

To include embedded items while fetching JSON Rich Text Editor content using GraphQL Delivery API, you can specify the name of the content types to which the embedded entries belong under the embedded\_itemsConnection field schema. To fetch embedded assets, provide the system-generated typename, SysAsset.

Here is a sample of the embedded\_itemsConnection field schema:

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

**Additional Resource:** For more information on querying embedded items, you can refer to the [Include Embedded RTE Items](/docs/developers/apis/graphql-content-delivery-api/retrieving-referenced-entries-or-assets#include-embedded-rte-items) documentation.
