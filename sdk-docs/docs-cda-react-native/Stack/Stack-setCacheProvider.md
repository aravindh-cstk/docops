---
title: "setCacheProvider"
description: "Sets the Cache Provider's get and set methods used in SDK to cache data."
url: "https://www.contentstack.com/set-cacheprovider"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setCacheProvider

Sets the Cache Provider's get and set methods used in SDK to cache data.

No parameters.

Returns:
Type
Stack

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.setCacheProvider({
  get: function (key, callback) {
    try {
        callback(null, <cache_provider>.get(key));
    } catch(e) {
        callback(e);
    }
  },
  set: function (key, value, callback) {
    try {
        if(key && value) <cache_provider>.set(key, value);
        callback();
    } catch(e) {
        callback(e);
    }
  }
});
```
