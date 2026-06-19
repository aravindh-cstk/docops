---
title: "[PHP] - SDK Installation and Setup for Live Preview (Laravel v5.4 or later)"
description: SDK Installation and Setup for Live Preview (Laravel v5.4 or later)
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/php/sdk-installation-and-setup-for-live-preview-laravel-v5.4-or-later
product: Contentstack
doc_type: sdk-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [PHP] - SDK Installation and Setup for Live Preview (Laravel v5.4 or later)

This page explains how to install the Contentstack PHP SDK and configure Live Preview for Laravel v5.4 or later. It is intended for developers setting up Contentstack-powered applications that need Live Preview support during development and testing.

## SDK Installation and Setup for Live Preview (Laravel v5.4 or later)

This guide will help you get started with Contentstack [PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/about-php-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with PHP, you will need the following:
- PHP version 5.5.0 or later
- Laravel version 5.4 or later
- [Live Preview Utils SDK](/docs/developers/javascript-browser/about-javascript-live-preview-utils-sdk)

## SDK Installation and Setup

To install the PHP SDK, choose either of the following methods:

### Method 1: Using Composer

To install the PHP SDK in your project using [Composer](https://packagist.org/packages/contentstack/contentstack), fire up the terminal, point it to the project location, and run the following command:

```
composer require contentstack/contentstack
```

### Method 2: Downloading the zip file

To download the PHP SDK, perform the following steps:
- [Download](/docs/developers/sdks/content-delivery-sdk/php/get-started-with-php-sdk/) the PHP SDK.
- Create the `dependencies` folder in your project directory and move the downloaded .zip file within the `dependencies` folder.
- Download the [MabeEnum](https://github.com/marc-mabe/php-enum) class.
- Create a folder named `marc-mabe` folder inside `dependencies`, and move the `php-enum` folder to `marc-mabe`.

Let's get started with the implementation.

## Initializing the Stack with Live Preview

As the [Live Preview Utils SDK](/docs/developers/javascript-browser/about-javascript-live-preview-utils-sdk/) is responsible for communication, you first need to initialize it within your stack.

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

## Create the Contentstack Service

You need to add a `stack connection` within the `App\Http\Controllers\controller.php` file path. Use the following code to create the Contentstack service:

```
client = Contentstack::Stack('API_KEY', 'DELIVERY_TOKEN', 'ENVIRONMENT', array( 'live_preview' => array('enable' => true, 'management_token' => 'MANAGEMENT_TOKEN')));

return $this;
   }
}

```

## Add Custom Middleware

A middleware means that any HTTP request for that route must pass through it, making it useful for determining whether a user has the required permissions or meets a set of criteria, etc. ”A middleware means that any HTTP request for that route must pass through it, making it useful for checking if a user has permissions or meets a criteria etc”.

With artisan create the middleware with a name:

```
php artisan make:middleware ContentstackEventListener
```

This will generate:

```
app/Http/Middleware/ContentstackEventListener.php
```

You need to add a custom middleware in the `ContentstackEventListener.php` file.
“Open this file and enter your logic for the middleware into the handle() function”.
Use the following code to get the Live Preview hash key:

```
stack = $stack->client;
   }

   public function handle(RequestEvent $event)
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
    return $next($event);
   }

   public static function getSubscribedEvents(): array
   {
       return [
           KernelEvents::REQUEST => [
               ['handle', 256],
           ],
       ];
   }
}

```

“Open `app/Http/Kernel.php` and find the `$routeMiddleware array`, this is where you register your middleware with the name and the class”.

```
'instance' => \App\Http\Middleware\ContentstackEventListener :: class,
```

Finally, in your routes file assign this middleware by using the name that was used above (instance):

```
//Needs an instance set to view

Route::get('files', [App\Http\Controllers\FileController::class,'index'])->
middleware(['auth','instance']);
Route::get('actions',[App\Http\Controllers\ActionController::class,'index'])->
middleware(['auth', 'instance']);

//Does not need an instance set to view

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->middleware();
Route::get('instances', [App\Http\Controllers\InstanceController::class, 'index'])->middleware(['auth']);
```

Since you modified your routes make sure to refresh the routes with:

```
$ php artisan route:cache
```

Run the following command to check whether ContentstackRequestListener has been added to the kernel request:

```
$ php artisan serve
```

## For Server-Side Rendered Websites

To install and initialize the Live Preview Utils SDK, open `base.blade.html` and add the following code:

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

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api/) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/content-managers/working-with-entries/about-entries/), you need to specify the [content type](/docs/developers/create-content-types/about-content-types/) UID and the UID of the entry.

```
$stack->ContentType('CONTENT_TYPE_UID')->Entry('ENTRY_UID')->toJSON()->fetch();
$stack->ContentType('CONTENT_TYPE_UID')->Query()->toJSON()->find();
```

**Additional Resources:**
- [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk/)
- [Download PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/download-php-sdk/)
- [Build a Blog using PHP SDK and Symfony Framework](/docs/developers/sample-apps/build-a-blog-demo-using-contentstacks-php-sdk-and-symfony-framework/)
- [PHP SDK API Reference](/docs/developers/sdks/content-delivery-sdk/php/reference/)
- [PHP SDK Changelog](/docs/developers/sdks/content-delivery-sdk/php/php-sdk-changelog/)
- [Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)

## Common questions

### Do I need both the PHP SDK and the Live Preview Utils SDK?
Yes—this page includes steps for installing the PHP SDK and also references the Live Preview Utils SDK, which is responsible for communication and must be initialized within your stack.

### What are the minimum supported versions for PHP and Laravel?
PHP version 5.5.0 or later and Laravel version 5.4 or later.

### How do I install the PHP SDK?
You can install it using Composer (`composer require contentstack/contentstack`) or by downloading the zip file and placing it into a `dependencies` folder along with the `php-enum` dependency.

### How do I fetch entries after setup?
Use the SDK query examples under “Query Request”, such as:
`$stack->ContentType('CONTENT_TYPE_UID')->Entry('ENTRY_UID')->toJSON()->fetch();`