---
title: "[Developers] - Fetch Content"
description: Fetch Content
url: https://www.contentstack.com/docs/developers/fetch-content
product: Contentstack
doc_type: developers-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Developers] - Fetch Content

This page explains the different ways developers can fetch content from Contentstack (APIs, SDKs, and other tools). It is intended for developers integrating Contentstack into web, mobile, or backend systems and should be used when choosing the right content retrieval method for your application’s architecture and delivery needs.

Contentstack is an **API-first **[**headless CMS**](/docs/overview/what-is-headless-cms) that separates your content backend from the frontend, giving developers complete flexibility in delivering content across various channels.

You can fetch content using a variety of APIs and tools, depending on your application’s structure and requirements—whether you’re building a dynamic web app, mobile application, or syncing content to a local environment.

## Fetch Content Using RESTful APIs

Contentstack offers multiple read-only APIs that let you fetch content in various formats. These APIs support use cases from real-time content delivery to local synchronization and image transformation.

### Content Delivery API

Use the [Content Delivery API](/docs/developers/apis/content-delivery-api) to retrieve live, published content from your [stack](/docs/developers/set-up-stack/about-stack) and deliver it to your digital properties.
- Read-only API for published content
- Supports multiple platforms: web, mobile, smart displays, wearables, etc.
- Ideal for delivering real-time content directly from Contentstack to your frontend

### GraphQL Delivery API

The [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api) lets you fetch precise, structured content from multiple types using a single query.
- Fetch customized content using a single read-only [API endpoint](/docs/developers/contentstack-regions/api-endpoints)
- Retrieve entries and assets from multiple [content types](/docs/developers/create-content-types/about-content-types)
- Fetch nested or related resources without multiple API calls

### Synchronization API

Use the [Synchronization API](/docs/developers/apis/content-delivery-api#synchronization) to keep your local app data in sync with Contentstack by fetching only the latest updates.
- Read-only API for delta content updates
- Efficient for apps that require offline access or local caching
- Suitable for mobile apps, kiosks, or distributed systems

### Image Delivery API

Manipulate and deliver images stored in your Contentstack stack using the [Image Delivery API](/docs/developers/apis/image-delivery-api).
- Read-only API for image retrieval
- Supports real-time manipulation via URL parameters
- Optimize image performance with resizing, cropping, trimming, quality control, and DPR adjustments

### Content Management API

The [Content Management API](/docs/developers/apis/content-management-api) gives you complete control over managing the content of your Contentstack account.
- Read-write API to create, update, and delete [entries](https://www.contentstack.com/docs/content-managers/author-content/about-entries) and [assets](/docs/content-managers/author-content/about-assets)
- Supports content types, [workflows](https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks), and user management
- Fetches both draft and published content
- Ideal for admin operations, automation, and custom CMS tooling

## Fetch Content Using SDKs

To simplify integration, Contentstack offers [SDKs](/docs/developers/sdks) across multiple [languages](/docs/developers/multilingual-content/about-languages) and platforms to simplify content retrieval and management within your development environment.

Each SDK includes API references, [sample apps](/docs/developers/sample-apps/), and installation guides for quick setup.

**Available SDKs:**
- [TypeScript](/docs/developers/sdks/content-delivery-sdk/typescript/)
- [JavaScript](/docs/developers/sdks/content-delivery-sdk/javascript-browser/)
- [Node.js](/docs/developers/sdks/content-delivery-sdk/nodejs/)
- [PHP](/docs/developers/sdks/content-delivery-sdk/php/)
- [Java](/docs/developers/sdks/content-delivery-sdk/java/)
- [.NET](/docs/developers/sdks/content-delivery-sdk/dot-net/)
- [Python](/docs/developers/sdks/content-delivery-sdk/python/)
- [Ruby](/docs/developers/sdks/content-delivery-sdk/ruby/)
- [Android](/docs/developers/sdks/content-delivery-sdk/android/)
- [iOS](/docs/developers/sdks/content-delivery-sdk/ios/)
- [Dart](/docs/developers/sdks/content-delivery-sdk/dart/)
- [React Native](/docs/developers/sdks/content-delivery-sdk/react-native/)

## Fetch Content Using Other Tools

In addition to APIs and SDKs, Contentstack provides other tools to help automate workflows and enable advanced integrations.

### Webhooks

[Webhooks](https://www.contentstack.com/docs/developers/set-up-webhooks/about-webhooks) let you send real-time notifications to custom endpoints when specific events occur in Contentstack.
- Trigger actions on content publishing, deletion, and more
- Integrate with third-party services or CI/CD pipelines

Use for triggering deployments, alerts, or syncing changes with external systems (e.g., Slack, Jenkins, Netlify).

### Contentstack DataSync

[DataSync](/docs/developers/develop-apps-with-datasync/about-contentstack-datasync) helps you sync published content from your stack to local backends like MongoDB or file systems.
- Keeps local databases updated with the latest published changes
- Suitable for offline or low-connectivity environments
- Ideal for applications that require fast, reliable access to synced content

## Choosing the Right Content Fetching Method

Selecting the right method for retrieving content depends on your application’s architecture, data requirements, and delivery goals. The table below summarizes the recommended tools based on common use cases:

| Use Case | Recommended Tool |
|---|---|
| Fetch published content for websites or apps | Content Delivery API or SDKs |
| Retrieve nested or related content in a single request | GraphQL Delivery API |
| Synchronize content with a local database or server | Synchronization API or DataSync |
| Perform administrative content operations (CRUD actions) | Content Management API |

## Common questions

### Which API should I use to fetch live published content?
Use the Content Delivery API to retrieve live, published content from your stack and deliver it to your digital properties.

### When should I use the GraphQL Delivery API instead of the Content Delivery API?
Use the GraphQL Content Delivery API when you want to fetch precise, structured content from multiple types using a single query and fetch nested or related resources without multiple API calls.

### What should I use to keep a local environment in sync with Contentstack?
Use the Synchronization API to fetch only the latest updates, or use Contentstack DataSync to sync published content from your stack to local backends like MongoDB or file systems.

### When do I need the Content Management API?
Use the Content Management API for admin operations, automation, and custom CMS tooling, including creating, updating, and deleting entries and assets, and fetching both draft and published content.