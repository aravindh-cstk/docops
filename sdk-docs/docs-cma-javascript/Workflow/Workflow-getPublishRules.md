---
title: "getPublishRules"
description: "The get Workflow call is used to get details of an existing Workflow from your Stack."
url: "https://www.contentstack.com/js-management-workflow-getpublishrules"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getPublishRules

The get Workflow call is used to get details of an existing Workflow from your Stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.action | string | No | — | Enter the action that has been set in the Publishing Rule. Example:publish/unpublish |
| params.locale | string | No | — | Enter the code of the locale where your Publishing Rule will be applicable. |
| environment | string | No | — | Enter the UID of the environment where your Publishing Rule will be applicable. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow()
.contentType('contentType_uid')
.getPublishRules()
.then((collection) => console.log(collection))
```
