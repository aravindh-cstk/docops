---
title: "fetch"
description: "The fetch Organization call fetches Organization details."
url: "https://www.contentstack.com/js-management-organization-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch Organization call fetches Organization details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.include_plan | number | No | — | The include_plan parameter includes the details of the plan that the organization has subscribed to. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').fetch()
.then((organization) => console.log(organization))
```
