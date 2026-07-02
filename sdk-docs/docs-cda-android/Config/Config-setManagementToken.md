---
title: "setManagementToken()"
description: "The setManagementToken method adds the management token to the stack header to authorize content management operations."
url: "https://www.contentstack.com/android-config-setmanagementtoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setManagementToken()

The `setManagementToken` method adds the management token to the stack header to authorize content management operations.

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
Stack stack = Contentstack.stack(<span>context,</span>"apiKey", "deliveryToken", "environment", config);
```
