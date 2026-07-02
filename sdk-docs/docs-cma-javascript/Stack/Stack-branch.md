---
title: "branch"
description: "Branch corresponds to Stack branch."
url: "https://www.contentstack.com/js-management-stack-branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## branch

Branch corresponds to Stack branch.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for branch alias to perform operation on. |

Returns:
Type
Branch

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).branch()
// OR
client.stack({ api_key: 'api_key'}).branch('uid')
```
