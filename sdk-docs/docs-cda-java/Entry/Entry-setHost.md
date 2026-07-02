---
title: "setHost()"
description: "Set custom host of the request url"
url: "https://www.contentstack.com/java-config-sethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setHost()

Set custom host of the request url

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| hostname | String | Yes | — | The host |

Returns:
Type
String

```
import com.contentstack.sdk.*;

Config config = new Config();
config.sethost(hostname);
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
