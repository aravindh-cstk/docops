---
title: "Get Started with PHP SDK"
description: "steps for getting started with PHP SDK"
url: /developers/sdks/content-delivery-sdk/php/get-started-with-php-sdk
uid: blte7880717e67c574a
---

# Get Started with PHP SDK

## Get Started with PHP SDK

This guide will help you get started with Contentstack [PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/about-php-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with PHP, you will need the following:

-   PHP version 5.5.0 or later

## SDK Installation and Setup

To install the PHP SDK, choose either of the following methods:

#### **Method 1: Using Composer**

To install the PHP SDK in your project using [Composer](https://packagist.org/packages/contentstack/contentstack), fire up the terminal, point it to the project location, and run the following command:

```
composer require contentstack/contentstack
```

#### **Method 2: Downloading the zip file**

To download the PHP SDK, perform the following steps:

1.  [Download](/docs/developers/sdks/content-delivery-sdk/php/download-php-sdk/) the PHP SDK.
2.  Create the dependencies folder in your project directory and move the downloaded .zip file within the dependencies folder.
3.  Download the [MabeEnum](https://github.com/marc-mabe/php-enum) class.
4.  Create a folder named marc-mabe folder inside dependencies, and move the php-enum folder to marc-mabe.

Let's get started with the implementation.

## Initialize SDK

Initialize the SDK by following either of the methods depending on the type of installation.

#### **Method 1: If installed using Composer**

To initialize the SDK, specify the [API Key](/docs/headless-cms/view-stack-details), [delivery token](/docs/headless-cms/about-delivery-tokens), and [environment](/docs/headless-cms/about-environments) name of your stack.

```
use Contentstack\Contentstack;
$stack = Contentstack::Stack(API_KEY, DELIVERY_TOKEN, ENV_NAME);
```

#### **Method 2: If installed using the zip file**

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

To get a single [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) and the UID of the entry:

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

**Note:** Currently, the PHP SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](/docs/developers/apis/content-delivery-api/queries) section of our Content Delivery API documentation.

#### Paginating Responses

In a single instance, the [Get Multiple Entries](#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the [limit](/docs/developers/sdks/content-delivery-sdk/php/reference/#query-limit) parameters in subsequent requests.

```
$stack = Contentstack::Stack(API_KEY, DELIVERY_TOKEN, ENV_NAME);
$result = $stack->ContentType(CONTENT_TYPE_UID)->Query()->toJSON()->skip(20)->limit(20)->find()
```

## Limitations

-   We have a URL size limitation of 8KB on API Requests that hit our CDN services. Any Request URL that goes above this size limit will receive the 400 - Bad request error response. Please make sure you limit the size of your API Requests.
-   The PHP SDK does not support multiple content types referencing in a single query.
-   Currently, the PHP SDK does not yet support querying Global Field schemas ([All Global Fields](/docs/developers/apis/content-delivery-api/global-fields#all-global-fields) and [Single Global Field](/docs/developers/apis/content-delivery-api/global-fields#single-global-field)). You can include these details when querying content type details ([All Content Types](/docs/developers/apis/content-delivery-api/content-types#all-content-types) and [Single Content Type](/docs/developers/apis/content-delivery-api/content-types#single-content-type)) with the include\_global\_field\_schema query parameter.

## More Resources

-   [Download PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/download-php-sdk)
-   [PHP SDK API Reference](/docs/developers/sdks/content-delivery-sdk/php/reference/)
-   [PHP SDK Changelog](/docs/changelog?filter=sdks)
-   [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)
