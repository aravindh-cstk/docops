---
title: "fetch"
description: "The fetch Entry call fetches Entry details."
url: "https://www.contentstack.com/js-management-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch Entry call fetches Entry details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.version | number | No | — | Enter the version number of the entry that you want to retrieve. However, to retrieve a specific version of an entry, you need to keep the environment parameter blank. |
| params.locale | string | No | — | Enter the code of the language of which the entries need to be included. Only the entries published in this locale will be displayed. |
| params.include_workflow | boolean | Yes | — | Enter 'true' to include the workflow details of the entry. |
| params.include_publish_details | string | No | — | Enter 'true' to include the publish details of the entry. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.fetch()
.then((entry) => console.log(entry))
```
