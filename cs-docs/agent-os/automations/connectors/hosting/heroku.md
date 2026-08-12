---
title: "Heroku"
description: "Heroku"
url: /agent-os/heroku
---

# Heroku

## Heroku

The Heroku Action connector will trigger a build of your Heroku app.

## Set up the Heroku Connector

Perform the following steps to set up the Heroku action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Heroku** connector.  
    ![Heroku.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfcefc402864f80a8/6527f8c86f293946ac191330/Heroku.png)
4.  Under **Choose an Action** tab, select the **Trigger a Build** action. ![Select_An_Action.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt403d654434c0a7c0/639d6d9272cb3955c5f0deed/Select_An_Action.png?locale=en-us)
5.  Click the **\+ Add New Account** button to select your Heroku account.
6.  Now, add a suitable **Title** and the **API Key** of your Heroku app to connect your Heroku account with Contentstack.  
    ![Authorize.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt972c4577c928de02/639d6d95489faa12a1b2a236/Authorize.png?locale=en-us)  
    To get your Heroku app's API Key, log in to the Heroku dashboard, and perform the following steps:
    
    1.  Click **Account Settings** under the user profile.
    2.  Click the **Account** tab, and you will find your API Key.
    
    ![Heroku_Dashboard.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt3610ba592f1f715d/639d6d9fb45dfc12cdadbfa7/Heroku_Dashboard.png?locale=en-us)
    
    **Additional Resource:** For more information, refer to the [How to generate an API Key](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api/) document.
    
7.  Once done, click **Authorize**.
8.  Under the **Source-blob url** section, add the url where the source code of your build is present.
    
    **Note:** If you are using a public GitHub repo for your source code then the url will be in the following format:
    
    https://api.github.com/repos/<username>/<repo\_name>/tarball/<branch\_name>/</branch\_name></repo\_name></username></repo\_name></repo\_name></username>
    
    **Example:**  
    https://api.github.com/repos/username/samplename/tarball/master/
    
    **For a private GitHub repo use the following format:**  
    https://:@api.github.com/repos/<username>/<repo\_name>/tarball/<branch\_name>/ </branch\_name></repo\_name></username></token></user\_name>
    
    **Example:**  
    https://username:sampletoken@api.github.com/repos/username/samplename/tarball/master/
    
9.  Under the **App name/ id section**, select the app that you have created in Heroku.
10.  You can mention a **Version** for your build. This is an optional step which will help you keep track of the latest version for your build.
11.  Finally, click on the toggle button if you want to **Hide optional fields** and then click **Proceed**.  
     ![Click_On_Proceed.jpg](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/blt167a77860a593db3/639d682f097e0f59cca5e078/Click_On_Proceed.jpg?locale=en-us)
12.  Click **Test Action** to test if a build is created in Heroku. In the output section, you can view the status of your build.
13.  Once set, click **Save and Exit**.  
     ![Save_And_Exit.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/bltf5be9bf032633879/639d6d917a935f12e7788f5c/Save_And_Exit.png?locale=en-us)  
       
     The action will deploy a build in your Heroku project. You can check the build and open the respective app you deployed using the Heroku connector.![Final_Output](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6550c8b1a59d1554/6346f79738b64110d92e9e7f/Final-Output.png)  
     

This sets up the **Heroku** action connector.
