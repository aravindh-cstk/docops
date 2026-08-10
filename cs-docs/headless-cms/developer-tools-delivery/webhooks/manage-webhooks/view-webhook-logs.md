---
title: "View Webhook Logs"
description: "Contentstack keeps a log of all triggered webhooks in your stack. To view the log of a webhook, log in to your Contentstack account, and perform these steps."
url: /headless-cms/view-webhook-logs
---

# View Webhook Logs

## View Webhook Logs

**Note:** If your webhook shows an **Unhealthy** status, refer to [How to Re-enable an Unhealthy Webhook](/docs/headless-cms/webhook-circuit-breaker#how-to-re-enable-an-unhealthy-webhook) for the steps to diagnose the cause and restore delivery.

Contentstack keeps a log of all the triggered [webhooks](/docs/headless-cms/about-webhooks) in your [stack](/docs/headless-cms/about-stack).

To view the log of a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your stack, navigate to the “Settings” icon (press “S”), and select **Webhooks** (press “alt + W” for Windows OS, and “option + W” for Mac OS).
2.  Click on the webhook to view its details. On the webhook's page, you will find two tabs: **Edit Webhook** (to view or edit its settings) and **Log** (to view its log).
3.  Select the **Log** tab. Here you will view the logs for that particular webhook.
    -   **Time**: Specifies the latest date and time when the webhook was triggered
    -   **Action**: Indicates the action that triggered the webhook
    -   **Module**: Indicates the module where the webhook was triggered
    -   **Title**: The title of the module that triggered the webhook
    -   **Call Status**: Specifies the status of the triggered webhook whether it was successfully triggered (denoted by status code - HTTP 200) or any error has occurred (denoted by status code - 4XX and 5XX i.e., non 2XX). If the call fails to establish, the **HTTP null** status is displayed.![View_Webhook_Log_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc16bd4b3651a934e/66a77a7cc56a1045793c0305/View_Webhook_Log_1.png)
        
        **Note**
        
        -   You can retrieve webhook log information only for **30 days** prior to the current day.
        -   In case of a failure or if a session timeout occurs (webhook request timeout is **30** seconds), the webhook will immediately retry to send data to the destination URL again for **four** more times. The interval time between two retries increases **exponentially** according to the retry attempt number.
        -   Contentstack follows an exponential retry policy when any webhook fails to send data to the destination server. Refer to the [Webhook Retry Policy](/docs/headless-cms/webhook-retry-policy) section to better understand how retries work.
        
4.  To view the details of the webhook call, click the vertical ellipses in the **Actions** column for the log you want to see the details for, then select **See Details**.![View_Webhook_Log_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc66471e582d769fc/66a796eda4a657327e1dd661/View_Webhook_Log_2.png)
5.  It will display the request details of the webhook call as well as the response details received.![View_Webhook_Log_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt566cbf5ee4c3098b/66a796ff0ccb2f12467ff120/View_Webhook_Log_3.png)
    
    **Note:** In the case of failed attempts, the Response Details section will display no data.
    

## API Reference

To get webhook logs via API, refer to the [Get executions of a webhook](/docs/developers/apis/content-management-api/webhooks#get-executions-of-a-webhook) API request.
