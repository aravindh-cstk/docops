---
title: "Add New Entries to Algolia’s Search Index"
description: "Learn how to automatically add entries to Algolia’s Search Index using Contentstack Agent OS with trigger-based indexing workflows."
url: /agent-os/add-new-entries-to-algolia-s-search-index
---

# Add New Entries to Algolia’s Search Index

## Add New Entries to Algolia’s Search Index

In this use case, we will cover a scenario where, if a user creates a new entry in Contentstack, automations should be able to add it immediately to Algolia's search index.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the automation:

-   **Set up the Contentstack  "New Entry" Trigger Event:** This trigger event is activated whenever a user creates a new entry for a particular stack, and in turn, it executes the automation.
-   **Set up the Algolia "Index Entries" Action:** Once the above event triggers the automation, it will add your entry to Algolia s Search index.

The steps to set up the automation are as follows:

1.  [Create an Automation](#create-an-automation)
2.  [Set up the Contentstack Trigger Event](#set-up-the-contentstack-trigger-event)
3.  [Set up the Algolia Action Connector](#set-up-the-algolia-action-connector)
4.  [Test out the Automation for Algolia Search Index](#test-out-the-automation-for-algolia-search-index)

Let's look at the setup in detail.

1.  ## Create an Automation
    
    To create an automation, perform the steps given below:
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
    2.  After logging in, click the **App Switcher** icon, then select **Agent** **OS** from the list.![App_Switcher_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e8ac72768458f95/699d373d68c24300082b30de/App_Switcher_Icon.png)
    3.  Go to your project or click + New Project to add a new project.
    4.  Click **\+ New Automation** to add the steps required to configure the automation.
    
    Next, let's look at the steps to set up the trigger event.
    
2.  ## Set up the Contentstack Trigger Event
    
    1.  Click **Configure Trigger** from the left navigation panel.  
        ![Configure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ad2f1723ca93ed4/699d36fe3f35720008e050cc/Configure_Trigger.png)
    2.  Within the **Configure Trigger** step, click the **Contentstack** connector.  
        ![Select_Contentstack_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ef3f31fd371b2ed/699d36feead2f50008c96c46/Select_Contentstack_Trigger.png)  
        
    3.  Add your Contentstack account. For more information, refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger/) documentation.
    4.  Once done, select **Entry** **Created** from the list of trigger events and define the rest of the steps needed to set up the trigger (refer to **steps 3 to 12** in [Contentstack Trigger](/docs/agent-os/contentstack-trigger/)).![Entry_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0351bb1bfc1dce2c/699d36fe7603c100089f2885/Entry_Trigger_Fields.png)
    5.  Click **Test Trigger** to execute and test the trigger that you configured.
3.  ## Set up the Algolia Action Connector
    
    Let s configure the Algolia action connector.
    
    1.  Click **Configure Action** **Step** from the left navigation panel.  
        ![Configure_Action_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13eee4f886a5ea8c/699d36fd7603c100089f2881/Configure_Action_Step.png)
    2.  Click **Action Step** to configure third-party services.  
        ![Select_Action_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e9582f1486e33ba/699d36fe48bd410008f0a25d/Select_Action_Step.png)
    3.  Within the **Configure Action Step**, click the **Algolia** connector.  
        ![Select_Algolia_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ff3ba151c355384/699d36feead2f50008c96c42/Select_Algolia_Connector.png)  
        
    4.  Select the **Index Entries** action.  
        ![Select_Algolia_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2d80d5e8a7580c1/699d36fe8b33e4000870cd85/Select_Algolia_Action.png)
    5.  Click the **\+ Add New Account** button to select your Algolia account.
    6.  To add your Algolia account, refer to the [Algolia Connector](/docs/agent-os/algolia/) document.
    7.  Select the **Index Name** where you want to send the data.
    8.  Enter the data to be added to the index in the **Entries** field.
        
        **Note:** Provide your index data as per your object schema and in JSON format only. You can also pass dynamic data from the output of the previous step i.e., Entry Trigger. For that, just create an entry in your stack and enable the automation. In the execution logs, you can see the status of the automation.
        
    9.  Click **Proceed**.
    10.  This completes the configuration of your action. Now, click the **Test Action** button to send your data to the Algolia index.
    11.  Once the execution is successful, you will get the final output as seen in the screenshot in step 13.
    12.  This should initiate Algolia to add your entry into its Search Index. You need to navigate to your Algolia **Index** section and check the latest indexed entry. If it displays the data we passed as objects in the Algolia action connector, that means the automation works successfully.
    13.  Navigate back to your automation set up page, and click **Save and Exit** to finish setting up the action.
    14.  You need to enable automation in order to test it.
    
    This sets the **Algolia** action connector.
    
4.  ## Test out the Automation for Algolia Search Index
    
    Now, let s see how you can test out your automation. To do so, perform the steps given below:
    
    1.  Go to Contentstack and [create an entry](/docs/headless-cms/create-an-entry) for the content type that you selected in your trigger event in step 2.  
        This should trigger your automation.
    2.  Now, navigate to Algolia, log in and check the latest indexed entry in your **Algolia Index** section. If your automation worked, you should see the following output:  
        ![Algolia-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88952b016fd2a78c/63d8df8e9d7bcb54223510f3/Algolia-Output.png)
