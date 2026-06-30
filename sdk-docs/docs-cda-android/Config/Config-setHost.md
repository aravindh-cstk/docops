---
title: "setHost()"
description: "The `setHost` method sets a custom host for the request URL to direct API calls to a specified endpoint."
url: "https://www.contentstack.com/android-config-sethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setHost()

The `setHost` method sets a custom host for the request URL to direct API calls to a specified endpoint.

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
Stack stack = Contentstack.stack(<span>context,</span>"apiKey", "deliveryToken", "environment", config);
```
