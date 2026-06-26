---
title: "fetch"
description: "The fetch workflow retrieves the comprehensive details of a specific Workflow of a stack."
url: "https://www.contentstack.com/js-management-workflow-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch workflow retrieves the comprehensive details of a specific Workflow of a stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow('workflow_uid')
.fetch()
.then((workflow) => console.log(workflow))
```
