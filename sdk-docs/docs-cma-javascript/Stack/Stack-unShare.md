---
title: "unShare"
description: "The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators."
url: "https://www.contentstack.com/js-management-stack-unshare"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## unShare

The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | Email id to unshare stack. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).unShare('email@id.com')
.then((response) => console.log(response.notice))
```
