---
title: "Deploy Hooks"
description: "Create, trigger, and manage Deploy Hooks in Contentstack Launch to automate site deployments with custom URLs and Git commit options."
url: /launch/deploy-hooks
---

# Deploy Hooks

## Deploy Hooks

A Deploy Hook allows you to trigger a deployment using a unique URL.

The following are some of the use cases for Deploy Hooks:

-   Rebuilding your site to reflect changes in a Headless CMS
-   Scheduling deployments with Cron Jobs

This document guides you through the process of creating, triggering, renaming, and deleting a Deploy Hook in Launch.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   A project already deployed in Launch

## What You Will Learn

-   How to create a Deploy Hook and get its unique URL.
    
-   How to trigger a Deploy Hook with a POST request.
    
-   How to pass the optional commit parameter.
    
-   How to rename and delete a Deploy Hook.
    

## Create a Deploy Hook

Follow the steps given below to create a Deploy Hook in your project:

1.  [Log in to your Contentstack account](https://www.contentstack.com/login/) and select the **Launch** icon from the dashboard.
2.  On the Launch landing page, click the **project card** to open your project.
3.  In the **Environments** screen, go to the environment where you created the project, click the **ellipses** under **Actions**, and then click **Settings** to configure the Deploy Hook. For this tutorial, we will be adding a Deploy Hook to the **Default** environment.
    
    ![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)
    
4.  In **Environments** under **Settings**, click **Deploy Hooks**.  
    ![Launch_Deploy_Hooks_Venus2_Tab_GitHub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb4eda307ce78db9/65c1b080554798126e808625/Launch_Deploy_Hooks_Venus2_Tab_GitHub.png)
5.  Click the **\+ New Deploy Hook** button.
6.  Enter a name for your Deploy Hook.
    
    **Note:** The Deploy Hook name is for your reference. This name will be displayed in your list of Deploy Hooks.
    
    ![Launch_Deploy_Hooks_Venus2_NewDeployModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74b6d9552b8f56e1/65c1b080d6cf04169e1512f9/Launch_Deploy_Hooks_Venus2_NewDeployModal.png)
7.  Click the **Create Deploy Hook** button.  
    Launch provides you with a unique URL for this Deploy Hook.  
    ![Launch_Deploy_Hooks_Venus2_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e04ec1bd5006f80/65c1b08065194054e080f6bf/Launch_Deploy_Hooks_Venus2_URL.png)

## Trigger a Deploy Hook

Follow the steps given below to trigger a Deploy Hook:

1.  Click the **Environments** icon in the left panel.
2.  In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
3.  In **Environments** under **Settings**, click **Deploy Hooks**.
4.  Click the **ellipses** under **Actions** and then click **Copy URL** to copy the Deploy Hook URL.  
    ![Launch_Deploy_Hooks_Venus2_CopyURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta582bd94e6503112/65c1b0800acbc5354810ebc0/Launch_Deploy_Hooks_Venus2_CopyURL.png)
5.  Send a **POST** request to this URL to trigger the Deploy Hook you created.
    
    **Example Request**
    
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
    
6.  Click the **Environments** icon in the left panel and then go to your environment.

You will see that it has triggered a deployment successfully.

![Launch-DeployHooks-MycustomdomainV2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee177ba3b044c76f/66050207b1b99a3ded30ddce/Launch-DeployHooks-MycustomdomainV2.png)

If you used a git repository to import your project, then by default, the Deploy Hook uses the latest commit from the git branch for the deployment.

## Parameter Used in a Deploy Hook

Deploy Hooks accept the following optional URL query parameter:

-   commit: Parameter that specifies which git commit to deploy on triggering the Deploy Hook.

Here's an example where a Deploy Hook URL uses the commit parameter:

```
curl -X POST 
https://cs-domain.com/Launch-path/manage/deploy/h83y7hreohuuererh7343?commit=rbg734c
```

The commit can be the full SHA or just the **first seven characters** of your full SHA.

**Note:** When you import a project by uploading a file, you should not pass the commit parameter.

## Rename a Deploy Hook

Follow the steps given below to rename a Deploy Hook:

1.  Click the **Environments** icon in the left panel.
2.  In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
3.  In **Environments** under **Settings**, click **Deploy Hooks**.  
    ![Launch_Deploy_Hooks_Venus2_Tab_GitHub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb4eda307ce78db9/65c1b080554798126e808625/Launch_Deploy_Hooks_Venus2_Tab_GitHub.png)
4.  Click the **ellipses** under **Actions** and then click **Edit** to edit the Deploy Hook URL.  
    ![Launch_Deploy_Hooks_Venus2_EditURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt032a2bd3f855f54c/65c1b080d6cf0461b71512fd/Launch_Deploy_Hooks_Venus2_EditURL.png)

## Delete a Deploy Hook

Follow the steps given below to delete a Deploy Hook:

1.  Click the **Environments** icon in the left panel.
2.  In the **Default** environment, click the **ellipses** under **Actions**, and then click **Settings** to go to the **Settings** page.
3.  In **Environments** under **Settings**, click **Deploy Hooks**.  
    ![Launch_Deploy_Hooks_Venus2_Tab_GitHub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb4eda307ce78db9/65c1b080554798126e808625/Launch_Deploy_Hooks_Venus2_Tab_GitHub.png)
4.  Click the **ellipses** under **Actions** and then click **Delete** to delete the Deploy Hook URL.  
    ![Launch_Deploy_Hooks_Venus2_DeleteURL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt178626c9f721dc37/65c1b08049edef5c0d6a0c95/Launch_Deploy_Hooks_Venus2_DeleteURL.png)
