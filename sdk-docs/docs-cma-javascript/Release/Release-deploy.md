---
title: "deploy"
description: "Deploying a release performs the selected action (publish or unpublish) on the items of that release associated with a specific environment."
url: "https://www.contentstack.com/js-management-release-deploy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## deploy

Deploying a release performs the selected action (publish or unpublish) on the items of that release associated with a specific environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.environments | array | Yes | — | The environment(s) on which the Release should be deployed. |
| params.locales | array | No | — | The locale(s) on which the Release should be deployed. |
| params.action | string | No | — | The action on which the Release should be deployed. |
| params. scheduledAt | string | No | — | The schedule time for the Release to deploy. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release('release_uid').deploy({
     environments: [
                     "production",
                     "uat"
                     ],
     locales: [
                 "en-us",
                 "ja-jp"
              ],
     scheduledAt: '2018-12-12T13:13:13:122Z',
     action: 'publish',
})
.then((response) => console.log(response.notice))
```
