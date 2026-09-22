---
title: "Gmail"
description: "Use the Gmail connector to automate sending emails."
url: /agent-os/gmail
uid: blt2baafcff4da057f8
---

# Gmail

## Gmail

The **Gmail** connector is used to send emails to the authenticated users.

**Note:** The **Gmail** connector is **available** both in **Automations** (as a connector) and in **Agents** (as a tool).

## Set Up the Gmail Connector

Perform the following steps to set up the Gmail connector:

1.  Log into the [Contentstack account](https://www.contentstack.com/login/).
2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_Swicther.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am42ceed61ec8d14a7/b67ccd75b89006d6e65c8741/App_Swicther.png?locale=en-us)
3.  Open your project or [create](https://www.contentstack.com/docs/agent-os/managing-projects#create-a-project) a new one.
4.  From the **Agent OS Dashboard** screen, click **\+ New Automation**, then click **Create New** to configure the trigger and action step.
5.  Click **Configure Action Step** in the left navigation panel.
6.  Click **Action Step** to configure third-party services.
7.  Within the **Configure Action Step**, click **Gmail**.![Gmail_Connector.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am06011d2cdd6a4f14/2493a625460d4a5479e03ba9/Gmail_Connector.png?locale=en-us)
8.  Under the **Choose an Action** tab, select **Send Email**.
9.  Click **\+ Add New Account** to set up your Gmail account.
10.  In the **Manage Permissions** modal, review the permission granted: **Send emails on your behalf**.
11.  Enter the following details to send the email:
     1.  **To** (required): Enter the user's email ID to whom you want to send the email. You can add multiple email IDs separated by a new line.
     2.  **Subject** (required): Enter the subject of the email.
     3.  **Body** (required): Enter your message.
     4.  Click **Show optional fields** to reveal:
         -   **Body Type**: Send the email as **Text** or **HTML**.
         -   **Cc**: Add recipient email addresses to Cc. Enter one email address per line.
         -   **Bcc**: Add recipient email addresses to Bcc. Enter one email address per line.![Select_Fields.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amb103f75a559f4f4f/de01df02ae10482bd634438d/Select_Fields.png?locale=en-us)
12.  Click **Proceed**.
13.  Click **Test Action** to test whether the email sending was successful.
14.  The system queues the email and sends it to the recipient's email address. Click **Save and Exit** to close the window.
15.  Check the recipient's inbox to confirm the email was sent.

This sets up the **Gmail** connector.
