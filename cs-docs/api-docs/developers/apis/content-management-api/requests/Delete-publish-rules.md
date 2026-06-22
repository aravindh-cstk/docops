---
title: "Delete publish rules"
description: DELETE /workflows/publishing_rules/{rule_uid}
url: developers/apis/content-management-api/requests/delete-publish-rules
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Delete publish rules


**Method:** `DELETE`  
**Endpoint:** `/workflows/publishing_rules/{rule_uid}`

The Delete Publish Rules request allows you to delete an existing publish rule.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter your stack API key |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| rule_uid | publish_rule_uid | Enter the UID of the publish rule that you want to delete. |

**Response (200):**

```json
{
	"notice": "Publish rule deleted successfully."
}
```
