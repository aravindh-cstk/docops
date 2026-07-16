---
title: "Region"
description: "By default, the SDK uses the North American region. Configuration changes are not required for North American region users."
url: "https://www.contentstack.com/python-management-contentstack-region"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Region

By default, the SDK uses the North American region. Configuration changes are not required for North American region users.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| region | Region | No | — | DB region for Stack. You can choose from seven regions namely, AWS NA, AWS EU, AWS AU, Azure NA, Azure EU, GCP NA and GCP EU. The default region is set to NA. |

Returns:
Type
Client

```
import contentstack_management
client = contentstack_management.Client(region="eu")
```
