---
title: "hosting"
description: "The hosting method retrieves an instance of hosting."
url: "https://www.contentstack.com/java-marketplace-app-hosting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## hosting

The hosting method retrieves  an instance of hosting.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| id | String | No | — | The UID of the app |

Returns:
Type
hosting

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Hosting hosting = marketplace.app().hosting("appId");
```
