---
title: "Edit a Webhook"
description: "Easily edit a webhook to customize automated triggers for user-defined events in your application or service."
url: /headless-cms/edit-a-webhook
uid: blt23a2f51e54bcefdc
---

# Edit a Webhook

## Edit a Webhook

Change any of the webhook's configuration fields, including the ones below. Some changes affect how the receiving application processes or verifies requests, so review the impact before you save.

-   **Trigger Conditions**: Change the events that fire the webhook. The receiving application starts getting payloads for the new events and stops getting them for any you remove, so confirm it can handle the updated set.
-   **Authentication Method**: Switch between **Basic Auth**, **OAuth 2.0 Client Credential**, **Bearer Token**, and **None**, or update the credentials for the current method. The receiving endpoint must accept the new credentials, or requests fail authentication after you save.
-   **Request Signing Method**: Switch between **Default (Contentstack Certificate)** and **HMAC Signing**, which changes how Contentstack signs the payload and which signature header it sends.
-   **Custom Headers**: Add, edit, or remove headers sent with each request. If the receiving application relies on a header to authenticate or route the request, update both sides together.

**Note:** You can select **HMAC Signing** only after HMAC signing is enabled for your organization. If you change a webhook from **HMAC Signing** to **Default (Contentstack Certificate)**, its payloads stop carrying an HMAC signature, so update any consumer that verifies it. For details on signing methods, refer to [Secure Your Webhooks](/docs/headless-cms/secure-your-webhooks).

**Tip:** For a full description of every configuration field, refer to [Create a Webhook](/docs/headless-cms/create-a-webhook).

To edit a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your stack and click the “Settings” icon.
2.  Click **Webhooks**. This displays a list of your existing webhooks. You can also use the shortcut keys “alt + W” for Windows OS users and “option + W” for Mac OS users to access webhooks.
3.  Select the webhook you want to edit and make the necessary changes to its configuration fields. Alternatively, click the vertical ellipses in the **Actions** column for the webhook you want to edit, then select **Edit**.
4.  Click **Save** to apply the changes.

## API Reference

To perform a webhook update using API, refer to [Update a webhook](/docs/developers/apis/content-management-api/webhooks#update-webhook).
