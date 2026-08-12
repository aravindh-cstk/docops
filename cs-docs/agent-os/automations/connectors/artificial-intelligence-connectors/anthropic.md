---
title: "Anthropic"
description: "The Anthropic connector lets you generate responses for text and images using the Anthropic Claude AI models.
"
url: /agent-os/anthropic
---

# Anthropic

## Anthropic

[Anthropic](https://www.anthropic.com/) is an AI research company focused on **AI safety**, **reliability**, and **alignment**. Claude is a family of AI Assistants developed by Anthropic, designed for advanced reasoning, safe AI interactions, and intelligent automation, offering capabilities beyond standard chatbot models like ChatGPT.

The Anthropic connector allows you to generate chat responses using Claude models for text and images. The connector currently contains one action: **Chat**.

## Prerequisites

To use the Anthropic connector, you first need to connect your Anthropic Console using the following steps:

1.  [Log in to your Contentstack account](https://www.contentstack.com/login) and click **Automations** in the top navigation panel.
2.  Select your project and then the automation.
3.  Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
4.  Within the **Choose Connector**, click the **Anthropic** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e9abb8373f27ae1/67e4ea24b32319bd90991e9b/Select_Connector.png)
5.  Under **Choose an Action**, select the **Chat** action.![Select_Chat_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e07500b98add947/67e11fb1a714581266b9c171/Select_Chat_Action.png)
6.  In the **Configure Action** section, click **\+ Add New Account** to add your Anthropic Console account.![Add_New_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82030860decf0dd7/67e11fb1c5b83e6333925779/Add_New_Account.png)
7.  In the **Authorize** modal, provide details such as **Title**, and **API Key** retrieved from the Anthropic Console.
    
    To generate an API key in Anthropic Console, follow the steps below:
    
    1.  Go to the [Anthropic Console](https://console.anthropic.com/login) and log in to your account. Once done, the Dashboard appears.
    2.  In the left navigation, click the **API keys** and then click the **\+ Create Key** button.
        
        ![API_Key_Creation.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2264b07f32c20c2d/67e50d0db9f9a66c51dc63c3/API_Key_Creation.png)
    3.  In the pop-up that appears, select your preferred **Workspace**, enter the name of your API key and then click **Add**.
        
        ![Add_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0676266752ed4cf7/67e50d0d848c63da01cff925/Add_Button.png)
    4.  From the **Save your API key** modal, click **Copy Key** to copy the API key to your clipboard. Enter this API key in the Authorize modal.![Copy_Key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7fcda15e9a1213f3/67e11fb1986725ee4f88968e/Copy_Key.png)
8.  Click the **Authorize** button.![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e35f3ca0a99782c/67e11fb1c9b8d48585d14e4c/Authorize_Button.png)

This sets up your Anthropic Console account for the Anthropic connector.

## Set up the Anthropic Connector

Perform the following steps to set up the Anthropic connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Anthropic** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e9abb8373f27ae1/67e4ea24b32319bd90991e9b/Select_Connector.png)
4.  Under **Choose an Action**, you will see the **Chat** action.![Select_Chat_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e07500b98add947/67e11fb1a714581266b9c171/Select_Chat_Action.png)

### Chat

The Chat action returns the chat response(s) from the Anthropic Claude models. To use the Chat action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Chat** action.
2.  On the **Chat Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Anthropic account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the **Model** from the dropdown list to generate content for the chat responses. For this guide, we are selecting the **Claude 3.7 Sonnet** model.
        
        **Note:** Different models are available to different users, based on the account the user holds such as paid accounts. You must check your account access before selecting the model.
        
    3.  Enter the **System Instruction Text** to provide specific guidance or directives to the model to help it understand the context and generate an appropriate response based on the provided prompt text. ![Select_Model_System_Text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e8ce7c397bfc4a3/67e11fb1443bd66db4f1d733/Select_Model_System_Text.png)
    4.  Provide the **Prompt Text** to generate response(s). Click **+ Add Prompt Text** to enter multiple prompts.
        
        **Note:** For the Role as **assistant**, you will see the Prompt Value to enter the text to generate response. If you select the **Role** as **user**, you can select the type of prompt content, i.e. **Text** or **Image**.
        
        If you select the **user** Role, follow the below steps:
        
        1.  Under the **Prompt Input** section, click **\+ Add Prompt Input** button.
        2.  In the **Select Prompt Type** drop-down, select the type of content for which you want to generate the response, i.e. **Text** or **Image**.![User_Prompt_Text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e5b08e51b0b3e15/67e11fb9a71458027cb9c175/User_Prompt_Text.png)
        3.  Enter the **Prompt Value**. You can enter a text prompt or a valid image URL to generate a response.![User_Prompt_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt414a80d7b97a6a65/67e11fb94a89c35a76a30ffb/User_Prompt_Image.png)
        
        If you select the **assistant** Role, follow the below steps:
        
        1.  Enter the **Prompt Value**. You can enter a text prompt or a valid image URL to generate a response. ![User_Prompt_Assistant.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb4b87a5ed343d1c3/67e11fb2986725e0f4889692/User_Prompt_Assistant.png)
    5.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter the **Number of** **Tokens** to generate the content.
        2.  Mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.
        3.  Mark the **Reasoning** checkbox to enable reasoning to allow Claude to dedicate computational resources to structured problem-solving, enhancing the depth and accuracy of its responses. The reasoning process is provided alongside the final answer, offering insight into how conclusions are reached.
            
            If enabled, enter the number of **Reasoning Tokens** to be used. Ensure that the **Number of Tokens** allocated is **greater than** the **Reasoning Tokens** value.
            
            **Note:** If you select the **Reasoning** checkbox, **Randomness of Responses**, **Top-K**, and **Top-P** fields will not be displayed.
            
            ![Show_Optional_Fields_one.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8fe74aa893393db9/67e11fb1efd8a9e5754c0e59/Show_Optional_Fields_one.png)
        4.  Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 1 being the most random content predictions. This must be within the range of **0 to 1**.
        5.  Enter the **Top-P** value to define how the model selects tokens for output. For instance, if tokens A, B, and C have probabilities of 0.3, 0.2, and 0.1; then entering a Top-P value as 0.5, the model chooses either A or B as the next token using temperature and excludes C. This must be within the range of **0 to 1**.
        6.  Enter the **Top-K** value to define how the model selects tokens for output. Entering a Top-K value of 1 implies that the next chosen token is the most likely among all tokens in the model's vocabulary. Top-K value of 3 means that the next token is selected from the three most probable tokens using temperature. This must be within the range of **1 to 40**.  
            ![Show_Optional_Fields_Two.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfed37ab5310c0542/67e11fb10c6f55563c1fdb0f/Show_Optional_Fields_Two.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

This completes the **Anthropic** connector’s setup.
