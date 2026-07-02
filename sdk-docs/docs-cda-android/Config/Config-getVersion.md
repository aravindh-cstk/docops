---
title: "getVersion()"
description: "The getVersion method retrieves the version of the request path."
url: "https://www.contentstack.com/android-config-getversion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getVersion()

The `getVersion` method retrieves the version of the request path.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getVersion();
Stack stack = Contentstack.stack(<span>context,</span>"apiKey", "deliveryToken", "environment", config);
```
