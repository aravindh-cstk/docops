---
title: "latestLiveDeployment"
description: "The latestLiveDeployment method retrieves the details of the latest deployment of the source file."
url: "https://www.contentstack.com/javascript-marketplace-hosting-latestlivedeployment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## latestLiveDeployment

The `latestLiveDeployment` method retrieves the details of the latest deployment of the source file.

No parameters.

Returns:
Type
Promise.<Deployment>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().latestLiveDeployment()
.then((data) => {});
```
