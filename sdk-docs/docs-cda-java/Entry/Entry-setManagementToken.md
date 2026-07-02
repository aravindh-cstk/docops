---
title: "setManagementToken()"
description: "Adds Management Token to the stack header"
url: "https://www.contentstack.com/java-config-setmanagementtoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setManagementToken()

Adds Management Token to the stack header

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| managementToken | String | Yes | — | The Management Token |

Returns:
Type
Config

```
import com.contentstack.sdk.*;

Config config = new Config();
config.setManagementToken(managementToken);
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
