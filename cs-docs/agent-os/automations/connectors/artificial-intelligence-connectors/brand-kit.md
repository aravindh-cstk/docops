---
title: "Brand Kit Connector"
description: "Automate Brand Kit actions seamlessly with the Brand Kit Connector.
"
url: /agent-os/brand-kit
---

# Brand Kit Connector

## Brand Kit Connector

Contentstack's Brand Kit lets you streamline the management of brand identity and guidelines for your content.

Within the Brand Kit platform, you can create a Brand Kit to store brand-specific information. Inside a Brand Kit, you can make tone-specific Voice Profiles to set the tone of voice, formality level, and other key branding elements that highlight your brand. Each Brand Kit contains a Knowledge Vault, a centralized repository designed to store, manage, and organize all brand-related data items. Serving as a comprehensive knowledge base, it supports Contentstack's Generative AI by offering a reliable reference for content creation.

**Additional Resource:** Refer to the [Brand Kit](/docs/brand-kit/about-brand-kit) documentation to know more.

The Brand Kit connector lets you perform Brand Kit specific actions. With this connector, you can fetch the details of Voice Profiles, Generative AI content, and create/update/delete and fetch the details of the Knowledge Vault items.

Details of each action are covered in their respective sections.

## What You Will Learn

-   How to connect your Brand Kit account to Automate.
    
-   How to set up the Brand Kit connector.
    
-   How to configure the Generative AI, Knowledge Vault, and Voice Profile actions.
    

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   A connected Brand Kit account
    
    To use the Brand Kit connector, you first need to add your Brand Kit account. To do so, follow the steps given below:
    
    ### Connect your Brand Kit Account
    
    1.  Click **Configure Action Step** from the left navigation panel.
    2.  Click **Action Step** to configure third-party services.
    3.  Within the **Configure Action Step**, click the **Brand Kit** connector.  
        ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbcadf6e61a2bfa02/6647665e5fd9af3a7470dc69/Select_Connector.png)
    4.  Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Create an Item in Knowledge Vault** action.  
        ![Create_an_Item_in_Knowledge_Vault.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa5ac3fb4ec4cd05/6647665e5fd9af27ff70dc6d/Create_an_Item_in_Knowledge_Vault.png)
    5.  On the **Configure Action** page, click the **\+ Add New Account** to add your Brand Kit account.  
        ![Add_New_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba4297fd15e2b1d4/6647665da0104be0e4c65a82/Add_New_Account.png)
    6.  In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize** button.  
        ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea69de9af3728964/664767614b531e5cfec321ec/Authorize_Button.png)
    7.  In the pop-up, select your organization to complete the authorization.  
        ![Select_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf3a3e778de9fd16/6647665e5c24837b83bc2e47/Select_Organization.png)
    8.  In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize** to complete authorization.  
        ![Authorize_Organization.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d0f3962f4d74560/6647665ef445aa978054bf68/Authorize_Organization.png)
    9.  Provide an Account Name and then click **Save**.  
        ![Save_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ac86289da96d994/6647665d4ac76ef6b440f275/Save_Account.png)

Once done, you can go ahead and set up your Brand Kit connector.

## Set up the Brand Kit Connector

Perform the following steps to set up the Brand Kit connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action** Step, click the **Brand Kit** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbcadf6e61a2bfa02/6647665e5fd9af3a7470dc69/Select_Connector.png)
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
4.  Under **Choose an Action**, you will see these categories of actions: **Generative AI**, **Knowledge Vault**, and **Voice Profile**.  
    ![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5b1bcd4bfccbe3e1/6647665e6d70550f9e4d8a7a/Select_Actions.png)

Let’s look at each of them in detail.

## Generative AI Action

The Generative AI acts as a bridge connecting your Vector database and the Large Language Model (LLM). When you give a prompt or command, the Generative AI API uses the prompt and sends it to the Vector database. The Vector database fetches a bunch of relevant data.

Next, the Generative AI API passes this data to the Large Language Model (LLM). Based on your prompt, the LLM then analyzes the data and understands what it means. Finally, the Generative AI API sends back the processed information to you as a response.

**Additional Resource:** Refer to the [Generative AI API](/docs/developers/apis/generative-ai-api/generative-ai) documentation to know more.

With the Generative AI action, you can fetch the details of the response generated using a Voice Profile and Knowledge Vault. You can perform Generative AI-based operations using the following Generative AI action.

Let’s look at the action in detail.

### Generative AI

This action fetches a response based on the provided prompt, generated using the selected Voice Profile and optionally the Knowledge Vault.

1.  Under **Choose an Action** tab, select the **Generative AI** action.
2.  On the **Generative AI Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** and **Voice Profile** from the **Lookup** list.
    3.  Enter the preferred **Prompt** to generate the response.
    4.  Click the **Use Knowledge Vault** checkbox to generate a response aligned with the **Knowledge Vault** items.  
        If you mark the checkbox, the AI will check for the items in the Knowledge Vault as per the prompt and the selected Voice Profile and generate a response for the provided prompt.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32fa61d8fd08718c/664765deb2e852640f451317/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d8afc69d444b6f8/664765dea0104bb426c65a7e/Save_Exit.png)

## Knowledge Vault Actions

A Knowledge Vault is a centralized repository to store, manage, and organize brand-related documents, data, and content in your Brand Kit. You can create, update, or delete items within a Knowledge Vault. These items can be used to generate responses using the [Generative AI](#generative-ai) action.

**Additional Resource:** Refer to the [Knowledge Vault](/docs/brand-kit/about-knowledge-vault) documentation to know more.

With the Knowledge Vault actions, you can create/delete/update and fetch the details of the items in the Knowledge Vault. You can perform Knowledge Vault based operations using the following Knowledge Vault actions.

**Example use case:**

Set up an automation with Create an Item in Knowledge Vault action and Generative AI action. With this automation, you can create an item in Knowledge Vault and generate content using the Knowledge Vault items and the prompt.

If you do not mark the checkbox for Knowledge Vault, Generative AI will provide a generic response.

**Additional Resource:** Refer to the [Knowledge Vault API](/docs/developers/apis/knowledge-vault-api/knowledge-vault) documentation to know more.

### Create an Item in Knowledge Vault

This action lets you create a new item in the Knowledge Vault.

1.  Under **Choose an Action** tab, select the **Create an Item in Knowledge Vault** action.
2.  On the **Create an Item in Knowledge Vault Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** from the **Lookup** list.
    3.  Enter the preferred **Content** to create an item.  
        ![Select_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1c1bac622632953/664765c3015b1c67e056e962/Select_Field.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62cb15de7327e0e5/664765c3b2e8521131451312/Save_Exit.png)

### Delete an Item from Knowledge Vault

This action deletes an item from the Knowledge Vault.

1.  Under **Choose an Action** tab, select the **Delete an Item from Knowledge Vault** action.
2.  On the **Delete an Item from Knowledge Vault Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** from the **Lookup** list.
    3.  Select the **Knowledge Vault Item** you want to delete from the **Lookup** list.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f0afc58968c2001/664765d2acadafc357727c98/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12af2ca2343fc7b8/664765d16d705581c64d8a6f/Save_Exit.png)

### Get All Items in Knowledge Vault

This action fetches the details of all the items in the Knowledge Vault.

1.  Under **Choose an Action** tab, select the **Get All Items in Knowledge Vault** action.
2.  On the **Get All Items in Knowledge Vault Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** from the **Lookup** list to fetch all the items.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45a31a1843227652/664766224b531e7c82c321db/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14d8627ae424cb38/66476623d4d02e2faf2ea530/Save_Exit.png)

### Get a Single Item in Knowledge Vault

This action fetches the details of a single existing item in the Knowledge Vault.

1.  Under **Choose an Action** tab, select the **Get a Single Item in Knowledge Vault** action.
2.  On the **Get a Single Item in Knowledge Vault Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** and **Knowledge Vault Item** from the **Lookup** list to fetch the details of a single item.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt229ec99169efbf82/664765fab2e852e0b045131b/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6a8180464139ea26/664765fadda14b8491dfeff8/Save_Exit.png)

### Get Data Chunks from Knowledge Vault

This action retrieves the most relevant data chunks by querying the existing Knowledge Vault in your Contentstack Brand Kit.

**Note:** You can fetch up to a maximum of **two** relevant data chunks at a time.

1.  Under **Choose an Action** tab, select the **Get Data Chunks from Knowledge Vault** action.
2.  On the **Get Data Chunks from Knowledge Vault Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand** **Kit** from the **Lookup** list to fetch the details of the data chunks from the Knowledge Vault.
    3.  In the **Search** **Content** field, enter the content you want to query within the existing Knowledge Vault to retrieve the most accurate and relevant data chunks.
        
        **Note**:
        
        -   Ensure that items are added to the Knowledge Vault to enable the retrieval of data chunks.
        -   If the Knowledge Vault does not contain content matching the **Search** **Content**, the output will be generated based on the highest similarity score.
        
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd050d8a45b46b17/6746ebfcde20c0d0d7d2dea4/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte5ba922005e2274a/6746ebfc50a1cf1191d5d28f/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb198218450a13b94/6746ebfc9457b5c9894380d1/Save_Exit_Button.png)

### Update an Item in Knowledge Vault

This action lets you update an existing item in the Knowledge Vault.

1.  Under **Choose an Action** tab, select the **Update an Item in Knowledge Vault** action.
2.  On the **Update an Item in Knowledge Vault Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** and **Knowledge Vault Item** from the **Lookup** list.
    3.  Enter the preferred **Content** to update the selected item.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt877b9bd8089680f4/6647664e0b508a9a14dcf5ee/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf51ad6f097ce5783/6647664eefc97a90294c0428/Save_Exit.png)

## Voice Profile Actions

Voice Profiles define a brand or individual user's preferred writing style, tone, and communication preferences. Through tailored Voice Profiles, you can direct the AI to produce content that mirrors the unique brand style and messaging objectives.

Within a Brand Kit, you can create multiple Voice Profiles, enabling the selection of distinct styles for various scenarios. For example, a company might prefer a formal tone for reports or press releases while opting for a casual tone for blog and social media content.

Within the Contentstack’s CMS, you can use the [AI Assistant](/docs/marketplace/ai-assistant-with-brand-kit) app to generate content based on the Brand Kit and Voice Profile.

**Additional Resource:** Refer to the [Voice Profile](/docs/brand-kit/about-voice-profile) documentation to know more.

With the Voice Profile actions, you can create, update, delete, and fetch the details of all the Voice Profiles and Brand Kit. You can perform Voice Profile based operations using the following Voice Profile actions.

### Create a Voice Profile

This action creates a new Voice Profile in a specific Brand Kit.

1.  Under **Choose an Action** tab, select the **Create a Voice Profile** action.
2.  On the **Create a Voice Profile Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** from the **Lookup** list.
    3.  Enter the **Voice Profile Name** to create a new Voice Profile.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7948ea460e1855d/6657f2ff12f7ee286094a070/Select_Fields.png)
    4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the additional fields.
    5.  Enter or update the short **Description** for the new Voice Profile.
    6.  Select the **Formality Level**, **Tone of Voice**, **Humor Level**, **Language Complexity Level** from the drop-down list.
        1.  **Formality Level**: You can set the formality level as **None**, **Casual**, **Business**, or **Professional**. Let’s discuss these in detail:
            1.  **None**: Generic content without any specifications.
            2.  **Casual**: Uses an informal but engaging tone that makes content more compelling.
                
                **Example:** "It’s true, nobody really enjoys grocery shopping. Here's five ways to make it less painful."
                
            3.  **Business**: Employs clear and concise language that maintains a tone suitable for business settings.
                
                **Example:** "Please note that customer support is available 24/7 via our online customer portal."
                
            4.  **Professional**: Uses polished language often found in legal documents or important announcements.
                
                **Example:** "We are pleased to announce the official launch of our new product line."
                
        2.  **Tone Of Voice**: You can set the tone of Voice as **None**, **Informative**, **Assertive**, or **Persuasive**. Let’s discuss these in detail:
            1.  **None**: Generic content without any specifications.
            2.  **Informative**: Delivers facts in a neutral way, without opinions or personal slants.
                
                **Example:** "The report shows a 15% increase in sales."
                
            3.  **Assertive**: Presents arguments and ideas with confidence, making clear recommendations.
                
                **Example:** "This method is the most effective based on our research."
                
            4.  **Persuasive**: Uses strong arguments and emotional appeals to influence action or belief.
                
                **Example:** "Upgrade now and unlock exclusive features to transform your experience!"
                
        3.  **Humor Level**: You can set the humor level as **None**, **Serious**, **Subtle**, or **Lighthearted**. Let’s discuss these in detail:
            1.  **None**: Generic content without any specifications.
            2.  **Serious**: Maintains a strictly professional tone, avoiding humor altogether.
                
                **Example:** "Lack of data security can have serious consequences."
                
            3.  **Subtle**: Uses light touches of humor or wit to keep the audience engaged without compromising professionalism.
                
                **Example:** "Here are ten tips for writing email subject lines that won’t end up in the dreaded spam folder."
                
            4.  **Lighthearted**: Incorporates relevant humor to connect with the audience and create a more playful atmosphere.
                
                **Example:** "Sometimes my biggest accomplishment of the day is simply remembering to mute myself during a virtual meeting."
                
        4.  **Language Complexity Level**: You can set the complexity level as **None**, **Plain**, **Straightforward**, or **Technical**. Let’s discuss these in detail:
            1.  **None**: Generic content without any specifications.
            2.  **Plain**: Uses everyday words that are clear and understandable to a broad audience.
                
                **Example:** "Turn on the device and follow the on-screen instructions."
                
            3.  **Straightforward**: Employs clear communication, potentially including industry-specific terms relevant to the target audience.
                
                **Example:** "The ROI of this investment is significant."
                
            4.  **Technical**: Leverages advanced concepts and specialized vocabulary for audiences with prior knowledge.
                
                **Example:** "The software leverages machine learning algorithms for optimization.
                
    7.  Enter the content in the **Insights** field which will serve as additional information that you can provide to the AI model.
    8.  Enter the **Sample Content** for your Voice Profile to generate similar content in action.  
        ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86dde7ef235d55b3/6657f2ffe557cb6d0a7f1b9e/Show_Optional_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2fe6ff988895b49a/665db521742a0c2c4c7c5ae1/Save_Exit_Button.png)

### Delete a Voice Profile

This action deletes an existing Voice Profile from a specific Brand Kit.

1.  Under **Choose an Action** tab, select the **Delete a Voice Profile** action.
2.  On the **Delete a Voice Profile Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** and **Voice Profile** from the **Lookup** list.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4204ce3ba1bbd4f8/6657f3259518af67c0666eb6/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3cc62b6215b5deba/6657f3252da50d3b614747ff/Save_Exit.png)

### Get All Voice Profiles

This action fetches the details of all the Voice Profiles from a specific Brand Kit.

1.  Under **Choose an Action** tab, select the **Get All Voice Profiles** action.
2.  On the **Get All Voice Profiles Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** from the **Lookup** list to fetch the details of all the Voice Profiles.  
        ![Select_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fcd452b90bea042/66476640428432342619835d/Select_Field.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf2898aa40771932/66476640342fb5658262c5cf/Save_Exit.png)

### Get a Single Brand Kit

This action fetches the details of a single Brand Kit in an organization.

1.  Under **Choose an Action** tab, select the **Get a Single Brand Kit** action.
2.  On the **Get a Single Brand Kit Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** from the **Lookup** list to fetch the details of a single brand kit.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb0f22cb6b87b0e4/664765eb4ac76e5daa40f261/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc44a88810a532cd1/664765eb4b531e3ee2c321d7/Save_Exit.png)

### Get a Single Voice Profile

This action fetches the details of a single Voice Profile.

1.  Under **Choose an Action** tab, select the **Get a Single Voice Profile** action.
2.  On the **Get a Single Voice Profile Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** and **Voice Profile** from the **Lookup** list.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc54df67075e34c29/66476612015b1ce2d856e975/Select_Fields.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91d91a34ee793d37/664766126d705577d34d8a75/Save_Exit.png)

### Update a Voice Profile

This action updates an existing Voice Profile in a specific Brand Kit.

1.  Under **Choose an Action** tab, select the **Update a Voice Profile** action.
2.  On the **Update a Voice Profile Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account](#connect-your-brand-kit-account) step.
    2.  Select a **Brand Kit** and **Voice Profile** from the **Lookup** list.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt891f7d6dc0e68b72/6657f3158e34d54998e19bff/Select_Fields.png)
    3.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the additional fields.
        
        **Note:** If you have enabled the **Show Optional Fields** toggle button, you must select at least **one** optional field to update a Voice Profile.
        
    4.  Enter a new **Voice Profile Name** to update the title of the Voice Profile.
    5.  Enter or update the short **Description** for the existing Voice Profile.  
        ![Show_Optional_Fields_One.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc65c0267bf133646/6657f315b752e0eda381b93b/Show_Optional_Fields_One.png)
    6.  Select the **Formality Level**, **Tone of Voice**, **Humor Level**, **Language Complexity Level** from the drop-down list.
        
        You can update the Formality Level, Tone Of Voice, Humor Level, and Language Complexity Level for the Voice Profile as required. Additionally, you can update the information inside the **Insights** and **Sample Content** fields as shown in the [Create a Voice Profile](#create-a-voice-profile) step.
        
        ![Show_Optional_Fields_Two.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75dc7e2291b73ea3/6657f3156d77590875e47385/Show_Optional_Fields_Two.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action. ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted501badbd9adbec/664765dd342fb5743062c5c6/Test_Action.png)
5.  The output will be shown as below. Click the **Save and Exit** button.  
    ![Save_and_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82a10fb02c0fcf29/6657f315b752e0fc1881b93f/Save_and_Exit.png)

This sets the **Brand Kit** connector.

## Related Resources

-   [Brand Kit Management API](/docs/developers/apis/brand-kit-management-api)
-   [Generative AI API](/docs/developers/apis/generative-ai-api)
-   [Knowledge Vault API](/docs/developers/apis/knowledge-vault-api)
