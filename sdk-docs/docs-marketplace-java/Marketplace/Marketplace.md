---
title: "Marketplace"
description: "Contentstack Marketplace is a hub for apps and other resources that help you extend the capabilities of our core CMS and customize its functionalities. It houses third-party integrations, UI extensions (such as dashboard, sidebar, custom field, and RTE plugins), and other tools that you can plug into Contentstack at the stack as well as organizational level. Example: Marketplace marketplace = new Marketplace.Builder(\"ORGANIZATION_UID\").host(\"marketplace.contentstack.io\").region(Region.EU).build();"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/java/reference/marketplace"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Marketplace

## Marketplace

Contentstack [Marketplace](/docs/developers/marketplace-platform-guides/about-marketplace/) is a hub for apps and other resources that help you extend the capabilities of our core CMS and customize its functionalities. It houses third-party integrations, UI extensions (such as dashboard, sidebar, custom field, and RTE plugins), and other tools that you can plug into Contentstack at the stack as well as organizational level.

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID").host("marketplace.contentstack.io").region(Region.EU).build();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organizationUid | String | Yes | — | UID of the org |
| host | String | No | — | A custom host |
| region | Region.EU | No | — | DB region for Stack. You can choose from five regions namely, NA, EU, Azure NA, Azure EU, and GCP NA. The default region is set to NA. |
