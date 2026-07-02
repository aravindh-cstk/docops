---
title: "workflow"
description: "Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly."
url: "https://www.contentstack.com/js-management-stack-workflow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## workflow

Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for workflow to perform operation on. |

Returns:
Type
workflow

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow()
// OR
client.stack({ api_key: 'api_key'}).workflow('uid')
```
