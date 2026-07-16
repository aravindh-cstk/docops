---
title: "setBranch"
description: "Set branch for on the stack"
url: "https://www.contentstack.com/java-config-setbranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setBranch

Set branch for on the stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branch | String | Yes | — | branch you want to set |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Config config = new Config();
config.setBranch("branchName");
Stack stack = Contentstack.stack(apiKey, deliveryToken, environment, config);
```
