---
title: "Launch Quick Start Guide with Generic CSR"
description: "Learn to deploy your first Generic CSR Starter (Stencil) Launch project using GitHub."
url: /launch/quick-start-generic-csr
uid: bltc9bea040d11acd36
---

# Launch Quick Start Guide with Generic CSR

## Launch Quick Start Guide with Generic CSR

The fastest way to get started with Launch is to clone and deploy a [sample Stencil Starter project](https://github.com/contentstack/contentstack-stencil-starter-app) as an example for Generic CSR framework. With Launch, you can easily create a project by importing your website code from GitHub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to import a GitHub repository into Launch.

-   How to select the CSR framework preset and configure build and output settings.

-   How to add the environment variables the Stencil Starter requires.

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

    1.  **Repository** (Mandatory): Select the Git repository. In our example, we have selected the **Stencil Starter App** repository.
    2.  **Git Branch** (Mandatory): By default, master or main is selected as the branch. You can choose another branch from the dropdown.
    3.  **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
    4.  **Environment Name** (Mandatory): Enter the name of the environment.![Launch_Create_Project1_CSR.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31b2a44cbb0812fd/69f2bb3d47d404a349ad4451/Launch_Create_Project1_CSR.png)
    5.  **Build and Output Settings** (Mandatory):
        1.  **Framework Preset**: Select **CSR (Client-Side Rendered)** as the framework.
        2.  **Build Command**: Enter **npm run build** as the Build Command.
        3.  **Output Directory**: Enter an Output Directory path. For example, ./www.

            Select a response mode:

            -   **Streaming**: Delivers response chunks in real time as they are generated.
            -   **Buffered**: Displays output only after the entire response has been generated.

            **Note:** Buffered is selected by default.

            ![Launch_GenericCSR_QSGuide_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1f1d2f5176979151/55cde6b34a345b2c88217bdb/Launch_GenericCSR_QSGuide_BuildOutput.png?locale=en-us)
    6.  **Environment Variables** (Optional):

        1.  Enter the key and value of one or more environment variables.
        2.  You can also add the key-value pairs in bulk in the **Bulk Edit** section.

        For the Contentstack Stencil Starter to work, we need to provide the following environment variables:

        ```
        CONTENTSTACK_LIVE_PREVIEW=<true_or_false>
        CONTENTSTACK_MANAGEMENT_TOKEN=<mgmt_token>
        CONTENTSTACK_DELIVERY_TOKEN=<delivery_token_of_the_environment>
        CONTENTSTACK_API_HOST=<api_host_value>
        CONTENTSTACK_REGION=<region>
        CONTENTSTACK_APP_HOST=<app_host_value>
        CONTENTSTACK_API_KEY=<api_key_of_your_stack>
        CONTENTSTACK_ENVIRONMENT=<environment_name>
        ```

        ![Launch_Env_Variables_CSR.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc03b73d51298bf73/69f2bb48cc157b4ddf21b190/Launch_Env_Variables_CSR.png)

        **Note:** Click **Back** to revert the changes and re-enter details.

9.  Once ready, click **Deploy** to save and deploy the project.

    As soon as the deployment starts, you will see the **Deploying** status as shown in the following screenshot:

    ![Launch_Generic-CSR_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc92f1a6d254ceea5/69dc7ac39a81bd26cd2dbfb4/Launch_Generic-CSR_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

![Launch_GenericCSR_Stencil_Deployed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79150cbb750481c7/660390bebdfec340d4583606/Launch_GenericCSR_Stencil_Deployed.png)

If you want to deploy the changes from any other commits, you can click the **Redeploy** button and choose the required commit.

![Launch_GenericCSR_Stencil_Redeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt441efde2fe9f3ff8/660390bedf697252d239db19/Launch_GenericCSR_Stencil_Redeploy.png)

**Note:** The log details of the current deployment can be found under the **Logs** section.

![Launch_GenericCSR_Stencil_Logs.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7fb7e030e182f86/660390becf50d98ca017c5d7/Launch_GenericCSR_Stencil_Logs.png)
