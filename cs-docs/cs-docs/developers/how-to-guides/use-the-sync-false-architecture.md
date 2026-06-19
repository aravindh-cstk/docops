---
title: "[How-to Guides and Knowledgebase articles] - Use the Sync False Architecture"
description: Guidance for setting up a “Single sync in multiple servers” architecture using SYNC=true on one server and SYNC=false on others (contentstack-express).
url: https://www.contentstack.com/docs/developers/how-to-guides/use-the-sync-false-architecture
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Use the Sync False Architecture

This page explains how to set up a “Single sync in multiple servers” deployment pattern where only one server syncs content (SYNC=true) and other servers serve content (SYNC=false). It is intended for developers operating Contentstack-based web applications and should be used when configuring multi-server architectures and environment variables/ports for syncing vs serving.

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

Contentstack is a SaaS-based, [headless content management](/docs/overview/what-is-headless-cms) platform that stores and manages content in the cloud. This setup enables users to retrieve and deliver content to any channel (web, mobile, devices, etc.) via Contentstack's [Content Delivery APIs](/docs/developers/apis/content-delivery-api).

Contentstack provides a Node.js-based web application framework [contentstack-express](/docs/developers/about-web-framework) for building websites with [push-publishing](/docs/developers/contentstack-basics/architecture-planning-deployment-models#push-publishing). This framework lets you save the content you [publish](/docs/content-managers/publish-content) via Contentstack in the local file system of a web server. Subsequently, for every incoming page request on the website, the content is retrieved and rendered directly from the local storage instead of fetching it from the Contentstack database via APIs.

**Warning:** **contentstack-express** framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

Let’s see how you can set up your server architecture based on this structure.

## Single sync in multiple servers

In this architecture, you connect all your servers to the Contentstack database but sync your content with only one web server. Here’s the diagrammatic representation of this architecture.

This architecture, too, has its own set of pros and cons.

#### Pros

- **High availability** - If any servers go down, your process management app (PM2) can easily restart them. Once the app is restarted, all the content still in the “Pending” state in the Contentstack’s publish queue will be synced.
- **High scalability** - As there’s only a single application registered to Contentstack’s servers, the rest of the delivery applications can be scaled up/down as required.
- **Data consistency and Reduced bandwidth** - A single application connects to real-time and reads/writes data onto the storage provider.

#### Cons

- **No querying referenced content**
- **Reduced delivery speed**
- **No internal data caching in the application**

Next, we will see how to set up the web servers using a process management app.

## Set up web applications using a process management app

When setting up the “Single sync in multiple servers” architecture, you need to make sure that you set one server to run on default configuration (SYNC=true) and on a different port, for example, 8000.

- **Linux**: PORT=8000 node app.js
- **Windows**: set PORT=8000; node app.js

This server will connect with Contentstack’s real-time servers and sync (i.e., read/write on storage) the published, [unpublished](/docs/content-managers/working-with-entries/unpublish-an-entry), and deleted contents. Only this server will be able to write on the database.

On the other hand, the rest of the servers will run on another port and their “SYNC” environment variable set to “false”.

- **Linux**: SYNC=false PORT=4000 node app.js
- **Windows**: SYNC=false; PORT=4000; node app.js

This server will only be serving data (i.e., only read from the database)

## Common questions

**Q: Is this page still maintained and supported?**  
A: **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

**Q: Is contentstack-express still supported?**  
A: **Warning:** **contentstack-express** framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

**Q: What does SYNC=false mean for a server in this setup?**  
A: The rest of the servers will run on another port and their “SYNC” environment variable set to “false”. This server will only be serving data (i.e., only read from the database)

**Filename:** how-to-guides-and-knowledgebase-articles-use-the-sync-false-architecture.md