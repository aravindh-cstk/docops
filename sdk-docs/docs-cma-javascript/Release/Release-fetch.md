---
title: "fetch"
description: "The fetch Release call fetches Release details."
url: "https://www.contentstack.com/js-management-release-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch Release call fetches Release details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release('release_uid')
.fetch()
.then((release) => console.log(release))
```
