---
title: "PubNub"
description: "PubNub"
url: /agent-os/pubnub
uid: blt76efc9294eee8fbf
---

# PubNub

## PubNub

PubNub is a realtime communication platform which makes products for developers to build real time web, mobile, and IoT applications.  
The PubNub connector will send a message to the specified channel through your PubNub account.

## Set up the PubNub Connector

Perform the following steps to set up the PubNub action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **PubNub** connector.  
    ![Pubnub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltafc2d8b997f15d09/6527f8d688bee5e9408713cf/Pubnub.png)  

4.  Under **Choose an Action** tab, select the **Send Message** action.  
    ![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc11ec9a703d4356c/63dbb13814a2b44fa11decea/Select-Action.png)
5.  Click the **\+ Add New Account** button to select your PubNub account.
6.  Now, add the **Publish Key** and the **Subscribe Key** of your PubNub account to connect it with Contentstack. You can generate the Publish and Subscribe key by navigating to **Keysets** in your PubNub dashboard.

    Refer to the Application Setup document for more information.

    ![api.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltffbf7fc9634dd6f6/63dbb13911a22c0d98232667/api.png)
7.  Click the **Authorize** button.  
    ![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c44e4d96180c801/63dbb138eace6a21b8fc18c7/Authorize.png)
8.  Under the **Channel name** section, select the channel from your account where you want to send the message.
9.  Write the message you want to send to the above channel in the **Message** box and then click the **Proceed** button.  
    ![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt750f4783305e463b/63dbb1386d590c21c347cac1/Select-Fields.png)
10.  Click **Test Action** to test the setup. In the output section, you can view the status of your action.  
     ![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8afbdf4c4cabad69/63dbb139b3b39d7d817f028e/Test-Action.png)
11.  Once set, click **Save and Exit**.  
     ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbc25b0a680001ad8/63dbb138f4b2e369e5c72c5d/Save-Exit.png)
12.  You can check the **Debug console** section in your PubNub account and you will find the message in the channel you specified above.  
     ![output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4acfed35ef7ed1d1/63dbb138cdef8636cd80b89a/output.png)

This completes the **PubNub** connector’s setup.
