---
title: "setRegion()"
description: "The `setRegion` method sets the database region for your stack. You can choose from seven regions: NA, AU, EU, Azure NA, Azure EU, GCP NA, and GCP EU."
url: "https://www.contentstack.com/android-config-setregion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setRegion()

The `setRegion` method sets the database region for your stack. You can choose from seven regions: NA, AU, EU, Azure NA, Azure EU, GCP NA, and GCP EU.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| region | ContentstackRegion | Yes | ContentstackRegion. US | You can choose from seven regions namely, NA, EU, AU, Azure NA, Azure EU, GCP NA, and GCP EU. |

Returns:
Type
ContentstackRegion

```
import com.contentstack.sdk.*;
Config config = new Config();
config.setRegion(ContentstackRegion.EU);
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
