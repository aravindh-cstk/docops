---
title: "Response"
description: "Response"
url: /agent-os/response
uid: bltb4dad72afee33c69
---

# Response

## Response

The Response action connector helps determine the status of your configured action. It notifies users about the success or failure of a configured action with a response.

**Note:** The Response action connector can only be used with the HTTP trigger connector.

## Set up Response

Perform the following steps to set up the Response action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Response** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2243a9398e2dadd9/669758efd0c0ef0b49c563a1/Select_Connector.png)
4.  Under **Choose an Action** tab, select the **Response** action.  
    ![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta3356a60d427f0b1/669758eed316c7620bb32d4c/Select_Action.png)
5.  Based on the results of your configured action, enter the **Response Status**.  

6.  In the **Response Body** field, you can add data that you want to send as the response.  
    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7909762b2213e42/669758ee05282f715db22aa1/Select_Fields.png)
7.  Add **Response Headers** to provide any additional information.  
    ![Response_Headers.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt600bdc3800e76f72/669758eeb534d51c9c41bcc2/Response_Headers.png)
8.  Click **Proceed**.  

9.  To execute and test the configured action, click **Test Action**.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt082abadefb0c7184/669758ee77d069111d6a6462/Test_Action.png)
10.  On successful configuration, you can see the below output. Click **Save and Exit**.  
     ![Sae_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta3f70636cd7283b4/669758eed316c7e81eb32d48/Sae_Exit_Button.png)

You can check the response by activating automation and visiting the webhook URL you configured in the previous step.

This sets the **Response** action connector.
