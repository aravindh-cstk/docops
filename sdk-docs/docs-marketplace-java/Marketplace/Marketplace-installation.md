---
title: "installation"
description: "The installation method retrieves a new instance of the Installation class with the specified client and orgId."
url: "https://www.contentstack.com/java-marketplace-installations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## installation

The installation method retrieves a new instance of the Installation class with the specified client and orgId.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| installationId | String | No | — | UID to create a new installation object. |

Returns:
Type
Installation

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Auth authorizations = marketplace.installation();
```
