---
title: "Create a Project using File Upload"
description: "Learn how to create a Launch project using file upload in Contentstack Launch."
url: /launch/import-project-using-file-upload
uid: blt8feb7de5f38a8fa9
---

# Create a Project using File Upload

## Create a Project using File Upload

Launch allows you to create a project by directly uploading a project folder or a .zip file.

This document guides you through the process of creating a project in Launch by uploading a project zip file. The zip file can be a build zip or a source code zip.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to upload a project folder or .zip file to Launch.

-   How to configure build and output settings for the uploaded project.

-   How to deploy the project.

-   How to delete a project.


## Upload a file and deploy a project

1.  Click the **Launch** option from the dashboard, as shown below.![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
2.  Click **\+ New Project**.

    ![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)

3.  From the **Create New Project** modal, click **Upload a file**.

    ![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)

4.  You can either drag and drop a .zip file or click the **browse to upload** link to upload a .zip file.

    ![Launch_CreateProjFile_Upload.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt193f8b6870424867/660bc3906c4a392868e45f8d/Launch_CreateProjFile_Upload.png)

    **Note:** When uploading the project's source code, ensure that the node\_modules folder is excluded.

5.  Click **Next** to proceed with the deployment steps.

    **Note:**

    -   You can re-upload a .zip file after uploading one.
    -   You can also Cancel an ongoing file upload and re-upload a new file.

    ![Launch-FileUpload-Next.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt635218a47959e052/645f6fe50227876dd02d78f0/Launch-FileUpload-Next.png)

6.  In the Deploy step, fill the following fields:
    1.  **Project Name** (Mandatory): The project name is auto-populated with the uploaded file name.
        -   To use a different project name, enter a project name without exceeding 200 characters.
    2.  **Environment Name** (Mandatory): By default, the environment name is populated as Default. You can change the environment name as per your requirement.
    3.  **Build and Output Settings** (Mandatory): The fields in this section get populated based on the detected framework.

        -   **Framework Preset**(Mandatory)**:** Framework of the selected project.
        -   **Build Command** (Mandatory)**:** Command to build the project.
        -   **Output Directory** (Mandatory)**:** Directory path where the project’s build output files get stored.

        Select a response mode:

        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.

        **Note:** Buffered is selected by default.

    4.  **Environment Variables** (Optional)
        -   Enter the **key** and **value** of your environment variable.
        -   Click the **\+ Add Environment Variable** button to add more environment variables. 
    5.  Once all the fields are filled with appropriate values, click the **Deploy** button.

You have successfully deployed a project!

![Launch-CreateProjFileUpload-Deployment.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f4fa030fa6cdc85/6604f0c4c6c69443518916fa/Launch-CreateProjFileUpload-Deployment.png)

The project card displays as given below in the Projects screen:

![Launch_Create_File_Venus2_Project_Card.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt272c49c578c09862/65c1dd65b3cfc015eae5e3e2/Launch_Create_File_Venus2_Project_Card.png)

## Delete the Project

1.  Click the **Settings** icon.
2.  In the **General** section, click the **Delete Project** button under **Delete Project**.

    ![Launch_Create_File_Venus2_General_Settings_DeleteProject.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt428cd65f7f107763/65c1ae7325aa942de334f483/Launch_Create_File_Venus2_General_Settings_DeleteProject.png)

3.  In the modal that appears, enter DELETE and then click the **Yes, Delete** button.![Launch_Delete_Project-File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad8efea10f1f928b/69647225420bc50008aa1c32/Launch_Delete_Project-File.png)

    **Warning:** This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.


This deletes your project successfully.

## Related Resource

-   [Launch API: Create a Project](/docs/developers/apis/launch-api/projects#create-a-project)
