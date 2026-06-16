---
title: [Automations guides and connectors] - AWS Bedrock
description: Use this connector to generate content using the different Foundation model.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/aws-bedrock
product: Automations
doc_type: documentation
audience:
  - developers
version: v1
last_updated: 2024-10-24
filename: aws-bedrock.md
---

# [Automations guides and connectors] - AWS Bedrock

This page explains [Automations guides and connectors] - AWS Bedrock for Automations. It is intended for developers who need to understand or implement this topic. Use it when you are setting up, configuring, or troubleshooting this feature.

## AWS Bedrock

[AWS Bedrock](https://aws.amazon.com/bedrock/) is an AI-based service offered by Amazon Web Service to help developers leverage AI as per their specifications using Foundation Models.

With the AWS Bedrock connector, you can integrate the foundation models offered by [AI21 Labs](https://www.ai21.com/), [Anthropic](https://www.anthropic.com/), [Amazon Web Services](https://aws.amazon.com/ai/), [Meta](https://llama.meta.com/), and [Mistral](https://mistral.ai/) to generate prompt responses.

**Note:** The AWS Bedrock connector supports the models listed above from various providers. Access to each model depends on the specific plan chosen by the user.

Enterprises and businesses can deploy their ChatGPT versions on the Azure cloud and use the Azure ChatGPT connector to generate responses by integrating their Azure account within the Azure ChatGPT connector.

### Set up AWS Bedrock

Perform the following steps to set up the AWS Bedrock action connector:

1. Click **Configure Action Step** from the left navigation panel.
2. Click **Action Step** to configure third-party services.
3. Within the **Configure Action Step**, click the **AWS Bedrock** connector.   
   ![Select_the_Connector_Bedrock.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9a1f70a4c377f64/6527c9504824f5c005f27141/Select_the_Connector_Bedrock.png)
4. Under **Choose an Action** tab, select the **Prompt** action.   
   ![Select_Action_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ce7877bd9c30b24/659d218cfa27744535f68fbf/Select_Action_New.png)
5. In the **Configure Action** tab, click **+ Add New Account** to add your AWS Bedrock account.   
   ![Add_Account_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac3bba6ef7427cfa/659d218c43e8cb8b4ea4a67d/Add_Account_New.png)
6. In the **Authorize** modal, provide details such as **Title**, **Access Key**, **Secret Key**, and **Region**. You can generate the **Access** and **Secret Key** by navigating through **Security credentials** > **Access Keys** > **Create New Access Key** in your AWS account.  
   ![Access_key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt615160445db1484a/650c47aa8a15ce787cd999d1/Access_key.png)

   **Additional Resource**: For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.
7. Once done, click **Authorize**.   
   ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2142f6f3a7bdd670/6504320e9bf261a2a16bd65b/Authorize_Button.png)
8. Select the **Foundation Model** from the dropdown list to generate content for the prompt. The **Foundation Model(s)** are large Machine Learning models comprising vast amounts of data that enable them to perform multiple tasks across multiple domains.

   **Note:** Stable Diffusion model is not supported at this time.
9. Provide the **Prompt Text** to generate the prompt response(s).   
   ![AWS_Bedrock.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a1df2b01dbd570c/671a4280221dabe070c17f1d/AWS_Bedrock.png)
10. [optional] Click the **Show optional fields** toggle button to view the **Number of Tokens**, **Randomness of Responses**, and **Top P** fields.
11. Enter the **Number of Tokens** to generate the content. This must be within the range of 1 to 4096.

    **Note:** Prompt text is split into multiple tokens so the language model can process and deliver more accurate responses.
12. Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.

    **Note:** If you set the randomness to 0, you will get deterministic responses for your prompt, whereas if the randomness is 1 or more, the responses become more random. You will get a different response each time.
13. Enter the value for the **Top P (Nucleus sampling)** field. With **Top P**, you can enter the probability to predict the next set of words expected for your response. This must be within the range of 0 to 1.  
      
    If the Top P is 0.4, the foundation model will consider only the following 40 most likely words expected for the response. If the Top P is 0.9, it will find 90 most likely anticipated words expected for the response.
14. You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. By enabling this checkbox, any special characters or spaces in the chat response will be eliminated, resulting in a clean and compatible text.   
    ![Sanitize_text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec147552331a3943/656c3f2f4c0b9a3724d564b2/Sanitize_text.png)
15. Click the **Proceed** button.
16. To execute and test the configured action, click the **Test Action** button.   
    ![Test_Action_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e19610d2b2800fd/659d225992c0763bb8b3698c/Test_Action_New.png)
17. On successful configuration, you can see the below output. Click the **Save and Exit** button.  
    ![Save_Exit_New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt18c6ba566bb0ea27/659d225943e8cb5505a4a685/Save_Exit_New.png)

This sets the **AWS Bedrock** action connector.

## Common questions
### What is covered in [Automations guides and connectors] - AWS Bedrock?
This page covers the topic described in the title and provides the steps, options, and examples needed to use it.
### Who should read [Automations guides and connectors] - AWS Bedrock?
Anyone responsible for configuring, implementing, or maintaining this capability should use this page as a reference.
### When should I use this page?
Use it when you are setting up this feature, troubleshooting issues, or validating expected behavior.
