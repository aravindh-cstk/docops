---
title: "[Automations guides and connectors] - Send Newly Transformed Data via Email"
description: Guide to set up an automation that triggers on Contentstack entry creation, transforms input data, and sends the transformed data via Email by Agent OS.
url: https://www.contentstack.com/docs/agent-os/send-newly-transformed-data-via-email
product: Agent OS
doc_type: automation-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Send Newly Transformed Data via Email

This page explains how to build an automation that triggers when a new Contentstack entry is created, transforms the input JSON using transform modifiers, and then sends the transformed data via Email by Agent OS. It is intended for users configuring Agent OS Automations with the Contentstack and Transform connectors, and should be used when you need to format data before delivering it by email.

## Send Newly Transformed Data via Email

In this use case, we will cover a scenario where, if a user creates a new entry in Contentstack, automations should be able to transform the input data as per the transform modifier. You can use different transform modifiers such as camelCase, capitalize etc., to modify your final output.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the automation:
- **Set up the Contentstack “Entry Created” Trigger Event:** This trigger event is activated whenever a user creates a new entry for a particular stack, and in turn, it activates the automation.
- **Set up the Transform Action:** Once the above event triggers the automations, it will modify the JSON code passed in the transformation box.
- **Set up the Email by Agent OS “Email by Agent OS” Action:** Once the Transform action is completed, you can post the transformed JSON data to Email by Agent OS.

Let’s look at the setup in detail.

## Create an Automation

To create an automation, perform the steps given below:

After logging in, click the **App Switcher** icon, then select **Agent OS **from the list.
- Go to your project or click **+ New Project** to add a new project. Enter a** Project Name** and an optional **Description**.
- In the top navigation click **Automations**. Then, click **+ New Automation**. From the dropdown, click **Create New** to add the steps required to configure the automation.

Next, let’s look at the steps to set up the trigger event.

## Set up the Contentstack Trigger Event

Click **Configure Trigger **from the left navigation panel.
- Within the **Configure Trigger** step, click the **Contentstack** connector.
- Add your [Contentstack account](https://app.contentstack.com/#!/login). For more information, refer to the [Contentstack Trigger](/docs/developers/automation-hub-connectors/contentstack-trigger/) documentation.
- Once done, select **Entry Created** from the list of trigger events and define the rest of the steps needed to set up the trigger (refer **steps 3 to 12 **in [Contentstack Trigger](/docs/developers/automation-hub-connectors/contentstack-trigger/)).
- Click **Test Trigger** to execute and test the trigger that you configured.

## Set up your Transform Action Connector

Let’s configure the Transform action connector.

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Transform** connector.  
  **Note: **You can sort and search the connector(s) based on the filter.
- Select the **Transform** action.
- Click **Add Input**, and enter a variable name for the **Input Name** (say, “name”) and an **Input Value** for the variable (say, “john” in lowercase letters) (see screenshot in next step).**Note**: You can even pass the value directly into the **Transformation** box.
- Let’s enter the JSON code that uses the “capitalize()” modifier in the Transformation box. Use the following code:{“result” : “{capitalize(name)}” }**Note:** You can use the data received from the trigger instead of manually adding the values.
- Click **Proceed**.
- Click **Test Action** to execute the JSON code.
- You should see the output with the first letter capitalized. Click **Save and Exit** for the Transform process flow.

This sets the **Transform** action connector.

## Test the Automation

Now, let’s see how you can test out your Automation. To do so, perform the steps given below:

Go to Contentstack and [create an entry ](/docs/content-managers/working-with-entries/create-an-entry/)for the content type that you selected in your trigger event in Step 2.  
This should trigger your Automation.
- To post the JSON data by sending an email through the Email by Automate action connector:  
  Click **+ Add New Step**. Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Email by Agent OS** connector.
- Select the **Email by Agent OS** action.
- In the **Configure Action** tab, enter the following details:  
  Email address of the recipient
- The **Subject** for the email.
- Under the **Body Type** field, enter the type.
- Add the email content within the **Body** field.
- Additionally you can add optional fields such as the “CC” and “BCC” email addresses.**Note: **You can use the output from the transform action and send it to your email.
- Click **Proceed.**
- To execute and test the configured action, click **Test Action**.
- The email is queued and sent to the recipient’s email address. Click **Save and Exit**.
- To check the email, navigate to your inbox.

## Common questions

### Can I use data from the trigger instead of manually adding values in the Transform step?
Yes. The page notes: “You can use the data received from the trigger instead of manually adding the values.”

### What transform modifiers can be used in the Transformation box?
The page mentions examples such as camelCase and capitalize, and demonstrates using the “capitalize()” modifier.

### How do I confirm the automation is working end-to-end?
Use **Test Trigger** for the trigger, **Test Action** for the Transform and Email steps, and then “navigate to your inbox” to check the email.

### Can I send the transformed output directly in the email body?
Yes. The page notes: “You can use the output from the transform action and send it to your email.”

<!-- filename: automations-guides-and-connectors-send-newly-transformed-data-via-email.md -->