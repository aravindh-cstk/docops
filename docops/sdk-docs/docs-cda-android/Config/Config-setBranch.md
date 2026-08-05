---
title: "setBranch"
description: "The `setBranch` method sets the target branch for the stack to retrieve content from a specific development or release branch."
url: "https://www.contentstack.com/android-config-setbranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setBranch

The `setBranch` method sets the target branch for the stack to retrieve content from a specific development or release branch.

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
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment", config);
```
