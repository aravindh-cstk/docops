---
title: "app"
description: "The app method creates and retrieves a new instance of the App class with the given parameters."
url: "https://www.contentstack.com/java-marketplace-app"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## app

The app method creates and retrieves a new instance of the App class with the given parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | String | No | — | UID of the app |

Returns:
Type
App

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
App app = marketplace.app("app_uid");
```
