---
title: "findAllAuthorizedApps"
description: "The findAllAuthorizedApps method retrieves all the authorized apps for the organization."
url: "https://www.contentstack.com/javascript-marketplace-findallauthorizedapps"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findAllAuthorizedApps

The `findAllAuthorizedApps` method retrieves all the authorized apps for the organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skip | number | No | — | Offset for skipping content in response |
| limit | number | No | — | Limit on API response to provide content in the list |

Returns:
Type
roles

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client();
client.marketplace('organization_uid').findAllAuthorizedApps({ skip: 10 })
.then((roles) => console.log(roles));
```
