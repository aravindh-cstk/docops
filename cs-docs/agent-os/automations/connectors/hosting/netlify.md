---
title: "Netlify"
description: "Use this connector to deploy the frontend changes of your web applications. 
"
url: /agent-os/netlify
---

# Netlify

## Netlify

The Netlify connector helps you build, deploy, and host the frontend of your web applications via Contentstack. For instance, consider a scenario where you update some content in Contentstack. This update triggers a webhook that notifies the Netlify connector to create a production build and deploy the frontend changes.

## Set Up Netlify

Perform the following steps to set up the Netlify action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Netlify** connector.  
    ![Netlify.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ea726a444daf83e/6527f8d631e1fab8cb2acb6d/Netlify.png)  
    
4.  Under **Choose an Action** tab, select the **Deploy Site** action.  
    ![Netlify-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd45365b3ceab24ad/63dc0d06c28ed80d991c978e/Netlify-Action.png)  
    
5.  Click the **\+ Add New Account** button to set up your Netlify account (see screenshot in next step).  
    ![Netlify-Configue-Action-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt574767dc5cf1d3da/63dc0d060b15864e35bdeea1/Netlify-Configue-Action-Add-New-Account.png)  
    
6.  In the **Authorize** modal, enter a **Title** and a **Token**.  
    
7.  You can generate a new token from the **Personal access token** section in your Netlify console. Navigate to **User settings** > **Applications** \> **New access token** > **Generate token**.  
    ![Netlify_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84c7f1e40ca0e970/639d6d8c04ce585b97424850/Netlify_Dashboard.png)
    
    **Additional Resource:** For more information, refer to the [Obtain a token in Netlify UI](https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui/) document.
    
    Then click **Authorize.**  
    ![Netlify-Configue-Action-Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf515f72f17c89b2/63dc0d0690f21f67c8779a59/Netlify-Configue-Action-Authorize.png)
8.  On the **Configure Action** page, click the **Site ID** textbox and select an ID from the Lookup drop-down. The Site ID is a unique identification given to a project configured in Netlify. You can select the desired project for which you want to configure the Netlify connector.  
    ![Netlify-Configue-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0df81bc0ced35aa8/63dc0d064af9a97be711cc8f/Netlify-Configue-Action.png)
9.  Click **Proceed**.
10.  You will see the input values which you have configured in the **Configure Action** modal.  
     ![Netlify-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c1fa67251310a31/63dc0d069fc1e60f1a99de81/Netlify-Input.png)  
     
11.  Check if the details are correct. If yes, click **Test Action**.  
      ![Netlify-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte6ab7abe3a258464/63dc0d06040e3e388a964a86/Netlify-Test-Action.png)  
     
12.  Once the action is successfully executed, you will get the final output, and the build gets initiated in your Netlify console. Click **Save and Exit**.![Netlify-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3e2eb9cb26520f2/63dc0d06ef38d05093a9a04e/Netlify-Output.png)  
     
13.  Log in to your Netlify console and navigate to the **Deploy log** window to check whether the build has been initiated or not.  
     ![Deploy_Log.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9e2e47a6e5c602a9/6370caf14005df1070afaa5f/Deploy_Log.jpg)  
     

This sets up the **Netlify** action connector.
