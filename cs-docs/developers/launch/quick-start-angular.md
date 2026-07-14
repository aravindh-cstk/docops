---
title: "[Contentstack Launch] - Launch Quick Start Guide with Angular"
description: Launch Quick Start Guide with Angular
url: https://www.contentstack.com/docs/launch/quick-start-angular
product: Contentstack Launch
doc_type: quick-start
audience:
  - developers
  - admins
version: current
last_updated: 2026-04-13
---

# [Contentstack Launch] - Launch Quick Start Guide with Angular

This page explains how to quickly create and deploy a Contentstack Launch project using an Angular starter repository from GitHub. It is intended for developers and organization admins/owners who need to set up an Angular project in Launch and optionally configure Angular for SSR deployments.

## Launch Quick Start Guide with Angular

The fastest way to get started with Launch is to clone and deploy a [sample Angular Starter project](https://github.com/contentstack/contentstack-angular-starter). With Launch, you can easily create a project by importing your website code from GitHub.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

**Note:** Only the Organization [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) has the right to create projects in a stack for Launch.
- [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)
Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
- On the **Launch Projects** screen, click the **+ New Project** button to initiate the project creation process.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
- From the **Create New Project** modal, click **Import from a Git Repository**.

    **Note:** You can also choose to [upload a .zip file to import a project](./import-project-using-file-upload.md).
- Click **GitHub**.
    **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](./import-a-project-using-bitbucket-cloud.md) guide to proceed.

    A Sign in to GitHub screen pops up. Enter your credentials and log in to your GitHub account.

    **Note:** We have assumed that you have a GitHub account and your website code stored in the repository.
- Enter your credentials and log in.![Launch-Sign-In](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
- In the **Repository access** section, select **All repositories**.

    **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
- Click the **Save **button.

    **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.

    You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

      **Repository** (Mandatory): Select the Git repository. In our example, we have selected the **Angular Starter App** repository.

      **Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.![Launch_QSGuide_Angular_CreateProjModal_Repo_Env.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23e1393a81c026c3/664d6c9c76a5b56e0b31c8e6/Launch_QSGuide_Angular_CreateProjModal_Repo_Env.png)
- **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the Angular framework, as discussed above. Update the **Output Directory** to `./dist/contentstack-angular-starter-app`
        **Note:**

            The `Server Command` field allows you to deploy [Angular as Server-Side Rendered](#angular-as-an-ssr-based-application).
- Leaving the `Server Command` field blank will deploy the framework as `CSR (Client-Side Rendered)`.
- **Environment Variables** (Optional):
          Enter the key and value of one or more environment variables.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.

        For the Contentstack Angular Starter to work, we need to provide the following environment variables:

```
CONTENTSTACK_LIVE_PREVIEW=
CONTENTSTACK_MANAGEMENT_TOKEN=
CONTENTSTACK_DELIVERY_TOKEN=
CONTENTSTACK_API_HOST=
CONTENTSTACK_REGION=
CONTENTSTACK_APP_HOST=
CONTENTSTACK_API_KEY=
CONTENTSTACK_ENVIRONMENT=
```

        **Note:** Click **Back **to revert the changes and re-enter details.
- Once ready, click **Deploy **to save and deploy the project.As soon as the deployment starts, you will see the **Deploying **status as shown in the following screenshot:![Launch_Angular_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a641c538ffaf51c/69dc7ac2df982b36f06951dc/Launch_Angular_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.

**Note:** The log details of the current deployment can be found under the **Logs** section.

## Angular as an SSR-based Application

By default, Angular is deployed as a Single-Page Application (SPA). To deploy Angular as an SSR-based application, follow the steps below:
- On the left navigation panel, click the **Settings** icon and then **Environments**.![Launch_QSGuide_Angular_LeftPanel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadb071584fbce051/65def19bf86c24efea8e0769/Launch_QSGuide_Angular_LeftPanel.png)
- Click the **Deployments** tab to navigate to the deployment settings screen.
- In the **Server Command** field, add the command present in the `package.json` file to run the SSR based build locally. For example:
```
node dist/my-app/server/server.mjs
```

    **Note:** The `Server Command` field will be displayed in the `Deployments` tab only if you choose `Angular` as the framework.
- Click the **Save Deployment Settings** button.![Launch_QSGuide_Angular-AutoDeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac22a82a4718fe34/672aed2f6fdaa64ad3707558/Launch_QSGuide_Angular-AutoDeploy.png)
- To **redeploy** the environment with the latest updates, follow these steps:
      Click the **Environments** icon from the left panel and then click the **environment** where the updates are made.
- In the **Deployments** screen that appears, click the **Redeploy** button to redeploy on the environment.

Once deployed, your application will start rendering pages on the server. You can inspect and verify the application content for accuracy.

## Common questions

### Who can create projects in a stack for Launch?
Only the Organization Admin/Owner has the right to create projects in a stack for Launch.

### What happens if I leave the Server Command field blank?
Leaving the `Server Command` field blank will deploy the framework as `CSR (Client-Side Rendered)`.

### Which environment variables are required for the Contentstack Angular Starter?
For the Contentstack Angular Starter to work, you need to provide the environment variables listed under the **Environment Variables** section:
`CONTENTSTACK_LIVE_PREVIEW`, `CONTENTSTACK_MANAGEMENT_TOKEN`, `CONTENTSTACK_DELIVERY_TOKEN`, `CONTENTSTACK_API_HOST`, `CONTENTSTACK_REGION`, `CONTENTSTACK_APP_HOST`, `CONTENTSTACK_API_KEY`, `CONTENTSTACK_ENVIRONMENT`.

### When is the Server Command field shown in Launch?
The `Server Command` field will be displayed in the `Deployments` tab only if you choose `Angular` as the framework.