---
title: "[Set Up Your Project] - Create a Webhook"
description: Create a webhook in Contentstack to send real-time data to third-party applications when events occur.
url: https://www.contentstack.com/docs/headless-cms/create-a-webhook
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-04-09
---

# [Set Up Your Project] - Create a Webhook

This page explains how to create a webhook in Contentstack, including configuration fields such as authentication, headers, scopes, and trigger conditions. It is intended for developers and stack administrators who need to send real-time event data from Contentstack to third-party services, and should be used when setting up integrations or automations based on Contentstack events.

## Create a Webhook

Contentstack allows you to create and send real-time data to any third-party application or service when a set event occurs.

To create a webhook, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md), and click the “Settings” icon on the left navigation panel.
- Click **Webhooks**. You can also use the shortcut key “alt + W” for Windows OS users, and “option + W” for Mac OS users to access Webhooks.
- Click the **+ New Webhook **button located at the top of the page.
- Provide the following webhook details:**Name** (*required*): Provide a suitable name for your webhook.
- **URL to Notify** (*required*): Specify the URL or web address where the data will be sent once the webhook is triggered. The URL will receive an HTTP POST request when the selected event happens.
- **Authentication Method**: Select the appropriate authentication method to secure your webhook.**Basic Auth**: This method uses a username and password to authenticate your requests.**HTTP Basic Auth Username**: Provide the username for HTTP Basic Auth.
- **HTTP Basic Auth Password**: Provide the password for HTTP Basic Auth.

  **Note**: The username and password should be unique and must not match any other login credentials to avoid credential reuse.
- **OAuth 2.0 Client Credential**: Provides a more secure way to connect by using client ID and client secret credentials to obtain an access token.**Access Token URL** (*required*): Provide the URL to fetch the access token.
- **Client ID** (*required*): Provide the Client ID for OAuth 2.0.
- **Client Secret** (*required*): Provide the Client Secret for OAuth 2.0.
- **Request Query Parameter(s)**: Request query parameters can be used to provide additional context or instructions in key-value format required by the OAuth authorization server. You can add multiple query parameters by clicking **+ Request Query Parameter**.**Note**:To get the values for above fields refer to your OAuth application settings.
- The request query parameters will be appended to the access token URL.
- Contentstack will establish an OAuth access token and cache it. If an invalid or expired token is received, your webhook should return a status code of `4xx` with specific error messages (`invalid_request`, `invalid_token`, `insufficient_scope`). Contentstack will then request a new token and retry the webhook request.
- **Bearer Token**: Provide the bearer token for authentication.
- **None**: No authentication will be used.

**Note**: The Basic Auth method is available by default. To enable the additional OAuth 2.0 and Bearer Token authentication methods for your organization, please contact our [support](mailto: support@contentstack.com) team.
- **Custom Headers** (*optional*): This field lets you add any additional header to the HTTP POST request. You can add multiple headers by clicking **+ Custom Header**.
- **Email Addresses to Notify** (*optional*): Specify the email addresses of the users you want to notify whenever the [Webhook Circuit Breaker](./webhook-circuit-breaker.md) disables the webhook.

  **Note**: You can enter a maximum of **10 email addresses** for a single webhook.
- **Stack-level Scope**: Specify conditions for creating, deleting, assigning, or unassigning branches or branch aliases
- **Branch-level Scope**: Select the branch for which this webhook is applicable and configure trigger conditions for the specific branch.![create_webhook_with_branches.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt454a6e1d6caa681d/665d9d893c529738c80033b6/Create_a_Webhook_scope.png)

  **Note**: You can select only a single branch at a time.
- **Trigger Conditions** (*required*): Set the conditions for the webhook to trigger. Here you need to define the event when the webhook will be triggered. For ease of use, we have two views under it: **Conditional View** and **Code View**. **Note**Refer the [Webhook Events](./webhook-events.md) documentation for more information on the events and methods that can be added under **Code View**.
- **Trigger Conditions** under **Branch-level Scope** are visible only when stacks have [branches](../branches/about-branches.md) enabled.
- Toggle the **Send Concise Payload** switch to enable the webhook to return a concise JSON payload.
- Lastly, toggle the **Enable Webhook** switch to enable your webhook and click **Save**.

**Note:** A webhook will not trigger on local environments such as localhost.

## API Reference

To perform this create action via APIs, refer to the [Create a Webhook API request](../../../api-docs/api-detail/content-management-api.md#create-a-webhook).

**Additional Resource**: After creating a webhook, you can refer to our [guide](./webhook-integrations.md) that lists various examples of automating particular tasks using Webhooks and third party services/apps.

## Common questions

### Can a webhook trigger on localhost?
**Note:** A webhook will not trigger on local environments such as localhost.

### What happens if the OAuth access token is invalid or expired?
Contentstack will establish an OAuth access token and cache it. If an invalid or expired token is received, your webhook should return a status code of `4xx` with specific error messages (`invalid_request`, `invalid_token`, `insufficient_scope`). Contentstack will then request a new token and retry the webhook request.

### How many email addresses can be added for notifications?
**Note**: You can enter a maximum of **10 email addresses** for a single webhook.

### How can I create a webhook using the API instead of the UI?
To perform this create action via APIs, refer to the [Create a Webhook API request](../../../api-docs/api-detail/content-management-api.md#create-a-webhook).