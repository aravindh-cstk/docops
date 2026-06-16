---
title: [Automations guides and connectors] - Error Notification
description: Learn how to configure Agent OS error notifications for alerts on failed automations via execution logs and email.

url: https://www.contentstack.com/docs/developers/automation-hub-guides/error-notification
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-20
filename: error-notification.md
---

# [Automations guides and connectors] - Error Notification

This page explains [Automations guides and connectors] - Error Notification for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Error Notification

The Error Notification feature warns users when they encounter an error during automation configuration. Execution log records this error, and the recipient is notified via email.

Follow the steps below to configure the error notification settings for your automation:

1. Log in to your [Contentstack account](https://www.contentstack.com/login/).
2. After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_switcher_icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6290d7afc992eda9/6998761148bd410008f0963f/App_switcher_icon.png)
3. On the **Projects** page, click the **Settings** icon in the top-left corner.![Project_Settings_Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc4b6d05a6971768b/6998738cead2f50008c95ec3/Project_Settings_Icon.png)
4. Within the Settings page, enable the **Email Notifications** toggle button to send an email notification to the recipients. You can select multiple users to send emails at once. Choose the **Primary Recipient(s)** from the dropdown, i.e., **Automation Creator**, **Org Owner**, or **Org Admins**. You can also select other users who can access Agent OS and the respective Project from the **Add Other Recipients(s)** dropdown. After adding recipients, click **Save** to save your settings.  
   If you select the recipient as Automation Creator, Org Owner, or Org Admins, then the email notification will be sent to the creator of that automation, owner, or admins of the organization.

   **Note**: By default, the setting is disabled. You can enable it from the Projects landing page.
5. By setting the **Frequency of Notifications**, you can send email notifications to the recipients **Immediately**, **Daily**, and on a **Weekly** basis.

   **Note:** A report will be generated if you select **Daily** or **Weekly** frequency to send the notifications.

   ![Email_configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b46eb865a167656/6998738c2b6dd50008a89a19/Email_configuration.png)
6. Select the number of execution(s) per second for the **Throttle Frequency** to enable throttling for the organization. You can define the frequency of executing an automation if the throttling feature is enabled on a specific automation.

   Suppose you select three executions per second; then, three requests will be executed in one second, which increases the speed of execution.

   **Note:** You **must** enable the *Throttle Execution* toggle button that is available in the Settings of your automation to activate it.

   ![Throttle_Frequency](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f7d51905f79ecc6/6998738c5a4f770008232368/Throttle_Frequency.png)

Let’s understand how a recipient is notified via email through a simple use case. Create a new automation and follow the steps given below:

1. ## Configure Trigger

   1. In the **Configure Trigger** section, click **HTTP**.
   2. Select **HTTP Request Trigger** and click **Proceed**.

      **Note:** You can add security to the HTTP trigger using an API key. To do so, enable the toggle button.

      ![HTTP_trigger](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30852df541facc87/6998738de8917700087c2194/HTTP_trigger.png)
   3. Send a request to the URL mentioned. Once done, click **Test Trigger**.
   4. Click **Save and Exit**.
2. ## Configure Action

   Select the **Transform** connector and the **Transform** action.

   1. In the Transformation box, input the data as for ex: {'name': 'Error Notification'}. The JSON syntax for the transformation box data is incorrect. It is kept so to check if the user gets error notification for the same. Click **Proceed**.
   2. Click **Test Action**. You will get an error message. Click **Save and Exit**.![Save_exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt882e2cc76e7731f5/6998738d8b33e4000870c1b4/Save_exit.png)
   3. Once done, enable the automation and navigate to the **Execution Log** section.
   4. Send the request to the URL mentioned in the **HTTP Trigger** to execute the automation.
   5. You will see a failed execution in **Execution Log**.
   6. Navigate to the email client to check the email received for this error.![Test_automation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75122fc8847509ac/6998738c3f35720008e044e3/Test_automation.png)

With **Error Notification**, you can get an instant response for your failed or unsuccessful automations.

## Common questions
### What is covered in [Automations guides and connectors] - Error Notification?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Error Notification?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
