---
title: "Sample .NET News App"
description: "Simple Steps to work on a .NET app"
url: /developers/sdks/content-delivery-sdk/dot-net/sample-dot-net-news-app
uid: blte8c652ef44e4f1ef
---

# Sample .NET News App

## Sample .NET News App

This demo news app is built using Contentstack’s .NET SDK. It uses Contentstack to store and deliver the content of the news app.

## Prerequisites

-   Contentstack .NET SDK
-   [Contentstack Account](https://app.contentstack.com/#!/login)

**Note:** For this tutorial, we have assumed that you are familiar with Contentstack. If not, then please refer to the docs ([Contentstack docs](https://www.contentstack.com/docs/)) for more details.

In this tutorial, we will first go through the steps involved in configuring Contentstack, and then look at the steps required to customize and use the presentation layer.

1.  ## Create a Stack

    Log in to your Contentstack account, and create a new stack. This stack will hold all the data, specific to your website. Learn more on [how to create a stack](/docs/headless-cms/create-a-new-stack).

2.  ## Add a Publishing Environment

    To add an environment in Contentstack, go to your stack and click the “Settings” icon on the left navigation panel**.** Select **Environments**, and click on the **\+ New Environment** button. Provide a suitable name for your environment, say “staging”. Specify the base URL (e.g., “[http://YourDomainName.com](https://domainempire.com/)”), and select the language (e.g., English - United States). Then, click on **Save**. Read more about [environments](/docs/headless-cms/about-environments).

3.  ## Import Content Types

    For this website, two basic content types are required: ‘Category’ and ���News’. Read more about [Content Types](/docs/headless-cms/create-a-content-type).

    For quick integration, we have already [created these content types](/docs/headless-cms/create-a-content-type). You can [import these content types](/docs/headless-cms/import-a-content-type) into your project stack in Contentstack.

    Here’s a brief overview of the content types required for this project.

    -   **News**: This content type lets you add the news content into your app.
    -   **Category**: This content type lets you create the various categories of your news app.
4.  ## Adding Content

    **Create and publish entries for the ‘News’ and ‘Category’ content types**

    Add a few dummy entries for news articles for the ‘News’ content type. Save and publish these entries. Learn how to [create](/docs/headless-cms/create-an-entry) and [publish](/docs/headless-cms/publish-an-entry) entries.

    With this step, you have created sample data for your website. Now, it’s time to use and configure the presentation layer.

5.  ## SDK Installation and Setup

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

6.  ## Initialize SDK

    You will need to specify the API key, delivery token, and the environment Name of your stack to initialize the SDK. (Learn how to find your Stack's [API Key and Delivery Token](/docs/headless-cms/edit-a-stack). Read more about [Environments](/docs/headless-cms/about-environments).)

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

7.  ## Create the Content Type Model Using Contentstack Model Generator

    Open the command prompt and install the Contentstack Model Generator by using the following command:

    ```
    dotnet tool install --global contentstack.model.generator
    ```

    Go to your project’s root folder and run the following command:

    ```
    contentstack.model.generator -a <API_KEY> -A <AUTHTOKEN>
    ```

    This command will automatically create the Models folder, inside the project's root folder. This folder contains predefined files and folders.

    The Models subdirectory, containing the News.cs and Category.cs files, provides an Entry Model class as well as supporting code for entries associated with the “News” and “Category” content types.

8.  ## Configure the Application

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
                ContentstackCollection<News> listEntries = await query.Find<News>();
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


Now that we have a working project, you can fire queries to see how it works.

## More resources

-   [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)
