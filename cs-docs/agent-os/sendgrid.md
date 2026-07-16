---
title: Automations guides and connectors - SendGrid
description: Set up the SendGrid action connector to send email using an automation action step.
url: https://www.contentstack.com/docs/agent-os/sendgrid
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
- Within the **Configure Action Step**, click the **SendGrid** connector.![Sendgrid.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt145c5b9c9ae8b5c8/6527f8e169ac257a41176c58/Sendgrid.png)
- Under **Choose an Action** tab, select the **Send Email **action.![Select-Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f097179293e2fb3/63db9d4814a2b44fa11dec62/Select-Action.png)
- Click the **+ Add New Account** button to set up your SendGrid account (see screenshot in next step).![Add-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt369c6870cf7b0c43/63db9d470b15864e35bded0d/Add-Account.png)
- In the Authorize modal, enter a **Title** for your connection and your SendGrid account API Key. Then click **Authorize**. For more information, refer to the [How to create an API key](https://docs.sendgrid.com/ui/account-and-settings/api-keys) document.![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30f1beb47bf3801d/63db9d47d0a39b6b6a9bd8aa/Authorize.png)
- On the **Configure Action** page, enter the **From** and **To** email address, the **Subject** line, the **Body Type**, and the **Body** of the email.![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ea4c43c7ce703a3/63db9d4786b8be36ce831d65/Select-Fields.png)
- Click the **Show optional fields** toggle switch to view and enter the “CC” and “BCC” email addresses.
- Click **Proceed.**
- Check if the details are correct. If yes, click **Test Action**.![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7466e3d7cc3494f8/63db9d48c338484e3b194cc9/Test-Action.png)
- Once set, click **Save and Exit**.![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltafd0219ba36df178/63db9d48e69a581225555005/Save-Exit.png)

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