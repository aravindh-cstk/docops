---
title: "Webhook Circuit Breaker"
description: "Contentstack deploys the Webhook Circuit Breaker (WCB) implementation to stop retrying webhook requests that hit inactive, invalid, or unresponsive third-party URLs."
url: /headless-cms/webhook-circuit-breaker
---

# Webhook Circuit Breaker

## Webhook Circuit Breaker

Contentstack currently follows an [exponential webhook retry policy](/docs/headless-cms/webhook-retry-policy) whenever any [webhook](/docs/headless-cms/about-webhooks) fails to send data to the desired notification URL or a session timeout occurs. We try to send data to that notification URL again four more times after certain resend intervals.

Some notification URLs may be invalid or may have turned unresponsive due to slow client servers. To stop retrying webhook requests that hit such inactive third-party URLs, Contentstack deploys the **Webhook Circuit Breaker** (**WCB**) implementation.

Contentstack waits for **30** seconds to receive data from the destination server. If the destination server fails to send data within this timeframe, the webhook request is timed out.

A webhook request may fail to retrieve data from a specific notification URL under the following scenarios:

-   The provided domain name is either invalid or does not exist
-   The API fails to respond with data within **30** seconds
-   The destination server aborted the connection
-   The webhook request returns an error with any of the HTTP status codes in the 5xx range

If a webhook request fails **10** times due to a 5xx error, 401 error, or timeout, the system detects the invalid URL and automatically disables the webhook. Contentstack then marks the faulty webhook with an **Unhealthy** status.

![Webhook_Circuit_Breaker_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd4527309c35be05/66b1c72ebc06cc071f6bd5ec/Webhook_Circuit_Breaker_1.png)

We will not send any webhook requests to the unresponsive third-party URL until the issue is resolved. If any other webhooks configured to the same URL also breach the threshold specified above, they will be automatically disabled.

Contentstack also sends a notification email to the concerned clients whenever the webhook circuit breaker disables any webhook. You can specify the email addresses of the users to be notified under the **Email Addresses to Notify** section when creating your webhook. Contentstack then sends the email alert to the specified users.

![Webhook_Circuit_Breaker_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd48e1dc20460923e/66b0a1db19028c8ed8cb8f13/Webhook_Circuit_Breaker_2.png)

This email alert provides the following details:

-   The reason for disabling the webhook
-   The name of the stack where the faulty webhook resides
-   A link to the disabled webhook's logs
-   A link to Contentstack's Webhook Circuit Breaker documentation

The email alert notification contains the subject line - "**\[stack\_name\] - \[webhook\_title\] webhook disabled due to unhealthy notification endpoint**".

To enable the webhook again, you can visit the concerned stack and also debug the issue through the [webhook logs](/docs/headless-cms/view-webhook-logs).

## What Is a Circuit Breaker?

A circuit breaker is a reliability mechanism that stops Contentstack from repeatedly calling a webhook destination that keeps failing. Similar to how an electrical circuit breaker cuts the current to protect a circuit, the Webhook Circuit Breaker (WCB) automatically disables a webhook after its destination URL fails too many times in succession, and notifies you by email.

This protects both systems: your endpoint is not flooded with retries while it is down, and Contentstack does not spend delivery attempts on an unresponsive URL.

### When a Delivery Counts as a Failure

Contentstack treats a webhook delivery as failed when any of the following occur:

-   The destination domain is invalid or does not resolve.
-   The destination does not respond within the 30-second timeout.
-   The destination aborts the connection.
-   The destination returns a 5xx (server error) response.
-   The destination returns a 401 Authentication Error response.

A 2xx response counts as success and resets the failure count to zero.

### How the Circuit Breaker Trips

Contentstack retries each individual event up to four times using exponential backoff (after approximately 5, 25, 125, and 625 seconds) before it abandons that event. Separately, Contentstack tracks consecutive failed deliveries for the webhook as a whole. After 10 consecutive failed deliveries with no success in between, the circuit breaker trips:

-   The webhook status changes to **Unhealthy**, and Contentstack disables the webhook automatically.
-   The webhook owner receives a single email alert. Contentstack does not send an email on every subsequent failure.
-   Contentstack stops sending events to the webhook until you re-enable it.

A single successful (2xx) delivery resets the counter, so a webhook is disabled only after 10 failures with no success between them.

## How to Re-enable an Unhealthy Webhook

When the circuit breaker disables a webhook, its status shows as **Unhealthy**, and Contentstack delivers no events until you re-enable it. Follow these steps to recover the webhook.

**Warning:** Re-enable the webhook only after you have fixed the underlying problem. If the destination still fails, the webhook accumulates 10 more failed deliveries, and Contentstack disables it again.

### Step 1: Diagnose Why Deliveries Failed

Open the webhook execution logs to review the actual responses from your destination. For the steps, refer to [View Webhook Logs](/docs/headless-cms/view-webhook-logs). Common causes include:

-   **5xx errors**: Your endpoint is down or returning server errors. Fix the service before you re-enable the webhook.
-   **401 Authentication Error**: The authentication token or credentials configured on the webhook are incorrect or expired. Update them.
-   **Timeouts**: Your endpoint takes longer than 30 seconds to respond. Optimize the endpoint or acknowledge the request sooner.
-   **Invalid or unreachable URL**: Verify that the destination URL is correct and publicly reachable.

### Step 2: Re-enable the Webhook

1.  In your stack, click the **Settings** icon and select **Webhooks**.
2.  In the **Actions** column for the affected webhook, click the vertical ellipsis and select **Enable**. Alternatively, open the webhook details page and turn on the **Enable Webhook** toggle.
3.  Click **Save**.

Re-enabling the webhook resets its failure count, and Contentstack resumes delivering new events.

### Step 3: Replay the Events That Were Missed

Re-enabling a webhook does not retroactively deliver the events that fired while it was disabled. To resend them, open the webhook logs, locate each failed execution, and click **Retry**. You must re-enable the webhook before you retry, because retry does not work while the webhook is disabled.

**Additional Resources:**

-   [View Webhook Logs](/docs/headless-cms/view-webhook-logs)
-   [Enable or Disable a Webhook](/docs/headless-cms/enable-or-disable-a-webhook)
