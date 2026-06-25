---
title: "[Automations guides and connectors] - Add New Entries to Algolia’s Search Index"
description: Guide to set up an automation that indexes newly created Contentstack entries into Algolia’s search index.
url: https://www.contentstack.com/docs/agent-os/add-new-entries-to-algolia-s-search-index
product: Contentstack
doc_type: automation-hub-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Add New Entries to Algolia’s Search Index

This page explains how to configure a Contentstack automation that triggers when a new entry is created and then sends that entry to Algolia to be indexed. It is intended for users setting up Automation Hub workflows that connect Contentstack with Algolia, and should be used when you want new content to appear in Algolia search immediately after creation.

## Add New Entries to Algolia’s Search Index

In this use case, we will cover a scenario where, if a user creates a new entry in Contentstack, automations should be able to add it immediately to Algolia's search index.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the automation:
- **Set up the Contentstack  "New Entry" Trigger Event:** This trigger event is activated whenever a user creates a new entry for a particular stack, and in turn, it executes the automation.
- **Set up the Algolia "Index Entries" Action:** Once the above event triggers the automation, it will add your entry to Algolia s Search index.

The steps to set up the automation are as follows:
- [Create an Automation](#create-an-automation)
- [Set up the Contentstack Trigger Event](#set-up-the-contentstack-trigger-event)
- [Set up the Algolia Action Connector](#set-up-the-algolia-action-connector)
- [Test out the Automation for Algolia Search Index](#test-out-the-automation-for-algolia-search-index)

Let's look at the setup in detail.

## Create an Automation

To create an automation, perform the steps given below:

Log in to your [Contentstack account](https://www.contentstack.com/login).
- After logging in, click the **App Switcher **icon, then select **Agent** **OS** from the list.
- Go to your project or click + New Project to add a new project.
- Click **+ New Automation** to add the steps required to configure the automation.

Next, let's look at the steps to set up the trigger event.

## Set up the Contentstack Trigger Event

Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger** step, click the **Contentstack** connector.
- Add your Contentstack account. For more information, refer to the [Contentstack Trigger ](./contentstack-trigger.md)documentation.
- Once done, select** Entry** **Created** from the list of trigger events and define the rest of the steps needed to set up the trigger (refer to **steps 3 to 12** in [Contentstack Trigger](./contentstack-trigger.md)).
- Click **Test Trigger** to execute and test the trigger that you configured.

## Set up the Algolia Action Connector

Let s configure the Algolia action connector.

Click **Configure Action** **Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Algolia** connector.
- Select the **Index Entries** action.
- Click the **+ Add New Account** button to select your Algolia account.
- To add your Algolia account, refer to the [Algolia Connector](/docs/developers/automation-hub-connectors/algolia/) document.
- Select the **Index Name** where you want to send the data.
- Enter the data to be added to the index in the **Entries** field.**Note**: Provide your index data as per your object schema and in JSON format only. You can also pass dynamic data from the output of the previous step i.e., Entry Trigger. For that, just create an entry in your stack and enable the automation. In the execution logs, you can see the status of the automation.
- Click **Proceed**.
- This completes the configuration of your action. Now, click the **Test Action** button to send your data to the Algolia index.
- Once the execution is successful, you will get the final output as seen in the screenshot in step 13.
- This should initiate Algolia to add your entry into its Search Index. You need to navigate to your Algolia **Index** section and check the latest indexed entry. If it displays the data we passed as objects in the Algolia action connector, that means the automation works successfully.
- Navigate back to your automation set up page, and click **Save and Exit** to finish setting up the action.
- You need to enable automation in order to test it.

This sets the **Algolia** action connector.

## Test out the Automation for Algolia Search Index

Now, let s see how you can test out your automation. To do so, perform the steps given below:

Go to Contentstack and [create an entry](../content-managers/author-content/create-an-entry.md) for the content type that you selected in your trigger event in step 2.
This should trigger your automation.
- Now, navigate to Algolia, log in and check the latest indexed entry in your **Algolia Index** section. If your automation worked, you should see the following output:

## Common questions

### What triggers the automation in this setup?
The automation is triggered when **Entry Created** is selected as the Contentstack trigger event.

### Which Algolia action is used to add data to the index?
The **Index Entries** action is used in the Algolia connector to add data to the selected **Index Name**.

### What format should the data in the **Entries** field be in?
Provide your index data as per your object schema and in JSON format only.

### Do I need to enable the automation to test it?
Yes, you need to enable automation in order to test it.