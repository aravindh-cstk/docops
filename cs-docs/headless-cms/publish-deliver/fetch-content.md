---
title: "Fetch Content"
description: "Explore how to fetch content from Contentstack using REST APIs, GraphQL, SDKs, Webhooks, and DataSync for flexible and efficient delivery."
url: /headless-cms/fetch-content
---

# Fetch Content

## Fetch Content

Contentstack is an **API-first** [**headless CMS**](/docs/headless-cms/what-is-headless-cms) that separates your content backend from the frontend, giving developers complete flexibility in delivering content across various channels.

You can fetch content using a variety of APIs and tools, depending on your application’s structure and requirements—whether you’re building a dynamic web app, mobile application, or syncing content to a local environment.

## Choose a Content Fetching Method

Use this quick guide to select the right method before integrating Contentstack into your application.

<table><tbody><tr><td><strong>If your goal is...</strong></td><td><strong>Use this</strong></td><td><strong>Why</strong></td></tr><tr><td>Fetch published content for websites or apps</td><td>Content Delivery API or Delivery SDKs</td><td>Optimized for fast, read-only content delivery</td></tr><tr><td>Retrieve related or nested content in a single request</td><td>GraphQL Delivery API</td><td>Flexible queries reduce multiple API calls</td></tr><tr><td>Synchronize content with a local database or cache</td><td>Synchronization API or DataSync</td><td>Efficient delta updates for sync workflows</td></tr><tr><td>Manage content (create, update, delete)</td><td>Content Management API</td><td>Supports administrative and automation operations</td></tr></tbody></table>

**Note:**

-   Use Delivery APIs and SDKs for rendering content in your application.
-   Use the Content Management API only for content management operations. Mixing these patterns can lead to performance and security issues.

### Validate Your Setup Before Integration

Before building your application logic, make a successful test request using a tool such as Postman, curl, or an SDK.

Confirm the following:

-   The request returns a 200 OK response
-   The response includes expected entry or asset data
-   The correct environment and locale are used

**Verify these configuration details:**

-   API key
-   Access token (use a Delivery token for content delivery)
-   Environment name
-   Region-specific API host

### Common Issues and How to Fix Them

<table><tbody><tr><td><strong>Issue</strong></td><td><strong>Possible Cause</strong></td><td><strong>What to Check</strong></td></tr><tr><td>401 / 403 errors</td><td>Invalid token or insufficient permissions</td><td>Token type, permissions, environment</td></tr><tr><td>404 errors</td><td>Incorrect UID or API host</td><td>Entry UID, content type UID, region</td></tr><tr><td>Missing or empty fields</td><td>Unpublished content or incorrect locale</td><td>Publish status, locale, field identifiers</td></tr></tbody></table>

### Recommended Integration Flow

1.  Select a content fetching method based on your use case
2.  Make a test API request to validate credentials and configuration
3.  Integrate the API or SDK into your application
4.  Configure webhooks or deployment triggers if your setup requires updates on content changes

**Tip:** Validate your API request early to avoid integration issues later in development.

## Fetch Content Using RESTful APIs

Contentstack offers multiple read-only APIs that let you fetch content in various formats. These APIs support use cases from real-time content delivery to local synchronization and image transformation.

### Content Delivery API

Use the [Content Delivery API](/docs/developers/apis/content-delivery-api) to retrieve live, published content from your [stack](/docs/headless-cms/about-stack) and deliver it to your digital properties.

-   Read-only API for published content
-   Supports multiple platforms: web, mobile, smart displays, wearables, etc.
-   Ideal for delivering real-time content directly from Contentstack to your frontend

### GraphQL Delivery API

The [GraphQL Content Delivery API](/docs/developers/apis/graphql-content-delivery-api) lets you fetch precise, structured content from multiple types using a single query.

-   Fetch customized content using a single read-only [API endpoint](/docs/administration/api-endpoints)
-   Retrieve entries and assets from multiple [content types](/docs/headless-cms/about-content-types)
-   Fetch nested or related resources without multiple API calls

### Synchronization API

Use the [Synchronization API](/docs/developers/apis/content-delivery-api/synchronization) to keep your local app data in sync with Contentstack by fetching only the latest updates.

-   Read-only API for delta content updates
-   Efficient for apps that require offline access or local caching
-   Suitable for mobile apps, kiosks, or distributed systems

### Image Delivery API

Manipulate and deliver images stored in your Contentstack stack using the [Image Delivery API](/docs/developers/apis/image-delivery-api).

-   Read-only API for image retrieval
-   Supports real-time manipulation via URL parameters
-   Optimize image performance with resizing, cropping, trimming, quality control, and DPR adjustments

### Content Management API

The [Content Management API](/docs/developers/apis/content-management-api) gives you complete control over managing the content of your Contentstack account.

-   Read-write API to create, update, and delete [entries](https://www.contentstack.com/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets)
-   Supports content types, [workflows](https://www.contentstack.com/docs/headless-cms/about-workflow-tasks), and user management
-   Fetches both draft and published content
-   Ideal for admin operations, automation, and custom CMS tooling

## Fetch Content Using SDKs

To simplify integration, Contentstack offers [SDKs](/docs/developers/sdks) across multiple [languages](/docs/headless-cms/about-languages) and platforms to simplify content retrieval and management within your development environment.

Each SDK includes API references, [sample apps](/docs/developers/sample-apps/), and installation guides for quick setup.

**Available SDKs:**

-   [TypeScript](/docs/developers/sdks/content-delivery-sdk/typescript/about-typescript-delivery-sdk/)
-   [JavaScript](/docs/developers/sdks/content-delivery-sdk/javascript-browser/about-javascript-delivery-sdk/)
-   [Node.js](/docs/developers/sdks/content-delivery-sdk/nodejs/about-nodejs-delivery-sdk/)
-   [PHP](/docs/developers/sdks/content-delivery-sdk/php/about-php-sdk/)
-   [Java](/docs/developers/sdks/content-delivery-sdk/java/about-java-delivery-sdk/)
-   [.NET](/docs/developers/sdks/content-delivery-sdk/dot-net/about-dot-net-delivery-sdk/)
-   [Python](/docs/developers/sdks/content-delivery-sdk/python/about-python-sdk/)
-   [Ruby](/docs/developers/sdks/content-delivery-sdk/ruby/about-ruby-sdk/)
-   [Android](/docs/developers/sdks/content-delivery-sdk/android/about-android-sdk/)
-   [iOS](/docs/developers/sdks/content-delivery-sdk/ios/about-objective-c-sdk/)
-   [Dart](/docs/developers/sdks/content-delivery-sdk/dart/about-dart-sdk/)
-   [React Native](/docs/developers/sdks/content-delivery-sdk/react-native/about-react-native-sdk/)

## Fetch Content Using Other Tools

In addition to APIs and SDKs, Contentstack provides other tools to help automate workflows and enable advanced integrations.

### Webhooks

[Webhooks](https://www.contentstack.com/docs/headless-cms/about-webhooks) let you send real-time notifications to custom endpoints when specific events occur in Contentstack.

-   Trigger actions on content publishing, deletion, and more
-   Integrate with third-party services or CI/CD pipelines

Use for triggering deployments, alerts, or syncing changes with external systems (e.g., Slack, Jenkins, Netlify).

### Contentstack DataSync

[DataSync](/docs/headless-cms/about-contentstack-datasync) helps you sync published content from your stack to local backends like MongoDB or file systems.

-   Keeps local databases updated with the latest published changes
-   Suitable for offline or low-connectivity environments
-   Ideal for applications that require fast, reliable access to synced content
