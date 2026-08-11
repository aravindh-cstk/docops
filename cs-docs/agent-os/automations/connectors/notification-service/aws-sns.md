---
title: "AWS SNS"
description: "AWS SNS"
url: /agent-os/aws-sns
---

# AWS SNS

## AWS SNS

The AWS Simple Notification Service (AWS SNS) connector automates the process of sending notifications to the members subscribed/added to AWS SNS.

For instance, consider a scenario where you either create or update an entry in Contentstack and you want to notify specific users about it via a specific platform. In this case, link your AWS SNS account to the AWS SNS Automations connector, and every time the event occurs, it will trigger our action connector to send notifications to the medium(s) that has been set in your AWS SNS account.

## Set Up AWS SNS

Perform the following steps to set up the AWS SNS action connector:

1.  Click **Configure Action Step** from the left navigation panel.  
    
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **AWS SNS** connector.  
    ![Select_the_Connector_SNS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20b85c00353c3250/6527c9d47986d42c508f3830/Select_the_Connector_SNS.png)  
      
    
4.  Under **Choose an Action** tab, select the **Send Notification** action.  
    ![AWS-SNS-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda9c550c94722190/63dc0a47ef38d05093a9a040/AWS-SNS-Action.png)  
    
5.  Click the **\+ Add New Account** button to add your AWS account (see screenshot in next step).  
    ![AWS-SNS-Configure-Action-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7025a6ca050d72cf/63dc0a479fc1e60f1a99de70/AWS-SNS-Configure-Action-Add-New-Account.png)  
    
6.  In the **Authorize** modal, provide details such as **Title****, Access Key**, **Secret Key**, and **Region**.  
    You can generate the **Access** and **Secret Key** by navigating through **Security credentials** \> **Access Keys** \> **Create New Access Key** in your AWS account.  
    

![5.Generate_Access_Key.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbbf46236d700600c/6386004d5bbc641099351c30/5.Generate_Access_Key.jpg)

**Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

 Then, click **Authorize**.  

![Click_the_Authorize_button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e6f9552132864cb/64e5e7c05666534579118fdb/Authorize_Button.png)

12.  After adding an account, click the **Topic** field and select a given topic from the Lookup dropdown, click the **Topic type** field and select the topic type based on the Topic you selected, and then click the **Message Body** textbox and enter a sample message for the notification. You can even add dynamic parameters that appear in the output dropdown.  
     ![AWS-SNS-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8a4a30afb7fa7f3/63dc0a48b3b39d7d817f03f0/AWS-SNS-Configure-Action.png)
13.  Click the **Show optional fields** toggle button to enter the values for **Message Attributes** and **Subject** optional fields.  
     In **Message attributes**, you can enter certain attributes (in JSON format only) along with your message, and in **Subject**, you can enter the subject of the message.  
     ![Subject_Message_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0f9f5b04f7bcf8c/651fde9e6c9e36009cc0bc4b/Subject_Message_Attributes.png)  
     
14.  Click **Proceed**.
15.  Check if the details are correct. If yes, click **Test Action**.  
     ![AWS-SNS-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf0aa1568185ca20/63dc0a48e69a5812255551cd/AWS-SNS-Test-Action.png)  
     
16.  After successfully executing the Action, you will get a notification on your configured communication medium. For this example, we have configured the user's email in their SNS account.  
     

![11.Output_Email.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4c6660aea05e74cf/629d4c8b9687cd428c1fb42a/11.Output_Email.png)

18.  Click **Save and Exit** to finish the process.![AWS-SNS-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85fbf6bd41c07021/63dc0a47bd97af5094b657fd/AWS-SNS-Output.png)  
       
     

This sets the **AWS SNS** action connector.
