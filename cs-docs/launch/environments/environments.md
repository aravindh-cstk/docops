---
title: "Environments"
description: "Learn how to create, manage, and deploy environments for your web projects effectively in Contentstack Launch."
url: /launch/environments
---

# Environments

## Launch Environments

Environments allow you to deploy and host different versions of your project independently.

Launch allows you to set up multiple environments for a project, which you can configure to match your development style. Each environment is deployed and hosted on a unique URL. Auto-deploy is enabled by default for every environment.

A default environment is created with every project import. You can configure the environment as per your needs for further usage.

This document guides you through the process of creating, configuring, and deleting an environment in Launch.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to create an environment using GitHub or a file upload.
    
-   How to configure which columns appear in the environments list.
    
-   How to edit an environment's name and branch.
    
-   How to delete an environment.
    

## Create an Environment

1.  Click the **project card** to open your project from the Launch landing page.
2.  In the Environments screen, click the **\+ New Environment** button to add a new environment.
    
    ![Launch_New_Environmentpng.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01657feff8c03677/69d7359f70b17c5bd2631c67/Launch_New_Environmentpng.png)
    
3.  In the **Create New Environment** modal, fill in the following:
    1.  If you choose GitHub to deploy your project, follow the steps below:
        1.  Enter an environment name.
        2.  Select a branch from the **Git Branch** dropdown.
        3.  The fields in the Build and Output Settings section get auto-populated based on the detected framework. You can always change the Framework Preset and the build and output commands as per your requirement.![Launch-Create-Env-Git-BuildandOutput.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59fada371ac34bcb/643fc3adb1f4db27b0204145/Launch-Create-Env-Git-BuildandOutput.png)
            
            If you choose Other or Angular in the Framework Preset drop-down, a Server Command field displays as follows:
            
            ![Launch_Environments_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am806556d63eed521c/ea8427d7bcbf3650263c3184/Launch_Environments_BuildOutput.png?locale=en-us)
            
            This field allows you to deploy the selected framework as Server-Side Rendered. Leaving the Server Command field as blank deploys the framework as CSR (Client-Side Rendered).
            
            Select a response mode:
            
            -   **Streaming**: Delivers response chunks in real time as they are generated.
            -   **Buffered**: Displays output only after the entire response has been generated.
            
            **Note:** Buffered is selected by default.
            
        4.  In the Environment Variables field, perform the following:
            -   If you want to [auto-populate environment variables from a linked stack](/docs/launch/auto-populate-environment-variables-from-a-linked-stack/), select a stack and click the **Import Variables** button.
            -   Click the **\+ Add Environment Variable** button to manually add environment variable(s).![Launch_Environments_Add_Env_Var_KeyVal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4884ccc58c2b13b2/64f1b2db93225e82a042faa0/Launch_Environments_Add_Env_Var_KeyVal.png)
        5.  Click the **Create** button.
            
            You have successfully created an environment. ![Launch_project_Created.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4eb780e3cb4efd5/69d735a0f05f0ee041542c2a/Launch_project_Created.png)
            
    2.  If you choose to upload a file to deploy your project, follow the steps below:
        1.  Enter an environment name.
        2.  Select a preset from the **Framework Preset** dropdown. The other fields in the Build and Output Settings section get auto-populated based on the selected preset. You can always change the Framework Preset and the build and output commands as per your requirement.![Launch-Create-Env-File-BuildandOutput.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf82bbcb2d2c6e665/643fc3ad9074ca2928c7a12b/Launch-Create-Env-File-BuildandOutput.png)
        3.  In the Environment Variables field, perform the following:
            -   If you want to [auto-populate environment variables from a linked stack](/docs/launch/auto-populate-environment-variables-from-a-linked-stack/), select a stack and click the **Import Variables** button.
            -   Click the **\+ Add Environment Variable** button to manually add environment variable(s).![Launch_Environments_Add_Env_Var_KeyVal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4884ccc58c2b13b2/64f1b2db93225e82a042faa0/Launch_Environments_Add_Env_Var_KeyVal.png)
        4.  The Upload a file field allows you to browse and upload a new file. Click **browse to upload** to upload a project file.  
            You can also re-upload a different file after uploading a file. ![Launch-Create-Env-File-UploadFile.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e5e9a3bc26db3aa/643fc3ad3e745b11edf82044/Launch-Create-Env-File-UploadFile.png)
        5.  Click the **Create** button.
            
            You have successfully created an environment.
            
            ![Launch_project_Created.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4eb780e3cb4efd5/69d735a0f05f0ee041542c2a/Launch_project_Created.png)

## Configure the Environments List Table

By default, the Auto Deploy, Response Mode, and Created At columns are disabled in the Environments list table. To enable, follow the steps below:

1.  Click the **Table Settings** icon and then click **Manage columns**.
2.  Mark the **Auto Deploy**, **Response Mode**, and **Created At** checkboxes to display the Auto Deploy, Response Mode, and Created At columns respectively.
    
    ![Launch_Environments_ManageColumns.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd55458237c5ff6a6/1a22e8592e0dc6e669eda2a5/Launch_Environments_ManageColumns.png?locale=en-us)
    

A password-protected environment is represented with a **lock** icon next to it as shown in the screenshot below:

![Launch_passoword_protected.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt317cd203e9c31712/69d735a0e583e6519ff06c4d/Launch_passoword_protected.png)

## Configure an Environment

-   You can change the environment name and branch from **Settings**.
    1.  In the Environments screen, go to the **environment** where your project is created, click the **ellipses** under Actions, and then click **Settings** to go to Environment Settings.![Launch_project_action_settings.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdef76897d6b4cd1a/69d735a0f1c0f66b2ec272bd/Launch_project_action_settings.png)
    2.  Edit the details in the **Environment Name** and **Git Branch** fields.![Launch_Venus_2_Environments_Name_and_Branch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9efafeb2d0b0dc25/65c1b147c2586471c408ae40/Launch_Venus_2_Environments_Name_and_Branch.png)
        
        **Note:** When you import a project by uploading a file, the Git Branch field in the General settings is not available.
        
    3.  Click the **Save Environment Details** button.
-   You can configure environments to use deploy hooks, custom domains, and environment variables.
-   You can control the deployment behavior by [toggling auto-deployments](/docs/launch/disable-automatic-redeployment#disable-automatic-redeployment).
-   You can protect an environment using a password.

**Note:** The auto-deployment feature is unavailable when you import a project by uploading a file.

## Delete an Environment

Launch allows you to delete an environment that you no longer require.

Follow the steps below to delete an environment:

1.  In the Environments screen, go to the **environment** you want to delete, click the **ellipses** under Actions, and then click **Delete**.
    
    ![Launch_project_action_settings_delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f9b9a8a3af9f5d0/69d735a0fc0953281a6c85df/Launch_project_action_settings_delete.png)
    
    A modal is displayed asking for confirmation to delete the environment.
    
2.  Enter DELETE and then click the **Yes, Delete** button.
    
    ![Launch_Delete_Env.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ab535960d3e38ba/696472245ba7a50008f2e8e4/Launch_Delete_Env.png)
    
    **Warning:** This action will remove all domains associated with this environment. After the removal, your Contentstack domains will still be available for use.
    

Alternatively, you can follow the steps below to delete an environment:

1.  In the Environments screen, go to the **environment** you want to delete, click the **ellipses** under Actions, and then click **Settings** to go to Environment Settings.![Launch_project_action_settings.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdef76897d6b4cd1a/69d735a0f1c0f66b2ec272bd/Launch_project_action_settings.png)
2.  In Settings > Environments > General > Delete Environment, click the **Delete Environment** button.
    
    You will see a warning message displayed above the button.
    
    ![Launch_Create_GitHub_Venus2_Env_Settings_DeleteEnv.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc53d0713cab13650/65c1b147815b235faabb3668/Launch_Create_GitHub_Venus2_Env_Settings_DeleteEnv.png)
    
    A modal is displayed asking for confirmation to delete the environment.
    
3.  Enter DELETE and then click the **Yes, Delete** button.
    
    ![Launch_Delete_Env.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ab535960d3e38ba/696472245ba7a50008f2e8e4/Launch_Delete_Env.png)
    
    **Note:** On deleting an environment, its corresponding deployments also get deleted.
