---
title: "getRegion"
description: "The getRegion method retrieves the region associated with the request URL."
url: "https://www.contentstack.com/android-config-getregion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getRegion

The `getRegion` method retrieves the region associated with the request URL.

No parameters.

Returns:
Type
ContentstackRegion

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getRegion();
Stack stack = Contentstack.stack(<span>context,</span>"apiKey", "deliveryToken", "environment", config);
```
