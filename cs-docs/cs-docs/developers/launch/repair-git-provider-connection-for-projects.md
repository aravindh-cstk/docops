---
title: "[Contentstack Launch] - Repair Git Provider Connection for Projects"
description: Repair Git provider connections for existing Contentstack Launch projects when the connection becomes invalid.
url: https://www.contentstack.com/docs/launch/repair-git-provider-connection-for-projects
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Repair Git Provider Connection for Projects

This page explains how to repair a broken Git provider connection for an existing Contentstack Launch project (for example, Bitbucket Cloud). It is intended for Launch project owners/admins who need to restore Launch’s ability to interact with a connected repository after the Git provider connection becomes invalid.

## Repair Git Provider Connection for Projects

**Note:** This guide covers repairing Git provider connections for apps such as [Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud/) on Contentstack Launch. If you're using GitHub, refer to the [Repair GitHub Connection for Projects](/docs/launch/repair-github-connection-for-projects/) instead.

Contentstack Launch allows you to automatically repair Git provider connections for existing projects. If a Git provider app is uninstalled, the connection between Launch and the Git provider becomes invalid, preventing Launch from interacting with the repository.

This guide walks you through the steps to repair a broken Git provider connection.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Launch Project as the [Owner/Admin](/docs/launch/users)
- The Git Provider app reinstalled from Marketplace
- A valid project repository in your Git provider account

## Steps for Execution

Follow the steps below to repair the Git Provider connection in your project automatically:

- [Log in](https://www.contentstack.com/login/) to your Contentstack account.
- From the **Launch** landing page, select your project.
- On the left-hand side primary navigation, click the **Settings** icon.
- Under the **General** section, locate the **Git Connection** panel.  
  You can view the status of your Git connection in this panel along with a link to your Git repository.
- If there are any issues with the connection, click **Repair Connection** to re-establish the link between your project and the Git provider.  
  Launch will automatically repair the connection between your project and the Git repository.

## Troubleshooting

If you encounter any of the following issues while repairing your Git provider connection, follow the corresponding troubleshooting steps to resolve them:

- **Please connect to a Git provider OAuth app before proceeding with the repair**  
  Your Git Provider app is currently uninstalled.

  Install the Git Provider Marketplace app.Install the Bitbucket Marketplace app by following the steps in the [Create a Project using Bitbucket Cloud](/docs/launch/import-a-project-using-bitbucket-cloud#install-the-bitbucket-cloud-marketplace-app) documentation.
  - Retry the **Repair Connection** action.

- **Please add the repository to the Git Provider OAuth app before proceeding with the repair**  
  You are attempting to access a repository that is not accessible. Follow these steps to grant access to the required repository of the Git Provider:

  To grant access to a repository to a user in Bitbucket Cloud, follow the steps in the [Grant repository access to users and groups](https://support.atlassian.com/bitbucket-cloud/docs/grant-repository-access-to-users-and-groups/) documentation.
  - Retry the **Repair Connection** action.

- **Git provider service is temporarily unavailable**  
  You are attempting to interact with the Git Provider service when it is unavailable due to maintenance, downtime, or network issues. In this case, you may retry after some time. If the issue persists, please contact [support](mailto:support@contentstack.com).

## Common questions

1. **When should I use “Repair Connection”?**  
   Use it when the Git provider connection is invalid and Launch is unable to interact with the repository.

2. **Do I need to reinstall the Git Provider app before repairing the connection?**  
   Yes, the prerequisites include having the Git Provider app reinstalled from Marketplace.

3. **Where do I find the repair option in Launch?**  
   Go to your project’s **Settings**, then under **General** locate the **Git Connection** panel and click **Repair Connection**.

4. **What should I do if the Git provider service is unavailable?**  
   Retry after some time; if the issue persists, contact [support](mailto:support@contentstack.com).