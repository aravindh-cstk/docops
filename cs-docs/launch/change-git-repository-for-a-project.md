---
title: "[Contentstack Launch] - Change Git Repository for a Project"
description: Change the GitHub repository linked to an existing Contentstack Launch project without recreating the project or losing configuration.
url: https://www.contentstack.com/docs/launch/change-git-repository-for-a-project
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-05-21
---

# [Contentstack Launch] - Change Git Repository for a Project

This page explains how to change the GitHub repository connected to an existing Contentstack Launch project while retaining project settings and deployment history. It is intended for organization Owners/Admins who manage Launch projects and need to update or replace the linked repository due to repository changes, transfers, or migrations.

## Change Git Repository for a Project

When you rename, transfer, or replace a repository, you can update the linked repository in Launch without recreating the project or losing your configuration.

Contentstack Launch allows you to change the GitHub repository linked to an existing project. This enables you to connect a Launch project to a different GitHub repository while retaining the same project settings, deployment configuration, environment variables, custom domains, and deployment history.

You may need to change the project repository in the following scenarios:
- Migrating a project to a new GitHub repository
- Replacing an existing repository with a new production repository
- Reconnecting a repository after the GitHub repository name has changed
- Updating the project after the repository has been transferred to another GitHub organization or account
- Replacing a deleted repository with a newly created repository while retaining the same Launch project configuration

## Prerequisites

Before changing the project repository, ensure the following conditions are met:
- Only users with [Owner](../developers/organization/organization-roles.md#organization-owner) or [Admin](../developers/organization/organization-roles.md#organization-admin) access in the organization can change the connected GitHub repository for a project.
- The new GitHub repository exists and your GitHub account can access it.
- Your GitHub account is already connected to Launch, or you are prepared to connect it during the process.
- You must have Owner or Admin access in the organization that owns the target GitHub repository.

## Changing GitHub Repository for an Existing Launch Project

- On the Launch landing page, click the **project card** to open the required project.
- Click **Settings** in the top panel. Under **General**, click the **Current Repository** dropdown in the **Git Connection** card.![Launch_GitHub_Repo_Transfer_GitConnection.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9b37755bc72a3f56/36d305eb77aa354a24a1f754/Launch_GitHub_Repo_Transfer_GitConnection.png?locale=en-us)

  **Note:** If you need to switch to a different GitHub account or organization, click **Switch GitHub Connection** in the Git Connection card and select the required GitHub account.
- Select the new GitHub repository to connect to the project.
- Click **Save Changes** to apply the repository update.![Launch_GitHub_Repo_Transfer_SaveChanges.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1935138c1fb79584/5e07d0bed8b4af145f958254/Launch_GitHub_Repo_Transfer_SaveChanges.png?locale=en-us)  
  To discard the change and revert to the previously connected repository, click **Reset**.
- In the **Change Project Repository?** confirmation modal, review the current and new repository details and click **Change Repository** to confirm.![Launch_GitHub_Repo_Transfer_ChangeRepo.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3fb849abffbb2937/eda393facc59dfcb18d76093/Launch_GitHub_Repo_Transfer_ChangeRepo.png?locale=en-us)
- After the transfer is complete, the **Git Connection** section displays the updated repository.![Launch_GitHub_Repo_Transfer_Connected.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am84d1b6e7fb2263e1/2a3dc94e6dbefcd254adfe2d/Launch_GitHub_Repo_Transfer_Connected.png?locale=en-us)

  **Additional Resource:** To repair GitHub connection, refer to the [Repair GitHub Connection for Projects](../developers/launch/repair-github-connection-for-projects.md) document.
- If the newly connected repository uses a different framework or project structure, go to the **Environments** section and update the deployment commands under **Deployments** and the environment variables under **Environment Variables** accordingly.![Launch_GitHub_Repo_Transfer_EnvUpdates.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8a7e66c9ea0467ab/dc2a06d5fb55e8d8ede9d7aa/Launch_GitHub_Repo_Transfer_EnvUpdates.png?locale=en-us)
- Click **Environments** in the top panel, select your deployment, and click **Redeploy** to deploy the project with the required commit.

Once the deployment is successful, your project goes live with the newly connected repository.![Launch_GitHub_Repo_Transfer_Live.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8287b4a3503428af/87bbf978e0fb4bd0133199a3/Launch_GitHub_Repo_Transfer_Live.png?locale=en-us)

## Troubleshooting

If issues occur during or after the repository transfer, check the following:
- Ensure the connected GitHub account has access to the required repository in the GitHub organization settings.
- Verify that the GitHub account is properly connected to Launch. If required, repair the GitHub connection.
- If the repository was recently transferred to another GitHub organization, reinstall the GitHub App in the new organization.
- Verify that the build command and output directory match the structure of the newly connected repository.
- Ensure all required environment variables for the new codebase are configured in the Launch environment settings.

## Common questions

### Who can change the connected GitHub repository for a Launch project?
Only users with Owner or Admin access in the organization can change the connected GitHub repository for a project.

### Will changing the repository delete my Launch project configuration or deployment history?
No. You can update the linked repository in Launch without recreating the project or losing your configuration, and it retains deployment history.

### What should I update after connecting a repository with a different framework or structure?
Update the deployment commands under **Deployments** and the environment variables under **Environment Variables** in the **Environments** section.

### What should I do if the repository was transferred to another GitHub organization?
Reinstall the GitHub App in the new organization and ensure the connected GitHub account has access to the required repository.