---
title: "Setup Production and Non-Production Environment"
description: "Learn how to setup your production and non-production environments in Contentstack Launch."
url: /launch/setup-production-and-non-production-environment
uid: blt89d219a15b251ae6
---

# Setup Production and Non-Production Environment

## Setup Production and Non-Production Environment

When apps are being developed and released, software developers use environments to create stages. As per industry standards for environments, most of the processes begin with development and end with production.

Launch allows you to create such environments.

This step-by-step guide will walk you through the process of creating both production and non-production environments.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization

## What You Will Learn

-   How to convert the Default environment into a production environment.

-   How to control auto-deploy behavior for each environment.

-   How to create a non-production environment such as Development.


## Create a Production Environment

Follow the steps given below to convert the Default environment of a project to a production environment.

1.  [Log in to your Contentstack account](https://www.contentstack.com/login/) and select the Launch icon from the dashboard.
2.  On the Launch landing page, open the project for which you want to change the Default environment to production environment.
3.  On the **Environments** screen, click the **ellipses** under **Actions**, next to **Default**, and then click **Settings**.![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)
4.  In **Environments** under **Settings**, click **General** and enter _**Production**_ as the **Environment Name**.

    ![Launch_Prod_Non-Prod_Venus2_General.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13fe1815e8cdb92d/65c1b18f90c22c2451d03012/Launch_Prod_Non-Prod_Venus2_General.png)

5.  Click the **Save Environment Details** button.
6.  Next, click **Deployments**.
7.  Click the **Auto Deploy on Commits** toggle to disable it, and then click the **Save Deployment Settings** button.

    **Note:** For Git repository based projects, you can prevent the ‘Production’ environment from automatically deploying any new commits that you push.

    ![Launch-Disable-Production.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76cde41674e39811/672aef64d99bdf44cc82a4ab/Launch-Disable-Production.png)

8.  You can add a custom domain for your projects. To do this, click **Domains** and then the **\+ New Domain** button, to [add a custom domain](/docs/launch/custom-domain).

    ![Launch_Prod_Non-Prod_Venus2_Domains.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8462f77d03a48539/65c1b18f651940311f80f6c7/Launch_Prod_Non-Prod_Venus2_Domains.png)

    ![Launch_Prod_Non-Prod_CreateDomainModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a3054285ae2b817/65c1b18f245ed9431e90e478/Launch_Prod_Non-Prod_CreateDomainModal.png)

9.  Click the **Environments** icon in the left panel and then click the production environment you created to view the **Deployments** page.

    ![Launch_Prod-NonProd_Deployement.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ed0a96c1fd317f3/660500386c4a3913b9e445af/Launch_Prod-NonProd_Deployement.png)


With these steps, you have successfully set up a production environment for your projects.

## Create a Non-Production Environment

Follow the steps given below to create a non-production environment.

1.  Follow the steps provided in the Create an Environment section in [this](/docs/launch/environments) guide.

    **Note:** Make sure to add the Environment Name as per the non-production environment you want to create. For example, if you want to create a development environment, add the Environment Name as _Development_.

2.  Next, in **Environments** under **Settings**, click **Deployments**.
3.  Click the **Auto Deploy on Commits** toggle to enable it, and then click the **Save Deployment Settings** button.

    ![Launch-Enable-Development.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43958d78595601e7/672aef642339aa7d57243698/Launch-Enable-Development.png)

    **Note:** Skip this step if the Auto Deploy on Commits toggle is already enabled.


You have successfully set up a non-production environment for your projects.
