---
title: "Delete webhook"
description: DELETE /webhooks/{webhook_uid}
url: developer-apis/content-management-api-requests/delete-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-25
---

# Delete webhook

**DELETE** `/webhooks/{webhook_uid}`

The Delete webhook call deletes an existing webhook from a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

## URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to delete. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.
  Default: `bltc7aa14ea1959b252`

## Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

```json
{
    "notice": "The Webhook was deleted successfully"
}
```

