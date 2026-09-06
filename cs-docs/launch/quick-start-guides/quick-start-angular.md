---
title: "Launch Quick Start Guide with Angular"
description: "Learn to deploy your first Angular Starter Launch project using GitHub."
url: /launch/quick-start-angular
uid: blt7095eb3b7971958f
---

# Launch Quick Start Guide with Angular

## Launch Quick Start Guide with Angular

The fastest way to get started with Launch is to clone and deploy a [sample Angular Starter project](https://github.com/contentstack/contentstack-angular-starter). With Launch, you can easily create a project by importing your website code from GitHub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to import a GitHub repository into Launch.

-   How to configure build and output settings for an Angular project.

-   How to add the environment variables the Angular Starter requires.

-   How to deploy the project and preview the live site.

-   How to deploy Angular as a server-side-rendered application.


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

    1.  **Repository** (Mandatory): Select the Git repository. In our example, we have selected the **Angular Starter App** repository.

        **Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.

    2.  **Git Branch** (Mandatory): By default, master or main is selected as the branch. You can choose another branch from the dropdown.
    3.  **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
    4.  **Environment Name** (Mandatory): Enter the name of the environment.![Launch_QSGuide_Angular_CreateProjModal_Repo_Env.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23e1393a81c026c3/664d6c9c76a5b56e0b31c8e6/Launch_QSGuide_Angular_CreateProjModal_Repo_Env.png)
    5.  **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the Angular framework, as discussed above. Update the **Output Directory** to ./dist/contentstack-angular-starter-app

        Select a response mode:

        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.

        **Note:** Buffered is selected by default.

        ![Launch_Angular_QSGuide_BuildOutput.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am313641d6d5681e33/ba87c07504f9b74e89ae7400/Launch_Angular_QSGuide_BuildOutput.png?locale=en-us)

        **Note:**

        -   The Server Command field allows you to deploy [Angular as Server-Side Rendered](#angular-as-an-ssr-based-application).
        -   Leaving the Server Command field blank will deploy the framework as CSR (Client-Side Rendered).

    6.  **Environment Variables** (Optional):

        1.  Enter the key and value of one or more environment variables.
        2.  You can also add the key-value pairs in bulk in the **Bulk Edit** section.

        For the Contentstack Angular Starter to work, we need to provide the following environment variables:

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

        ![Launch_Env_Variables_Angular.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt409b95a27a060ef5/69b7ac54cdc88b850f3c879b/Launch_Env_Variables_Angular.png)

        **Note:** Click **Back** to revert the changes and re-enter details.

9.  Once ready, click **Deploy** to save and deploy the project.

    As soon as the deployment starts, you will see the **Deploying** status as shown in the following screenshot:

    ![Launch_Angular_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a641c538ffaf51c/69dc7ac2df982b36f06951dc/Launch_Angular_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

![Launch-QSAngular-Deployed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ab2729711437f13/660390938f4444628ac3b69f/Launch-QSAngular-Deployed.png)

If you want to deploy the changes from any other commits, you can click the **Redeploy** button and choose the required commit.

![Launch-QSAngular-Redeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb39cbe4e4791258/660390946f31270cfd94fd3a/Launch-QSAngular-Redeploy.png)

**Note:** The log details of the current deployment can be found under the **Logs** section.

![Launch-QSAngular-Logs.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b47a75e2cde35bb/660390946f7fa717fdeadd32/Launch-QSAngular-Logs.png)

### Angular as an SSR-based Application

By default, Angular is deployed as a Single-Page Application (SPA). To deploy Angular as an SSR-based application, follow the steps below:

1.  On the left navigation panel, click the **Settings** icon and then **Environments**.![Launch_QSGuide_Angular_LeftPanel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadb071584fbce051/65def19bf86c24efea8e0769/Launch_QSGuide_Angular_LeftPanel.png)
2.  Click the **Deployments** tab to navigate to the deployment settings screen.
3.  In the **Server Command** field, add the command present in the package.json file to run the SSR based build locally. For example:

    ```
    node dist/my-app/server/server.mjs
    ```

    **Note:** The Server Command field will be displayed in the Deployments tab only if you choose Angular as the framework.

4.  Click the **Save Deployment Settings** button.![Launch_QSGuide_Angular-AutoDeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac22a82a4718fe34/672aed2f6fdaa64ad3707558/Launch_QSGuide_Angular-AutoDeploy.png)
5.  To **redeploy** the environment with the latest updates, follow these steps:
    1.  Click the **Environments** icon from the left panel and then click the **environment** where the updates are made.
    2.  In the **Deployments** screen that appears, click the **Redeploy** button to redeploy on the environment.

Once deployed, your application will start rendering pages on the server. You can inspect and verify the application content for accuracy.
