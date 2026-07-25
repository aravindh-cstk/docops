---
title: "Delete webhook"
description: /webhooks/{webhook_uid}
url: /delete-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:10.337Z
updated_at: 2024-07-25T07:16:33.745Z
---

# Delete webhook

<p>The <span data-type='inlineCode'>Delete webhook</span> call deletes an existing webhook from a stack.</p><p>When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.webhooks.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/webhooks/{webhook_uid}`

**Method**: `DELETE`

## URL Parameters

- **webhook_uid** (required)
  <p>Enter the unique ID of the webhook that you want to delete. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
    "notice": "The Webhook was deleted successfully"
}
```

