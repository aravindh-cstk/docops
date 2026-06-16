---
title: "[Synchronize Data With Datasync] - About Contentstack DataSync"
description: About Contentstack DataSync
url: https://www.contentstack.com/docs/developers/develop-apps-with-datasync/about-contentstack-datasync
product: Contentstack
doc_type: overview
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Synchronize Data With Datasync] - About Contentstack DataSync

This page introduces Contentstack DataSync, explains its key benefits, and outlines the available DataSync SDK options (MongoDB and Filesystem). It is intended for developers who want to keep published Contentstack content synchronized with a local database for performance, offline access, or architectural flexibility.

## About Contentstack DataSync

Contentstack DataSync is a robust utility designed to keep your published content synchronized with your local database. It ensures that the most recent [publish](/docs/content-managers/working-with-entries/publish-an-entry), [update](/docs/content-managers/working-with-entries/edit-an-entry), and [delete](/docs/content-managers/working-with-entries/delete-an-entry) operations done on your [entry](/docs/content-managers/working-with-entries/about-entries), and/or [assets](/docs/content-managers/working-with-assets/about-assets) reflect automatically on the content.

## Key Benefits of Using DataSync

DataSync offers several key benefits:
- **Reduced API Overhead:** By caching content locally, DataSync minimizes the number of API requests to Contentstack, reducing latency and improving performance.
- **Real-time Syncing:** Every change in the content is automatically synced with your local database.
- **Offline Access:** Serve content from your local database even if your connection to Contentstack is temporarily unavailable.
- **Flexible Tech Stack:** DataSync is language-agnostic. You can use it with any front-end or back-end framework that can interact with the synced database.

**Additional Resources**: To learn how to implement DataSync with an application, you can refer to this [Node.js example app guide](/docs/developers/develop-apps-with-datasync/create-a-node-js-app-using-contentstack-datasync).

## Contentstack DataSync SDKs

To cater to different storage and performance needs, Contentstack provides two SDKs under the DataSync utility:

### MongoDB SDK

The MongoDB SDK syncs your content to a local MongoDB database. It’s ideal for applications that prefer structured querying and faster read access.

**Key Features:**
- Real-time sync with MongoDB
- Rich querying support using MongoDB tools
- Scalable for large content sets

### Filesystem SDK

The Filesystem SDK stores your content locally in JSON files. It’s best suited for static site generators or environments with minimal infrastructure requirements.

**Key Features:**
- Stores data in flat JSON files
- Lightweight and easy to set up
- Suitable for JAMstack and serverless applications

**Additional Resource:** To know more about the MongoDB SDK and FileSystem SDK, refer to the [Get Started with Contentstack MongoDB SDK](/docs/developers/develop-apps-with-datasync/get-started-with-datasync-mongodb-sdk) and [Get Started with Contentstack FileSystem SDK](/docs/developers/develop-apps-with-datasync/get-started-with-datasync-filesystem-sdk) documentation.

## Common questions

**What does Contentstack DataSync do?**  
It keeps your published content synchronized with your local database and reflects [publish](/docs/content-managers/working-with-entries/publish-an-entry), [update](/docs/content-managers/working-with-entries/edit-an-entry), and [delete](/docs/content-managers/working-with-entries/delete-an-entry) operations automatically.

**What are the key benefits of using DataSync?**  
Reduced API overhead, real-time syncing, offline access, and a flexible tech stack.

**Which DataSync SDK should I choose?**  
Use the MongoDB SDK for syncing to a local MongoDB database with rich querying support, or the Filesystem SDK to store content locally in JSON files for lightweight setups.

**Where can I find implementation examples or getting started guides?**  
See the [Node.js example app guide](/docs/developers/develop-apps-with-datasync/create-a-node-js-app-using-contentstack-datasync) and the getting started docs for the [MongoDB SDK](/docs/developers/develop-apps-with-datasync/get-started-with-datasync-mongodb-sdk) and [FileSystem SDK](/docs/developers/develop-apps-with-datasync/get-started-with-datasync-filesystem-sdk).

<!-- filename: synchronize-data-with-datasync-about-contentstack-datasync.md -->