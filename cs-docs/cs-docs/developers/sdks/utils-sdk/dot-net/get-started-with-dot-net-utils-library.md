---
title: "[.NET] - Get Started with .NET Utils Library"
description: Get started guide for using the Contentstack .NET Utils SDK to render embedded items from RTE fields.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/dot-net/get-started-with-dot-net-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [.NET] - Get Started with .NET Utils Library

This page explains how to install and use the Contentstack .NET Utils SDK to render embedded items from Rich Text Editor (RTE) fields. It is intended for developers building .NET applications that consume Contentstack content and need to render embedded entries/assets.

## Get Started with .NET Utils Library

This guide will help you get started with Contentstack [.NET Utils SDK](/docs/developers/dot-net/about-net-utils-library) to build apps powered by Contentstack.

For more information, you can check out the GitHub page of our [.NET Utils SDK](https://github.com/contentstack/contentstack-utils-dotnet).

## Prerequisites

To get started with .NET Utils SDK, you will need:
- .NET version 3.1 or later

## SDK Installation and Setup

**Note**: If you are using Contentstack .NET SDK, you don’t need to download the Contentstack.Utils package separately as it will already be available for use.

To download the Contentstack.Utils module, open the terminal and perform any of the following options:
- Via Package Manager:
```
PM> Install-Package contentstack.utils
```
- Via .NET CLI:
```
dotnet add package contentstack.utils
```

After successful installation, to use the module in your application, you need to add a namespace to your class:

```
using Contentstack.Utils
```

## Usage

Let’s learn how you can use .NET Utils SDK to render embedded items by performing the following steps:
- Create Render Option
- To render embedded items on the front-end, use the CustomRenderOption class, and define the UI elements you want to show in the front-end of your website, as shown in the example below. In this example, we have specified the cases for each method of adding embedded items: Block, Inline, Link, Display and Download (for asset).
- ```
using System.Collections.Generic;
using Contentstack.Utils.Interfaces;
using Contentstack.Utils.Models;
using Contentstack.Utils.Enums;

public class CustomRenderOption: Options
{
        public CustomRenderOption(IEntryEmbedable entry) : base(entry)
        {
        }
public override string RenderMark(MarkType markType, string text)
    {
        switch (markType)
        {
            case MarkType.Bold:
                return $"**{text}**";
            default:
                return base.RenderMark(markType: markType, text: text);
        }
    }

    public override string RenderNode(NodeType nodeType, Node node, NodeChildrenCallBack callBack)
    {
        switch (nodeType)
        {
            case NodeType.Paragraph:
                return $"{callBack(node.children)}

";
            case NodeType.Heading_1:
                return "
# {callBack(node.children)}
";
            default:
                return base.RenderNode(nodeType, node, callBack);
        }
    }

        public override string RenderOption(IEmbeddedObject embeddedObject, Metadata metadata)
        {
            switch (metadata.StyleType)
            {

         	//if you have added embedded object using the "Block" option
                case StyleType.Block:
                    string renderString = "";
                    if (embeddedObject is IEmbeddedEntry)
                    {
                        renderString += $" **{((IEmbeddedEntry)embeddedObject).Title}**";
                    }
                    else if (embeddedObject is IEmbeddedContentTypeUid)
                    {
                        renderString += $" **{embeddedObject.Uid}**";
                    }
                    return renderString;

         	//if you have added embedded object using the "Inline" option
                case StyleType.Inline:
                    if (embeddedObject is IEmbeddedEntry)
                    {
                        return $"**{((IEmbeddedEntry)embeddedObject).Title}**";
                    }
                    else if (embeddedObject is IEmbeddedContentTypeUid)
                    {
                        return $"**{embeddedObject.Uid}**";
                    }
                    return "" + embeddedObject.Uid + "";

     		//if you have added embedded object using the "Link" option
               	case StyleType.Link:
                    if (embeddedObject is IEmbeddedEntry)
                    {
                        return $" Please find link to: **{metadata.Text ?? ((IEmbeddedEntry)embeddedObject).Title}**";
                    }
                    else if (embeddedObject is IEmbeddedContentTypeUid)
                    {
                        return $" Please find link to: **{metadata.Text ?? embeddedObject.Uid}**";
                    }
                    return "" + (metadata.Text ?? embeddedObject.Uid) + "";

       		//if you have embedded an asset into the RTE field
              	case StyleType.Display:
                    if (embeddedObject is IEmbeddedAsset)
                    {
                        return $"**{((IEmbeddedAsset)embeddedObject).Title}**{((IEmbeddedAsset)embeddedObject).FileName} image:

";
                    }
                    return "";

		//if you have embedded an asset directly via a download link.
                case StyleType.Download:
                    if (embeddedObject is IEmbeddedAsset)
                    {
                        return " Please find link to: " + (metadata.Text ?? ((IEmbeddedAsset)embeddedObject).Title) + "";
                    }
                    return "" + (metadata.Text ?? embeddedObject.Uid) + "";
            }
            return base.RenderOption(embeddedObject, metadata);
        }
}

```
- Initialize the class
- Initialize either the Options or CustomRenderOption class to use them for rendering embedded items as shown below:
- ```
//To use the default render option:
Options defaultRender = new Options(entry);

//To use CustomRenderOptions:
CustomRenderOption defaultRender = new CustomRenderOption(entry);

```
- **Note**: Make sure the entry parameter has implemented the IEmbeddedObject property.

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry

#### Render HTML RTE Embedded Object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the Utils.RenderContent functions as shown below:

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType, ContentstackCollection
using Contentstack.Core.Configuration; // ContentstackOptions
using Contentstack.Utils; // Utils.RenderContent
using Contentstack.Utils.Models; // Options, Metadata

ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "enviroment_name");

client.ContentType("product").Entry("");
  .includeEmbeddedItems()
  .Fetch().ContinueWith((response) => {
    if (!response.IsFaulted) {

// To use the default render option:
          string result = Utils.RenderContent(response.Result.rte, new Options(response.result));

// To use the Custom render option:
          string result = Utils.RenderContent(response.Result.rte, new CustomRenderOption(response.result));
    }
});

```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the Utils.JsonToHtml function as shown below:

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType, ContentstackCollection
using Contentstack.Core.Configuration; // ContentstackOptions
using Contentstack.Utils; // Utils.RenderContent
using Contentstack.Utils.Models; // Options, Metadata

ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "environment_name");

client.ContentType("product").Entry("");
    .includeEmbeddedItems()
    .Fetch().ContinueWith((response) => {
        if (!response.IsFaulted) {
            // To use the default render option:
            string result = Utils.JsonToHtml(response.Result.rte, new Options(response.result));
            // To use the Custom render option:
            string result = Utils.JsonToHtml(response.Result.rte, new CustomRenderOption(response.result));
        }
});

```

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded object

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, content type UID. You can use the path variable in case the entries have multiple RTE fields.

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType, ContentstackCollection
using Contentstack.Core.Configuration; // ContentstackOptions
using Contentstack.Utils; // Utils.RenderContent
using Contentstack.Utils.Models; // Options, Metadata

ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "enviroment_name");

client.ContentType("product").Query()
  .includeEmbeddedItems();
  .Find().ContinueWith((t) => {
    if (!t.IsFaulted) {
         ContentstackCollection result = t.Result;
         foreach (var product in result.Items)
         {
              // To use the default render option
             string result = Utils.RenderContent(product.rte, new Options(product));
             // To use the Custom render option
             string result = Utils.RenderContent(product.rte, new CustomRenderOption(product));
         }
    }
});

```

#### Render JSON RTE Contents

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, content type UID. Then, use the Utils.jsonToHtml function as shown below:

```
using Contentstack.Core; // ContentstackClient
using Contentstack.Core.Models; // Stack, Query, Entry, Asset, ContentType, ContentstackCollection
using Contentstack.Core.Configuration; // ContentstackOptions
using Contentstack.Utils; // Utils.RenderContent
using Contentstack.Utils.Models; // Options, Metadata

ContentstackClient client = new ContentstackClient("api_key", "delivery_token", "environment_name");

client.ContentType("product").Query()
    .includeEmbeddedItems();
    .Find().ContinueWith((t) => {
        if (!t.IsFaulted) {
            ContentstackCollection result = t.Result;
            foreach (var product in result.Items)
            {
                // To use the default render option
                string result = Utils.JsonToHtml(product.rte, new Options(product));
                // To use the Custom render option
                string result = Utils.JsonToHtml(product.rte, new CustomRenderOption(product));
            }
        }
    });

```

## Common questions

### Do I need to install Contentstack.Utils if I am using Contentstack .NET SDK?
**Note**: If you are using Contentstack .NET SDK, you don’t need to download the Contentstack.Utils package separately as it will already be available for use.

### What .NET version is required to use the .NET Utils SDK?
To get started with .NET Utils SDK, you will need:
- .NET version 3.1 or later

### Which functions can I use to render RTE embedded items?
Then, use the Utils.RenderContent functions as shown below:

Then, use the Utils.JsonToHtml function as shown below: