---
title: "[Contentstack Basics] - Contentstack Resources for Your Frontend Architecture"
description: Contentstack resources for your frontend architecture, including RESTful APIs, DataSync, webhooks, SDKs, and static site generators.
url: https://www.contentstack.com/docs/headless-cms/contentstack-resources-for-your-frontend-architecture
product: Contentstack
doc_type: concept-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Contentstack Basics] - Contentstack Resources for Your Frontend Architecture

This page explains the key Contentstack tools and resources you can use to design and implement a frontend and deployment architecture of your choice. It is intended for developers evaluating or building applications with Contentstack, and should be used when deciding how your frontend will fetch, cache, sync, and deliver content.

## Contentstack Resources for Your Frontend Architecture

Contentstack is an API-based, headless CMS. It has the content backend (content repository and content delivery), separate from the front-end (presentation). Developers can build the front-end using any technology, and access the content stored within Contentstack using the APIs.

The way these two (frontend and backend) communicate would depend on the deployment architecture that you choose. For example, serving content from local cache would require a separate setup from fetching content directly using the content delivery APIs.

Contentstack, therefore, provides some powerful tools and resources that you can use to set up an architecture of your choice. These resources and the flexibility they provide are practically capable of supporting any kind of front-end or deployment architecture. Let’s look at what these resources are.

## RESTful APIs

Contentstack provides [Content Delivery APIs](/docs/developers/apis/content-delivery-api) to deliver content to your apps.

This means that fetching content for your application is as simple as issuing GET requests and getting JSON payload in response.

The best part about our content delivery is that it comes with [CDN](/docs/developers/how-to-guides/set-up-a-content-delivery-network-for-contentstack-powered-websites) (content delivery network) support. A CDN is a set of servers distributed across the globe, helping in delivering content at lightning-fast speed. This helps you develop web and mobile apps without worrying about the backend and content delivery.

Contentstack also provides [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api) support and [Sync APIs](/docs/developers/apis/content-delivery-api#synchronization).

The former lets you fetch customized response (of only the specified fields). It is ideal for** mobile applications** as it uses less data and loads faster.

The latter takes care of syncing your Contentstack data with your app and ensures that the data is always up-to-date by providing delta updates. It is ideal for developing **offline apps**.

These two APIs (GraphQL and Sync) together help you develop super-fast mobile apps with incredible delivery speed.

To summarize, we recommend using:
- Content Delivery APIs for any project
- GraphQL APIs for mobile applications
- Sync APIs for offline applications.

## Data Sync

[Contentstack DataSync](/docs/developers/develop-apps-with-datasync) lets you sync the published data of your site with your local database. So, every time you publish, delete, or update an entry or asset, the corresponding changes are made automatically on your database.

### Benefits of using Contentstack DataSync:
- Create websites that serve data from local storage
- Save published data locally
- Set up a database of your choice (e.g., MongoDB, Filesystem)
- Reduce API calls to Contentstack server (since the content is served from local storage)

### Contentstack DataSync particularly comes useful when:
- Users need to develop complex and customized websites quickly without having to code from scratch.
- When you want to have a database of your choice for storing content.
- When you need to ensure uninterrupted service even when Contentstack (or your CMS) is temporarily down or slow (though it is rarely the case). DataSync allows you to store and fetch content from the local store and serve to users without connecting to Contentstack. This reduces the load on the server.

It is an ideal option for developing websites, such as a company marketing site.

### When to choose DataSync

Go for DataSync in the following cases:
- The website is not likely to have a lot of content pages (ideally, under 500)
- The website is likely to have content in one or two languages
- The website may have basic referencing (not complex or deep referencing)
- The project involves managing only website content (not for devices). However, you can use the push publishing model to work on other devices such as IoT, Android, and iOS.

In other words, if the website is likely to be lightweight, go for DataSync.

**Examples**: Company marketing website, basic documentation site, etc.

## Webhooks

[Webhooks](/docs/developers/set-up-webhooks) provide a mechanism where a server-side application can notify a client-side application (or any third-party app) whenever the specified event (for e.g., publish entry, delete asset) occurs on the server. This eliminates the need to poll the API to check for recent events. The best part about webhooks is that they can carry data payload that you can send to any destination (URL).

Contentstack provides outgoing webhooks. You can set up events for almost every action.

### When to use webhooks
- ****Create a cache of published content on the web server (and subsequently serve page requests through this web server)
- Integrate with third-party apps (for translation, analytics, etc.)
- Notify about any changes in the app
- Automate certain tasks

## Leveraging SDKs

Contentstack provides [content delivery SDKs](/docs/developers#development-resources-and-sdks) for leading technologies and platforms. These SDKs provide all the methods that you need to query the Content Delivery APIs for fetching content for your apps.

Here’s the list of SDKs that Contentstack provides: JavaScript, iOS, Android, NodeJS, Java, ReactNative, PHP, Ruby, and .NET.

### When to use SDKs
- If you want to get started quickly with any of the above-mentioned platforms, install the corresponding SDK and get started.
- For mobile apps, such as new news app, chat app, etc.

## Web Framework (contentstack-express)

**Note: contentstack-express framework has been deprecated. We recommend using DataSync instead.**

Contentstack’s Node.js web application framework, ‘contentstack-express’, is a pack of libraries that helps you build websites using the push-publishing process.

## Static Site Generators

Static site generators offer powerful UI tools and framework that enable you to create amazing websites, apps, and e-commerce portals in minutes. Power the content of your site with Contentstack CMS to build blazing-fast web apps.

Contentstack integrates with static site generators easily. Here are few guides to help you get started with popular static site generators:
- [Contentstack + Gatsby](/docs/developers/sample-apps/get-started-with-gatsby-and-contentstack)
- [Contentstack + Metalsmith](/docs/developers/sample-apps/build-a-website-using-metalsmith-and-contentstack)

## Common questions

### Which Contentstack API should I use for my project?
Use Content Delivery APIs for any project, GraphQL APIs for mobile applications, and Sync APIs for offline applications.

### When should I choose Contentstack DataSync?
Go for DataSync when the website is likely to be lightweight, such as when it is under 500 content pages, has content in one or two languages, and has basic referencing.

### What are webhooks used for in Contentstack?
Webhooks notify a client-side application (or any third-party app) whenever a specified event occurs on the server, eliminating the need to poll the API.

### Is contentstack-express recommended?
**Note: contentstack-express framework has been deprecated. We recommend using DataSync instead.**

Filename: contentstack-resources-for-your-frontend-architecture.md