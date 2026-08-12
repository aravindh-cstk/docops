---
title: "Constructor App Installation Guide"
description: "The Contentstack Marketplace Constructor app fetches product collections from your Constructor account into Contentstack entries."
url: /marketplace/constructor-io
---

# Constructor App Installation Guide

## Constructor App Installation Guide

Constructor is a product discovery platform developed specifically for enterprise e-commerce platforms. It optimizes customer experience across digital platforms with enhanced search results powered by machine learning and natural language processing.

With Marketplace, you can now easily install the Constructor app and use it within your stack to link your entries to the collections in your Constructor account.

## Prerequisites

-   [Constructor account](https://app.constructor.io/users/sign_in/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Constructor app within your stack.

## Steps for Execution

1.  [Retrieve your credentials from Constructor](#retrieve-your-credentials-from-constructor)
2.  [Create collections in Constructor](#create-collections-in-constructor)
3.  [Install and configure the Constructor app in Marketplace](#install-and-configure-the-constructor-app-in-marketplace)
4.  [Map and save entries from Contentstack to Constructor](#map-and-save-entries-from-contentstack-to-constructor)
5.  [Use the Constructor app within your Stack](#use-the-constructor-app-within-your-stack)

1.  ## Retrieve your Credentials from Constructor
    
    **Note:** We assume you already have a working Constructor account. If not, visit the official website and [sign up](https://constructor.io/demo-request/) for a plan.
    
    ### Generate API Token
    
    To generate the **API Token**, log in to your [Constructor account](https://app.constructor.io/users/sign_in) and follow the steps:
    
    1.  In the left navigation panel, click the **Integration** drop-down and select **API Integration**. To generate the API token, click the **New Token** button.![Constructor-Add-New-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65200eb14f7a09b3/68cd688b34cb6c981d1830dd/Constructor-Add-New-Token.png)
    2.  In the **New API Token** modal, read the **Security Disclaimer** carefully and click **Next**.![Constructor-API-Token-Security-Disclaimer](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb19821f1a24181e1/68cd688b7b2e157a41810803/Constructor-API-Token-Security-Disclaimer.png)
    3.  Fill up the **TOKEN DETAILS** by providing the **Token Name** and **Confirmation Token**. You can get the **Confirmation Token** by clicking **Send token to my email**. Copy the token from your email and paste it in the required textbox. After entering all the details, click **Generate**.![Constructor-API-Token-Generate](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba16f4cd4ab3b797/68cd688b769cd5fbf51cd58a/Constructor-API-Token-Generate.png)
    4.  The API Token is **displayed only once**. Ensure to copy it to clipboard using the “Copy” icon, and then click **Done**.![Constructor-API-Token-Generated](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6a1528cdc26d880/68cd688a0ca6a90b8c6f213e/Constructor-API-Token-Generated.png)
        
        **Note:** Convert the API token to Base64 format to use it during app configuration in [step 3](#install-and-configure-the-constructor-app-in-marketplace).
        
    
    ### Get API Key and Index Section Name
    
    To get the **API Key** and **Index Section Name**, log in to your [Constructor account](https://app.constructor.io/users/sign_in) and follow the steps:
    
    1.  In the left navigation panel, click the **Workspace** drop-down and select **Indexes**. You can view the **INDEX KEY** which is used as **API Key** in the Contentstack app configuration in [step 3](#install-and-configure-the-constructor-app-in-marketplace). Click the “Copy” icon to copy it to clipboard.![Constructor-API-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2a18a7e6c8c344e/68cd688cc51bab1f64efcbdf/Constructor-API-Key.png)
    2.  Under **Indexes**, you can get the **Index Section Name.** In the following screenshot, _Sample Integration_ is the Index name and _Sample Products_ is the Index Section Name.![Constructor-Index-Section-Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ed75d54723c348d/68cd688b9612057b05924cb7/Constructor-Index-Section-Name.png)
2.  ## Create Collections in Constructor
    
    In Constructor, you can create landing pages that are based on manual lists or automated rules of products by using Collections. This helps you to enhance search, browse, and product discovery experience.
    
    To create a collection in Constructor, log in to your [Constructor account](https://app.constructor.io/users/sign_in) and follow the steps:
    
    1.  In the left navigation panel, click the **Workspace** drop-down and select **Collections**. Now, select your **INDEX** from the dropdown and click the **Add new collection** button.![Constructor-Add-New-Collection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08bd567208b49eb2/68cd688b22a52f894c2704ac/Constructor-Add-New-Collection.png)
    2.  On the **Add a new collection** screen, provide a **Display name** for your collection and click **Create**.![Constructor-Collection-Create](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e07452e214ecb5b/68cd688c34cb6caffd1830e1/Constructor-Collection-Create.png)
        
        **Note:** The **ID** field gets filled automatically as you type the **Display name**. You can edit the ID if needed.
        
        Collection is created under your selected index.
        
        ![Constructor-Collection-Created](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt950afb630bf3540a/68cd688c0ca6a9921f6f2142/Constructor-Collection-Created.png)
    3.  You can add items to your collection in two ways:
        1.  **IMPORT ITEMS:** You can upload a CSV file or add item IDs manually by clicking the **Add Items** button. Additionally, you can view and manage them using the **View** button.
        2.  **ADD WITH CONDITIONS:** Click **Add** to set up conditions and add items dynamically. With the **View** button, you can view and manage the items. Once you have added all the items, click **Save**.
    
    For instance, you can view the collection named _Weekly Wines Special_. Here the condition is that the attribute _Country_ does _not_ belong with the option _Chile_.
    
    ![Constructor-Collection-Example](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a242299bfe77d87/68cd688cb762a866de9625ca/Constructor-Collection-Example.png)
    
    When you click the **View** button, the following items appear:
    
    ![Constructor-Collection-Example-Items](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54c75e70d665a626/68cd6ec32f541038718837e8/Constructor-Collection-Example-Items.jpg)
    
    Similarly, you can create more collections.
    
3.  ## Install and Configure the Constructor app in Marketplace
    
    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/), follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.
        
        ![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Constructor** app and click **Install**.![Constructor-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda5ab9743cc7d28b/68cbee1cb301c91d7ef22507/Constructor-App.png)
    4.  In the pop-up window, select the stack where you want to install the Constructor app, accept the **Terms of Service**, and click the **Authorize & Install** button.![Constructor-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94359f42bfc21115/68cbee1c4e149123c3a400b6/Constructor-App-Install.png)
    5.  On the **Configuration** screen, enter the **API Token**, **API Key**, and **Index Section Name** retrieved in [step 1](#retrieve-your-credentials-from-constructor), and then click **Finish**.![Constructor-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd4be72398400db4/68cbee1c66f84c70e433bed0/Constructor-Configuration.png)
        
        **Additional Resource:** If you want to save your published Contentstack entries in Constructor, then refer to the [Map and Save Entries from Contentstack to Constructor](#map-and-save-entries-from-contentstack-to-constructor) section.
        
    6.  After adding the configuration details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app location ([Custom Field Location](/docs/developer-hub/custom-field-location)). You can use the toggle button to enable or disable it based on your requirements.![Constructor-UI-Location](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt449b960fb71a3d5a/68cbf18fd483933fbb76bbbc/Constructor-UI-Location.png)
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
        
        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the Constructor app.
4.  ## Map and Save Entries from Contentstack to Constructor
    
    Data mapping aligns fields from one database with their corresponding fields in another, establishing a connection that links the two sources.
    
    ### Mapping Without Using the Mapper
    
    To save data in Constructor without using a mapper, your content type schema in Contentstack must match the Constructor schema. Add fields to your content type with UIDs that match the field names listed in the **BODY PARAMS** section of the [Create or replace items](https://docs.constructor.com/reference/v2-items-create-or-replace-items) document.
    
    **Note:** If you provide data that does not match the supported data types in Constructor fields, an error appears in the webhook logs and the published entry will not be saved.
    
    Your content type must include the **name** field, matching the Constructor's **name** field. If this field is missing, the entry data cannot be saved in the Constructor.
    
    **Warning:** The **item\_name** field UID is deprecated and renamed as **name**.
    
    ### Mapping Using the Mapper
    
    When your content type schema does not match the Constructor schema, map each field in your content type to the corresponding field in Constructor.
    
    To map and save data from your published Contentstack entries in Constructor, follow the steps:
    
    1.  On the **Configuration** screen, after adding the credentials in [step 3](#install-and-configure-the-constructor-app-in-marketplace), enable **Webhook** using the toggle button and click **Next**.![Constructor-Configuration-Webhook](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e54cc8fb0349720/68cbee2afd7cfe5a64b2f132/Constructor-Configuration-Webhook.png)
    2.  In the **Contentstack Fields & Mapper**, you can add multiple content types by clicking **\+ Content Type** to map fields between Contentstack and Constructor.![Constructor-Configuration-Add-Content-Types](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt734f0ee8c2663ce5/68cbee1c9fa9374557d2a305/Constructor-Configuration-Add-Content-Types.png)
    3.  In the **Select Content Type** modal, select the content types and click the **\+ Add Content Type(s)** button.![Constructor-Configuration-Add-Content-Types-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f2ae09d06d1837f/68cbee1ccd6aae20def82f25/Constructor-Configuration-Add-Content-Types-Modal.png)
        
        Content types are added to the configuration screen.
        
        ![Constructor-Configuration-Added-Content-Types](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f2eca0d8beda89a/68cbee1c4b32b4fb200d4311/Constructor-Configuration-Added-Content-Types.png)
        
        You can delete the content type by clicking the “Delete” icon.
        
        ![Constructor-Configuration-Content-Type-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefac37111d13ec7f/68cbee29769cd56a501c7e2f/Constructor-Configuration-Content-Type-Delete.png)
        
        In the **Confirm Deletion** modal, click the **Delete** button to finally delete the selected content type.
        
        ![Constructor-Configuration-Content-Type-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfed17bc83c451963/68cbee2948d33081f541cdf4/Constructor-Configuration-Content-Type-Delete-Modal.png)
    4.  Now, select the **Contentstack Environments** from the drop-down, and click **\+ Add Rule** to configure the **Mapping Rules**.![Constructor-Configuration-Add-Environment-Add-Rule](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2dcc440f35b76667/68cbee1c2f5410277287df92/Constructor-Configuration-Add-Environment-Add-Rule.png)
    5.  Select the field in the **Content Type Field Options**, choose the corresponding field in the **Constructor Field Options**, and then click the “Check” icon to add the rule.![Constructor-Configuration-Mapper-Fields-Check](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9386a95a98a3dd5b/68cbee2934cb6c265b17d9e5/Constructor-Configuration-Mapper-Fields-Check.png)
        
        **Note:**
        
        -   When you add a mapping rule, it is mandatory to map Contentstack fields to the Constructor's **name** field. The Contentstack entry data will not be saved in Constructor if the field is not mapped.
        -   The Constructor **item\_name** field is deprecated and renamed as **name**. New users can see the field name as **name**, but existing users can see **item\_name** until the app is updated.
        
    6.  You can also map nested or complex fields by clicking the **\+ New Field** option.![Constructor-Configuration-Mapper-Add-New-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c0e0e898f657a4d/68cbee29a17ed20c60c4a870/Constructor-Configuration-Mapper-Add-New-Field.png)
    7.  In the **Create New Content Type Field** modal, add the key in the **Content Type Field Path** textbox and click **Create and Apply** to add the field in the mapper.![Constructor-Configuration-Mapper-Add-New-Field-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd7dc3d84dbfdd8b/68d13edd0ca6a9ad1f6f278c/Constructor-Configuration-Mapper-Add-New-Field-Modal.png)
        
        **Tip:**
        
        -   While mapping nested fields, you must specify the object and its field using the dot (.) notation. For example, Object.age for accessing the age field within the object.
        -   While mapping arrays, use indexing. For example, Array\[1\] for accessing the second value of an array.
        -   You can use the above rules to create mapping rules for complex structures that include objects and arrays.
        
        **Note:** Similarly, you can also add new fields within Constructor by navigating to **Workspace** > **Indexes**. Select your index and click the corresponding **Manage Searchability & Displayability** option, and then click the **\+ Add New** button.
        
        Content types are configured.
        
        ![Constructor-Configuration-Content-Type-Configured](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3fa2cda62c46110e/68cbee1c0ca6a937466ec9d5/Constructor-Configuration-Content-Type-Configured.png)
    8.  You can edit or delete the rule by clicking the “Edit” or “Delete” icon.![Constructor-Configuration-Mapper-Field-Edit-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf396ac9acf1263c/68cbee2934cb6c866417d9e1/Constructor-Configuration-Mapper-Field-Edit-Delete.png)
        
        **Warning:** Unpublishing or deleting an entry of the specified content type in Contentstack also removes its saved data from Constructor.
        
    9.  After successfully setting up the fields and mapper, click **Finish**.![Constructor-Configuration-With-Mapper-Finish](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ebb5ecf8751bbee/68cbee297b2e158e4680af66/Constructor-Configuration-With-Mapper-Finish.png)
    10.  Click **Reset Configuration** to reset the credentials and mapping.![Constructor-Configuration-Reset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf95b3c662c0e9555/68cbee297ca471756e132faa/Constructor-Configuration-Reset.png)
    11.  Click **Save** to apply these configurations and start publishing entries from Contentstack to store them in Constructor.
         
         You can view your entry in the Constructor account.![Constructor-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd86416ebfb2731e/68d14de0930d0161daa6b423/Constructor-Entry.png)
         
         To view the entry metadata, click the "Info" icon.
         
         ![Constructor-Entry-Info-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f38231e10efe8c0/68d14de0cda81a3736a944a7/Constructor-Entry-Info-Icon.png)
         
         Metadata is displayed on the screen.
         
         ![Constructor-Entry-Metadata](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfba5d3f099d49907/68d14de0dfcdb66245b4f2bc/Constructor-Entry-Metadata.png)
         
         You can track the status of published, unpublished, or deleted entries in the webhook logs. The webhook logs also confirm if your credentials were saved successfully.
         
         ![Consturctor-Webhooks](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta952b84a82bc17a0/648b27dd75c2ae15a10602e9/Consturctor-io-Webhooks.png)
5.  ## Use the Constructor App within your Stack
    
    To use the Constructor app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:![Constructor-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb11ba8234de81382/68cbee35dfcdb66c53b493a7/Constructor-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension or App**, select **Constructor** and click **Proceed**.![Constructor-Add-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f41d74668d30999/68cbee1bd76e445b65b71071/Constructor-Add-In-Custom-Field.png)
        
        This adds Constructor in the custom field.
        
        ![Constructor-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2a23124f5c017ae/68cbee1cd76e44cb68b71075/Constructor-Added-In-Custom-Field.png)
    5.  After adding the app, click **Save** or **Save and Close** to save your changes.
    6.  In the left navigation panel, navigate to the **Entries** page and click **\+ New Entry** to [create a new entry](/docs/headless-cms/create-an-entry) for the above content type, and then click **Proceed**.
        
        You can see the Constructor custom fields on your entry page.
        
        ![Constructor-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt120f4b5a649546ab/68d13d534b32b446ba0d9f39/Constructor-Sample-Entry.png)
    7.  Under the **Collections** custom field, select the collection from your Constructor account and link them to your entry.![Constructor-Sample-Entry-Add-Collection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt742dc4854fba5df4/68d13d78d4859e5e6631d121/Constructor-Sample-Entry-Add-Collection.png)
        
        The collection you selected is linked to your entry.
        
        ![Constructor-Sample-Entry-Added-Collection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2eaf011cd8dc3914/68d13d6c0263bbd7e45ce6fe/Constructor-Sample-Entry-Added-Collection.png)
    8.  You can now **Save** and **Publish** your entry.
