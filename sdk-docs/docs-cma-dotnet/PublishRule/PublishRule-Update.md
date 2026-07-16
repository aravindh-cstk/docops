---
title: "Update"
description: "The Update Publish Rules request allows you to add a publish rule or update the details of the existing publish rules of a workflow."
url: "https://www.contentstack.com/dotnet-management-publishrule-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update Publish Rules request allows you to add a publish rule or update the details of the existing publish rules of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | PublishRuleModel | Yes | — | P ublishRule Model for updating Content Type. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishRuleModel model = new PublishRuleModel(); 
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow().PublishRule("<PUBLISH_RULE_UID>").Update(model);
```
