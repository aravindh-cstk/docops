---
title: [Automations guides and connectors] - Agent OS App
description: Learn how to use the Agent OS App to integrate Agent OS within your entry editor.
url: https://www.contentstack.com/docs/developers/automation-hub-guides/automate-app
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2026-02-20
filename: agent-os-app.md
---

# [Automations guides and connectors] - Agent OS App

This page explains [Automations guides and connectors] - Agent OS App for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## Agent OS App

The Agent OS App provides functionalities to integrate Agent OS into your stack. With the Agent OS App, you can bring all the capabilities of Agent OS to your entry editor in the CMS.

Let’s see how you can use and install the Agent OS app via the Marketplace to get started.

### Prerequisites

1. [Contentstack Account](https://www.contentstack.com/login)
2. Access to the Contentstack Organization/Stack as the Owner/Admin

### Steps for Execution

1. [Install Agent OS App](#install-agent-os-app)
2. [Create an Automation](#create-an-automation)
3. [Execute the Automation via Agent OS App](#execute-the-automation-via-agent-os-app)

### Install Agent OS App

Follow the steps to install the Agent OS App in Contentstack.

1. Log in to your [Contentstack account](https://www.contentstack.com/login).
2. After logging in, click the **App Switcher** icon, then select **Marketplace** from the list. ![App_Switcher_Marketplace_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt405217a82de7e11a/6998693fa9de3800086c78f1/App_Switcher_Marketplace_Icon.png)
3. Click **Apps** from the left panel.
4. Within the Marketplace, you can see all the available apps. Hover over the **Agent OS** app and click **Install**.  
   ![Install_App_From_Marketplace.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt731613d6f0ea17c0/665d5bf5dbfae9ffbe0f8c13/Install_App_From_Marketplace.png)
5. In the pop-up window, select the stack where you want to install the Agent OS app, accept the terms and conditions, and click the **Install** button.  
   ![Install_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted945708d8b6891b/668386429b2b7a520ad983ca/Install_App.png)
6. On the configuration screen, you will see the Entry Sidebar Rail UI location and the Asset Sidebar Rail UI location enabled for the Agent OS app. Click the **Open Stack** button, which will redirect you to your stack.

   **Note:** The Entry Sidebar Rail and the Asset Sidebar UI locations are enabled **only** for the Agent OS app.

   ![UI_Locations_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf27895b4cd19c052/6684fcf8fda39284cb662dfb/UI_Locations_Configuration.png)

You can view the Agent OS App on the **Entry** and **Asset** editor page in the Entry Sidebar and the Asset Sidebar Rail UI Locations.

### Entry Editor Page

To view the Agent OS App in the Entry Editor page, follow the steps below:

1. Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button. In the drop-down, select **Create New** or **Use Prebuilt** options.
2. Create a [content type](../developers/create-content-types/create-a-content-type.md) by adding relevant details and click the **Save and proceed** button.
3. From the left navigation panel, navigate to the [Entries](../content-managers/author-content/create-an-entry.md) page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
4. In the right navigation panel, you will see the **Agent OS App** icon. Click to view the Agent OS App.  
   ![Automate_App_Asset_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe3f33c2eeeecbf8/66838642c8ca7733c1ce006c/Automate_App_Asset_Sidebar.png)
5. You will see two icons: **View Recipes** and **Manage Automations**. Click **Manage Automations** to create a new automation.

   On clicking the **View Recipes** icon, you can see the recipes list.

   **Note:** **View Recipes** and **Manage Automations** icons are only visible to an organization’s [Admin(s)](../developers/organization/organization-roles.md#organization-admin)/[Owner(s)](../developers/organization/organization-roles.md#organization-owner). Standard users can **only execute** the automation that is visible via the Agent OS App in the Entry Sidebar location.

#### Create an Automation

To start executing the automation via the Agent OS App, you first need to create an automation. To do so, follow the steps below:

1. From the left navigation panel, click **Agent OS**.
2. On the Automations project page, click the **On-demand Automation** project.
3. On the Automations page, click **+ New Automation**.
4. Provide an **Automation Name** and an optional **Description**. Click **Create**.
5. After entering the basic details of the automation in the above step, the next set of actions can be broadly classified into the following two main steps:
   1. Configure Trigger
   2. Configure Action Step  
      ![Configure_Action_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda2435f1803be46a/664b00861c913512ff13d320/Configure_Action_Trigger.png)
6. Let’s look at the above steps ‌in the next section.

##### Configure Trigger

Configuring a trigger can be broken into the following steps:

1. From the left navigation panel, click **Configure Trigger**.
2. Within the **Configure Trigger** step, click the **On-Demand Automation** trigger.
3. Under the **Choose Trigger** section, select the **Entry Sidebar** trigger.  
   ![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt576fcfb7d87de84e/6683864282ce1d020a3151aa/Select_Actions.png)
4. On the **Entry Sidebar Configure Trigger** page, enter the details given below:
   1. Select a **Stack** and **Branch** from the **Lookup** list.

      **Note:** You **cannot** configure a [Response](./response.md) connector with the On-Demand Agent OS trigger.
   2. Optionally, enable the **Show Optional Fields** toggle button to display the **Select** **Content** **Type** and **Input** **Options** fields.
      1. Click the **+ Input Options** button to view an Additional Information modal in the Entry Sidebar.
      2. In the **Input** **Label** field, enter the content to display as a label in the Additional Information modal.
      3. From the **Input Type** drop-down, select the type of input you want to provide in the Additional Information modal.
      4. In the **Input** **Description** field, enter a suitable instruction text for the input type field.  
         ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt42ce7d735e622c14/675fdb09680101d5a756d23a/Show_Optional_Fields.png)
5. Click the **Proceed** button.
6. Click the **Test Trigger** button to test the configured trigger.
7. Click the **Save and Exit** button.  
   ![Save_And_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt170e65d58f593d1d/675fdb854657c83a79d1f81c/Save_And_Exit_Button.png)

**Note:** After successfully configuring a trigger, if you re-configure any other trigger, you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert Changes** button.

This completes the configuration of your **On-Demand Agent OS** trigger.

##### Configure Action Step

You can configure any action connector based on your configuration. For this guide, we are selecting **Email by Agent OS** connector.

To configure an action step follow the steps below:

1. Click **Configure Action Step** from the left navigation panel.
2. Click **Action Step** to configure third-party services.
3. Within the **Configure Action Step**, click the **Email by Agent OS** connector.  
   ![Select_Email_by_Automate_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfee36c27f4d2dbd7/6694cf3cfbce3125fd239b30/Select_Email_by_Automate_Connector.png)
4. Under **Choose an Action** tab, select the **Email by Agent OS** action.  
   ![Email_By_Automate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d13f479ac6c0b4e/664b00866d70555f6b4d94ff/Email_By_Automate.png)
5. On the **Configure Action** page, enter the **To** email address, the **Subject** line, the **Body Type**, and the **Body** of the email. The **Show Optional Fields** toggle button allows you to enter the “CC” and “BCC” email addresses.  
   ![Select_Email_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ccec17f18110c60/664b008fb2e85241ba451c9e/Select_Email_Fields.png)
6. Click **Proceed** after entering the details.
7. Click **Test Action** to test if the email sending was a success or not.
8. The email is queued and sent to the receiver’s email address. Click **Save and Exit**.  
   ![Save_Exit_Actin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2cdd949469706f4e/664b008fb2e852313c451c9a/Save_Exit_Actin.png)

Activate the automation by clicking the **Activate Automation** toggle button.

#### Execute the Automation via Agent OS App

Once the automation is activated, you can check all the active automations in the Agent OS App. To do so, follow the steps below:

1. Navigate to the Agent OS App in the entries page.
2. You will see a list of all the active automations. Click the “Execute icon” to execute the automation.  
   ![Automation_Visible_in_Asset_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8622fb88e1e1eb7/6694cc69d0c0ef2480c54a30/Automation_Visible_in_Asset_Sidebar.png)
3. Once the automation is executed successfully, you can check the receiver’s email address for the email sent via Agent OS.  
   ![Email.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt35789911df3ce82c/664b0086dda14b614edffa19/Email.png)

### Use Case Additional Information Modal

Let’s see a use case to understand how the users can view and interact with the Additional Information modal.

In this use case, we will cover a scenario where, if a user adds the Input Options in the Entry Sidebar, the ChatGPT Connector processes the request and provides a prompt. The On-Demand Agent OS Connector displays the response in the Results modal.

Let's break this scenario to see what must be the trigger event and the consequent action required to execute the Automation:

1. **Set up the On-Demand Agent OS “Entry Sidebar” Trigger Event:** This trigger event is activated whenever a user runs the automation via the Agent OS App in the Entry Sidebar.
2. **Set up the ChatGPT “Chat” Action:** Once the above event triggers the automation, the Chat action will provide a response based on the request.
3. **Set up the On-Demand Agent OS “Summary Overlay” Action:** Once the above action is executed, the Summary Overlay action displays the response in the Results modal in the Entry Sidebar.

The steps to set up the Automation are as follows:

1. [Set up the On-Demand Agent OS Trigger](#set-up-the-on-demand-agent-os-trigger)
2. [Set up the ChatGPT Connector](#set-up-the-chatgpt-connector)
3. [Set up the On-Demand Agent OS Connector](#set-up-the-on-demand-agent-os-connector)
4. [Execute the Automation via Agent OS App](#execute-the-automation-via-agent-os-app)

Let’s look at the setup in detail.

#### Set up the On-Demand Agent OS Trigger

1. From the left navigation panel, click **Configure** Trigger.
2. Within the **Configure** **Trigger** step, click the **On-Demand Agent OS** trigger.  
   ![On-Demand_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f42b93e90a40c16/675fdb09e720114e8602f9ed/On-Demand_Trigger.png)
3. Under the **Choose Trigger** section, select the **Entry** **Sidebar** trigger.  
   ![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt576fcfb7d87de84e/6683864282ce1d020a3151aa/Select_Actions.png)
4. On the **Entry Sidebar Configure Trigger** page, enter the details given below:
   1. Select a **Stack** and **Branch** from the **Lookup** list.

      **Note:** You cannot configure a [Response](./response.md) connector with the On-Demand Agent OS trigger.

      ![Select_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt927aa8ca49db7332/675fdacc1cd21e548cc25d96/Select_Trigger_Fields.png)
   2. Optionally, enable the **Show Optional Fields** toggle button to display the **Select** **Content** **Type** and **Input** **Options** fields.
      1. Click the **+ Input Options** button to view an Additional Information modal in the Entry Sidebar.
      2. In the **Input** **Label** field, enter the content to display as a label in the Additional Information modal. For example, enter *Ask Something!.*
      3. From the **Input** **Type** drop-down, select the type of input you want to provide. For example, select *String*.
      4. In the **Input** **Description** field, enter a suitable instruction text for the input type field. For example, *Enter the content to generate the response*.  
         ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2c07671e689c62e/675fdad3f56c138249bd9691/Show_Optional_Fields.png)
5. Click the **Proceed** button.
6. Click the **Test** **Trigger** button to test the configured trigger.
7. Click the **Save and Exit** button.  
   ![Save_And_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt170e65d58f593d1d/675fdb854657c83a79d1f81c/Save_And_Exit_Button.png)

#### Set up the ChatGPT Connector

1. From the left navigation panel, click **Configure** **Action** Step.
2. Within the **Configure** **Action** **Step**, click the **ChatGPT** Connector.
3. Under the **Choose an Action** tab, select the **Chat** action.
4. On the **Chat Configure Action** page, enter the details given below:
   1. Click **+ Add New Account** button to connect your ChatGPT account as shown in the [Connect your ChatGPT Account](./chatgpt.md#connect-your-chatgpt-account-to-automate) step.
   2. Select the **API** **Model** from the dropdown list to generate content for the chat responses.

      **Note:** Different models are available to different users based on the account the user holds such as paid accounts. You must check the account access before selecting the model.
   3. Provide the **Prompt** Text to generate response(s). Click **+ Add Prompt Text** to enter multiple prompts.
   4. Select the **Role** from the dropdown options to send to the API model request. By default, the role is set to the user.

      **Additional Resource:** There are three different types of roles provided by the OpenAI platform. The **system** role sets the response context, the **assistant** role provides the response content, and the **user** role asks the prompt.
   5. Enter the value in the **Input** **Query** field. For example, *Give me description for the {{1.body.entry.title}}. Provide output in HTML format*. This provides a description about the entry in the Results modal.  
      ![Chat_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdea4ef133b72678e/675fdacb216a9cad62314a0e/Chat_Fields.png)
   6. Click the **Show Optional Fields** toggle button to use the optional fields.

      **Additional Resource:** Refer to the [ChatGPT](./chatgpt.md) Connector.
5. Click the **Proceed** button.
6. Click the **Test Action** button to test the configured action.
7. Click the **Save and Exit** button.  
   ![Save_Exit_Chat.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d2b134736d0aff1/675fdacc21e066b2b8411519/Save_Exit_Chat.png)

#### Set up the On-Demand Agent OS Connector

1. From the left navigation panel, click **Configure** **Action** **Step**.
2. Within the **Configure** **Action** **Step**, click the **On-Demand Agent OS** Connector.
3. Under the **Choose an Action** tab, select the **Summary** **Overlay** action.  
   ![Summary_Overlay_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb399ef5a7bc36e67/6794bd5139726f01ebf85333/Summary_Overlay_Action.png)
4. In the **Response** **Body** field, enter the content to be displayed in the Results modal. Fetch the response from the Chat action, i.e., *2.message.0.message.content* as shown below:  
   ![Response_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8353831e5e5a6734/675fdacbbbb2f6cf2f39d248/Response_Fields.png)
5. Click the **Proceed** button.
6. Click the **Test** **Action** button to test the configured action.
7. Click the **Save and Exit** button.  
   ![Save_Exit_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt469644d8abad8d1d/675fdacb19cfd535b5f0c9a8/Save_Exit_Response.png)

#### Execute the Automation via Agent OS App

Once the automation is activated, you can check all the active automations in the Agent OS App. To do so, follow the steps below:

1. Navigate to the Agent OS App in the entries page.
2. You will see a list of all the active automations. Click the “Execute icon (|>)” to execute the automation.  
   ![Execut_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85edcb3f9d95f1b0/67e26efc914c247ae84978a9/Execut_Icon.png)
3. A pop-up window will appear. Enter a prompt in the input field as shown below:  
   ![Additional_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4c1fc219836fb89/675fdacba766310092a0a1f5/Additional_Information.png)
4. You will get the response on the Results modal as shown below:

### Use Case for the Pause On-Demand

The Pause On-Demand action, available in the Agent OS app within the Entry Sidebar, allows you to decide whether to continue or pause an automation execution. It adds an extra layer of confirmation to ensure you want to proceed.

When an automation involves multiple action steps but only a limited set of values is needed, **Pause On-Demand** helps preserve specific properties from previous steps. These retained values can then be used in subsequent steps, ensuring a controlled and efficient execution process.

**Note:** You can configure the Pause On-Demand action **only once** in an automation.

**What Happens in the Pause Modal?**

* If the user chooses to proceed, the automation continues as planned.
* If the user clicks the **close** button (either the button or the modal’s close icon), the remaining automation steps will not be executed.
* If execution is stopped, the user must initiate a **new execution** by clicking **'Run'** again.

Here’s a use case demonstrating how users can update an entry in real time by pausing the automation for confirmation.

In this scenario, when a user triggers an automation via the **Agent OS**app in the **Entry Sidebar**, the entry **title** and **body** will be updated automatically: but only after the user confirms the execution.

Let's break this scenario to identify the trigger event and the necessary actions required to execute the automation.

1. **Set up the On-Demand Agent OS “Entry Sidebar” Trigger Event:** This trigger event is activated whenever a user runs the automation via the Agent OS app in the Entry Sidebar.
2. **Set up the On-Demand Agent OS “Pause On-Demand” Action:** Once the above action is executed, the Pause On-Demand action lets you preserve the values from the previous step and execute the automation.
3. **Set up the On-Demand Agent OS “Update an Entry” Action:** Once the above action is executed, the Update an Entry action displays the updated entry title and body.

The steps to set up the automation are as follows:

1. [Set up the Entry Sidebar Trigger](#set-up-the-entry-sidebar-trigger)
2. [Set up the Pause On-Demand Action Connector](#set-up-the-pause-on-demand-action-connector)
3. [Set up the Update an Entry Action](#set-up-the-update-an-entry-action)
4. [Execute the Automation via Agent OS App](#execute-the-automation-via-agent-os-app)

Let’s look at the setup in detail.

#### Set up the Entry Sidebar Trigger

1. From the left navigation panel, click **Configure** **Trigger**.
2. Within the **Configure** **Trigger** step, click the **On-Demand Agent OS** trigger.  
   ![On-Demand_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f42b93e90a40c16/675fdb09e720114e8602f9ed/On-Demand_Trigger.png)
3. Under the **Choose Trigger** section, select the **Entry** **Sidebar** trigger.
4. On the **Entry Sidebar Configure Trigger** page, enter the details given below:
   1. Select a **Stack** and **Branch** from the **Lookup** list.

      **Note:** You cannot configure a [Response](./response.md) connector with the On-Demand Agent OS trigger.

      ![Select_Fields_Entry_Sidebat.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt814cedd00ef30b0a/67e26ab929f30c0055f8e51a/Select_Fields_Entry_Sidebat.png)
   2. Optionally, enable the **Show Optional Fields** toggle button to display the **Select** **Content** **Type** and **Input** **Options** fields.
      1. Click the **+ Add Input Options** button to view an Additional Information modal in the Entry Sidebar.
      2. In the **Input** **Label** field, enter the content to display as a label in the Additional Information modal. For example, enter *User Prompt!.*
      3. From the **Input** **Type** drop-down, select the type of input you want to provide. For example, select *String*.
      4. In the **Input** **Description** field, enter a suitable instruction text for the input type field. For example, *Enter the request.*![Select_Other_Fields_Entry_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15af4f991d92985c/67e26aba6678fd1c69aeadc7/Select_Other_Fields_Entry_Sidebar.png)
5. Click the **Proceed** button.
6. Click the **Test** **Trigger** button to test the configured trigger.
7. Click the **Save and Exit** button.  
   ![Save_and_Exit_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4745168d2f5783fd/67e26ab9362ee360e855cfe5/Save_and_Exit_Trigger.png)

#### Set up the Pause On-Demand Action Connector

1. From the left navigation panel, click **Configure Action Step**.
2. Within the **Configure Action Step**, click the **On-Demand Agent OS** Connector.
3. Under the **Choose an Action** tab, select the **Pause On-Demand** action.
4. In the **Preserve Previous Step Properties** field, select the values you want to retain from the previous step. Click the **+ Add Preserve Previous Step Properties** button, then enter the **Property Name** and **Property Value**.  

   In this example, we are selecting **Entry Title** and **Entry** **Content** to update the Title and Body content.
5. In the **Select Body Type** drop-down, select a format for the output. Then, in the **Body** **Content** field, enter the content based on the selected type.

   The **Body Type** and **Body Content** define the message displayed in the **Pause** modal during execution.

   In this example, we are selecting **Text** as the **Body Type** and **"Do you want to update the entry?"** as the **Body** **Content**.

   ![Select_Pause_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a0895a9a874faef/682b2aebc665719819be519f/Select_Pause_Field.png)
6. Optionally, enable the **Show Optional Fields** toggle button to display the Pause modal title . You can enter a custom name for the **Pause Modal Title**.  
   ![Show_Optional_Fiels.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c4939461df0a7a7/67e26ac103068dd66fa1fbdb/Show_Optional_Fiels.png)
7. Click the **Proceed** button.
8. Click the **Test Action** button to test the configured action.
9. Click the **Save and Exit** button.  
   ![Save_Exit_Pause.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8893f9608613db39/67e26ab90b0fc55740b4b5d1/Save_Exit_Pause.png)

#### Set up the Update an Entry Action

1. From the left navigation panel, click **Configure Action Step**.
2. Within the **Configure Action Step**, click the **Contentstack** Connector and then select the **Contentstack Management** connector.
3. Under the **Choose an Action** tab, select the **Update an Entry** action.
4. Select a **Stack**, **Branch**, **Content Type**, and **Entry** from the **Lookup** list.  
   ![Update_Entry_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt338d293730a5c4c3/67e26ac2b32319b090990269/Update_Entry_Fields.png)
5. In the **Entry Data** field, fetch the title and body values from the previous step as shown below:  
   ![Select_Entry_Data.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacac954f9e92c644/682b2aeb80d2d1182299863b/Select_Entry_Data.png)
6. Optionally, enable the **Show Optional Fields** toggle button to display the optional fields.
7. Click the **Proceed** button.
8. Click the **Test Action** button to test the configured action.
9. Click the **Save and Exit** button.  
   ![Save_Exit_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab9c92c0bb4a07dd/67e26ab92fdf5e120806a412/Save_Exit_Update.png)

#### Execute the Automation via the Agent OS App

Once the automation is activated, you can check all the active automations in the Agent OS app. To do so, follow the steps below:

1. Navigate to the Agent OS App in the entries page.
2. You will see a list of all the active automations. Click the “Execute icon (|>)” to execute the automation.  
   ![Execut_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85edcb3f9d95f1b0/67e26efc914c247ae84978a9/Execut_Icon.png)
3. A pop-up window will appear. Enter a prompt in the input field as shown below:  
   ![Additional_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d4cc6eb41795de4/67e26ab929f30c283df8e516/Additional_Information.png)
4. Once you enter the prompt, the **Pause** modal appears. Click **Confirm** to proceed with the execution. If you want to stop the execution of the subsequent step(s), click **Close**.

   **Note:** To execute the automation, you must run it again.

   ![Pause_Preview.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7409e483d56b69a5/67e26ab9848c634bb7cfdb8c/Pause_Preview.png)
5. Once confirmed, you will see the updated entry.

### Use Case for the User Draft Update

Here is a use case to understand how the users can update an entry in real-time with the User Draft action. We will cover a scenario where, if a user executes an automation via the Agent OS app in the Entry Sidebar, the entry title is updated automatically.

Let's break this scenario to identify the trigger event and the necessary actions required to execute the automation.

1. **Set up the On-Demand Agent OS “Entry Sidebar” Trigger Event:** This trigger event is activated whenever a user runs the automation via the Agent OS app in the Entry Sidebar.
2. **Set up the On-Demand Agent OS “User Draft Update” Action:** Once the above action is executed, the User Draft Update action dynamically displays the updated entry title.

The steps to set up the Automation are as follows:

1. [Set up the On-Demand Agent OS Entry Sidebar Trigger](#set-up-the-on-demand-agent-os-entry-sidebar-trigger)
2. [Set up the On-Demand Agent OS User Draft Update Action](#set-up-the-on-demand-agent-os-user-draft-update-action)
3. [Execute the Automation via Agent OS App in Entry Sidebar](#execute-the-automation-via-agent-os-app-in-entry-sidebar)

Let’s look at the setup in detail.

#### Set up the On-Demand Agent OS Entry Sidebar Trigger

1. From the left navigation panel, click **Configure** Trigger.
2. Within the **Configure** **Trigger** step, click the **On-Demand Agent OS** trigger.  
   ![On-Demand_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f42b93e90a40c16/675fdb09e720114e8602f9ed/On-Demand_Trigger.png)
3. Under the **Choose Trigger** section, select the **Entry** **Sidebar** trigger.
4. On the **Entry Sidebar Configure Trigger** page, enter the details given below:
   1. Select a **Stack** and **Branch** from the **Lookup** list.

      **Note:** You cannot configure a [Response](./response.md) connector with the On-Demand Automate trigger.

      ![Select_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt927aa8ca49db7332/675fdacc1cd21e548cc25d96/Select_Trigger_Fields.png)
   2. Optionally, enable the **Show Optional Fields** toggle button to display the **Select** **Content** **Type** and **Input** **Options** fields.
      1. Click the **+ Input Options** button to view an Additional Information modal in the Entry Sidebar.
      2. In the **Input** **Label** field, enter the content to display as a label in the Additional Information modal. For example, enter *Ask Something!.*
      3. From the **Input** **Type** drop-down, select the type of input you want to provide. For example, select *String*.
      4. In the **Input** **Description** field, enter a suitable instruction text for the input type field. For example, *Enter the entry title to update.*![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95753f529964c2da/6794bd51b085b1371773ad57/Show_Optional_Fields.png)
5. Click the **Proceed** button.
6. Click the **Test** **Trigger** button to test the configured trigger.
7. Click the **Save and Exit** button.  
   ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta92b96382b38bd90/6794bd512108d8bc947fd032/Save_Exit_Button.png)

#### Set up the On-Demand Agent OS User Draft Update Action

1. From the left navigation panel, click **Configure** **Action** **Step**.
2. Within the **Configure** **Action** **Step**, click the **On-Demand Agent OS** Connector.
3. Under the **Choose an Action** tab, select the **User Draft Update** action.  
   ![User_Draft_Update_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt425951dd7c9f6f57/6794bd59b3cc47859c90da02/User_Draft_Update_Action.png)
4. Select a **Stack** and a **Content** Type from the **Lookup** list.
5. In the **Response** **Body** field, enter the content to be updated in the entry as shown below:  
   ![User_Draft_Update_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e604f32936364ac/6794bd5916946945a1974fe2/User_Draft_Update_Field.png)
6. Click the **Proceed** button.
7. Click the **Test** **Action** button to test the configured action.
8. Click the **Save and Exit** button.  
   ![Save_ExitUserDraft.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e1e8057a4295488/6794bd51a326206e70291eec/Save_ExitUserDraft.png)

#### Execute the Automation via Agent OS App in Entry Sidebar

Once the automation is activated, you can check all the active automations in the Agent OS App. To do so, follow the steps below:

1. Navigate to the Agent OS App in the entries page.
2. You will see a list of all the active automations. Click the “Execute icon (|>)” to execute the automation.  
   ![Execut_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85edcb3f9d95f1b0/67e26efc914c247ae84978a9/Execut_Icon.png)
3. A pop-up window will appear. Enter a prompt in the input field as shown below:  
   ![Pop-up_Automation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa53b67b0b80a931/6794bd5153ace65c822b4616/Pop-up_Automation.png)
4. You will see the updated entry title in the entry view.

### Asset Editor Page

To view the Agent OS App in the Asset Editor page, follow the steps below:

1. Go to your stack, in the left navigation panel click the **Assets** icon, and then click the **+ New Asset** button.
2. In the **Upload Asset(s)** modal, click the **+ New Folder** field, enter the **Folder Name**, and click the **Mark** icon to save the folder.
3. Click the **Choose files** button to start adding assets in the folder created in the previous step.
4. Once done, select the folder and the asset. Click the asset to navigate to the Asset Editor page.
5. In the right navigation panel, you will see the **Agent OS App** icon. Click to view the Agent OS App.  
   ![Automate_App_Asset_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe3f33c2eeeecbf8/66838642c8ca7733c1ce006c/Automate_App_Asset_Sidebar.png)
6. You will see two icons: View Recipes and Manage Automations. Click **Manage Automations** to create a new automation.

   On clicking the **View Recipes** icon, you can see the Recipes list.

   **Note:** View Recipes and Manage Automations icons are only visible to an organization’s [Admin(s)](../developers/organization/organization-roles.md#organization-admin)/[Owner(s)](../developers/organization/organization-roles.md#organization-owner). Standard users can **only execute** the automation that is visible via the Agent OS App in the Asset Sidebar location.

#### Create an Automation

To start executing the automation via the Agent OS App, you first need to create an automation. To do so, follow the steps below:

1. From the left navigation panel, click **Agent OS**.
2. On the Automations project page, click the **On-demand Automation** project.
3. On the Automations page, click **+ New Automation**.
4. Provide an **Automation Name** and an optional **Description**. Click **Create**.
5. After entering the basic details of the automation in the above step, the next set of actions can be broadly classified into the following two main steps:
   1. Configure Trigger
   2. Configure Action Step  
      ![Configure_Action_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda2435f1803be46a/664b00861c913512ff13d320/Configure_Action_Trigger.png)
6. Let’s look at the above steps ‌in the next section.

##### Configure Trigger

Configuring a trigger can be broken into the following steps:

1. From the left navigation panel, click **Configure Trigger**.
2. Within the **Configure Trigger** step, click the **On-Demand Agent OS** trigger.
3. Under the **Choose Trigger** section, select the **Asset Sidebar** trigger.  
   ![Asset_Sidebar_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59956035f8c992e9/668386420b1faa286adc03f6/Asset_Sidebar_Action.png)
4. On the **Asset Sidebar Configure Trigger** page, enter the details given below:
   1. Select a **Stack** and **Branch** from the **Lookup** list.

      **Note:** You **cannot** configure a [Response](./response.md) connector with the On-Demand Agent OS trigger.

      ![Select_Fields_Asset_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45ce36c4b58e913d/66838652b1132466c53a45c3/Select_Fields_Asset_Trigger.png)
   2. Optionally, enable the **Show Optional Fields** toggle button to display the **Select Asset Type** field.

      You can select the type of asset (Image, Video, Audio, PDF, Plain Text, Document, Presentation, Spreadsheet) on which the Agent OS App will appear.

      ![Select_Asset_Type_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54096a2ceec9c0aa/6686788350a8ec5f52b665c6/Select_Asset_Type_Fields.png)
5. Click the **Proceed** button.
6. Click the **Test Trigger** button to test the configured trigger.
7. Click the **Save and Exit** button.  
   ![Save_Exit_Asset_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbdb8eddcaedebeb4/66838642b11324a6473a45bf/Save_Exit_Asset_Sidebar.png)

**Note:** After successfully configuring a trigger, if you re-configure any other trigger, you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert Changes** button.

This completes the configuration of your **Asset Sidebar** trigger.

##### Configure Action Step

You can configure any action connector based on your configuration. For this guide, we are selecting **AWS S3** connector to create an object in the AWS bucket, when an automation is executed in the Asset Sidebar via the Agent OS App.

To configure an action step follow the steps below:

1. Click **Configure Action Step** from the left navigation panel.
2. Click **Action Step** to configure third-party services.
3. Within the **Configure Action Step**, click the **AWS S3** connector.  
   ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53f9612683efc20e/6683898b5e288d95fca23b47/Select_Connector.png)
4. Under **Choose an Action** tab, select the **Create a New Object** action.  
   ![Select_Create_an_Object_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt649389ebc3748700/6683898be316342cb371e66b/Select_Create_an_Object_Action.png)
5. Click the **+ Add New Account** button to add your AWS account. Refer to the [AWS S3 documentation](./aws-s3.md) to add a new account.
6. On the **Create a New Object Configure Action** page, you need to enter the following details:
   1. Select the AWS **Bucket Name** from the **Lookup** list that appears when you click the textbox. The lookup drop-down loads the buckets already defined and present in your AWS account.
   2. Enter the **File Name** (for example, File01) or/and any value from the values list. For this example, select the asset name fetched from the Asset Sidebar trigger.  
      ![File_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1078f564ad79d65/66866c0f62008a525310d474/File_Name.png)
   3. In the **Source** dropdown, select the **Source** of the upload (Content or File URL) and the **Input Value** for each source.

      For this example, select the **Source** as **File URL** and select the file URL fetched from the Asset Sidebar trigger in the **Input URL** field.

      ![File_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta100a033fba6db66/66866c0fa4dbae118a4d91c8/File_URL.png)
   4. Click the **Show Optional Fields** toggle button to enter the text for the **Tags** and **Metadata** optional fields.  
      ![Show_Optional_Fields_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7cf3d005eddaf0ba/6683898bbbfa856f3ff86801/Show_Optional_Fields_Create.png)
7. Click **Proceed** after entering the details.
8. Click **Test Action** to test if the email sending was a success or not.
9. The email is queued and sent to the receiver’s email address. Click **Save and Exit**.  
   ![Save_Exit_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b1c5656f21775a7/6683898a8887dcf65bd95ea8/Save_Exit_Create.png)

Activate the automation by clicking the **Activate Automation** toggle button.

#### Execute the Automation via Agent OS App

Once the automation is activated, you can check all the active automations in the Agent OS App. To do so, follow the steps below:

1. Navigate to the Agent OS App in the Assets page.
2. You will see a list of all the active automations. Click the “Execute icon” to execute the automation.  
   ![Execut_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85edcb3f9d95f1b0/67e26efc914c247ae84978a9/Execut_Icon.png)
3. Log into your AWS S3 account and see the list of files in the bucket. In the AWS account’s bucket, you can see the created file.  
   ![AWS-Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03586e2d5b45348e/66866c0f5a7e763dd51cd170/AWS-Image.png)

## Common questions
### What is covered in [Automations guides and connectors] - Agent OS App?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - Agent OS App?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
