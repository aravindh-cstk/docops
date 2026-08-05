---
title: "setLivePreviewHost()"
description: "Sets Host to the Live Preview request url"
url: "https://www.contentstack.com/java-config-setlivepreviewhost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setLivePreviewHost()

Sets Host to the Live Preview request url

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| livePreviewHost | String | Yes | — | Host for Live Preview |

Returns:
Type
Config

```
import com.contentstack.sdk.*;

Config config = new Config();
config.setLivePreviewHost(host);
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
