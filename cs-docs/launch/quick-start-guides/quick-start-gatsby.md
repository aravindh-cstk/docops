---
title: "Launch Quick Start Guide with Gatsby"
description: "Learn how to deploy your first Gatsby Starter Launch project using GitHub."
url: /launch/quick-start-gatsby
uid: bltdd7e4b7f8f65c96a
---

# Launch Quick Start Guide with Gatsby

## Launch Quick Start Guide with Gatsby

The fastest way to get started with Launch is to clone and deploy a [sample Gatsby Starter project](https://github.com/contentstack/contentstack-gatsby-starter-app). Launch allows you to create a project by importing the website code from GitHub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to import a GitHub repository into Launch.

-   How to configure build and output settings for a Gatsby project.

-   How to add the environment variables the Gatsby Starter requires.

-   How to deploy the project and preview the live site.


## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

1.  [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
2.  Click the **\+ New Project** button to initiate the project creation process.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
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

    1.  **Repository** (Mandatory): Select your Git repository.
    2.  **Git Branch** (Mandatory): By default, master or main is selected as the branch. You can choose another branch from the dropdown.
    3.  **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
    4.  **Environment Name** (Mandatory): Enter the name of the environment.![Launch_Create_Project1_Gatsby.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3c1ac354c8f02a7/69f2bb3d502b2cb302db9b8e/Launch_Create_Project1_Gatsby.png)
    5.  **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the detected framework.

        Select a response mode:

        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.

        **Note:** Buffered is selected by default.

        ![Launch_Gatsby_QSGuide_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am16c82204cc92eb83/84473856f0606d3c3d3be2b8/Launch_Gatsby_QSGuide_BuildOutput.png?locale=en-us)
    6.  **Environment Variables** (Optional): Enter the key and value of one or more environment variables. For the Contentstack Gatsby Starter to work, we need to provide the following environment variables:

        ```
        CONTENTSTACK_API_HOST=<api_host_value>
        CONTENTSTACK_APP_HOST=<app_host_value>
        CONTENTSTACK_API_KEY=<api_key_of_your_stack>
        CONTENTSTACK_DELIVERY_TOKEN=<delivery_token_of_the_environment>
        CONTENTSTACK_ENVIRONMENT=<environment_name>
        CONTENTSTACK_REGION=<region>
        CONTENTSTACK_BRANCH=<branch_name>
        CONTENTSTACK_MANAGEMENT_TOKEN=<mgmt_token>
        CONTENTSTACK_LIVE_PREVIEW=<true_or_false>
        CONTENTSTACK_LIVE_EDIT_TAGS=<true_or_false>
        ```

        ![Launch_Env_Variables_Gatsby.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4a624442d72b6c3/69f2bb48709dafd8e52ab5e2/Launch_Env_Variables_Gatsby.png)

        **Note:** Click **Back** to revert the changes and re-enter details.

9.  Once ready, click **Deploy** to save and deploy the project.

    At first, the screen shows the **Deploying** status while the project deployment is in progress.

    ![Launch_Gatsby_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d68facf3d7c734e/69dc7ac3a37bbb0e44efce87/Launch_Gatsby_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

![Launch_QSGatsby_Deployed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2b3713d12b01462/66038fe3626e8067bd957b70/Launch_QSGatsby_Deployed.png)

If you want to deploy the changes from any other commits, you can click the **Redeploy** button and choose the required commit.

![Launch_QSGatsby_Redeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f3f15710da3b1fd/66038fe42531f42672ee58d5/Launch_QSGatsby_Redeploy.png)

**Note:** The log details of the current deployment can be found under the **Logs** section.

![Launch_QSGatsby_Logs.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d4c11881863d116/66038fe3c1951083fadedb64/Launch_QSGatsby_Logs.png)
