---
title: "[Ruby] - Get Started with Ruby SDK and Live Preview"
description: Get started with Contentstack Ruby SDK and set up Live Preview.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ruby/get-started-with-ruby-sdk-and-live-preview
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Ruby] - Get Started with Ruby SDK and Live Preview

This page explains how to install and start using the Contentstack Ruby SDK and how to initialize Live Preview for your stack. It is intended for developers building Ruby/Rails applications that fetch content via Content Delivery APIs and need Live Preview support during development.

## Get Started with Ruby SDK and Live Preview

This guide will help you get started with Contentstack [Ruby SDK](./about-ruby-sdk.md) to build apps powered by Contentstack.

## Prerequisites

To get started with the Ruby SDK, you will need the following:
- Ruby version 2.0 or later

## SDK Installation and Setup

To use the Ruby SDK, download it using the `gem install` command:

```
$ gem install contentstack
```

Let's get started with the implementation.

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md) is responsible for communication, you need to initialize it within your stack.

Use the following command to initialize the stack:

```
$client = Contentstack::Client.new("api_key", "delivery_token", "enviroment_name", {
   live_preview: {
     management_token: 'management_token',
     enable: true,
     host: 'api.contentstack.io',
 }
})
```

**Note**: By default, the `host` parameter points to the North America endpoint. If your website is hosted on the [European](../../../contentstack-regions/europe-region-what-it-is-and-what-it-isnt.md) data center, then pass the European endpoint against the `host` parameter.

## Add Custom Middleware

You need to add a custom middleware in the `lib/middleware/contentstack_middelware.rb` file.

Use the following code to get the Live Preview hash key:

```
class ContentstackMiddleware
  def initialize(app)
   @app = app
 end

 def call(env)
   @req = Rack::Request.new(env)
   // this will get live_preview hash and ContentType to request
   $client.live_preview_query(@req.params)
   @app.call(env)
 end
end
```

## Add Middleware in the Config File

To add a middleware in the config file, use the following code:

```
module AppName
 class Application < Rails::Application
   ...

   config.middleware.use CustomMiddleware
 end
end
```

## For Server-side Rendered Websites

To install and initialize the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md), you can refer to our [SSR Live Preview Setup](../../../set-up-live-preview/set-up-live-preview-for-your-website.md#server-side-rendering-ssr-) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](../../../../content-managers/author-content/about-entries.md), you need to specify the [content type](../../../create-content-types/about-content-types.md) UID, locale code, and the UID of the entry.

```
entry = $client.content_type('content_type_uid')
       .entry('entry_uid')
       .locale('locale_code')
       .fetch

entry = $client.content_type('content_type_uid')
       .query
       .find
```

## More Resources

- [JavaScript Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md)
- [Product Catalog using Ruby SDK and Contentstack](/docs/developers/sample-apps/build-a-product-catalog-using-ruby-on-rails-and-contentstack)
- [Ruby SDK API Reference](https://www.rubydoc.info/gems/contentstack/Contentstack)
- [Ruby SDK Changelog](./ruby-sdk-changelog.md)
- [View and Download Ruby SDK repository on GitHub](https://github.com/contentstack/contentstack-ruby)

## Common questions

**How do I install the Contentstack Ruby SDK?**  
Use the `gem install contentstack` command.

**What do I need to enable Live Preview in the Ruby SDK client?**  
Initialize the stack with `live_preview` options including `management_token`, `enable: true`, and `host`.

**When should I change the `host` parameter?**  
Change it if your website is hosted on the European data center, and pass the European endpoint against the `host` parameter.

**Where can I find the Ruby SDK API reference?**  
See [Ruby SDK API Reference](https://www.rubydoc.info/gems/contentstack/Contentstack).