---
title: "Executing an Automation"
description: "Learn to execute automations in Contentstack's Automate with this step-by-step guide."
url: /agent-os/executing-an-automation
---

# Executing an Automation

## Executing an Automation

In this use case, we will cover a scenario where, if a user publishes an entry in Contentstack, Automations should be able to deploy the selected GitHub repository on Netlify immediately. And, every time you update an entry, the Automation will redeploy the repository on Netlify.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:

1.  **Set up the Contentstack Entry Publish Trigger Event:** This trigger event is activated whenever a Contentstack entry of a particular stack is published, and in turn it activates the Automation.
2.  **Set up the Netlify Deploy Site Action:** Once the above event triggers the Automation, it will deploy your set GitHub repository (for e.g., a starter app website) to Netlify. Further, any updates to the entry content will invoke the Entry Publish trigger event and automatically redeploy your website on Netlify.

The steps to set up the Automation are as follows:

1.  [Create an Automation](#create-an-automation)
2.  [Set up the Contentstack Trigger Event](#set-up-the-contentstack-trigger-event)
3.  [Set up your Netlify Action Connector](#set-up-your-netlify-action-connector)
4.  [Test out the Automation](#test-out-the-automation)

Lets look at the setup in detail.

## Create an Automation

To create an Automation, perform the steps given below:

1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the Automate icon.
2.  Click**\+ New Project** and provide the required details to create a new project.
3.  Click**\+ New Automation** to add the steps required to configure automations.  
    

**Note:** You can now throttle the execution for your automations to avoid rate limit. For more information, refer to the [Throttle Execution](/docs/agent-os/throttle-execution) document.

Next, lets look at the steps to set up the trigger event.

## Set up the Contentstack Trigger Event

1.  Click **Configure Trigger** from the left navigation panel.  
    ![Configure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted6dd5580f67cb7d/659aaf5d3ea361a444577a75/Configure_Trigger.png)
2.  Within the **Configure Trigger** step, click the **Contentstack** connector.  
    ![Select_Contentstack_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdec7eb472bf3be40/659aaf5db0fbcb6997628faa/Select_Contentstack_Trigger.png)
3.  Add your Contentstack account. For more information, refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger/) documentation.
4.  Once done, select **Entry Published** from the list of trigger events and define the rest of the steps needed to set up the trigger (refer steps **2 to 11** in [Entry Trigger](/docs/agent-os/contentstack-trigger/#entry-trigger)) under the Contentstack Trigger section.  
    ![Select_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b039e98b5591986/659aaf5d0543c5066a8f372c/Select_Trigger_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Trigger** to execute and test the trigger that you configured.

## Set up your Netlify Action Connector

Lets configure the Netlify Action connector.

1.  Click **Configure Action Step** from the left navigation panel.  
    ![Configure_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f14b253bfa8db98/659aaf5dc11c0f7d0ecf917e/Configure_Action.png)  
    
2.  Within the **Configure Action Step**, click the **Netlify** connector.  
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
    ![Select_the_Netlify_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b7121a099ef4a7a/659aaf5d1c5d7c64bd0f3ea1/Select_the_Netlify_Connector.png)
3.  Select the **Deploy Site** action.  
    ![Select_Netlify_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07d5ce25517630e7/659aaf5e2f46f72bd7825ab3/Select_Netlify_Action.png)  
    
4.  In the **Configure Action** tab, click**\+ Add New Account** to add your Netlify account.  
    ![Add_New_Netlify_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb654d9f249c0917/659aaf5dbe5d269fdc65ab69/Add_New_Netlify_Account.png)  
    
5.  To add your Netlify account, refer to the [Netlify Connector](/docs/agent-os/netlify/) document.
6.  Click the **Site ID** text box and select an ID from the **Lookup** drop-down.  
    The Site ID is a unique identifier given to a project configured in Netlify. You can choose the desired project for which you want to configure the Netlify connector.  
    ![Select_Different_Netlify_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt037091f8b0bb0909/659aaf5dbe5d2623fe65ab6d/Select_Different_Netlify_Fields.png)
7.  Once done, click **Proceed**.
8.  Click the **Test Action** button to test the configured action connector.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12466dc6904609ee/659aaf5edd0067ed70207fe3/Test_Action.png)  
    
9.  Once the execution is successful, you will get the final output as seen in the screenshot in step 11.  
      
    This should initiate the build in your Netlify console. Navigate to your Netlify console and verify it. If you see the build initiated, that means the automation works successfully.
10.  Navigate back to your automation set up page, and click **Save and Exit** to finish setting up the action.  
     ![Save_Exit_Netlify.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3bdad0c8b3adbf6/659ab0a87d6d2e6b41b8ebab/Save_Exit_Netlify.png)

This sets up the **Netlify** action connector.

Also, you can now automate performing different actions based on certain set conditions using the Conditional Path feature. Configure your condition and set up an action step based on this condition. For more information, refer to the [What is Conditional Path](/docs/agent-os/what-is-a-conditional-path/) document.

**Additional Resource:** For a real world use case, refer to the [Using Conditional Paths to Customize Automations](/docs/agent-os/using-conditional-paths-to-customize-automations/) document.

## Test out the Automation

Now, its time to test out your automation. To do so, perform the steps given below:

1.  Go to Contentstack and [create an entry](/docs/headless-cms/create-an-entry/) for the content type that you selected in your trigger event in [Step 2](#set-up-the-contentstack-trigger-event).
2.  Once done, [publish the entry](/docs/headless-cms/publish-an-entry/). This should trigger your Automation.
3.  Now, navigate to Netlify and log in to your Netlify console.
4.  Check the **Deploy log** window to see whether Automation has initiated the build. You should see the following output:  
    ![Deploy_Log.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4873529f7a9484c0/6370ca900c4e3510952432d6/Deploy_Log.jpg)
