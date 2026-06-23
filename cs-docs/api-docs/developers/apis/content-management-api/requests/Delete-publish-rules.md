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

**DELETE** `/workflows/publishing_rules/{rule_uid}`

The Delete Publish Rules request allows you to delete an existing publish rule.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

## URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to delete.
  Default: `publish_rule_uid`

## Headers

- **api_key** (required)
  Enter your stack API key
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

```json
{
	"notice": "Publish rule deleted successfully."
}
```

