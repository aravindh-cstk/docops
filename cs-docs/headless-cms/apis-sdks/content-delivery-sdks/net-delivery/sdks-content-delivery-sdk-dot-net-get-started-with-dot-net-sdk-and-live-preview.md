---
title: "Get Started with .NET SDK and Live Preview"
description: "Get started with Contentstack .NET SDK for building apps. Learn installation, setup, Live Preview integration, and more. Explore the guide now!"
url: /developers/sdks/content-delivery-sdk/dot-net/get-started-with-dot-net-sdk-and-live-preview
uid: blt4eb0b76b49301dde
---

# Get Started with .NET SDK and Live Preview

## Get Started with .NET SDK and Live Preview

This guide will help you get started with [Contentstack .NET SDK](/docs/developers/sdks/content-delivery-sdk/dot-net/about-dot-net-delivery-sdk/) to build apps powered by Contentstack.

## Prerequisites

-   .NET 10 or later
-   [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)

## SDK Installation and Setup

To install the .NET SDK, choose either of the following methods:

-   **Via Package Manager**: Open the terminal and install the contentstack module using the following “Package Manager” command:

    ```
    PM> Install-Package contentstack.csharp
    ```

-   **Via .NET CLI**: Run the following .NET CLI command:

    ```
    dotnet add package contentstack.csharp
    ```


After successful installation, to use the module in your application, you need to first add a namespace to your class:

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType
using Contentstack.Core.Configuration; // ContentstackOptions
```

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.

Add the appsettings.json command to initialize the stack:

```
{
  "ContentstackOptions": {
        "ApiKey": "<api_key>",
        "DeliveryToken": "<delivery_token>",
        "Environment": "<environment>",
        "LivePreview": {
	      "PreviewToken" : "<preview_token>",
	      "Enable" : true, 
	      "Host" : "rest-preview.contentstack.com" 
        }
    }
}
```

**Note:** By default, the Host parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against the Host parameter.

## Configure the HTTP Request Pipeline

Use the following method to configure the HTTP request pipeline:

```
// Startup.cs
...
//Add following 
using Contentstack.Core;
using System.Linq;
using Microsoft.Extensions.Primitives;

public class Startup
{
    ...
    public void ConfigureServices(IServiceCollection services)
    {
        ...
        services.AddContentstack(Configuration); //Contentstack Configuration
    }
    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        ...
        app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()); //CORS to allow Contentstack origin
        app.Use(async (context, next) =>
        {
            var contentstackClient =  app.ApplicationServices.GetService<ContentstackClient>();
            var dict = context.Request.Query.Keys.Cast<string>().ToDictionary(k => k, v =>
                {
                    StringValues hash;
                    context.Request.Query.TryGetValue(v, out hash);
                    return hash.ToString();
                });
            try
            {
                await contentstackClient.LivePreviewQueryAsync(dict); 
            }
            catch { }
            await next.Invoke();
        });
    }
}
```

## For Server-side Rendered Websites

To install and initialize the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk), you can refer to our [SSR Live Preview Setup](/docs/headless-cms/set-up-live-preview-for-your-website#server-side-rendering-ssr-) documentation.

Add the following script within the head tag of the “\_Host.chtml” or “Index.chtml” file:

```
...
ContentstackLivePreview.init({
            enable: true,
            ssr: true,
            stackDetails: {
                apiKey: "API_KEY", //Stack API key
            },
        });
...
```

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) UID and the UID of the entry.

```
client.ContentType("CONTENT_TYPE_UID").Query().Find();
client.ContentType("CONTENT_TYPE_UID").Entry(“ENTRY_UID”).Find();
```

## Timeline Preview

The Timeline Preview feature in the DotNet Delivery SDK allows you to preview different versions of an entry based on specific timestamps or scheduled releases—making it easier to test future or past content states.

For more information, refer to our [Timeline Preview](/docs/headless-cms/set-up-timeline-for-your-website) documentation

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [.NET News App](/docs/developers/sdks/content-delivery-sdk/dot-net/get-started-with-dot-net-delivery-sdk)
-   [API Reference](/docs/developers/sdks/content-delivery-sdk/dot-net/reference/)
-   [.NET SDK Changelog](/docs/changelog?filter=sdks)
-   [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)
