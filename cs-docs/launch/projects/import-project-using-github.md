---
title: "Create a Project Using GitHub"
description: "Set up a Contentstack Launch project using GitHub in Contentstack for seamless deployment and version control in minutes."
url: /launch/import-project-using-github
---

# Create a Project Using GitHub

## Create a Project Using GitHub

Launch lets you connect your GitHub account and access the repositories while creating projects. You must first connect your GitHub account to Launch to create projects using your GitHub repositories.

This document guides you through the process of connecting your GitHub account and creating a project in Launch using the GitHub repositories.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to connect a GitHub account to Launch.
    
-   How to configure repository, branch, build, and environment settings for a project.
    
-   How to deploy a project from a GitHub repository.
    
-   How to delete a project.
    
-   How to repair a broken GitHub connection.
    

## Connect your GitHub Account to Launch and Deploy a Project

1.  Click the **Launch** option from the dashboard, as shown below.![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
2.  Click **\+ New Project**.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
3.  From the **Create New Project** modal, click **Import from a Git Repository**.
    
    ![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)
    
4.  Click **Connect Account** in the GitHub card.
    
    ![Launch-RepairGitHub-ConnectAccount.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86c977d661304a32/66b9d798acbe347bd4bae5fa/Launch-RepairGitHub-ConnectAccount.png)
    
    A pop-up will open with connection details.
    
5.  Enter the login credentials of your GitHub account.
    
    ![Launch-Sign-In.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
    
6.  Select the option to choose **All repositories** or **Only select repositories,** and then click the **Save** button.
    
    **Warning:** Only GitHub users with the [**Owner**](/docs/administration/about-administration-roles#organization-owner) or [**Admin**](/docs/administration/about-administration-roles#organization-admin) role in the organization can provide access to repositories.
    
    ![Launch_New_Repository_Access_SS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4821228ea208a34/645b412eaf653fc45cd4764d/Launch_New_Repository_Access_SS.png)
    
    **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting All repositories.
    
    ![Launch-RepairGitHub-Install_Authorize (1).png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt96b885220c7f6159/66b9d7988f5ce7f1e9dd968a/Launch-RepairGitHub-Install_Authorize_(1).png)
    
    The **Create New Project** modal appears with the deployment steps.
    
    Now you can either proceed with the deployment steps or click **Cancel** to view the GitHub connection you just created. 
    
    ![Launch-RepairGitHub-ConnectedSuccessfully.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0b7cb575a57ee0a/66b9d798d5a434148ca1e4f5/Launch-RepairGitHub-ConnectedSuccessfully.png)
    
    GitHub displays a Connected tag on successful connection to Launch in the Create New Project modal.
    
    **Note:** If you encounter an error with your GitHub connection, follow the steps in the [Troubleshooting](#troubleshooting) section of this guide to repair it.
    
7.  If you selected Cancel in the previous step, click **GitHub** to proceed with the deployment steps.
8.  Fill in the following details to deploy your project in Launch.
    1.  **Repository** (Mandatory): All repositories from your GitHub organization are listed in the **Repository** dropdown.
        -   Click the **Select repository** dropdown.![Launch-GitHub-SelectRepoDropdownIcon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt320ece1894655285/645cde3e6ff7c061152bb93f/Launch-GitHub-SelectRepoDropdownIcon.png)
            
            **Note:** The repositories listed depend on the configuration you choose while installing the app.
            
        -   Select the repository with which you want to create a project.
    2.  **Git Branch** (Mandatory): Once a repository is selected, the **Git Branch** drop-down populates with the repository’s default branch. The **Detected framework** section detects and displays the supported framework based on the GitHub repository you selected.
        -   Select a branch from the dropdown to select a different branch.![Launch-GitHub-GitBranch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacedb1ccde58111e/645cde3d265f7a73a66b8bc4/Launch-GitHub-GitBranch.png)
    3.  **Project Name** (Mandatory): The project name is auto-populated based on the repository you selected.
        -   If you want to use a different project name, enter a project name without exceeding 200 characters.
    4.  **Environment Name** (Mandatory)**:** By default, the environment name is populated as Default. You can change the environment name as per your requirement.![Launch_Create_Proj_Using_GitHub_CreateNewProj_Modal_Env_Proj.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38dbc8891caa48bc/64cd0d522b0596c4a0c7e60a/Launch_Create_Proj_Using_GitHub_CreateNewProj_Modal_Env_Proj.png)
    5.  **Build and Output Settings** (Mandatory): The fields in this section get populated based on the detected framework.
        
        -   **Framework Preset**(Mandatory)**:** Framework of the selected project.
        -   **Build Command** (Mandatory)**:** Command to build the project.
        -   **Output Directory** (Mandatory)**:** Directory path where the project’s build output files get stored.
        
        Select a response mode:
        
        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.
        
        **Note:** Buffered is selected by default.
        
        ![Launch_NextJS_QSGuide_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am542da3668210fca3/81ba42a5e35d0eb5d1a2ac48/Launch_NextJS_QSGuide_BuildOutput.png?locale=en-us)
    6.  **Environment Variables** (Optional)
        -   Enter the **key** and **value** of your environment variables, in the **Key Value Edit** section.
        -   You can also add the key-value pairs in bulk in the **Bulk Edit** section.
        -   Click the **\+ Add Environment Variable** button to add more environment variables.![Launch_Env_Variables_NextJS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt33b66b23d2fac4d6/69f2bb4849f6cea3727465f2/Launch_Env_Variables_NextJS.png)
9.  Once all the fields are filled with appropriate values, click the **Deploy** button.

You have successfully deployed a project!

![Launch-CreateProjGit-Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0120bfdb66cb09b8/6604f09eb4ed5d03ac3685a0/Launch-CreateProjGit-Deployment.png)

## Delete the Project

1.  Click the **Settings** icon.
2.  In the **General** section, click the **Delete Project** button under **Delete Project**.![Launch_CreateProjGit_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa908d5c870c006e/6604f09e29bd6771e122f541/Launch_CreateProjGit_Delete.png)
3.  Enter DELETE and then click the **Yes, Delete** button.![Launch_Delete_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59d5f79de9807754/69647224e485f400086064d1/Launch_Delete_Project.png)
    
    **Warning:** This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.
    

This deletes your project successfully.

## Troubleshooting

If you are experiencing connection issues or errors with your GitHub integration, follow the steps below to troubleshoot the problem based on the specific error encountered.

1.  In the **Create New Project** modal, click the **ellipses** in the GitHub card, and click **Disconnect GitHub**. ![Launch_RepairGitHub_Connect_Disconnect.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d73d11dbfe9827c/66ed1516f4d6ab5d076d3b40/Launch_RepairGitHub_Connect_Disconnect.png)
2.  Click [here](https://github.com/settings/installations) to navigate to the **Applications** page in GitHub and click **Configure** next to the app that must be uninstalled. ![Launch_RepairGitHub_Connect_Applications.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea6d62808fd544e7/66ed151dde00f93e030e41d4/Launch_RepairGitHub_Connect_Applications.png)
3.  Scroll down to the bottom of the page and click **Uninstall** to remove the GitHub app. ![Launch_RepairGitHub_Uninstall.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta78a8a10c39602f4/66ed151663d5dfb1fb807bf2/Launch_RepairGitHub_Uninstall.png)
4.  Navigate back to Contentstack Launch.
    
    **Note:** It is recommended to reconnect GitHub using a different browser. For example, if you are currently using Google Chrome, try Firefox, Safari, or another browser to perform the reconnection steps.
    
5.  Follow the instructions again to [Connect your GitHub Account to Launch and Deploy a Project](/docs/launch/import-project-using-github#connect-your-github-account-to-launch-and-deploy-a-project).

## Related Resource

-   [Launch API: Create a Project](/docs/developers/apis/launch-api/projects#create-a-project)
