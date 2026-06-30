---
title: "getHost()"
description: "The `getHost` method retrieves the host associated with the request URL."
url: "https://www.contentstack.com/android-config-gethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getHost()

The `getHost` method retrieves the host associated with the request URL.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getHost();
Stack stack = Contentstack.stack(<span>context,</span>"apiKey", "deliveryToken", "environment", config);
```
