---
title: "create"
description: "The create method deploys the uploaded file in hosting."
url: "https://www.contentstack.com/javascript-marketplace-deployment-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The `create` method deploys the uploaded file in hosting.

No parameters.

Returns:
Type
Promise.<Deployment>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().deployment().create()
.then((data) => {});
```
