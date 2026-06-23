---
title: "[.NET] - Sample .NET News App"
description: Sample .NET News App built using Contentstack’s .NET SDK to store and deliver news app content.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dot-net/sample-dot-net-news-app
product: Contentstack
doc_type: tutorial
audience:
  - developers
  - dotnet-developers
version: unknown
last_updated: 2026-03-26
---

# [.NET] - Sample .NET News App

This page explains how to set up and run a demo news app built using Contentstack’s .NET SDK. It is intended for developers who want to configure Contentstack (stack, environment, content types, entries) and then install, initialize, and use the .NET SDK to fetch and display content.

Sample .NET News App

This demo news app is built using Contentstack’s .NET SDK. It uses Contentstack to store and deliver the content of the news app.

## Prerequisites
- Contentstack .NET SDK
- [Contentstack Account](https://app.contentstack.com/#!/login)

**Note:** For this tutorial, we have assumed that you are familiar with Contentstack. If not, then please refer to the docs ([Contentstack docs](https://www.contentstack.com/docs/)) for more details.

In this tutorial, we will first go through the steps involved in configuring Contentstack, and then look at the steps required to customize and use the presentation layer.

## Create a Stack

Log in to your Contentstack account, and create a new stack. This stack will hold all the data, specific to your website. Learn more on [how to create a stack](../../../set-up-stack/create-a-new-stack.md).

## Add a Publishing Environment

To add an environment in Contentstack, go to your stack and click the “Settings” icon on the left navigation panel**.** Select **Environments**, and click on the **+ New Environment** button. Provide a suitable name for your environment, say “staging”. Specify the base URL (e.g., “[http://YourDomainName.com](http://YourDomainName.com)”), and select the language (e.g., English - United States). Then, click on **Save**. Read more about [environments](../../../set-up-environments/about-environments.md).

## Import Content Types

For this website, two basic content types are required: ‘Category’ and ‘News’. Read more about [Content Types](/docs/developers/create-content-types).

For quick integration, we have already [created these content types](../../../create-content-types/create-a-content-type.md). You can [import these content types](../../../create-content-types/import-a-content-type.md) into your project stack in Contentstack.

Here’s a brief overview of the content types required for this project.

**News**: This content type lets you add the news content into your app.
- **Category**: This content type lets you create the various categories of your news app.

## Adding Content

**Create and publish entries for the ‘News’ and ‘Category’ content types**

Add a few dummy entries for news articles for the ‘News’ content type. Save and publish these entries. Learn how to [create](../../../../content-managers/author-content/create-an-entry.md) and [publish](../../../../content-managers/author-content/publish-an-entry.md) entries.

With this step, you have created sample data for your website. Now, it’s time to use and configure the presentation layer.

## SDK Installation and Setup

To use the .NET SDK, open the terminal, navigate to the project folder, and install the contentstack module via ‘Package Manager’ command

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
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType
using Contentstack.Core.Configuration; // ContentstackOptions

```

## Initialize SDK

You will need to specify the API key, delivery token, and the environment Name of your stack to initialize the SDK. (Learn how to find your Stack's [API Key and Delivery Token](../../../set-up-stack/edit-a-stack.md). Read more about [Environments](/docs/developers/set-up-environments).)

```
// Initialize the Contentstack Stack
ContentstackOptions contentstackOptions = new ContentstackOptions {
    ApiKey = "api_key",
    DeliveryToken = "delivery_token",
    Environment = "environment_name"
};
ContentstackClient contentstackClient = new ContentstackClient(contentstackOptions);

```

Once you have initialized the SDK, you can start getting content in your app.

## Create the Content Type Model Using Contentstack Model Generator

Open the command prompt and install the Contentstack Model Generator by using the following command:

```
dotnet tool install --global contentstack.model.generator
```

Go to your project’s root folder and run the following command:

```
contentstack.model.generator -a  -A
```

This command will automatically create the `Models` folder, inside the project's root folder. This folder contains predefined files and folders.

The `Models` subdirectory, containing the `News.cs` and `Category.cs` files, provides an `Entry Model` class as well as supporting code for entries associated with the “News” and “Category” content types.

## Configure the Application

To help you get started, we have created a sample application that is powered by Contentstack .NET SDK.

**Note:** Add your Contentstack API Key, Delivery Token, and Environment to the project during the SDK initialization step:

```
using System;
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType
using Contentstack.Core.Configuration; // ContentstackOptions
using ContentstackModels.Models;
using System.Threading.Tasks;

namespace SampleTerminal
{
    class Program
    {
        static async Task Main(string[] args)
        {

            // Initialize the Contentstack Stack
            ContentstackOptions contentstackOptions = new ContentstackOptions
            {
                ApiKey = "API_Key",
                DeliveryToken = "Delivery_Token",
                Environment = "Environment_Name"
            };
            ContentstackClient contentstackClient = new ContentstackClient(contentstackOptions);

            Query query = contentstackClient.ContentType("news").Query();
            query.IncludeReference("category");
            ContentstackCollection listEntries = await query.Find();
            String newsTitle = string.Empty;
            foreach (News news in listEntries.Items)
            {
                Console.WriteLine("Title : " + news.Title);
            }
            Console.ReadLine();
        }
    }
}

```

#### Result

Here's a screenshot that shows how your output will look like:

Now that we have a working project, you can fire queries to see how it works.

**Additional Resource:** Java SDK is another tool that is used to build similar apps. To know more, refer to our guide on [how to build a news app using Contentstack and Contentstack Java SDK](/docs/developers/sample-apps/build-a-news-app-for-java-using-contentstack-and-contentstack-java-sdk).

## More resources
- [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)

## Common questions

### Do I need a Contentstack account to follow this tutorial?
Yes, you need a [Contentstack Account](https://app.contentstack.com/#!/login).

### Which content types are required for this project?
For this website, two basic content types are required: ‘Category’ and ‘News’.

### How do I install the Contentstack .NET SDK?
You can install it via ‘Package Manager’ command (`PM> Install-Package contentstack.csharp`) or via ‘.Net CLI’ (`dotnet add package contentstack.csharp`).

### What values are required to initialize the SDK?
You will need to specify the API key, delivery token, and the environment Name of your stack to initialize the SDK.