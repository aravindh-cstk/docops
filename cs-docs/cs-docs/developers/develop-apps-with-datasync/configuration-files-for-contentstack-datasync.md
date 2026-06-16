---
title: "[Synchronize Data With Datasync] - Configuration Files for Contentstack DataSync"
description: Configuration file parameters and examples for Contentstack DataSync modules (webhook listener, sync manager, filesystem and MongoDB stores, and SDKs).
url: https://www.contentstack.com/docs/developers/develop-apps-with-datasync/configuration-files-for-contentstack-datasync
product: Contentstack DataSync
doc_type: configuration-reference
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [Synchronize Data With Datasync] - Configuration Files for Contentstack DataSync

This page describes the configuration files and parameters used by Contentstack DataSync components (such as the webhook listener, DataSync manager, and storage backends). It is intended for developers configuring or customizing DataSync behavior and should be used when setting up or modifying DataSync deployments.

## Configuration Files for Contentstack DataSync

The configuration file contains plain text parameters that define settings or preferences for Contentstack DataSync. This file will be referenced by the modules for performing the overall sync operations.

**Config for Webhook Listener:**

| **Property** | **Data Type** | **Default** | **Description** |
|---|---|---|---|
| port | number | 5000 | **Optional**. A port for starting the webhook listener. |
| endpoint | string | /notify | **Optional**. The URL where the webhook should be triggered. |

**Configs for DataSync Manager:******

| **Property** | **Data Type** | **Default** | **Description** |
|---|---|---|---|
| assetStore | object | * refer assetStore config for further details* | **Optional**. Asset store configuration. |
| contentStore | object | * refer mongodb contentStore/ filesystem contentStore config for further details* | **Optional**. Content store configuration. |
| listener | object | *refer listener module configs* | **Optional**. Producer<br>Example: contentstack-webhook-listener |
| locales | object |  | **Optional**. locales that you'd want to be skipped<br>ex: [ { code: 'en-us' } ] |
| contentstack.apiKey | number |  | **Required**. The Stack’s API key. |
| contentstack.deliveryToken | string |  | **Required**. The delivery token. |
| contentstack.sync_token | string |  | **Optional**. The checkpoint from where the sync operation should begin when the sync utility starts. |
| contentstack.branch | string |  | **Optional**. The branch you want to use or sync with. |
| contentstack.MAX_RETRY_LIMIT | number | 6 | **Optional**. number of times an API request will be retried, before failing. |
| contentstack.actions | object | delete:'delete', publish:'publish',<br>unpublish:<br>'unpublish', | **Optional**. |
| contentstack.apis | object | content_types: '/v3/content_types/',<br>sync: '/v3/stacks/sync' | **Optional**. API helper keys. |
| contentstack.host | string | 'cdn.contentstack.io' | **Optional**. REST API domain. |
| contentstack.protocol | string | 'https:' | **Optional**. REST API request protocol. |
| contentstack.verbs | object | get: 'GET' | **Optional**. Supported REST API verbs, used internally. Helper key. |
| syncManger.cooloff | number | 3000 | **Optional**. The 'cooloff' duration (in milliseconds) for waiting, after a 'sync API' call has been initiated by the app. If no value is provided, the default value will be '3000 ms'. |
| syncManager.limit | number | 100 | **Optional**. The number of items fetched at once by the contentstack sync API call. |
| syncManager.maxsize | number | 2097152 | **Optional**. Limit the max file size (in bytes) of '.ledger' or filter/logger files. |
| syncManager.saveFilteredItems | boolean | true | **Optional**. To save filtered items.<br>this will work only when<br>1. locales: [ { code: 'en-us' } ] is used<br>2. if items returned by SYNC API request do not have mandatory keys. |
| checkpoint | object |  | - Controls checkpoint file behavior during sync |
| enabled | boolean | false | Set to true to enable saving and restoring sync checkpoints |
| filePath | string | ".checkpoint" | File path where checkpoint data is stored |
| preserve | boolean | false | Set to true to preserve the checkpoint file during clean operations |
| timeout | Number | 30000 | Request timeout duration in milliseconds. Specifies the maximum time to wait for a server response before terminating the request. |
| RETRY_DELAY_BASE | Number | 200 | Base delay value in milliseconds used for calculating retry intervals. Combined with an exponential backoff algorithm to determine wait time between retry attempts. |

**Configs for DataSync Asset Store Filesystem**

| **Property** | **Data Type** | **Default** | **Description** |
|---|---|---|---|
| assetStore.baseDir | string | ./_contents | **Optional**. The location of the file for storing the assets. |

**Configs for DataSync Content Store Filesystem******

| **Property** | **Data Type** | **Default** | **Description** |
|---|---|---|---|
| contentStore.baseDir | string | ./_contents | **Optional**. The location of the file for storing the content. |

**Configs for DataSync Content Store MongoDB**

| **Property** | **Data Type** | **Default** | **Description** |
|---|---|---|---|
| dbName | string | contentstack-db | **Optional**. The MongoDB database name. |
| uri | string | mongodb://localhost:27017 | **Optional**. The MongoDB connection URI |
| collection | object | *see config below* | **Optional**. For storing assets, schema, and entries |
| unwantedKeys | object | *see config below* | **Optional**. Keys to be deleted, while data is being inserted. |
| options | object | *see config below* | **Optional**. The MongoDB connection options. |

Below are the configuration files for different elements of Contentstack DataSync. You can make changes to these files to meet your requirement.

## Webhook Listener

```
listener: {
    port: 5000,
    endpoint: '/notify',
}
```

## DataSync Manager

```
/**
 * Sync manager configurations
 */
const config = {
  // asset store configuration, refer assetStore config for further details
  assetStore: {},
  // content store configuration, refer mongoStore OR fsStore config for further details
  contentStore: {
    unwanted: {
      asset: {
        _in_progress: true,
        _type: true,
        content_type_uid: true,
        data: true,
        publish_details: true,
      },
      contentType: {
        content_type_uid: true,
      },
      entry: {
        _content_type: true,
        _in_progress: true,
        _type: true,
        content_type_uid: true,
        data: true,
        publish_details: true,
      },
    },
  },
  // contentstack config, this is used mainly in making API calls
  contentstack: {
    apiKey: '***',
    deliveryToken: '***',
    sync_token: '***',
    branch: 'main',
    MAX_RETRY_LIMIT: 6,
    actions: {
      delete: 'delete',
      publish: 'publish',
      unpublish: 'unpublish',
    },
    apis: {
      content_types: '/v3/content_types/',
      sync: '/v3/stacks/sync',
    },
    host: 'cdn.contentstack.io',
    options: 'ig',
    port: 443,
    protocol: 'https:',
    query: {
      include_global_field_schema: true,
    },
    regexp: {
      asset_pattern: {
        options: 'ig',
        url: 'https://(assets|images).contentstack.io/v3/assets/(.*?)/(.*?)/(.*?)/(.*)',
      },
      rte_asset_pattern_1: {
        options: 'ig',
        url: 'https://(assets|images).contentstack.io/v3/assets/(.*?)/(.*?)/(.*?)/(.*?)(?=")',
      },
      rte_asset_pattern_2: {
        options: 'g',
        url: 'https://(assets|images).contentstack.io/v3/assets/(.*?)/(.*?)/(.*?)/(.*?)(.*)',
      },
    },
    verbs: {
      get: 'GET',
    },
  },
  // producer, ex: contentstack-webhook-listener config, check listener for further details
  listener: {},
  // locales, that you'd want to be skipped, ex: [ { code: 'en-us' } ]
  locales: [],
  // sync-manager specific configurations
  syncManager: {
    cooloff: 3000,
    inet: {
      dns: '8.8.8.8',
      host: 'contentstack.io',
      // DNS port
      port: 53,
      retries: 5,
      retryIncrement: 5 * 1000,
      retryTimeout: 90 * 1000,
      timeout: 30 * 1000,
      type: 'A',
    },
    limit: 100,
    markdown: {
      breaks: true,
      gfm: true,
      smartLists: true,
      tables: true,
      xhtml: false,
    },
    // max file sizes in bytes
    maxsize: 2097152,
    // waits for 10s if the app runs into errors or a kill signal is sent
    processTimeout: 10 * 1000,
    queue: {
      pause_threshold: 7000,
      resume_threshold: 4000,
    },
    saveFailedItems: true,
    saveFilteredItems: true,
  },
  plugins: [
     // Plugins starting with _cs_internal_ are app specific internal plugins
     // If you have custom plugins
     //  1. Ceate a 'plugins' folder in this app's directory
     //  2. Create a folder inside it
     //  3. Inside the folder, create a index.js file
     // Check example - plugins/dummy-plugin of this project
     {
       disabled: true,
       name: 'item-logger',
       options: {
       // Here, you can set your own custom logger
       log: console.log
       }
     },
     {
       disabled: false,
       // This plugin
       //  - Modifies reference field structure of Stack's v3.4.x and below to new reference field structure (Array of uids, transformed to Array of objects)
       //  - Updates all old reference fields and makes them compatible with multiple references
       name: '_cs_internal_transform_entries',
       // path: '',
       options: {
         // other overrides...
       },
     },
     {
       disabled: false,
       // This plugin
       //  - Detects asset/reference paths in a content type's schema
       //  - Updates all content types with asset/reference fields
      // Which can be later used with datasync-filesystem-sdk OR datasync-mongodb-sdk
       name: '_cs_internal_transform_schemas',
       options: {
         // Set false, if you do not wish to log asset references in the schema
         logAssetPaths: true,
         // Set false, if you do not wish to log entry references in the schema
         logReferencePaths: true,
       },
     },
     {
       disabled: false,
       // This plugin
       //  - Detects RTE/Markdown fields in a schema
       //  - Finds all the assets that's stored in Contentstack
       //  - Downloads all assets onto the asset store specified
      //  - Updates the entry's RTE/Markdown fields
       name: '_cs_internal_save_rte_markdown_assets',
       options: {
         // other overrides...
       },
     },
   ],
   checkpoint: {
    enabled: false,        // Set to true if you want to enable checkpoint
    filePath: '.checkpoint',
    preserve: false        // Set to true if you want to preserve the checkpoint file during clean operation
  },
}
```

## DataSync Content Store Filesystem

```
'contentStore': {
    baseDir: './_contents',
    locale: 'en-us',
    projections: {
      _content_type_uid: 0,
    },
}
```

## DataSync Asset Store Filesystem

```
'assetStore': {
    baseDir: './_contents'
}
// baseDir : file location to store the data
```

## DataSync Content Store MongoDB

```
/**
 * MongoDB content store specific configurations
 */
const mongoStore = {
  // Name of the MongoDB database to store in
  dbName: 'contentstack-db',
  // Collection name in which contents (assets, schema, and entries) will be stored
  collection: {
      asset: 'contents',
      entry: 'contents',
      schema: 'contents',
    },
  // Refer http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html for more configuration options
  options: {
    autoReconnect: true,
    connectTimeoutMS: 15000,
    keepAlive: true,
    noDelay: true,
    reconnectInterval: 1000,
    reconnectTries: 20,
    userNewUrlParser: true,
  },
  // Keys to be deleted, while data is being inserted
  unwantedKeys: {
    asset: {
      action: true,
      checkpoint: true,
      'data.created_by': true,
      event_at: true,
      type: true,
      'data.updated_by': true
    },
    contentType: {
      'data.created_by': true,
      'data.updated_by': true,
      'data.DEFAULT_ACL': true,
      'data.SYS_ACL': true,
      'data.abilities': true,
      'data.last_activity': true
    },
    entry: {
      action: true,
      checkpoint: true,
      'data.created_by': true,
      event_at: true,
      type: true,
      'data.updated_by': true
    },
  },
  // mongodb connection url
  url: 'mongodb://localhost:27017',
}
```

## DataSync Filesystem SDK

```
contentStore: {
     // baseDir : file location of stored data
      baseDir: './_contents',
    }
},
// locale info, control the locales to be supported by the SDK
  // ex: [ { code: 'en-us', relative_url_prefix: '/' } ]
  locales: [],
```

## DataSync MongoDB SDK

```
/**
 * Contentstack sync mongodb SDK configurations
 */
const mongoSDK = {
  // Name of the mongodb database to store in
  dbName: 'contentstack-db',
  // Collection name in which content (assets, schema, and entries) will be stored
  collection: {
      asset: 'contents',
      entry: 'contents',
      schema: 'contents',
    },
  // Indexes to be applied
  indexes: {
      _content_type_uid: 1,
      locale: 1,
      uid: 1,
      updated_at: -1,
    },
  // Refer http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html for more configuration options
  options: {
    autoReconnect: true,
    connectTimeoutMS: 15000,
    keepAlive: true,
    noDelay: true,
    reconnectInterval: 1000,
    reconnectTries: 20,
    userNewUrlParser: true,
  },
  // mongodb connection url
  uri: 'mongodb://localhost:27017',
  // no of items to be returned by default, when a query is fired
  // use .limit(200) to override this
  limit: 100,
  // no of items to be skipped by default, when a query is fired
  // use .skip(20) to override this
  skip: 0,
  // locale info, control the locales to be supported by the SDK
  locales: 'en-us',
  // keys to be ignored by default
  // use .only(['_id', 'updated_at']) to override these configurations
 projections: {
      _content_type_uid: 0,
      _id: 0,
    },
}
```

## Common questions

### Where do I configure the webhook listener port and endpoint?
In the **Config for Webhook Listener** section, using `port` and `endpoint`.

### Which Contentstack credentials are required for DataSync Manager?
`contentstack.apiKey` and `contentstack.deliveryToken` are marked as **Required**.

### How do I switch between filesystem and MongoDB content stores?
Use the `contentStore` configuration and refer to the **DataSync Content Store Filesystem** or **DataSync Content Store MongoDB** configuration blocks.

### How can I enable saving and restoring sync checkpoints?
Set `checkpoint.enabled` to `true` and configure `checkpoint.filePath` (and optionally `checkpoint.preserve`).