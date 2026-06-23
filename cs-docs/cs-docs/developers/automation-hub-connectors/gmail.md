---
title: "[Automations guides and connectors] - Gmail"
description: Use the Gmail connector to send emails using your own Gmail account.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/gmail
product: Automations
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Gmail

This page explains how to use and set up the Gmail connector in Automations to send emails from your own Gmail account. It is intended for developers and automation builders configuring email-sending actions, and should be used when you need to authorize a Gmail account and test sending an email through an automation.

## Gmail

You can use the **Gmail** connector to send emails using your own Gmail account.

## Set Up Gmail

Perform the following steps to set up the Gmail action connector:
- In the **Configure Action** section, select the **Gmail connector**.
- Select the **Send Email** action.
- Click the **+ Add New Account** button to select your Gmail account.
- Select the necessary permissions and click **Authorize**.
- Select the Gmail address (account) from where you want to send the email.
- Click the **Allow** button to give permissions to the Automations app.
- You can enter an account name in the Automations app (for example, the account name can be “Testing from Gmail”).
- On the actions page, enter the **To** email address, the **Subject** line, and the **Body** of the email. The **Show optional fields** toggle switch allows you to enter the “CC” and “BCC” email addresses.
- Click **Proceed** after entering the details.
- Click on **Test Action** to send the email using the Gmail account.
- Once set, click on **Save and Exit**.
- You can check the email in the receiver’s email account sent by your Gmail email address.

This sets up the Gmail action connector.

## Common questions

**How do I add a Gmail account to the connector?**  
Use **+ Add New Account**, select your Gmail account, choose permissions, and click **Authorize**, then **Allow**.

**Can I send CC and BCC emails with this connector?**  
Yes. Use the **Show optional fields** toggle switch to enter the “CC” and “BCC” email addresses.

**How do I verify the connector is working?**  
Click on **Test Action** to send the email using the Gmail account, then check the email in the receiver’s email account.

**What information is required to send an email?**  
Enter the **To** email address, the **Subject** line, and the **Body** of the email.