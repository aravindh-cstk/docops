---
title: "[TypeScript] - Migrate to TypeScript Delivery SDK v5"
description: Guide to migrate from v4 to v5 of the TypeScript Delivery SDK, including upgrade steps, Utils SDK installation, and optional caching configuration.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/typescript/migrate-to-typescript-delivery-sdk-v5
product: Contentstack
doc_type: migration-guide
audience:
  - developers
version: v5
last_updated: 2026-03-25
---

# [TypeScript] - Migrate to TypeScript Delivery SDK v5

This page explains how to migrate an existing project from v4 to v5 of the TypeScript Delivery SDK. It is intended for developers maintaining TypeScript projects using Contentstack’s Delivery SDK and should be used when upgrading dependencies and updating related SDK integrations (Utils and caching).

## Migrate to TypeScript Delivery SDK v5

**Note**: This guide explains how to migrate from v4 to v5 of the TypeScript Delivery SDK.

To migrate your project from v4 to v5 of the TypeScript Delivery SDK, follow the steps below.

## Upgrade the SDK to the Latest Version

To ensure your project is using the latest version of the SDK, run the following command:

```
npm i @contentstack/delivery-sdk@latest
```

## Install the Utils SDK

The Utils package is no longer bundled with the Delivery SDK by default. To use any utilities, install the Utils SDK separately:

```
npm i @contentstack/utils@latest
```

Once installed, you can use it as before. For example:

```
import contentstack, { StackConfig } from '@contentstack/delivery-sdk';
import * as ContentstackUtils from '@contentstack/utils';

const credentials: StackConfig = {
  apiKey: '',
  deliveryToken: '',
  environment: '',
};

const Stack = contentstack.stack(credentials);

const result = await Stack
  .contentType('')
  .entry('')
  .includeEmbeddedItems()
  .fetch();

ContentstackUtils.jsonToHTML({
  entry: result,
  paths: ['rte_fieldUid', 'group.rteFieldUID'],
  renderOption,
});
```

## Configure Caching (optional)

To use caching, install the Persistence plugin separately:

```
npm i @contentstack/persistence-plugin@latest
```

Then, configure caching by passing cacheOptions when initializing the SDK:

```
import contentstack, { StackConfig, Policy } from '@contentstack/delivery-sdk';
import PersistenceStore from '@contentstack/persistence-plugin';

const Stack = contentstack.stack({
  apiKey: '',
  deliveryToken: '',
  environment: '',
  cacheOptions: {
    policy: Policy.CACHE_THEN_NETWORK,
    persistenceStore: new PersistenceStore({
      storeType: 'localStorage',
      maxAge: , // Default is 24 hours
      serializer: , // Default is JSON.stringify
      deserializer: , // Default is JSON.parse
    }),
  },
});
```

**Note**: If you do not use caching or set the policy to `Policy.IGNORE_CACHE`, you can skip installing the Persistence plugin and omitting the `cacheOptions` configuration.

## Common questions

### Do I need to install `@contentstack/utils` when upgrading to v5?
Yes. The Utils package is no longer bundled with the Delivery SDK by default, so you must install `@contentstack/utils@latest` separately to use utilities.

### Is caching enabled by default in v5?
No. Caching is optional; to use it you install `@contentstack/persistence-plugin@latest` and configure `cacheOptions` when initializing the SDK.

### Can I skip the Persistence plugin installation?
Yes. If you do not use caching or set the policy to `Policy.IGNORE_CACHE`, you can skip installing the Persistence plugin and omit the `cacheOptions` configuration.