---
title: "Launch Quick Start Guide with NextJS"
description: "Learn how to deploy your first NextJS Starter Launch project using GitHub."
url: /launch/quick-start-nextjs
uid: blt7a8e453166ce6627
---

# Launch Quick Start Guide with NextJS

## Launch Quick Start Guide with NextJS

The fastest way to get started with Launch is to clone and deploy a [sample Contentstack NextJS Starter project](https://github.com/contentstack/kickstart-next). Launch allows you to create a project by importing the website code from GitHub.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   A Stack created in CMS
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   [GitHub account](https://github.com/login)

## What You Will Learn

-   How to import a GitHub repository into Launch.
-   How to configure build and output settings for a NextJS project.
-   How to add the environment variables the NextJS Starter requires.
-   How to deploy the project and preview the live site.

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

1.  Clone the Kickstart NextJS repository and create a stack in CMS, referring to the steps in [Kickstart Next.js (Client-Side Rendering – CSR)](/docs/headless-cms/next#kickstart-nextjs-csr).
2.  [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
3.  Click the **\+ New Project** button to initiate the project creation process.

    ![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)

4.  Select **GitHub** to import the project from a Git repository.![Launch_QSGuide_NextJS_GitHubNav.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ame2018ce55749e3fc/0d2bf419d76d97b74ba692a3/Launch_QSGuide_NextJS_GitHubNav.png?locale=en-us)

    **Note:** You can also choose to import a project using the [BitBucket Cloud](/docs/developers/launch/import-a-project-using-bitbucket-cloud) or [upload a .zip file](/docs/launch/import-project-using-file-upload).

    A new page opens. Sign in or create a new GitHub account.
5.  Enter your credentials and log in.  
    If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button.

    **Note:** By default, the **All repositories** option is selected. If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.

    ![Launch_QSGuide_NextJS_InstallandAuthorize.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ambfcbe6fc67d02d90/ada7f6405ae5777b73e9a001/Launch_QSGuide_NextJS_InstallandAuthorize.png?locale=en-us) You will be redirected to the Launch app.
6.  In the **Deploy Your New Project** modal, select your Git repository.![Launch_QSGuide_NextJS_DeployProjectSc1.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am2c8eb51afb041b75/dbc119fab087afa5e2155966/Launch_QSGuide_NextJS_DeployProjectSc1.png?locale=en-us)
7.  In the screen that appears, add the following details:

    -   **Importing from** (Mandatory)**:** By default, master or main is selected as the branch. You can choose another branch from the dropdown.
    -   **Project Name** (Mandatory)**:** Gets auto-populated on selecting the repository. You can edit it as per your requirement.
    -   **Environment Name** (Mandatory)**:** Enter the name of the environment.![Launch_QSGuide_NextJS_DeployProjectSc2.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am4ac54e25927906a1/2cac8c65065fd529dd7e340b/Launch_QSGuide_NextJS_DeployProjectSc2.png?locale=en-us)
    -   **Framework Preset, Output Directory, and Build Command:** Auto-populates based on the detected framework.
    -   **Response Mode:**

        -   **Streaming:** Delivers response chunks in real time as they are generated.
        -   **Buffered:** Displays output only after the entire response has been generated.

        **Note:** Buffered is selected by default.

        ![Launch_QSGuide_NextJS_DeployProjectSc3.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am42f11d1c96cec701/db2884237c418ce8e7e6d7ef/Launch_QSGuide_NextJS_DeployProjectSc3.png?locale=en-us)
    -   **Enable Contentstack Authentication:** By default, [Contentstack Authentication](/docs/launch/contentstack-authentication) is enabled for your project environment.
    -   **Environment Variables (Optional):** Enter the key and value of one or more environment variables.

        For the Contentstack NextJS Starter to work, we need to provide the following environment variables:

        ```
        NEXT_PUBLIC_CONTENTSTACK_API_KEY=your_api_key_here
        NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
        NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here
        NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=preview
        NEXT_PUBLIC_CONTENTSTACK_REGION=EU # Options: NA, EU, AU, AZURE-NA, AZURE-EU, GCP-NA, GCP-EU
        NEXT_PUBLIC_CONTENTSTACK_PREVIEW=true # Set to true to enable preview
        ```

        ![Launch_QSGuide_NextJS_DeployProjectSc4.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am869dbe339f0398a6/aaa4513b1677969e7ebd8316/Launch_QSGuide_NextJS_DeployProjectSc4.png?locale=en-us)

    **Note:** Click **Back** to revert the changes and re-enter details.

8.  Once ready, click **Deploy** to save and deploy the project.

    At first, the screen shows the **Deploying** status while the project deployment is in progress.

    ![Launch_QSGuide_NextJS_Deploying.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amcd7e14b30a95c0bd/b49e556c9b8b3da3c032f135/Launch_QSGuide_NextJS_Deploying.png?locale=en-us)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section: 

![Launch_QSGuide_NextJS_Live.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am813615737599ec8f/81ca5abf785ca969ef83323d/Launch_QSGuide_NextJS_Live.png?locale=en-us)

If you want to deploy the changes from any other commits, you can click the **Redeploy** button and choose the required commit.

![Launch_QSGuide_NextJS_Redeploy.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am6b4d93e686e03cd5/dbeabb9c2fad1eb502fb917e/Launch_QSGuide_NextJS_Redeploy.png?locale=en-us)

**Note:** The log details of the current deployment can be found under the **Logs** section.

![Launch_QSGuide_NextJS_Logs.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amf417491c57ae2dbf/cf4a2df20a0c3cd576087565/Launch_QSGuide_NextJS_Logs.png?locale=en-us)
