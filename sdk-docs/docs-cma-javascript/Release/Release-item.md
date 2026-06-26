---
title: "item"
description: "A ReleaseItem is a set of entries and assets that needs to be deployed (published or unpublished) all at once to a particular environment."
url: "https://www.contentstack.com/js-management-release-item"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## item

A ReleaseItem is a set of entries and assets that needs to be deployed (published or unpublished) all at once to a particular environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.environments | array | Yes | — | The environment(s) on which the Release should be deployed. |

Returns:
Type
ReleaseItem

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release('release_uid').item()
.fetchAll()
.then((items) => console.log(items))
```
