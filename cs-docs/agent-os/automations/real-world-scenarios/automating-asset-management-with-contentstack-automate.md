---
title: "Automating Asset Management with Contentstack Automate"
description: "Learn how to automate digital asset management in Contentstack with a step-by-step guide. Streamline workflows using triggers, AI-driven actions, and automated updates."
url: /agent-os/automating-asset-management-with-contentstack-automate
---

# Automating Asset Management with Contentstack Automate

## Automating Asset Management with Contentstack Automate

This use case covers a scenario where you can dynamically update the asset description based on a Voice Profile whenever a new asset is published in Contentstack.

In this use case, we configure the **Contentstack Asset** Trigger. With the **Chat with Vision** action, fetch the asset UID and provide a suitable prompt to generate the response. In the next step, configure the **Get a Single Voice Profile** action using the Brand Kit connector to fetch the **Voice Profile**. To use this action, you must create a Voice Profile that certainly defines the product’s Voice Profile.

Next, in the Chat action, fetch the asset title and description based on the Voice Profile and Chat with Vision response. Once done, configure the Update an Asset action to update the asset description.

Let's break this scenario to see what the trigger event and the consequent action must be required to execute the Automation:

-   **Set up the “Contentstack Asset'' Trigger Event:** This trigger event is activated whenever a user publishes an asset in Contentstack.
-   **Set up the ChatGPT “Chat with Vision” Action:** Once the above event triggers the automation, Chat with Vision fetches the asset UID and generates a response based on the prompt.
-   **Set up the Brand Kit “Get a Voice Profile” Action:** Once the response generates, Get a Single Voice Profile fetches the Voice Profile created in the Brand Kit.
-   **Set up the ChatGPT “Chat” Action:** Provide a prompt to generate an output based on the Chat with Vision and Get a Voice Profile action output.
-   **Set up the Contentstack “Update an Asset” Action:** Fetch the output of the Chat action in the Asset Description.

The steps to set up the Automation are as follows:

1.  [Configure Contentstack Trigger](#configure-contentstack-trigger)
2.  [Configure ChatGPT Connector](#configure-chatgpt-connector)
3.  [Configure Brand Kit Connector](#configure-brand-kit-connector)
4.  [Configure ChatGPT Connector](#configure-chatgpt-connector)
5.  [Configure Contentstack Connector](#configure-contentstack-connector)

Let's look at the setup in detail.

1.  ## Configure Contentstack Trigger
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.  
        ![App_Switcher_Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e8ac72768458f95/699d373d68c24300082b30de/App_Switcher_Icon.png)
    3.  Go to your project or click **\+ New Project** to add a new project. Enter a **Project Name** and an optional **Description**.
    4.  In the top navigation, click **Automations**. Then, click **\+ New Automation**. From the dropdown, click **Create New** to add the steps required to configure the automation.
    5.  Enter the **Automation Name** and **Description**.
    6.  Click **Create**.
    7.  Select **Configure Trigger** from the left navigation panel.
    8.  Within the **Configure Trigger** step, click the **Contentstack** trigger connector.  
        ![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f4670dfd3b3b666/66c740175c1ba4563326a882/Select_Trigger.png)
    9.  Under the **Choose Trigger** tab, select **Asset** Trigger.  
        ![Select_Asset_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7cf2f6cca5041fb9/66c740174c39123b8eac15bd/Select_Asset_Trigger.png)
    10.  On the **Asset Trigger Configure Trigger** page, enter the details given below:
         1.  Click **\+ Add New Account** button to connect your Contentstack account.
             
             **Additional Resource:** Refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger) documentation to learn about adding an account.
             
         2.  Select the trigger event from the drop-down, i.e., **Asset Published** and select a **Stack** and **Branch** from the **Lookup** drop-down.
             
             For Asset Trigger, you will find the following events:
             
             -   **Asset Created:** When you create a new asset in your stack.
             -   **Asset Updated:** When you update an asset.
             -   **Asset Deleted:** When you delete an asset.
             -   **Asset Published:** When you publish your assets to a publishing environment.
             -   **Asset Publish Failed:** When asset publishing fails due to an error.
             -   **Asset Unpublished:** When you unpublish or remove your assets from a publishing environment.
             -   **Asset Unpublish Failed:** When the asset unpublishing activity fails.
             -   **All:** When you perform any of the above activities on an asset.
                 
                 **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
                 
         3.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Environment** field.  
             ![Select_Trigger_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt916ccec1c4379950/66c740177118678416aa329c/Select_Trigger_Field.png)
    11.  Click **Proceed**.
    12.  Click **Test Trigger** to execute and test the trigger that you configured.
    13.  If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.  
         ![Save_Exit_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb55ea8404b473c8/66c74017b506aabeebc70693/Save_Exit_Trigger.png)
2.  ## Configure ChatGPT Connector
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **ChatGPT** connector.  
        ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac0c17ec610c36d6/66c73ffdab1b6958413cc546/Select_Connector.png)
    4.  Under **Choose an Action** tab, select the **Chat with Vision** action.  
        ![Select_Chat_wit_Vision.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b4050cd5a587ce8/66c73ffd83db6711cdaef213/Select_Chat_wit_Vision.png)
    5.  On the **Chat with Vision Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your ChatGPT account.
            
            **Additional Resource:** Refer to the [ChatGPT](/docs/agent-os/chatgpt#prerequisites) Connector documentation to learn about adding an account.
            
        2.  Select the **API Model** from the drop-down list for response predictions. You can select the **gpt-4-vision-preview** API model. This model will be available as gpt-4-vision after production support.
        3.  Provide the **Prompt Text** to generate response(s). Click **\+ Add Prompt Text** to enter multiple prompts.
            
            **Note:** For the Role as **system** or **assistant**, you will see the Prompt Text box to enter the text to generate response. If you select the Role as **user**, you can select the type of prompt content, i.e. Text or Image.
            
            If you select the Role as user, then follow the below steps:
            
            1.  Under the Prompt Input section, click **\+ Add Prompt Input** button.
            2.  In the **Select Prompt Type** drop-down, select the type of content, i.e., **Text** or **Image** to generate a response. For our use case we will select **Text**.
            3.  Enter the **Prompt Value**. Fetch the asset UID from the trigger step and provide a valid prompt related to the asset.  
                ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16676d6c93ba5638/66c73ffde712ef1fc2313014/Select_Fields.png)
            4.  Click the **Show Optional Fields** toggle button to use these optional fields.
                1.  Enter the **Number of Tokens** to generate the content. This must be within the range of 1 to 2048.
                2.  Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.
                3.  Enter the **Number of Prompt Responses** you want to be generated in the automation response. This must be within the range of 1 to 3.
                4.  Provide the value to set the **Frequency of Repeated Words**. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.
                5.  Provide the value to set the **Presence of Repeated Responses**. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.
                6.  You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.
    6.  Click **Proceed**.
    7.  Click **Test Trigger** to execute and test the trigger that you configured.
    8.  If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.  
        ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc19a90dc0798891b/66c73ffd0baf9bc664af7fa9/Save_Exit.png)
3.  ## Configure Brand Kit Connector
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **Brand Kit** connector.  
        ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf9482b538181e67/66c73fe47118675870aa3284/Select_Connector.png)
    4.  Under **Choose an Action** tab, select the **Get a Single Voice Profile** action.  
        ![Select_Voice_Profile.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef7bbd8c508bb095/66c73fe4ab1b693eed3cc53e/Select_Voice_Profile.png)
    5.  On the **Get a Single Voice Profile Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your Brand Kit account.
            
            **Additional Resource:** Refer to the [Brand Kit Connector documentation](/docs/agent-os/brand-kit#prerequisites) to learn about adding an account.
            
        2.  Select a **Brand Kit** and **Voice Profile** from the **Lookup** list.  
            ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3660bbc80b17a399/66c73fe4711867d537aa3288/Select_Fields.png)
    6.  Once done, click **Proceed**.
    7.  Click **Test Action** to test the configured action.
    8.  The output will be shown as below. Click the **Save and Exit** button.  
        ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48e42246af1ce965/66c73fe4ca9595be7453c6a4/Save_Exit.png)
4.  ## Configure ChatGPT Connector
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **ChatGPT** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7116a6cfa60b66f2/66c73ff15c1ba4d51126a874/Select_Connector.png)
    4.  Under **Choose an Action** tab, select the **Chat** action.![Select_Chat_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt489b7aa0b7e36367/66c73ff11ee805fb1a168a1a/Select_Chat_Action.png)
    5.  On the **Chat Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your ChatGPT account.
            
            **Additional Resource:** Refer to the [ChatGPT](/docs/agent-os/chatgpt#prerequisites) Connector documentation to learn about adding an account.
            
        2.  Select the **API Model** from the drop-down list to generate content for the chat responses.
            
            **Note:** Different models are available to different users based on the account the user holds such as paid accounts. You must check the account access before selecting the model.
            
        3.  Provide the **Prompt Text** to generate response(s). Click **\+ Add Prompt** **Text** to enter multiple prompts.
        4.  Select the **Role** from the drop-down options to send to the API model request. By default, the role is set to the user.
            
            **Additional Resource:** There are three different types of roles provided by the OpenAI platform. The **system** role sets the response context, the **assistant** role provides the response content, and the **user** role asks the prompt.
            
        5.  Enter the value in the **Input Query** field. Add a prompt to generate a response based on the output data from Chat with Vision and Get a Single Voice Profile actions. This will ensure that the generated content aligns with the Brand Kit Voice Profile.  
            ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d0e43ca0455d238/66c73ff1e712ef00db313010/Select_Fields.png)
        6.  Click the **Show Optional Fields** toggle button to use these optional fields:
            1.  Select the **Response Type** as either **Text** or **JSON**. This ensures that the output is produced in a valid JSON format. By default, the response in ChatGPT is fetched in text format.
                
                **Note:** Ensure you are using the gpt-3.5-turbo-1106 model and above to access and correctly use the Response Type field in the connector.
                
            2.  Enter the **Number of Tokens** to generate the content. This must be within the range of 1 to 2048.
            3.  Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.
            4.  Enter the **Number of Chat Responses** you want to be generated in the automation response. This must be within the range of 1 to 3.
            5.  Provide the value to set the **Frequency of Repeated Words**. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.
            6.  Provide the value to set the **Presence of Repeated Responses**. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.
            7.  You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.
    6.  Once done, click **Proceed**.
    7.  Click **Test Action** to test the configured action.
    8.  The output will be shown as below. Click the **Save and Exit** button.  
        ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e7263f4942fd3c7/66c73ff11ee8055b5e168a16/Save_Exit.png)
5.  ## Configure Contentstack Connector
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **Contentstack** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7116a6cfa60b66f2/66c73ff15c1ba4d51126a874/Select_Connector.png)
    4.  Select the **Contentstack Management** connector to perform CMS tasks.  
        ![Select_Contentstack_Management.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0987662330599290/66c7400c20995e7a22d2e14b/Select_Contentstack_Management.png)
    5.  Under **Choose an Action** tab, select the **Update an Asset** action.  
        ![Select_Contentstack_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a7f2b95986dca32/66c7400c5c9bfec8d20f2bc3/Select_Contentstack_Connector.png)
    6.  On the **Update an Asset Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your ChatGPT account.
            
            **Additional Resource:** Refer to the [Contentstack](/docs/agent-os/about-contentstack-management-actions) Connector documentation to learn about adding an account.
            
        2.  Select a **Stack** and an **Asset** from the **Lookup** list.
            
            If you have assets stored in nested folders within your Contentstack CMS, you can select such assets as well for updating their details.
            
        3.  Enter a **Title** and a suitable **Description** for the asset to update. Here, fetch the asset title from the **Asset Trigger** step and description from the Chat action as shown below:  
            ![Select_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt639536e1b9013ac0/66c7400c1ee805ccb1168a22/Select_Field.png)
        4.  Specify a **File Name** for the asset and the Input URL of the image you want to update.
        5.  Optionally, enable the **Show Optional Fields** toggle button to display the **Select Folder** field. In the **Select Folder** drop-down, choose a destination folder to update an asset in it.
    7.  Once done, click **Proceed**.
    8.  Click **Test Action** to test the configured action.
    9.  The output will be shown as below. Click the **Save and Exit** button.  
        ![Save_Exit-Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65ae579321891920/66c7400c3bab11a3b2a2e923/Save_Exit-Button.png)

Activate the automation and publish an asset in the selected stack. You will see the updated description of the asset.
