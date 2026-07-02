---
title: "release"
description: "You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a ‘release’, and then deploy this release to an environment."
url: "https://www.contentstack.com/js-management-stack-release"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## release

You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a ‘release’, and then deploy this release to an environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Uid for release to perform operation on. |

Returns:
Type
Release

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).release()
// OR
client.stack({ api_key: 'api_key'}).release('release_uid')
```
