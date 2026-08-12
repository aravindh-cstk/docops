---
title: "Get Started with Automations"
description: "Manage and monitor your agents, automations, and executions in one place with the Dashboard for smarter, scalable workflows."
url: /agent-os/get-started-with-automations
---

# Get Started with Automations

## Get Started with Automations

This guide will walk you through the essentials of getting started with automations. Whether you are looking to integrate multiple tools, automate routine operations, or design custom workflows, Automate offers a user-friendly, visual interface to help you achieve these goals without requiring programming expertise.

With built-in security and seamless integration capabilities, Automate empowers both technical and non-technical team members to build workflows that meet evolving business needs.

Let’s dive in and start automating!

## Prerequisites:

1.  [Contentstack account](https://www.contentstack.com/login)
2.  [Admin](/docs/headless-cms/types-of-roles#admin)/[Owner](/docs/headless-cms/types-of-roles#owner) access for the Contentstack stack

The basic steps of the workflow can be broadly classified into the following:

1.  [Create Project](#create-project)
2.  [Create Automation](#create-automation)
3.  [Test Automation](#test-automation)
4.  [Activate Automation](#activate-automation)

Let’s look at the steps in detail.

## Create Project

To get started with automations, you need to [create](/docs/agent-os/managing-projects#create-a-project) a project. Projects help you keep everything related to your automations, agents, executions, and audit log set up under one location in an organized manner.

To create a project, perform the steps given below:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_Switcher_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18dc201cc44f2470/699bdcf2da5d88000881eee1/App_Switcher_Icon.png)
3.  Click **\+ New Project**.
4.  In the **Create New Project** modal, enter the **Project Name** (for example, Slack-automation), an optional **Description**, and click **Create**. You can also add Tags for your project as shown below.  
    ![Create_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd628baded5169da9/651ba2c1375d982bd89cdada/Create_Project.png)

The above steps open the Agent OS Dashboard page.

## Create an Automation

Automation is the process of creating a workflow that sets up a connection between two or more web apps or services, including Contentstack.

Automations help you set up specific steps that will perform based on the specified conditions. Once you define these steps, Contentstack Automations will automate the executions of the steps.

First, perform the following steps to create an Automation:

1.  In the top navigation panel, click **Automations**.
2.  On the **Automations** listing page, click **\+ New Automation**. From the dropdown, select **Create New.**
3.  In the **Create Automation** modal, provide an **Automation Name** and an optional **Description**. Click **Create**.![Create_New_automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteba2954e341f49a3/67c8092a39a3ca8277112357/Create_New_automation.png)
4.  After entering the basic details of the automation in the above step, the next set of actions can be broadly classified into the following two main steps:
    
    1.  [Configure Trigger](#configure-trigger)
    2.  [Configure Action Step](#configure-action-step)
    
    **Note:** You can now throttle the execution for your automations to avoid rate limit. For more information, refer to the [Throttle Execution](/docs/agent-os/throttle-execution) document.
    
    Let’s look at the above steps ‌in the next section.
    
    ### Configure Trigger
    
    Triggers are conditions or invocation points that fire off an Automation when an event occurs in Contentstack or an external app or service. They help automate a business workflow to accomplish required tasks.
    
    **Note:** You can click the **Add any additional context or notes relevant to this section** text to add additional details about the trigger step.
    
    Configuring a trigger can be broken into the following steps:
    
    1.  Click **Configure Trigger** from the left navigation panel.
    2.  **Choose Connector**: Here, you can select Contentstack or an available third-party app or service which will serve as the trigger connector. For example, click **HTTP**.
        
        **Note:** For more details on the “HTTP” Connector and other available connectors, refer to [Automate Connectors](/docs/agent-os/).
        
    3.  **Choose Trigger**: Select the Trigger or the webhook event listed under the selected connector. In our case, you will select the **HTTP Request Trigger.** This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.  
        ![Choose_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90416d94f2f39023/659a7c21254eff8a34747e5a/Choose_Trigger.png)
    4.  **Configure Trigger**: Here, you need to provide additional details with respect to the trigger you selected in the above step. This section will differ for each trigger. For our example, click the displayed **Method**, i.e., **GET/POST**. You can also enable the **Secure HTTP Trigger** using the toggle to add security to the HTTP trigger and click **Proceed**.
        
        **Note:** For more information, refer to the [HTTP Trigger](/docs/agent-os/http-trigger/) documentation.
        
        ![Select_Method_Secure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb02aa49bd9060ed5/659a7c50d082f77c7f261447/Select_Method_Secure_Trigger.png)
        
        You will find the applicable **Input methods** and an **Input URL** in the **Test Trigger** section.
        
        **Note:** You will see a similar URL, even If you update the configuration before testing the trigger.
        
    5.  **Test Trigger**: The final step is to test the trigger you created. The Input URL you find here will be the webhook URL that you can use to see the automation working. Click **Test Trigger**.  
        ![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4e820136b9d81f43/659a7c6b0543c568898f3719/Test_Trigger.png)
        
        You should be able to see the output as follow:  
        
        ![Output_Error.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48150a59ba6e55b9/659a7c2fb05b9eb40ed73f9e/Output_Error.png)
        
        **Note:** The output doesn’t appear because we haven’t tested the Trigger URL yet.
        
        Next, to try if the trigger is working real-time, perform the following steps:
        
        1.  Copy the **Input URL** that you see above and paste it on a new browser tab.
        2.  Pass a query parameter to the Input URL, for example, https://trigger\_input\_URL?**name="john"** and hit enter. You should see an output similar to the following:  
            {"result":"The automation is currently being tested or not activated","rule\_id":"1111ababa11111","trigger\_id":"1111ab1c1ab11111ca11b111111ca1bc"}
        3.  Return to your **Test Trigger** setup page and click **Restest**. In the output, you will see your query parameter as follows:  
            query:  
            name:"john"
            
            Here’s what you see  
            
            ![Save_and_Exit-trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c1446aedacd91de/659a7e68be5d266ae365ab5b/Save_and_Exit-trigger.png)
        4.  The **Apply Trigger Conditions** section lets you filter the data displayed in the output. For example, if you want your trigger to proceed further with the configured actions, under the condition that the name parameter (the one you passed in the above step) is “scott” in the output result, click **\+ Add Trigger Condition** and pass the following filter condition:  
            query.name | Matches (Text) | scott
            
        5.  Lastly, you can either pass a new query parameter and **Retest** the trigger or hit **Save and Exit** (see screenshot in **step 3**).
    6.  This completes your step of configuring your HTTP trigger.
        
    7.  **Note:** You will find more details on how to [rename a trigger](/docs/agent-os/managing-triggers#rename-a-trigger/) and [delete a trigger](/docs/agent-os/managing-triggers#delete-a-trigger/) in the "[Working with Automate](https://www.contentstack.com/docs/agent-os#working-with-automate)" section.
        
    
    ### Configure Action Step
    
    Action is the event that happens as a result of a triggered event.
    
    To understand the concept of Actions, let’s consider the above example where you set an **HTTP Request** trigger that is activated when a user fires a GET/POST request. And, you can set up an action that will notify a particular **Slack** channel when such an event occurs.
    
    After configuring the Trigger, click **Configure Action** **Step** and perform the following steps to set up the corresponding action:
    
    **Note:** You can click the **Add any additional context or notes relevant to this section** text to add any additional details about the action step.
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  **Choose Connector**: Click the connector (Contentstack or a third-party app or service) where you want your workflow to perform the next set of actions. In our case, click **Slack**.  
        ![Select_Slack_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d4add08399df588/659a7c6bbb2e10197d012258/Select_Slack_Connector.png)
    4.  **Choose an Action**: Select the action listed under the selected connector, Slack. In our case, select **Send Message** that will send a message to a specific Slack channel that you choose.  
        ![Select_Slack_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85675cfa86286269/659a7c5c14672fb5be6fadea/Select_Slack_Action.png)
    5.  **Configure Action**: Here, you need to provide additional details for the action you selected in the above step. This section will differ for each action. For our example, we will add the Slack account.
        1.  Click **\+ Add New Account** (add Slack account).
        2.  You will see a list of permissions that you can choose to **Authorize**.
            
            **Additional Resource:** Refer to the Slack connector documentation to know more about the permissions.
            
        3.  Next, you will see a window open with access requests from the app. Click **Allow** to proceed further.  
            ![Allow-Access-Slack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd2cde0a08775432/63d8afda5b2c1e6188c567cc/Allow-Access-Slack.png)
        4.  Enter a **Title** for this account, say “Allow-Slack-access” and click **Save**.  
            ![Save_an_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8751777c2ada6000/659a7c2e0543c560408f3711/Save_an_Account.png)
        5.  Next, click the **Channel** textbox. It displays a **Lookup list** containing all the channels in your Slack account. Click **Load More** until you locate your channel.  
            For our example, select the **sample** channel, and its name is displayed in the entry box.  
            
            ![Select_Slack_Channel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb1ecc953f705ff1/67c8092a21a60e396ea4829b/Select_Slack_Channel.png)
        6.  Click the **Message** textbox. You will see all the values related to the “1.HTTP Request trigger” you set up earlier. Click a parameter, say query.name, that you want to send as a message to the selected Slack channel.![Query_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d70071a6e0d526f/659a7c2fa8ee43b6ee19aaf0/Query_Name.png)  
            For example, if you want to send the name param, select query.name and type ahead a message if needed, say “1.query.name has sent a GET/POST request”.  
            
            ![Slack_Message.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt057ad2174e54fd21/67c809e4d1b1de1796ca9427/Slack_Message.png)
        7.  Once done, click **Proceed**.
    6.  **Test Action**: Finally, you can test the configuration you have set up by clicking on the **Test Action** button.
        
        The output shows the message that will be sent on the linked Slack channel.
        
        ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd20c72e21cd5f07d/659a7c2f0543c534458f3715/Save_Exit.png) Check your Slack channel. You will see the message delivered to the Slack channel as below:  
        ![Slack_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta59c965b8bfc3895/659a7c5dc3fb27daf919ef42/Slack_App.png)
        
        Once it works as expected, click **Save and Exit**.
        
        The action is now tested. If you hover over the number (2), the message “Tested” will be displayed.  
        ![Tested_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6645e822438c28dc/659a7c6c1c5d7c75050f3e83/Tested_Step.png)
5.  You can add multiple actions in an automation if needed. To do so, click the **\+ Add New Step** icon below the added action.
    
6.  ![Add_New_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd98f313fe5db3f21/659a7c212d26123e5de763e3/Add_New_Step.png)

Then, perform all the steps similar to steps that were covered in the Step 2.2 - [Configure Action](#configure-action) section.

Once done, on the left panel of the page, you will see the Automation Steps summarizing the trigger and actions used in the automation.

![Automation_Steps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfb7ceaa414b486f/659a7c2190dcf2e17f648592/Automation_Steps.png)

**Note:** You will find more details on how to [edit automation details](/docs/agent-os/managing-automations#edit-automation-details/), how to [delete an automation](/docs/agent-os/managing-automations#delete-an-automation/), and other actions in the [Additional functions on Triggers and Actions](/docs/agent-os/) section.

You can add a new step in between the configured automation steps. Suppose, you want a add a new action step in between two configured actions, then hover over the line between the two steps and click the **+** sign as shown below:

![Add_Step_Between.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb49c418872da1471/659a7c21dc766222487ec073/Add_Step_Between.png)

You can perform the following actions in configured steps:

-   **Copy Step:** Copy and paste the step anywhere in the automation.
-   **Clone Step:** Duplicate and add the step immediately below the existing step.
-   **Delete Step:** Remove the existing step.
-   **Paste Step:** After copying, use the Paste icon to insert it after a preferred step.

![Copy_Steps.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8653c31e318cc62/67bc09a956adc477e293b3b0/Copy_Steps.png)

Additionally, you can also use **Control + C** and **Control + V** to copy and paste the step.

**Note:** If your automation has an unconfigured step, you can override it and configure a new one.

## Test Automation

Now that you have tested and verified that the automation is working as expected, test out its working in the respective connector you have added as trigger or action.

If you see the changes you incorporated in the above processes are working fine. You are ready to activate the automation for use. If not, revisit all the above steps.

## Activate Automation

Once your automation is ready for use, you need to activate it to use it in your projects.

To do this, click the toggle button at the top-left corner:

![Activate_Automation_Toggle.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb906db736d86a173/659a7c21be5d2668e365ab53/Activate_Automation_Toggle.png)

You can also configure another Action Step, Repeat Path or a Conditional Path quickly and easily. The quick select screen appears after each trigger and action step.

**Note:** You cannot view the quick select screen if you configure the Response action connector.

![Special_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11ad82e47b759305/659a7c6bc4b620562dfb8b5f/Special_Actions.png)

You can also activate an automation on the **Automations** homepage as follows:

![Draft_Mode.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07b56765ee4c76c2/659a7c2fd082f7b79e261443/Draft_Mode.png)

## Notes:

-   **Usage Throttling:** For large-scale automations, use the throttling feature to prevent rate limits and avoid system overloads.

## Additional Resources and Warnings:

-   **Documentation for Connectors:** Refer to Contentstack’s [documentation](/docs/agent-os/) on available connectors (e.g., HTTP Trigger, Slack) for in-depth details on setup and customization.
-   **Rate Limits and API Quotas:** Be aware of rate limits, especially when using third-party APIs or high-volume automations. Monitor usage to avoid interruptions.
-   **Security Warnings:** Always configure secure triggers (e.g., Secure HTTP Trigger) when handling sensitive data or user-specific workflows.
