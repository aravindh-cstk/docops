---
title: "download"
description: "The Download function will get downloadable file in specified format."
url: "https://www.contentstack.com/js-management-asset-download"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## download

The Download function will get downloadable file in specified format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.url | string | No | — | The url for the asset to download |
| param.responseType | string | No | — | Optional parameter to specify the response type. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).asset('uid')
.fetch()
.then((asset) => asset.download({responseType: 'blob'}))
.then((response) => // Write response data to destination file. )
```

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset()
.download({url: 'asset_url_to_download', responseType: 'blob'})
.then((response) => // Write response data to destination file. )
```
