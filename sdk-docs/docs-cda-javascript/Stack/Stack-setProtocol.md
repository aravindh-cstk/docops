---
title: "setProtocol"
description: "Sets the protocol for the host"
url: "https://www.contentstack.com/set-protocol"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setProtocol

Sets the protocol for the host

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| protocol | string | No | — | Web Protocol for request (http or https) |

Returns:
Type
Stack

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
Stack.setProtocol('https');
```
