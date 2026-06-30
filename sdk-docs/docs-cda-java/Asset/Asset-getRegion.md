---
title: "getRegion"
description: "Get Region of the request url"
url: "https://www.contentstack.com/java-config-getregion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getRegion

Get Region of the request url

No parameters.

Returns:
Type
ContentstackRegion

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getRegion();
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
