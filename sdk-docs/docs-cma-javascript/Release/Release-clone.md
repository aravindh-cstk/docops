---
title: "clone"
description: "The Clone a Release request allows you to clone (make a copy of) a specific Release in a stack."
url: "https://www.contentstack.com/js-management-release-clone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## clone

The Clone a Release request allows you to clone (make a copy of) a specific Release in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.name | string | Yes | — | The n ame of the cloned Release. |
| params.description | string | No | — | description of the cloned Release. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release('release_uid')
.clone({ name: 'New Name', description: 'New Description'})
.then((release) => console.log(release))
```
