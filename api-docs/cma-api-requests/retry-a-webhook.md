---
title: "Retry a webhook"
description: /webhooks/{execution_uid}/retry
url: /retry-a-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:10.326Z
updated_at: 2024-07-26T10:12:55.707Z
---

# Retry a webhook

<p>This call makes a manual attempt to execute a webhook after the webhook has finished executing its automatic attempts.</p><p>When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the <a href="#get-webhook-executions" target="_self">Get executions of webhooks</a> call.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.webhooks.management:write</span> scope.</p>

**API Endpoint**: `/webhooks/{execution_uid}/retry`

**Method**: `POST`

## URL Parameters

- **execution_uid** (required)
  <p>Enter the execution unique ID of the webhook that you want to retry. Execute the <a href="https://www.contentstack.com/docs/developers/apis/content-management-api#get-executions-of-a-webhook" target="_self">Get executions of a webhook</a> call to retrieve the UID of a webhook.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter&nbsp;your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
  "notice": "Webhook retry scheduled"
}
```

