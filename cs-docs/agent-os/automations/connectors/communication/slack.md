---
title: "Slack"
description: "Slack"
url: /agent-os/slack
uid: blt9096f1b9dfacfa17
---

# Slack

## Slack

Slack is a business communication platform used to communicate between corporate team members.

## Set Up Slack

Perform the following steps to set up the Slack action connector:

1.  In the **Configure Action** section, click the **Slack** connector.  
    ![Slack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb6ef0d328efc1e3/6527f8e1dfea7369ca82122c/Slack.png)
2.  Select the action listed under Slack i.e., **Send Message**. This action will send a message to a specific Slack channel.  
    ![Sned_Message_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb0c4ed5e726115a/65990b14b6f924867fbe2ef7/Sned_Message_Action.png)
3.  In the **Configure Action** tab, click on **\+ Add New Account** to add your Slack account.  
    ![Add_New_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0eefd2d78656820/65990af3bb2e10c33d0121e9/Add_New_Account.png)
4.  Select a way to add a new account. You can authenticate your account in two ways; **Slack** **OAuth** or **Slack** **Bot** **Token**. Click **Proceed**.  
    ![Proceed_Authentication.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb85dc4fe08580e9c/65990af4bb2e1053920121ed/Proceed_Authentication.png)

    For **Slack** **Bot** **Token**, enter a **Title** and the **Slack** **Bot** **Token** retrieved from your Slack account. Click **Authorize.**  

    ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5e3832bd09e62a9/65990af42d2612f84fe7636c/Authorize_Button.png)

    To create a new bot token, follow these steps:

    1.  Navigate to [Slack account](https://api/slack.com).
    2.  Login to your organization. Click **Your** **Apps** to create a new app.
    3.  Navigate inside your app and click **OAuth** **&** **Permissions**.
    4.  Copy the **Bot User OAuth Token**. You **must** have the required authorization from your organization to use the OAuth token.
5.  For Slack OAuth, you will see a list of permissions that you can choose to **Authorize**.  
    ![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91164ad9b31e615a/65990af3b782f04c7f5866b6/Authorize_Account.png)
6.  Next, you will see a window open with access requests from the app. Click **Allow** to proceed further.  
    ![Authorize-Permissions.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5c8a14a74fa95d9c/634397dcd983c911b353bbbc/Authorize-Permissions.png)
7.  Enter a **Title** for this account, say “Allow-Slack-access,” and click **Save**.  
    ![6.Enter_Title.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5459072719524d2f/6299b618e95fa50f854dc0ec/6.Enter_Title.png)
8.  Next, click on the **Channel** textbox and select a channel from the **LOOKUP** list that contains all the channels in your Slack account. Click **Load More** until you locate your channel.
9.  Click the **Message** textbox and select the parameter you want to include in your message that will be sent to the selected Slack channel. For example, we will draft this: “1.query.name has sent a GET/POST request”.  
    ![Select_Different_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3761150ecc7376a8/65990af39fa6cfa01b289b93/Select_Different_Field.png)
10.  Optionally, enable the **Show optional fields** toggle button to display the **Username** and **Icon** **URL** fields. **Username** and **Icon** **URL** fields can **only** be used while using Slack Bot Token. If you prefer not to send a message that displays your name on Slack, you can authorize your account via Slack Bot Token and provide a suitable **Username** and **Icon** **URL** to send a slack message.

     **Note:** If you use Slack OAuth, **Username** and **Icon** **URL** will not be visible in the output.


     ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8293eac2d627f40e/65990af3b17790a495d03b1f/Show_Optional_Fields.png)
11.  Once done, click **Proceed.**
12.  Finally, you can test the configuration you set up by clicking the **Test Action** button.  


The output shows the message that will be sent on the linked Slack channel. Click **Save and Continue**.

Check your Slack channel. You will see the message delivered to the Slack channel as below:  
![Slack_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6ce31d3d765b8d2/65990b157d6d2e8d6ab8eb08/Slack_App.png)

This sets up the **Slack** action connector.
