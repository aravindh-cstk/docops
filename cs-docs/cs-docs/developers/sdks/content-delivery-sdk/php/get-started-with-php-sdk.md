---
title: "[PHP] - Get Started with PHP SDK"
description: Get started guide for the Contentstack PHP SDK (Content Delivery SDK), including installation, initialization, and basic queries.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/php/get-started-with-php-sdk
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [PHP] - Get Started with PHP SDK

This page explains how to install and initialize the Contentstack PHP SDK and run basic content queries. It is intended for developers integrating Contentstack content delivery into PHP applications and should be used when setting up the SDK for the first time or validating basic query patterns.

## Get Started with PHP SDK

This guide will help you get started with Contentstack [PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/about-php-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with PHP, you will need the following:
- PHP version 5.5.0 or later

## SDK Installation and Setup

To install the PHP SDK, choose either of the following methods:

### Method 1: Using Composer

To install the PHP SDK in your project using [Composer](https://packagist.org/packages/contentstack/contentstack), fire up the terminal, point it to the project location, and run the following command:

```
composer require contentstack/contentstack
```

### Method 2: Downloading the zip file

To download the PHP SDK, perform the following steps:
- [Download](/docs/developers/sdks/content-delivery-sdk/php/download-php-sdk/) the PHP SDK.
- Create the `dependencies` folder in your project directory and move the downloaded .zip file within the `dependencies` folder.
- Download the [MabeEnum](https://github.com/marc-mabe/php-enum) class.
- Create a folder named `marc-mabe` folder inside `dependencies`, and move the `php-enum` folder to `marc-mabe`.

Let's get started with the implementation.

## Initialize SDK

Initialize the SDK by following either of the methods depending on the type of installation.

### Method 1: If installed using Composer

To initialize the SDK, specify the [API Key](/docs/developers/set-up-stack/view-stack-details), [delivery token](/docs/developers/create-tokens/about-delivery-tokens), and [environment](/docs/developers/set-up-environments/about-environments) name of your stack.

```
use Contentstack\Contentstack;
$stack = Contentstack::Stack(API_KEY, DELIVERY_TOKEN, ENV_NAME);
```

### Method 2: If installed using the zip file

To initialize the SDK, specify the API key, delivery token, and environment name of your stack.

```
include_once __DIR__ . '/dependencies/contentstack/index.php';
use Contentstack\Contentstack;
$stack = Contentstack::Stack(API_KEY, DELIVERY_TOKEN, ENV_NAME);
```

Once you have initialized the SDK, you can start getting content in your app.

**For Setting the branch:**

If you want to initialize SDK in a particular branch use the code given below:

```
static Stack = Contentstack::Stack('api_key', 'delivery_token', 'environment_name', array("region"=> Contentstack::Region::US, "branch"=> "branch"))
```

## Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To get a single [entry](/docs/content-managers/working-with-entries/about-entries), you need to specify the [content type](/docs/developers/create-content-types/about-content-types) and the UID of the entry:

```
$result = $stack->ContentType(CONTENT_TYPE_UID)->Entry(ENTRY_UID)->toJSON()->fetch()
$result - entry object
```

### Get Multiple Entries

To retrieve multiple entries of a content type, specify the content type uid. You can also specify search parameters to filter results:

```
$result = $stack->ContentType(CONTENT_TYPE_UID)->Query()->toJSON()->includeCount()->includeContentType()->find()
$result[0] - array of entries
$result[1] - content type
$result[2] - count of the entries
```

These were examples of some of the basic queries of the SDK. For advanced queries, refer to the Contentstack PHP SDK [API reference](/docs/developers/sdks/content-delivery-sdk/php/reference/).

**Note:** Currently, the PHP SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api#queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type. You can paginate and retrieve the rest of the items in batches using the [limit](/docs/developers/sdks/content-delivery-sdk/php/reference/#query-limit) parameters in subsequent requests.

```
$stack = Contentstack::Stack(API_KEY, DELIVERY_TOKEN, ENV_NAME);
$result = $stack->ContentType(CONTENT_TYPE_UID)->Query()->toJSON()->skip(20)->limit(20)->find()
```

## Limitations

- We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the `400 - Bad request` error response. Please make sure you limit the size of your API Requests.
- The PHP SDK does not support multiple content types referencing in a single query.
- Currently, the PHP SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api#single-content-type)) with the `include_global_field_schema query parameter`.

## More Resources

- [Download PHP SDK](/docs/developers/php/download-php-sdk)
- [Build a Blog using PHP SDK and Symfony Framework](/docs/developers/sample-apps/build-a-blog-demo-using-contentstacks-php-sdk-and-symfony-framework)
- [PHP SDK API Reference](/docs/developers/sdks/content-delivery-sdk/php/reference/)
- [PHP SDK Changelog](/docs/developers/sdks/content-delivery-sdk/php/php-sdk-changelog/)
- [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)

## Common questions

### Which PHP versions are required to use the PHP SDK?
PHP version 5.5.0 or later.

### How do I install the PHP SDK?
You can install it using Composer (`composer require contentstack/contentstack`) or by downloading the zip file and placing it in a `dependencies` folder.

### What do I need to initialize the SDK?
You need the API key, delivery token, and environment name of your stack.

### How many items does “Get Multiple Entries” return by default?
The [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items **of the specified content type.

Filename: php-get-started-with-php-sdk.md