---
title: "[Developer Hub guides] - Managing Webhooks in an App"
description: Managing Webhooks in an App
url: https://www.contentstack.com/docs/developers/developer-hub/managing-webhooks-in-an-app
product: Contentstack
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Developer Hub guides] - Managing Webhooks in an App

This page explains how to enable, configure, and disable webhooks for a Contentstack app from the Developer Hub. It is intended for developers or app administrators who need real-time event notifications from Contentstack to their application.

## Managing Webhooks in an App

A webhook provides a mechanism or a method for enabling real-time communication and data exchange between Contentstack and your application.

**Additional Resource: **For more information on how Webhooks work, refer to the documentation on [Set Up Webhooks](/docs/developers/set-up-webhooks).

## Steps to Enable Webhook

- After logging into your [Contentstack account](https://www.contentstack.com/login/), click the **Developer Hub** icon and select the desired app.
- From the left navigation menu, click the **Webhooks **option.
- To enable the webhook, use the **Enable Webhook** toggle button.Once the webhook is enabled, you can configure it for your app by entering the following details:

Enter a valid **URL to Notify** (mandatory fields).
- To secure the **URL to Notify**, provide necessary details in the **HTTP Basic Auth Username** and **HTTP Basic Auth Password** fields. You can also provide unique **Custom Headers** for securing the URL further.
- Next, select the events you want to be notified of.Stack apps have **App Events** as well as **Stack Events**:
- Whereas, organization apps have only **App Events**:
- **Branch-level Scope** will allow the webhook event to be triggered on the selected branch only, i.e. Main Branch, All branches.
- Webhook will be triggered for any** Branch Event(s) **such as Created and Deleted.
- Webhook will be triggered on any **Branch Alias(es) Event(s)** such as assigned and unassigned.
- You can specify the email addresses of the users under the **User(s) to Notify** section whenever the [Circuit Breaker](/docs/developers/set-up-webhooks/webhook-circuit-breaker) disables any webhook. Contentstack sends the email alert to the specified user(s).
- Configure the webhook information.
- Click **Save** to save your webhook details in the manifest.You will see the details of the webhook logs on the **Webhooks** tab in the **App Configuration** screen after installing the app.

You can update the branch for which you want to trigger the webhooks from the **Branch** dropdown.

## Steps to Disable Webhook

- In the left navigation panel, click the **Webhooks** tab.
- Click the **Enable Webhook** toggle button to disable the webhook, and then click the **Disable webhook **button in the modal.

Once the webhook is disabled, the **Configure Webhook **section will disappear, but the details added previously will remain saved. And, no notifications will be sent to the target URL any more.

**Note**: Users can enable/disable the webhook anytime they want.

## Common questions

### Where do I enable webhooks for an app in Contentstack?
In the Developer Hub, select the desired app and use the **Webhooks** option from the left navigation menu.

### What happens after I enable a webhook?
Once enabled, you can configure it by entering details such as **URL to Notify**, authentication fields, headers, and selecting events to be notified of.

### Will disabling a webhook delete its configuration?
No. Once the webhook is disabled, the **Configure Webhook **section will disappear, but the details added previously will remain saved.

### Where can I view webhook logs after installing the app?
You will see the details of the webhook logs on the **Webhooks** tab in the **App Configuration** screen after installing the app.