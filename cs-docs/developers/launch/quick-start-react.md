---
title: "[Contentstack Launch] - Launch Quick Start Guide with React"
description: Launch Quick Start Guide with React
url: https://www.contentstack.com/docs/launch/quick-start-react
product: Contentstack Launch
doc_type: quick-start
audience:
  - developers
version: v1
last_updated: 2026-04-13
---

# [Contentstack Launch] - Launch Quick Start Guide with React

This page explains how to quickly create and deploy your first Contentstack Launch project using a sample ReactJS starter repository from GitHub. It is intended for developers (and organization Admins/Owners) who want to import a React project into Launch and deploy it with the required environment variables.

## Launch Quick Start Guide with React

The fastest way to get started with Launch is to clone and deploy a [sample ReactJS Starter project](https://github.com/contentstack/contentstack-react-starter-app). With Launch, you can easily create a project by importing your website code from GitHub.

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
![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)**Note:** You can also choose to [upload a .zip file to import a project](./import-project-using-file-upload.md).
- Click **GitHub**.**Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](./import-a-project-using-bitbucket-cloud.md) guide to proceed.

A Sign in to GitHub screen pops up. Enter your credentials and log in to your GitHub account.

**Note:** We have assumed that you have a GitHub account and your website code stored in the repository.
- Enter your credentials and log in.![Launch-Sign-In](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
- In the **Repository access** section, select **All repositories**.
**Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.![Launch_New_Repository_Access_SS](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4821228ea208a34/645b412eaf653fc45cd4764d/Launch_New_Repository_Access_SS.png)
- Click the **Save **button.
**Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.

You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

**Repository** (Mandatory): Select the Git repository. In our example, we have selected the **ReactJS Starter App** repository.

**Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated with the required details.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.![Launch_Create_Project1_React.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41f630fdb0875a37/69f2bb3e207e69af6d3c5136/Launch_Create_Project1_React.png)
- **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the ReactJS framework, as discussed above.
- **Environment Variables** (Optional):Enter the key and value of one or more environment variables.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.

For the Contentstack ReactJS Starter to work, we need to provide the following environment variables:

```
REACT_APP_CONTENTSTACK_LIVE_PREVIEW=
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN=
REACT_APP_CONTENTSTACK_APP_HOST=
REACT_APP_CONTENTSTACK_API_HOST=
REACT_APP_CONTENTSTACK_REGION=
REACT_APP_CONTENTSTACK_ENVIRONMENT=
REACT_APP_CONTENTSTACK_API_KEY=
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=
```
**Note:** Click **Back **to revert the changes and re-enter details.
- Once ready, click **Deploy **to save and deploy the project.As soon as the deployment starts, you will see the **Deploying **status as shown in the following screenshot:![Launch_React_Deploying_CancelFeature.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt249e7f12a16f9c55/69dc7ad5f2f414d6138ab68a/Launch_React_Deploying_CancelFeature.png)

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.

**Note:** The log details of the current deployment can be found under the **Logs** section.

## Common questions

### Who can create projects in Launch?
Only the Organization Admin/Owner has the right to create projects in a stack for Launch.

### Can I import a project without GitHub?
Yes, you can choose to upload a .zip file to import a project.

### Can I use a Git provider other than GitHub?
Yes, you can also import a project using Bitbucket Cloud.

### Where can I find deployment logs?
The log details of the current deployment can be found under the **Logs** section.