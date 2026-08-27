---
title: "AWS Lambda"
description: "AWS Lambda"
url: /agent-os/aws-lambda
uid: blt613daad5046331ea
---

# AWS Lambda

## AWS Lambda

The AWS Lambda action connector lets you configure and execute a Lambda function that is invoked in response to an event generated in Contentstack.

**Note:** You need to define the Lambda function in your AWS Services console before configuring it for the Automations AWS Lambda action connector.

For instance, consider a scenario where you want to be notified whenever someone creates or updates an entry in Contentstack. In this case, you can set up a system that includes a webhook that triggers when a user creates or updates an entry. This webhook in turn must invoke a lambda function that notify a messaging service such as AWS SNS.

## Set up the AWS Lambda action Connector

Perform the following steps to set up the AWS Lambda action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **AWS Lambda** connector.  
    ![Select_the_Connector_Lambda.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03e73c3e40f761d0/6527c951f3d8002a04d502bf/Select_the_Connector_Lambda.png)  

4.  Under **Choose an Action** tab, select the **Execute Lambda Function** action.  
    ![Choose_an_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fd7ba199eb3f4c3/63dbf68c90fb3569e47fae26/Choose-an-Action.png)
5.  Click **\+ Add New Account** to add your AWS account.  
    ![Add_Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7889c06d895439a/63dbf68c3d81ee204e8c4a78/Add-Account.png)
6.  In the **Authorize** pop-up window, provide details such as **Title**, **Access Key**, **Secret Key**, and **Region**.  
    ![Authorize_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2381dfd55806a900/64e5f1329eb162f0539243e3/Authorize_Button.png)  

    You can generate the **Access** and **Secret Access Key** by navigating through **Security credentials** > **Access Keys** > **Create New Access Key** in your AWS console.  
    ![api](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f999a79c1e18fe3/63dbf68def38d05093a99ffa/api.png)

    **Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

7.  Once done, click **Authorize**.
8.  Click the **Function Name** textbox and select the required lambda function from the **Lookup** dropdown.  

    **Note:** You need to have your Lambda function defined in your AWS Services console before configuring your AWS Lambda action connector in Automations.


    ![Function_Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b0f74016e461e59/63dbf68ef613db4bc7cb8b8b/Function-Name.png)
9.  Click the **Invocation Type** textbox and select an option from the given dropdown. Here, you can choose from three options: **Event**, **RequestResponse**, and **DryRun**.
    1.  **Event:** This returns a request ID and status code after successful execution of the function.
    2.  **RequestResponse:** This returns a status code and a response message as **body** for the selected lambda function.
    3.  **DryRun:** This allows you to test the function, and it returns a request ID and status code.
10.  Lets select **Event** as the invocation type for our first example, then we will cover other invocation types proceeding further.  

     ![Event_Invocation_Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13b004ccc15d4876/63dbf68e6d590c21c347cbcb/Event-Invocation-Type.png)
11.  \[_Optional_\] You can choose to add optional fields by clicking on the **Show optional fields** toggle. You will find two additional fields have appeared: **Parameters** and **Specific Version or Tag**.
12.  Click the **Parameters** textbox to add dynamic parameters to your Lambda function. Make sure to enter the parameter in JSON format only.  
     You can also specify a **Specific Version or Tag** for your Lambda function.  
     ![Show_optional_Fields_Event](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltebf8c64e49a07af7/63dbf6a85ce6bc67cff12e10/Show-optional-Fields-Event.png)
13.  Once done, click **Proceed**.
14.  Click **Test Action** to test the configured action connector.  
     ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt384ec080cf73151a/63dbf6a7e69a58122555517d/Test-Action.png)
15.  After successful execution, you will get a Request ID and status code for your Lambda function. Click **Save and Exit** to finish the process.  
     ![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22dea0b6c631c1d0/63dbf68e4af9a97be711cc4c/Save-Exit.png)

Now, in continuation to step 7 above, lets check out the output for the Invocation types RequestResponse and DryRun.

**Invocation Type:** RequestResponse  
After performing **steps 1-6** from above, perform the following steps:

1.  Select **RequestResponse** as the **Invocation** **Type**.  
    ![RequestResponse_Event](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta710fc1b24345f19/63dbf68e842f040f19e3e6fe/RequestResponse-Event.png)
2.  \[_Optional_\] Click the **Show optional fields** toggle.  
    Add dynamic parameters (in JSON format) to your Lambda function under the **Parameters** textbox. And, specify a **Specific Version or Tag** for your Lambda function if need be.  
    ![RequestResponse_Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81e5c8a3843d8503/63dbf68d4af9a97be711cc48/RequestResponse_Show-Optional-Fields.png)  


3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action connector.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt384ec080cf73151a/63dbf6a7e69a58122555517d/Test-Action.png)  


5.  After successful execution, you will get a status code and a response message (body) for your Lambda function. Click **Save and Exit** to finish setting up your connector.  
    ![Save_Exit_RequestResponse](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21863202aa326a16/63dbf6a7cdbe917d7abd8ef9/Save-Exit-RequestResponse.png)

**Invocation Type:** DryRun  
After performing steps 1-6 that we covered under setting up the Event invocation type, perform the following steps:

1.  Select **DryRun** as the **Invocation Type**.  
    ![Select_DryRun_Event](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cfef74e33d1bc03/63dbf6a8260a9a2054c6c9fb/Select-DryRun-Event.png)
2.  \[_Optional_\] Click the **Show optional fields** toggle.  
    Add dynamic parameters (in JSON format) to your Lambda function under the **Parameters** textbox. And, specify a **Specific Version or Tag** for your Lambda function if need be.  
    ![Show_Optional_Fields_DryRun](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0af46ef5b4b89224/63dbf6a86d590c21c347cbd3/Show-Optional-Fields-DryRun.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action connector.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt384ec080cf73151a/63dbf6a7e69a58122555517d/Test-Action.png)
5.  After successful execution, you will get a Request ID and status code for your Lambda function. Click **Save and Exit** to finish the process.  
    ![Save_Exit_DryRun](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19ad43018bfafe06/63dbf68e0b15864e35bdee48/Save-Exit-DryRun.png)

This sets the **AWS Lambda** action connector.
