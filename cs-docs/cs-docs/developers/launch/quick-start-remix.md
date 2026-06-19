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

The fastest way to get started with Remix on Launch is by creating a project by importing the website code from [GitHub](https://github.com/tejas-contentstack/remix-101) or [Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud/).

This document guides you through the process of creating a project using GitHub.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

**Note:** Only the Organization [Admin](/docs/developers/organization/organization-roles#organization-admin)/[Owner](/docs/developers/organization/organization-roles#organization-owner) has the right to create projects in a stack for Launch.

- [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:  
  Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.
- On the **Launch** **Projects** screen, click the **+ New Project** button to initiate the project creation process.
- From the **Create New Project** modal, click **Import from a Git Repository**.

  **Note:** You can also choose to [upload a .zip file to import a project](/docs/launch/import-project-using-file-upload/).
- Click **GitHub**.

  **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud) guide to proceed.

  A new page opens. Sign in or create a new GitHub account.
- Enter your credentials and log in.
- In the Repository Access section, select **All repositories**.

  **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
- Click the **Save **button.

  **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize** button after selecting **All repositories**.

  You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

  **Repository** (Mandatory): Select the Git repository. In this guide, we have selected the [**Remix portfolio**](https://github.com/contentstack-launch-examples/remix-portfolio) repository from our Launch example namespace.**Note:** When you select the repo, the **Build and Output Settings** section gets auto-populated.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.
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
- Once ready, click **Deploy **to save and deploy the project.At first, the screen shows the **Deploying **status while the project deployment is in progress.

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.

**Note:** The log details of the current deployment can be found under the **Logs** section.

## Common questions

### Who can create projects in a stack for Launch?
Only the Organization [Admin](/docs/developers/organization/organization-roles#organization-admin)/[Owner](/docs/developers/organization/organization-roles#organization-owner) has the right to create projects in a stack for Launch.

### Can I import a project without GitHub?
Yes. You can also import a project using Bitbucket Cloud or choose to [upload a .zip file to import a project](/docs/launch/import-project-using-file-upload/).

### What should the Output Directory be set to for Remix?
Ensure that the **Output Directory** is set to `./build`.

### Where can I find deployment log details?
The log details of the current deployment can be found under the **Logs** section.