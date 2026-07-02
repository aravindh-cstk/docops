---
title: "Contentstack - PHP Delivery SDK"
description: "Contentstack - PHP Delivery SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
cms_uid: "blt252228d371575e71"
---

# Contentstack - PHP Delivery SDK

## PHP SDK for Contentstack's Content Delivery API

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

## Prerequisites

To get started with PHP, you will need the following:

- PHP version 5.5.0 or later

## SDK installation and setup

To install the PHP SDK, choose either of the following methods:

#### Method 1: Using Composer

To install the PHP SDK in your project using [Composer](https://packagist.org/packages/contentstack/contentstack), fire up the terminal, point it to the project location, and run the following command:

```
composer require contentstack/contentstack
```

#### Method 2: Downloading the zip file

To download the PHP SDK, perform the following steps:

1. [Download](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/php/download) the PHP SDK.
2. Create the dependencies folder in your project directory and move the downloaded .zip file within the dependencies folder.
3. Download the [MabeEnum](https://github.com/marc-mabe/php-enum) class.
4. Create a folder named marc-mabe folder inside dependencies, and move the php-enum folder to marc-mabe.

Let's get started with the implementation.

## Quickstart in 5 mins

### Initialize SDK

Initialize the SDK by following either of the methods depending on the type of installation.

**Method 1: If installed using Composer**

To initialize the SDK, specify the [API Key](https://www.contentstack.com/docs/developers/set-up-stack/view-stack-details/), [delivery token](https://www.contentstack.com/docs/developers/create-tokens/about-delivery-tokens/), and [environment](https://www.contentstack.com/docs/developers/set-up-environments/about-environments/) name of your stack.

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
```

**Method 2: If installed using the zip file**

To initialize the SDK, specify the API key, delivery token, and environment name of your stack.

```
include_once DIR . '/dependencies/contentstack/index.php';
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
```

Once you have initialized the SDK, you can start getting content in your app.

Note: By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

**To set the Europe (EU), Azure North America(Azure_NA), Azure Europe (Azure_EU), GCP North America (GCP_NA), or GCP Europe (GCP_EU) region, refer to the code below:**

```
use Contentstack\Contentstack;
$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment', array('region' => ContentstackRegion.<<add_your_region>>));
```

**For Setting the Branch.**

If you want to initialize SDK in a particular branch use the code given below:

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment', array('region' => Contentstack::Region::<<add_your_region>>, "branch"=>"branch"));
```

### Basic Queries

Contentstack SDKs let you interact with the [Content Delivery APIs](https://www.contentstack.com/docs/developers/apis/content-delivery-api/) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

### Get a Single Entry

To get a single [entry](https://www.contentstack.com/docs/content-managers/working-with-entries/about-entries/), you need to specify the [content type](https://www.contentstack.com/docs/developers/create-content-types/about-content-types/) and the UID of the entry:

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->toJSON()->fetch();
$result - entry object
```

### Get Multiple Entries

To retrieve multiple entries of a content type, specify the content type uid. You can also specify search parameters to filter results:

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->toJSON()->includeCount()->includeContentType()->find();
$result[0] - array of entries
$result[1] - content type
$result[2] - count of the entries
```

These were examples of some of the basic queries of the SDK.

Note:

- Currently, the PHP SDK does not support multiple content types referencing in a single query. For more information on how to query entries and assets, refer the [Queries](https://www.contentstack.com/docs/developers/apis/content-delivery-api/#queries) section of our Content Delivery API documentation.
- By default, the limit for response details per request is 100, with the maximum limit set at 250.

### Paginating Responses

In a single instance, the [Get Multiple Entries](https://www.contentstack.com/docs/developers/php/get-started-with-php-sdk/#get-multiple-entries) query will **retrieve only the first 100 items** of the specified content type. You can paginate and retrieve the rest of the items in batches using the **limit** parameters in subsequent requests.

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->toJSON()->skip(20)->limit(20)->find();
```
