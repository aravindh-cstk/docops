---
title: "Mailgun"
description: "Mailgun"
url: /agent-os/mailgun
---

# Mailgun

## Mailgun

The **Mailgun** action connector lets you send emails using your own Mailgun account.

## Set up the Mailgun Connector

Perform the following steps to set up the Mailgun action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Mailgun** connector.  
    ![Mailgun.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf5071cbb98afc04/6527f8c9bc22f448d3766d8f/Mailgun.png)  
    
4.  Under **Choose an Action** tab, select the **Send Email** action.  
    ![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt477bc2d6ac639d43/63dba2568c69354d3e05502b/Select-Action.png)
5.  Click the **\+ Add New Account** button to connect to your Mailgun account.  
    ![Add-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb919b36552139b62/63dba25511a22c0d9823262e/Add-Account.png)
6.  In the **Authorize** modal, enter your Account API Key and click **Authorize**.  
    ![Click-Authoriz.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f09ef7a1f9d1147/63dba255c28ed80d991c9624/Click-Authoriz.png)  
      
    To get your Mailgun account **API Key**, open Mailgun, log in and click your user profile, and click **API Keys**. Under the **API security** tab, you will see the following details. We will use the **Private API Key**: ![API.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f07529af893564d/63dba360eace6a21b8fc1895/API.png)  
    
    **Additional Resource:** Text For more information, refer to the [Mailgun - Where Can I Find My API Key and SMTP Credentials?](https://help.mailgun.com/hc/en-us/articles/203380100-Where-can-I-find-my-API-key-and-SMTP-credentials-) document.
    
7.  Enter the **Domain** (registered domain in Mailgun account), **From** (sender email ID), **To** (receiver email ID; you can add multiple email IDs separated by a comma), **Subject** (subject of the email), and **Message** (message body to be sent in the email). Once done, click **Proceed**.  
    ![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf1a43d2c92bfc5d8/63dba25583cdf64d44f74c38/Select-Fields.png)
8.  Click **Test Action** to send the email using the Mailgun account. Check the output.  
    ![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt039c52e1c3cc21af/63dba256f613db4bc7cb8a6e/Test-Action.png)
9.  Once set, click **Save and Exit**.  
    ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt853ef48280fc32c7/63dba2557ccfaf4bc687edcd/Save-Exit.png)

You can check the email in the receiver’s email account sent by your Mailgun email address.  

![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5726e27c3902c22d/63dba255e69a581225555030/Output.png)

This sets up the **Mailgun action** connector.
