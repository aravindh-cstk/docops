---
title: "Constructor"
description: "Constructor"
url: /agent-os/constructor
---

# Constructor

## Constructor

The Constructor connector in Contentstack's Agent OS enables e-commerce platforms to enhance their product search capabilities. This action connector allows you to store product details of your e-commerce website in an organized manner for faster search results. Additionally, it allows you to delete product details when needed, ensuring efficient data management.

## Prerequisites

To use the Constructor connector, you first need to connect your [Constructor account](https://app.constructor.io/users/sign_in) using the following steps:

1.  [Log in to your Contentstack account](https://www.contentstack.com/login) and click **Automations** in the top navigation panel.
2.  Select your project and then the automation.
3.  Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
4.  Within the **Choose Connector**, click the **Constructor** connector. ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteee801dce07ac524/67ab1582d4104ee37f5d84b6/Select_Connector.png)
5.  Under **Choose an Action**, select any one action from the list. Here, we are selecting the **Index an Entry** action.![Index_an_Entry_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec7ad945802aa856/67ab157a286df075a1f3546c/Index_an_Entry_Action.png)
6.  In the **Configure Action** section, click **\+ Add New Account** to add your Constructor account.![Add_Account_Inde.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e814db0af53b956/67ab157aefe40ed0ed8f5b4c/Add_Account_Inde.png)
7.  In the **Authorize** modal, enter the API Token and Key.
    
    To generate the API Token and Key, log in to the Constructor dashboard and perform the following steps:
    
    1.  From the left navigation, click the **Integration** tab.
    2.  Under the **API** **Integration** section, click **New** **Token**. ![API_Token.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc77fdb7a3ac5b1f5/67ab157ad15087d8a75254b8/API_Token.png)
    3.  Click the **Workspace** tab in the left navigation.
    4.  Under the **Indexes** section, copy the **INDEX** **KEY** of the index to which you want to add or delete the data. ![Index_Key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a2fc25d16414bb6/67ab157aefe40e1c258f5b50/Index_Key.png)
        
        **Note:** Refer to the [Authentication](https://docs.constructor.com/reference/main-authentication) document for more details.
        
8.  Click the **Authorize** button. ![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6152c94924d940d0/67ab157a6a26d6b34f53fe3f/Authorize_Account.png)

This sets up your Constructor account for the Constructor connector.

## Set up the Constructor Connector

Perform the following steps to set up the Constructor connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Constructor** connector.
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteee801dce07ac524/67ab1582d4104ee37f5d84b6/Select_Connector.png)
4.  Under **Choose an Action**, you will see the actions: **Index an Entry** and **Delete an Entry**.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e0c90c264915b85/67ab1581e134772f15ed8a3e/Select_Actions.png)

Once done, you can start setting up your Google Vertex connector.

### Index an Entry

The **Index an Entry** action in the Constructor connector allows you to add product details in your e-commerce website in an organized manner. This action enhances the overall search experience, making it easier for customers to find relevant products quickly.

1.  Under **Choose an Action** tab, select the **Index an Entry** action.
2.  On the **Index an Entry Configure Action** page, enter the details given below:
    -   Click **\+ Add New Account** button to connect your Constructor account as shown in the [Prerequisites](#prerequisites) step.
    -   In the **Body** section, add the product details such as **id, name, data, and URL**.
        
        **Note:** You must define the mandatory parameters - _id_ and _name_, in your JSON array. Refer to the [Items](https://docs.constructor.com/reference/catalog-management-items) document for more details on the pre-defined parameters.
        
        ![Body_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt63568a1665673e67/67ab157a61b3d26c070ebe64/Body_Index.png)
    -   Optionally, enable the **Show Optional Fields** toggle button to display the **Index Section**, and the **Email** **Address** fields.
        
        In the **Index** **Section** field, select the specific section within an index where you want to add the entry item. Additionally, you can specify an **Email** **Address** to notify a user in case the index update fails.
        
        **Note:** You can specify any index section and add the data.
        
        ![Show_Optional_Fields_Index_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt154043388ac6ca4b/67ab1581254c9b6d65ea875d/Show_Optional_Fields_Index_Entry.png)
3.  Click the **Proceed** button.
4.  Click the **Test Action** button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcc162c524347d5a/67ab15810f97a22d5f33cf04/Test_Action.png)
5.  Click the **Save and Exit** button. ![Save_Exit_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted1f5226c2624fb2/67ab1581d1508731085254bc/Save_Exit_Index.png)
6.  To view the added product details, navigate to the Constructor dashboard and click the **Products** section.![Output_Index.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a68405438837f2f/67ab158161b3d2335d0ebe68/Output_Index.png)

### Delete an Entry

The **Delete** **an Entry** action in the Constructor connector allows you to remove product details from your e-commerce website's index. This ensures that outdated or irrelevant product information is no longer accessible in search results, keeping your product catalog up to date.

By deleting an entry, you maintain accurate and efficient data management for an optimized search experience.

1.  Under **Choose an Action** tab, select the **Delete an Entry** action.
2.  On the **Delete an Entry Configure Action** page, enter the details given below:
    -   Click **\+ Add New Account** button to connect your Constructor account as shown in the [Prerequisites](#prerequisites) step.
    -   In the **Body** section, add the product details such as id, name, data, and URL that you want to delete from the Constructor index.
        
        **Note:** You must define the mandatory parameter - _id_ in your JSON array. Refer to the [Items](https://docs.constructor.com/reference/catalog-management-items) document for more details on the pre-defined parameters.
        
        ![Body_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82a48ac201054567/67ab157ad3065668e2464395/Body_Delete.png)
    -   Optionally, enable the **Show Optional Fields** toggle button to display the **Index** **Section**, and the **Email Address** fields.
        
        In the **Index** **Section** field, select the specific section within an index from which you want to delete the entry item. Additionally, you can specify an **Email** **Address** to notify a user if the index update fails.
        
        ![Show_Optional_Fields_Delete_Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e0112b857bb475f/67ab1581890f91161351a66c/Show_Optional_Fields_Delete_Entry.png)
3.  Click the **Proceed** button.
4.  Click the **Test Action** button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcc162c524347d5a/67ab15810f97a22d5f33cf04/Test_Action.png)
5.  Click the **Save and Exit** button. ![Save_Exit_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb8d9ceec5c8cde86/67ab158248089869eccb5769/Save_Exit_Delete.png)
6.  To view the deleted product details, navigate to the Constructor dashboard and click the **Products** section.

This sets up the **Constructor** connector.
