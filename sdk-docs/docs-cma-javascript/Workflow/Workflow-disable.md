---
title: "disable"
description: "The Disable Workflow request allows you to disable a workflow."
url: "https://www.contentstack.com/js-management-workflow-disable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## disable

The Disable Workflow request allows you to disable a workflow.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow('workflow_uid')
.disable()
.then((workflow) => console.log(workflow))
```
