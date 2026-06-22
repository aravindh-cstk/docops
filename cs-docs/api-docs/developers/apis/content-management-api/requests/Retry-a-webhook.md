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


**Method:** `POST`  
**Endpoint:** `/webhooks/{execution_uid}/retry`

This call makes a manual attempt to execute a webhook after the webhook has finished executing its automatic attempts.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the [Get executions of webhooks](#get-webhook-executions) call.

To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | Enter the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| execution_uid | cs2642bec9-c336-4da1-8aad-fded56c7d50e | Enter the execution unique ID of the webhook that you want to retry. Execute the [Get executions of a webhook](https://www.contentstack.com/docs/developers/apis |

**Response (200):**

```json
{
  "notice": "Webhook retry scheduled"
}
```
