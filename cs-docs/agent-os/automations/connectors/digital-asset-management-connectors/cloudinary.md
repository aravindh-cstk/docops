---
title: "Cloudinary"
description: "Cloudinary"
url: /agent-os/cloudinary
---

# Cloudinary

## Cloudinary

Cloudinary is an image and video management tool for websites and mobile applications covering everything from uploading, storage, optimization, and delivery.  
With this connector, you can now easily automate the process of updating the metadata of all the assets present in a cloudinary account.

## Set up the Cloudinary Connector

Perform the following steps to set up the Cloudinary action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Cloudinary** connector.  
    ![Select_the_Connector_Cloudinary.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt329a7e5937a99102/6527c9d57ea98605312eccbe/Select_the_Connector_Cloudinary.png)
4.  Under **Choose an Action** tab, select the **Update Metadata** action.  
    ![Select_Cloudinary_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d36ca5b708595fd/668bf5fbdc9c875eb31430d3/Select_Cloudinary_Action.png)
5.  In the **Configure Action** tab, click **\+ Add New Account** to add your Cloudinary account.  
    ![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt44c1c5eaa16e3b64/668bf5fabbb92252e8358403/Add_Account.png)
6.  In the **Authorize** pop-up window, provide details such as **Cloud Name**, **API Key**, and **API Secret**.
    
    To generate Cloud Name, API Key, and API Secret, log in to the Cloudinary dashboard and perform the following steps:
    
    1.  Click the **Dashboard** tab in the left navigation.  
        ![Cloudinary_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf204207c3e61bd12/668bf5fac984887f245e4a75/Cloudinary_Dashboard.png)
    2.  Under the “Product Environment” section, you will see the **Cloud Name**. Click **Go to API Keys**, and click the **\+ Generate New API Key** button to create a new API key.
        
        You will see the **API Secret**. Click the **Eye** icon and provide the login password. Click **Approve** to view the API Secret.
        
        For more information, refer to the [Admin API reference](https://cloudinary.com/documentation/admin_api) document.
        
        ![Cloudinary_Dashboard.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf204207c3e61bd12/668bf5fac984887f245e4a75/Cloudinary_Dashboard.png)
7.  Once done, click **Authorize**.  
    ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb1ad0096ea7aa119/668bf5fa03254593d98846a3/Authorize_Button.png)
8.  Select the **MetaData** from the **Lookup** list. Cloudinary structured metadata allows you to define asset fields, populate them with values programmatically or via the Media Library, and perform searches on them. You can also add validation rules, set default values, and define fields as mandatory.
9.  In the **Body** field, enter the metadata field that you want to update. It should be in JSON format.  
    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79b694d4b21133de/668bf5fbaba9d73c3fbffca9/Select_Fields.png)
10.  Click **Proceed**.
11.  To execute and test the configured action, click **Test Action**.  
     ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f01a12191ec477e/668bf5fa534a9df9c8ae0d9f/Test_Action.png)
12.  On successful configuration, you can see the below output. Click **Save and Exit**.  
     ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc50b346f30c1a420/668bf5fadc9c877eb01430cf/Save_Exit_Button.png)
13.  Navigate to Cloudinary to check the progress. This output should show the mandatory field disabled.  
     ![Product_Metadata_Update.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd241002400fd648c/668bf5fabb79f22cd4673f1b/Product_Metadata_Update.png)

This sets the **Cloudinary** action connector.
