---
title: "[Synchronize Data With Datasync] - Changing Persistent Storage Connector"
description: Steps required to change the storage connector from Filesystem to MongoDB and vice versa in Contentstack DataSync.
url: https://www.contentstack.com/docs/developers/develop-apps-with-datasync/changing-persistent-storage-connector
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Synchronize Data With Datasync] - Changing Persistent Storage Connector

This page explains how to switch the persistent storage connector used by Contentstack DataSync between Filesystem and MongoDB. It is intended for developers configuring DataSync storage in an existing setup and should be used when you need to change the underlying content store module.

## Changing Persistent Storage Connector

This guide will take you through the steps required to change the storage connector from Filesystem to MongoDB and vice versa.

## From Filesystem to MongoDB

The boilerplate uses Filesystem as the default database system. If you want to set up [Contentstack DataSync](/docs/developers/develop-apps-with-datasync/about-contentstack-datasync) with MongoDB, perform the following steps:
- Delete the `**.token**` and `**_contents**` folders before switching to MongoDB.
- Setup the MongoDB server and have it running.
- Go to the `**config**` folder, open the **index.js** file, and add the following line of code to switch to MongoDB:

```
export const config = {
  contentStoreModule: '@contentstack/datasync-content-store-mongodb'
}
```

- Restart the application. Now, Contentstack DataSync will use the MongoDB database instead of using Filesystem, and then will create “contentstack-persistent-db” in mongodb and `_contents` collection. The assets will be stored inside `_contents` folder.

## From MongoDB to Filesystem

If you started the application with MongoDB as database and want to switch Filesystem instead, perform the following steps:
- Delete the `.token` folder.
- Go to the `**config**` folder, open the `**config.js**` file, and add the following line of code to switch to Filesystem:

```
export const config = {
  contentStoreModule: '@contentstack/datasync-content-store-filesystem'
}
```

- Restart the application. Contentstack DataSync will now use Filesystem as the database instead of MongoDB.

## Common questions

### Do I need to restart the application after changing the connector?
Yes. The steps include restarting the application after updating the configuration.

### What should I delete before switching from Filesystem to MongoDB?
Delete the `**.token**` and `**_contents**` folders before switching to MongoDB.

### What should I delete before switching from MongoDB to Filesystem?
Delete the `.token` folder.

### Which config value controls the storage connector?
The `contentStoreModule` value in the config file controls whether DataSync uses MongoDB or Filesystem.