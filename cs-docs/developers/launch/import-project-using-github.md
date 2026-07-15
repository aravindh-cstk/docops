---
title: "[Contentstack Launch] - Create a Project Using GitHub"
description: Create a project in Contentstack Launch by connecting a GitHub account and importing from a Git repository, including prerequisites, deployment steps, deletion, and troubleshooting.
url: https://www.contentstack.com/docs/launch/import-project-using-github
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Create a Project Using GitHub

This page explains how to connect your GitHub account to Contentstack Launch and create (deploy) a new project from a GitHub repository. It is intended for developers and organization admins/owners who need to import and deploy projects in Launch, and includes prerequisites, deletion steps, and troubleshooting guidance.

## Create a Project Using GitHub

Launch lets you connect your GitHub account and access the repositories while creating projects. You must first connect your GitHub account to Launch to create projects using your GitHub repositories.

This document guides you through the process of connecting your GitHub account and creating a project in Launch using the GitHub repositories.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)

## Connect your GitHub Account to Launch and Deploy a Project
**Note:** Only the Organization [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) has the right to create projects in a stack for Launch.
- Click the **Launch **option from the dashboard, as shown below.
- Click **+ New Project**.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
- From the **Create New Project** modal, click **Import from a Git Repository**.![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)
- Click **Connect Account** in the GitHub card.

A pop-up will open with connection details.
- Enter the login credentials of your GitHub account.![Launch-Sign-In.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27acfd69a831865a/64365e5a74d71410bfac5229/Launch-Sign-In.png)
- Select the option to choose **All repositories** or **Only select repositories,** and then click the **Save **button.**Important:** Only GitHub users with the [**Owner**](../organization/organization-roles.md#organization-owner) or [**Admin**](../organization/organization-roles.md#organization-admin) role in the organization can provide access to repositories.

**Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting All repositories.

The **Create New Project** modal appears with the deployment steps.

Now you can either proceed with the deployment steps or click **Cancel **to view the GitHub connection you just created.

GitHub displays a `Connected` tag on successful connection to Launch in the Create New Project modal.

**Note: **If you encounter an error with your GitHub connection, follow the steps in the [Troubleshooting](#troubleshooting) section of this guide to repair it.
- If you selected `Cancel` in the previous step, click **GitHub **to proceed with the deployment steps.
- Fill in the following details to deploy your project in Launch.**Repository **(Mandatory): All repositories from your GitHub organization are listed in the **Repository **dropdown.Click the **Select repository** dropdown.**Note:** The repositories listed depend on the configuration you choose while installing the app.
- Select the repository with which you want to create a project.
- **Git Branch **(Mandatory): Once a repository is selected, the **Git Branch** drop-down populates with the repository’s default branch. The **Detected framework** section detects and displays the supported framework based on the GitHub repository you selected.Select a branch from the dropdown to select a different branch.
- **Project Name **(Mandatory): The project name is auto-populated based on the repository you selected.If you want to use a different project name, enter a project name without exceeding 200 characters.
- **Environment Name **(Mandatory)**: **By default, the environment name is populated as `Default`. You can change the environment name as per your requirement.![Launch_Create_Proj_Using_GitHub_CreateNewProj_Modal_Env_Proj.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38dbc8891caa48bc/64cd0d522b0596c4a0c7e60a/Launch_Create_Proj_Using_GitHub_CreateNewProj_Modal_Env_Proj.png)
- **Build and Output Settings **(Mandatory): The fields in this section get populated based on the detected framework.**Framework Preset**(Mandatory)**: **Framework of the selected project.
- **Build Command **(Mandatory)**: **Command to build the project.
- **Output Directory **(Mandatory)**: **Directory path where the project’s build output files get stored.
- **Environment Variables **(Optional)Enter the **key **and **value **of your environment variables, in the **Key Value Edit** section.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.
- Click the **+ Add Environment Variable** button to add more environment variables.![Launch_Env_Variables_NextJS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt33b66b23d2fac4d6/69f2bb4849f6cea3727465f2/Launch_Env_Variables_NextJS.png)
- Once all the fields are filled with appropriate values, click the **Deploy **button.

You have successfully deployed a project!

## Delete the Project
- Click the **Settings** icon.
- In the **General** section, click the **Delete Project **button under **Delete Project**.![Launch_CreateProjGit_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa908d5c870c006e/6604f09e29bd6771e122f541/Launch_CreateProjGit_Delete.png)
- Enter `DELETE` and then click the **Yes, Delete **button.![Launch_Delete_Project.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59d5f79de9807754/69647224e485f400086064d1/Launch_Delete_Project.png)

  **Warning**: This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.

This deletes your project successfully.

## Troubleshooting
If you are experiencing connection issues or errors with your GitHub integration, follow the steps below to troubleshoot the problem based on the specific error encountered.
- In the **Create New Project** modal, click the **ellipses** in the GitHub card, and click **Disconnect GitHub**.![Launch_RepairGitHub_Connect_Disconnect.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d73d11dbfe9827c/66ed1516f4d6ab5d076d3b40/Launch_RepairGitHub_Connect_Disconnect.png)
- Click [here](https://github.com/settings/installations) to navigate to the **Applications** page in GitHub and click **Configure** next to the app that must be uninstalled.![Launch_RepairGitHub_Connect_Applications.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea6d62808fd544e7/66ed151dde00f93e030e41d4/Launch_RepairGitHub_Connect_Applications.png)
- Scroll down to the bottom of the page and click **Uninstall** to remove the GitHub app.![Launch_RepairGitHub_Uninstall.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta78a8a10c39602f4/66ed151663d5dfb1fb807bf2/Launch_RepairGitHub_Uninstall.png)
- Navigate back to Contentstack Launch.

  **Note: **It is recommended to reconnect GitHub using a different browser. For example, if you are currently using Google Chrome, try Firefox, Safari, or another browser to perform the reconnection steps.
- Follow the instructions again to [Connect your GitHub Account to Launch and Deploy a Project](./import-project-using-github.md#connect-your-github-account-to-launch-and-deploy-a-project).

## Common questions

### Who can create projects in Launch using GitHub repositories?
Only the Organization Admin/Owner has the right to create projects in a stack for Launch.

### What should I do if GitHub shows an error or the connection fails?
Follow the steps in the Troubleshooting section to disconnect GitHub in Launch, uninstall the GitHub app from GitHub settings, and then reconnect.

### Why don’t I see all repositories in the Repository dropdown?
The repositories listed depend on the configuration you choose while installing the app (for example, All repositories vs Only select repositories).

### What happens when I delete a project?
This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.