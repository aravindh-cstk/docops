---
title: "stack"
description: "Get Stack instance. A stack is a space that stores the content of a project."
url: "https://www.contentstack.com/js-management-contentstackclient-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## stack

Get Stack instance. A stack is a space that stores the content of a project.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| api_key | string | Yes | — | Stack API Key |
| management_token | string | No | — | Management token for Stack. |
| branch_uid | string | No | — | Branch name or alias to access specific branch. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'

const client = contentstack.client()
const stack = {name: 'My New Stack'}

client.stack().create({ stack }, { organization_uid: 'org_uid' })
.then((stack) =>{

})
```

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).fetch()
.then((stack) => {

})
```

```
import * as contentstack from '@contentstack/management'

const client = contentstack.client()
client.stack({ api_key: 'api_key', management_token: 'management_token'
})
.contentType('content_type_uid')
.fetch()
.then((stack) => console.log(stack))
```

```
import * as contentstack from '@contentstack/management'

const client = contentstack.client()
client.stack({ api_key: 'api_key', management_token: 'management_token', branch_uid: 'branch_uid' })
.contentType('content_type_uid').fetch()
.then((stack) => {

})
```
