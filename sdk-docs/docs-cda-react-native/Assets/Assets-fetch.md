---
title: "fetch"
description: "Fetches a particular asset based on the provided asset UID."
url: "https://www.contentstack.com/asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

Fetches a particular asset based on the provided asset UID.

No parameters.

Returns:
Type
Promise

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.Assets('asset_uid').addParam('include_dimension', 'true').toJSON().fetch();
```
