---
title: "publish"
description: "The publish method initiates a job to publish a taxonomy and/or specific taxonomy terms to the specified environments and locales."
url: "https://www.contentstack.com/js-management-taxonomy-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The `publish` method initiates a job to publish a taxonomy and/or specific taxonomy terms to the specified environments and locales.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| api_version | string | No | — | Pass "3.2" to enable enhanced logic for the publish taxonomy operation. |
| details | object | No | — | Specifies publish details (locales, environments, and items such as entries/assets). |

Returns:
Type
Promise<Object>

**Note:** Taxonomy publishing is supported only with `api_version: "3.2"`. If `api_version` is omitted, taxonomy publishing is not available.

**Example**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
const publishData = {
  locales: ['en-us'],
  environments: ['development'],
  items: [
    { uid: 'taxonomy_testing', term_uid: 'vehicles' },
    { uid: 'taxonomy_testing', term_uid: 'cars' }
  ]
}

client.stack({ api_key: 'api_key' })
  .taxonomy('taxonomy_testing')
  .publish(publishData, '3.2')
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
```

**Publish Payload Behavior**

- `uid` refers to the UID of the taxonomy.
- `term_uid` refers to the UID of a specific term within that taxonomy.
- If only `uid` is provided, the entire taxonomy is published.
- If both `uid` and `term_uid` are provided, only the specified term is published.
- You can include a mix of taxonomy-only (`uid`) and taxonomy-term (`uid` + `term_uid`) objects within the same `items` array.
