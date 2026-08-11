---
title: "Box Action"
description: "Use the Box action connector to fetch a file download URL for your Box cloud drive assets."
url: /agent-os/box-action
---

# Box Action

## Box Action

[Box](https://app.box.com/folder/0) is a cloud content management and file sharing service. The platform lets you store, share, collaborate on, and manage files and documents securely on the cloud.

The Box action connector lets you automate the file upload and generation of a file download URL for your Box cloud drive assets. You can use the generated URL and utilize it in any other automation action.

**Note:** The generated URL is valid only for **15 minutes**.

## Set up the Box Action

Perform the following steps to configure the Box action:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action step**, click the **Box** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5b67bc903f17131/66a263e5fef3ea42ee007dd9/Select_Connector.png)
4.  Under **Choose an Action** tab, select the **Get File URL** action.  
    ![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte341b021c034e39b/65df70e8ae62f7a1154beeb8/Select_Action.png)
5.  In the **Configure Action** tab, click **+ Add New Account** to add your Box account.
    
    ![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb84a24cf75ec4ce5/66a263e5e0326e0b1d3daf7d/Add_Account.png)
6.  For Box OAuth, provide the OAuth permissions for all the values by checking the boxes, and then click **Authorize**.![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2b5faac2d02e7dc5/65e18491eef4e37e111e71da/Box_Action_Authorize_Button.png)
7.  In the pop-up that appears, log into your Box account. Once done, click the **Grant access to Box** button.
8.  Provide an Account Name and then click **Save**. 
9.  In the **Select Folder** drop-down, select a folder within the #root folder to fetch the file URL.
    
    You can select nested folders created in your Box account.
    
    ![Select_Folder.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd2587e0db306a78/66a263e6e91a171084159407/Select_Folder.png)
10.  In the **Select File** drop-down, select the file to fetch its URL.
     
     ![Select_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte58211cb69f5393f/66a263e64252d531e1eba724/Select_File.png)
11.  Optionally, enable the **Show Optional Fields** toggle button to display the **File Version** field.
12.  In the **File Version** drop-down, select a file version to fetch the download URL of that version. Additionally, you can select the version from the **Suggested Data Element(s)** list. It fetches the most relevant element(s) configured in the previous step(s).![File_Version.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5c6f99cc6449dc8/66a263e57749f50adb3b1853/File_Version.png)
13.  Click the **Proceed** button.
14.  To execute and test the configured action, click the **Test Action** button.  
     ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6a634524b549d8f/65df70e855b8c67169a12740/Test_Action.png)
15.  On successful configuration, you can see the below output. Click the **Save and Exit** button.  
     ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8373a1d92ace922a/65df70e77c852667dc234c91/Save_Exit.png)

Additionally, you can use the [Box Trigger](/docs/agent-os/box-trigger) with the Box Connector to generate the file download URL. For example, select the “File Uploaded” event in the Box trigger and configure the Box action to fetch the file download URL.

This sets the **Box** action connector.
