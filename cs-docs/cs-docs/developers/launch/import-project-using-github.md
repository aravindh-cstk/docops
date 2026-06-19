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
**Note:** Only the Organization [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles/#admin)/[Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) has the right to create projects in a stack for Launch.
- Click the **Launch **option from the dashboard, as shown below.
- Click **+ New Project**.
- From the **Create New Project** modal, click **Import from a Git Repository**.
- Click **Connect Account** in the GitHub card.

A pop-up will open with connection details.
- Enter the login credentials of your GitHub account.
- Select the option to choose **All repositories** or **Only select repositories,** and then click the **Save **button.**Important:** Only GitHub users with the [**Owner**](/docs/developers/organization/organization-roles#organization-owner) or [**Admin**](/docs/developers/organization/organization-roles#organization-admin) role in the organization can provide access to repositories.

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
- **Environment Name **(Mandatory)**: **By default, the environment name is populated as `Default`. You can change the environment name as per your requirement.
- **Build and Output Settings **(Mandatory): The fields in this section get populated based on the detected framework.**Framework Preset**(Mandatory)**: **Framework of the selected project.
- **Build Command **(Mandatory)**: **Command to build the project.
- **Output Directory **(Mandatory)**: **Directory path where the project’s build output files get stored.
- **Environment Variables **(Optional)Enter the **key **and **value **of your environment variables, in the **Key Value Edit** section.
- You can also add the key-value pairs in bulk in the **Bulk Edit** section.
- Click the **+ Add Environment Variable** button to add more environment variables.
- Once all the fields are filled with appropriate values, click the **Deploy **button.

You have successfully deployed a project!

## Delete the Project
- Click the **Settings** icon.
- In the **General** section, click the **Delete Project **button under **Delete Project**.
- Enter `DELETE` and then click the **Yes, Delete **button.**Warning**: This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.

This deletes your project successfully.

## Troubleshooting
If you are experiencing connection issues or errors with your GitHub integration, follow the steps below to troubleshoot the problem based on the specific error encountered.
- In the **Create New Project** modal, click the **ellipses** in the GitHub card, and click **Disconnect GitHub**.
- Click [here](https://github.com/settings/installations) to navigate to the **Applications** page in GitHub and click **Configure** next to the app that must be uninstalled.
- Scroll down to the bottom of the page and click **Uninstall** to remove the GitHub app.
- Navigate back to Contentstack Launch.**Note: **It is recommended to reconnect GitHub using a different browser. For example, if you are currently using Google Chrome, try Firefox, Safari, or another browser to perform the reconnection steps.
- Follow the instructions again to [Connect your GitHub Account to Launch and Deploy a Project](/docs/launch/import-project-using-github#connect-your-github-account-to-launch-and-deploy-a-project).

## Common questions

### Who can create projects in Launch using GitHub repositories?
Only the Organization Admin/Owner has the right to create projects in a stack for Launch.

### What should I do if GitHub shows an error or the connection fails?
Follow the steps in the Troubleshooting section to disconnect GitHub in Launch, uninstall the GitHub app from GitHub settings, and then reconnect.

### Why don’t I see all repositories in the Repository dropdown?
The repositories listed depend on the configuration you choose while installing the app (for example, All repositories vs Only select repositories).

### What happens when I delete a project?
This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.