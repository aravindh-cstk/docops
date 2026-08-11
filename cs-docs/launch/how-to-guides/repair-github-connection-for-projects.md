---
title: "Repair GitHub Connection for Projects"
description: "Troubleshoot and fix GitHub connection issues in Contentstack Launch. Resolve errors and get your projects back on track."
url: /launch/repair-github-connection-for-projects
---

# Repair GitHub Connection for Projects

## Repair GitHub Connection for Projects

Contentstack Launch enables you to automatically repair the GitHub connection for existing projects. When your Launch GitHub App gets disconnected, the connection for existing projects will become invalid, preventing Launch from interacting with GitHub.

This step-by-step guide will help you repair the GitHub connection for projects in Contentstack Launch.

## When Repair Connection Appears

The Repair Connection button only shows up when your project's GitHub connection is actually broken, it's not a general-purpose action you need to click otherwise. This happens in one of three cases:

-   **The GitHub App was uninstalled:** removed on the GitHub side by you or your GitHub Admin
-   **The connection was deleted from Launch:** the GitHub connection was removed from **Settings** → **Connected Accounts**.
-   **The connected GitHub account didn't grant access to the relevant repository:** for example, only specific repositories were selected during authorization, and the project's repository wasn't one of them.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   Project repository available in [GitHub](https://github.com/login)

## What You Will Learn

-   How to check the Git connection status for a Launch project.
    
-   How to repair a broken GitHub connection automatically.
    
-   How to resolve common GitHub connection errors.
    

## Steps for Execution

Follow the steps below to repair the GitHub connection in your project automatically, after you have logged into your Contentstack account:

1.  From the **Launch** landing page, select your project.
2.  On the left-hand side primary navigation, click the **Settings** icon.
3.  Under **General**, you can see the **Git Connection** section.  
    You can view the status of your Git connection in this section along with a link to your Git repository.![Launch_Repair-GitHub-Connection_Connected.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8c0afef751c4273f/5b4ab708198d21988266c20a/Launch_Repair-GitHub-Connection_Connected.png?locale=en-us)
    
    **Additional Resource:** Refer to the [Change Git Repository for a Project](/docs/launch/change-git-repository-for-a-project) guide to change the Git repository for your project.
    
4.  If there's any connection error between your Git repository and project, as shown in the following screenshot, you can click the **Repair Connection** button.![Launch_Repair-GitHub-Connection_RepairConnection.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd535cdd75eb74646/7192cb336f2ce9efdc113b8f/Launch_Repair-GitHub-Connection_RepairConnection.png?locale=en-us)
    
      
    Launch will automatically repair the connection between your project and the Git repository.
    

## Troubleshooting

If you are experiencing any of the below issues or errors while trying to repair your GitHub connection, follow the steps provided to troubleshoot the problem for the specific error encountered.

-   **Please connect to a git provider OAuth app before proceeding with the repair**:  
    Your GitHub is currently disconnected.
    1.  Reconnect your **Github Account in Settings** -> **Connected Accounts**.  
        Once reconnected, every Launch project that has access to the relevant repository is automatically repaired, you don't need to repeat this for each project individually.
-   **Git provider OAuth app is uninstalled. Please reconnect the git provider OAuth app before proceeding with the repair**:  
    “Contentstack Launch” app is uninstalled in GitHub. Follow these steps to repair the connection:
    
    1.  Go to **Settings** → **Connected Accounts**.
    2.  Find the connection showing a **Connection issue** badge.
    3.  Click **Re-authenticate** on that card.
    
    ![Launch_Repair-GitHub-Connection_Troubleshooting.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am7c36fa7107b13f22/93fdebd3787b0ad48cbd1fd0/Launch_Repair-GitHub-Connection_Troubleshooting.png?locale=en-us)

**Important:** When re-authenticating, grant access to the repository this project uses, if it's not selected during re-authentication, the project stays broken even after you complete this flow.
