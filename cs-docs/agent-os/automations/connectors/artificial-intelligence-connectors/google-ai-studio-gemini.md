---
title: "Google AI Studio (Gemini)"
description: "Use the Google AI Studio (Gemini) connector to generate responses for text and images using the Google AI Studio (Gemini) AI models."
url: /agent-os/google-ai-studio-gemini
uid: blt2043cad33f415a84
---

# Google AI Studio (Gemini)

## Google AI Studio (Gemini)

The **Google AI Studio (Gemini)** connector enables you to generate content through chat responses using the Google AI Studio (Gemini) model. You can also translate the entry data using the Translate an Entry action.

With the **Generate Image via Nano Banana** action, you can generate multiple images based on the prompt.

The Google AI Studio (Gemini) connector currently contains three actions: **Chat**, **Generate Image via Nano Banana**, and **Translate an Entry**.

## Prerequisites

To use the Google AI Studio (Gemini) connector, you first need to connect your [Google AI Studio](https://ai.google.dev/aistudio) using the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.
3.  Click **\+ New Project** or create a new one.
4.  In the top navigation panel, click **Automations**.
5.  Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
6.  Within the **Choose Connector**, click the **Google AI Studio (Gemini)** connector.//ss
7.  Under **Choose an Action**, select the **Chat** action.//ss
8.  In the **Configure Action** section, click **\+ Add New Account** to add your Google AI Studio account.//ss
9.  In the **Authorize** modal, provide details such as **Title**, and **API Key** from the Google AI Studio.

    To generate an API key in Google AI Studio, follow the steps below:

    1.  Go to the [Google AI Studio](https://ai.google.dev/aistudio).
    2.  Click the **Get API key** option in the top navigation and then click the **+ Create API key** button.
    3.  From the **Search Google Cloud projects** drop-down, select an existing Google Cloud project.
    4.  Once done, click **Create API key in existing project** button.![Create_API_Key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0434bd761987f5ae/67e11383efd8a912214c0dd7/Create_API_Key.png)
    5.  In the **API key generated** popup, click **Copy** to to copy the key.
10.  Click the **Authorize** button.//ss

This sets up your Google AI Studio account for the Google AI Studio (Gemini) connector.

## Set up the Google AI Studio (Gemini) Connector

Perform the following steps to set up the Google AI Studio (Gemini) connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Google AI Studio (Gemini)** connector.//ss
4.  Under **Choose an Action**, you will see the **Chat** action. //ss

### Chat

The Chat action returns the chat response(s) from the Gemini model. To use the Chat action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Chat** action.
2.  On the **Chat Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Gemini account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the **Model** from the dropdown list to generate content for the chat responses.

        **Note:** Different models are available to different users, based on the account the user holds such as paid accounts. You must check your account access before selecting the model.

    3.  Click the **\+ Add System Instruction Text** button to provide specific guidance or directives to the model to help it understand the context and generate an appropriate response based on the provided prompt text.![Select_Model_Instruction_Text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5d04ff1fa5c23c1/67e4e8a6f483927e901580a4/Select_Model_Instruction_Text.png)
    4.  Select a **User Prompt** (text or image) to generate response(s).

        Click **+ Add User Prompt** to enter multiple prompts.

        When **Text** prompt is selected:

        1.  From the **Select Message Type** drop-down, select the **Text** type.
        2.  In the **Input Text** field, enter the input text to generate a response. ![Messgae_Type_Text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ebb0762749761f0/67e11231bbf93e13605879c5/Messgae_Type_Text.png)

        When **Image** is selected:

        1.  From the **Select Message Type** drop-down, select the Image type.
        2.  In the **Image URL** field, enter the URL of the image.
        3.  Select the **MIME** **Type** for the image. ![Message_Type_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd0d5f8656e178be6/67e112312d0b988b56fd1155/Message_Type_Image.png)
    5.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Select the **Response Type** as either Text, **JSON** or **Structured Output**. For the **Response Type** as **JSON** or **Structured Output**, the output is produced in a valid JSON format.

            When selecting **Structured Output** as the Response **Type**, you must provide a valid JSON-formatted structured schema to ensure a properly formatted response.

            **Note**:

            -   To use [Structured Outputs](https://ai.google.dev/gemini-api/docs/structured-output), all fields or function parameters **must** be marked as required.
            -   A schema can include up to **100 object properties** in total, with a maximum of **5** levels of nesting.
            -   Structured Output generates only the specified keys and values. To enable this, you must set additionalProperties: false.

            **Additional Resource:** See the [JSON Schema](https://json-schema.org/) documentation for more details.

        2.  Enter the **Number of Tokens** to generate the content.
        3.  Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of **0 to 2**.
        4.  Enter the **Top-P** value to define how the model selects tokens for output. For instance, if tokens A, B, and C have probabilities of 0.3, 0.2, and 0.1; then entering a Top-P value as 0.5, the model chooses either A or B as the next token using temperature and excludes C. This must be within the range of **0 to 1**.
        5.  Enter the **Top-K** value to define how the model selects tokens for output. Entering a Top-K value of 1 implies that the next chosen token is the most likely among all tokens in the model's vocabulary. Top-K value of 3 means that the next token is selected from the three most probable tokens using temperature. This must be within the range of **1 to 40**.
        6.  Enter the **Count of Response** to fetch the desired number of responses for the user prompt. If you enter **5**, then **5 responses** will be displayed in the output.
        7.  You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37d8ff7f2b452b35/67e112310c6f55535a1fda95/Show_Optional_Fields.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53551746c09b308b/67e11231c566eed0c95e0c70/Save_Exit.png)

### Generate Image via Nano Banana

The Generate Image via Nano Banana action returns the image URL from the Nana Banana model. To use the Generate Image via Nano Banana action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Generate Image via Nano Banana** action.
2.  On the **Generate Image via Nano Banana Configure Action** page, enter the details given below:
    1.  Click **+ Add New Account** button to connect your Google AI Studio (Gemini) account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the **Model** from the dropdown list to generate content for the chat responses.

        **Note:** Different models are available to different users, based on the account the user holds such as paid accounts. You must check your account access before selecting the model.

    3.  Click the **\+ Add System Instruction Text** button to provide specific guidance or directives to the model to help it understand the context and generate an appropriate response based on the provided prompt text.![Select_Model_Instruction_Text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5d04ff1fa5c23c1/67e4e8a6f483927e901580a4/Select_Model_Instruction_Text.png)
    4.  Select a **User Prompt** (text or image) to generate response(s).

        Click **+ Add User Prompt** to enter multiple prompts.

        When **Text** prompt is selected:

        1.  From the **Select Message Type** drop-down, select the **Text** type.
        2.  In the **Input Text** field, enter the input text to generate the image URL //ss

        When **Image** is selected:

        1.  From the **Select Message Type** drop-down, select the Image type.
        2.  In the **Image URL** field, enter the URL of the image.
        3.  Select the **MIME** **Type** for the image.//ss
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53551746c09b308b/67e11231c566eed0c95e0c70/Save_Exit.png)

### **Translate an Entry**

The Translate an Entry action returns the translated entry data in the response. To use this action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Translate an Entry** action.
2.  On the **Translate an Entry Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Gemini account as shown in the [Prerequisites](#prerequisites) step.
    2.  Select the **Model** from the dropdown list for response predictions.
    3.  In the **Entry** **Data** field, enter the entry data to translate.
    4.  In the **Content** **Type** **Schema** field, enter the content type schema for translating the entry data.

        You can fetch the **Entry** **Data** and **Content** **Type** **Schema** from the previous step using the [Get a Single Content Type](/docs/agent-os/contentstack-management-content-types-actions#get-a-single-content-type) and [Get a Single Entry](/docs/agent-os/contentstack-management-entries-actions#get-a-single-entry) actions.

        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb716f6d5e1aaaa4c/681858e78850e6674d277e01/Select_Fields.png)
    5.  In the **Select** **Language** drop-down, select the language in which you want to translate the entry data.
    6.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Provide the **Prompt** **Text** to generate the response. This offers additional capabilities to customize the translated entry data.
        2.  Enter the **Number** **of** **Tokens** to generate the content. By default, the token limit is **2000**. ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec4add34d2922f74/681858e7ae96e74921d389ad/Show_Optional_Fields.png)
    7.  Click **Proceed**.
    8.  Check if the details are correct. If yes, then click **Test Action**.
    9.  You will get the response(s). Once set, click **Save and Exit**.  
        ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb381f5251eadf86/681858e779652b727a649223/Save_Exit.png)

This completes the **Google AI Studio (Gemini)** connector’s setup.
