---
title: "[Contentstack Launch] - Deploy Hooks"
description: Create, trigger, rename, and delete Deploy Hooks in Contentstack Launch.
url: https://www.contentstack.com/docs/developers/launch/deploy-hooks
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
- In the **Environments** screen, go to the environment where you created the project, click the **ellipses** under **Actions**, and then click **Settings** to configure the Deploy Hook. For this tutorial, we will be adding a Deploy Hook to the **Default** environment.
- In **Environments** under **Settings**, click **Deploy Hooks**.
- Click the **+ New Deploy Hook** button.
- Enter a name for your Deploy Hook.**Note**: The Deploy Hook name is for your reference. This name will be displayed in your list of Deploy Hooks.
- Click the **Create Deploy Hook** button.
Launch provides you with a unique URL for this Deploy Hook.

## Trigger a Deploy Hook
Follow the steps given below to trigger a Deploy Hook:
- Click the **Environments** icon in the left panel.
- In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
- In **Environments** under **Settings**, click **Deploy Hooks**.
- Click the **ellipses** under **Actions** and then click **Copy URL** to copy the Deploy Hook URL.
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
- Click the **ellipses** under **Actions** and then click **Edit** to edit the Deploy Hook URL.

## Delete a Deploy Hook
Follow the steps given below to delete a Deploy Hook:
- Click the **Environments** icon in the left panel.
- In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
- In **Environments** under **Settings**, click **Deploy Hooks**.
- Click the **ellipses** under **Actions** and then click **Delete** to delete the Deploy Hook URL.

## Common questions

### What HTTP method should I use to trigger a Deploy Hook?
Send a **POST** request to the Deploy Hook URL.

### Can I deploy a specific git commit with a Deploy Hook?
Yes. Deploy Hooks accept the optional URL query parameter `commit` to specify which git commit to deploy.

### What happens if I don’t pass the `commit` parameter?
If you used a git repository to import your project, then by default, the Deploy Hook uses the latest commit from the git branch for the deployment.

### Should I use the `commit` parameter when importing a project by uploading a file?
No. **Note**: When you import a project by uploading a file, you should not pass the `commit` parameter.