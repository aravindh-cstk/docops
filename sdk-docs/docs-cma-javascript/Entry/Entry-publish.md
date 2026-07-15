---
title: "publish"
description: "The publish call is used to publish a specific version of an entry on the desired environment either immediately or at a later date/time. Note: Pass api\\_version 3.2 to use enhanced logic to publish"
url: "https://www.contentstack.com/js-management-entry-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The publish call is used to publish a specific version of an entry on the desired environment either immediately or at a later date/time.

**Note: **Pass api_version 3.2 to use enhanced logic to publish

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.publishDetails | object | Yes | - | Details of entry to be publish. |
| params.locale | string | No | - | Enter the code of the locale that the entry belongs to. |
| params.version | number | No | - | Entry version to be publish |
| params.scheduledAt | string | No | - | Schedule date for publishing entry. |

Returns:
Type
Promise

Example 1

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
.publish({ publishDetails: entry, locale: "en-us", version: 1, scheduledAt: "2019-02-08T18:30:00.000Z"})
.then((response) => console.log(response.notice))
```

Example 2

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
client.stack({ api_key: 'api_key'}).contentType('content_type_uid')
.entry(entryUid, { api_version: '3.2' })
.publish({ publishDetails: entry, locale: "en-us", version: 1, scheduledAt: "2019-02-08T18:30:00.000Z"})

.then((response) => console.log(response.notice))
```
