---
title: "[Automations guides and connectors] - Create an Algolia Object using Entry UID"
description: Create an Algolia Object using Entry UID using Contentstack Automations with Contentstack trigger, Transform action, and Algolia Index Entries action.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/create-an-algolia-object-using-entry-uid
product: Contentstack
doc_type: automation-hub-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Create an Algolia Object using Entry UID

This page explains how to set up a Contentstack Automation that retrieves an entry UID from Contentstack entry events and uses it as an object ID through the Transform connector, then indexes it into Algolia. It is intended for developers or automation builders configuring Automation Hub workflows that connect Contentstack and Algolia.

## Create an Algolia Object using Entry UID

This use case covers a scenario where Automations should be able to retrieve an entry's UID when a user creates/deletes/updates/publishes/unpublishes an entry in Contentstack. The entry UID is then passed as an object ID to the Transform connector, which creates an object with the same UID in the Algolia index once the transformation is complete.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:
- **Set up the Contentstack All'' Entry Trigger Event:** This trigger event is activated whenever a user performs an entry event such as create/delete/update etc., and in turn it activates the Automation.
- **Set up the Transform Action:** Once the above event triggers the Automation, you can fetch the entry UID and pass this value as an object in the transform field.
- **Set up the Algolia Index Entries Action:** Once the Transform action is completed, you can post the entry UID to the Algolia index as an object.

Lets look at the setup in detail.

## Create an Automation

To create an automation, perform the steps given below:

Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the **Automate** icon.
- Click **+ New Project** and provide the required details to create a new project.
- Click **+ New Automation** to add the steps required to configure automation.

Next, lets look at the steps to set up the trigger event.

## Set up the Contentstack Trigger Event

Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger** step, click the **Contentstack** connector.
- Add your [Contentstack account](https://app.contentstack.com/#!/login). For more information, refer to the [Contentstack Trigger](https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-trigger/) documentation.
- Once done, select **All**from the list of trigger events and define the rest of the steps needed to set up the trigger (refer **steps 3 to 12** in [Contentstack Trigger](https://www.contentstack.com/docs/developers/automation-hub-connectors/contentstack-trigger/)).
- Click**Test Trigger** to execute and test the trigger that you configured.
- Click **Save and Exit**.

## Set up your Transform Action Connector

Lets configure the Transform action connector.

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Transform** connector.
- Under** Choose an Action**, select the **Transform** action.
- Click **Add Input**, and enter a variable name for the** Input Name **(say, uid) and an Input Value configured in the previous step (entry UID) (see the screenshot in next step).
- Enter the JSON code to fetch the UID value from the **Input Value** field in a variable. You can use the following code: `{objectId: {uid}}`
- Click**Proceed**.
- Click **Test Action** to test the configured action.
- After successful configuration, you should see the output shown below. Click **Save and Exit**.

This sets the **Transform** action connector.

## Test the Automation

Now, lets see how you can test out your Automation. To do so, perform the steps given below:

Click **+ Add New Step**. Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Algolia** connector.
- Under **Choose an Action**, select the **Index Entries** action.
- In the **Configure Action** tab, click **+ Add New Account **to add your Algolia account.
- To add your Algolia account, refer to the[Algolia Connector](/docs/developers/automation-hub-connectors/algolia/)document.
- Select the **Index Name** where you want to send data in the form of a list of objects. You can also select the value from the previous step.
- In the **Entries** field, enter the data to be added in the Algolia index. Pass the data configured in the previous step i.e., output from the Transform action.**Note: **You must provide your index data in JSON format and based on your object schema.
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- After successful configuration, you should see the output shown below. Click **Save and Exit**.
- Navigate to the Algolia Index section and check the latest index entry with the data we passed as objects within the connector configurations. You will be able to see the data added in the object.

**Note:** You need to enable automation in order to test it.

This sets the **Algolia** action connector.

## Common questions

### What Contentstack event should trigger this Automation?
Use the **Contentstack All'' Entry Trigger Event** so the Automation is activated whenever a user performs an entry event such as create/delete/update etc.

### What value is used as the Algolia object ID?
The entry UID is retrieved and passed as an object ID to the Transform connector, which creates an object with the same UID in the Algolia index once the transformation is complete.

### What format must the Algolia index data be in?
**Note: **You must provide your index data in JSON format and based on your object schema.

### Do I need to enable the automation to test it?
**Note:** You need to enable automation in order to test it.