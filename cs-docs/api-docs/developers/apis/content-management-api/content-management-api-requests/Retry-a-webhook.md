---
title: "Retry a webhook"
description: POST /webhooks/{execution_uid}/retry
url: developers/apis/content-management-api/requests/retry-a-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-26
---

# Retry a webhook

**POST** `/webhooks/{execution_uid}/retry`

This call makes a manual attempt to execute a webhook after the webhook has finished executing its automatic attempts.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the [Get executions of webhooks](#get-webhook-executions) call.

To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

## URL Parameters

- **execution_uid** (required)
  Enter the execution unique ID of the webhook that you want to retry. Execute the [Get executions of a webhook](../../../../api-detail/content-management-api.md#get-executions-of-a-webhook) call to retrieve the UID of a webhook.
  Default: `cs2642bec9-c336-4da1-8aad-fded56c7d50e`

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
  "notice": "Webhook retry scheduled"
}
```

