---
title: "role"
description: "A role is a collection of permissions that will be applicable to all the users who are assigned this role."
url: "https://www.contentstack.com/js-management-stack-role"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## role

A role is a collection of permissions that will be applicable to all the users who are assigned this role.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| role_uid | string | No | — | Role uid for initiating role class |

Returns:
Type
Role

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).role()
//or
<span>client.stack({ api_key: 'api_key'}).role('role_uid')</span>
```
