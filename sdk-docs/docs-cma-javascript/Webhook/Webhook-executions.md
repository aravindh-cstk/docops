---
title: "executions"
description: "The Get executions of a webhook call will provide the execution details of a specific webhook, which includes the execution UID."
url: "https://www.contentstack.com/js-management-webhook-executions"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## executions

The Get executions of a webhook call will provide the execution details of a specific webhook, which includes the execution UID.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).webhook('webhook_uid')
.executions()
.then((webhook) => console.log(webhook))
```
