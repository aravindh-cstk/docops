---
title: "hosting"
description: "The `hosting` method allows you to retrieve, update, and deploy a manifest."
url: "https://www.contentstack.com/javascript-marketplace-app-hosting"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## hosting

The `hosting` method allows you to retrieve, update, and deploy a manifest.

No parameters.

Returns:
Type
Hosting

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting();
```
