---
title: "Get Started with Brand Kit"
description: "Get up and run with Brand Kit and generate brand-specific content through its integration with the AI Assistant app."
url: /brand-kit/get-started-with-brand-kit
---

# Get Started with Brand Kit

## Get Started with Brand Kit

This step-by-step guide explains how to create a Brand Kit and Voice Profile in Contentstack, and how to utilize them within the AI Assistant app. You will learn the following:

1.  **Create a Brand Kit**: Create a centralized repository for your organization's identity.
2.  **Define a Voice Profile**: This Voice Profile can be applied to your content to ensure a consistent brand voice across your digital experiences.
3.  **Integrate the Brand Kit and Voice Profile into the AI Assistant app**: The AI-powered natural language processing platform can transform your content with accuracy and efficiency.

By the end of this guide, you will have the knowledge and skills to leverage Contentstack's powerful branding tool to elevate your digital presence and deliver a cohesive, on-brand experience to your audience.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Brand Kit-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to create a Brand Kit as a centralized repository for your organization's identity.
    
-   How to define a Voice Profile and apply it to keep a consistent brand voice across your digital experiences.
    
-   How to integrate the Brand Kit and Voice Profile into the AI Assistant app to generate content.
    

## Steps for Execution

1.  [Create a Brand Kit](#create-brand-kit)
2.  [Create a Voice Profile](#create-voice-profile)
3.  [Install the AI Assistant app from the Contentstack Marketplace](#install-the-ai-assistant-app-from-the-contentstack-marketplace)
4.  [Use the Brand Kit in the AI Assistant app](#use-brand-kit-in-the-ai-assistant-app)

1.  ## Create a Brand Kit
    
    As a first step, you need to create a Brand Kit. To do so, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:
    
    1.  Navigate to App Switcher in the top-right corner and select **Brand Kit**.
    2.  Click the **\+ New Brand Kit** button to create a new Brand Kit.
    3.  In the **Create Brand Kit** modal, enter the **Brand Kit Name** and **Description** (optional). Then, **Select Stack(s)** from the dropdown and click **Create Brand Kit**.
        
        **Note:** When creating a Brand Kit, selecting one or multiple stacks will synchronize the associated stack content and its environment settings.
        
        ![3-Get-Started-With-Brand Kit-Create-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5861cf03d5a27dac/665632c036a794362360b2c6/3-Get-Started-With-Brand_Kit-Create-Brand-Kit.png)
        
        This creates your Brand Kit.
        
2.  ## Create a Voice Profile
    
    Let's now create a Voice Profile for this Brand Kit by following the steps given below:
    
    1.  Select the **Brand Kit** in which you want to create a Voice Profile.
    2.  Click the **\+ New Voice Profile** button to create a new Voice Profile.
    3.  On the **Create Voice Profile** page, enter the following details:
        1.  Enter a suitable **Voice Profile Name** and **Description**.
        2.  Set the **Communication Style Mixer** using the **Formality Level**, **Tone Of Voice**, **Humor Level**, and **Language Complexity Level** slider bars. It defines how your content generation will be styled.
        3.  Inside the **Custom Details** section, you can provide **Insights** and **Sample Content**.
            
            Inside the **Insights** section, you can provide additional information to the AI model. You can give sample content to your Voice Profile to generate similar content in action.
            
        4.  Generate content in the **Playground** based on the Voice Profile settings. Enter the prompt in the **Provide Prompt** field and click the **Generate Response in Playground** button to view the generated response in the right-side slider. You can refine the Voice Profiles by evaluating the content specifications.
    4.  After filling out the details, click **Save** to create a voice profile.![5-Get-Started-With-Brand Kit-Save-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4bcf8841ef10c5de/665632d3693345772fc24087/5-Get-Started-With-Brand_Kit-Save-Voice-Profile.png)
        
        After the Voice Profile is created, you will receive a success message. You can view its details by clicking the **Information** icon on the right-side navigation panel.
        
        ![6-Get-Started-With-Brand Kit-View-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta75866195ba433b2/665632d90d6347256179ff2b/6-Get-Started-With-Brand_Kit-View-Voice-Profile.png)
3.  ## Install the AI Assistant app from the Contentstack Marketplace
    
    AI Assistant is an app available in Contentstack Marketplace. It provides AI-powered features to streamline content creation and management processes within the Contentstack platform.
    
    It offers functionalities such as SEO metadata generation, content optimization suggestions, blog post content generation, user persona tag creation, and more.
    
    To install and configure the AI Assistant app, follow the step-by-step process defined in the [AI Assistant with Brand Kit](/docs/marketplace/ai-assistant-with-brand-kit#install-the-ai-assistant-app-in-marketplace) documentation.
    
    **Note:** To use Brand Kit efficiently, select the **Managed by Contentstack** option under **Platform Configuration** settings on the AI Assistant app **Configuration** page and then enable the **Brand Kit: On-brand Generative AI** settings.
    
    ![7-Get-Started-With-Brand Kit-AI-Assistant-App-Configuration-For-Enabling-Brand-Kit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4afb67756350c83e/664ba0d8941bc828bd9df568/7-Get-Started-With-Brand_Kit-AI-Assistant-App-Configuration-For-Enabling-Brand-Kit.png)
4.  ## Use the Brand Kit in the AI Assistant app
    
    To use Brand Kit within the AI Assistant app within an entry of your stack, follow the steps given below:
    
    1.  [Create a content type](/docs/headless-cms/create-a-content-type/) by adding relevant details as displayed below and click the **Save and proceed** button.![8-Get-Started-With-Brand Kit-AI-Assistant-App-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3915ff63007168e6/664ba17e55b397df68604747/8-Get-Started-With-Brand_Kit-AI-Assistant-App-Content-Type.png)
    2.  To use the AI Assistant app, create an entry for the above content type. In the left navigation panel, navigate to the [Entries](/docs/headless-cms/create-an-entry/) page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
    3.  You can see the AI Assistant app icon in the [Field Modifier Location](/docs/developer-hub/field-modifier-location).![9-Get-Started-With-Brand Kit-AI-Assistant-App-Field-Modifier-Location](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad1b1a2e33f7bdec/664ba17f76a5b568ce31af67/9-Get-Started-With-Brand_Kit-AI-Assistant-App-Field-Modifier-Location.png)
    4.  To generate Brand Kit specific content, provide the following details:
        
        1.  Select the **Brand Kit** from the dropdown.
        2.  Select the relevant **Voice Profile** from the dropdown.
        3.  Enable or disable the **Knowledge Vault** to fetch the desired data.
        4.  Write a prompt and press **enter** to generate content in the respective field.
        
        ![10-Get-Started-With-Brand Kit-AI-Assistant-App-Working](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82ba1046abd063f5/664ba17ee2c16b7ce29bc528/10-Get-Started-With-Brand_Kit-AI-Assistant-App-Working.png)
    5.  This starts generating your content. Click **Accept** to accept the newly generated content. To rephrase the content, click **Try Again**. To remove the content, click **Cancel**.![11-Get-Started-With-Brand Kit-AI-Assistant-App-Works](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b1dd3070c785551/664ba17f707c0661cd81fe7d/11-Get-Started-With-Brand_Kit-AI-Assistant-App-Works.png)
    6.  After adding the content, **Save** and **Publish** your entry.

**Additional Resource**:

-   For details on the Brand Kit, refer to the [Brand Kit](/docs/brand-kit/about-brand-kit), [Voice Profile](/docs/brand-kit/about-voice-profile), and [Knowledge Vault](/docs/brand-kit/about-knowledge-vault) documentation.
-   For AI Assistant app related information, refer to the [AI Assistant with Brand Kit](/docs/marketplace/ai-assistant-with-brand-kit) documentation.
-   For more queries, refer to the [Brand Kit FAQs](/docs/faqs#brand-kit-faqs) documentation.
