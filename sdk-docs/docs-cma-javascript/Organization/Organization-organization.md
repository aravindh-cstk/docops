---
title: "organization"
description: "Organization is the top-level entity in the hierarchy of Contentstack, consisting of stacks and stack resources, and users."
url: "https://www.contentstack.com/js-management-contentstackclient-organization"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## organization

Organization is the top-level entity in the hierarchy of Contentstack, consisting of stacks and stack resources, and users.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Organization UID. |

Returns:
Type
Organization

```
import * as contentstack from '@contentstack/management'

const client = contentstack.client()
client.organization().findAll()
.then((organization) => {

})
```

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.organization('org_uid').fetch()
.then((organization) => {

})
```
