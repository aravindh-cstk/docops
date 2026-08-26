---
title: "Get Started with Ruby Utils Library"
description: "steps to use the Ruby Utils Library"
url: /developers/sdks/utils-sdk/ruby/get-started-with-ruby-utils-library
uid: bltfc5cb6c03cf3c7e7
---

# Get Started with Ruby Utils Library

## Get Started with Ruby Utils Library

This guide will help you get started with Contentstack [Ruby Utils SDK](/docs/developers/sdks/utils-sdk/ruby/about-ruby-utils-library) to build apps powered by Contentstack.

## Prerequisites

-   Ruby version 2.0 or later

## SDK Installation and Setup

To set up Ruby Utils SDK, install it via gem:

```
gem install contentstack_utils
```

If you are using Contentstack Ruby SDK, then “contentstack/utils” is already imported into your project.

## Usage

Let’s learn how you can use Utils SDK to render embedded items.

### Create Render Option:

To render embedded items on the front-end, use the render\_option function, and define the UI elements you want to show in the front-end of your website, as shown in the example code below:

```
class CustomLOption < ContentstackUtils::Model::Option
    def render_mark(mark_type, text)
        renderString = super(mark_type, text)
        case mark_type
        when 'bold'
             renderString = "<b>#{text}</b>"
        end
        renderString
    end

    def render_node(node_type, node, inner_html)
        renderString = super(node_type, node, inner_html)
        case node_type
        when 'p'
              renderString = "<p class='class-id'>#{inner_html}</p>"
        when 'h1'
               renderString = "<h1 class='class-id'>#{inner_html}</h1>"
         end
        renderString
    end

    def render_option(embeddedObject, metadata)
        case metadata.style_type
        when 'block'
            if metadataArray.content_type_uid === 'product' 
                return "<div>
              <h2 >#{embeddedObject["title"]}</h2>
               <img src=#{embeddedObject["product_image"]["url"]} alt=#{embeddedObject["product_image"]["title"]}/>
              <p>#{embeddedObject["price"]}</p>
                </div>"
           end
        when 'inline'
           return "<span><b>#{embeddedObject["title"]}</b> - #{embeddedObject["description"]}</span>"
        when link
           return "<a href='#{metadata.get_attribute_value("href")}'>#{metadata.text}</a>"
        when 'display'
            return "<img src='#{metadata.get_attribute_value("src")}' alt='#{metadata.alt}' />"
        when download
            return "<a href='#{metadata.get_attribute_value("href")}'>#{metadata.text}</a>"
        end
        super(embeddedObject, metadata)
     end
end
```

## Basic Queries

Contentstack Utils SDK lets you interact with the Content Delivery APIs and retrieve embedded items from the RTE field of an entry.

### Fetch Embedded Item(s) from a Single Entry:

#### Render HTML RTE Embedded Object

To get an embedded item of a single entry, you need to provide the stack API key, environment name, delivery token, content type’s UID, and entry’s UID. Then, use the include\_embedded\_items function as shown below:

```
require 'contentstack'
@stack = Contentstack::Client.new('<API_KEY>', '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>', '<ENVIRONMENT>')
@entry = @stack.content_type('<CONTENT_TYPE>').entry('<ENTRY_UID>')
                .include_embedded_items
                .fetch
@rendered_rich_text = Contentstack.render_content(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
```

If you want to render embedded items using the **CustomOption** function, you can refer to the code below:

```
@rendered_rich_text = Contentstack.render_content(@entry.rich_text_content, CustomLOption.new(@entry))
```

#### Render JSON RTE Contents

To get a single entry, you need to provide the stack API key, environment name, delivery token, content type and entry UID. Then, use the Contentstack.json\_to\_html function as shown below:

```
require 'contentstack'
@stack = Contentstack::Client.new('<API_KEY>', '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>', '<ENVIRONMENT>')
@entry = @stack.content_type('<CONTENT_TYPE>').entry('<ENTRY_UID>')
                .include_embedded_items
                .fetch
@rendered_rich_text = Contentstack.json_to_html(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
```

### Fetch Embedded Item(s) from Multiple Entries

#### Render HTML RTE Embedded Object

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, and content type’s UID.

```
require 'contentstack'
@stack = Contentstack::Client.new('<API_KEY>', '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>', '<ENVIRONMENT>')
@query = @stack.content_type('<CONTENT_TYPE>').query
@entries = @query.where('title', 'welcome')
                .include_embedded_items
                .fetch
@entries.each do |entry|
    Contentstack.render_content(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
end
```

#### Render JSON RTE Contents

To get embedded items from multiple entries, you need to provide the stack API key, environment name, delivery token, content type UID. Then, use the Contentstack.json\_to\_html function as shown below:

```
require 'contentstack'
@stack = Contentstack::Client.new('<API_KEY>', '<ENVIRONMENT_SPECIFIC_DELIVERY_TOKEN>', '<ENVIRONMENT>')
@query = @stack.content_type('<CONTENT_TYPE>').query
@entries = @query.where('title', 'welcome')
                .include_embedded_items
                .fetch
@entries.each do |entry|
    Contentstack.json_to_html(@entry.rich_text_content, ContentstackUtils::Model::Option.new(@entry))
```
