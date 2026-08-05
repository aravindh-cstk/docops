---
title: "[TypeScript] - TypeScript Delivery SDK - Migration Guide (V4 to V5)"
description: TypeScript Delivery SDK - Migration Guide (V4 to V5)
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/typescript/typescript-delivery-sdk-migrate-from-v4-to-v5
product: Contentstack
doc_type: migration-guide
audience:
  - developers
  - typescript-developers
version: v5
last_updated: 2026-03-25
---

# [TypeScript] - TypeScript Delivery SDK - Migration Guide (V4 to V5)

This page explains how to migrate from `@contentstack/delivery-sdk` v4.x to v5, focusing on breaking changes in cache persistence and the required update steps for projects using SDK caching.

## TypeScript Delivery SDK - Migration Guide (V4 to V5)

This guide explains how to migrate from `@contentstack/delivery-sdk` v4.x to v5, including breaking changes and required update steps.

## Do I Need to Migrate?
You need to update your code only if you use SDK caching with a policy other than **IGNORE_CACHE**.
- **No changes required if:**You never configured `cacheOptions`.
- You use `Policy.IGNORE_CACHE`.
- **Changes required if you use:**`CACHE_THEN_NETWORK`.
- `CACHE_ELSE_NETWORK`.
- `NETWORK_ELSE_CACHE`.

## Overview
**Version 5.0.0 of the TypeScript Delivery SDK changes how cache persistence is handled.**
- In **v4.x**, cache persistence was bundled directly into the SDK.
- In **v5**, cache persistence is **no longer included by default**.

Instead, the SDK now:
- Defines a **persistence contract**.
- Delegates cache storage to an **external persistence store**.

This design keeps the core SDK lightweight and gives you full control over where and how cached data is stored, such as:
- In memory.
- Browser storage (for example, `localStorage`).
- A custom backend.

Caching policies themselves remain unchanged from v4.x.

## What Changed in v5

| Area | v4.x | v5.x | Migration Required? |
|---|---|---|---|
| **Cache storage** | SDK could accept `storeType` (e.g. `'localStorage'`) in `cacheOptions` and bundle persistence logic. | SDK **does not** accept `storeType` in `cacheOptions`. You must pass a `persistenceStore` instance that implements the `PersistenceStore` interface. | Yes (if caching is used) |
| **Persistence implementation** | Persistence logic could be bundled inside the SDK. | Persistence is **external**: use `@contentstack/persistence-plugin` or implement the `PersistenceStore` interface yourself. | Yes (if caching is used) |
| **Cache policies** | Same policies: `IGNORE_CACHE`, `CACHE_THEN_NETWORK`, `CACHE_ELSE_NETWORK`, `NETWORK_ELSE_CACHE`. | Same. If you use any policy other than `IGNORE_CACHE` without `cacheOptions.persistenceStore`, the SDK **throws** at stack creation. | No |

All other SDK APIs (stack creation, content types, entries, assets, queries, regions, live preview, etc.) remain the same. Only the cache configuration is affected.

## Migration Steps

### Step 1: Upgrade the SDK

```
npm install @contentstack/delivery-sdk@5
```
Or with yarn:

```
yarn add @contentstack/delivery-sdk@5
```

### Step 2: Update Cache Configuration (Only If You Use Caching)

| **Your setup** | **Action** |
|---|---|
| You never configured `cacheOptions` | No changes required |
| You use `Policy.IGNORE_CACHE` | No changes required |
| You use any other cache policy such as `CACHE_THEN_NETWORK`, `CACHE_ELSE_NETWORK`, or `NETWORK_ELSE_CACHE` | Continue with the steps below |

If you use a cache policy other than `IGNORE_CACHE` without setting `cacheOptions.persistenceStore`, stack creation fails with:

**Error:** `Cache policy requires cacheOptions.persistenceStore (storage). Install @contentstack/persistence-plugin and pass a PersistenceStore instance and try again.`

**Fix:** Install `@contentstack/persistence-plugin`, create a `PersistenceStore` instance, and pass it as `cacheOptions.persistenceStore` as shown above.

### Step 3: Install the Persistence Plugin (Recommended)
Install the official persistence plugin so the SDK has a concrete store to use:

```
npm install @contentstack/persistence-plugin
```
Or with yarn:

```
yarn add @contentstack/persistence-plugin
```
**Note:**
- The official persistence plugin is designed primarily for browser environments (for example, using `localStorage`).
- If you are using the SDK in a Node.js or server environment, you must provide a custom `PersistenceStore` implementation.

### Step 4: Replace storeType with persistenceStore
**v4.x (no longer valid in v5):**

```
import contentstack, { Policy } from '@contentstack/delivery-sdk';

const stack = contentstack.stack({
  apiKey: 'your-api-key',
  deliveryToken: 'your-delivery-token',
  environment: 'your-environment',
  cacheOptions: {
    policy: Policy.CACHE_THEN_NETWORK,
    storeType: 'localStorage',  // ❌ Not supported in v5
    maxAge: 86400000,
  },
});
```
**v5.x (correct):**

```
import contentstack, { Policy } from '@contentstack/delivery-sdk';
import { PersistenceStore } from '@contentstack/persistence-plugin';

const stack = contentstack.stack({
  apiKey: 'your-api-key',
  deliveryToken: 'your-delivery-token',
  environment: 'your-environment',
  cacheOptions: {
    policy: Policy.CACHE_THEN_NETWORK,
    persistenceStore: new PersistenceStore({
      storeType: 'localStorage',
      maxAge: 86400000,
    }),
    maxAge: 86400000,
  },
});
```
**About **`**maxAge**`
- `PersistenceStore.maxAge` defines the default TTL behavior inside the store. `maxAge` is the TTL for cacheData.
- When writing entries, the SDK passes `cacheOptions.maxAge` to the persistence store.

If both values are provided:
- The persistence store implementation determines precedence as to how `maxAge` is applied.
- The SDK does not enforce TTL logic itself.

You can omit `cacheOptions.maxAge` if the persistence store handles expiration internally.

**Important Cache Configuration Rules**
- Remove `storeType` from `cacheOptions`; it is ignored in v5.
- When using any cache policy other than `IGNORE_CACHE`, always provide `cacheOptions.persistenceStore`.
- The SDK validates the cache configuration during stack creation and throws an error if the requirements are not met.

### Step 5: (Optional) Use a Custom Persistence Store
The SDK requires an object that implements the `PersistenceStore` interface exported from the SDK.

#### Behavior Requirements
- `setItem` and `getItem` must be synchronous.
- `getItem` must return `undefined` or `null` if no cached value exists.
- The persistence store must handle serialization and deserialization internally.
- Any errors thrown by the persistence store propagate to the SDK.

`**PersistenceStore**`** Interface**

```
interface PersistenceStore {
  setItem(key: string, value: any, contentTypeUid?: string, maxAge?: number): void;
  getItem(key: string, contentTypeUid?: string): any;
}
```
You can implement this interface yourself—for example, using an in-memory store, Redis, or any key-value store and pass it to `cacheOptions.persistenceStore` without installing a plugin.

**Example: In-Memory Persistence Store**

```
import contentstack, { Policy, PersistenceStore } from '@contentstack/delivery-sdk';

const memoryStore: PersistenceStore = {
  _cache: new Map(),
  setItem(key, value, _contentTypeUid?, _maxAge?) {
    this._cache.set(key, value);
  },
  getItem(key, _contentTypeUid?) {
    return this._cache.get(key);
  },
};

const stack = contentstack.stack({
  apiKey: 'your-api-key',
  deliveryToken: 'your-delivery-token',
  environment: 'your-environment',
  cacheOptions: {
    policy: Policy.CACHE_THEN_NETWORK,
    persistenceStore: memoryStore,
  },
});
```

## Scenarios at a Glance

### You don’t use cache options
No changes. Just upgrade to v5.

```
const stack = contentstack.stack({
  apiKey: 'your-api-key',
  deliveryToken: 'your-delivery-token',
  environment: 'your-environment',
});
```

### You use Policy.IGNORE_CACHE explicitly
No `persistenceStore` is required. No changes beyond upgrading.

### You use any other cache policy (e.g. CACHE_THEN_NETWORK)
- Install `@contentstack/persistence-plugin`.
- Create a `PersistenceStore` instance (e.g. `new PersistenceStore({ storeType: 'localStorage', maxAge: 86400000 })`).
- Set `cacheOptions.persistenceStore` to that instance.
- Remove `storeType` from `cacheOptions`.

If you don’t provide `persistenceStore`, the SDK throws at stack creation with a message directing you to install the persistence plugin and pass a `PersistenceStore` instance.

## Troubleshooting and Common Errors

### Stack creation fails when you use caching without persistence
**Symptom**

When you use a cache policy other than `IGNORE_CACHE` and do not set `cacheOptions.persistenceStore`, stack creation fails with the following error:

**Cause**

The SDK requires a persistence store whenever you use any cache policy other than `IGNORE_CACHE`.

**Resolution**
- Install `@contentstack/persistence-plugin` (or provide your own `PersistenceStore` implementation).
- Create a `PersistenceStore` instance (for example, `new PersistenceStore({ storeType: 'localStorage', maxAge: 86400000 })`).
- Set `cacheOptions.persistenceStore` to that instance when creating the stack.
- Remove any `storeType` property from `cacheOptions` itself.

## Checklist

### Upgrade checklist
Use this list to confirm you have completed the migration steps:
- Upgraded to `@contentstack/delivery-sdk@5`.
- If you use caching (any policy other than `IGNORE_CACHE`):Installed `@contentstack/persistence-plugin` (or implement `PersistenceStore` yourself).
- Replaced `storeType` in `cacheOptions` with `persistenceStore: new PersistenceStore({ ... })` (or your custom store).
- Ensured `cacheOptions.persistenceStore` is set when you use `CACHE_THEN_NETWORK`, `CACHE_ELSE_NETWORK`, or `NETWORK_ELSE_CACHE`.
- Ran your tests and verify content fetching and caching behavior.
- Updated any internal docs or runbooks that reference v4 cache configuration.

### Validation
Use these checks to validate that your migration is successful:
- Run your tests.**Expected result:** No failures related to stack initialization or content fetching.
- Verify content fetching and caching behavior.**Expected result:**The stack initializes without cache configuration errors.
- Cached responses are returned according to the selected policy.
- Cached data persists across refresh or restart (if you use a persistent store such as `localStorage`).

## Rollback (If Needed)
If you need to revert to v4.x:
- Downgrade to the last known working `@contentstack/delivery-sdk` v4 version.
- Revert `cacheOptions` to the v4 format (for example, restore `storeType` and remove `persistenceStore`).
- Re-run your tests to confirm stack initialization and caching behavior match your previous setup.

## Summary
- v5 keeps the same API for stacks, content types, entries, assets, and queries. Only the cache configuration changes.
- Cache persistence is now external: use `@contentstack/persistence-plugin` and `cacheOptions.persistenceStore`, or provide your own `PersistenceStore` implementation.
- Remove `storeType` from `cacheOptions`; the SDK no longer bundles or accepts it. Follow this guide to move from v4.x to v5 without breaking caching in your app.

For more on the persistence plugin (options like `storeType`, `maxAge`, custom storage), see [@contentstack/persistence-plugin](https://www.npmjs.com/package/@contentstack/persistence-plugin).

## Common questions

### Do I need to migrate if I never configured `cacheOptions`?
No changes required if:You never configured `cacheOptions`.

### What happens if I use `CACHE_THEN_NETWORK` without `cacheOptions.persistenceStore` in v5?
Stack creation fails with: `Cache policy requires cacheOptions.persistenceStore (storage). Install @contentstack/persistence-plugin and pass a PersistenceStore instance and try again.`

### Can I use the official persistence plugin in Node.js?
The official persistence plugin is designed primarily for browser environments (for example, using `localStorage`). If you are using the SDK in a Node.js or server environment, you must provide a custom `PersistenceStore` implementation.

### What should I replace `storeType` with in v5?
Replace `storeType` in `cacheOptions` with `persistenceStore: new PersistenceStore({ ... })` (or your custom store).