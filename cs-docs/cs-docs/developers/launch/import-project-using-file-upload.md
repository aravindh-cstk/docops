---
title: "[Contentstack Launch] - Create a Project using File Upload"
description: Create a project in Contentstack Launch by uploading a project folder or .zip file, then deploy and optionally delete the project.
url: https://www.contentstack.com/docs/developers/launch/import-project-using-file-upload
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Create a Project using File Upload

This page explains how to create and deploy a project in Contentstack Launch by uploading a project .zip file (build zip or source code zip). It is intended for users with Launch access (typically Organization Admin/Owner) who need to import a project via file upload and manage it afterward.

## Create a Project using File Upload

Launch allows you to create a project by directly uploading a project folder or a .zip file.

This document guides you through the process of creating a project in Launch by uploading a project zip file. The zip file can be a build zip or a source code zip.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Upload a file and deploy a project

**Note:** Only the Organization [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles/#admin)/[Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner) has the right to create projects in a stack for Launch.
- Click the **Launch **option from the dashboard, as shown below.
- Click **+ New Project**.
- From the **Create New Project** modal, click **Upload a file**.
- You can either drag and drop a .zip file or click the **browse to upload** link to upload a .zip file.

    **Note:** When uploading the project's source code, ensure that the `node_modules` folder is excluded.
- Click **Next** to proceed with the deployment steps.**Note:**

        You can re-upload a .zip file after uploading one.
- You can also Cancel an ongoing file upload and re-upload a new file.
- In the Deploy step, fill the following fields:
      **Project Name **(Mandatory): The project name is auto-populated with the uploaded file name.
          To use a different project name, enter a project name without exceeding 200 characters.
- **Environment Name **(Mandatory): By default, the environment name is populated as `Default`. You can change the environment name as per your requirement.
- **Build and Output Settings **(Mandatory): The fields in this section get populated based on the detected framework.
          **Framework Preset**(Mandatory)**: **Framework of the selected project.
- **Build Command **(Mandatory)**: **Command to build the project.
- **Output Directory **(Mandatory)**: **Directory path where the project’s build output files get stored.
- **Environment Variables **(Optional)
          Enter the **key **and **value **of your environment variable.
- Click the **+ Add Environment Variable** button to add more environment variables.
- Once all the fields are filled with appropriate values, click the **Deploy **button.

You have successfully deployed a project!

The project card displays as given below in the Projects screen:

## Delete the Project
- Click the **Settings** icon.
- In the **General** section, click the **Delete Project **button under **Delete Project**.
- In the modal that appears, enter `DELETE` and then click the **Yes, Delete **button.
    **Warning**: This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.

This deletes your project successfully.

## Common questions

### Who can create projects in Launch using file upload?
Only the Organization Admin/Owner has the right to create projects in a stack for Launch.

### What type of zip file can I upload?
The zip file can be a build zip or a source code zip.

### Should I include `node_modules` when uploading source code?
No. When uploading the project's source code, ensure that the `node_modules` folder is excluded.

### What happens when I delete a project?
This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.