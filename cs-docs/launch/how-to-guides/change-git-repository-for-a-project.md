---
title: "Change Git Repository for a Project"
description: "Learn how to change the GitHub repository linked to an existing Contentstack Launch project without losing your configuration, settings, or deployment history."
url: /launch/change-git-repository-for-a-project
uid: bltd7ed919840c01051
---

# Change Git Repository for a Project

## Change Git Repository for a Project

When you rename, transfer, or replace a repository, you can update the linked repository in Launch without recreating the project or losing your configuration.

Contentstack Launch allows you to change the GitHub repository linked to an existing project. This enables you to connect a Launch project to a different GitHub repository while retaining the same project settings, deployment configuration, environment variables, custom domains, and deployment history.

You may need to change the project repository in the following scenarios:

-   Migrating a project to a new GitHub repository
-   Replacing an existing repository with a new production repository
-   Reconnecting a repository after the GitHub repository name has changed
-   Updating the project after the repository has been transferred to another GitHub organization or account
-   Replacing a deleted repository with a newly created repository while retaining the same Launch project configuration

## What You Learn

-   How to change the GitHub repository linked to an existing Launch project.

-   How to confirm the repository change and redeploy the project.

-   How to update deployment commands and environment variables for a new repository structure.


## Prerequisites

Before changing the project repository, ensure the following conditions are met:

-   [Contentstack account](https://www.contentstack.com/login/)
-   Only users with [Organization Owner or Admin](/docs/administration/about-administration-roles) permissions can change the connected GitHub repository for a project.

-   The new GitHub repository exists and your [GitHub account](https://github.com/login) can access it.
-   Your GitHub account is already connected to Launch, or you are prepared to connect it during the process.
-   You must have Owner or Admin access in the organization that owns the target GitHub repository.

## Switch GitHub Connection and Change Repository for an Existing Project

1.  On the Launch landing page, click the **project card** to open the required project.
2.  Click **Settings** in the top panel. Under **General**, you can directly change the git repository, or switch the GitHub connection and change the git repository.![Change-Git-Repo-Namespace-Nav.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am2bfaabcabb166a0e/c39a2ad4e47351cfdd28a21b/Change-Git-Repo-Namespace-Nav.png?locale=en-us)

    **Switch GitHub Connection**

    You can switch to a different GitHub account or organization. To do so, click **Switch GitHub Connection** in the Git Connection card, then select the required GitHub namespace and repository. If the desired namespace does not appear, click **Manage Accounts** within the panel to add a new GitHub connection (up to **5 GitHub connections per user** are supported).

    ![Change-Git-Repo-Namespace.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amed25eec9e671fae0/52f13809e8b354e658bd04e9/Change-Git-Repo-Namespace.png?locale=en-us)

    After selecting the namespace and repository, review the current and new connection details and click **Switch Connection**.

    ![Switch-Connection-Namespace.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am23d9f064af5272f8/187a3ce97d94a5d1dcdbd646/Switch-Connection-Namespace.png?locale=en-us)
3.  To change the repository, select the new GitHub repository to connect to the project. ![New-Git-Repo-Namespace.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amefa860b4c6e24d0d/d81093e9bc691ad55a19ba92/New-Git-Repo-Namespace.png?locale=en-us)
4.  Click **Save Changes** to apply the repository update.![Change-Git-Repo-Only-Save.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3d2c4e91dfcc8566/e6ab5b1ae5c66fec13c0f74d/Change-Git-Repo-Only-Save.png?locale=en-us)  
    To discard the change and revert to the previously connected repository, click **Reset**.
5.  In the **Change Project Repository?** confirmation modal, review the current and new repository details and click **Change Repository** to confirm.![Change-Git-Repo-Final.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6eb4c15a6eb34086/2a76035d95950cedc8324fd0/Change-Git-Repo-Final.png?locale=en-us)
6.  After the transfer is complete, the **Git Connection** section displays the updated repository.![Launch_GitHub_Repo_Transfer_Connected.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am84d1b6e7fb2263e1/2a3dc94e6dbefcd254adfe2d/Launch_GitHub_Repo_Transfer_Connected.png?locale=en-us)

    **Additional Resource:** To repair GitHub connection, refer to the [Repair GitHub Connection for Projects](/docs/launch/repair-github-connection-for-projects) document.

7.  If the newly connected repository uses a different framework or project structure, go to the **Environments** section and update the deployment commands under **Deployments** and the environment variables under **Environment Variables** accordingly.![Launch_GitHub_Repo_Transfer_EnvUpdates.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8a7e66c9ea0467ab/dc2a06d5fb55e8d8ede9d7aa/Launch_GitHub_Repo_Transfer_EnvUpdates.png?locale=en-us)
8.  Click **Environments** in the top panel, select your deployment, and click **Redeploy** to deploy the project with the required commit.

Once the deployment is successful, your project goes live with the newly connected repository.![Launch_GitHub_Repo_Transfer_Live.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8287b4a3503428af/87bbf978e0fb4bd0133199a3/Launch_GitHub_Repo_Transfer_Live.png?locale=en-us)

## Troubleshooting

If issues occur during or after the repository transfer, check the following:

-   Ensure the connected GitHub account has access to the required repository in the GitHub organization settings.
-   Verify that the GitHub account is properly connected to Launch. If required, [repair the GitHub connection](/docs/launch/repair-github-connection-for-projects).
-   If the repository was recently transferred to another GitHub organization, reinstall the GitHub App in the new organization.
-   Verify that the build command and output directory match the structure of the newly connected repository.
-   Ensure all required environment variables for the new codebase are configured in the Launch environment settings.
