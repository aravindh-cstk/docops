---
title: "Twilio"
description: "Twilio"
url: /agent-os/twilio
---

# Twilio

## Twilio

Twilio is a communication app and this action connector lets you enable and perform voice, messaging, video, and other communication functions within the web and mobile apps by using its web service APIs.

## Set up Twilio

Perform the following steps to set up the Twilio action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Twilio** connector.   
    ![Twilio.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3884aa2a647a785/6527f8e2a0980f659dedeade/Twilio.png)  
    
4.  Under **Choose an Action** tab, select the **Send SMS** action.  
    ![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2a55e7bb542c462/63dbc3d311a22c0d9823269d/Select-Action.png)
5.  On the **Configure Action** page, click **\+ Add New Account**.  
    ![Add-Axccount.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08f56e4c65478b70/63dbc3d3bd97af5094b6570d/Add-Axccount.png)
6.  In the **Authorize** modal, enter your **Account SID** and **Token** (i.e., your project Auth Token).   
    ![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f08937c09b89983/63dbc3d3c338484e3b194d57/Authorize.png)
    
    **Additional Resource:** You will find these credentials in the homepage of your Twilio account/project. For more information, refer to the [Credentials REST API Authentication | Twilio](https://www.twilio.com/docs/iam/credentials/api/) document.
    
    ![api.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ebccc6f513e739e/63dbc3d44cd3b46624f7624e/api.png)
7.  Once done, click on **Authorize** (screenshot 1 in the above step).
8.  Click the **Caller ID** textbox, and under **Lookup**, select the phone number (already configured in your Twilio account) using which you want to send the SMS.  
    
9.  In the **To** textbox, enter the phone number you want to send the SMS to and your message in the **Message** box. Click **Proceed**.  
    ![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt603292727efe73aa/63dbc3d3409fb73889c0e125/Select-Fields.png)
10.  In the next step, click **Test Action**. You will see the following output. If the output looks correct, click **Save and Exit**.  
     ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5d004157500212e/63dbc3d3295f164f53ab2fed/Save-Exit.png)

This sets the **Twilio** action connector.
