---
title: "Using Conditional Paths to Customize Automations"
description: "Using Conditional Paths to Customize Automations
"
url: /agent-os/using-conditional-paths-to-customize-automations
---

# Using Conditional Paths to Customize Automations

## Using Conditional Paths to Customize Automations

This use case covers a scenario where you can execute an Automation based on a conditional path. The conditional path configurations are checked, and if the condition is true, the **If** step actions are executed, otherwise the **Else** step actions are executed.

Creating a new entry triggers the automation, and the conditional path configurations are checked. If the condition is true, the If step will execute the Slack connector that will send a message to the configured channel.

If the condition is false, the Else step will execute the Transform connector that will fetch the entry details from the trigger and pass these details as an object in Algolia.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:

-   **Set up the Contentstack “Entry Created'' Trigger Event:** This trigger event is activated whenever a user creates a new entry in Contentstack and in turn it executes the automation.
-   **Set up the Contentstack “Conditional Path”:** Once the above event triggers the automation, it checks for the configuration provided within the conditional path.
-   **Set up the Slack “Send Message” action for the If step:** When the conditional path configurations are met, the If step action will send a message to the configured channel using the Slack action connector.
-   **Set up the “Transform” action for the Else step:** When the conditional path configurations are not met, the Else step will execute the Transform action which will fetch the entry UID from the entry trigger as a JSON object and entry data will be merged in the final result.
-   **Set up the Algolia “Index Entries” action for the Else step:** Once the transformation is complete, an object will be created in the Algolia index with the same entry UID.

The steps to set up the Automation are as follows:

1.  [Configure Entry Trigger](#configure-entry-trigger)
2.  [Configure Conditional Path](#configure-conditional-path)
3.  [Configure Slack Connector within the If Step](#configure-slack-connector-within-the-if-step)
4.  [Configure Transform Connector within the Else Step](#configure-transform-connector-within-the-else-step)
5.  [Configure Algolia Connector within the Else Step](#configure-algolia-connector-within-the-else-step)

Let’s look at the setup in detail.

1.  ## Configure Entry Trigger
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/) and click the “Automate” icon.  
        ![Agent_OS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc8494fab1b356859/699d40c3370b580008b424db/image11.png)
    2.  Click **\+ New Project** to add a new project.
    3.  Click **\+ New Automation**.
    4.  Enter the **Automation Name** and **Description**.
    5.  Click **Create**.
    6.  Select **Configure Trigger** from the left navigation panel.  
        ![image3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt36d92ba8b250f552/699d43f7a9de3800086c8459/image3.png)
    7.  Within the **Configure Trigger** step, click the **Contentstack** connector.![image23.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f18a98110e4f976/699d4475a6967e0008df547f/image23.png)
    8.  Click **Entry Trigger** from the list of trigger events.  
        ![image24.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0d02448a34995f7/699d45072b6dd50008a8a787/image24.png)
    9.  Add your Contentstack account. For more information, refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger/) documentation.
    10.  Select **Entry Created** event from the list of events. Select a **Stack,** and a **Branch** from the **Lookup** dropdown.  
         ![image5.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61a613b02c440df5/699d460776a08e000872844a/image5.png)
    11.  Once done, click **Proceed**.
    12.  Click **Test Trigger** to test the configured trigger.  
         
    13.  On successful configuration, you can see the below output. Click **Save and Exit**.  
         ![image19.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3560125d85c2bdbd/699d483e133ed700086b1217/image19.png)
         
         **Note:** You can specify trigger conditions that will determine whether the complete automation should run or not. The automation and conditional path will not be carried out if the trigger conditions are not satisfied. You can see the updated list of executions in the Execution Log section
         
2.  ## Configure Conditional Path
    
    1.  Click **Configure Action Step** from the left navigation panel.  
        ![image1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb1aad80ebc797d2/699d4ae58a389b0008e2f6b9/image1.png)
    2.  Click **Conditional Path** to configure and set conditions.  
        ![image2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt072903cca14d818c/699d4bb22f2b150008a7fc59/image2.png)
    3.  Click **+ Add Condition**. In the **Select Input** box, enter the content type UID from the previous step. Select **Matches (Text)**, and provide the UID of the content type in the input box.  
        ![image10.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf28dbac850fe209/699d4c5c50bc530008da6258/image10.png)
    4.  Click **Save Configuration**.
3.  ## Configure Slack Connector within the If Step
    
    When the conditional path configurations are met, the If step action of sending a Slack message is executed.
    
    1.  Click **\+ Add Step** under the If step from the left navigation panel.  
        ![image7.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b744b7e6868ae63/699d4cb282302d0008039f84/image7.png)
    2.  Within the **Configure Action Step**, click the **Slack** connector.
        
        **Note:** You can sort and search the connector(s) based on the filter.
        
        ![image14.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9823b4426495e775/699d4d8a133ed700086b1229/image14.png)  
        
    3.  Under **Choose an Action**, select the **Send Message** action.![image6.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte85d4c3d43166fdb/699d4dea2664c800089242ee/image6.png)
    4.  In the **Configure Action** tab, add your Slack account. For instructions on adding your account, refer to the [Slack](/docs/agent-os/slack/) connector documentation.
    5.  Select a **Channel** from the **Lookup** list where you want to send the message. Enter the message in the **Message** field.  
        ![image16.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcaaa0bea0526e34f/699d4eb38a5f830008ab5d9e/image16.png)
    6.  Click **Proceed**.
    7.  Click **Test Action** to test the configured action.
    8.  On successful configuration, you can see the below output. Click **Save and Exit**.![image9.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt541ba3c1676a0dda/699d4faa490f3a0008d963cc/image9.png)
    9.  Once you configure the Slack action, you can add other actions inside the If step using the quick select screen. Similarly, you can also configure Else steps.
        
        **Note:** The quick select next step screen appears only when you have configured an action inside the If-Else step.
        
        ![image4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt00b0f31a77fd6175/699d501e8c820f0008262e0f/image4.png)
    
    This sets the **Slack** action connector
    
4.  ## Configure Transform Connector within the Else Step
    
    When the conditional path configurations are not met, the Else step actions of transformation and indexing entries in Algolia are executed.
    
    1.  Click **\+ Add Step** under the Else step from the left navigation panel.  
        ![image17.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd203396db3515a0f/699d50d2b88caa00080c274f/image17.png)
    2.  Within the **Configure Action** Step, click the **Transform** connector.
        
        ![image25.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc97c1e61447d5c88/699d5357973a3b00089af275/image25.png)  
        
    3.  Under **Choose an Action**, select the **Transform** action.  
        ![image22.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltddd994b9f42ee414/699d53d4b88caa00080c2767/image22.png)
    4.  Click **Add Input**, and enter a variable name for the **Input Name** (say, “ObjectID”) and an **Input Value** configured in the previous step (entry UID) (see the screenshot in next step).
    5.  Click **\+ Add Objects to Merge** and fetch the complete entry details configured in the previous step as shown below.  
        ![image20.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49e885fcfc4019ab/699d55541abb8400085b388e/image20.png)
    6.  In the **Transformation** field, enter the JSON code to fetch the UID value from the **Input Value** field in a variable. You can use the following code format: {“objectID” : “{ObjectID}”}   
        ![image15.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt234f84d6452cca0a/699d56af8a389b0008e2f6d1/image15.png)  
    7.  Click **Proceed**.
    8.  Click **Test Action** to test the configured action.
    9.  On successful configuration, you can see the below output. Click **Save and Exit**.![image8.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c7d5273103efc7b/699d57932f6e3f000833ac61/image8.png)
    
    This sets the **Transform** action connector.
    
5.  ## Configure Algolia Connector within the Else Step
    
    1.  Click **\+ Add Step** under the Else step from the left navigation panel.![image13.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta95d0867fd584bd2/699d586e976a3a00080febc5/image13.png)
    2.  Within the **Configure Action** Step, click the **Algolia** connector.![image18.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt71c09e4ee8228e7b/699d58e32f2b150008a7fca3/image18.png)
    3.  Under **Choose an Action** tab, select the Index Entries action.  
        ![image12.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48ad3d68af26cd33/699d5a2482302d0008039faf/image12.png)
    4.  In the **Configure Action** tab, add your Algolia account. For instructions on adding your account, refer to the [Algolia](/docs/agent-os/algolia/) connector documentation.
    5.  Select the **Index Name** where you want to send the data in the form of a list of objects.
    6.  In the **Entries** field, select the entry data fetched from the transform step.
        
        **Note:** Provide your index data as per your object schema and in JSON format only.
        
    7.  Click **Proceed**.
    8.  Click **Test Action** to test the configured action.
    9.  On successful configuration, you can see the below output. Click **Save and Exit**.
    10.  Go to the Algolia Index section and check the latest index entry with the data.  
         ![image21.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5cefd9b93caf895/699d603b3bafa80008727c94/image21.png)
    
    **Note:** You can view the status of your executions in the Execution Log section.
