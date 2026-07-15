---
title: "[Contentstack Launch] - Launch Quick Start Guide with Remix"
description: Launch Quick Start Guide with Remix
url: https://www.contentstack.com/docs/launch/quick-start-remix
product: Contentstack Launch
doc_type: quick-start
audience:
  - developers
version: current
last_updated: 2026-04-13
---

# [Contentstack Launch] - Launch Quick Start Guide with Remix

This page explains how to create and deploy your first Contentstack Launch project using Remix by importing a GitHub repository. It is intended for developers and organization admins/owners who need to set up a Remix project on Launch using GitHub.

## Launch Quick Start Guide with Remix

The fastest way to get started with Remix on Launch is by creating a project by importing the website code from [GitHub](https://github.com/tejas-contentstack/remix-101) or [Bitbucket Cloud](./import-a-project-using-bitbucket-cloud.md).

This document guides you through the process of creating a project using GitHub.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

**Note:** Only the Organization [Admin](../organization/organization-roles.md#organization-admin)/[Owner](../organization/organization-roles.md#organization-owner) has the right to create projects in a stack for Launch.

- [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
  Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
- On the **Launch** **Projects** screen, click the **+ New Project** button to initiate the project creation process.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
- From the **Create New Project** modal, click **Import from a Git Repository**.

  **Note:** You can also choose to [upload a .zip file to import a project](./import-project-using-file-upload.md).
- Click **GitHub**.

  **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](./import-a-project-using-bitbucket-cloud.md) guide to proceed.

  A new page opens. Sign in or create a new GitHub account.
- Enter your credentials and log in.![Launch-Sign-In.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
- In the Repository Access section, select **All repositories**.

  **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
- Click the **Save **button.

  **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.

  You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

  **Repository** (Mandatory): Select the Git repository. In this guide, we have selected the [**Remix portfolio**](https://github.com/contentstack-launch-examples/remix-portfolio) repository from our Launch example namespace.

  **Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.![QS_Guide_Remix_CreateProj2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf09060e3d66d97e/67d2bfb3bb041a7911c44442/QS_Guide_Remix_CreateProj2.png)
- **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the Remix framework, as discussed above. Ensure that the **Output Directory** is set to `./build`  
  **Note:** The `Server Command` field allows you to deploy Remix as Server-Side Rendered.
- **Environment Variables** (Optional):  
  Enter the key and value of one or more environment variables.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.

```
ENVIRONMENT=Production
SAMPLE_KEY=SAMPLE_VALUE
```

  **Note:** Click **Back **to revert the changes and re-enter details.
- Once ready, click **Deploy **to save and deploy the project.At first, the screen shows the **Deploying **status while the project deployment is in progress.![Launch_Remix_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2213781627125242/69dc7ad5b6cab32b61533a0e/Launch_Remix_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:![QS_Guide_Remix_Live.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd2348b5ceb81056/67dbef38f7ecccf8fd90c62d/QS_Guide_Remix_Live.png)

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.![QS_Guide_Remix_Redeploy.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98c96cf2f5d1b411/67dbef38b1a1f384523ee726/QS_Guide_Remix_Redeploy.png)

**Note:** The log details of the current deployment can be found under the **Logs** section.

## Common questions

### Who can create projects in a stack for Launch?
Only the Organization [Admin](../organization/organization-roles.md#organization-admin)/[Owner](../organization/organization-roles.md#organization-owner) has the right to create projects in a stack for Launch.

### Can I import a project without GitHub?
Yes. You can also import a project using Bitbucket Cloud or choose to [upload a .zip file to import a project](./import-project-using-file-upload.md).

### What should the Output Directory be set to for Remix?
Ensure that the **Output Directory** is set to `./build`.

### Where can I find deployment log details?
The log details of the current deployment can be found under the **Logs** section.