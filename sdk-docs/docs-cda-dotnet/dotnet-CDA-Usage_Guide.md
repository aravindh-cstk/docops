---
title: ".NET Delivery Introduction"
description: "Contentstack - .NET Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
cms_uid: "bltd35a40cddae7c426"
---

# .NET Delivery Introduction

## .NET SDK for Contentstack's Content Delivery API

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest.

For more information, you can check out the GitHub page of our [.NET Delivery SDK](https://github.com/contentstack/contentstack-dotnet).

## Prerequisites

To get started with C#, you will need:

- .Net platform
- IDE (Visual Studio)
- NuGet.

## SDK installation and setup

The .Net SDK provided by [contentstack.io](http://contentstack.io) is available for Xamarin, Windows Phone and legacy .Net applications. You can integrate contentstack with your application by following these steps.

Open the terminal and install the contentstack module via 'Package Manager' command

```
PM> Install-Package contentstack.csharp
```

And via ‘.Net CLI’

```
dotnet add package contentstack.csharp
```

To use the module in your application, you need to first Add Namespace to your class

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType, ContentstackCollection
using Contentstack.Core.Configuration; // ContentstackOptions
```

## Quickstart in 5 mins

### Initialize SDK

You will need to specify the API key, Access token, and Environment Name of your stack to initialize the SDK:

```
// Initialize the Contentstack 
ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "enviroment_name");
```

or:

```
ContentstackOptions options = new ContentstackOptions()
{
	ApiKey = "<api_key>",
	DeliveryToken = "<access_token>",
	Environment = "<environment>"
}
ContentstackClient client = new ContentstackClient(options);
```

Once you have initialized the SDK, you can start getting content in your app **For Setting other regions**:

Refer the below code if you want to use the Europe, Australia, Azure North America, Azure Europe, GCP North America, or GCP Europe region.

```
ContentstackOptions options = new ContentstackOptions()
{
	ApiKey = "<api_key>",
	DeliveryToken = "<delivery_token>",
	Environment = "<environment>",
	Region = ContentstackRegion.EU
}
ContentstackClient client = new ContentstackClient(options);
```

Once you have initialized the SDK, you can start getting content in your app.

**For Setting the Early Access Header:**

Integrating `EarlyAccess` headers into the `ContentstackOptions` grants access to features included in the early access program.

```
ContentstackOptions options = new ContentstackOptions() {
    ApiKey = "<api_key>",
    DeliveryToken = "<delivery_token>",
    Environment = "<environment>",
    Branch = "<branch>"
    EarlyAccess = new string [] {"Taxonomy", "Teams", "Terms", "LivePreview"}
};

ContentstackClient client = new ContentstackClient(options);
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| EarlyAccess (Optional) | Array of Strings | Array of header strings for early access features. |

### Basic Queries

#### Get a Single Entry

To retrieve a single entry from a content type, use the code snippet given below:

```
ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "enviroment_name");
Entry entry = client.ContentType("product").Entry("entry_uid");
entry.Fetch<Product>().ContinueWith((t) => { 
    if (!t.IsFaulted) { 
        Console.WriteLine("entry:" + t.Result);  
    } 
});
```

#### Get Multiple Entries

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "enviroment_name");
Query query = client.ContentType("product").Query(); 
query.Where("title", "welcome"); 
query.IncludeSchema(); 
query.IncludeCount(); 
query.ToJSON(); 
query.Find<Product>().ContinueWith((t) => { 
    if (!t.IsFaulted) { 
        ContentstackCollection<Product> result = t.Result; 
        Console.WriteLine("result" + result.items); 
    } 
});
```

**Note:** By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Paginating Responses

In a single instance, the[Get Multiple Entries](https://www.contentstack.com/docs/developers/dot-net/get-started-with-dot-net-delivery-sdk/#get-multiple-entries)query will **retrieve only the first 100 items**of the specified content type. You can paginate and retrieve the rest of the items in batches using the**skip**and**limit** parameters in subsequent requests.

```
ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "enviroment_name");
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
