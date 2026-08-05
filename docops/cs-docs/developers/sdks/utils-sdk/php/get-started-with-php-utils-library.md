---
title: "[PHP] - Get Started with PHP Utils Library"
description: Get Started with PHP Utils Library
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/php/get-started-with-php-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [PHP] - Get Started with PHP Utils Library

This page explains how to install and use the Contentstack PHP Utils SDK to render embedded items from Rich Text Editor (RTE) fields, including examples for single and multiple entry queries. It is intended for developers integrating Contentstack content into PHP applications and should be used when you need to retrieve and render embedded items in RTE content.

## Get Started with PHP Utils Library

This guide will help you get started with Contentstack [PHP Utils SDK](./about-php-utils-library.md) to build apps powered by Contentstack.

## Prerequisites
- PHP version 5.5.0 or later

## SDK Installation and Setup

To set up the Utils SDK in your PHP project, install it via gem:

```
composer require contentstack/utils
```

If you are using Contentstack PHP SDK, then “contentstack/utils”  is already imported into your project.

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option:

To render embedded items on the front-end, use the `renderOptions` function, and define the UI elements you want to show in the front-end of your website, as shown in the example code below:

```
getStyleType()) {
            case StyleType::get(StyleType::BLOCK):
                if ($metadata->contentTypeUID === 'product') {
                    return  "

## ".$embeddedObject["title"]."

                            ".$embeddedObject["price"]."

                            "
                }
            case StyleType::get(StyleType::INLINE):
                return  "**".$embeddedObject["title"]."** -".$embeddedObject["description"]."";
            case StyleType::get(StyleType::LINK):
                return  "[value
.">".$metadata->getText()."](.$metadata->getAttribute()"
            case StyleType::get(StyleType::DISPLAY):
                return  "getAttribute("src")->value." alt='".$metadata->getAttribute("alt")->value." />";
            case StyleType::get(StyleType::DOWNLOAD):
                return  "[value
.">".$metadata->getText()."](.$metadata->getAttribute()"
        }
        return parent::renderOptions($embeddedObject, $metadata);
    }
}
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry:

#### Render HTML RTE Embedded Object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type’s UID, and entry’s UID. Then, use the `Contentstack::jsonToHtml` function as shown below:

```
use Contentstack\Contentstack;
use Contentstack\Utils\Model\Option;

$stack = Contentstack::Stack('', '', '');
$entry = $stack->ContentType('')->Entry('')->includeEmbeddedItems()->toJSON()->fetch();
$render_rich_text = Contentstack::renderContent($entry['rich_text_content'], new Option($entry));
```

If you want to render embedded items using the `CustomOption` function, you can refer to the code below:

```
@rendered_rich_text = Contentstack.renderContent($entry['rich_text_content'], new CustomOption($entry));
```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the `Contentstack::jsonToHtml` function as shown below:

```
use Contentstack\Contentstack;
use Contentstack\Utils\Model\Option;

$stack = Contentstack::Stack('', '', '');
$entry = $stack->ContentType('')->Entry('')->includeEmbeddedItems()->toJSON()->fetch();
$json_rte = json_decode(json_encode($entry['rte_field_uid']));
$render_rich_text = Contentstack::jsonToHtml($json_rte, new Option($entry));
```

If you want to render embedded items using the CustomOption function, you can refer to the code below:

```
$rendered_rich_text = Contentstack.jsonToHtml($entry['rte_field_uid'], new CustomOption($entry));
```

### Fetch Embedded Item(s) from Multiple Entries

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type’s UID.

```
use Contentstack\Contentstack;
use Contentstack\Utils\Model\Option;

$stack = Contentstack::Stack('', '', '');
$result = $stack->ContentType('')->Query()->toJSON()->includeEmbeddedItems()->find()
for($i = 0; $i ', '', '');
$result = $stack->ContentType('')->Query()->toJSON()->includeEmbeddedItems()->find()
for($i = 0; $i < count($result[0]); $i++) {
    $entry = $result[0][$i];
    $json_rte = json_decode(json_encode($entry['rich_text_content']));
    $render_rich_text = Contentstack::jsonToHtml($json_rte, new Option($entry));
}
```

## Common questions

1. How do I install the Contentstack PHP Utils SDK?
   - Use `composer require contentstack/utils`.

2. What PHP version is required to use the PHP Utils SDK?
   - PHP version 5.5.0 or later.

3. How do I render embedded items from an RTE field for a single entry?
   - Fetch the entry with `includeEmbeddedItems()` and render using `Contentstack::renderContent` or `Contentstack::jsonToHtml` as shown in the examples.

4. How do I fetch and render embedded items from multiple entries?
   - Query entries with `includeEmbeddedItems()` and iterate through results, rendering each entry’s RTE content using `Contentstack::jsonToHtml` as shown.