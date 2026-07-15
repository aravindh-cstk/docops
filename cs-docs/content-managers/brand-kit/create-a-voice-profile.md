---
title: "[Brand Kit] - Create a Voice Profile"
description: Create and configure a Voice Profile in Brand Kit to define unique AI-generated brand voices and test them in the Playground.
url: https://www.contentstack.com/docs/brand-kit/create-a-voice-profile
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - administrators
  - owners
version: current
last_updated: 2026-03-25
---

# [Brand Kit] - Create a Voice Profile

This page explains how to create a Voice Profile in Contentstack Brand Kit, including required prerequisites, configuration parameters, and how to use the Playground to test prompts. It is intended for Contentstack users with Owner/Admin access and Brand Kit collaborator access who need to define and apply AI-generated brand voices.

## Create a Voice Profile

Voice Profiles allows you to define unique AI-generated brand voices that you can apply to your content.

**Note**: Each organization can create a maximum of **100 Voice Profiles** within each Brand Kit.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Organization that has Brand Kit enabled
- Access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin)
- Access to Brand Kit as an invited [Collaborator](./invite-collaborators.md)

## Steps for Execution

To create a Voice Profile in Brand Kit, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- In the left navigation panel, click the **Brand Kit** icon.![1-Brand-Kit-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2793aa12bafb2903/6656329d02c997c334b84fcb/1-Brand-Kit-Icon.png)
- Select the **Brand Kit** in which you want to create a Voice Profile.![2-Select-Brand-Kit-For-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb43ce190ec9f497/665652cd2da50d0727473afd/2-Select-Brand-Kit-For-Voice-Profile.png)
- You will be navigated to the **Voice Profile** landing page. If there are any Voice Profiles already created, they will appear here. To create a new one, click the **+ New Voice Profile** button and select **Add Manually**.  
![3-Click-+-New-Voice Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b98f792d543302e/687fb4f5febffa33c9528bf3/3-Click-_-New-Voice_Profile.png)  **Additional Resource**: To import the Voice Profile, refer to the [Import a Voice Profile](./import-a-voice-profile.md) document

### Create a Voice Profile

On the **Create Voice Profile** page, enter the following details:

- **Voice Profile Name** (required): Enter a suitable name for your Voice Profile.
- **Description** (optional): Enter an appropriate Voice Profile description.![4-Create-Voice-Profile-Name-And-Description](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc7e8d1bdf2c12676/665652f61f92d13c162804df/4-Create-Voice-Profile-Name-And-Description.png)
- **Communication Style Mixer**: The Communication Style Mixer is a critical element of your brand identity, defining how your organization interacts with customers. In this section, you can set the following parameters:![5-Create-Voice-Profile-Communication-Style-Mixer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt623be74270db84ed/665652fc20b6e04e62facf15/5-Create-Voice-Profile-Communication-Style-Mixer.png)
  - **Formality Level**: You can set the formality level from **None**, **Casual**, **Business**, to **Professional**. Let’s discuss in detail:
    - **None**: Generic content without any specifications
    - **Casual**: Uses an informal but engaging tone that makes content more compelling.**Example**: "It’s true, nobody really enjoys grocery shopping. Here's five ways to make it less painful."
    - **Business**: Employs clear and concise language that maintains a tone suitable for business settings, you can set this parameter accordingly.**Example**: "Please note that customer support is available 24/7 via our online customer portal."
    - **Professional**: Uses polished language often found in legal documents or important announcements.**Example**: "We are pleased to announce the official launch of our new product line."
  - **Tone Of Voice**: You can set the tone of voice from **None**, **Informative**, **Assertive**, to **Persuasive**. Let’s discuss in detail:
    - **None**: Generic content without any specifications.
    - **Informative**: Delivers facts in a neutral way, without opinions or personal slants.**Example**: "The report shows a 15% increase in sales."
    - **Assertive**: Presents arguments and ideas with confidence, making clear recommendations.**Example**: "This method is the most effective based on our research."
    - **Persuasive**: Uses strong arguments and emotional appeals to influence action or belief.**Example**: "Upgrade now and unlock exclusive features to transform your experience!"
  - **Humor Level**: You can set the humor level from **None**, **Serious**, **Subtle**, to **Lighthearted**. Let’s discuss in detail:
    - **None**: Generic content without any specifications.
    - **Serious**: Maintains a strictly professional tone, avoiding humor altogether.**Example**: "Lack of data security can have serious consequences."
    - **Subtle**: Uses light touches of humor or wit to keep the audience engaged without compromising professionalism.**Example**: "Here are ten tips for writing email subject lines that won’t end up in the dreaded spam folder."
    - **Lighthearted**: Incorporates relevant humor to connect with the audience and create a more playful atmosphere.**Example**: "Sometimes my biggest accomplishment of the day is simply remembering to mute myself during a virtual meeting."
  - **Language Complexity Level**: You can set the language complexity level from **None**, **Plain**, **Straightforward**, to **Technical**. Let’s discuss in detail:
    - **None**: Generic content without any specifications.
    - **Plain**: Uses everyday words that are clear and understandable to a broad audience.**Example**: "Turn on the device and follow the on-screen instructions."
    - **Straightforward**: Employs clear communication, potentially including industry-specific terms relevant to the target audience.**Example**: "The ROI of this investment is significant."
    - **Technical**: Leverages advanced concepts and specialized vocabulary for audiences with prior knowledge.**Example**: "The software leverages machine learning algorithms for optimization."
- **Custom Details**: Custom Details includes two entities: **Insights** and **Sample Content**:![6-Create-Voice-Profile-Custom-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta43340d766df8275/66565303cac129fb3a4b07a8/6-Create-Voice-Profile-Custom-Details.png)
  - **Insights**: Insights are the additional information that you can provide to the AI model.**Example**: Monitor industry trends, experiment with new content formats and strategies, incorporate ethical AI practices.
  - **Sample Content**: You can provide sample content to your Voice Profile to generate similar content in action.**Example**: Navigating the AI Landscape: Essential Insights for Aspiring Bloggers. Explore the fundamentals of AI, uncover your niche, leverage AI tools, engage with the community, and address ethical considerations to succeed as an AI blogger.

### Playground in Voice Profile

Playground lets you experiment with prompts to test and refine your Voice Profiles. Inside this section, you can perform the following operations:

- **Enable Knowledge Vault**: Enable this button to generate content through the Knowledge Vault.
- **Enter Prompt**: Enter your topic or content idea into the **Provide Prompt** field.
- **Generate Response**: Click the **Generate Response in Playground** button to generate the content.  
  ![7-Playground](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7afe86d11c7bb0fc/66d8ac181be6e16206246a6b/7-Playground.png)The content generation initiated in the right side **Playground** panel.![8-Playground-Panel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdaf864ab5f0a401c/66d8ac1896357f332bfd31d1/8-Playground-Panel.png)
- **Stop Content Generation** (optional): Click **Stop Generating Response** option to halt the process.![9-Playground-Stop-Generating-Response](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt624902504d954ff3/66d8ac18661b345fc0b36cf5/9-Playground-Stop-Generating-Response.png)
- **View/Hide Response**: Use the highlighted icon, to toggle the response display.![10-Playground-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc781513ca1ced287/66d8ac1926adee0692f69c32/10-Playground-Icon.png)
- **Regenerate or Copy Generated Content**: After the content is generated, you can see two options:![11-Playground-Regenerate-And-Copy](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c7020adfb1e48e5/66d8ac19d742976ae6623069/11-Playground-Regenerate-And-Copy.png)
  - **Regenerate**: This option allows you to regenerate the content.
  - **Copy**: Copy the content to clipboard and use it further if required.
- **Clear Prompt**: Click **Clear Prompt** to start a new prompt.![12-Playground-Clear-Prompt](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt087a8f2c8b2e27cc/66d8ac1964f9c8d690a73803/12-Playground-Clear-Prompt.png)

**Warning**: The generated content will not be saved in the history and will be cleared once you click the **Save** button.

- Once you have added these details to your Voice Profile, click **Save**.  
  ![13-Save-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54d8c06e9046551b/66d8ac19a2a54f1297fd9493/13-Save-Voice-Profile.png)You will get a success message after the Voice Profile is created. You can view its details by clicking the **Information** icon on the right-side navigation panel.![14-View-Voice-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt115768431b0cad08/66d8ac19250400fb8bf529bb/14-View-Voice-Profile.png)

**Additional Resource**: To generate content specifically in the entry’s [fields](../../developers/create-content-types/about-fields.md), refer to the [AI Assistant with Brand Kit](../../developers/marketplace-apps/ai-assistant-with-brand-kit.md) documentation.

## Common questions

**How many Voice Profiles can an organization create within each Brand Kit?**  
Each organization can create a maximum of **100 Voice Profiles** within each Brand Kit.

**What access is required to create a Voice Profile?**  
Access to Organization that has Brand Kit enabled, access to the Contentstack Organization/Stack as the [Owner](../../developers/organization/organization-roles.md#organization-owner)/[Admin](../../developers/organization/organization-roles.md#organization-admin), and access to Brand Kit as an invited [Collaborator](./invite-collaborators.md).

**Can I import a Voice Profile instead of adding it manually?**  
Yes. **Additional Resource**: To import the Voice Profile, refer to the [Import a Voice Profile](./import-a-voice-profile.md) document

**Is Playground-generated content saved automatically?**  
No. **Warning**: The generated content will not be saved in the history and will be cleared once you click the **Save** button.