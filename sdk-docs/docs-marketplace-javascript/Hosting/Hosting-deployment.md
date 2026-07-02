---
title: "deployment"
description: "The deployment method creates an instance of Hosting deployment."
url: "https://www.contentstack.com/javascript-marketplace-hosting-deployment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## deployment

The `deployment` method creates an instance of Hosting deployment.

No parameters.

Returns:
Type
Deployment

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().deployment();
```
