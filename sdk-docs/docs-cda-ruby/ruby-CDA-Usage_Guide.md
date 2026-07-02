---
title: "Contentstack - Ruby Delivery SDK"
description: "Contentstack - Ruby Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
cms_uid: "blt9908a618cb038778"
---

# Contentstack - Ruby Delivery SDK

## Ruby SDK for Contentstack's Content Delivery API

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

## Prerequisites

You need ruby v2.0 or later installed to use the Contentstack Ruby SDK.

## SDK installation and setup

Add the following code to your application's Gemfile and bundle:

```
gem 'contentstack'
```

Or you can run this command in your terminal (you might need administrator privileges to perform this installation):

```
gem install contentstack
```

## Quickstart in 5 mins

### Initialize SDK

You will need to specify the API key, Access token, and Environment Name of your stack to initialize the SDK:

```
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment")
```

Once you have initialized the SDK, you can start getting content in your app
**For Setting other regions**:

Refer the below code if you want to use the Europe, Azure North America, Azure Europe, GCP North America, or GCP Europe region.

```
JavaScriptAndroidObjective-C.NetJavaPHPRubyPythonDartSwift
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment",{"region": Contentstack::Region::<<add_your_region>>})
```

**For Setting the Branch:**

If you want to initialize SDK in a particular branch use the code given below:

```
@stack = Contentstack::Client.<span>new</span>("api_key", "delivery_token", "environment",{"branch": "branch"})
```

**Note:** For Europe, set the region as EU, for Azure North America and Azure Europe, set the region as AZURE_NA and AZURE_EU respectively, for GCP North America set the region as GCP_NA, and for GCP Europe set the region as GCP_EU.

### Basic Queries

**Get a Single Entry**

To retrieve a single entry from a content type, use the code snippet given below:

```
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment")
@entries = @stack.content_type("content_type_uid").entry("entry_uid").fetch
```

### Get Multiple Entries

To retrieve multiple entries of a particular content type, use the code snippet given below:

```
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment")
@entries = @stack.content_type("content_type_uid").query.fetch
```

**Note:** By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Paginating Responses

In a single instance, the [Get Multiple Entries](https://www.contentstack.com/docs/developers/dot-net/get-started-with-dot-net-delivery-sdk/#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the **skip** and **limit** parameters in subsequent requests.

```
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment")
@entries = @stack.content_type('category').query
           .limit(20)
           .skip(50)
           .fetch
```
