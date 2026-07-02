---
title: "share"
description: "The Share a stack call shares a stack with the specified user to collaborate on the stack."
url: "https://www.contentstack.com/js-management-stack-share"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## share

The Share a stack call shares a stack with the specified user to collaborate on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | Array<string> | Yes | — | Email id to unshare stack. |
| roles | Array<object> | Yes | — | Email and role to assign to the user. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).share([ "manager@example.com" ], { "manager@example.com": [ "abcdefhgi1234567890" ] })
.then((response) => console.log(response.notice))
```
