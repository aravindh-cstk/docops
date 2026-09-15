---
title: "ChatGPT Use Cases"
description: "This guide helps you with two use cases for the ChatGPT Connector to translate texts and generate image URLs."
url: /agent-os/chatgpt-use-cases
uid: blt9b96f92e6b10a6b5
---

# ChatGPT Use Cases

## ChatGPT Use Cases

The Contentstack Automate [ChatGPT Connector](/docs/agent-os/chatgpt/) integrates OpenAI's ChatGPT with Contentstack's content management system, allowing users to create high-quality AI-generated content directly within Contentstack. This streamlines content creation, enhances digital experiences, and offers two automation use cases for translating text and generating image URLs.

Below are two distinct ChatGPT automation use cases:

1.  [For translating a specified string into a chosen language upon trigger invocation via the Function Calling action](/docs/agent-os/chatgpt-use-cases#use-case-1-translate-the-response-using-function-calling-action-based-on-sub-automation).
2.  [For generating an image URL via the DALL-E 3 Image Generator action, which can then be utilized to create an asset in Contentstack](/docs/agent-os/chatgpt-use-cases#use-case-2-generate-an-image-using-the-dall-e-3-image-generator-action).

## Prerequisites

To use the ChatGPT connector, you first need to add your ChatGPT account and authorize it with a valid API Key and Organization ID.

### Generate API Key and Get Organization ID from the OpenAI platform

To generate an API Key and Organization ID in your [OpenAI platform account](https://platform.openai.com/account/api-keys), follow the steps given below:

1.  Log in to your [OpenAI platform account](https://platform.openai.com/account/api-keys).
2.  Once you log in, you will be navigated to the **API keys** section as shown below. Click the **\+ Create new secret** **key** button to generate a new API Key.  
    ![Create_New_Secret_key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde875e27760a2abd/6613ccc5be36f58550d962d2/Create_New_Secret_key.png)
3.  On the **Create new secret key** modal, enter a **Name (Optional)** and select the appropriate **Permissions**. Click the **Create secret key** button to generate a new secret key.  
    ![Create_Secret_Key_Popup.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt26e23123712f0998/6613ccc4470f71da706155de/Create_Secret_Key_Popup.png)

    An API Key gets generated. Copy it to your clipboard and click the **Done** button to close the pop-up.  

    ![Copy_secret.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f1895c6c62c30f9/6613ccc454d7c15d668edde2/Copy_secret.png)

    **Note:** Since the API Key is confidential, it is displayed only once. If you do not copy it to your clipboard, you will need to create a new secret key.

4.  We will now see how to get the Organization ID. So from the left navigation panel, click **Settings**, and you will get the **Organization ID**.  

    Copy the organization ID to your clipboard and paste it in the Organization ID field.

    **Note:** Make sure you save the API Key and Organization ID to your clipboard, as these will be used to [connect your ChatGPT account to Automate](#connect-your-chatgpt-account-to-automate) in the next step.


### Connect your ChatGPT Account to Automate

Let’s take a look at how to add your **ChatGPT** account using the Organization ID and API Key generated above. To do so, follow the steps given below:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **ChatGPT** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt493156aab1922ee6/6613cf372b98e936331007b3/Select_Connector.png)
4.  Under **Choose an Action** tab, select any one action from the list. Here we are selecting the Chat action.  
    ![Chat_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb43aebd46624c95a/6613cf377cacdc13c9d499ec/Chat_Action.png)
5.  On the **Configure Action** page, click the **\+ Add New Account** button to add your ChatGPT account.  
    ![Add_Chat_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79b1070f9aeb9688/6618b33e081a8f8c4dce814b/Add_Chat_Account.png)
6.  In the **Authorize** modal, enter a Title. Enter the **API Key** and **Organization ID** retrieved in the [Generate API Key and get Organization ID from the OpenAI Platform](#generate-api-key-and-get-organization-id-from-the-openai-platform) step from your OpenAI platform account. Click the **Authorize** button.  
    ![image26.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt728bb26e4e35557a/6613d1334180c15c98e402eb/image26.png)

Once done, you can go ahead and set up your ChatGPT account.

## Use Case 1: Translate the Response using Function Calling Action based on Sub Automation

Let’s see an example to understand the use of the Function Calling and Function Calling Response action.

In this use case, we will cover a scenario where, if a user hits a HTTP trigger URL, then a translated response will be shown.

Here, we configure the Function Calling action to add different sub automations created in a project. ChatGPT analyses and returns the response based on the most precise sub automation.

In the next step, after configuring the Sub Automation action, the user gets the translated output which can be formatted in string format using the Function Calling Response action.

Let’s look at the setup in detail.

## Set up the Connectors  

1.  ### Configure HTTP Trigger

    1.  From the left navigation panel, click **Configure Trigger**.
    2.  Within the **Configure Trigger** step, click the **HTTP** connector.
    3.  Select a **Method**, i.e. GET/POST.  
        ![ChatGPT_Use_Case_Configure_Trigger_HTTP_Trigger](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a523060705020e6/65c391606519403e298113d9/ChatGPT_Use_Case_Configure_Trigger_HTTP_Trigger.png)
    4.  Click the **Proceed** button.
    5.  Click the **Test Trigger** button.  
        ![ChatGPT_Use_Case_Configure_Trigger_Test_Trigger](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7abf4acc3b7573da/65c3916068e92389e0e57a99/ChatGPT_Use_Case_Configure_Trigger_Test_Trigger.png)
    6.  Click the **Save and Exit** button.  
        ![Save_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22681d7e55950994/6613d200cbc2fb719a816949/Save_Trigger.png)
2.  ### Configure Function Calling Action

    1.  From the left navigation panel, click **Configure Action Step** .
    2.  Then, click **Action Step** to configure third-party services.
    3.  Within the **Configure Action** Step, click the **ChatGPT** connector.
    4.  Under **Choose an Action** tab, select the **Function Calling** action.
    5.  On the **Function Calling Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your ChatGPT account as shown in the [Connect your ChatGPT Account to Automate](#connect-your-chatgpt-account-to-automate) step.
        2.  Select the **API Model** from the drop-down list to generate content for the chat responses.
        3.  Under the Prompt Input section, click **\+ Add Prompt Text** button.
        4.  Select the Role and enter the **Input Query**. You can enter an input query i.e., Translate to German language.
        5.  Click **\+ Add Sub Automation** button to add multiple sub automations configured within your project. ChatGPT will return the most accurate response based on the sub automations.  
            ![Chat_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc26f2d7ab408833c/6613d267ae80e2412e823987/Chat_Fields.png)
    6.  Click **Proceed**.
    7.  Click the **Test Action** button.  
        ![ChatGPT_Use_Case_Configure_Function_Calling_Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1a0cc8caa20e867/65c3935c65d14304527d74b9/ChatGPT_Use_Case_Configure_Function_Calling_Test_Action.png)
    8.  Click the **Save and Exit** button. You will see the response in the output.  
        ![ChatGPT_Use_Case_Configure_Function_Calling_Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfd2b416a2d4c6dd/65c3935ce7bf984aef6d3452/ChatGPT_Use_Case_Configure_Function_Calling_Save_Exit.png)
3.  ### Configure Sub Automation Action

    1.  Within the **Configure Action Step**, click the **Sub Automation** connector.
    2.  Under **Choose an Action** tab, select the **Sub Automation** action.
    3.  On the **Sub Automation Configure Action** page, enter the details given below:
        1.  Select the **Sub Automation** from the drop-down. Select the **Suggested Data Element(s)** value from the drop-down. The **Suggested Data Element(s)** will suggest the function name from the previous step.
        2.  In the **Sub Automation Template**, select the **Suggested Data Element(s)**. The Suggested Data Element(s) will suggest the sub automation response.  
            ![ChatGPT_Use_Case_Configure_Sub_Automation_Select_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf84a74a325ad70b0/65c3952e554798700780a376/ChatGPT_Use_Case_Configure_Sub_Automation_Select_Fields.png)
    4.  Click the **Proceed** button.
    5.  To test the configured action, click the **Test Action** button.  
        ![ChatGPT_Use_Case_Configure_Sub_Automation_Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31503d3f7be82171/65c3952d65d14354227d74d3/ChatGPT_Use_Case_Configure_Sub_Automation_Test_Action.png)
    6.  Click the **Save and Exit** button. You will see the translated string in the output.  
        ![ChatGPT_Use_Case_Configure_Sub_Automation_Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d73bda0875c452c/65c3952dfb34d012a11b0fba/ChatGPT_Use_Case_Configure_Sub_Automation_Save_Exit.png)
4.  ### Configure Function Calling Response Action

    1.  Within the **Configure Action** Step, click the **ChatGPT** connector.
    2.  Under **Choose an Action** tab, select the **Function Calling Response** action.
    3.  On the **Function Calling Response Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your ChatGPT account as shown in the [Connect your ChatGPT Account to Automate](#connect-your-chatgpt-account-to-automate) step.
        2.  Select the **API Model** from the drop-down list for response predictions.

            **Additional Resource:** For more information about the API Models, please refer to [ChatGPT API Models](https://developers.openai.com/api/docs/models).

        3.  In the **Function Calling Response** field, select the output of the Function Calling action from the previous step.
        4.  In the **Sub Automation Response** field, select the output of the sub automation.  
            ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6feec0a89e4cb06e/6613d38afffe40fe721e2fb3/Select_Fields.png)
        5.  Click the **Show Optional Fields** toggle button to use these optional fields.  
            ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3261b2a5c2fe24db/6613d44b0d9945473c0320ba/Show_Optional_Fields.png)
    4.  Click **Proceed**.
    5.  Check if the details are correct. If yes, then click **Test Action**.  
        ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4655757fb8d67175/659d088518123eb82726ce0e/Test_Action.png)
    6.  You will get the response(s). Once set, click **Save and Exit**. You see the response in a proper string format.  
        ![ChatGPT_Use_Case_Function_Calling_Response_Save_and_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a96d232797c07bf/65c396fcfb34d0ba921b0fd1/ChatGPT_Use_Case_Function_Calling_Response_Save_and_Exit.png)
5.  ### Configure Response Connector

    1.  Within the **Configure Action Step**, click the **Response** connector.
    2.  Under **Choose an Action** tab, select the **Response** action.
    3.  On the **Response Configure Action** page, enter the details given below:
        1.  Based on the results of your configured action, enter the **Response Status**.
        2.  In the **Response Body** field, add the data you want to send as the response. Fetch the data received from the **Function Calling Response** action.  
            ![ChatGPT_Use_Case_Configure_Response_Select_Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1c4da080a0d786c/65c396b2c2586495f608ce8f/ChatGPT_Use_Case_Configure_Response_Select_Field.png)
        3.  Additionally, you can add **Response Headers** to provide any additional information.
    4.  Click **Proceed**.
    5.  To execute and test the configured action, click **Test Action**.  
        ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92a2b2a8e44fa8f5/65969f53c4b62015a1fb814d/Test_Action.png)
    6.  On successful configuration, you can see the below output. Click **Save and Exit**.  
        ![ChatGPT_Use_Case_Configure_Response_Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt35e0e479842c060a/65c396b2245ed9816790fb52/ChatGPT_Use_Case_Configure_Response_Save_Exit.png)
6.  You can check the response by activating the automation and visiting the HTTP webhook URL configured in the trigger step.


## Use Case 2: Generate an Image using the DALL-E 3 Image Generator Action

Let’s see an example to understand the use of the DALL-E 3 Image Generator action.

In this use case, we will cover a scenario where, if a user creates an entry in Contentstack, the entry gets updated with the image generated via the DALL-E 3 Image Generator.

Creating a new entry triggers the automation, and the **DALL-E 3 Image Generator** generates an image based on the entry title fetched from the Entry trigger step. It generates an image URL based on the title.

In the next step, configure the **Create an Asset** action and fetch the image generated in the previous step. An asset is created in the Contentstack Assets module.

Once the asset is created, configure the **Update an Entry** action. Fetch the _asset UID_ in the **Entry Data** field to update the entry with the image generated.

Let’s look at the setup in detail.

## Set up the Connectors

1.  ### Configure Entry Trigger

    1.  Within the **Configure Trigger** step, click the **Contentstack** connector.
    2.  Under **Choose Trigger** tab, select the **Entry** trigger.![Select_Entry_Trigger](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d6aaf8a2c256a18/65e0838ef86c2415a88e10a6/Select_Entry_Trigger.png)
    3.  Add your Contentstack account. For more information, refer to the [Contentstack Trigger](/docs/agent-os/contentstack-trigger/) documentation.
    4.  In the **Select an Event** drop-down, choose the **Entry Created** event from the list of events.
    5.  Select a **Stack**, and a **Branch** from the **Lookup** drop-down.![Select_Trigger_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe9525efb9257ba0/6613d8672b98e94d94100828/Select_Trigger_Fields.png)
    6.  Once done, click **Proceed**.
    7.  Click **Test Trigger** to test the configured trigger.![Test_Trigger](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b45c30a26a2d4b4/65df80ff7471411f870a3828/Test_Trigger.png)

        **Note:** You can specify trigger conditions that will determine whether the complete automation should run or not. The automation and conditional path will not be carried out if the trigger conditions are not satisfied. You can see the updated list of executions in the [Execution Log](/docs/agent-os/view-execution-log-of-agent-os/) section.

    8.  On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt34a5a973469759fe/65df80ff2c8bef8eff621f52/Save_Exit_Button.png)
2.  ### Configure ChatGPT Connector

    1.  Within the **Configure Action Step**, click the **ChatGPT** connector.
    2.  Under **Choose an Action**, select the **DALL-E 3 Image Generator** action.
    3.  On the **Function Calling Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your ChatGPT account as shown in the [Connect your ChatGPT Account to Automate](#connect-your-chatgpt-account-to-automate) step.
        2.  Provide the **Prompt Text** to generate an image response.

            For our use case, provide the following prompt text as shown below: “_Create an image for the Blog title -_ ” followed by the entry title fetched from the previous Entry trigger step.

        3.  In the **Select Image Size** drop-down, select the resolution for the image generation from the drop-down list. This will generate an image in the defined size.
        4.  In the **Select Style** drop-down, select the style for the image generation from the drop-down list. By default, the image is generated in **Vivid** style.
        5.  In the **Select Quality** drop-down, select the quality for the image generation from the drop-down list. By default, the image is generated in **Standard** quality. ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81ea977e03934512/65df811ad85aff627747c646/Select_Fields.png)
    4.  Click **Proceed**.
    5.  Check if the details are correct. If yes, then click **Test Action**.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta52cc2d06376b06c/65df811ac59852e35cf6baf6/Test_Action.png)
    6.  You will get the following response. Once set, click **Save and Exit**.![Save_Exit_button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88750805c51d741b/65df811a3b4c4f02c47adeb4/Save_Exit_button.png)
3.  ### Configure Create an Asset Action

    1.  Within the **Configure Action Step**, click the **Contentstack** connector.
    2.  Under **Choose an Action** tab, select **Create an Asset** action.
    3.  On the **Create an Asset Configure Action** page, enter the details given below:
        1.  Click **\+ Add New Account** button to connect your Contentstack account.

            **Additional Resource:** For more information, refer to the [Contentstack Management](/docs/agent-os/about-contentstack-management-actions) documentation.

        2.  Select a **Stack** from the **Lookup** list and enter a **Title** for the asset. Fetch the entry title from the previous step as shown below. This will create an asset with the same name as the entry.
        3.  Specify a **File Name** for the asset, such as ‘_vacation.png_’ or ‘_vacation.jpeg_’. ![Create_an_Asset_Field_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87389de471d27107/6618b33e56f9e8e749edf171/Create_an_Asset_Field_1.png)
        4.  Select the **Input URL** of the image fetched from the previous step, i.e., DALL-E 3 Image Generator action step and specify a suitable **Description** for the asset.![Create_an_Asset_Field_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5b4aa853ea2f646f/6618b33e2ecd881ca3608162/Create_an_Asset_Field_2.png)
        5.  Optionally, enable the **Show Optional Fields** toggle button to display the **Select Folder** field. In the **Select Folder** drop-down, choose a destination folder to create an asset in it.
    4.  Once done, click **Proceed**.
    5.  Click **Test Action** to test the configured action. ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3046ad289994d899/65df076172b3870ba422b7ab/Test_Action.png)
    6.  On successful configuration, you can see the below output. Click **Save and Exit**. ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb6d01dc023357f4b/65df810cc59852e3dff6baee/Save_Exit.png)
4.  ### Configure Update an Entry Action

    1.  Within the **Configure Action Step**, click the **Contentstack** connector.
    2.  Under **Choose an Action** tab, select **Update an Entry** action.
    3.  On the **Update an Entry Configure Action** page, enter the details given below:
        1.  Click **+ Add New Account** button to connect your Contentstack account.

            **Additional Resource:** For more information, refer to the [Contentstack Management](/docs/agent-os/about-contentstack-management-actions) documentation.

        2.  Select a **Stack**, **Branch**, **Content Type**, and **Entry** from the **Lookup** list.

            You can fetch the UIDs for all the previously configured automation steps directly from the **Suggested Data Element(s)** list.

            ![Update_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6f81f380f34a7046/6618b358569f27539baee855/Update_Entry.png)

            **Note:** By default, the **main** branch is selected (even if the Branch field is empty).

        3.  In the **Entry Data** field, you can add a predefined schema template for your entry data. This will add a structure to provide your entry data in a particular format for different fields.

            **Note:** You must configure the entry data for **JSON Rich Text Editor**, **Custom**, and **Experience Container** fields manually.

            For our use case, provide the _asset UID_ created in the Create an Asset step to add the image in the entry.

            ![Update_Entry_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9c9a6d4937a47ed0/6618b358569f27230faee851/Update_Entry_2.png)

            **Note:** Enter the data in **JSON** format only.

        4.  Optionally enable the **Show Optional Fields** toggle button to display additional fields. Select the **Locale** and check the **Include branch** checkbox to fetch these details in addition to the entry details.
    4.  Once done, click **Proceed**.
    5.  Click **Test Action** to test the configured action.![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3046ad289994d899/65df076172b3870ba422b7ab/Test_Action.png)
    6.  On successful configuration, you can see the below output. Click **Save and Exit**.![Save_Exit_buttton.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9698aca689079e0e/65df8129eb51e37a39115d5c/Save_Exit_buttton.png)
    7.  Navigate to your entry and refresh the page to see the updated entry.![Final_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a36bfd38d99191d/65df8128d85aff229247c64e/Final_Output.png)
