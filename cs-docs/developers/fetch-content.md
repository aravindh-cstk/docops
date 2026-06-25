---
title: "[Developers] - Fetch Content"
description: Fetch Content
url: https://www.contentstack.com/docs/headless-cms/fetch-content
product: Contentstack
doc_type: developers-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Developers] - Fetch Content

This page explains the different ways developers can fetch content from Contentstack (APIs, SDKs, and other tools). It is intended for developers integrating Contentstack into web, mobile, or backend systems and should be used when choosing the right content retrieval method for your application’s architecture and delivery needs.

Contentstack is an **API-first **[**headless CMS**](../overview/what-is-headless-cms.md) that separates your content backend from the frontend, giving developers complete flexibility in delivering content across various channels.

You can fetch content using a variety of APIs and tools, depending on your application’s structure and requirements—whether you’re building a dynamic web app, mobile application, or syncing content to a local environment.

## Fetch Content Using RESTful APIs

Contentstack offers multiple read-only APIs that let you fetch content in various formats. These APIs support use cases from real-time content delivery to local synchronization and image transformation.

### Content Delivery API

Use the [Content Delivery API](../../api-docs/api-detail/content-delivery-api.md) to retrieve live, published content from your [stack](./set-up-stack/about-stack.md) and deliver it to your digital properties.
- Read-only API for published content
- Supports multiple platforms: web, mobile, smart displays, wearables, etc.
- Ideal for delivering real-time content directly from Contentstack to your frontend

### GraphQL Delivery API

The [GraphQL Content Delivery API](../../api-docs/api-detail/graphql-content-delivery-api.md) lets you fetch precise, structured content from multiple types using a single query.
- Fetch customized content using a single read-only [API endpoint](./contentstack-regions/api-endpoints.md)
- Retrieve entries and assets from multiple [content types](./create-content-types/about-content-types.md)
- Fetch nested or related resources without multiple API calls

### Synchronization API

Use the [Synchronization API](../../api-docs/api-detail/content-delivery-api.md#synchronization) to keep your local app data in sync with Contentstack by fetching only the latest updates.
- Read-only API for delta content updates
- Efficient for apps that require offline access or local caching
- Suitable for mobile apps, kiosks, or distributed systems

### Image Delivery API

Manipulate and deliver images stored in your Contentstack stack using the [Image Delivery API](../../api-docs/api-detail/image-delivery-api.md).
- Read-only API for image retrieval
- Supports real-time manipulation via URL parameters
- Optimize image performance with resizing, cropping, trimming, quality control, and DPR adjustments

### Content Management API

The [Content Management API](../../api-docs/api-detail/content-management-api.md) gives you complete control over managing the content of your Contentstack account.
- Read-write API to create, update, and delete [entries](../content-managers/author-content/about-entries.md) and [assets](../content-managers/author-content/about-assets.md)
- Supports content types, [workflows](./set-up-workflows-and-publish-rules/about-workflow-tasks.md), and user management
- Fetches both draft and published content
- Ideal for admin operations, automation, and custom CMS tooling

## Fetch Content Using SDKs

To simplify integration, Contentstack offers [SDKs](/docs/developers/sdks) across multiple [languages](./multilingual-content/about-languages.md) and platforms to simplify content retrieval and management within your development environment.

Each SDK includes API references, [sample apps](/docs/developers/sample-apps/), and installation guides for quick setup.

**Available SDKs:**
- [TypeScript](./sdks/content-delivery-sdk/typescript.md)
- [JavaScript](./sdks/content-delivery-sdk/javascript-browser.md)
- [Node.js](./sdks/content-delivery-sdk/nodejs.md)
- [PHP](./sdks/content-delivery-sdk/php.md)
- [Java](./sdks/content-delivery-sdk/java.md)
- [.NET](./sdks/content-delivery-sdk/dot-net.md)
- [Python](./sdks/content-delivery-sdk/python.md)
- [Ruby](./sdks/content-delivery-sdk/ruby.md)
- [Android](./sdks/content-delivery-sdk/android.md)
- [iOS](./sdks/content-delivery-sdk/ios.md)
- [Dart](./sdks/content-delivery-sdk/dart.md)
- [React Native](./sdks/content-delivery-sdk/react-native.md)

## Fetch Content Using Other Tools

In addition to APIs and SDKs, Contentstack provides other tools to help automate workflows and enable advanced integrations.

### Webhooks

[Webhooks](./set-up-webhooks/about-webhooks.md) let you send real-time notifications to custom endpoints when specific events occur in Contentstack.
- Trigger actions on content publishing, deletion, and more
- Integrate with third-party services or CI/CD pipelines

Use for triggering deployments, alerts, or syncing changes with external systems (e.g., Slack, Jenkins, Netlify).

### Contentstack DataSync

[DataSync](./develop-apps-with-datasync/about-contentstack-datasync.md) helps you sync published content from your stack to local backends like MongoDB or file systems.
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