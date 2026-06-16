---
title: "[Set Up Your Project] - View Webhook Logs"
description: View logs for triggered webhooks in Contentstack and retrieve webhook execution details.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/view-webhook-logs
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - View Webhook Logs

This page explains how to view webhook execution logs in Contentstack, what each log field means, and where to find additional details for each webhook call. It is intended for developers and administrators who need to troubleshoot webhook behavior, verify delivery status, or inspect request/response details after a webhook is triggered.

## View Webhook Logs

Contentstack keeps a log of all the triggered [webhooks](/docs/developers/set-up-webhooks/about-webhooks) in your [stack](/docs/developers/set-up-stack/about-stack).

To view the log of a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your stack, navigate to the “Settings” icon (press “S”) on the left navigation panel, and select **Webhooks** (press “alt + W” for Windows OS, and “option + W” for Mac OS).
- Click on the webhook to view its details. On the webhook's page, you will find two tabs: **Edit Webhook** (to view or edit its settings) and **Log** (to view its log).
- Select the **Log** tab. Here you will view the logs for that particular webhook.

- **Time**: Specifies the latest date and time when the webhook was triggered
- **Action**: Indicates the action that triggered the webhook
- **Module**: Indicates the module where the webhook was triggered
- **Title**: The title of the module that triggered the webhook
- **Call Status**: Specifies the status of the triggered webhook whether it was successfully triggered (denoted by status code - HTTP 200) or any error has occurred (denoted by status code - 4XX and 5XX i.e., non 2XX). If the call fails to establish, the **HTTP null** status is displayed.

**Note**  
You can retrieve webhook log information only for **30 days** prior to the current day.

- In case of a failure or if a session timeout occurs (webhook request timeout is **30** seconds), the webhook will immediately retry to send data to the destination URL again for **four** more times. The interval time between two retries increases **exponentially** according to the retry attempt number.
- Contentstack follows an exponential retry policy when any webhook fails to send data to the destination server. Refer to the [Webhook Retry Policy](/docs/developers/set-up-webhooks/webhook-retry-policy) section to better understand how retries work.
- To view the details of the webhook call, click the vertical ellipses in the **Actions** column for the log you want to see the details for, then select **See Details**.
- It will display the request details of the webhook call as well as the response details received.

**Note**: In the case of failed attempts, the Response Details section will display no data.

## API Reference

To get webhook logs via API, refer to the [Get executions of a webhook](/docs/developers/apis/content-management-api#get-executions-of-a-webhook) API request.

## Common questions

### How long are webhook logs retained?
You can retrieve webhook log information only for **30 days** prior to the current day.

### What does “HTTP null” mean in Call Status?
If the call fails to establish, the **HTTP null** status is displayed.

### How many times will a failed webhook retry?
In case of a failure or if a session timeout occurs (webhook request timeout is **30** seconds), the webhook will immediately retry to send data to the destination URL again for **four** more times.

### Where can I see request and response details for a webhook execution?
To view the details of the webhook call, click the vertical ellipses in the **Actions** column for the log you want to see the details for, then select **See Details**.