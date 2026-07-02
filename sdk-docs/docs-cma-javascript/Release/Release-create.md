---
title: "create"
description: "The Create a Release request allows you to create a new Release in your stack. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body."
url: "https://www.contentstack.com/js-management-release-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create a Release request allows you to create a new Release in your stack. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.release | object | No | — | Release details. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const release = {
       name: "Release Name",
       description: "2018-12-12",
       locked: false,
       archived: false
}

client.stack({ api_key: 'api_key'}).release().create({ release })
.then((release) => console.log(release))
```
