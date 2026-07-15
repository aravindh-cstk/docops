---
title: "webhook"
description: "The webhook method creates and returns a new Webhook object with the given parameters."
url: "https://www.contentstack.com/java-marketplace-installation-webhook"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## webhook

The webhook method creates and returns a new Webhook object with the given parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| webhookId | String | Yes | — | UID of the webhook |

Returns:
Type
Webhook

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Installation installation = marketplace.installation(); 
JSONObject body = new JSONObject(); 
Call result = installation.webhook("webhookId").execute();
```
