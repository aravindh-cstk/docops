---
title: "Marketplace"
description: "Contentstack Marketplace is a hub for apps and other resources that help you extend the capabilities of our core CMS and customize its functionalities. It houses third-party integrations, UI extensions (such as dashboard, sidebar, custom field, and RTE plugins), and other tools that you can plug into Contentstack at the stack as well as organizational level. Example: import \\* as contentstack from '@contentstack/marketplace-sdk' client.marketplace('organization\\_uid');"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/javascript/reference/marketplace"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Marketplace

## Marketplace

Contentstack [Marketplace](/docs/developers/marketplace-platform-guides/about-marketplace/) is a hub for apps and other resources that help you extend the capabilities of our core CMS and customize its functionalities. It houses third-party integrations, UI extensions (such as dashboard, sidebar, custom field, and RTE plugins), and other tools that you can plug into Contentstack at the stack as well as organizational level.

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
client.marketplace('organization_uid');
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| org_uid | String | Yes | - | UID of the organization |
