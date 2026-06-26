---
title: "Store Object"
description: "The `Store` object provides methods to manage key-value data storage within the app environment. This enables apps to persist and retrieve data across sessions without relying on external storage or manual state management. The following section explains the different methods available in the `store` object. get(key) The `get()` method retrieves stored data by key. const value = await store.get('userPreferences'); set(key, value) The `set()` method sets data for a specified key. await store.set('userPreferences', { theme: 'dark' }); getAll() The `getAll()` method retrieves all stored data. const allData = await store.getAll(); remove(key) The `remove()` method removes stored data by key. await store.remove('userPreferences'); clear() The `clear()` method clears all stored data. await store.clear();"
url: "https://www.contentstack.com/appsdk-core-objects-store"
product: "Contentstack"
doc_type: "guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Store Object

The `Store` object provides methods to manage key-value data storage within the app environment. This enables apps to persist and retrieve data across sessions without relying on external storage or manual state management.

The following section explains the different methods available in the `store` object.

#### get(key)

The `get()` method retrieves stored data by key.

```
const value = await store.get('userPreferences');
```

#### set(key, value)

The `set()` method sets data for a specified key.

```
await store.set('userPreferences', { theme: 'dark' });
```

#### getAll()

The `getAll()` method retrieves all stored data.

```
const allData = await store.getAll();
```

#### remove(key)

The `remove()` method removes stored data by key.

```
await store.remove('userPreferences');
```

#### clear()

The `clear()` method clears all stored data.

```
await store.clear();
```
