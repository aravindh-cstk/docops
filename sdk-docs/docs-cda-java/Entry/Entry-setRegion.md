---
title: "setRegion()"
description: "Sets Region of the database"
url: "https://www.contentstack.com/java-config-setregion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setRegion()

Sets Region of the database

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| region | ContentstackRegion | Yes | ContentstackRegion. US | DB region for your stack. You can choose from six regions namely, NA, EU, Azure NA, Azure EU, GCP NA, and GCP EU. |

Returns:
Type
ContentstackRegion

```
import com.contentstack.sdk.*;
Config config = new Config();
config.setRegion(ContentstackRegion.EU);
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
