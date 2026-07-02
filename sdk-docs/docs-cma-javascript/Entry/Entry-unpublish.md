---
title: "unpublish"
description: "The unpublish call is used to unpublish a specific version of an entry on the desired environment either immediately or at a later date/time."
url: "https://www.contentstack.com/js-management-entry-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## unpublish

The unpublish call is used to unpublish a specific version of an entry on the desired environment either immediately or at a later date/time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.publishDetails | object | Yes | — | Details of entry to be unpublished. |
| params.locale | string | No | — | Enter the code of the locale that the entry belongs to. |
| params.version | number | No | — | Entry version to be publish |
| params.scheduledAt | string | No | — | Schedule date for publishing entry. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const entry = {
 "locales": [
             "en-us"
             ],
  "environments": [
               "development"
              ]
}
client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.unpublish({ publishDetails: entry, locale: "en-us", version: 1, scheduledAt: "2019-02-08T18:30:00.000Z"})
.then((response) => console.log(response.notice))
```
