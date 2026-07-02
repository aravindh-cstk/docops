---
title: "stack"
description: "The stack method provides access to the stack of your site, allowing users to retrieve and manage content within a single space."
url: "https://www.contentstack.com/android-contentstack-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## stack

The `stack` method provides access to the stack of your site, allowing users to retrieve and manage content within a single space.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| context | ApplicationContext | Yes | — | The application context |
| apiKey | String | Yes | — | API Key of your application on Contentstack |
| deliveryToken | String | Yes | — | Delivery Tokens retrieves only the published entries of the environment with which it is associated |
| environment | String | Yes | — | A publishing environment refers to one or more deployment servers or a content delivery destination (Webpage’s address) where you will publish your content ( entries or assets ). |
| config | Config | No | — | Config instance to set environment and other configuration details. |

Returns:
Type
Stack

```
import com.contentstack.sdk.*;
 
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment");
```

**Example with Config:**

****

```
import com.contentstack.sdk.*; 

Config config = new Config().setHost("api.contentstack.io");
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment");
```
