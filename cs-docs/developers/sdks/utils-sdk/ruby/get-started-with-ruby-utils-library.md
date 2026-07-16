---
title: "[Ruby] - Get Started with Ruby Utils Library"
description: Get started guide for Contentstack Ruby Utils SDK to render embedded items and retrieve embedded items from RTE fields.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/ruby/get-started-with-ruby-utils-library
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - ruby-developers
version: unknown
last_updated: 2026-03-26
---

# [Ruby] - Get Started with Ruby Utils Library

This page explains how to set up and use the Contentstack Ruby Utils SDK to render embedded items and work with embedded content in Rich Text Editor (RTE) fields. It is intended for developers integrating Contentstack content into Ruby applications and should be used when you need to fetch entries and render embedded items as HTML or JSON.

## Get Started with Ruby Utils Library

This guide will help you get started with Contentstack [Ruby Utils SDK](./about-ruby-utils-library.md) to build apps powered by Contentstack.

## Prerequisites
- Ruby version 2.0 or later

## SDK Installation and Setup

To set up Ruby Utils SDK, install it via gem:

```
gem install contentstack_utils
```

If you are using Contentstack Ruby SDK, then “contentstack/utils”  is already imported into your project.

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option:

To render embedded items on the front-end, use the `render_option` function, and define the UI elements you want to show in the front-end of your website, as shown in the example code below:

```
class CustomLOption

## #{embeddedObject["title"]}

              #{embeddedObject["price"]}

                "
           end
        when 'inline'
           return "**#{embeddedObject["title"]}** - #{embeddedObject["description"]}"
        when link
           return "[#{metadata.text}](#{metadata.get_attribute_value()"
        when 'display'
            return ""
        when download
            return "[#{metadata.text}](#{metadata.get_attribute_value()"
        end
        super(embeddedObject, metadata)
     end
end
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry:

#### Render HTML RTE Embedded Object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type’s UID, and entry’s UID. Then, use the `include_embedded_items` function as shown below:

```
require 'contentstack'
@stack = Contentstack::Client.new('', '', '')
@entry = @stack.content_type('').entry('')
                .include_embedded_items
                .fetch
@rendered_rich_text = Contentstack.render_content(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
```

If you want to render embedded items using the **CustomOption** function, you can refer to the code below:

```
@rendered_rich_text = Contentstack.render_content(@entry.rich_text_content, CustomLOption.new(@entry))
```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the `Contentstack.json_to_html` function as shown below:

```
require 'contentstack'
@stack = Contentstack::Client.new('', '', '')
@entry = @stack.content_type('').entry('')
                .include_embedded_items
                .fetch
@rendered_rich_text = Contentstack.json_to_html(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
```

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded Object

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type’s UID.

```
require 'contentstack'
@stack = Contentstack::Client.new('', '', '')
@query = @stack.content_type('').query
@entries = @query.where('title', 'welcome')
                .include_embedded_items
                .fetch
@entries.each do |entry|
    Contentstack.render_content(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
end
```

#### Render JSON RTE Contents

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, content type UID. Then, use the `Contentstack.json_to_html` function as shown below:

```
require 'contentstack'
@stack = Contentstack::Client.new('', '', '')
@query = @stack.content_type('').query
@entries = @query.where('title', 'welcome')
                .include_embedded_items
                .fetch
@entries.each do |entry|
    Contentstack.json_to_html(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
```

## Common questions

### Do I need to install `contentstack_utils` if I already use the Contentstack Ruby SDK?
If you are using Contentstack Ruby SDK, then “contentstack/utils”  is already imported into your project.

### What Ruby version is required?
- Ruby version 2.0 or later

### How do I fetch embedded items from an entry?
Use the `include_embedded_items` function when fetching an entry, as shown in the examples under “Fetch Embedded Item(s) from a Single Entry:”.

### How do I render RTE embedded items as HTML or JSON?
Use `Contentstack.render_content` to render HTML and `Contentstack.json_to_html` to render JSON RTE contents, as shown in the examples.