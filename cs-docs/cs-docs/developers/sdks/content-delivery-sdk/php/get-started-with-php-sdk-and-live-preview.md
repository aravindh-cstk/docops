---
title: "[PHP] - Get Started with PHP SDK and Live Preview"
description: Get started with Contentstack PHP SDK to build apps powered by Contentstack, including Live Preview setup.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/php/get-started-with-php-sdk-and-live-preview
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
  - php-developers
version: unknown
last_updated: 2026-03-26
---

# [PHP] - Get Started with PHP SDK and Live Preview

This page explains how to install and set up the Contentstack PHP SDK and configure Live Preview for PHP applications. It is intended for developers integrating Contentstack content delivery and Live Preview into PHP projects, including server-side rendered websites.

## Get Started with PHP SDK and Live Preview

This guide will help you get started with Contentstack [PHP SDK](./about-php-sdk.md) to build apps powered by Contentstack.

## Prerequisites
To get started with PHP, you will need the following:
- PHP version 5.5.0 or later
- [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md)

## SDK Installation and Setup
To install the PHP SDK, choose either of the following methods:

### Method 1: Using Composer
To install the PHP SDK in your project using [Composer](https://packagist.org/packages/contentstack/contentstack), fire up the terminal, point it to the project location, and run the following command:

```
composer require contentstack/contentstack
```

### Method 2: Downloading the zip file
To download the PHP SDK, perform the following steps:
- [Download](./download-php-sdk.md) the PHP SDK.
- Create the `dependencies` folder in your project directory and move the downloaded .zip file within the `dependencies` folder.
- Download the [MabeEnum](https://github.com/marc-mabe/php-enum) class.
- Create a folder named `marc-mabe` folder inside `dependencies`, and move the `php-enum` folder to `marc-mabe`.

Let's get started with the implementation.

## Initializing the Stack with Live Preview
Since the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md) is responsible for communication, you need to initialize it within your stack.

Use the following command to initialize the stack:

```
$stack = Contentstack::Stack('API_KEY', 'DELIVERY_TOKEN', 'ENVIRONMENT',
    array(
          'live_preview'=> array(

'management_token' => 'MANAGEMENT_TOKEN',
'enable' => true,
'host' => 'api.contentstack.io',
   )
));
```
**Note**: By default, the `host` parameter points to the North America endpoint. If your website is hosted on the [European](../../../contentstack-regions/europe-region-what-it-is-and-what-it-isnt.md) data center, then pass the European endpoint against the `host` parameter.

## Create the Contentstack Service
You need to add a `Stack.php` service file within the `src/Service` file path. Within this service file, use the following code to create the Contentstack service:

```
client = Contentstack::Stack('API_KEY', 'DELIVERY_TOKEN', 'ENVIRONMENT', array( 'live_preview' => array('enable' => true, 'management_token' => 'MANAGEMENT_TOKEN')));
   }
}
```
To add the `Stack` service, open `config/services.yaml` and add the following code:

```
. . .
   App\Service\Stack:
     Contentstack\Stack\Service:
         factory: ['@App\Service\Stack', 'client']
 . . .

```

## Add Custom Middleware
You need to add a custom middleware in the `ContentstackEventListener.php` file.

Use the following code to get the Live Preview hash key:

```
stack = $stack->client;
   }

   public function onKernelRequest(RequestEvent $event)
   {
       if (!$event->isMainRequest()) {
           return;
       }
       $request = $event->getRequest();
       $this->stack->livePreviewQuery($request->query->all());

       if ($request::getTrustedProxies()) {
           $request->getClientIps();
       }

       $request->getHost();
   }

   public static function getSubscribedEvents(): array
   {
       return [
           KernelEvents::REQUEST => [
               ['onKernelRequest', 256],
           ],
       ];
   }
}
```
Open the `services.yaml` file and add the following service:

```
service:
    ...
    App\EventListener\ContentstackRequestListener:
        tags:
- { name: kernel.event_listener, event: kernel.request }
```
Run the following command to check whether `ContentstackRequestListener` has been added to the kernel request:

```
$ php bin/console debug:event-dispatcher kernel.request
```

## For Server-side Rendered Websites
To install and initialize the Live Preview Utils SDK, open `base.html.twig` and add the following code:

```
...

....

         {% block javascripts %}
            {{ encore_entry_script_tags('app') }}

                ContentstackLivePreview.init({
                    enable: true,
                    ssr:true,
                    stackDetails: {
                        apiKey: "API_KEY",
                    },
                });

        {% endblock %}
```
**Note**: To learn how to install Encore, you can refer to the [Installing Encore](https://symfony.com/doc/current/frontend/encore/installation.html#installing-encore-in-symfony-applications) documentation.

## Query Request
Contentstack SDKs let you interact with the [Content Delivery APIs](../../../../../api-docs/api-detail/content-delivery-api.md) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](../../../../content-managers/author-content/about-entries.md), you need to specify the [content type](../../../create-content-types/about-content-types.md) UID and the UID of the entry.

```
$stack->ContentType('CONTENT_TYPE_UID')->Entry('ENTRY_UID')->toJSON()->fetch();
$stack->ContentType('CONTENT_TYPE_UID')->Query()->toJSON()->find();
```

## More Resources
- [JavaScript Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md)
- [Download PHP SDK](./download-php-sdk.md)
- [Build a Blog using PHP SDK and Symfony Framework](/docs/developers/sample-apps/build-a-blog-demo-using-contentstacks-php-sdk-and-symfony-framework)
- [PHP SDK API Reference](../../../create-content-types/reference.md)
- [PHP SDK Changelog](./php-sdk-changelog.md)
- [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)

## Common questions

### Do I need the Live Preview Utils SDK to use Live Preview with the PHP SDK?
Yes. Since the [Live Preview Utils SDK](../../utils-sdk/javascript/about-javascript-live-preview-utils-sdk.md) is responsible for communication, you need to initialize it within your stack.

### What PHP version is required?
PHP version 5.5.0 or later.

### What should I set for the `host` parameter?
By default, the `host` parameter points to the North America endpoint. If your website is hosted on the [European](../../../contentstack-regions/europe-region-what-it-is-and-what-it-isnt.md) data center, then pass the European endpoint against the `host` parameter.

### How do I verify the kernel request listener is registered?
Run the following command to check whether `ContentstackRequestListener` has been added to the kernel request:
`$ php bin/console debug:event-dispatcher kernel.request`