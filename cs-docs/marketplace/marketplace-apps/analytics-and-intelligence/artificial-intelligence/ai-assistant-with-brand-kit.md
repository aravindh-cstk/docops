---
title: "AI Assistant with Brand Kit"
description: "Use the AI Assistant with Brand Kit in Contentstack Marketplace to generate content aligned with your brand’s tone, style, and communication guidelines."
url: /marketplace/ai-assistant-with-brand-kit
---

# AI Assistant with Brand Kit

## AI Assistant with Brand Kit

The AI Assistant is a powerful natural language processing app that efficiently processes, transforms, and generates content with human-like accuracy.

Its flexible architecture seamlessly integrates with Brand Kit, enabling content creation from the Knowledge Vault or LLM, ensuring consistency across digital touchpoints.

By setting up Brand Kit, the AI Assistant applies your brand's guidelines, styles, and preferences, ensuring all generated content aligns perfectly with your brand identity for a cohesive audience experience.

You can install the AI Assistant app directly from our Marketplace and use it within your entries to generate brand-specific content.

**Additional Resource:** For more details, refer to the [Brand Kit](/docs/brand-kit/about-brand-kit) documentation.

**Note:** If Brand Kit is not enabled for your Organization, the AI Assistant app operates as usual. Please follow the [AI Assistant App Installation Guide](/marketplace/ai-assistant) to see how it works in this scenario.

Follow this step-by-step guide to install the AI Assistant app within your stack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to install the AI Assistant app from the Marketplace.
    
-   How to configure the app with Brand Kit, Contentstack-managed credentials, or custom credentials.
    
-   How to create custom actions and sub-actions.
    
-   How to generate and transform content within an entry.
    

## Steps for Execution

1.  [Install the AI Assistant app in Marketplace](#install-the-ai-assistant-app-in-marketplace)
2.  [Use the AI Assistant app within your entry](#use-the-ai-assistant-app-within-your-entry)

1.  ## Install the AI Assistant App in Marketplace
    
    To install the AI Assistant app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all the available apps. Hover over the **AI Assistant** app and click **Install**.![Market place-AI-Assistant.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74f7cf43c4a7eed5/69ee9d7e0050b65543a3863a/Market_place-AI-Assistant.png)
    4.  In the pop-up window, select the stack where you want to install the AI Assistant app, accept the **Terms of Service**, and click the **Install** button.![3-AI-Assistant-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltccfb790fb013924d/665e888a3585f6f12b7360dd/3-AI-Assistant-App-Install.png)
    5.  On the **Configuration** page, enter the following details:
        1.  **Platform Configuration**: You can manage the API Keys by enabling [Brand Kit](/docs/brand-kit), or configure the app using a Contentstack-managed API Key or custom credentials:
            
            **Brand Kit Configuration (Overrides API Credentials)**: You can use Brand Kit’s API Key Credentials in the AI Assistant app.
            
            1.  **Brand Kit Disabled**: By default, Brand Kit is disabled in the app. This means that, initially, you must manually configure the API credentials directly within the app.![4-a-AI-Assistant-Platform-Configuration-With-BK-Disabled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt104064c9f3e7683d/672cd7abcc42513be6a229a3/4-a-AI-Assistant-Platform-Configuration-With-BK-Disabled.png)
                
                **Select API Credentials**: You can select a way to configure the AI Assistant app:
                
                1.  **Managed by Contentstack**: Select the **Managed by Contentstack** option to configure the app using Contentstack-powered API keys.![4-b-AI-Assistant-Configuration-Platform-Managed-By-Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdab8b40dccf57e4e/672cd7abe71e4925f7f0e831/4-b-AI-Assistant-Configuration-Platform-Managed-By-Contentstack.png)
                2.  **Custom Credentials**: You can configure the app using third-party API credentials, such as OpenAI, Azure OpenAI Service, AWS Bedrock, and Google Vertex AI. Select the **Provider Name** and enter the required credentials to configure the app.![4-c-AI-Assistant-Configuration-Platform-Custom-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt45377e500bd60863/672cd7ab4f4fa3eb1fb79a9b/4-c-AI-Assistant-Configuration-Platform-Custom-Credentials.png)
            2.  **Brand Kit Enabled**: When enabling Brand Kit, the app will use Brand Kit’s API settings to manage the API credentials. This override aligns the AI Assistant’s output with your brand’s guidelines for tone, style, and voice, ensuring a consistent branded experience.
                
                Click the **Enable On-Brand Generative AI** toggle button, a pop-up appears. Then click **Proceed** to override the existing API Keys.
                
                ![4-d-AI-Assistant-Platform-Configuration-With-BK-Disabled-to-Enabled-Popup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt424f6dfe2c4ea5bb/672cd7ab4d178e39dd139e41/4-d-AI-Assistant-Platform-Configuration-With-BK-Disabled-to-Enabled-Popup.png)
                
                Enabling Brand Kit will automatically manage the AI Assistant app API settings, overriding any manual configurations. You can see a note in the **Select API Credentials** section.
                
                ![4-e-AI-Assistant-Platform-Configuration-With-BK-Enabled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88ae5d7b44d93d6d/672cd7abb836a06f486ff80f/4-e-AI-Assistant-Platform-Configuration-With-BK-Enabled.png)
                
                **Additional Resource:** To view the Brand Kit API Key configurations, refer to the [Edit a Brand Kit](/docs/brand-kit/edit-a-brand-kit/) document.
                
            3.  After adding the details, click **Save and Proceed**.
        2.  **Advanced Configuration**: You can create custom actions to use AI within your entry fields.
            
            Perform the following steps to create a Custom Action:
            
            1.  Click the **\+ Create Action** button.![5-AI-Assistant-Configuration-Advanced-Create-Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb6c5332fe6f21e0/665e888a4ddc4bf3f309cbfe/5-AI-Assistant-Configuration-Advanced-Create-Action.png)
            2.  In the **Add your custom prompt** section, enter the **Custom Name**, upload the **Icon** (in SVG format), enable or disable **Include Field data** option, and provide the required **Prompt**.![6-AI-Assistant-Configuration-Advanced-Custom-Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07260aba6e19739d/665e888aca40f96f0564ad6d/6-AI-Assistant-Configuration-Advanced-Custom-Action.png)
                
                You can group similar prompts together by adding sub-actions for the main prompt.
                
            3.  To add a sub-action, click **\+ Create Sub-action Prompt** and follow the steps given below:
                
                1.  You can also toggle **Enable search for sub-action** to have a search bar filter for your sub-actions.
                2.  In the **Add the custom option** section, enter a **Display Name** and **Value** for your sub-action.
                3.  You can add, delete, or reorder the sub-actions.
                
                For example, your prompt is **"Shorten this text by** **{{selected\_option}}****"**. In the sub-action prompt, you can provide a value that will customize your prompt further. Suppose, you enter **10%** in the **Value** field, then, the final prompt will be **"Shorten this text by 10%"**.
                
                **Note:** "{{selected\_option}}" must be included in the prompt if you want to add sub actions.
                
                ![7-AI-Assistant-Configuration-Advanced-Create-Sub-Action-Prompt](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d502ddb3b7fd500/665e888a3585f693fa7360e1/7-AI-Assistant-Configuration-Advanced-Create-Sub-Action-Prompt.png)
            4.  Choose the option to **Perform action on**. You can select whether to apply the action on the **Current Field** or **Other Field**.
            5.  To **View Custom Action on**, select the **Entry Field** checkbox(s) to view the app in the entry field. If you select the **When JSON RTE field content is selected** checkbox, you will be able to perform actions only on the selected content in the JSON Rich Text Editor field.
            6.  Then, click **Save or Save and Proceed** to save the advanced configuration settings.![8-AI-Assistant-Configuration-Advanced-More-Settings.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta71638c791714ef4/665e888bd036b2f24500b192/8-AI-Assistant-Configuration-Advanced-More-Settings.png)
            
            You have successfully configured the AI Assistant app with Brand Kit.
            
            ![9-AI-Assistant-App-Configured](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84ff6bacf4e49849/665e888b061e930fc828f103/9-AI-Assistant-App-Configured.png)
    6.  Click **Save** to save the app configurations.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![10-AI-Assistant-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0839f080ba1fdb78/665e888aba880956b453aee0/10-AI-Assistant-UI-Locations.png)
        
        **Additional Resource**:
        
        -   To use the AI Assistant app in your stack, configure the field type(s) for the **Field Modifier UI Location**. Refer to the [Field Modifier UI Location](/docs/developer-hub/field-modifier-location) documentation for details.
        -   For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    8.  You must update the AI Assistant app manually, if available, to install the latest release enhancements.
        1.  If there is any updated version available for installation, you will see a red dot on the stack name.![10-a-AI-Assistant-Update-Available](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f65103975b33eea/670660e32dde1a358cf795e8/10-a-AI-Assistant-Update-Available.png)
        2.  If you ignore the update requirement and directly go to the app configuration by clicking the gear icon, you will get instructions to update the app first.![10-b-AI-Assistant-Update-Required-Message](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c09a7ba4775de1d/670660e31f5d8c35899b5581/10-b-AI-Assistant-Update-Required-Message.png)
        3.  In this case, you have to go back to the Installation tab and click the **Update** button to install the updates.![10-c-AI-Assistant-Update-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt638e53bfc7b13249/670660e3baa0317b3633a475/10-c-AI-Assistant-Update-Button.png)
        4.  After installing the updates, click **Save** to save the updated app configurations.
    9.  Once done, click **Open Stack** to start using the AI Assistant app.
2.  ## Use the AI Assistant App within your Entry
    
    To use the AI Assistant app within the entry of a stack, follow the steps given below:
    
    1.  Go to the stack where you have installed the AI Assistant app, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type/) by adding relevant details as displayed below:![11-AI-Assistant-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc801f293c3c3e822/6660509cdbfae91ece0fa7e5/11-AI-Assistant-Content-Type.png)
    3.  To use the AI Assistant app, let's create an entry in the newly created content type. In the left navigation panel, navigate to the [Entries](/docs/headless-cms/create-an-entry/) page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
    4.  You can see the AI Assistant app in the [Field Modifier](/docs/developer-hub/field-modifier-location) location.![13-AI-Assistant-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9dd233acf01d1050/665e888bce5a1c95210c8b78/13-AI-Assistant-App-Icon.png)
    5.  Click the **AI Assistant** app icon, a pop-up appears.![14-AI-Assistant-with-Brand-Kit-Popup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5085368b92dac43/665e88b3d036b2250600b196/14-AI-Assistant-with-Brand-Kit-Popup.png)
    6.  A panel opens up. Click the **Brand Kits** drop-down and select the required Brand Kit. Then, from the **Voice Profiles** drop-down, select the applicable Voice Profile. If you want to generate content from the **Knowledge Vault**, enable it. If you disable it, the AI Assistant app will generate content directly from the LLM (Large Language Models).
        
        **Additional Resource**:
        
        -   To know more about Brand Kit, Voice Profile, and Knowledge Vault, refer to the [Brand Kit](/docs/brand-kit/about-brand-kit), [Voice Profile](/docs/brand-kit/about-voice-profile), and [Knowledge Vault](/docs/brand-kit/about-knowledge-vault) documentation.
        -   To start using the Brand Kit with the AI Assistant app, refer to the [Get Started with Brand Kit](/docs/brand-kit/get-started-with-brand-kit) documentation.
        
        ![15-AI-Assistant-with-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6a1e35ce41412780/665e88b3451725ad177a5b02/15-AI-Assistant-with-Brand-Kit.png)
        
        **Note:** If you don't want to use Brand Kit or if it is disabled for you, you can still use all the AI Assistant options for creating generic or non-brand specific content.
        
        You are now ready to use the AI Assistant app. Enter the prompt to start generating the content.
        
        ![16-AI-Assistant-with-Brand-Kit-Prompt](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd24b973bed0f31a1/665e88b3061e931e3a28f107/16-AI-Assistant-with-Brand-Kit-Prompt.png)
        
        When you press **enter**, the AI Assistant app generates text based on the communication style settings that you used while configuring the voice profile.
        
        To stop the app from generating the content, click **Stop Generating**.
        
        ![17-AI-Assistant-with-Brand-Kit-Stop-Generating-Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt92782f346e05fe7b/665e88b3ce5a1c33f00c8b7c/17-AI-Assistant-with-Brand-Kit-Stop-Generating-Content.png)
        
        After the app generates the content, it offers three options: **Accept**, **Try Again**, and **Cancel**, as shown in the screenshot below.
        
        Click **Accept** to accept the current content changes or to overwrite the existing content with the newly generated content. To rephrase the content, click **Try Again** and to discard the generated content , click **Cancel**.
        
        ![18-AI-Assistant-with-Brand-Kit-Action-Items-Accept-Or-Try-Again-Or-Cancel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta372a6cc097cb721/665e8aee653cb99d77a7ef66/18-AI-Assistant-with-Brand-Kit-Action-Items-Accept-Or-Try-Again-Or-Cancel.png)
    
    The AI Assistant app categorize the content generation in three categories:
    
    -   [Custom Actions](#custom-actions)
    -   [Replace field content](#replace-field-content)
    -   [Generate based on another field](#generate-based-on-another-field)
    
    ### Custom Actions
    
    You can see the Custom Actions that you configured in the advanced configuration settings in [step 1](#install-the-ai-assistant-app-in-marketplace).
    
    ![19-AI-Assistant-with-Brand-Kit-Custom-Actions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83ba79e2923dc959/66604f95dbfae943c20fa7db/19-AI-Assistant-with-Brand-Kit-Custom-Actions.png)
    
    **Note:** The AI Assistant options in the UI can be changed or edited by the Contentstack authorized team member or an Organization [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin).
    
    You can use the **Custom Actions** defined in the configuration and transform your content.
    
    ![20-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Shorten](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18b30b4cceae6b62/66604f96857ddb205cbbed4d/20-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Shorten.png)
    
    In the above example, there is a custom action to **“Shorten text by 50%”**. You can see the output as per the custom action:
    
    ![21-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Shorten-Response](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb8da60963ad25adf/66604f95061e937cab28ff90/21-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Shorten-Response.png)
    
    If the Custom Action has any sub-action(s), then the sub-action(s) can be displayed in the form of a dropdown when you hover over the custom action.
    
    ![22-AI-Assistant-with-Brand-Kit-Custom-Sub-Actions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b7c3f19d1d2be6d/66604f96857ddbfe1cbbed51/22-AI-Assistant-with-Brand-Kit-Custom-Sub-Actions.png)
    
    You get options to transform the content, such as:
    
    -   Rewrite the field content
    -   Shorten this text
    -   You can also provide custom commands for a field
    
    Let’s see one of them with an example.
    
    Navigate to the _Title_ field. Click the AI Assistant app icon and then click **Rewrite the field content** option.
    
    ![23-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Rewrite](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f297f99f9f17e7f/66604f96585b4407ee98850d/23-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Rewrite.png)
    
    This re-phrases the existing content for better understanding.
    
    ![24-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Rewrite-Response](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56ea91d70f85ca34/66604f9670d09b194ed63ce2/24-AI-Assistant-with-Brand-Kit-Custom-Action-Example-to-Rewrite-Response.png)
    
    ### Replace field content
    
    You can replace or modify the content using the following predefined actions.
    
    ![25-AI-Assistant-with-Brand-Kit-Replace-Field-Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec80ebb68d08ec70/66604f96b7171b14f62416c8/25-AI-Assistant-with-Brand-Kit-Replace-Field-Content.png)
    
    Let’s see each one of them with an example:
    
    -   #### Optimize text for SEO
        
        The AI Assistant **Optimize text for SEO** predefined action empowers you to create highly search-optimized content, driving more organic traffic and improving your website's overall search rankings. This action will Identify keywords and key phrases, and simply generate the SEO optimized text.
        
        ![26-AI-Assistant-Optimize-Text-For-SEO](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40092b28e06c02cb/66604f96061e93680a28ff94/26-AI-Assistant-Optimize-Text-For-SEO.png)
    -   #### Change tone
        
        The AI Assistant **Change tone** predefined action allows you to change the tone and style of the existing content using four options: **Persuasive**, **Straightforward**, **Friendly**, and **Professional.**
        
        ![27-AI-Assistant-Change-Tone](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfdfdb03985a8fe7f/66604f963bba5e750a414184/27-AI-Assistant-Change-Tone.png)
    -   #### Change length
        
        The AI Assistant **Change length** predefined action helps increase or reduce the length of the existing content.
        
        You can use **Longer** to add more content.
        
        ![28-AI-Assistant-Change-Length-Longer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9ef23cf4eddbc91/66604f96ba8809f0cb53bd40/28-AI-Assistant-Change-Length-Longer.png)
        
        You can use**Shorter** to shorten up the content.
        
        ![29-AI-Assistant-Change-Length-Shorter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21e104136d6aa034/66604fa4857ddbd29ebbed59/29-AI-Assistant-Change-Length-Shorter.png)
    -   #### Translate to current locale language
        
        You can also enter custom commands to generate content based on the command for the entry field. You can add and use the following variables in the custom command as placeholders for dynamic content.
        
        -   ##### Field Data
            
            {{field\_data}}: Use this variable to store the current field content in the custom command box for manipulation. The field\_data placeholder can hold the value of the current field’s content.
            
            Suppose you want to rephrase the content in the Blog Name field then you can provide the following command in the custom box and click enter:
            
            Rephrase this text to: {{field\_data}} OR Summarize this text: {{field\_data}}
            
            ![30-AI-Assistant-Field-Data-Command](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcecc0a38c68c58ca/66604fa4b7171b35642416d0/30-AI-Assistant-Field-Data-Command.png)
            
            In our example, it can generate new content for the Blog Name field as shown below:
            
            ![31-AI-Assistant-Field-Data-Response](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3fdd818ab10e9b8/66604fa3d036b2b03b00c495/31-AI-Assistant-Field-Data-Response.png)
            
            **Note:** If you do not add the {{field\_data}} variable in the custom command, the field content is automatically added at the end of the custom command.
            
        -   ##### Current Locale
            
            {{current\_locale}}: Use this variable to translate the field content in different locales. The {{current\_locale}} placeholder can hold the value for the current locale in which you want to translate the field content.
            
            Suppose you want to rephrase the content in the Blog Name field then you can provide the following command in the custom box.
            
            Translate this text to {{current\_locale}}:{{field\_data}}
            
            ![32-AI-Assistant-Custom-Locale-Command](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ff709349a6bb0c7/66604fa4ce5a1c18030c9b21/32-AI-Assistant-Custom-Locale-Command.png)
            
            In our example, our locale is English and we are translating it to French locale. This can generate the content in the specified locale for the Blog Name field as shown below:
            
            ![33-AI-Assistant-Custom-Locale-Response](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt444744cf90460cf8/66604fa438df325500619ac3/33-AI-Assistant-Custom-Locale-Response.png)
    
    ### Brainstorm With AI Assistant
    
    Brainstorm With AI Assistant is a chat-based feature in the AI Assistant app, designed to support your creative process. It enables users to engage in dynamic, conversational brainstorming sessions with AI, helping generate ideas, outline concepts, and shape content effortlessly.
    
    To use this feature, click the **Brainstorm With AI Assistant** option, a pop-up appears.
    
    ![33-a-Brainstorm-With-AI-Assistant-Option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b3f879c987412ed/672cdf63069a86e5188174ec/33-a-Brainstorm-With-AI-Assistant-Option.png)
    
    Enter any prompt of your preference, to initiate the conversation with AI and then click the **Generate** button to generate a response for your prompt.
    
    ![33-b-Brainstorm-With-AI-Assistant](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48af88db851acf9a/672cdf63047f53db2866b354/33-b-Brainstorm-With-AI-Assistant.png)
    
    To stop the app from generating the content, click **Stop Generating**.
    
    ![33-c-Brainstorm-With-AI-Assistant-Stop-Generating](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84c5361b8f0b5559/672cdf634f4fa344a6b79b19/33-c-Brainstorm-With-AI-Assistant-Stop-Generating.png)
    
    This generates the content based on your provided prompt.
    
    ![33-d-Brainstorm-With-AI-Assistant-Response](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0e1c349915d5688/672cdf630642252c52dc94f4/33-d-Brainstorm-With-AI-Assistant-Response.png)
    
    After the app generates the content, it offers these options: **Accept**, **Regenerate**, and **Edit**, as discussed below:
    
    1.  Click the **Accept** icon to accept the newly generated content and add it in the field.![33-e-Brainstorm-With-AI-Assistant-Accept](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1369d31849ad518a/672cdf63a26dfe01fe1dacb3/33-e-Brainstorm-With-AI-Assistant-Accept.png)
    2.  To rephrase the content, click the **Regenerate** icon.![33-f-Brainstorm-With-AI-Assistant-Regenerate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9c6b3e6ce7da4e5/672cdf63d01b2c6ef48ea1a8/33-f-Brainstorm-With-AI-Assistant-Regenerate.png)
    3.  Click the **Edit** icon, to update the prompt, then click the **Generate** button to get a new response for the updated prompt.![33-g-Brainstorm-With-AI-Assistant-Edit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78dd9c7383967fc6/672cdf634b891d050d71aa6b/33-g-Brainstorm-With-AI-Assistant-Edit.png)
        
        You can use pagination to view all your responses.
        
        ![33-h-Brainstorm-With-AI-Assistant-Pagination](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt855286490efbb4f3/672cdf63a3eb8ef6573e0b81/33-h-Brainstorm-With-AI-Assistant-Pagination.png)
    
    **Warning:** Once you close the **Brainstorm With AI Assistant** pop-up, all the conversation will be lost.
    
    ### Generate based on another field
    
    You can also generate content for one field based on the content of another field.
    
    The AI Assistant app lets you generate the following content based on another entry field.
    
    ![34-AI-Assistant-with-Brand-Kit-Generate-Based-on-Another-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt265f8df5df226b93/66604fa4bad22f595fa66d94/34-AI-Assistant-with-Brand-Kit-Generate-Based-on-Another-Field.png)
    
    Let’s see each of them with some examples as shown below:
    
    -   #### Outline
        
        To generate an outline for the _Blog Summary_ field based on the _Title_ of the entry, navigate to the _Blog Summary_ field, click **Outline**, and then click the **Title** field.
        
        ![35-AI-Assistant-Outline](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0cd3b99cae4c296d/66604fa3b7171b252f2416cc/35-AI-Assistant-Outline.png)
    -   #### Summary
        
        Now, to generate a Summary for the _Blog Summary_ field based on the _Blog Name_, navigate to the _Blog Summary_ field, click **Summary**, and then click **Blog Name**.
        
        ![36-AI-Assistant-Summary](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd077303764841028/66605295ce5a1c09690c9b39/36-AI-Assistant-Summary.png)
    -   #### SEO Tags
        
        To generate SEO Tags for the _Tags_ field based on the _Blog Name_, navigate to the _Tags_ field, click **SEO Tags**, and then click **Blog Name**.
        
        ![37-AI-Assistant-SEO-Tags](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedeb63c3d25dd693/66604fa3857ddb5642bbed55/37-AI-Assistant-SEO-Tags.png)
    -   #### Blog Posts
        
        Now, to generate a _Blog Post_ for the Blog Content field based on the _Blog Summary_ field, navigate to the _Blog Content_ field, click **Blog Posts**, and then click **Blog Summary**.
        
        ![38-AI-Assistant-Blog-Posts](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt638a9fd9da24d01a/66604fa4742a0c45ce7c7525/38-AI-Assistant-Blog-Posts.png)
    -   #### Headline
        
        To generate a headline for the _Blog Name_ field based on the _Blog Summary_ of the entry, navigate to the _Blog Name_ field, click **Headline**, and then click the **Blog Summary** field.
        
        ![39-AI-Assistant-Headline](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9208e80129a4f03/66604fae3585f6cc80737000/39-AI-Assistant-Headline.png)
    -   #### User Persona Tags
        
        To generate a user persona tag for the _Blog Content_ field based on the _Blog Summary_ of the entry, navigate to the _Blog Content_ field, click **User Persona Tags**, and then click the **Blog Summary** field.
        
        ![40-AI-Assistant-User-Persona-Tags](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb65fdbfba655e047/66604faeca40f944d964bb11/40-AI-Assistant-User-Persona-Tags.png)
