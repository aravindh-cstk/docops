---
title: "Algolia App Installation Guide"
description: "Learn how to install and configure the Algolia app in Contentstack. Set up environments, manage syncs, and view search analytics in the Full Page UI location."
url: /marketplace/algolia
---

# Algolia App Installation Guide

## Algolia App Installation Guide

Algolia is an AI-powered search and discovery platform that enhances dynamic experiences. It helps businesses, particularly e-commerce brands, quickly and efficiently discover and access content, thereby boosting performance.

The Contentstack Marketplace allows you to install and use the Algolia app to update Algolia indices automatically when entries and assets are published, unpublished, or deleted within Contentstack.

**Note:** The Algolia app has been migrated to a **Full Page UI location**. We are no longer supporting the **Stack Dashboard UI location**.

## Prerequisites

-   [Algolia account](https://www.algolia.com/users/sign_in)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow the step-by-step guide to install and configure Algolia within your stack.

## Steps for Execution

1.  [Retrieve your Algolia Credentials](#retrieve-your-algolia-credentials)
2.  [Install and Configure the Algolia app in Marketplace](#install-and-configure-the-algolia-app-in-marketplace)
3.  [Use the Algolia app within your Stack](#use-the-algolia-app-within-your-stack)

1.  ## Retrieve your Algolia Credentials
    
    To get the Algolia credentials, log in to your [Algolia account](https://www.algolia.com/users/sign_in), and follow the steps given below:
    
    1.  In the left navigation, click **Settings**, then under **Team and Access**, click the **API Keys** option.![Algolia-API-Keys-Option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8abbdc89414c87bc/68ef47b2da161219b684b40a/Algolia-API-Keys-Option.png)
    2.  Under the **Your API Keys** tab, you can view the **Application ID**. Copy it to the clipboard to use during app configuration in [step 2](#install-and-configure-the-algolia-app-in-marketplace).![Algolia-Application-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee549167851c2e2f/68ef47b1bd1d806b8be6f81a/Algolia-Application-ID.png)
    3.  Under the **All API Keys** tab, you can view the already created **API Keys**.![Algolia-API-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2bd851b167004a63/68ef47b33316aabfe8d35a3c/Algolia-API-Keys.png)
        
        While creating a new API Key, ensure to select **Indices**.
        
        ![Algolia-Indices](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e7906cdf456efa2/68ef47b2bd1d80f726e6f81e/Algolia-Indices.png)
        
        Also, add the **ACL** options to perform indexing.
        
        ![Algolia-Add-ACLs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3694f451434b2dfe/68ef47b251ce677e5e09654c/Algolia-Add-ACLs.png)
    4.  In the left navigation, click the “Search” icon. Under **Index**, you can copy the **Index Name** by clicking the “Copy” icon.![Algolia-Index-Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f7b6635fc510b9f/68ff8a88f62d8ca5c0c2dad3/Algolia-Index-Name.png)
    
    Now, you have **Application ID**, **Index Name**, and **API Key** to configure the Algolia app in [step 2](#install-and-configure-the-algolia-app-in-marketplace).
    
2.  ## Install and Configure the Algolia App in Marketplace
    
    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can view the available apps. Hover over the **Algolia** app and click **Install**.![Algolia-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43fbcc3e5b19f8bb/68ee964bbd1d805edbe6f565/Algolia-App.png)
    4.  In the pop-up window, select the stack where you want to install the Algolia app, accept the **Terms of Service**, and click the **Authorize & Install** button.![Algolia-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07a541c2f73cc9b8/68ee964bffa4016af5eec40b/Algolia-App-Install.png)
    5.  On the **Configuration** screen, enter the following details:
        1.  Click the **\+ Add Configuration** button to add new configuration details.![Algolia-Configuration-Add](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd0c28670c94ff027/59edad551eede617c68952b3/Algolia-Configuration-Add.png?locale=en-us)
        2.  Select the environment and provide the Algolia credentials:
            1.  **Sync from Branches:** Select one or more branches from which the entries must be synced to Algolia for the selected environment.
                
                **Note:** Leaving this field empty defaults to syncing from all branches.
                
            2.  **Delivery Token** (mandatory): Select an existing environment-dependent delivery token from a dropdown or create a new one directly in the app. This delivery token is used to fetch published entry data for indexing.![Algolia-Configuration-Sync-from-Branches-And-Delivery-Token](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am28cdcdab9e396211/021081e57556ce92e703a2cc/Algolia-Configuration-Sync-from-Branches-And-Delivery-Token.png?locale=en-us)
                
                **Additional Resource:** To ensure data is correctly synchronized with published content, use the **Delivery Token**. Refer to the [Delivery Tokens](/docs/headless-cms/about-delivery-tokens) documentation.
                
            3.  **Application ID** and **API Key** (mandatory)**:** Enter your Algolia **Application ID** and **API Key** retrieved in [step 1](#retrieve-your-algolia-credentials).![Algolia-Configuration-App-Id-And-API-Key](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am99c45752d1182d29/bba53a8996e3cf8181575598/Algolia-Configuration-App-Id-And-API-Key.png?locale=en-us)
            4.  **Index Name**: Enter the name of the Algolia index to which entries will be synced.
                
                **Warning:** If no index name is provided, entries won't be pushed to Algolia.
                
            5.  **Index Level Mapping for Content Types**: Click **\+ Add Rule** to map a content type to a specific Algolia index name. Each rule is configured one content type at a time.![Algolia-Configuration-Index-Name-And-Mapping](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am4c67fd3d0621b324/3a945413f4e5b2f0d44df46f/Algolia-Configuration-Index-Name-And-Mapping.png?locale=en-us)
                
                **Note:**
                
                -   Each rule requires an explicit index assignment.
                -   To add another content type, add a new rule.
                
        3.  To delete the configuration, click the “Delete” icon corresponding to the environment.![Algolia-Configuration-Delete](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amb75ffdf2f2f3111b/c18a6de929558a74c13bcb4b/Algolia-Configuration-Delete.png?locale=en-us)
            
            **Note:**
            
            -   Credentials entered for an environment will be applicable to the entries published on that environment.
            -   At least one environment configuration must be added.
            -   You can add multiple configuration rules for the same environment, and are labeled as **Config 1**, **Config 2**, and so on.
            
        4.  **Select Default Environment:** Select the environment to set as the default for Algolia search results in the Full Page App.![Algolia-Configuration-Default-Environment](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amb920c4774cd02b3a/e44b78b765b384eb4e0ff82b/Algolia-Configuration-Default-Environment.png?locale=en-us)
        5.  Configure the **Additional Settings**:
            1.  **Field Level Mappings for Content Types:** Click **\+ Add Rule** to add a field-level mapping rule.![Algolia-Configuration-Additional-Settings-Add-Rule](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8163e76078fa136c/4bf2914edf0eff8af60bb0ef/Algolia-Configuration-Additional-Settings-Add-Rule.png?locale=en-us)Each rule contains the following fields in order:
                
                1.  **Content Type:** Select the content type whose fields you want to map.
                2.  **Mapping Fields:** Select the specific fields from the content type to push to the Algolia index. Only these fields will be included in the indexed record.
                    
                    Click the **\+ Add Field** option in the Mapping Fields drop-down to add a new nested field.
                    
                    ![Algolia-Configuration-Additional-Settings-Add-Field](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8fe58049d8c40fc9/c9e2261f9ed175b387370b96/Algolia-Configuration-Additional-Settings-Add-Field.png?locale=en-us)
                    
                    You can map nested or complex structures in the following manner:
                    
                    -   While mapping nested fields, you must specify the object and its field using the dot(.) notation.
                        
                        For example, **Object.age** for accessing the age field within the object.
                        
                    -   While mapping arrays, use indexing.
                        
                        For example, **Array\[1\]** for accessing the second value of an array.
                        
                    -   While mapping modular blocks, you provide modular\_blocks\[\].block\_a.heading, it will send all instances of block\_a.heading inside modular\_blocks from the entry to Algolia. To target only the first instance, use indexing like modular\_blocks\[0\].block\_a.heading. However, do not use an index and an empty \[\] at the same time.
                        
                        For example, modular\_blocks\[0\].block\_a.group\[\].title is invalid.
                        
                        You can use the above rules to create mapping rules for complex structures that include objects and arrays. In the **Add Mapping Fields** modal, add the **Content Type Field Paths** and click the **Create** button.
                        
                        ![Algolia-Configuration-Additional-Settings-Create-Field](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am83b96f6d5cd945e2/59db2571cd673ce7c87fedd2/Algolia-Configuration-Additional-Settings-Create-Field.png?locale=en-us)
                        
                        You can now add a maximum of **30 field paths** at once by pasting values separated by **commas**, **spaces**, or **semicolons**, or pressing the enter key.
                        
                        **Note:** If the limit is exceeded, the app disables the **Create** button and triggers an error message.
                        
                        All Contentstack fields are supported through this feature. For reference complex fields, only single-level nesting is supported.
                        
                        Example:
                        
                        ```
                        {
                          "reference": [
                            {
                              "uid": "bltxxxxxxxxxxxx",
                              "_content_type_uid": "example_content_type"
                            }
                          ]
                        }
                        ```
                        
                        If we have a reference field named reference, then reference\[0\].title will give the title of the reference field selected.
                        
                3.  **Environments**: Select the environments this mapping rule applies to. Defaults to **All environments** if left empty.
                4.  **Branches**: Select the branches this mapping rule applies to. Defaults to **All branches** if left empty.![Algolia-Configuration-Additional-Settings](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am947639a90b77eab1/86e44f3d2b2b76b0cb492874/Algolia-Configuration-Additional-Settings.png?locale=en-us)
                
                **Warning:** If the selected content type does not exist in the chosen environment's branches, a warning icon appears on the rule. The rule will be saved but will not be applied at sync time.
                
            2.  **Select for all Content Types:** Mark the checkbox if you want to add entries to Algolia Index for all the content types along with the content types for which you set the rules by selecting **Mapping Fields**.
                
                **Note:** By default, the **Select for all Content Types** checkbox is selected.
                
                If you **select** this option, the app will perform the following actions:
                
                -   The app adds the entries of content types specified in Mapper to Algolia according to the rules or fields added.
                -   The app adds the entries of content types not added to Mapper to Algolia with all their data.
                
                If you **deselect** this option, the app will perform the following actions:
                
                -   The data for all content type entries will not be added to Algolia.
                -   If the content type Mapping has not been provided then content type webhook will be disabled and no data from content type entries will be added.
            3.  **Select for Asset(s)**: Mark the checkbox if you want to add Asset(s) to Algolia Index.
                
                This option will add your assets' data to the Algolia Index on publishing. Similarly, this option can remove your data from the Algolia Index when unpublished or deleted from Contentstack.
                
                **Note:**
                
                -   By default, the **Select for Asset(s)** checkbox is selected.
                -   If this option is not selected, Asset(s) data will not be added to Algolia.
                
        6.  For existing users, a pop-up will appear on the **Configuration** screen while updating the app. Make sure to save the app to the latest settings, even if no changes are made.![Algolia-Configuration-Update-Alert](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c56f4d5045014bf/68ee9673bf9ee90c9d904a3b/Algolia-Configuration-Update-Alert.png)
    6.  After adding the configuration details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app location ([Full Page UI location](/docs/developer-hub/full-page-location)). You can use the toggle button to enable or disable it based on your requirements.![Algolia-Configuration-UI-Location](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta41c246a16135727/68ee966af3ff9ef982871139/Algolia-Configuration-UI-Location.png)
    8.  If the branch feature is enabled for your organization, navigate to the **Webhook** tab to configure and trigger it on the required branches.
        
        Inside the **Configure Webhook** section, you can select the following options under **Branch Scope**:
        
        1.  **All Branches:** If you want the webhook to trigger on all branches of the stack.
        2.  **Specific Branches:** If you want the webhook to trigger on a specific branches. You can add multiple branches.
            
            **Note:** When the webhook is triggered from the branch, Algolia's ObjectId value will have the branch uid appended at the end.
            
            ![Algolia-Configuration-Webhooks](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3e873656cdff794/68ee964c6bfd9328633fee82/Algolia-Configuration-Webhooks.png)
        
        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the Algolia app.
3.  ## Use the Algolia App within your Stack
    
    To use the Algolia app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the stack dashboard, click **Content Models** from the header, and click the **\+ New Content Type** button.![Algolia-Content-Models](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte77f217f6b0f69e8/68ee964b150a96155956b871/Algolia-Content-Models.png)
    2.  Create a new content type by adding relevant details as displayed below.![Algolia-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1659e25a23b66a3e/68ee966c08234819504e8685/Algolia-Content-Type.png)
    3.  In the **Content Type Builder** page, add the required fields, and click **Save** or **Save and Close** to save the content type.
    4.  Navigate to **Entries** from the header and click **\+ New Entry** to create an entry within the same content type.![Algolia-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt425ee64816a8be9c/68ee966b150a96969b56b876/Algolia-Sample-Entry.png)
    5.  **Save** and **Publish** your entry within the same environment which was configured during the app configuration in [step 2](#install-and-configure-the-algolia-app-in-marketplace).![Algolia-Sample-Entry-Publishing](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d293afe93b34e0b/68ee966b676c886a2ef81f1a/Algolia-Sample-Entry-Publishing.png)
        
        **Note:**
        
        -   Publish the entries only in the environment(s) you selected while configuring the Algolia app.
        -   When publishing **entries with references** in bulk, the processing time may vary based on the number of entries and the depth of references. Below are the approximate times observed for bulk publishing operations:
            
            -   **10,000 entries with references:** 1 hour 20 minutes
            -   **5,000 entries with references:** 41 minutes
            -   **3,000 entries with references:** 24 minutes
            
            These times are estimates and may differ depending on factors such as network speed, the complexity of referenced data, and your Algolia index configuration.
            
        
    6.  Log in to your [Algolia account](https://www.algolia.com/users/sign_in) and go to the **Index** section to view the published entry.![Algolia-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b85edcea064941a/68ee9f2b8f8c1ed7a79975b9/Algolia-Account.png)
        
        **Note:** If you unpublish or delete an entry on a specified environment, the app deletes the entry from Algolia's index.  
        If you delete a content type from your stack, the app deletes all the published entries of that content type which you added to Algolia from Algolia's index.
        
    
    ### Algolia as a Full Page App
    
    To view analytics in the Algolia app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the stack dashboard, click **Apps** from the header, and select the **Algolia** app.![Aloglia-Full-Page-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt861528a03df28b3f/68ee966bbd1d80219fe6f56b/Aloglia-Full-Page-App.png)
    2.  You can view the **Audit Log** within the Full page app. You can also filter logs by **All Logs**, **Success Logs**, or **Error Logs** to quickly identify the status of operations. This ensures full traceability and helps troubleshoot sync or indexing issues with ease.![Algolia-Full-Page-Audit-Log](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt667506c3829f4ef1/69d74376f8cbfd5bba48e114/Algolia-Full-Page-Audit-Log.png)
        
        **Note:** You can apply search for specific entries using **Entry UID** or **Title**.
        
        Under **Actions**, click the vertical ellipses corresponding to the record to view the following:
        
        ![Algolia-Full-Page-Audit-Log-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ef6b19e5719e213/68ee966bffa401b521eec40f/Algolia-Full-Page-Audit-Log-Options.png)
        -   **View Details**: Shows the call details that includes request payload, details, and response.
        -   **View Entry**: Redirects you to the corresponding entry within Contentstack, allowing you to quickly review or edit the content that triggered the log.
        -   **Retry**: Allows you to reattempt the failed sync operation.
            
            **Note:** The **Retry** option is not available for the Delete operation. If a delete action fails, you must first retrieve the entry from Trash and then retry the delete operation manually.
            
    3.  Click the **Algolia Search Results** tab to view insights into your search activity across different environments within Algolia.![Algolia-Full-Page-Search-Results](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf662a9aa1b2f86e0/68ee966c55fd27e3efd8c835/Algolia-Full-Page-Search-Results.png)
        
        Select the **Environment** from the dropdown menu. The available options correspond to the environments configured during app configuration in [step 2](#install-and-configure-the-algolia-app-in-marketplace).
        
        You can explore insights such as **Top Searches** and **Top searches with no results** at once:
        
        -   **Top Searches**: Displays the most frequently searched keywords by users. Each result shows the search term (**Result**), the number of times it was searched (**Count**), and the number of hits (**Hits**) indicating how many results matched the search.
        -   **Top searches with no results**: Lists search terms that returned no results. This helps identify missing or unindexed content in Algolia. Columns include the **Result**, **Count** (number of times searched), and **Filter Count** (number of filtered search
    
    **Note:** Each Algolia app has a limit of **10,000 requests** per month. Exceeding this limit will result in a 429 error. If you plan to perform bulk publishing or require assistance, contact the [support](mailto:support@contentstack.com) team.
