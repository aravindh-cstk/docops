---
title: "enableLivePreview()"
description: "Enables Live Preview"
url: "https://www.contentstack.com/android-config-enablelivepreview"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## enableLivePreview()

Enables Live Preview

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | Boolean | Yes | False | Provide true to enable the Live Preview |

Returns:
Type
Config

```
import com.contentstack.sdk.*;

Config config = new Config()
config.enableLivePreview(true)
Stack stack = Contentstack.stack(context,"apiKey", "deliveryToken", "environment", config);
```
