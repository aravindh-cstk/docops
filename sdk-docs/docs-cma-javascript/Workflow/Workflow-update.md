---
title: "update"
description: "The Update Workflow request allows you to add a workflow stage or update the details of the existing stages of a workflow."
url: "https://www.contentstack.com/js-management-workflow-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update Workflow request allows you to add a workflow stage or update the details of the existing stages of a workflow.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).workflow('workflow_uid').fetch()
.then((workflow) => {
 workflow.name = 'My New Workflow'
 workflow.description = 'Workflow description'
 return workflow.update()
})
.then((workflow) => console.log(workflow))
```
