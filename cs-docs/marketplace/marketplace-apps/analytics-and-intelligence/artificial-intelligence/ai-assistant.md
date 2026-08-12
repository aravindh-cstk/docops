---
title: "AI Assistant App Installation Guide"
description: "The Contentstack Marketplace AI Assistant app lets you transform and regenerate content for the Contentstack entry fields. "
url: /marketplace/ai-assistant
---

# AI Assistant App Installation Guide

## AI Assistant App Installation Guide

AI Assistant is an AI-based natural language processing platform that processes and transforms content. It can modify, generate, and alter your content into a readable format with more accuracy. It is efficient and capable of providing human-like responses for any query, making it even more popular.

Contentstack Marketplace lets you install the AI Assistant application and use it within your entries to transform content. You can add the AI Assistant app in the [Field Modifier UI location](/docs/developer-hub/field-modifier-location/) for different entry fields such as Title, Single Line Textbox, Multi-Line Textbox, HTML-based Rich Text Editor, JSON Rich Text Editor, and Markdown.

You can instantly create high-quality content for an entry field based on another field such as outlines, summaries, headlines, and much more. The AI Assistant app also allows you to provide custom instructions on a particular field to manipulate the content based on your instructions.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide lets you install the AI Assistant app within your stack.

## Steps for Execution

1.  [Install AI Assistant in Contentstack Marketplace](#install-ai-assistant-in-contentstack-marketplace)
2.  [Use AI Assistant within your Stack Entry](#use-ai-assistant-within-your-stack-entry)

1.  ## Install AI Assistant in Contentstack Marketplace
    
    Follow the steps to install the AI Assistant application in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **AI Assistant** app and click **Install**.![Market place-AI-Assistant.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt74f7cf43c4a7eed5/69ee9d7e0050b65543a3863a/Market_place-AI-Assistant.png?locale=en-us)
    5.  In the popup window, select the stack where you want to install the AI Assistant app, accept the terms and conditions, and click the **Install** button.![AI-Assistant-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e90f5951db71e10/6538dfe759c1b95646de0bd0/AI-Assistant-Install-App.png)
    6.  On the **Configuration** page, enter the following details to configure the app:
        1.  **Platform Configuration:** Select a way to configure the app. Below are the two ways in which you can configure the AI Assistant app.
            1.  **Managed by Contentstack:** You can configure the app using Contentstack powered API keys.
            2.  **Custom Credentials:** You can configure the app using third-party API credentials, such as **OpenAI**, **Azure OpenAI Service**, **AWS Bedrock**, or **Google Vertex AI**.![AI-Assistant-AI-Providers-4](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7a4b6f5f1a13d79/6630f7715319a0f5991f5165/AI-Assistant-AI-Providers-4.png)
                
                Select the **Provider Name** (for example, **Open AI**) and enter the credentials (**API Key** or the **Access Key**). In the **API Model** section, choose either:
                
                -   **Recommended Models**: Displays a list of suggested models.
                -   **All Available Models**: Shows all models compatible with the API key you provided earlier.
                
                ![AI-Assistant-Configuration-Custom-Credentials-API-Model](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64f0a7975d28b147/67b7f3338f17e449bfca100d/AI-Assistant-Configuration-Custom-Credentials-API-Model.png)
                
                After entering the details, click **Save and Proceed** to configure the app.
                
                **Note:** You must enter all the required credentials.
                
        2.  **Advanced Configuration:** You can create custom actions to use AI within your entry fields. You can enter a **Custom Name** for your prompt. You can also select whether to apply the action on the current field or other field.
            
            Select the checkbox(s) to view the app in the entry field or when the field content is selected. If you select the **When field content is selected** checkbox, you will be able to perform actions only on the selected content in JSON RTE field.
            
            You can group similar prompts together by adding sub-actions for the main prompt.
            
            To add a sub-action, click **\+ Create Sub-action Prompt**. Enter a **Display Name** and a **Value** for your sub-action. You can also toggle **Enable search for sub-action** to have a search bar filter for your sub-actions.
            
            For example, your prompt is “Shorten this text by {{selected\_option}}”. In the sub-action prompt, you can provide a value that will customize your prompt further. Suppose, you enter 10% in the **Value** field, then, the final prompt will be "Shorten this text by 10%".
            
            **Note:** {{selected\_option}} must be added in the main prompt to add the sub-action(s).
            
            ![Advanced_Configuration_new.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd10721394552a0c/652e871add4b887a6750913c/Advanced_Configuration_new.png)
    7.  Click **Save** or **Save and Proceed** to save the configurations.
    8.  Once done, Click **Save** or **Open Stack** to start using the AI Assistant app.
    
    **Additional Resource:** You must configure and specify the field type(s) that will work for the [Field Modifier UI location](/docs/developer-hub/field-modifier-location/) to use the AI Assistant app within your stack. Please refer to the Field Modifier UI location documentation to configure the AI Assistant app for the UI location.
    
2.  ## Use AI Assistant within your Stack Entry
    
    To use the AI Assistant application within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a [content type](/docs/headless-cms/create-a-content-type/) by adding relevant details as displayed below and click the **Save and proceed** button.![Create-Content-type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt181bc33fb3f51fba/6411efb9676fb11087457129/Create-Content-type.png)
    3.  To use the AI Assistant app, create an entry for the above content type. In the left navigation panel, navigate to the [Entries](/docs/headless-cms/create-an-entry/) page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
    4.  You can see the AI Assistant app in the [Field Modifier](https://www.contentstack.com/docs/developer-hub/field-modifier-location) location. Provide some content in the configured fields of the entry and start using the app.![AI-Assistant-Icon-Title-New.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9ceb3f5df4bb9be/6411f0959ef9fe10b06e8094/AI-Assistant-Icon-Title-New.png)
        
        A pop-up appears. You can transform the content for a specific field by choosing the AI Assistant options.
        
        ![Side-Pop-up](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c55516a6c43eaa3/6411efdde5ffbf108e0bca5a/Side-Pop-up.png)
    5.  You will see the custom actions that you configured in the entry field.![Custom_Actions_in_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf11e9043941ab01a/6502c3b4ce38f40c49f4c334/Custom_Actions_in_Entry.png)
        
        **Note:** The AI Assistant options in the UI can be changed/edited by the Contentstack authorized team member or an Organization Admin/Owner. In the above screenshot, Optimize text for SEO,User Persona Tags, and Headline have been modified by an authorized admin/owner.
        
        You can transform the content as per the custom action(s) defined in the configuration. You will see an option as below:
        
        ![Custom_Field_Apply_For_RTE.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ff29fb6e86e38ea/6502c3b4f413355ba48919f5/Custom_Field_Apply_For_RTE.png)
        
        In the above example, there is a custom action to shorten the text by 50%. You will see the output as per the custom action:
        
        ![Custom_Action_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdaf6973616eb60cf/65165d5ed45f293d3900be69/Custom_Action_Output.png)
        
        If the Custom Action has any sub-action(s), then the sub-action(s) will be displayed in the form of a dropdown when you hover over the custom action.
        
        ![Sub-Action_Latest.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd69c3f4b56aad51c/652f9f82fb43473beb7a5099/Sub-Action_Latest.png)
    6.  You get options to transform the content, such as:
        
        1.  _Re-write the field content_
        2.  _Shorten this text_
        3.  _You can also provide custom commands for a field_
        
        Let’s see each one of them with an example.
        
    7.  Navigate to the _Title_ field. Click the AI Assistant app icon and then click _Rewrite the field content_ option. This re-phrases the existing content for better understanding. ![Title_Field_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0949deb347d01a0a/6530b12ada7b9478ad3f5b9f/Title_Field_New.png)
    8.  Navigate to the _Blog Name_ field. Click the AI Assistant app and click _shorten this text_. ![Shorten-this-Text](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad9ff3aaba6a6f27/6411efde8bbba310615de84e/Shorten-this-Text.png)
        
        It will shorten the length of your Blog Name content, you can choose to replace the existing content with the generated shortened text.
        
        ![Shorten_this_Text_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0d87e3f9ff11441/6530b12a17d9b48fcbfc8f55/Shorten_this_Text_New.png)
    9.  You can also enter custom commands to generate content based on the command for the entry field. You can add and use the following variables in the custom command as placeholders for dynamic content.
        
        1.  {{field\_data}}: Use this variable to store the current field content in the custom command box for manipulation. The field\_dataplaceholder will hold the value of the current field’s content.
        2.  {{current\_locale}}: Use this variable to translate the field content in different locales. The {{current\_locale}} placeholder will hold the value for the current locale in which you want to translate the field content.
        
        #### Field Data:
        
        Suppose you want to rephrase the content in the _Blog Name_ field then you can provide the following command in the custom box and click enter:Rephrase this text to: {{field\_data}} OR Summarize this text: {{field\_data}} ![Field_Data](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51f82bb58abb6a0d/643d1ffe793eef21c330b294/Field_Data.png)
        
        In our example, it will generate new content for the _Blog Name_ field as shown below:
        
        ![Rephrase-this-text-field_data.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2fe67b745e0a0487/6530b12a53da3f593b5a81bb/Rephrase-this-text-field_data.png)
        
        **Note:** If you do not add the {{field\_data}} variable in the custom command, the field content is automatically added at the end of the custom command.
        
        #### Current Locale:
        
        Suppose you want to rephrase the content in the _Blog Name_ field then you can provide the following command in the custom box.Translate this text to {{current locale}}: {{field\_data}}![Current-Locale](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc19967945236e4b5/643d1ffda39e8e5aa0f453b3/Current-Locale.png)
        
        In our example, our locale is English and we are translating it to French locale. This will generate the content in the specified locale for the _Blog Name_ field as shown below:
        
        ![Translate_to_current_locale.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedc1a89997a4b69f/65165d5f4d72e9d45984cf46/Translate_to_current_locale.png)
    10.  A pop-up screen appears. Click **Accept** to accept the current content changes and overwrite the existing content with the newly generated content. To rephrase the content, click **Try Again**. To undo the change(s) and keep the existing content, click **Cancel**.![Accept_try_changes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt058923b46d1db816/6530b12a74aa53244b326ab3/Accept_try_changes.png)
         
         **Note:** Accepting the current content changes by clicking the Done button will clear all the existing formatting applied to the content.
         
    11.  You can also generate content for one field based on the content of another field. The AI Assistant app lets you generate the following content based on another entry field:
         
         -   Outline
         -   Summary
         -   SEO Tags
         -   Blog Posts
         -   Headline
         -   User Persona Tags
         
         Let’s see each of them with some examples as shown below:
         
         ### Outline
         
         To generate an outline for the _Blog Summary_ field based on the _Title_ of the entry, navigate to the _Blog Summary_ field and follow the steps:
         
         -   Click **Outline**.
         -   Click the **Title** field.
         
         The outline for the _Blog Summary_ field is generated based on the entry title, as shown below:![Blog_Summary_Outline.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bf8b281c2641424/65165d5e05fa0661cef4d981/Blog_Summary_Outline.png)
         
         ### Summary
         
         Now, to generate a Summary for the _Blog Summary_ field based on the _Blog Name_, then navigate to the _Blog Summary_ field and follow the steps:
         
         -   Click **Summary**.
         -   Click **Blog Name**.
         
         You will see a summary is generated for the _Blog Summary_ field as shown below:![Blog_Summary_Summary.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbbb3332895b15556/65165d5eec958d1855ea56a3/Blog_Summary_Summary.png)
         
         ### SEO Tags
         
         To generate SEO Tags for the _Tags_ field based on the _Blog Name_, navigate to the _Tags_ field and follow the steps:
         
         -   Click **SEO Tags**.
         -   Click **Blog Name**.
         
         You will see SEO tags generated for the _Tags_ field as shown below:![SEO_Tags.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc488423af3179cf6/65165d5fbc1384019b7d55fe/SEO_Tags.png)
         
         ### Blog Posts
         
         Now, to generate a Blog Post for the _Blog Content_ field based on the _Blog Summary_ field, navigate to the _Blog Content_ field and follow the steps:
         
         -   Click **Blog Posts**.
         -   Click **Blog Summary**.
         
         You will see a descriptive blog post is generated for the _Blog Content_ field as shown below:![Blog_Content.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb192f2bb7a018c0/65165d5e05fa062f0df4d97f/Blog_Content.png)
         
         ### Headline
         
         To generate a headline for the _Blog Name_ field based on the _Blog Summary_ of the entry, navigate to the _Blog Name_ field and follow the steps:
         
         -   Click **Headline**.
         -   Click the **Blog Summary** field.
         
         The headline for the _Blog Name_ field is generated based on the _Blog Summary_ field, as shown below:![Headline_Latest.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc8043e639344a3d/652f9f758fc81320506c31cd/Headline_Latest.png)
         
         ### User Persona Tags
         
         To generate a user persona tag for the _Blog Content_ field based on the _Blog Summary_ of the entry, navigate to the _Blog Content_ field and follow the steps:
         
         -   Click **User Persona Tags**.
         -   Click the **Blog Summary** field.
         
         The user persona tags for the _Blog Content_ field is generated based on the _Blog Summary_ field, as shown below:![User_persona_Latest.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt763adeac864568d3/652f9f6d8d3ed46c8c552c79/User_persona_Latest.png)
         
         ### Steps to use AI Assistant within the JSON Rich Text Editor field
         
         1.  In the Content Type Builder page, add [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) in your content type by clicking the **Insert a field** link represented by a + sign.![JSON_RTE_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76f93077a932128d/6502c3c0ec93372dd9ec78f8/JSON_RTE_Field.png)
         2.  To add the AI Assistant plugin in JSON RTE, click the **Properties** icon of JSON RTE, and under **Select JSON RTE Plugin(s)**, choose the **AI Assistant** app, and then click the **Add Plugin(s)** button.![Add_Plugins.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d0aad4e534cb2e0/6530ddfbcf22e3dabcfdb52e/Add_Plugins.png)
         3.  After adding the plugin, click **Save** or **Save and Close** to save your changes.![Save_and_close.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2491f042e74c9ba2/6502c3c068d8e163036048d5/Save_and_close.png)
         4.  To use the AI Assistant app as a JSON RTE plugin, create an entry for this content type, and you can see the AI Assistant app icon in the JSON RTE field on your entry page as shown below. You can select the entire JSON RTE field content or a specific content to use AI.![AI_Assistant_json_rte.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta96a588878430a45/6502c8c29aba465f889a4aee/AI_Assistant_json_rte.png)
