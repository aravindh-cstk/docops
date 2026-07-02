---
title: "Get all variant group (For Stack and ContentType)"
description: "The Get all variant groups method allows you to retrieve details for all or specific variant groups."
url: "https://www.contentstack.com/js-management-variant-group-get-all-variant-group"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get all variant group (For Stack and ContentType)

The Get all variant groups method allows you to retrieve details for all or specific variant groups.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.query | object | Yes | — | Queries to retrieve filtered results |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client
    .stack({ api_key: 'api_key'})
    .variantGroup()
    .query()
    .find()
    .then((response) => console.log(response))
```
