---
title: "Changing Persistent Storage Connector"
description: "About Changing Persistent Storage Connector"
url: /headless-cms/changing-persistent-storage-connector
---

# Changing Persistent Storage Connector

## Changing Persistent Storage Connector

This guide will take you through the steps required to change the storage connector from Filesystem to MongoDB and vice versa.

## From Filesystem to MongoDB 

The boilerplate uses Filesystem as the default database system. If you want to set up [Contentstack DataSync](/docs/headless-cms/about-contentstack-datasync) with MongoDB, perform the following steps:

1.  Delete the **.token** and **\_contents** folders before switching to MongoDB.
2.  Setup the MongoDB server and have it running.
3.  Go to the **config** folder, open the **index.js** file, and add the following line of code to switch to MongoDB:  
    
    ```
    export const config = {
      contentStoreModule: '@contentstack/datasync-content-store-mongodb'
    }
    ```
    
4.  Restart the application. Now, Contentstack DataSync will use the MongoDB database instead of using Filesystem, and then will create “contentstack-persistent-db” in mongodb and \_contents collection. The assets will be stored inside \_contents folder.

## From MongoDB to Filesystem

If you started the application with MongoDB as database and want to switch Filesystem instead, perform the following steps:

1.  Delete the .token folder.
2.  Go to the **config** folder, open the **config.js** file, and add the following line of code to switch to Filesystem:  
    
    ```
    export const config = {
      contentStoreModule: '@contentstack/datasync-content-store-filesystem'
    }
    ```
    
3.  Restart the application. Contentstack DataSync will now use Filesystem as the database instead of MongoDB.
