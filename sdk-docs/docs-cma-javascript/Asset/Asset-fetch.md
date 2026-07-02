---
title: "fetch"
description: "The fetch an asset call returns comprehensive information about a specific version of an asset of a stack."
url: "https://www.contentstack.com/js-management-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch an asset call returns comprehensive information about a specific version of an asset of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.version | number | No | — | Enter the version number of the asset that you want to retrieve. However, to retrieve a specific version of an entry, you need to keep the environment parameter blank. |
| params.include_publish_details | string | No | — | Enter 'true' to include the publish details of the entry. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset('uid')
.fetch()
.then((asset) => console.log(asset))
```
