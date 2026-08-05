---
title: "environment"
description: "Environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published."
url: "https://www.contentstack.com/js-management-stack-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## environment

Environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for environment to perform operation on. |

Returns:
Type
Environment

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).environment()
// OR
client.stack({ api_key: 'api_key'}).environment('uid')
```
