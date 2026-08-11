---
title: "Box Trigger"
description: "Use the Box trigger connector to automate the file upload event in your Box cloud drive."
url: /agent-os/box-trigger
---

# Box Trigger

## Box Trigger

[Box](https://app.box.com/folder/0) is a cloud content management and file sharing service. The platform lets you store, share, collaborate on, and manage files and documents securely on the cloud.

The Automate Box trigger lets you add Box-specific trigger events, such as **File Uploaded**, in your automation.

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert Changes** button.

## Set up the Box Trigger

Perform the following steps to set up the Box trigger:

1.  Click **Configure Trigger** from the left navigation panel.
2.  Within the **Configure Trigger step**, click the **Box** connector.![Select_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8228d5cd16bc825e/66a2570029dc3c94134aa315/Select_Trigger.png)
3.  Under **Choose Trigger** tab, select the **Box** trigger.   
    ![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4a5da665b78b3e2/65df6be531aca1acff7ef1ab/Select_Action.png)
4.  In the **Configure Trigger** tab, click **\+ Add New Account** to add your Box account.
    
    ![Add_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79c26c0867aa931b/66a258154252d525eaeba5a9/Add_Account.png)
5.  For Box OAuth, provide the OAuth permissions for all the values by checking the boxes, and click **Authorize**.![Box_Trigger_Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77ac831cbe8accae/65e1a23c375999e15d70c3da/Box_Trigger_Authorize_Button.png)
6.  In the pop-up that appears, log into your Box account. Once done, click the **Grant access to Box** button.
7.  Provide an Account Name and then click **Save**.
8.  **Select an Event** from the drop-down. In the **Select Folder** drop-down, select a folder to invoke the trigger.
    
    You can select nested folders created in your Box account.
    
    **Note:** You **must** create a new folder within your Box cloud drive, as the #root folder cannot be selected for a trigger. Additionally, you can **only** assign a **single** folder to a trigger.
    
    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08272b35556411e8/66a2570002bf2714873b9f57/Select_Fields.png)
9.  Click the **Proceed** button.
10.  To execute and test the configured trigger, click the **Test Trigger** button.  
     ![Test_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdbeec94fa9f4f9b0/65df6be52568ef32436cb733/Test_Trigger.png)
11.  On successful configuration, you can see the below output. Click the **Save and Exit** button.  
     ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5d5588c924b3e64/65df6be511cd1ddb59a19c3d/Save_Exit.png)

Additionally, you can use the Box trigger with the [Box Connector](/docs/agent-os/box-action) to generate the file download URL. For example, select the “File Uploaded” event in the Box trigger and configure the Box action to fetch the file download URL.

This sets the **Box** trigger connector.
