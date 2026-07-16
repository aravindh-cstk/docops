---
title: "createUploadUrl"
description: "The `createUploadUrl` method creates a signed url for file upload."
url: "https://www.contentstack.com/javascript-marketplace-hosting-createuploadurl"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## createUploadUrl

The `createUploadUrl` method creates a signed url for file upload.

No parameters.

Returns:
Type
Promise.<Response>

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').hosting().createUploadUrl()
.then((data) => {});
```
