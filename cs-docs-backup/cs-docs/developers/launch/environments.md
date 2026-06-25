---
title: "[Contentstack Launch] - Environments"
description: Create, configure, and delete environments in Contentstack Launch.
url: https://www.contentstack.com/docs/launch/environments
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Environments

This page explains how to create, configure, and delete environments in Contentstack Launch. It is intended for developers and teams managing deployments across different versions of a project, and should be used when setting up or maintaining Launch environments for a project.

## Launch Environments

Environments allow you to deploy and host different versions of your project independently.

Launch allows you to set up multiple environments for a project, which you can configure to match your development style. Each environment is deployed and hosted on a unique URL. Auto-deploy is enabled by default for every environment.

A default environment is created with every project import. You can configure the environment as per your needs for further usage.

This document guides you through the process of creating, configuring, and deleting an environment in Launch.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Create an Environment
- Click the **project card** to open your project from the Launch landing page.
- In the Environments screen, click the **+ New Environment** button to add a new environment.
- In the **Create New Environment** modal, fill in the following:If you choose GitHub to deploy your project, follow the steps below:Enter an environment name.
- Select a branch from the **Git Branch** dropdown.
- The fields in the `Build and Output Settings` section get auto-populated based on the detected framework. You can always change the `Framework Preset` and the build and output commands as per your requirement.If you choose `Other` or `Angular` in the Framework Preset drop-down, a `Server Command` field displays as follows:

This field allows you to deploy the selected framework as Server-Side Rendered. Leaving the `Server Command` field as blank deploys the framework as `CSR (Client-Side Rendered)`.
- In the `Environment Variables` field, perform the following:If you want to [auto-populate environment variables from a linked stack](./auto-populate-environment-variables-from-a-linked-stack.md), select a stack and click the **Import Variables** button.
- Click the **+ Add Environment Variable** button to manually add environment variable(s).
- Click the **Create** button.You have successfully created an environment.
- If you choose to upload a file to deploy your project, follow the steps below:Enter an environment name.
- Select a preset from the **Framework Preset** dropdown. The other fields in the `Build and Output Settings` section get auto-populated based on the selected preset. You can always change the `Framework Preset` and the build and output commands as per your requirement.
- In the `Environment Variables` field, perform the following:If you want to [auto-populate environment variables from a linked stack](./auto-populate-environment-variables-from-a-linked-stack.md), select a stack and click the **Import Variables** button.
- Click the **+ Add Environment Variable** button to manually add environment variable(s).
- The `Upload a file` field allows you to browse and upload a new file. Click **browse to upload** to upload a project file.
You can also re-upload a different file after uploading a file.
- Click the **Create** button.You have successfully created an environment.

## Configure the Environments List Table
By default, the `Auto Deploy` and `Created At` columns are disabled in the Environments list table. To enable, follow the steps below:
- Click the **Table Settings** icon and then click **Manage columns**.
- Mark the **Auto Deploy** and **Created At** checkboxes to display the `Auto Deploy` and `Created At` columns respectively.

A password-protected environment is represented with a **lock** icon next to it as shown in the screenshot below:

## Configure an Environment
- You can change the environment name and branch from **Settings**.In the Environments screen, go to the **environment** where your project is created, click the **ellipses** under Actions, and then click **Settings** to go to Environment Settings.
- Edit the details in the **Environment Name** and **Git Branch** fields.**Note**: When you import a project by uploading a file, the Git Branch field in the General settings is not available.
- Click the **Save Environment Details** button.
- You can configure environments to use deploy hooks, custom domains, and environment variables.
- You can control the deployment behavior by [toggling auto-deployments](./disable-automatic-redeployment.md#disable-automatic-redeployment).
- You can protect an environment using a password.

**Note**: The auto-deployment feature is unavailable when you import a project by uploading a file.

## Delete an Environment
Launch allows you to delete an environment that you no longer require.

Follow the steps below to delete an environment:
- In the Environments screen, go to the **environment** you want to delete, click the **ellipses** under Actions, and then click **Delete**.

A modal is displayed asking for confirmation to delete the environment.
- Enter `DELETE` and then click the **Yes, Delete** button.

**Warning**: This action will remove all domains associated with this environment. After the removal, your Contentstack domains will still be available for use.

Alternatively, you can follow the steps below to delete an environment:
- In the Environments screen, go to the **environment** you want to delete, click the **ellipses** under Actions, and then click **Settings** to go to Environment Settings.
- In Settings > Environments > General > Delete Environment, click the **Delete Environment** button.You will see a warning message displayed above the button.

A modal is displayed asking for confirmation to delete the environment.
- Enter `DELETE` and then click the **Yes, Delete** button.

**Note**: On deleting an environment, its corresponding deployments also get deleted.

## Common questions

### What is an environment in Launch?
An environment allows you to deploy and host different versions of your project independently, with each environment deployed and hosted on a unique URL.

### Is auto-deploy enabled by default?
Auto-deploy is enabled by default for every environment.

### Can I configure environment variables when creating an environment?
Yes, you can import variables from a linked stack using **Import Variables** or manually add them using **+ Add Environment Variable**.

### What happens when I delete an environment?
This action will remove all domains associated with this environment, and on deleting an environment, its corresponding deployments also get deleted.

