---
title: "publish"
description: "The Publish entries and assets in bulk request allows you to publish multiple entries and assets at the same time."
url: "https://www.contentstack.com/js-management-bulkoperation-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The Publish entries and assets in bulk request allows you to publish multiple entries and assets at the same time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.details | object | No | — | Set this with details containing 'entries', 'assets', 'locales', and 'environments' to which you want to publish the entries or assets. If you do not specify a source locale, the entries or assets will be published in the master locale automatically. |
| params.skip_workflow_stage_check | boolean | No | — | Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules. |
| params.approvals | boolean | No | — | Set this to 'true' to publish the entries that do not require an approval to be published. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const publishDetails = {
  entries: [
    {
      uid: '{{entry_uid}}',
      content_type: '{{content_type_uid}}',
      version: '{{version}}',
      locale: '{{entry_locale}}'
    }
  ],
  assets: [{
    uid: '{{uid}}'
  }],
  locales: [
    'en'
  ],
  environments: [
    '{{env_uid}}'
  ]
}
client.stack({ api_key: 'api_key'}).bulkOperation().publish({ details:  publishDetails })
.then((response) => {  console.log(response.notice) })
```

```
// For Nested bulk publish pass api_version param with value 3.2
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const publishDetails = {
  environments:["{{env_uid}}","{{env_uid}}"],
  locales:["en-us"],
  entries:[
    {
      _content_type_uid: '{{content_type_uid}}',
      uid: '{{entry_uid}}'
    },
    {
      _content_type_uid: '{{content_type_uid}}',
      uid: '{{entry_uid}}'
    },
    {
      _content_type_uid: '{{content_type_uid}}',
      uid: '{{entry_uid}}'
    }
  ]
}
client
  .stack({ api_key: 'api_key'})
  .bulkOperation().publish({ 
     details:  publishDetails, 
     api_version: 3.2 
  })
  .then((response) => {  console.log(response.notice) })
```
