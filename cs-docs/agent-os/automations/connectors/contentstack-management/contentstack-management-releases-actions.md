---
title: "Contentstack Management - Releases Actions"
description: "Use the Contentstack Management Releases actions to automate releases based operations.
"
url: /agent-os/contentstack-management-releases-actions
---

# Contentstack Management - Releases Actions

## Contentstack Management - Releases Actions

A [Release](/docs/headless-cms/about-releases) comprises entries and assets that need to be deployed at the same time, either in a published or unpublished state, to a designated environment. You can perform release based operations using the Contentstack Management Releases actions.

![Releasae.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e9aa6c7ef4f9afe/6601ade2bdfec36625582a85/Releasae.png)

Let’s look at each of these in detail.

## Add Items to a Release

This action lets you add multiple items to a release.

1.  Under **Choose an Action** tab, select the **Add Items to a Release** action.
2.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, **Branch**, and **Release** from the **Lookup** list. Provide your item data in the **Release Item Data** field.
    
    **Note:** Provide your entry data as per the schema in JSON format only. Both entries and assets can be added to the release. In case of assets, the value for the content\_type\_uid key should be built\_io\_upload.
    
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb61cbe4a8de8b03e/647050de14eef648a3882e0a/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the branch details by clicking the **Include branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb2b67f6ee7bb7b4/647050ddaeb2dbc55c117be3/Show_Optional_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
7.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Clcik_the_Save_And_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf665b043b810f79f/647050ddce9cf9c09a3765d3/Clcik_the_Save_And_Exit_Button.png)

## Clone a Release

This action lets you create a copy of a release.

1.  Under **Choose an Action** tab, select the **Clone a Release** action.
2.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.  
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8025ab81a50fe24/647056fece9cf9bedf3765ea/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  Provide a **Release** **Name** and a **Release Description** for the release to be created.  
    ![Select_Release_Name_And_Description](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c667b4775afa2b6/647056fd14eef6139e882e1e/Select_Release_Name_And_Description.png)
5.  **\[Optional\]** Enable the **Show optional fields** toggle button to display the branch details by clicking the **Include branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf48d645def024498/6470570a00c0b38678e70166/Show_Optional_Fields.png)
6.  Once done, click **Proceed**.
7.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
8.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Cliik_the_Save_And_Exit_Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5129a6f201cd77a0/647056fd3f34da82227b51c9/Clcik_the_Save_And_Exit_Button.png)

## Create a Release

This action lets you create a release.

1.  Under **Choose an Action** tab, select the **Create a Release** action.
2.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, **Release** **Name**, **Release** **Description**, and **Branch** from the **Lookup** list.  
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt659e9c76874175e3/64705b13fa576bfbf4edfff8/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the branch details by clicking the **Include branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c9a4b486d3c3a55/64705b13fa576bbe7bedfffc/Show_Optional_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
7.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_And_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3355fcd3bbf9139b/64705b13ae5aa213b74ca996/Save_And_Exit.png)

## Delete Items from a Release

This action lets you delete multiple items from a release.

1.  Under **Choose an Action** tab, select the **Delete Items from a Release** action.
2.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, **Branch**, and **Release** from the **Lookup** list. Provide your item data in the **Release Item Data** field.
    
    **Note:** Provide your entry data as per the schema in JSON format only.
    
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc71b0e6c303d6359/64705e9873167998db6b4cd6/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the branch details by clicking the **Include branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdee7cb16387296b4/64705e98ce9cf95081376605/Show_Optional_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
7.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_And_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltebda7a0fea8cd6d3/64705e98f6df4f1cccb4fc3e/Save_And_exit.png)

## Deploy a Release

This action lets you deploy a release to an environment.

1.  Under **Choose an Action** tab, select the **Deploy a Release** action.
2.  On the **Deploy a Release Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
    2.  Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.  
        ![Select_fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd578a7311906b94e/6601a884cddae062ccb00fbf/Select_fields.png)
        
        **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
        
    3.  Select the **Environment(s)** to deploy the release from the **Lookup** list.  
        ![Select_Environment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc121a71a4a5a292/6601a8846f7fa70686ead1b0/Select_Environment.png)
    4.  **\[Optional\]** Enable the **Show Optional fields** toggle button to display the **Publish Schedule** field to schedule the deployment of the release.  
        
        **Note:** The release will be published immediately if the Publish Schedule field is empty.
        
        ![Publish_Schedule.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd87285e10fb725b/6601a884cf50d9844217b9b1/Publish_Schedule.png)
3.  Once done, click **Proceed**.
4.  Click **Test Action** to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20934ae3909b8b48/6601a8846f7fa75ea5ead1ac/Test_Action.png)
5.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb55a5d4bc8b075b/6601a8840061c731271030d1/Save_Exit.png)

## Get All Items in a Release

This action fetches all the items present in a release.

1.  Under **Choose an Action** tab, select the **Get All Items in a Release** action.
2.  Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.  
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb10930e9720341d8/64707dfcff5607e519dbd8d8/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Locale**. You can also include the branch details by clicking the **Include** **branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba7bb0c72c0f037d/64707dfd08523cebef2e5bef/Show_Optional_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
7.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2bb16e18066f88c/64707dfd86bda528d852fce8/Save_Exit.png)

## Get All Releases

This action fetches all the releases present in a stack.

1.  Under **Choose an Action** tab, select the **Get All Releases** action.
2.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, and **Branch** from the **Lookup** list. Click the checkboxes for **Include Count** and **Include count of release items** to fetch the release details.  
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20930ada722cba55/649964d47ad988eb4531c983/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the **Limit Release**, and **Skip Release** fields. You can also include the branch details by clicking the **Include** **branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta230189f9fedc736/649964d4fcb6fd0e8e5aba7b/Show_Optional_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
7.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fec92285215f3c3/64707ffadfafe5a4f304991a/Save_Exit.png)

## Get a Single Release

This action fetches the details of a single release.

1.  Under **Choose an Action** tab, select the **Get a Single Release** action.
2.  Click **\+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account](/docs/agent-os/contentstack-management#connect-your-contentstack-account) step.
3.  Select a **Stack**, **Branch**, and **Release** from the **Lookup** list.  
    ![Select_Different_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1d76163bfe8f736/647081d0133eefd177498d2b/Select_Different_Fields.png)
    
    **Note:** By default, the **main** branch is selected (even if the **Branch** field is empty).
    
4.  **\[Optional\]** Enable the **Show Optional Fields** toggle button to display the branch details by clicking the **Include** **branch** checkbox.  
    ![Show_Optional_Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e0ac5804f526e98/647081d0ff56077fa1dbd936/Show_Optional_Fields.png)
5.  Once done, click **Proceed**.
6.  Click **Test Action** to test the configured action.  
    ![Test_Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb69026247ef74428/63d94b7abbcc27228d8e04a0/Test-Action.png)
7.  The output will be shown as follows. Click the **Save and Exit** button.  
    ![Save_Exit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt830eb57d6dbebdd2/647081d0f6df4fc1dcb4fd95/Save_Exit.png)
