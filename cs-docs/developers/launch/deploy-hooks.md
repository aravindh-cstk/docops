---
title: "[Contentstack Launch] - Deploy Hooks"
description: Create, trigger, rename, and delete Deploy Hooks in Contentstack Launch.
url: https://www.contentstack.com/docs/launch/deploy-hooks
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Deploy Hooks

This page explains how to use Deploy Hooks in Contentstack Launch to trigger deployments via a unique URL. It is intended for developers and teams managing Launch environments, and should be used when you need to automate or programmatically initiate deployments (for example, from a CMS update or a scheduled job).

## Deploy Hooks

A Deploy Hook allows you to trigger a deployment using a unique URL.

The following are some of the use cases for Deploy Hooks:
- Rebuilding your site to reflect changes in a Headless CMS
- Scheduling deployments with Cron Jobs

This document guides you through the process of creating, triggering, renaming, and deleting a Deploy Hook in Launch.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- A project already deployed in Launch

## Create a Deploy Hook
Follow the steps given below to create a Deploy Hook in your project:
- [Log in to your Contentstack account](https://www.contentstack.com/login/) and select the **Launch** icon from the dashboard.
- On the Launch landing page, click the **project card** to open your project.
- In the **Environments** screen, go to the environment where you created the project, click the **ellipses** under **Actions**, and then click **Settings** to configure the Deploy Hook. For this tutorial, we will be adding a Deploy Hook to the **Default** environment.![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)
- In **Environments** under **Settings**, click **Deploy Hooks**.![Launch_Deploy_Hooks_Venus2_Tab_GitHub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb4eda307ce78db9/65c1b080554798126e808625/Launch_Deploy_Hooks_Venus2_Tab_GitHub.png)
- Click the **+ New Deploy Hook** button.
- Enter a name for your Deploy Hook.

  **Note**: The Deploy Hook name is for your reference. This name will be displayed in your list of Deploy Hooks.![Launch_Deploy_Hooks_Venus2_NewDeployModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74b6d9552b8f56e1/65c1b080d6cf04169e1512f9/Launch_Deploy_Hooks_Venus2_NewDeployModal.png)
- Click the **Create Deploy Hook** button.
Launch provides you with a unique URL for this Deploy Hook.![Launch_Deploy_Hooks_Venus2_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e04ec1bd5006f80/65c1b08065194054e080f6bf/Launch_Deploy_Hooks_Venus2_URL.png)

## Trigger a Deploy Hook
Follow the steps given below to trigger a Deploy Hook:
- Click the **Environments** icon in the left panel.
- In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
- In **Environments** under **Settings**, click **Deploy Hooks**.
- Click the **ellipses** under **Actions** and then click **Copy URL** to copy the Deploy Hook URL.![Launch_Deploy_Hooks_Venus2_CopyURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta582bd94e6503112/65c1b0800acbc5354810ebc0/Launch_Deploy_Hooks_Venus2_CopyURL.png)
- Send a **POST** request to this URL to trigger the Deploy Hook you created.**Example Request**

```
curl -X POST
https://cs-domain.com/Launch-path/manage/deploy/deploy-hook-id
```

**Example Response**

```
{
 "message": "Deployment triggered successfully"
}
```

- Click the **Environments** icon in the left panel and then go to your environment.

You will see that it has triggered a deployment successfully.

If you used a git repository to import your project, then by default, the Deploy Hook uses the latest commit from the git branch for the deployment.

## Parameter Used in a Deploy Hook
Deploy Hooks accept the following optional URL query parameter:
- `commit`: Parameter that specifies which git commit to deploy on triggering the Deploy Hook.

Here's an example where a Deploy Hook URL uses the `commit` parameter:

```
curl -X POST
https://cs-domain.com/Launch-path/manage/deploy/h83y7hreohuuererh7343?commit=rbg734c
```

The `commit` can be the full SHA or just the **first seven characters** of your full SHA.

**Note**: When you import a project by uploading a file, you should not pass the `commit` parameter.

## Rename a Deploy Hook
Follow the steps given below to rename a Deploy Hook:
- Click the **Environments** icon in the left panel.
- In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
- In **Environments** under **Settings**, click **Deploy Hooks**.
- Click the **ellipses** under **Actions** and then click **Edit** to edit the Deploy Hook URL.![Launch_Deploy_Hooks_Venus2_EditURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt032a2bd3f855f54c/65c1b080d6cf0461b71512fd/Launch_Deploy_Hooks_Venus2_EditURL.png)

## Delete a Deploy Hook
Follow the steps given below to delete a Deploy Hook:
- Click the **Environments** icon in the left panel.
- In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
- In **Environments** under **Settings**, click **Deploy Hooks**.
- Click the **ellipses** under **Actions** and then click **Delete** to delete the Deploy Hook URL.![Launch_Deploy_Hooks_Venus2_DeleteURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt178626c9f721dc37/65c1b08049edef5c0d6a0c95/Launch_Deploy_Hooks_Venus2_DeleteURL.png)

## Common questions

### What HTTP method should I use to trigger a Deploy Hook?
Send a **POST** request to the Deploy Hook URL.

### Can I deploy a specific git commit with a Deploy Hook?
Yes. Deploy Hooks accept the optional URL query parameter `commit` to specify which git commit to deploy.

### What happens if I don’t pass the `commit` parameter?
If you used a git repository to import your project, then by default, the Deploy Hook uses the latest commit from the git branch for the deployment.

### Should I use the `commit` parameter when importing a project by uploading a file?
No. **Note**: When you import a project by uploading a file, you should not pass the `commit` parameter.