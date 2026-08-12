---
title: "Get Started with .NET Delivery SDK"
description: "Steps for getting started with .Net SDK"
url: /developers/sdks/content-delivery-sdk/dot-net/get-started-with-dot-net-delivery-sdk
---

# Get Started with .NET Delivery SDK

## Get Started with .NET Delivery SDK

This guide will help you get started with the [Contentstack .NET SDK](/docs/developers/sdks/content-delivery-sdk/dot-net/about-dot-net-delivery-sdk/) to build .NET apps powered by Contentstack.

## Prerequisites

-   .NET 10 or later

## SDK Installation and Setup

Contentstack offers seven regions **AWS North America**, **AWS Europe**, **AWS Australia**, **Azure North America**, **Azure Europe**, **GCP North America,** and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other, and therefore, have a dedicated set of instructions to use SDKs offered by Contentstack.

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

To initialize the SDK, you will need to specify the stack’s **API Key,** [**delivery token**](/docs/headless-cms/about-delivery-tokens)**,** and name of the [**environment**](/docs/headless-cms/about-environments) where you have published the content.

```
// Initialize the Contentstack
ContentstackClient stack = new ContentstackClient("stack_api_key", "delivery_token", "environment_name");
```

OR

```
var options = new ContentstackOptions() {
    ApiKey = "<stack_api_key>",
    DeliveryToken = "<delivery_token>",
    Environment = "<environment_name>"
}
ContentstackClient stack = new ContentstackClient(options);
```

**For Setting other Regions**:

To set and use the SDK for the Europe, AWS Australia, Azure NA, or Azure EU region, refer to the following code:

```
using Contentstack.Core.Internals;
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "<stack_api_key>",
    DeliveryToken = "<delivery_token>",
    Environment = "<environment_name>",
    Region = ContentstackRegion.EU
}
ContentstackClient stack = new ContentstackClient(options);
```

Once you have initialized the SDK, you can start getting content in your app.  

**For Setting the Branch:**

If you want to initialize the SDK in a particular branch, use the code given below:

```
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "<api_key>",
    AccessToken = "<delivery_token>",
    Environment = "<environment_name>",
    Region = ContentstackRegion.EU,
    Branch = "<branch>""
};
ContentstackClient stack = new ContentstackClient(options);
```

## Basic Queries

The Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To retrieve a single [entry](/docs/headless-cms/about-entries) from a [content type](/docs/headless-cms/about-content-types), use the code snippet given below:

```
Entry entry = client.ContentType("blog").Entry("blta464e9fbd048668c");
entry.Fetch<Blog>().ContinueWith((t) => { 
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
query.Find<Blog>().ContinueWith((t) => { 
    if (!t.IsFaulted) { 
         ContentstackCollection<Blog> result = t.Result; 
         Console.WriteLine("result" + result); 
    } 
});
```

These were the examples of some of the basic queries of the SDK. For advanced queries, refer to the Contentstack .NET SDK [API reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/).

**Note:** Currently, the .NET SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/#query-skip) and [limit](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/#query-limit) parameters in subsequent requests.

```
Query query = client.ContentType("blog").Query();
query.Skip(20);
query.Limit(20); 
query.Find<Blog>().ContinueWith((t) => { 
    if (!t.IsFaulted) { 
         ContentstackCollection<Blog> result = t.Result; 
         Console.WriteLine("result" + result); 
    } 
});
```

## Limitations

We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.

The .NET SDK does not support multiple content types referencing in a single query.

Currently, the .NET SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [API Reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/)
-   [.NET SDK Changelog](/docs/developers/sdks/content-delivery-sdk/dot-net/dot-net-sdk-changelog/)
-   [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)
