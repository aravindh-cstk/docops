---
title: "Get Started with PHP SDK and Live Preview"
description: "Get Started with PHP SDK and Live Preview"
url: /developers/sdks/content-delivery-sdk/php/get-started-with-php-sdk-and-live-preview
---

# Get Started with PHP SDK and Live Preview

## Get Started with PHP SDK and Live Preview

This guide will help you get started with Contentstack [PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/about-php-sdk/) to build apps powered by Contentstack.

## Prerequisites

To get started with PHP, you will need the following:

-   PHP version 5.5.0 or later
-   [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)

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

## Initializing the Stack with Live Preview

Since the [Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk) is responsible for communication, you need to initialize it within your stack.

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

**Note:** By default, the host parameter points to the North America endpoint. If your website is hosted on the European data center, then pass the European endpoint against the host parameter.

## Create the Contentstack Service

You need to add a Stack.php service file within the src/Service file path. Within this service file, use the following code to create the Contentstack service:

```
<?php

declare(strict_types=1);

namespace App\Service;

use Contentstack\Contentstack;

class Stack {
   public $client;

   public function __construct() {
       $this->client = Contentstack::Stack('API_KEY', 'DELIVERY_TOKEN', 'ENVIRONMENT', array( 'live_preview' => array('enable' => true, 'management_token' => 'MANAGEMENT_TOKEN')));
   }
}
```

To add the Stack service, open config/services.yaml and add the following code:

```
. . .
   App\Service\Stack:
     Contentstack\Stack\Service:
         factory: ['@App\Service\Stack', 'client']
 . . .
```

## Add Custom Middleware

You need to add a custom middleware in the ContentstackEventListener.php file.

Use the following code to get the Live Preview hash key:

```
<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use App\Service\Stack;
use Contentstack\Contentstack;
use Contentstack\Stack\Service;
class ContentstackRequestListener implements EventSubscriberInterface
{

   protected $stack;

   public function __construct(
       Stack $stack
   ) {
       $this->stack = $stack->client;
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

Open the services.yaml file and add the following service:

```
service:
    ...
    App\EventListener\ContentstackRequestListener:
        tags:
            - { name: kernel.event_listener, event: kernel.request }
```

Run the following command to check whether ContentstackRequestListener has been added to the kernel request:

```
$ php bin/console debug:event-dispatcher kernel.request
```

## For Server-side Rendered Websites

To install and initialize the Live Preview Utils SDK, open base.html.twig and add the following code:

```
...       
   <script src="https://unpkg.com/@contentstack/live-preview-utils@1.0.0/dist/index.js"></script>
.... 

         {% block javascripts %}
            {{ encore_entry_script_tags('app') }}

            <script>
                ContentstackLivePreview.init({
                    enable: true,
                    ssr:true,
                    stackDetails: {
                        apiKey: "API_KEY",
                    },
                });
            </script>
        {% endblock %}
```

**Note:** To learn how to install Encore, you can refer to the [Installing Encore](https://symfony.com/doc/current/frontend/encore/installation.html#installing-encore-in-symfony-applications) documentation.

## Query Request

Contentstack SDKs let you interact with the [Content Delivery APIs](/docs/developers/apis/content-delivery-api) and retrieve content from Contentstack. They are read-only in nature. The SDKs fetch and deliver content from the nearest server via Fastly, our powerful and robust CDN.

To get an [entry](/docs/headless-cms/about-entries), you need to specify the [content type](/docs/headless-cms/about-content-types) UID and the UID of the entry.

```
$stack->ContentType('CONTENT_TYPE_UID')->Entry('ENTRY_UID')->toJSON()->fetch();
$stack->ContentType('CONTENT_TYPE_UID')->Query()->toJSON()->find();
```

## More Resources

-   [JavaScript Live Preview Utils SDK](/docs/developers/sdks/utils-sdk/javascript/about-javascript-live-preview-utils-sdk)
-   [Download PHP SDK](/docs/developers/sdks/content-delivery-sdk/php/download-php-sdk)
-   [PHP SDK API Reference](/docs/developers/sdks/content-delivery-sdk/php/reference/)
-   [PHP SDK Changelog](/docs/developers/sdks/content-delivery-sdk/php/php-sdk-changelog/)
-   [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)
