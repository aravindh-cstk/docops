---
title: "App"
description: "App/Manifest is used for creating/updating/deleting an app in your organization. Example: Marketplace marketplace = new Marketplace.Builder(\"ORGANIZATION_UID\").host(\"marketplace.contentstack.io\").build(); App app = marketplace.app(\"installationId\"); (or) App app = marketplace.app();"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/java/reference/app"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# App

## App

App/Manifest is used for creating/updating/deleting an app in your organization.

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID").host("marketplace.contentstack.io").build(); 
App app = marketplace.app("installationId"); 
(or) App app = marketplace.app();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organizationUid | String | Yes | — | UID of the organization |
| installationId | String | No | — | UID of the app |
