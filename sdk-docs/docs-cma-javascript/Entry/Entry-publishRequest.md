---
title: "publishRequest"
description: "This multipurpose request allows you to either send a publish request or accept/reject a received publish request."
url: "https://www.contentstack.com/js-management-entry-publishrequest"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publishRequest

This multipurpose request allows you to either send a publish request or accept/reject a received publish request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.publishing_rule | object | Yes | — | Details for the publish request |
| locale | string | No | — | Enter the code of the locale that the entry belongs to. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const publishing_rule = {
"uid": "uid",
"action": "publish" 
"status": 1,
"notify": false,
"comment": "Please review this."
}
client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.publishRequest({ publishing_rule, locale: 'en-us'})
.then((response) => console.log(response.notice))
```
