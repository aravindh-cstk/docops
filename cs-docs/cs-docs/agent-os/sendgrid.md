---
title: Automations guides and connectors - SendGrid
description: Set up the SendGrid action connector to send email using an automation action step.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/sendgrid
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - SendGrid

This page explains what the SendGrid connector is and how to set up the SendGrid action connector in an automation so you can send emails via an Action Step. It is intended for users configuring third-party services within Automation Hub and should be used when you need to authorize SendGrid and configure a “Send Email” action.

## SendGrid

SendGrid is a communication platform used for sending transactional and marketing emails.

## Set Up SendGrid

Perform the following steps to set up the SendGrid action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **SendGrid** connector.
- Under **Choose an Action** tab, select the **Send Email **action.
- Click the **+ Add New Account** button to set up your SendGrid account (see screenshot in next step).
- In the Authorize modal, enter a **Title** for your connection and your SendGrid account API Key. Then click **Authorize**. For more information, refer to the [How to create an API key](https://docs.sendgrid.com/ui/account-and-settings/api-keys) document.
- On the **Configure Action** page, enter the **From** and **To** email address, the **Subject** line, the **Body Type**, and the **Body** of the email.
- Click the **Show optional fields** toggle switch to view and enter the “CC” and “BCC” email addresses.
- Click **Proceed.**
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.

You can check the email in the receiver’s email account to verify the action.

This sets up the **SendGrid** action connector.

## Common questions

### What do I need before setting up the SendGrid connector?
You need access to a SendGrid account and a SendGrid account API Key to authorize the connection.

### Where do I enter the email content for the Send Email action?
On the **Configure Action** page, enter the **From** and **To** email address, the **Subject** line, the **Body Type**, and the **Body** of the email.

### How do I add CC and BCC recipients?
Click the **Show optional fields** toggle switch to view and enter the “CC” and “BCC” email addresses.

### How can I verify the connector is working?
Click **Test Action**, then check the email in the receiver’s email account to verify the action.