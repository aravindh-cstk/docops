---
title: "logs"
description: "The logs method retrieves the logs of a deployment."
url: "https://www.contentstack.com/javascript-marketplace-deployment-logs"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## logs

The `logs` method retrieves the logs of a deployment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| deployment_uid | String | Yes | — | UID of a deployment |

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().deployment('deployment_uid').logs()
.then((data) => {});
```
