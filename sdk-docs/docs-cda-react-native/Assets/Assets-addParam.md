---
title: "addParam"
description: ""
url: "https://www.contentstack.com/add-param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | No | — | URL Parameter key. |
| value | String | No | — | Value corresponding to the param. |

Returns:
Type
Assets

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.Assets('asset_uid').addParam('include_dimension', 'true').toJSON().fetch();
```
