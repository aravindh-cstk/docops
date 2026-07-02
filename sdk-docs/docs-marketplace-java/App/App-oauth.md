---
title: "oauth"
description: "The oauth method retrieves an instance of oauth"
url: "https://www.contentstack.com/java-marketplace-app-oauth"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## oauth

The oauth method retrieves  an instance of oauth

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| id | String | No | — | The UID of the app |

Returns:
Type
oauth

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Oauth oauth = marketplace.app().oauth("id");
```
