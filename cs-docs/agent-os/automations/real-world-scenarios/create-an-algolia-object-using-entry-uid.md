---
title: "Create an Algolia Object using Entry UID"
description: "Create an Algolia Object using Entry UID"
url: /agent-os/create-an-algolia-object-using-entry-uid
uid: bltc6f86201a594058c
---

# Create an Algolia Object using Entry UID

## Create an Algolia Object using Entry UID

This use case covers a scenario where Automations should be able to retrieve an entry's UID when a user creates/deletes/updates/publishes/unpublishes an entry in Contentstack. The entry UID is then passed as an object ID to the Transform connector, which creates an object with the same UID in the Algolia index once the transformation is complete.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:

-   **Set up the Contentstack All'' Entry Trigger Event:** This trigger event is activated whenever a user performs an entry event such as create/delete/update etc., and in turn it activates the Automation.
-   **Set up the Transform Action:** Once the above event triggers the Automation, you can fetch the entry UID and pass this value as an object in the transform field.
-   **Set up the Algolia Index Entries Action:** Once the Transform action is completed, you can post the entry UID to the Algolia index as an object.

Lets look at the setup in detail.

1.  ## Create an Automation

    To create an automation, perform the steps given below:

    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the **Automate** icon.
    2.  Click **\+ New Project** and provide the required details to create a new project.
    3.  Click **\+ New Automation** to add the steps required to configure automation.

    Next, lets look at the steps to set up the trigger event.

2.  ## Set up the Contentstack Trigger Event

    1.  Click **Configure Trigger** from the left navigation panel.
    2.  Within the **Configure Trigger** step, click the **Contentstack** connector.  
        ![Select_the_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte418388e5e9a3bf8/651ba176375d9846069cdad3/Select_the_Trigger.png)  

    3.  Add your [Contentstack account](https://app.contentstack.com/#!/login). For more information, refer to the [Contentstack Trigger](https://www.contentstack.com/docs/agent-os/contentstack-trigger/) documentation.
    4.  Once done, select **All**from the list of trigger events and define the rest of the steps needed to set up the trigger (refer **steps 3 to 12** in [Contentstack Trigger](https://www.contentstack.com/docs/agent-os/contentstack-trigger/)).  
        ![Select-Trigger-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc95ffb1423832b42/63d90ec35e9f5911307af08c/Select-Trigger-Fields.png)
    5.  Click**Test Trigger** to execute and test the trigger that you configured.
    6.  Click **Save and Exit**.
3.  ## Set up your Transform Action Connector

    Lets configure the Transform action connector.

    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **Transform** connector.  
        ![Select_the_Transform_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf55d96898cac9d8c/651ba1760a5da820aaabe3f1/Select_the_Transform_Connector.png)  

    4.  Under **Choose an Action**, select the **Transform** action.  
        ![Select-Transform-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4351ec015afdd66e/63d90ea52d94ad4c89edc324/Select-Transform-Action.png)
    5.  Click **Add Input**, and enter a variable name for the **Input Name** (say, uid) and an Input Value configured in the previous step (entry UID) (see the screenshot in next step).  
        ![Transform-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb60de52500beb3bc/63d90ec4071fae111ebfd8be/Transform-Input.png)  

    6.  Enter the JSON code to fetch the UID value from the **Input Value** field in a variable. You can use the following code: {objectId: {uid}}  
        ![Transformation-Box.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb94c202186a225c8/63d90ec3e7a6981129095925/Transformation-Box.png)  

    7.  Click**Proceed**.
    8.  Click **Test Action** to test the configured action.  
        ![Test-Action-Transform.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdae350c383247bbe/63d90ec327e8ed165f5ac24c/Test-Action-Transform.png)  

    9.  After successful configuration, you should see the output shown below. Click **Save and Exit**.  
        ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta27bbb128aea7672/63d90ea4ddb7a921030a774d/Save-Exit.png)  


    This sets the **Transform** action connector.

4.  ## Test the Automation

    Now, lets see how you can test out your Automation. To do so, perform the steps given below:

    1.  Click **\+ Add New Step**. Click **Action Step** to configure third-party services.
    2.  Within the **Configure Action Step**, click the **Algolia** connector.  
        ![Select_the_Algolia_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4f5b8ba5f2fd264/651ba176964d9b5c31c312de/Select_the_Algolia_Connector.png)  

    3.  Under **Choose an Action**, select the **Index Entries** action.  
        ![Select-Index-Entries-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6815d61361a5bd6/63d90ea417b06010cf2e2f42/Select-Index-Entries-Action.png)
    4.  In the **Configure Action** tab, click **\+ Add New Account** to add your Algolia account.  
        ![Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf54cd9d37048dead/63d90ea4771d7f10c63c2a7d/Add-New-Account.png)  

    5.  To add your Algolia account, refer to the [Algolia Connector](/docs/agent-os/algolia/) document.
    6.  Select the **Index Name** where you want to send data in the form of a list of objects. You can also select the value from the previous step.
    7.  In the **Entries** field, enter the data to be added in the Algolia index. Pass the data configured in the previous step i.e., output from the Transform action.

        **Note:** You must provide your index data in JSON format and based on your object schema.

        ![Select-Algolia-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9a4955707b2e67e/63d90ea59d7bcb5422351209/Select-Algolia-Fields.png)
    8.  Click **Proceed**.
    9.  Click **Test Action** to test the configured action.  
        ![Test-Action-Algolia.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6774d5c8cbd9a7f8/63d90ec3e4e29e75dc5deb49/Test-Action-Algolia.png)  

    10.  After successful configuration, you should see the output shown below. Click **Save and Exit**.  
         ![Save-Exit-Algolia.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20f45d13338797a0/63d90ea49d7bcb5422351205/Save-Exit-Algolia.png)  

    11.  Navigate to the Algolia Index section and check the latest index entry with the data we passed as objects within the connector configurations. You will be able to see the data added in the object.  
         ![Algolia-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe05328836d2f517/63d90ea4ddb7a921030a7749/Algolia-Output.png)  

         **Note:** You need to enable automation in order to test it.


This sets the **Algolia** action connector.
