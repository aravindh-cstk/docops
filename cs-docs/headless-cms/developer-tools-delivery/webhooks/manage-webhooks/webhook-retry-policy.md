---
title: "Webhook Retry Policy"
description: "Discover Contentstack's exponential webhook retry policy, designed to manage failed notifications with controlled intervals, enhancing reliability and efficiency."
url: /headless-cms/webhook-retry-policy
uid: blt2e32f61163f1301c
---

# Webhook Retry Policy

## Webhook Retry Policy

Contentstack follows an **exponential webhook retry policy** whenever any [webhook](/docs/headless-cms/about-webhooks) fails to send data to the desired notification URL or a session timeout occurs. We trigger the retry policy whenever a webhook request returns a non-2XX status code, i.e. 4XX or 5XX error codes, in the response.

**Note:** Contentstack waits for **30 seconds** to receive data from the destination server. If the destination server fails to send data within this timeframe, then the webhook request is timed out.

The exponential retry policy attempts to send data to the destination URL again **four** more times after certain intervals. Setting a resend interval avoids several requests constantly hitting the server and prevents database overload.

Contentstack sets the resend interval time to **5 seconds**, by default, for the first retry attempt. The interval time then increases exponentially according to the retry instance. The exponential backoff formula will look as follows:

```
{resend_interval} + {retry_instance} ^ 4
```

For instance, if the resend interval lasts for 5 seconds and the webhook can retry sending data four more times, then the exponential backoff strategy will calculate retry intervals as follows:

<table><tbody><tr><td><p><strong>Retry Instance No.</strong></p></td><td><p><strong>Next Resend Interval (seconds)</strong></p></td></tr><tr><td><p>1</p></td><td><p>5</p></td></tr><tr><td><p>2</p></td><td><p>25</p></td></tr><tr><td><p>3</p></td><td><p>125</p></td></tr><tr><td><p>4</p></td><td><p>625</p></td></tr></tbody></table>

If the webhook request fails to run successfully after the last retry attempt, Contentstack stops retrying and marks the request with a failed status. You can [view the webhook logs](/docs/headless-cms/view-webhook-logs) to get more details on the failed request.
