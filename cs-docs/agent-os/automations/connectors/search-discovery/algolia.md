---
title: "Algolia"
description: "Use this connector to perform CRUD operation in the Algolia account."
url: /agent-os/algolia
---

# Algolia

## Algolia

The Algolia Connector helps you to create search index entries in your Algolia account.

## Prerequisites

To use the Algolia connector, you first need to add your [Algolia account](https://dashboard.algolia.com/users/sign_in). To do so, follow the steps given below:

### Connect your Algolia Account

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the Configure **Action** Step, click the **Algolia** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt624b713b8578611d/66a8d528c103442ffa06771d/Select_Connector.png)
4.  Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Index Entries** action.  
    ![Select_Index_Entries_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaeab97d4fac522df/66a8d528d141064461555da8/Select_Index_Entries_Action.png)
5.  On the **Configure Action** page, click the **\+ Add New Account** to add your Contentstack account.  
    ![Add_Account_Index_Entries.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75b9d885f9de8602/66a8d5287cd4c96c183957e2/Add_Account_Index_Entries.png)
6.  In the **Authorize** modal, enter a **Title**, an **Application ID**, and an **API Key**.
    
    To find your **Application ID** and **API Key**, log in to the Algolia dashboard and perform the following steps:
    
    ![Algolia_API_Key](https://lh4.googleusercontent.com/8UaMJnA1r9_XlNWgfsInnTvebusaTUbg9xzIrmEGSSI46nrHDMNdRBI7KvflhI4LpkXZZb48Is6T0Ci5fS-C0R-oz2nrUnM_H3VLVGSLWn5qMEUKp9-WxFv66TalbqDGm8pD2aEg6jGrpYhL5vAzosc)
    
    **Additional Resource:** For more details, refer to the [Importing with API’s](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-with-the-api/#quickstart) document.
    
    Then, click **Authorize**. ![Algolia_Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77525b3e264ac2c6/63dc0916842f040f19e3e743/Algolia-Authorize.png)
    

This sets up your Algolia account for the Algolia connector.

## Set up the Algolia Connector

Perform the following steps to set up the Algolia action connector:

1.  From the left navigation panel, click **Configure Action** Step.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Algolia** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt624b713b8578611d/66a8d528c103442ffa06771d/Select_Connector.png)
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
4.  Under **Choose an Action**, you will see three actions: **Delete Entries**, **Index Entries**, and **Update Entries**.  
    ![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c354117a2253b30/66a8d5282b7be51b51a7677d/Select_Action.png)

Once done, you can go ahead and set up your Algolia connector.

### Action 1: Select the Index Entries action:

1.  Under **Choose an Action** tab, select the **Index Entries** action.
2.  On the **Index Entries Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Algolia Account](#connect-your-algolia-account) step.
    2.  Select the **Index Name** where you want to send the data in the form of a list of objects.
    3.  In the **Entries** field, enter the data to be included in the index.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86d1b9ebb0cdd391/66a8d528a3b12e15055f5e5e/Select_Fields.png)
        
        **Note:** Provide your index data as per your object schema and in JSON format only. You can add a JSON object or an array of JSON objects.
        
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test Action**.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb92ada81e778cd84/66a8d528a3b12ed71a5f5e5a/Test_Action.png)
5.  Once set, click **Save and Exit**.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt983734c2797a9492/66a8d5287f0b670819fd1c23/Save_Exit.png)
6.  Go to the Algolia Index section and check the latest index entry with the data we passed as objects within the connector configurations.  
    ![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte7b80bbc7ff72565/66a8d74bd14106e075555dbb/Output.png)

### Action 2: Select the Delete Entries action:

1.  Under **Choose an Action** tab, select the **Delete Entries** action.
2.  On the **Delete Entries Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Algolia Account](#connect-your-algolia-account) step.
    2.  Select the **Index Name**.
    3.  Enter the object ID to be deleted in the **Entries** field.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ab42a8f07baa2e8/66a8d509c103445f71067718/Select_Fields.png)
        
        **Note:** You can add multiple object IDs separated by a comma to delete from the Algolia index.
        
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test Action**.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9fa7d5361656af3/66a8d508adec83715e2d0d3e/Test_Action.png)
5.  Once set, click **Save and Exit**.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt131543f377ea05c4/66a8d509b3480c98ab14b344/Save_Exit_Button.png)

### Action 2: Select the Update Entries action:

1.  Under **Choose an Action** tab, select the **Update Entries** action.
2.  On the **Update Entries Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Algolia Account](#connect-your-algolia-account) step.
    2.  Select the **Index Name** where you want to send the data in the form of a list of objects.
    3.  In the **Entries** field, enter the data to be updated.  
        ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9e587683a7e3cd8/66a8d536a4a657c28a1de4cd/Select_Fields.png)
        
        **Note:** Provide your index data as per your object schema and in JSON format only. You can add a JSON object or an array of JSON objects.
        
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test Action**.  
    ![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e5e2bb34ee7efb6/66a8d535c3ff6a6ce609c90c/Test-Action.png)
5.  Once set, click **Save and Exit**.  
    ![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91ca68ef81dd5e07/66a8d535cfbd23f7047d791c/Save_Exit_Button.png)
6.  To verify the output, go to the Algolia Index section and check the updated entry.  
    ![Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6566200bade2f358/66a8d920eb20b447752cfafb/Output.png)

This sets the **Algolia** action connector.
