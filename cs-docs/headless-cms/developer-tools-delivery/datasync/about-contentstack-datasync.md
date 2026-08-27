---
title: "About Contentstack DataSync"
description: "Keep your Contentstack content in sync locally with DataSync. Supports MongoDB and Filesystem SDKs for fast, reliable, and real-time content delivery."
url: /headless-cms/about-contentstack-datasync
uid: bltb6300122984eb2b3
---

# About Contentstack DataSync

## About Contentstack DataSync

Contentstack DataSync is a robust utility designed to keep your published content synchronized with your local database. It ensures that the most recent [publish](/docs/headless-cms/publish-an-entry), [update](/docs/headless-cms/edit-an-entry), and [delete](/docs/headless-cms/delete-an-entry) operations done on your [entry](/docs/headless-cms/about-entries), and/or [assets](/docs/headless-cms/about-assets) reflect automatically on the content.

## Key Benefits of Using DataSync

DataSync offers several key benefits:

-   **Reduced API Overhead:** By caching content locally, DataSync minimizes the number of API requests to Contentstack, reducing latency and improving performance.
-   **Real-time Syncing:** Every change in the content is automatically synced with your local database.
-   **Offline Access:** Serve content from your local database even if your connection to Contentstack is temporarily unavailable.
-   **Flexible Tech Stack:** DataSync is language-agnostic. You can use it with any front-end or back-end framework that can interact with the synced database.

**Additional Resource:** To learn how to implement DataSync with an application, you can refer to this [Node.js example app guide](/docs/headless-cms/create-a-node-js-app-using-contentstack-datasync).

## Contentstack DataSync SDKs

To cater to different storage and performance needs, Contentstack provides two SDKs under the DataSync utility:

### -   MongoDB SDK

The MongoDB SDK syncs your content to a local MongoDB database. It’s ideal for applications that prefer structured querying and faster read access.

**Key Features:**

-   Real-time sync with MongoDB
-   Rich querying support using MongoDB tools
-   Scalable for large content sets

### -   Filesystem SDK

The Filesystem SDK stores your content locally in JSON files. It’s best suited for static site generators or environments with minimal infrastructure requirements.

**Key Features:**

-   Stores data in flat JSON files
-   Lightweight and easy to set up
-   Suitable for JAMstack and serverless applications

**Additional Resource:** To know more about the MongoDB SDK and FileSystem SDK, refer to the [Get Started with Contentstack MongoDB SDK](/docs/developers/sdks/datasync-sdk-mongodb/typescript/get-started-with-datasync-mongodb-sdk) and [Get Started with Contentstack FileSystem SDK](/docs/developers/sdks/datasync-sdk-filesystem/typescript/get-started-with-datasync-filesystem-sdk) documentation.
