---
title: "settings"
description: "The Get stack settings call retrieves the configuration settings of an existing stack."
url: "https://www.contentstack.com/js-management-stack-settings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## settings

The Get stack settings call retrieves the configuration settings of an existing stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).settings()
.then((settings) => console.log(settings))
```
