---
title: "Send Newly Transformed Data via Email"
description: "Use Automations to transform JSON data with modifiers like capitalize and send the result via email using an automation workflow.
"
url: /agent-os/send-newly-transformed-data-via-email
---

# Send Newly Transformed Data via Email

## Send Newly Transformed Data via Email

In this use case, we will cover a scenario where, if a user creates a new entry in Contentstack, automations should be able to transform the input data as per the transform modifier. You can use different transform modifiers such as camelCase, capitalize etc., to modify your final output.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the automation:

-   **Set up the Contentstack “Entry Created” Trigger Event:** This trigger event is activated whenever a user creates a new entry for a particular stack, and in turn, it activates the automation.
-   **Set up the Transform Action:** Once the above event triggers the automations, it will modify the JSON code passed in the transformation box.
-   **Set up the Email by Agent OS “Email by Agent OS” Action:** Once the Transform action is completed, you can post the transformed JSON data to Email by Agent OS.

Let’s look at the setup in detail.

1.  ## Create an Automation
    
    To create an automation, perform the steps given below:
    
    1.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.  
        ![App_Switcher_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6811114493828fe1/699d4a4d2664c800089242e0/App_Switcher_Icon.png)
    2.  Go to your project or click **\+ New Project** to add a new project. Enter a **Project Name** and an optional **Description**.
    3.  In the top navigation click **Automations**. Then, click **\+ New Automation**. From the dropdown, click **Create New** to add the steps required to configure the automation.
    
    Next, let’s look at the steps to set up the trigger event.
    
2.  ## Set up the Contentstack Trigger Event
    
    1.  Click **Configure Trigger** from the left navigation panel.  
        ![Configure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3ec928ac8fa3c46/699d4eae2664c800089242f4/Configure_Trigger.png)
    2.  Within the **Configure Trigger** step, click the **Contentstack** connector.  
        ![Select_Contentstack_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfbc23497efdaa935/699d4a46133ed700086b121d/Select_Contentstack_Trigger.png)
    3.  Add your [Contentstack account](https://app.contentstack.com/#!/login). For more information, refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger/) documentation.
    4.  Once done, select **Entry Created** from the list of trigger events and define the rest of the steps needed to set up the trigger (refer **steps 3 to 12** in [Contentstack Trigger](/docs/agent-os/contentstack-trigger/)).![Select_CS_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt67fc7ce28ff2b12d/699d4eaeb88caa00080c274b/Select_CS_Trigger_Fields.png)
    5.  Click **Test Trigger** to execute and test the trigger that you configured.
3.  ## Set up your Transform Action Connector
    
    Let’s configure the Transform action connector.
    
    1.  Click **Configure Action Step** from the left navigation panel.  
        ![Configure_Action_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8d238df2fe04eab/699d4ead973a3b00089af25b/Configure_Action_Step.png)
    2.  Click **Action Step** to configure third-party services.  
        ![Action_Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9edf00a0bbb00c9/699d4eadf70ac4000881ee86/Action_Step.png)
    3.  Within the **Configure Action Step**, click the **Transform** connector.
        
        **Note:** You can sort and search the connector(s) based on the filter.
        
        ![Transform_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ac52cb0981409b0/699d4eb42664c800089242f8/Transform_Connector.png)
    4.  Select the **Transform** action.  
        ![Select_Transform_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt71aaa489a99ff4bb/699d4eb4f70ac4000881ee8a/Select_Transform_Action.png)
    5.  Click **Add Input**, and enter a variable name for the **Input Name** (say, “name”) and an **Input Value** for the variable (say, “john” in lowercase letters) (see screenshot in next step).
        
        **Note:** You can even pass the value directly into the **Transformation** box.
        
    6.  Let’s enter the JSON code that uses the “capitalize()” modifier in the Transformation box. Use the following code:{“result” : “{capitalize(name)}” }
        
        **Note:** You can use the data received from the trigger instead of manually adding the values.
        
        ![Transform_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5cdecb678091354/699d4eb4a9f58400085a6a58/Transform_Fields.png)
    7.  Click **Proceed**.
    8.  Click **Test Action** to execute the JSON code.  
        
    9.  You should see the output with the first letter capitalized. Click **Save and Exit** for the Transform process flow.  
        ![Save_Exit_Transform.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7fd4b599b5001e77/699d4eae76a08e0008728460/Save_Exit_Transform.png)
    
    This sets the **Transform** action connector.
    
4.  ## Test the Automation
    
    Now, let’s see how you can test out your Automation. To do so, perform the steps given below:
    
    1.  Go to Contentstack and [create an entry](/docs/headless-cms/create-an-entry/) for the content type that you selected in your trigger event in Step 2.  
        This should trigger your Automation.
    2.  To post the JSON data by sending an email through the Email by Automate action connector:
        1.  Click **\+ Add New Step**. Click **Action Step** to configure third-party services.
        2.  Within the **Configure Action Step**, click the **Email by Agent OS** connector.  
            ![Select_Email_by_Automate_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ee6c45bc22f8f1b/699d4eae973a3b00089af25f/Select_Email_by_Automate_Connector.png)
        3.  Select the **Email by Agent OS** action.  
            ![Select_Email_By_Agent_OS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06e8b16c35034205/699d4eae9bb7a20008e77274/Select_Email_By_Agent_OS.png)
        4.  In the **Configure Action** tab, enter the following details:
            1.  Email address of the recipient
            2.  The **Subject** for the email.
            3.  Under the **Body Type** field, enter the type.
            4.  Add the email content within the **Body** field.
            5.  Additionally you can add optional fields such as the “CC” and “BCC” email addresses.
                
                **Note:** You can use the output from the transform action and send it to your email.
                
                ![Email_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt339c1a645890c520/699d4eae248dc9000882b386/Email_Fields.png)
        5.  Click **Proceed.**
        6.  To execute and test the configured action, click **Test Action**.
        7.  The email is queued and sent to the recipient’s email address. Click **Save and Exit**. ![Save_Exit_Email_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt227c5050e5aaf00c/699d4eae6c2cd90008edcc4b/Save_Exit_Email_Button.png)
        8.  To check the email, navigate to your inbox.  
            ![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte737017cea61578d/699d4eaef3d8950008a1dee6/Output.png)
