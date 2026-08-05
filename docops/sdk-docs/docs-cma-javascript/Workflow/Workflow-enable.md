---
title: "enable"
description: "The Enable Workflow request allows you to enable a workflow."
url: "https://www.contentstack.com/js-management-workflow-enable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## enable

The Enable Workflow request allows you to enable a workflow.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow('workflow_uid')
.enable()
.then((workflow) => console.log(workflow))
```
