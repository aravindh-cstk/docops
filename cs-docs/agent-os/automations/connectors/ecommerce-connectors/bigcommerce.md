---
title: "BigCommerce"
description: "BigCommerce"
url: /agent-os/bigcommerce
---

# BigCommerce

## BigCommerce

BigCommerce is a cloud-based platform that helps set up an online store for your products. This action connector allows you to retrieve product details from your BigCommerce store.

## Set up the BigCommerce Connector

Perform the following steps to set up the BigCommerce action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **BigCommerce** connector.  
    ![Select_the_Connector_BigCommerce.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt911bf3027d31e7c3/6527c9d4a4cac22dbfc5cf16/Select_the_Connector_BigCommerce.png)  
    
4.  Under **Choose an Action** tab, select the **Get Product Details** action.  
    ![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf05f47dfa04fc7e0/63dbcdfc5ce6bc67cff12d4f/Select-Action.png)
5.  In the **Configure Action** tab, click **+ Add New Account** to add your BigCommerce account.  
    ![Add-ACCOUNT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta06093adf05e252e/63dbcdfb5ce6bc67cff12d4b/Add-ACCOUNT.png)
6.  In the **Authorize** pop-up window, provide the **Store Hash** and **Access Token**.
    
    To generate Store Hash and Access Token, log in to the BigCommerce dashboard and perform the following steps:
    
    1.  Click the **Advanced Settings** tab in the navigation and select **API Accounts**.
    2.  Under the “API Accounts” section, click **\+ Create API Account**.
    3.  Provide a **Name** and set the OAuth scopes. Once done, click **Save**.
    4.  Copy the “Store Hash” and “Access Token” for future use.
    
      
    ![api.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt572698f5a577e657/63dbcdfb9fc1e60f1a99dd80/api.png)  
    
    For more information, refer to the [Store API Accounts](https://support.bigcommerce.com/s/article/Store-API-Accounts?language=en_US) document.
    
7.  Once done, click **Authorize**.  
    ![Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e9e2c75179c6e38/63dbcdfb47f33a105473e089/Authorize.png)
8.  Provide the **Product ID** to fetch your product details. You can either check for the Product ID from your BigCommerce online store or can dynamically add it from the previous step.  
    ![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd671530e2fb5aa81/63dbcdfc3aa4a610530b9f87/Select-Fields.png)
9.  Click **Proceed**.
10.  To execute and test the configured action, click **Test Action**.  
     ![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltade9a16372570745/63dbcdfc260a9a2054c6c98d/Test-Action.png)
11.  On successful configuration, you can see the below output. Click **Save and Exit**.  
     ![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98db1b75fb486c5d/63dbcdfcbd97af5094b65736/Save-Exit.png)

This sets the **BigCommerce** action connector.
