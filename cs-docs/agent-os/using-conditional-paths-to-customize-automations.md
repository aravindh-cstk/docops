---
title: "[Automations guides and connectors] - Using Conditional Paths to Customize Automations"
description: Using Conditional Paths to Customize Automations
url: https://www.contentstack.com/docs/agent-os/using-conditional-paths-to-customize-automations
product: Contentstack
doc_type: guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Using Conditional Paths to Customize Automations

This page explains how to execute an Automation based on a conditional path (If/Else) in Contentstack Automation Hub. It is intended for developers and automation builders who want to route actions to different connectors depending on whether conditions are met, and should be used when designing automations that require branching logic.

## Using Conditional Paths to Customize Automations

This use case covers a scenario where you can execute an Automation based on a conditional path. The conditional path configurations are checked, and if the condition is true, the **If** step actions are executed, otherwise the **Else** step actions are executed.

Creating a new entry triggers the automation, and the conditional path configurations are checked. If the condition is true, the If step will execute the Slack connector that will send a message to the configured channel.

If the condition is false, the Else step will execute the Transform connector that will fetch the entry details from the trigger and pass these details as an object in Algolia.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:
- **Set up the Contentstack “Entry Created'' Trigger Event: **This trigger event is activated whenever a user creates a new entry in Contentstack and in turn it executes the automation.
- **Set up the Contentstack “Conditional Path”: **Once the above event triggers the automation, it checks for the configuration provided within the conditional path.
- **Set up the Slack “Send Message” action for the If step:** When the conditional path configurations are met, the If step action will send a message to the configured channel using the Slack action connector.
- **Set up the “Transform” action for the Else step: **When the conditional path configurations are not met, the Else step will execute the Transform action which will fetch the entry UID from the entry trigger as a JSON object and entry data will be merged in the final result.
- **Set up the Algolia “Index Entries” action for the Else step: **Once the transformation is complete, an object will be created in the Algolia index with the same entry UID.

The steps to set up the Automation are as follows:
- [Configure Entry Trigger](#configure-entry-trigger)
- [Configure Conditional Path](#configure-conditional-path)
- [Configure Slack Connector within the If Step](#configure-slack-connector-within-the-if-step)
- [Configure Transform Connector within the Else Step](#configure-transform-connector-within-the-else-step)
- [Configure Algolia Connector within the Else Step](#configure-algolia-connector-within-the-else-step)

Let’s look at the setup in detail.

## Configure Entry Trigger

Log in to your [Contentstack account ](https://www.contentstack.com/login/)and click the “Automate” icon.![Agent_OS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc8494fab1b356859/699d40c3370b580008b424db/image11.png)
- Click **+ New Project **to add a new project.
- Click **+ New Automation**.
- Enter the **Automation Name** and **Description**.
- Click **Create**.
- Select **Configure Trigger **from the left navigation panel.![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36d92ba8b250f552/699d43f7a9de3800086c8459/image3.png)
- Within the **Configure Trigger **step, click the **Contentstack** connector.![image23.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f18a98110e4f976/699d4475a6967e0008df547f/image23.png)
- Click **Entry Trigger** from the list of trigger events.![image24.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0d02448a34995f7/699d45072b6dd50008a8a787/image24.png)
- Add your Contentstack account. For more information, refer to the [Contentstack Trigger](./contentstack-trigger.md) documentation.
- Select **Entry Created** event from the list of events. Select a **Stack, **and a **Branch** from the **Lookup** dropdown.![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61a613b02c440df5/699d460776a08e000872844a/image5.png)
- Once done, click **Proceed**.
- Click **Test Trigger** to test the configured trigger.
- On successful configuration, you can see the below output. Click **Save and Exit**.

**Note: **You can specify trigger conditions that will determine whether the complete automation should run or not. The automation and conditional path will not be carried out if the trigger conditions are not satisfied. You can see the updated list of executions in the Execution Log section

## Configure Conditional Path

Click **Configure Action Step** from the left navigation panel.![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb1aad80ebc797d2/699d4ae58a389b0008e2f6b9/image1.png)
- Click **Conditional Path** to configure and set conditions.![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt072903cca14d818c/699d4bb22f2b150008a7fc59/image2.png)
- Click** + Add Condition**. In the **Select Input **box, enter the content type UID from the previous step. Select **Matches (Text)**, and provide the UID of the content type in the input box.![image10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf28dbac850fe209/699d4c5c50bc530008da6258/image10.png)
- Click **Save Configuration**.

## Configure Slack Connector within the If Step

When the conditional path configurations are met, the If step action of sending a Slack message is executed.

Click **+ Add Step** under the If step from the left navigation panel.![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b744b7e6868ae63/699d4cb282302d0008039f84/image7.png)
- Within the **Configure Action Step**, click the **Slack** connector.******Note:** You can sort and search the connector(s) based on the filter.
- Under **Choose an Action**, select the **Send Message** action.![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte85d4c3d43166fdb/699d4dea2664c800089242ee/image6.png)
- In the **Configure Action** tab, add your Slack account. For instructions on adding your account, refer to the [Slack](./slack.md) connector documentation.
- Select a **Channel** from the **Lookup** list where you want to send the message. Enter the message in the **Message** field.![image16.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcaaa0bea0526e34f/699d4eb38a5f830008ab5d9e/image16.png)
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- On successful configuration, you can see the below output. Click** Save and Exit**.![image9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt541ba3c1676a0dda/699d4faa490f3a0008d963cc/image9.png)
- Once you configure the Slack action, you can add other actions inside the If step using the quick select screen. Similarly, you can also configure Else steps.

  **Note:** The quick select next step screen appears only when you have configured an action inside the If-Else step.![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt00b0f31a77fd6175/699d501e8c820f0008262e0f/image4.png)

This sets the **Slack** action connector

## Configure Transform Connector within the Else Step

When the conditional path configurations are not met, the Else step actions of transformation and indexing entries in Algolia are executed.

Click **+ Add Step** under the Else step from the left navigation panel.![image17.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd203396db3515a0f/699d50d2b88caa00080c274f/image17.png)
- Within the** Configure Action **Step, click the **Transform** connector.![image25.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc97c1e61447d5c88/699d5357973a3b00089af275/image25.png)
- Under** Choose an Action**, select the **Transform **action.![image22.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddd994b9f42ee414/699d53d4b88caa00080c2767/image22.png)
- Click **Add Input**, and enter a variable name for the **Input Name** (say, “ObjectID”) and an **Input Value** configured in the previous step (entry UID) (see the screenshot in next step).
- Click **+ Add Objects to Merge **and fetch the complete entry details configured in the previous step as shown below.![image20.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49e885fcfc4019ab/699d55541abb8400085b388e/image20.png)
- In the **Transformation** field, enter the JSON code to fetch the UID value from the **Input Value** field in a variable. You can use the following code format: `{“objectID” : “{ObjectID}”}![image15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt234f84d6452cca0a/699d56af8a389b0008e2f6d1/image15.png)

`
- Click **Proceed**.
- Click **Test Action** to test the configured action.
- On successful configuration, you can see the below output. Click **Save and Exit**.![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c7d5273103efc7b/699d57932f6e3f000833ac61/image8.png)

This sets the **Transform** action connector.

## Configure Algolia Connector within the Else Step

Click **+ Add Step** under the Else step from the left navigation panel.![image13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta95d0867fd584bd2/699d586e976a3a00080febc5/image13.png)
- Within the **Configure Action** Step, click the **Algolia** connector.![image18.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt71c09e4ee8228e7b/699d58e32f2b150008a7fca3/image18.png)
- Under** Choose an Action** tab, select the Index Entries action.![image12.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48ad3d68af26cd33/699d5a2482302d0008039faf/image12.png)
- In the **Configure Action **tab, add your Algolia account. For instructions on adding your account, refer to the [Algolia](/docs/developers/automation-hub-connectors/algolia/) connector documentation.
- Select the** Index Name** where you want to send the data in the form of a list of objects.
- In the **Entries** field, select the entry data fetched from the transform step.

  **Note: **Provide your index data as per your object schema and in JSON format only.
- Click **Proceed**.
- Click **Test Action **to test the configured action.
- On successful configuration, you can see the below output. Click **Save and Exit**.
- Go to the Algolia Index section and check the latest index entry with the data.![image21.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5cefd9b93caf895/699d603b3bafa80008727c94/image21.png)

**Note:** You can view the status of your executions in the Execution Log section.

## Common questions

### What happens when the conditional path condition is true?
If the condition is true, the **If** step actions are executed (for example, the Slack connector sends a message to the configured channel).

### What happens when the conditional path condition is false?
If the condition is false, the **Else** step actions are executed (for example, the Transform connector fetches entry details and passes them as an object in Algolia, followed by indexing).

### Can I prevent the automation from running before the conditional path is evaluated?
Yes. You can specify trigger conditions that determine whether the complete automation should run or not; the automation and conditional path will not be carried out if the trigger conditions are not satisfied.

### Where can I check whether my automation steps executed successfully?
You can view the status of your executions in the Execution Log section.

<!-- filename: automations-guides-and-connectors-using-conditional-paths-to-customize-automations.md -->