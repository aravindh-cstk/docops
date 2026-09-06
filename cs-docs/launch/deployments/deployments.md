---
title: "Deployments"
description: "Manage deployments in Contentstack Launch—track statuses, view logs, and redeploy using Git or file upload methods with ease."
url: /launch/deployments
uid: blt7c5cfa9979a8202f
---

# Deployments

## Deployments

During the deployment phase, your project is built and made available through a unique URL once it is deployed successfully.

A deployment is an environment in action. There can be multiple deployments in a single environment, out of which the active deployment uses the latest environment configuration to build the website.

This document details the following in your Deployments screen:

-   Deployment Information
-   Deployment Statuses
-   Logs

When you import a project from a Git repository:

![Launch_Deployments_GitRepoScreen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9d1da5e12d1431c/6606134ca16454819d45fae3/Launch_Deployments_GitRepoScreen.png)

When you import a project by uploading a .zip file:

![Launch-Deployments_FileUploadScreen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2f1be446e42da4c/66061357b1b99a03e330e6a0/Launch-Deployments_FileUploadScreen.png)

## Deployment Information

The deployment information panel displays the details of your project deployment.

You can get the following information about your deployment from this panel if you created your project using a Git repository:

-   **Domains**: Your project can be accessed at this URL once it is built.
-   **Source**: Displays the Git repository branch and the commit Id against which the deployment was created for an environment.
-   **Git Repository**: Displays the Git repository you chose to create your project.
-   **Created At**: Displays the time when the deployment was created.
-   **Redeploy** button: Allows you to redeploy your project.
-   **Commit Message**: Displays the commit message corresponding to the commit against which the deployment was created.

![Launch-Deployments_Git_InfoPage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9792b210443c6eb5/660b822d55ef09e4646befbc/Launch-Deployments_Git_InfoPage.png)

You can get the following information about your deployment from this panel if you created your project by uploading a file:

-   **Domains**: Your project can be accessed at this URL once it has been built.
-   **Created At**: Displays the time when the project build succeeded.
-   **Commit Message**: Displays a commit message which indicates that deployment was triggered by file upload.
-   **Redeploy** button: Allows you to redeploy your project.
-   **Download Code** button: Allows you to download the code (.zip file) used for creating your project.

    **Note:** The Download Code button appears only when the deployment goes to Live, Deployed, or Failed status.


![Launch-Deployments_File_InfoPage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcffcb2243d103b53/660b822d04d34cfb4bbda0fa/Launch-Deployments_File_InfoPage.png)

On successful deployment, Launch also generates a preview image of your site that can be viewed on the deployment information panel.

![Launch-Deployments_Preview_Image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc015607d5eb5f90/660b7a4e3110d08100068cd0/Launch-Deployments_Preview_Image.png)

## Deployment Statuses

Following are the different project deployment statuses available in Launch:

| **Code** | **Status** | **What it means** |
| --- | --- | --- |
| ![Launch_Deployments_Live.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt19b1e89cdbfda1a7/660613833110d026e8067cda/Launch_Deployments_Live.png) | Live | Deployment is successful and is currently active. |
| ![Launch_-_Deployments_-_Deploy_Deployed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6b181100c67b521/643f65e9686ac411e37e43ce/Launch_-_Deployments_-_Deploy_Deployed.png) | Deployed | Previous deployment which was successful. |
| ![Launch_Deployments_Failed.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcb1dd15a89d2efe6/660613831e852325af737b63/Launch_Deployments_Failed.png) | Failed | Deployment is unsuccessful. |
| ![Launch_Deployments_Deploying.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7384ce45e4559ebd/660613836ccdb84f53a4db1b/Launch_Deployments_Deploying.png) | Deploying | Deployment is in progress. |
| ![Launch_Deployments_Cancelled.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt952fb54f8f003fc3/66061383c095f84ebec65507/Launch_Deployments_Cancelled.png) | Canceled | Deployment is canceled due to deployment build hours limits. |
| ![Launch_Deployments_Queued.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb4ceac954d0eea57/660613836ccdb800cca4db1d/Launch_Deployments_Queued.png) | Queued | Deployment is queued due to an ongoing deployment in the environment, waiting for it to finish. |
| ![Launch_Deployments_Skipped.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b5461a103b3d30d/6606138318980f23d32018be/Launch_Deployments_Skipped.png) | Skipped | Already queued deployment is skipped to queue a new deployment. |

## Deployment History

You can view the previous deployments of projects deployed using GitHub and File Upload methods. To do this, follow the below steps:

-   Click the drop-down button in the **Deployments** page to view the latest **15** deployments as given below:
    -   Projects deployed using GitHub:![Launch_Deployments_DeploymentsList_GitHub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt506292b32df9ef51/6606134cf407dd1cac314323/Launch_Deployments_DeploymentsList_GitHub.png)
    -   Projects deployed using File Upload:![Launch_Deployments_DeploymentsList_FileUpload.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0fb2913ccb7df336/6606134cb1b99aa0ee30e698/Launch_Deployments_DeploymentsList_FileUpload.png)
-   Click the **Show All** button at the bottom of the drop-down to view all the deployments.
-   Select a deployment of your choice and click **View Deployment** to view the selected deployment:
    -   Projects deployed using GitHub:![Launch_Deployments_DeploymentsList_ViewOld_GitHub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt859126376fcdea4e/6606134cdd5b9e2030a87c5f/Launch_Deployments_DeploymentsList_ViewOld_GitHub.png)
    -   Projects deployed using File Upload:![Launch_Deployments_DeploymentsList_ViewOld_FileUpload.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91b98121f99cb320/6606134cc8592ef1466f1860/Launch_Deployments_DeploymentsList_ViewOld_FileUpload.png)

## Cancel Deployment

Launch lets you cancel an active deployment before it completes, preventing unintended updates from reaching your environment.  
To cancel an ongoing deployment, click **Cancel Deployment** in the top panel, and then click **Cancel** in the modal that appears.

![Launch_CancelDeployment_Confirm.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97f4126ab6af29b7/69dc7ac27ec14144acb11fcd/Launch_CancelDeployment_Confirm.png)

You can also cancel the deployment in the modal that appears when the deployment begins, by clicking **Cancel Deployment**.

![Launch_CancelFeature_Modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4282546e01a7597e/69dc7ac2b79fe85cf82f9198/Launch_CancelFeature_Modal.png)

## Redeploys

You can redeploy your site any number of times to create new deployments. Redeployment can be done in one of the following ways-

-   By pushing a commit to your environment's corresponding Git branch when auto-deploy is enabled for the environment.
-   By calling a [deploy hook](/docs/launch/deploy-hooks) generated on the environment.
-   By clicking the **Redeploy** button on the deployment info page.

If you are redeploying from the deployment details page or using a [deploy hook](/docs/launch/deploy-hooks/), you can use a commitId to redeploy, if you [imported the project using GitHub](/docs/launch/import-project-using-github/).

![Launch_Deployments_commitId.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7306a19063a01fbc/6606134cc3bc8bf17add083f/Launch_Deployments_commitId.png)

When you click the **Redeploy** button, you can choose a commit to redeploy.

![Launch-Deployments_Redeploy_Git.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt65b67afc798e6e52/66061357b1b99a9d6530e69c/Launch-Deployments_Redeploy_Git.png)

If you [imported the project by uploading a zip file](/docs/launch/import-project-using-file-upload/), you can redeploy without a commitId. You can then choose from one of the following options to redeploy:

-   Redeploy with the previously uploaded file.
-   Redeploy by uploading a new file.

![Launch-Deployments_Redeploy_FileUpload.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce2d3987836f1066/660613574d880a2aadd2e481/Launch-Deployments_Redeploy_FileUpload.png)

**Note:** You cannot redeploy a site while a deployment is in progress.

## Deployment Queuing Mechanism for an Environment

In Launch, you can redeploy your project multiple times. But when multiple subsequent deployments are triggered for a given environment, all intermediate deployments will be skipped and only the latest deployment will take effect.

## Deployment Logs

You can find deployment logs in the Logs below Deployment Information. You can monitor the logs to get the details of the following deployment stages:

-   Installing the dependencies
-   Build creation
-   Cloud Functions
-   Success/failure of the deployment

You can also copy the log details by clicking the copy icon in the top-right corner of **Logs**.

![Launch_Deployments_Logs.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8e208def2fc63d66/66061357cac0bc583bc85df1/Launch_Deployments_Logs.png)

## Related Resources

-   [Launch API: Get all Deployments](/docs/developers/apis/launch-api/deployments#get-all-deployments)
-   [Launch API: Create a Deployment](/docs/developers/apis/launch-api/deployments#create-a-deployment)
-   [Launch API: Get Deployment Logs](/docs/developers/apis/launch-api/deployment-logs#get-deployment-logs)
