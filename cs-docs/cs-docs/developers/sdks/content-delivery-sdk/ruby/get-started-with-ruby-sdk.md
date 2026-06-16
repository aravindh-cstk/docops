---
title: "[Ruby] - Get Started with Ruby SDK"
description: Get Started with Ruby SDK
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ruby/get-started-with-ruby-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ruby-developers
version: unknown
last_updated: 2026-03-25
---

# [Ruby] - Get Started with Ruby SDK

This page explains how to install, initialize, and run basic queries using the Contentstack Ruby SDK. It is intended for developers building Ruby applications that fetch published content from Contentstack via the Content Delivery APIs, and should be used when setting up the SDK for the first time or configuring it for a specific region.

## Get Started with Ruby SDK

This guide will help you get started with Contentstack [Ruby SDK](/docs/developers/sdks/content-delivery-sdk/ruby/about-ruby-sdk/) to build apps powered by Contentstack.

## Prerequisites
- Ruby v2.0 or later

## SDK Installation and Setup
Contentstack offers six regions **AWS North America**,** AWS Europe**, **Azure North America**, **Azure Europe**, **GCP North America, **and **GCP Europe** as data centers to store customers' account details and data. These regions are independent of each other and therefore have a dedicated set of instructions to use SDKs offered by Contentstack.

To use SDKs for the Europe, Azure NA, or Azure EU region, you will have to make certain changes in the configuration of the SDK, as detailed below, and the rest of the instructions remain the same.

To use the Ruby SDK, download it using the `gem install` command:

```
$ gem install contentstack

```
Let's get started with the implementation.

## Initialize SDK
To initialize the SDK, You will need to specify the **stack’s API key**, [**delivery token**](/docs/developers/create-tokens/about-delivery-tokens), and name of the [**environment**](/docs/developers/set-up-environments/about-environments) where you will publish the content.

```
@stack = Contentstack::Client.new("site_api_key", "delivery_token", "enviroment_name")

```
**Note**: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

For Europe, Azure North America, or Azure Europe, check the code of your region and configure your SDK.

Once you have initialized the SDK, you can query entries to fetch the required content.

For setting the branch for Europe, Azure North America, or Azure Europe, check the code of your region and initialize SDK in a particular branch.

## Basic Queries
Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry
To get a single [entry](/docs/content-managers/author-content/about-entries), specify the [content type](/docs/developers/create-content-types/about-content-types) as well as the uid of the entry:

```
entry = @stack.content_type('content_type_uid').entry("entry_uid").fetch()
puts entry.get('title') # Use `get` method to retrieve field value by providing a field's unique ID

```

### Get Multiple Entries
To retrieve multiple entries of a content type, specify the content type UID. You can also specify search parameters to filter results:

```
@query = @stack.content_type('blog').query
@entries = @query.where('title', 'welcome')
                 .include_schema
                 .include_count
                 .fetch
puts "Total Entries -- #{@entries.count}"
@entries.each{|entry| puts "#{entry.get('title')}" }

```
To retrieve localized versions of entries, you can use the `query` attribute:

```
entry = @stack.content_type('content_type_uid').query.locale('locale_code').fetch()

```
**Note**: Currently, the above query works in case of retrieving localized versions of multiple entries only.

These were examples of some of the basic queries of the SDK. For advanced queries, refer to Contentstack Ruby [API reference](https://www.rubydoc.info/gems/contentstack/0.0.3).

**Note:** Currently, the Ruby SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api#queries) section of our Content Delivery API documentation.

#### Paginating Responses
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [skip](https://www.rubydoc.info/gems/contentstack/0.0.3/Contentstack%2FQuery:skip) and [limit](https://www.rubydoc.info/gems/contentstack/0.0.3/Contentstack%2FQuery:limit) parameters in subsequent requests.

```
@stack = Contentstack::Client.new("site_api_key", "delivery_token", "environment")
@entries = @stack.content_type('category').query
                   .limit(20)
                   .skip(50)
                   .fetch

```

## Limitations
- We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The Ruby SDK does not support multiple content types referencing in a single query.
- Currently, the Ruby SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources
- [Product Catalog using Ruby SDK and Contentstack](/docs/developers/sample-apps/build-a-product-catalog-using-ruby-on-rails-and-contentstack)
- [Ruby SDK API Reference](https://www.rubydoc.info/gems/contentstack/Contentstack)
- [Ruby SDK Changelog](/docs/developers/sdks/content-delivery-sdk/ruby/ruby-sdk-changelog/)
- [View and Download Ruby SDK repository on GitHub](https://github.com/contentstack/contentstack-ruby)

## Common questions

### Which Ruby versions are required to use this SDK?
Ruby v2.0 or later.

### What credentials are required to initialize the SDK?
You will need to specify the **stack’s API key**, [**delivery token**](/docs/developers/create-tokens/about-delivery-tokens), and name of the [**environment**](/docs/developers/set-up-environments/about-environments).

### How many entries does “Get Multiple Entries” return by default?
In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type.

### What are common limitations to be aware of?
We have a URL size limitation of 8KB on API Requests that hit our CDN services, and the Ruby SDK does not support multiple content types referencing in a single query.