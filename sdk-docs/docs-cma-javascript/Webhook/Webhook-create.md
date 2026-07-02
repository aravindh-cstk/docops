---
title: "create"
description: "The Create a webhook request allows you to create a new webhook in a specific stack."
url: "https://www.contentstack.com/js-management-webhook-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create a webhook request allows you to create a new webhook in a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.webhook | object | No | — | The webhook details including name, destinations, channels, and retry policy. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const webhook = {
name: 'Test',
destinations: [{
  target_url: 'http://example.com',
  http_basic_auth: 'basic',
  http_basic_password: 'test',
  custom_header: [{
    header_name: 'Custom',
    value: 'testing'
  }]
}],
 channels: [
   'assets.create'
 ],
 retry_policy: 'manual',
 disabled: false
}

client.stack({ api_key: 'api_key'}).webhook()
.create({ webhook })
.then((webhook) => console.log(webhook))
```
