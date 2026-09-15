---
title: "Create a Webhook"
description: "Create webhooks to send real-time data to third-party applications or services whenever a specific event occurs. Follow this step-by-step guide to get started."
url: /headless-cms/create-a-webhook
uid: bltd4e0e3728080c013
---

# Create a Webhook

## Create a Webhook

Contentstack allows you to create and send real-time data to any third-party application or service when a set event occurs.

To create a webhook, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack), and click the “Settings” icon.
2.  Click **Webhooks**. You can also use the shortcut key “alt + W” for Windows OS users and “option + W” for Mac OS users to access Webhooks.
3.  Click the **\+ New Webhook** button located at the top of the page.
4.  **Name** (_required_): Provide a suitable name for your webhook.
5.  **URL to Notify** (_required_): Specify the URL or web address where the data is sent once the webhook is triggered. The URL receives an HTTP POST request when the selected event happens.
6.  **Authentication Method**: Select the appropriate authentication method to secure your webhook.

    -   **Basic Auth**: This method uses a username and password to authenticate your requests.
        -   **HTTP Basic Auth Username**: Provide the username for HTTP Basic Auth.
        -   **HTTP Basic Auth Password**: Provide the password for HTTP Basic Auth.

            **Note:** The username and password should be unique and must not match any other login credentials to avoid credential reuse.

    -   **OAuth 2.0 Client Credential**: Provides a more secure way to connect by using client ID and client secret credentials to obtain an access token.
        -   **Access Token URL** (_required_): Provide the URL to fetch the access token.
        -   **Client ID** (_required_): Provide the Client ID for OAuth 2.0.
        -   **Client Secret** (_required_): Provide the Client Secret for OAuth 2.0.
        -   **Request Query Parameter(s)**: Request query parameters provide additional context or instructions in key-value format required by the OAuth authorization server. You can add multiple query parameters by clicking **\+ Request Query Parameter**.

            **Note:** To get the values for the above fields, refer to your OAuth application settings. The request query parameters are appended to the access token URL. Contentstack establishes an OAuth access token and caches it. If an invalid or expired token is received, your webhook should return a status code of 4xx with specific error messages (invalid\_request, invalid\_token, insufficient\_scope). Contentstack then requests a new token and retries the webhook request.

    -   **Bearer Token**: Provide the bearer token for authentication.
    -   **None**: No authentication is used.

    **Note:** The **Basic Auth** method is available by default. To enable the additional OAuth 2.0 and Bearer Token authentication methods for your organization, contact our [support](mailto:support@contentstack.com) team.

7.  **Request Signing Method**: Select how Contentstack signs the payload it sends to your endpoint, so the receiving application can verify that the request came from Contentstack.

    -   **Default (Contentstack Certificate)**: Signs requests using the Contentstack certificate. Consumers verify them using Contentstack's public key. This is the default and needs no additional setup.
    -   **HMAC Signing**: Signs requests using a secret key unique to your organization, with the HMAC-SHA256 algorithm. Consumers verify them using the shared secret key.

    **Note:** **HMAC Signing** is available only after HMAC signing is enabled for your organization in **Administration** > **Security Configuration** > **HMAC Signing**, by a user with the Owner, Admin, Security Manager, or a custom role with the required permissions within Administration. If HMAC signing is not enabled, this option cannot be used, and the webhook prompts you to enable it first. For details, refer to [HMAC Signing](/docs/administration/hmac-signing).

8.  **Custom Headers** (_optional_): This field lets you add any additional header to the HTTP POST request. You can add multiple headers by clicking **\+ Custom Header**.
9.  **Email Addresses to Notify** (_optional_): Specify the email addresses of the users you want to notify whenever the [Webhook Circuit Breaker](/docs/headless-cms/webhook-circuit-breaker) disables the webhook.

    **Note:** You can enter a maximum of **10 email addresses** for a single webhook.

10.  **Stack-level Scope**: Specify conditions for creating, deleting, assigning, or unassigning branches or branch aliases.
11.  **Branch-level Scope**: Select the branch for which this webhook is applicable and configure trigger conditions for the specific branch.

     **Note:** You can select only a single branch at a time.

12.  **Trigger Conditions** (_required_): Set the conditions for the webhook to trigger. Here you define the event when the webhook is triggered. For ease of use, two views are available: **Conditional View** and **Code View**.

     **Note**:

     -   Refer to the [Webhook Events](/docs/headless-cms/webhook-events) documentation for more information on the events and methods that can be added under **Code View**.
     -   **Trigger Conditions** under **Branch-level Scope** are visible only when stacks have [branches](/docs/headless-cms/about-branches) enabled.

13.  Toggle the **Send Concise Payload** switch to enable the webhook to return a concise JSON payload.
14.  Toggle the **Enable Webhook** switch to enable your webhook, then click **Save**.

**Note:** A webhook does not trigger on local environments such as localhost.

**Additional Resource**:

-   After creating a webhook, you can refer to our [guide](/docs/headless-cms/webhook-integrations) that lists examples of automating tasks using webhooks and third-party services or apps.
-   To learn how each signing method verifies payloads, refer to [Secure Your Webhooks](/docs/headless-cms/secure-your-webhooks).

## API Reference

To perform this create action via APIs, refer to the [Create a Webhook API request](/docs/developers/apis/content-management-api/webhooks#create-a-webhook).
