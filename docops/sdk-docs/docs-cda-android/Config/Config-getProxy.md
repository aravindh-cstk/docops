---
title: "getProxy"
description: "The `getProxy` method retrieves the current proxy instance configured for routing network requests."
url: "https://www.contentstack.com/android-config-getproxy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getProxy

The `getProxy` method retrieves the current proxy instance configured for routing network requests.

No parameters.

Returns:
Type
ConnectionPool

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getProxy();
Stack stack = Contentstack.stack(<span>context,</span>"apiKey", "deliveryToken", "environment", config);
```
