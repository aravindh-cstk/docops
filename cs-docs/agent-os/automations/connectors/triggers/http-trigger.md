---
title: "HTTP Trigger"
description: "HTTP Trigger"
url: /agent-os/http-trigger
---

# HTTP Trigger

## HTTP Trigger

The HTTP Trigger connector lets you create a webhook URL to perform hypertext transfer protocol (HTTP) GET/POST requests. So, when a user makes an HTTP GET/POST request to the configured webhook URL, the associated action is performed.

## Set up the HTTP Trigger

Perform the following steps to configure the HTTP Trigger Connector:

1.  Click **Configure Trigger** from the left navigation panel.
2.  Within the **Configure Trigger** step, click the **HTTP** connector.  
    ![Select_triggger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt092b65816f45b6bb/65cf2ff8e07e36abc0e1abab/Select_triggger.png)
3.  Select **HTTP Request Trigger**. This trigger will be activated whenever you make an HTTP GET/POST request to a specific webhook URL.  
    ![Select_Trigger_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc24466f2cef39646/65cf2ff8ce7e235affd9ff21/Select_Trigger_Action.png)
4.  Select a **Method**, i.e., **GET/POST**.  
    ![Select_Method.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4380cba048aaa2fa/65cf2ff82e0c64525bca0fa0/Select_Method.png)
5.  Enable the **Secure HTTP Trigger** to add security to the HTTP trigger. The Secret value is automatically assigned once the setting is enabled. You can also set the Secret as per the criteria. Click **Proceed**.
    
    **Note:** When Secure HTTP trigger is enabled, you can only execute URLs with the key secret pair.
    
    ![Secure_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt183d84b283b128e6/65cf30bd9b8fd65bd1db8ebe/Secure_Trigger.png)
6.  You will find the applicable input “URL.” This URL will be the webhook URL that you can use to see the automation working. Click **Test Trigger**.
    
    **Note:** You can update the configuration of a configured HTTP Trigger with the same URL.
    
    ![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfad41d46860df171/65cf2ff88d55b07aa5614009/Test_Trigger.png)
    
    You should be able to see the output as follows:  
    
    ![Output_Error.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc3438841cff5617/65cf2ff7776a8a5ee4fb1474/Output_Error.png)
    
    **Note:** The output doesn’t appear because we haven’t tested the Trigger URL yet.
    
    Next, to try if the trigger is working real-time, perform the following steps:
    

1.  Copy the Input URL that you see above and paste it on a new browser tab.
2.  Pass the key and secret pair parameter configured previously to the Input URL, for example, https://trigger\_input\_URL?ah-http-key=U2>ggyhbsogvlps and hit enter. You should see an output similar to the following:  
    {"result": "The rule is currently being tested or not activated","trigger\_id":"1111ab1c1ab11111ca11b111111ca1bc"}
3.  Return to your Test Trigger setup page and click Test Trigger again. In the output, you will see your query parameter as follows:  
    query: ah-http-key:"U2>ggyhbsogvlps"  
    Here’s what you see:  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90fd7e329b263b0f/65cf2ff877f34c4777ca3335/Save_Exit.png)
    
    **Note:** You can also test the trigger in HTTP client by passing the key: secret pair in the Header section.
    
4.  Lastly, you can either pass a new query parameter and **Retest** the trigger or hit **Save and Continue** (see screenshot in **step 3**).

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert** **Changes** button.

This completes your step of configuring your **HTTP** trigger.
