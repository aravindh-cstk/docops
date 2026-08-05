---
title: "getTasks"
description: "The Get all Tasks request retrieves a list of all tasks assigned to you."
url: "https://www.contentstack.com/js-management-user-gettasks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getTasks

The Get all Tasks request retrieves a list of all tasks assigned to you.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.query | Object | No | — | Enter the actual query that will be executed to retrieve the tasks. This query should be in JSON format. |
| param.sort | Object | No | — | Enter the field UID on the basis of which you want to sort your tasks. |
| param.limit | number | No | — | Enter the maximum number of tasks that you want to retrieve in the response. |
| param.skip | number | No | — | Enter the number of tasks to be skipped. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.getUser()
.then((user) => {
    return user.getTasks()
})
.then((response) => {

})
```
