---
title: "App"
description: "App/Manifest is used for creating/updating/deleting an app in your organization. Example: import * as contentstack from '@contentstack/marketplace-sdk' const app = client.marketplace('organization_uid').app('manifest_uid');"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/javascript/reference/app"
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
import * as contentstack from '@contentstack/marketplace-sdk'
const app = client.marketplace('organization_uid').app('manifest_uid');
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| manifest_uid | String | Yes | — | UID of the manifest |
