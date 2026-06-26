---
title: "getProxy"
description: "Returns the Proxy instance"
url: "https://www.contentstack.com/java-config-getproxy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getProxy

Returns the Proxy instance

No parameters.

Returns:
Type
ConnectionPool

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getProxy();
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
