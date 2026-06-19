---
title: "[.NET] - Get Started with .NET Delivery SDK"
description: Get started guide for the Contentstack .NET Delivery SDK, including installation, initialization, basic queries, pagination, limitations, and resources.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dot-net/get-started-with-dot-net-delivery-sdk
product: Contentstack
doc_type: getting-started
audience:
  - developers
version: v2
last_updated: 2026-03-25
---

# [.NET] - Get Started with .NET Delivery SDK

This page explains how to install, initialize, and use the Contentstack .NET Delivery SDK to fetch content in .NET applications. It is intended for developers who want to connect a Contentstack stack to a .NET app and run basic queries (single entry, multiple entries, pagination), including region and branch configuration.

## Get Started with .NET Delivery SDK

This guide will help you get started with the [Contentstack .NET SDK](/docs/developers/sdks/content-delivery-sdk/dot-net/about-dot-net-delivery-sdk/) to build .NET apps powered by Contentstack.

## Prerequisites
- .NET version 2.0 or later

## SDK Installation and Setup
Contentstack offers seven regions **AWS North America**,** AWS Europe**, **AWS Australia**, **Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other, and therefore, have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Austraila, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

Open the terminal and install the Contentstack module via “Package Manager” command as follows:

```
PM> Install-Package contentstack.csharp
```

And via “.Net CLI”

```
dotnet add package contentstack.csharp
```

To use the module in your application, you first need to add Namespace to your class as follows:

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType Models
using Contentstack.Core.Configuration; // ContentstackOptions
```

## Initialize SDK
To initialize the SDK, you will need to specify the stack’s **API Key, **[**delivery token**](/docs/developers/create-tokens/about-delivery-tokens)**,** and name of the [**environment**](/docs/developers/set-up-environments/about-environments) where you have published the content.

```
// Initialize the Contentstack
ContentstackClient stack = new ContentstackClient("stack_api_key", "delivery_token", "environment_name");
```

OR

```
var options = new ContentstackOptions() {
    ApiKey = "",
    DeliveryToken = "",
    Environment = ""
}
ContentstackClient stack = new ContentstackClient(options);
```

**For Setting other Regions**:

To set and use the SDK for the Europe, AWS Australia, Azure NA, or Azure EU region, refer to the following code:

```
using Contentstack.Core.Internals;
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "",
    DeliveryToken = "",
    Environment = "",
    Region = ContentstackRegion.EU
}
ContentstackClient stack = new ContentstackClient(options);
```

Once you have initialized the SDK, you can start getting content in your app.

**For Setting the Branch:**

If you want to initialize the SDK in a particular branch, use the code given below:

```
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "",
    AccessToken = "",
    Environment = "",
    Region = ContentstackRegion.EU,
    Branch = """
};
ContentstackClient stack = new ContentstackClient(options);
```

## Basic Queries
The Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To retrieve a single [entry](/docs/content-managers/author-content/about-entries) from a [content type](/docs/developers/create-content-types/about-content-types), use the code snippet given below:

```
Entry entry = client.ContentType("blog").Entry("blta464e9fbd048668c");
entry.Fetch().ContinueWith((t) => {
    if (!t.IsFaulted) {
        Console.WriteLine("entry:" + t.Result);
    }
});
```

### Get Multiple Entries
To retrieve multiple entries of a particular content type, use the code snippet given below:

```
Query query = client.ContentType("blog").Query();
query.Where("title", "welcome");
query.IncludeSchema();
query.IncludeCount();
query.Find().ContinueWith((t) => {
    if (!t.IsFaulted) {
         ContentstackCollection result = t.Result;
         Console.WriteLine("result" + result);
    }
});
```

These were the examples of some of the basic queries of the SDK. For advanced queries, refer to the Contentstack .NET SDK [API reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/).

**Note:** Currently, the .NET SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api#queries) section of our Content Delivery API documentation.

#### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/#query-limit) parameters in subsequent requests.

```
Query query = client.ContentType("blog").Query();
query.Skip(20);
query.Limit(20);
query.Find().ContinueWith((t) => {
    if (!t.IsFaulted) {
         ContentstackCollection result = t.Result;
         Console.WriteLine("result" + result);
    }
});
```

## Limitations
We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.

The .NET SDK does not support multiple content types referencing in a single query.

Currently, the .NET SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [.NET News App](/docs/developers/dot-net/get-started-with-dot-net-delivery-sdk)
- [.NET Liquid Template Website](/docs/developers/sample-apps/build-a-liquid-template-example-using-contentstack-dot-net-sdk)
- [Product Catalog App Using GraphQL Client and .Net](/docs/developers/sample-apps/build-a-product-catalog-app-using-graphql-client-and-net)
- [Product Catalog Website Using ASP.Net Razor Pages and Contentstack .Net SDK](/docs/developers/sample-apps/build-a-product-catalog-website-using-asp-net-razor-pages-and-contentstack-net-sdk)
- [API Reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/)
- [.NET SDK Changelog](/docs/developers/sdks/content-delivery-sdk/dot-net/dot-net-sdk-changelog/)
- [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)

## Common questions

### Which .NET versions are supported?
- .NET version 2.0 or later

### What do I need to initialize the SDK?
You will need to specify the stack’s **API Key, **[**delivery token**](/docs/developers/create-tokens/about-delivery-tokens)**,** and name of the [**environment**](/docs/developers/set-up-environments/about-environments) where you have published the content.

### How do I retrieve more than 100 items from a content type?
You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/#query-limit) parameters in subsequent requests.

### What are key limitations to be aware of?
We have a URL size limitation of 8KB on API Requests that hit our CDN services, and the .NET SDK does not support multiple content types referencing in a single query.