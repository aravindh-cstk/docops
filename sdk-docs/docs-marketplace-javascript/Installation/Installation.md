---
title: "Installation"
description: "The installation class defined the installation related queries for the marketplace. Example: import * as contentstack from '@contentstack/marketplace-sdk' const client = contentstack.client({ authtoken: 'TOKEN'}); client.marketplace('organization_uid').installation();"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/javascript/reference/installation"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Installation

## Installation

The installation class defined the installation related queries for the marketplace.

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').installation();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| installationUid | String | No | — | The UID of installation |
