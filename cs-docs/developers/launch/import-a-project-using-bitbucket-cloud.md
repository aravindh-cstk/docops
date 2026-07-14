---
title: "[Contentstack Launch] - Create a Project Using Bitbucket Cloud"
description: Step-by-step instructions for importing a project into Contentstack Launch using Bitbucket Cloud as the repository host.
url: https://www.contentstack.com/docs/launch/import-a-project-using-bitbucket-cloud
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Create a Project Using Bitbucket Cloud

This page explains how to import and deploy a project in Contentstack Launch using Bitbucket Cloud, including installing the required Marketplace app and configuring project settings. It is intended for developers and Bitbucket Cloud organization admins/owners who need to connect Bitbucket Cloud repositories to Launch and manage deployments.

## Create a Project Using Bitbucket Cloud

Contentstack Launch streamlines your content delivery by connecting directly to your code repository. This guide provides step-by-step instructions for importing your project into Contentstack Launch using Bitbucket Cloud as your repository host.

Unlike GitHub, which allows direct connections, Bitbucket Cloud requires installing a Marketplace app at the organizational level to establish the connection.

## Prerequisites

- **Active Contentstack Launch Account**: Make sure you're ready to go with an active Launch account.
- **Bitbucket Cloud Admin Access**: You'll need administrative control within your Bitbucket Cloud organization.
- **Bitbucket Cloud Repository**: The project you want to import has to be on Bitbucket Cloud.
- **OAuth Consumer Permissions**: Ensure you're allowed to install OAuth consumers in your Bitbucket Cloud organization.

## Install the Bitbucket Cloud Marketplace App

Follow the steps given below to install the Bitbucket Cloud app from Contetnstack Marketplace

- Log in to your [Contentstack](https://www.contentstack.com/login/) account and select the **Marketplace** icon from the dashboard.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **Bitbucket Cloud** app and click **Install**.
- Authorize the app to let it integrate with your Bitbucket Cloud organization.
- Grant the necessary permissions to allow Contentstack to access your Bitbucket Cloud repositories.

## Connect your Bitbucket Cloud Account to Launch

**Note:** Only the Organization [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) has the right to create projects in a stack for Launch.

Now that the app is installed, let's follow the steps given below to establish a connection between your Bitbucket Cloud and Contentstack Launch.

- Click the **Launch **option from the dashboard, as shown below.
- Click **+ New Project**.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
- From the **Create New Project** modal, click **Import from a Git Repository**.![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)
- Select **Bitbucket Cloud** as your repository host. During this step, Contentstack Launch will request access to the repositories that you manage.![Select Bitbucket.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7bd230ecb294964/67a61df926b49ed8e16c102b/Select_Bitbucket.png)

## Configure and Deploy your Project in Launch

Now that we have connected your Bitbucket Cloud account with Contentstack Launch, we will now configure the project using the following steps:

- Select the repository you want to import.
- Then, define the following settings:  
  **Environment Variables**: Add any required environment variables.
- **Build Commands**: Specify the build and deployment commands for your project.
- **Output Directory**: Define the folder for your built project (for example, `dist` or `build`).

**Additional Resource:** To fill out the **Create New Project** modal fields, refer to the sample data in your framework's [Quick Start Guide](/docs/launch#launch-overview).

- Once all the fields are filled with appropriate values and the configuration is complete, click the **Deploy **button.
- Monitor the deployment logs to ensure the process completes successfully.

## Delete your Project from Launch

To delete the project:

- Select your project from the Launch dashboard.
- Click the **Settings** icon.
- In the **General** section, click the **Delete Project** button under **Delete Project**.
- In the **Delete Project** modal, enter `DELETE` and click the **Yes, Delete** button.

  **Warning**: This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.

This deletes your project successfully.

## Troubleshooting Common Issues

Below, we have listed some common issues you might encounter, along with their solutions.

- **Connection Failure**:  
  Ensure the Marketplace app is installed and active in your Bitbucket Cloud organization.
- Verify that you have granted the necessary permissions during the app installation.
- [Repair Bitbucket connection](./repair-git-provider-connection-for-projects.md).
- **Repository Not Found**:  
  Confirm that the repository is hosted in the authenticated Bitbucket Cloud account.
- Ensure you have Product admin access to access the repository.

## Common questions

### Who can create projects in Launch when using Bitbucket Cloud?
Only the Organization [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin)/[Owner](../invite-users-and-assign-roles/types-of-roles.md#owner) has the right to create projects in a stack for Launch.

### Why do I need to install a Marketplace app for Bitbucket Cloud?
Unlike GitHub, which allows direct connections, Bitbucket Cloud requires installing a Marketplace app at the organizational level to establish the connection.

### What should I do if Launch can’t connect to Bitbucket Cloud?
Ensure the Marketplace app is installed and active in your Bitbucket Cloud organization, verify that you have granted the necessary permissions during the app installation, and use [Repair Bitbucket connection](./repair-git-provider-connection-for-projects.md).

### What if my repository doesn’t appear during import?
Confirm that the repository is hosted in the authenticated Bitbucket Cloud account and ensure you have Product admin access to access the repository.