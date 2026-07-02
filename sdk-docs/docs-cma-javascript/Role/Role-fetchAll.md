---
title: "fetchAll"
description: "The ‘Get all roles’ request returns comprehensive information about all roles created in a stack."
url: "https://www.contentstack.com/js-management-role-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll

The ‘Get all roles’ request returns comprehensive information about all roles created in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.include_count | boolean | No | — | The ` include_count’ parameter includes the count of total number of role in your stack, along with the details of each role. |
| params.include_permissions | boolean | No | — | Set this parameter to 'true' to include the details of the permissions assigned to a particular role. |
| params.limit | number | No | — | The ‘limit’ parameter will return a specific number of role in the output. |
| params.skip | number | No | — | The ‘skip’ parameter will skip a specific number of role in the response. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).role()
.fetchAll()
.then((role) => console.log(role))
```
