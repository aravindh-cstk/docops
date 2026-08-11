---
title: "Pusher"
description: "Pusher"
url: /agent-os/pusher
---

# Pusher

## Pusher

The Pusher action connector helps you to send a message to the specified Pusher channel.

## Set Up Pusher

Perform the following steps to set up the Pusher action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Pusher** connector.  
    ![Pusher.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6baabee19940a77e/6527f8d6884a1a3ea3df2dae/Pusher.png)  
    
4.  Under **Choose an Action** tab, select the **Send Message** action.  
    ![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4254d2314eb7be22/63dbb41deace6a21b8fc18d0/Select-Action.png)
5.  Click the **\+ Add New Account** button to select your Pusher account.
6.  Now, add the **App ID**, **App Key**, **App Secret Key**, and the **Cluster** of your Pusher account to connect it with Contentstack. You can get your **App ID**, **App Key**, **App Secret Key**, and the **Cluster** details from your Pusher dashboard.  
    
    **Additional Resource:** For more information, refer to the [Get your API Keys document](https://pusher.com/docs/channels/getting_started/javascript/?ref=sdk-quick-starts#get-your-free-api-keys).
    
    ![API.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte87dd55d676d83fc/63dbb773b3b39d7d817f02b8/API.png)
7.  Click the **Authorize** button.  
    ![Click-Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6e71eef34a2fe21/63dbb41d8c69354d3e05509c/Click-Authorize.png)
8.  Under the **Channel name** section, select the channel from your account where you want to send the message.
9.  Now, enter the **Event Name** where you want to send the message.
10.  Write the message you want to send in the **Message** box and then click the **Proceed** button.  
     ![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc71289a545e5876a/63dbb41d260a9a2054c6c93f/Select-Fields.png)
11.  Click **Test Action** to test the setup. In the output section, you can view the status of your action. Once set, click **Save and Exit**.  
     ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba749bb21d652ca1/63dbb41d83cdf64d44f74c9f/Save-Exit.png)
12.  You can check the **Debug console** section in your Pusher account and you will find the message published in the event you specified above.  
     
     ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba749bb21d652ca1/63dbb41d83cdf64d44f74c9f/Save-Exit.png)
     

This completes the **Pusher** Connector’s setup.
