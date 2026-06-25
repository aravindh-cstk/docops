---
title: "[Contentstack Launch] - Launch Quick Start Guide with NextJS"
description: Launch Quick Start Guide with NextJS
url: https://www.contentstack.com/docs/launch/quick-start-nextjs
product: Contentstack Launch
doc_type: quick-start
audience:
  - developers
version: current
last_updated: 2026-04-13
---

# [Contentstack Launch] - Launch Quick Start Guide with NextJS

This page explains how to quickly create and deploy your first Contentstack Launch project using a NextJS starter app imported from GitHub. It is intended for developers (and organization admins/owners) who want a fast path to deploying a Launch project and configuring required environment variables.

## Launch Quick Start Guide with NextJS

The fastest way to get started with Launch is to clone and deploy a [sample Contentstack NextJS Starter project](https://github.com/contentstack/contentstack-nextjs-starter-app). Launch allows you to create a project by importing the website code from GitHub.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- [GitHub account](https://github.com/login)

## Steps for Execution

Follow the steps given below to deploy your first Launch project using GitHub:

**Note:** Only the Organization [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) has the right to create projects in a stack for Launch.
- [Log in to Contentstack](https://www.contentstack.com/login/) and click the **Launch** icon from the dashboard, as shown below:
Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.
- Click the **+ New Project** button to initiate the project creation process.
- From the **Create New Project** modal, click **Import from a Git Repository**.

    **Note:** You can also choose to [upload a .zip file to import a project](./import-project-using-file-upload.md).
- Click **GitHub**.

    **Additional Resource:** You can also import a project using Bitbucket Cloud. Follow the steps in the [Create a Project Using Bitbucket Cloud](./import-a-project-using-bitbucket-cloud.md) guide to proceed.

    A new page opens. Sign in or create a new GitHub account.
- Enter your credentials and log in.
- In the Repository Access section, select **All repositories**.

    **Note:** If you want to choose specific repositories, select the **Only select repositories** option and choose the required repository.
- Click the **Save **button.

    **Note:** If you are accessing GitHub through Contentstack for the first time, you must authorize Contentstack by clicking the **Install & Authorize **button after selecting All repositories.

    You will be redirected to the Launch app.
- In the **Create New Project** modal, add the following details:

      **Repository** (Mandatory): Select your Git repository.
- **Git Branch **(Mandatory): By default, `master` or `main` is selected as the branch. You can choose another branch from the dropdown.
- **Project Name** (Mandatory): Gets auto-populated on selecting the repository. You can edit it as per your requirement.
- **Environment Name** (Mandatory): Enter the name of the environment.
- **Build and Output Settings** (Mandatory): The fields in this section get auto-populated based on the detected framework.
- **Environment Variables** (Optional): Enter the key and value of one or more environment variables. For the Contentstack NextJS Starter to work, we need to provide the following environment variables:
```
CONTENTSTACK_API_HOST=
CONTENTSTACK_CDN=
CONTENTSTACK_API_KEY=
CONTENTSTACK_DELIVERY_TOKEN=
CONTENTSTACK_ENVIRONMENT=
```

    **Note:** Click **Back **to revert the changes and re-enter details.
- Once ready, click **Deploy **to save and deploy the project.At first, the screen shows the **Deploying **status while the project deployment is in progress.

Upon successful deployment, you will see the following screen. You can preview the deployed website by clicking the icon next to the URL in the **Domains** section:

If you want to deploy the changes from any other commits, you can click the **Redeploy **button and choose the required commit.

**Note:** The log details of the current deployment can be found under the **Logs** section.

## Common questions

### Who can create projects in a stack for Launch?
Only the Organization Admin/Owner has the right to create projects in a stack for Launch.

### Can I import a Launch project without GitHub?
Yes. You can also choose to upload a .zip file to import a project.

### Can I use a Git provider other than GitHub?
Yes. You can also import a project using Bitbucket Cloud.

### Where can I find deployment log details?
The log details of the current deployment can be found under the Logs section.