---
title: "Launch Quick Start Guide with Remix"
description: "Learn how to deploy a Remix project on Launch using GitHub in minutes."
url: /launch/quick-start-remix
---

# Launch Quick Start Guide with Remix

## Launch Quick Start Guide with Remix

The fastest way to get started with Remix on Launch is by creating a project by importing the website code from [GitHub](https://github.com/contentstack-launch-examples/remix-portfolio) or [Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud/).

This document guides you through the process of creating a project using GitHub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to import a GitHub repository into Launch.
    
-   How to configure build and output settings for a Remix project.
    
-   How to add environment variables to a Launch project.
    
-   How to deploy the project and preview the live site.
    

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

1.  [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
2.  On the **Launch** **Projects** screen, click the **\+ New Project** button to initiate the project creation process.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
3.  From the **Create New Project** modal, click **Import from a Git Repository**.  
    ![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)
    
    **Note:** You can also choose to [upload a .zip file to import a project](/docs/launch/import-project-using-file-upload/).
    
4.  Click **GitHub**.
    
    ![Launch-GitHub-ConnectAccount.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e0658a692b0e60b/6435370bcbf631109cafab84/Launch-GitHub-ConnectAccount.png)
    
    **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud) guide to proceed.
    
    A new page opens. Sign in or create a new GitHub account.
    
5.  Enter your credentials and log in.
    
    ![Launch-Sign-In.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
    
6.  In the Repository Access section, select **All repositories**.  
    
    **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
    
    ![Launch_New_Repository_Access_SS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4821228ea208a34/645b412eaf653fc45cd4764d/Launch_New_Repository_Access_SS.png)
    
7.  Click the **Save** button.  
    
    **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.
    
    ![Launch-GitHub-Install_Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40493387afda42b0/645cde3e0227879e622d71b4/Launch-GitHub-Install_Authorize.png)
    
    You will be redirected to the Launch app.
    
8.  In the **Create New Project** modal, add the following details:
    
    1.  **Repository** (Mandatory): Select the Git repository. In this guide, we have selected the [**Remix portfolio**](https://github.com/contentstack-launch-examples/remix-portfolio) repository from our Launch example namespace.
        
        **Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.
        
    2.  **Git Branch** (Mandatory): By default, master or main is selected as the branch. You can choose another branch from the dropdown.
    3.  **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
    4.  **Environment Name** (Mandatory): Enter the name of the environment.![QS_Guide_Remix_CreateProj2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf09060e3d66d97e/67d2bfb3bb041a7911c44442/QS_Guide_Remix_CreateProj2.png)
    5.  **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the Remix framework, as discussed above. Ensure that the **Output Directory** is set to ./build
        
        Select a response mode:
        
        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.
        
        **Note:** Buffered is selected by default.
        
        ![Launch_Remix_QSGuide_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ame846ad19dec3d873/29ae517d7caf5febd18c2e5a/Launch_Remix_QSGuide_BuildOutput.png?locale=en-us)
        
        **Note:** The Server Command field allows you to deploy Remix as Server-Side Rendered.
        
    6.  **Environment Variables** (Optional):
        
        -   Enter the key and value of one or more environment variables.
        -   You can also add the key-value pairs in bulk in the **Bulk Edit** section.
        
        ```
        ENVIRONMENT=Production
        SAMPLE_KEY=SAMPLE_VALUE
        ```
        
        ![Launch_Env_Variables_Remix.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbaa13692a85684ea/69b7ac5426037c536136fc6a/Launch_Env_Variables_Remix.png)
        
        **Note:** Click **Back** to revert the changes and re-enter details.
        
9.  Once ready, click **Deploy** to save and deploy the project.
    
    At first, the screen shows the **Deploying** status while the project deployment is in progress.![Launch_Remix_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2213781627125242/69dc7ad5b6cab32b61533a0e/Launch_Remix_Deploying_CancelFeature.png)
    

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:![QS_Guide_Remix_Live.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd2348b5ceb81056/67dbef38f7ecccf8fd90c62d/QS_Guide_Remix_Live.png)

If you want to deploy the changes from any other commits, you can click the **Redeploy** button and choose the required commit.![QS_Guide_Remix_Redeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98c96cf2f5d1b411/67dbef38b1a1f384523ee726/QS_Guide_Remix_Redeploy.png)

**Note:** The log details of the current deployment can be found under the **Logs** section.

![QS_Guide_Remix_Logs.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e0187f2ff01ac78/67dbef3817f7b46ab90ceed5/QS_Guide_Remix_Logs.png)
