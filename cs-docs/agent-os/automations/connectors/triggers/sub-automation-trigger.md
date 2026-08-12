---
title: "Sub Automation Trigger"
description: "Use the Sub Automation trigger to invoke a sub automation action."
url: /agent-os/sub-automation-trigger
---

# Sub Automation Trigger

## Sub Automation Trigger

The Sub Automation trigger lets you invoke sub automation. You can define the schema of the sub automation using the **Key** and **Type** field.

**Note:** A sub automation involves creating smaller, specialized automation tasks as part of a larger automation process. These sub automations help break down complex tasks into more manageable steps, making it easier to design, implement, and maintain the overall automation process.

## Set up the Sub Automation Trigger

Perform the following steps to configure the Sub Automation trigger:

1.  Click **Configure Trigger** from the left navigation panel.
2.  Within the **Configure Trigger** step, click the **Sub Automation** connector.  
    ![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13fd54c870fe5fdd/65c30a24d4db55bd256ee56e/Select_Trigger.png)
3.  Under **Choose Trigger** tab, select the **Sub Automation Trigger**.  
    ![Select_Trigger_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3344ae1d1f7a749e/65c30a244cd370459470d27a/Select_Trigger_Action.png)
4.  Enter the **Description** of the trigger.
    
    **Note:** The description in the schema can be helpful while using the [ChatGPT](/docs/agent-os/chatgpt#action-4-select-the-function-calling-action) Function Calling action to briefly describe the schema defined in the sub automation trigger.
    
5.  Under the **Schema** field, enter the value in the **Key** field and select the **Type** from the dropdown. Click **\+ Add Schema** button to add multiple values.  
    Additionally, you can also mark the **Required** checkbox to make it mandatory.  
    ![Select_Different_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf573e0d0e6150ff0/665ed45945172598cf7a5cc2/Select_Different_Fields.png)
6.  Click the **Proceed** button.
7.  Click the **Test Trigger** button to test the configured trigger.  
    ![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt795691d1acbca80c/65c30a24d4db550ce16ee572/Test_Trigger.png)
8.  Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt835a4e1d9ae3f87e/665ed4a802ed7f9672e82ff3/Save_Exit.png)

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert Changes** button.

This sets the **Sub Automation** trigger connector.

Let’s see an example to convert a given string in German language using the Sub Automation trigger.

Follow the steps below to configure the sub automation trigger:

1.  Within the **Configure Trigger** step, click the **Sub Automation Trigger**.
2.  Under the **Choose Trigger** section, select **Sub Automation** trigger.
3.  Enter the **Description** of the sub automation. For example, _Convert a given text in German Language_.
4.  In the **Key** field, enter the string you want to convert. For example, _Top 10 ways to improve communication skills?_ In the **Type** field, select String from the dropdown and mark the **Required** checkbox.  
    ![Select_Different_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf573e0d0e6150ff0/665ed45945172598cf7a5cc2/Select_Different_Fields.png)
5.  Click the **Proceed** button.
6.  Click the **Test Trigger** button to test the configured trigger.  
    ![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt795691d1acbca80c/65c30a24d4db550ce16ee572/Test_Trigger.png)
7.  Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt835a4e1d9ae3f87e/665ed4a802ed7f9672e82ff3/Save_Exit.png)

Let’s configure the [ChatGPT](/docs/agent-os/chatgpt) connector to view the converted text.

1.  Within the **Configure Action Step**, click the **ChatGPT** connector.
2.  Under **Choose an Action** tab, select the **Chat** action.
3.  Click the **\+ Add New Account** button to add your ChatGPT account.
    
    **Additional Resource:** Refer to the [ChatGPT](/docs/agent-os/chatgpt) connector documentation for adding the account.
    
4.  Select the **API Model** from the dropdown list to generate content for the chat responses.
    
    **Note:** Different models are available to different users based on the account the user holds such as paid accounts. You must check the account access before selecting the model.
    
5.  Provide the **Prompt Text** to generate the chat response(s). You must select the output from the sub automation trigger. For example, convert the given string into German.
6.  Select the **Role** from the dropdown options to send to the API model request. By default, the role is set to the user.
    
    **Additional Resource:** There are three different types of roles provided by the OpenAI platform. The **system** role sets the response context, the **assistant** role provides the response content, and the **user** role asks the prompt.
    
    ![Select_Chat_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ae08961ddd426b8/665edca6653cb9b3e6a7f1ce/Select_Chat_Fields.png)
7.  Click **Proceed**.
8.  Click **Test Action** to test the configured action.
9.  Click the **Save and Exit** button. You will see the input string converted into German language.  
    
    ![Save_Exit_Chat.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cbd12d4c686ba3a/665edcfb585b447949987840/Save_Exit_Chat.png)

Now let’s configure a **Response** connector to send the output.

1.  Within the **Configure Action Step**, click the **Response** connector.
2.  Under **Choose an Action** tab, select the **Response** action.
3.  Based on the results of your configured action, enter the **Response** Status.
4.  In the **Response Body** field, you can add the data that you want to send as the response. As per our example, select the message content from the ChatGPT action.  
    ![Response_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56fab5efc6e792a1/65c30a2408722221cd49629a/Response_Fields.png)
5.  Add **Response Headers** to provide any additional information.
6.  Click **Proceed**.
7.  To execute and test the configured action, click **Test Action**.  
    ![Test_Action_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48531360bd123825/65c30a24554798179d809a64/Test_Action_Response.png)
8.  On successful configuration, you can see the below output. Click **Save and Exit**.  
    ![Save_Exit_Response.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd29a26528dcc5fb/665edd53d036b2878500b449/Save_Exit_Response.png)

Activate the automation to check the output. You can use this sub automation trigger to invoke a sub automation action. Both are **interdependent** on each other.
