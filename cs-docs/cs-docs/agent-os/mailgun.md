---
title: Automations guides and connectors - Mailgun
description: Set up the Mailgun action connector to send emails using your own Mailgun account.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/mailgun
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Mailgun

This page explains how to configure the Mailgun action connector in Automation Hub to send emails through your own Mailgun account. It is intended for developers and automation builders who need to connect Mailgun as a third-party service in an action step.

## Mailgun

The **Mailgun** action connector lets you send emails using your own Mailgun account.

## Set Up Mailgun

Perform the following steps to set up the Mailgun action connector:
- Click **Configure Action Step **from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Mailgun** connector.
- Under **Choose an Action** tab, select the **Send Email** action.
- Click the **+ Add New Account** button to connect to your Mailgun account.
- In the **Authorize** modal, enter your Account API Key and click **Authorize**.

To get your Mailgun account **API Key**, open Mailgun, log in and click your user profile, and click **API Keys**. Under the **API security** tab, you will see the following details. We will use the **Private API Key**:  
**Additional Resource:** Text For more information, refer to the [Mailgun - Where Can I Find My API Key and SMTP Credentials?](https://help.mailgun.com/hc/en-us/articles/203380100-Where-can-I-find-my-API-key-and-SMTP-credentials-) document.
- Enter the **Domain** (registered domain in Mailgun account), **From** (sender email ID), **To** (receiver email ID; you can add multiple email IDs separated by a comma), **Subject** (subject of the email), and **Message** (message body to be sent in the email). Once done, click **Proceed**.
- Click **Test Action** to send the email using the Mailgun account. Check the output.
- Once set, click **Save and Exit**.

You can check the email in the receiver’s email account sent by your Mailgun email address.

This sets up the **Mailgun action** connector.

## Common questions

**Q: Which Mailgun API key should I use when authorizing the connector?**  
A: Use the **Private API Key** under the **API security** tab.

**Q: Can I send to multiple recipients?**  
A: Yes, in **To** you can add multiple email IDs separated by a comma.

**Q: How do I verify the connector is working?**  
A: Click **Test Action** to send the email using the Mailgun account and check the output.

**Q: Where do I find Mailgun API key details?**  
A: In Mailgun, log in, click your user profile, click **API Keys**, and look under the **API security** tab.