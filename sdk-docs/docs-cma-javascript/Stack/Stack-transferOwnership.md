---
title: "transferOwnership"
description: "The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack."
url: "https://www.contentstack.com/js-management-stack-transferownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## transferOwnership

The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | The email address of the user to whom you wish to transfer the ownership of the stack. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).transferOwnership('emailId')
.then((response) => console.log(response.notice))
```
