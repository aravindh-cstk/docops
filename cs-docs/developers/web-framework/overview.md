---
title: "[Web Framework] - Overview"
description: Overview of the contentstack-express web framework, including push publishing, features, and benefits.
url: https://www.contentstack.com/docs/developers/web-framework/overview
product: Contentstack
doc_type: overview
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Overview

This page provides an overview of Contentstack’s “contentstack-express” web framework, including how push publishing works, key features, and benefits. It is intended for developers evaluating or maintaining websites built with the framework and for those considering alternatives such as DataSync.

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

Contentstack is a SaaS-based, headless content management platform. The content — stored and managed in the cloud — can be retrieved and delivered to any channel (web, mobile, devices, etc.) via its [Content Delivery APIs](../../../api-docs/api-detail/content-delivery-api.md).

For websites, however, we also provide push publishing, which improves the overall performance and content delivery speed of your website. In push publishing, the content that you publish via Contentstack is saved in the local file system of the web server. Subsequently, whenever there is an incoming page request on the website, the content is retrieved and rendered directly from the local storage, instead of fetching it from Contentstack database via APIs.

## “contentstack-express” web framework

Contentstack provides a [Node.js](../sdks/content-delivery-sdk/nodejs.md) web application framework “contentstack-express” for building websites with push-publishing. The framework is designed for developing complex and customized websites quickly. It provides tools and options to readily incorporate common/familiar features, rather than re-inventing the wheel by coding from scratch.

Since the framework is based on Node.js Express, it supports all the features that are offered by Node.js Express. Let’s look at some of the other benefits it provides.

## Features

### Auto-sync content

Once you install the framework, it syncs
all the [content](../../content-managers/author-content/about-entries.md) on your web server. Subsequently, whenever you [publish](../../content-managers/author-content/publish-an-entry.md) or [unpublish](../../content-managers/author-content/unpublish-an-entry.md) content from Contentstack, it automatically saves
or removes content, respectively, from the local storage of your web
server.

### In-built page routing

The framework’s theming and
templating options make it easy to manage the views and routes of your
website. Its in-built routing handles all the hard work needed to set-up
 your site’s routing.

### Theming

You can customize the look and feel of your
website or web application with the various [theming](./theming-and-templating.md) options offered by
contentstack-express.

### Mini apps/extensions

You can add custom logic (redirect
rule, static site generator) to your site via plugins. The framework
provides a number of hooks—using which you can create extensions—that
help you extend the functionality of Contentstack.

### Caching

contentstack-express enables the web server to
cache published data in memory. This cached data is then rendered
whenever there is a subsequent request for a published web page. This
further improves the site’s performance and content delivery speed.

### Configuration management

contentstack-express provides
several configuration settings that help you define a range of
behaviours of your site. You can enable various features and
functionalities by simply customizing the default configuration
settings.

## Benefits

Using the “contentstack-express” web framework provides several benefits for website owners. Let’s look at some of them.

### Decoupled architecture

The content is created using Contentstack’s user-friendly CMS platform. However, post publishing, it is stored and delivered from the local storage of your web server. This separates the authoring/content management environment from the content delivery environment.

### Independent of CMS

The content is fetched from the lightweight local store and served to users without connecting to Contentstack. This ensures uninterrupted service even when the CMS platform is temporarily down or slow. You have full control over your website’s availability.

### Improved performance

Push publishing reduces the load on the server by storing content locally. Whenever there is an incoming request for content, it fetches the relevant content from local storage and delivers it to the web page for presentation. This delivery from local storage is much quicker than fetching content from any CMS database via APIs.

### Security

The decoupled architecture ensures that even if the data of your content delivery environment is exposed to security threats, the data in the content management environment is secure. You can then use this data to create another secure content delivery environment.

### Scalability

Push publishing is designed to scale as it allows syncing content with multiple web servers at once.

## Common questions

### Is contentstack-express still supported?
No. **Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework.

### What is push publishing in this framework?
In push publishing, the content that you publish via Contentstack is saved in the local file system of the web server, and page requests retrieve and render content directly from local storage.

### What should I use instead of the web framework?
Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

### Does the framework support Node.js Express features?
Yes. Since the framework is based on Node.js Express, it supports all the features that are offered by Node.js Express.