---
title: "[Automations guides and connectors] - Sub Automation Action"
description: Documentation for configuring and using the Sub Automation action connector in Automation Hub connectors.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/sub-automation-action
product: Contentstack
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Sub Automation Action

This page explains what the Sub Automation action connector is and how to configure it, including an end-to-end example workflow. It is intended for developers and automation builders who are setting up Automation Hub connectors and need to fetch and use sub automations within a larger automation process.

## Sub Automation Action

A sub automation involves creating smaller, specialized automation tasks as part of a larger automation process. These sub automations help break down complex tasks into more manageable steps, making it easier to design, implement, and maintain the overall automation process. The Automate Sub Automation action connector lets you fetch the sub automation created in a project. This can be useful while working with the ChatGPT based [Function Calling](/docs/developers/automation-hub-connectors/chatgpt#action-4-select-the-function-calling-action) action.

## Set up the Sub Automation Action

Perform the following steps to configure the Sub Automation action:

- Click **Configure Action **from the left navigation panel.
- Within the **Configure Action Step**, click the **Sub Automation** connector.
- Under **Choose an Action** tab, select the **Sub Automation** action.
- Select the **Sub Automation **from the dropdown. This fetches a list of all the sub automations created in a project.
- Enter the values in the** Sub Automation Template**. The schema is fetched from the configured sub automation.**Note:** Only **Live **Sub Automation(s) will be displayed in the drop-down menu.
- Click the **Proceed **button.
- To test the configured action, click the **Test Action **button.
- Click the **Save and Exit **button.

This completes the configuration of your **Sub Automation **action connector.

Let’s see an example to understand the use of Sub Automation action connector.

In this use case, we will cover a scenario where, if a user creates a new entry in Contentstack, the automations should be able convert the given entry in German language and create a new entry for German language in Contentstack.

## Configure Entry Trigger

- Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger** **Step**, click the **Contentstack **connector.
- Under the **Choose Trigger** step, select the **Entry Trigger**.
- Click **+ Add New Account** to add your Contentstack account. For more information refer to the [Contentstack Trigger](/docs/developers/automation-hub-connectors/contentstack-trigger) documentation.
- Select the **Event **and the **Stack **for which you want to configure the trigger.
- Optionally enable the **Show Optional Fields** toggle to select the Content Type in which you want to create an entry.
- Click the **Proceed **button.
- Click the **Test Trigger **button.
- Click the **Save and Exit **button. An entry will be created in the selected content type as shown below.

## Configure Sub Automation Action

- Click **Configure Action **from the left navigation panel.
- Within the **Configure Action step**, click the **Sub Automation **connector.
- Under **Choose an Action**, select the **Sub Automation **action.
- Select the **Sub Automation **from the Lookup dropdown. You see a list of all the sub automations created in a project.
- Enter the data in the **Sub Automation Template**. This fetches the template for the selected sub automation. In our case, we are using a [Sub Automation](/docs/developers/automation-hub-connectors/sub-automation-trigger) trigger.
  In the **Value **field, select the entry name created in the entry trigger as shown below:
- Click the **Proceed **button.
- Click the **Test Action **button.
- Click the **Save and Exit **button. You see the entry is converted in to German language as shown below:

In the next step, we will create a new entry for the translated text.

## Configure Create an Entry Action

- Under **Choose an Action** tab, select the **Create Entry **action.
- In the **Configure Action **tab, click + Add New Account to add your Contentstack account. Refer to the [Contentstack](/docs/developers/automation-hub-connectors/contentstack-action) action connector for adding an account.
- Select a **Stack**, **Branch**, and **Content Type **from the **Lookup **list. Provide your entry data in the **Entry Data **field.**Note: **Provide your entry data as per your content type schema in JSON format only.

You can fetch the UID for all the previously configured automation steps directly from the Lookup list as shown below:

- In the **Entry Data **field, you can add a predefined schema template for your entry data. This will add a structure to provide your entry data in a particular format for different fields. Enter the “title” value from the previous step, i.e. the title of the translated content.**Note: **You must manually configure the entry data for JSON Rich Text Editor, Custom, and Experience Container fields.
- Click **Proceed**.
- Click **Test Action **to test the configured action.
- Click the **Save and Exit **button.
- Activate the automation and create an entry in Contentstack. You see a new translated entry is also created.

Activate the automation to check the output. You can use this sub automation trigger to invoke a sub automation action. Both are **interdependent **on each other.

## Common questions

### What does the Sub Automation action connector do?
The Automate Sub Automation action connector lets you fetch the sub automation created in a project.

### Why would I use a sub automation?
These sub automations help break down complex tasks into more manageable steps, making it easier to design, implement, and maintain the overall automation process.

### Will all sub automations appear in the dropdown?
**Note:** Only **Live **Sub Automation(s) will be displayed in the drop-down menu.

### Can this be used with ChatGPT Function Calling?
This can be useful while working with the ChatGPT based [Function Calling](/docs/developers/automation-hub-connectors/chatgpt#action-4-select-the-function-calling-action) action.