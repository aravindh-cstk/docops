---
title: "Create a Project Using Bitbucket Cloud"
description: "Learn how to import a project using Bitbucket Cloud in Contentstack Launch with this step-by-step guide."
url: /launch/import-a-project-using-bitbucket-cloud
---

# Create a Project Using Bitbucket Cloud

## Create a Project Using Bitbucket Cloud

Contentstack Launch streamlines your content delivery by connecting directly to your code repository. This guide provides step-by-step instructions for importing your project into Contentstack Launch using Bitbucket Cloud as your repository host.

Unlike GitHub, which allows direct connections, Bitbucket Cloud requires installing a Marketplace app at the organizational level to establish the connection.

## Prerequisites

-   Active [Contentstack account](https://www.contentstack.com/login/) : Make sure you're ready to go with an active Launch account
-   Launch-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions : You can create projects in a stack for Launch
-   **Bitbucket Cloud Admin Access**: You'll need administrative control within your Bitbucket Cloud organization
-   **Bitbucket Cloud Repository**: The project you want to import has to be on Bitbucket Cloud
-   **OAuth Consumer Permissions**: Ensure you're allowed to install OAuth consumers in your Bitbucket Cloud organization

## What You Will Learn

-   How to install the Bitbucket Cloud Marketplace app.
    
-   How to connect Bitbucket Cloud to Launch.
    
-   How to configure and deploy a project from a Bitbucket Cloud repository.
    
-   How to delete a project.
    

## Install the Bitbucket Cloud Marketplace App

Follow the steps given below to install the Bitbucket Cloud app from Contetnstack Marketplace

1.  Log in to your [Contentstack](https://www.contentstack.com/login/) account and select the **Marketplace** icon from the dashboard.
2.  Click **Apps** from the left panel.
3.  Within the Marketplace, you can see the available apps. Hover over the **Bitbucket Cloud** app and click **Install**.
4.  Authorize the app to let it integrate with your Bitbucket Cloud organization.
5.  Grant the necessary permissions to allow Contentstack to access your Bitbucket Cloud repositories.

## Connect your Bitbucket Cloud Account to Launch

Now that the app is installed, let's follow the steps given below to establish a connection between your Bitbucket Cloud and Contentstack Launch.

1.  Click the **Launch** option from the dashboard, as shown below.![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)  
    Alternatively, go to the **App Switcher** in the top panel and click the **Launch** icon.![AppSwitcher_Launch.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c5085453e429d79/69ce4df3267d5e026d79f448/AppSwitcher_Launch.png)
2.  Click **\+ New Project**.![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
3.  From the **Create New Project** modal, click **Import from a Git Repository**.
    
    ![Launch_Create_Proj_Git_File.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09bbe7fc07e8c9a5/660bba5d1b5a585bbdadd2cc/Launch_Create_Proj_Git_File.png)
    
4.  Select **Bitbucket Cloud** as your repository host. During this step, Contentstack Launch will request access to the repositories that you manage. ![Select Bitbucket.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7bd230ecb294964/67a61df926b49ed8e16c102b/Select_Bitbucket.png)

## Configure and Deploy your Project in Launch

Now that we have connected your Bitbucket Cloud account with Contentstack Launch, we will now configure the project using the following steps:

1.  Select the repository you want to import.
2.  Then, define the following settings:
    
    1.  **Environment Variables**: Add any required environment variables.
    2.  **Build Commands**: Specify the build and deployment commands for your project.
    3.  **Output Directory**: Define the folder for your built project (for example, dist or build).
        
        Select a response mode:
        
        -   **Streaming**: Delivers response chunks in real time as they are generated.
        -   **Buffered**: Displays output only after the entire response has been generated.
        
        **Note:** Buffered is selected by default.
        
    
    **Additional Resource:** To fill out the **Create New Project** modal fields, refer to the sample data in your framework's [Quick Start Guide](/docs/launch#launch-overview).
    
3.  Once all the fields are filled with appropriate values and the configuration is complete, click the **Deploy** button.
4.  Monitor the deployment logs to ensure the process completes successfully.

## Delete your Project from Launch

To delete the project:

1.  Select your project from the Launch dashboard.
2.  Click the **Settings** icon.
3.  In the **General** section, click the **Delete Project** button under **Delete Project**.
4.  In the **Delete Project** modal, enter DELETE and click the **Yes, Delete** button.
    
    **Warning:** This action will remove all domains associated with this project. After the removal, your Contentstack domains will still be available for use.
    

This deletes your project successfully.

## Troubleshooting Common Issues

Below, we have listed some common issues you might encounter, along with their solutions.

1.  **Connection Failure**:
    1.  Ensure the Marketplace app is installed and active in your Bitbucket Cloud organization.
    2.  Verify that you have granted the necessary permissions during the app installation.
    3.  [Repair Bitbucket connection](/docs/launch/repair-git-provider-connection-for-projects).
2.  **Repository Not Found**:
    1.  Confirm that the repository is hosted in the authenticated Bitbucket Cloud account.
    2.  Ensure you have Product admin access to access the repository.

## Related Resource

-   [Launch API: Create a Project](/docs/developers/apis/launch-api/projects#create-a-project)
