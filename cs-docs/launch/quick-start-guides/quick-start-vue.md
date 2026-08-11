---
title: "Launch Quick Start Guide with Vue"
description: "Learn how to deploy your first Vue Starter Launch project using GitHub."
url: /launch/quick-start-vue
---

# Launch Quick Start Guide with Vue

## Launch Quick Start Guide with Vue

The fastest way to get started with Launch is to clone and deploy a [sample VueJS Starter project](https://github.com/contentstack/contentstack-vuejs-starter-app). With Launch, you can easily create a project by importing your website code from GitHub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to import a GitHub repository into Launch.
    
-   How to configure build and output settings for a VueJS project.
    
-   How to add the environment variables the VueJS Starter requires.
    
-   How to deploy the project and preview the live site.
    

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

1.  [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
2.  On the **Launch Projects** screen, click the **\+ New Project** button to initiate the project creation process.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
3.  From the **Create New Project** modal, click **Import from a Git Repository**.  
    ![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)
    
    **Note:** You can also choose to [upload a .zip file to import a project](/docs/launch/import-project-using-file-upload/).
    
4.  Click **GitHub**.![Launch-GitHub-ConnectAccount](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2e0658a692b0e60b/6435370bcbf631109cafab84/Launch-GitHub-ConnectAccount.png)
    
    **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud) guide to proceed.
    
    A Sign in to GitHub screen pops up. Enter your credentials and log in to your GitHub account.
    
    **Note:** We have assumed that you have a GitHub account and your website code stored in the repository.
    
5.  Enter your credentials and log in.![Launch-Sign-In](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
6.  In the **Repository access** section, select **All repositories**.  
    
    **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
    
    ![Launch_New_Repository_Access_SS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4821228ea208a34/645b412eaf653fc45cd4764d/Launch_New_Repository_Access_SS.png)
7.  Click the **Save** button.  
    
    **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.
    
    ![Launch-GitHub-Install_Authorize](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40493387afda42b0/645cde3e0227879e622d71b4/Launch-GitHub-Install_Authorize.png)
    
    You will be redirected to the Launch app.
    
8.  In the **Create New Project** modal, add the following details:
    
    1.  **Repository** (Mandatory): Select the Git repository. In our example, we have selected the **VueJS Starter App** repository.
        
        **Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated with the required details.
        
    2.  **Git Branch** (Mandatory): By default, master or main is selected as the branch. You can choose another branch from the dropdown.
    3.  **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
    4.  **Environment Name** (Mandatory): Enter the name of the environment.![Launch_Create_Project1_VueJS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt855d4d4245532a4d/69f2bb3d9708ad49b28c17a4/Launch_Create_Project1_VueJS.png)
    5.  **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the VueJS framework, as discussed above.
        
        Select a response mode:
        
        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.
        
        **Note:** Buffered is selected by default.
        
        ![Launch_VueJS_QSGuide_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am95d9ee078a696aad/8223a0d60b1d8ff76cb57edb/Launch_VueJS_QSGuide_BuildOutput.png?locale=en-us)
    6.  **Environment Variables** (Optional):
        
        1.  Enter the key and value of one or more environment variables.
        2.  You can also add the key-value pairs in bulk in the **Bulk Edit** section.
        
        For the Contentstack VueJS Starter to work, we need to provide the following environment variables:
        
        ```
        VUE_APP_CONTENTSTACK_LIVE_PREVIEW=<true_or_false>
        VUE_APP_CONTENTSTACK_MANAGEMENT_TOKEN=<mgmt_token>
        VUE_APP_CONTENTSTACK_APP_HOST=<app_host_value>
        VUE_APP_CONTENTSTACK_API_HOST=<api_host_value>
        VUE_APP_CONTENTSTACK_REGION=<region>
        VUE_APP_CONTENTSTACK_ENVIRONMENT=<environment_name>
        VUE_APP_CONTENTSTACK_DELIVERY_TOKEN=<delivery_token_of_the_environment>
        VUE_APP_CONTENTSTACK_API_KEY=<api_key_of_your_stack>
        ```
        
        ![Launch_Env_Variables_VueJS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt916e681ce9aa011a/69f2bb49547a3a2f9732ca20/Launch_Env_Variables_VueJS.png)
        
        **Note:** Click **Back** to revert the changes and re-enter details.
        
9.  Once ready, click **Deploy** to save and deploy the project.
    
    As soon as the deployment starts, you will see the **Deploying** status as shown in the following screenshot:
    
    ![Launch_VueJS_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f3bab8edda8729b/69dc7ad59bef9a67bb105361/Launch_VueJS_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

![Launch_QSVueJS_Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt370bc4e895336834/66039167df6972bd6839db23/Launch_QSVueJS_Deployment.png)

If you want to deploy the changes from any other commits, you can click the **Redeploy** button and choose the required commit.

![Launch_QSVueJS_Redeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd864a74b51020a8b/66039167d05755678e001518/Launch_QSVueJS_Redeploy.png)

**Note:** The log details of the current deployment can be found under the **Logs** section.

![Launch_QSVueJS_Logs.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a368845331a475f/66039167df6972148c39db1f/Launch_QSVueJS_Logs.png)
