---
title: "Create a Lytics Project"
description: "Learn how to create and manage a Lytics project in Contentstack."
url: /lytics/create-a-lytics-project
uid: blt2888b189257cc5ca
---

# Create a Lytics Project

## Create a Lytics Project

A Lytics project stores and manages user data profiles within the Lytics. Creating a project provisions the underlying Lytics account, generates the JStag installation snippet for your front-end, and makes the project available for connections to your CMS stacks, Launch projects, and Personalize projects.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Access to the Contentstack Organization as the [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin) that has Lytics enabled
-   The primary domain of the website or application where JStag runs.

## Steps for Execution

### Create a Project

To create a new project in Lytics, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  In the top navigation bar, click the **App Switcher** icon and then click **Lytics CDP**.  
    ![App_switcher_lytics_cdp.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amf69dcd6f266aec40/5ad0badf5b92541ed3b5a0d2/App_switcher_lytics_cdp.png?locale=en-us)
2.  The system redirects you to the **Lytics** Project landing page.
3.  Click the **\+ New Project** button.
4.  In the **Create New Project** modal, provide the following details:
    -   **Project Name** (required)**:** A unique, human-readable name for the project within your organization.
    -   **Description :** Free-text description. Useful when your organization manages multiple projects.
    -   **Domain** (required)**:** The primary domain where JStag runs (for example, acme.com). Must be a valid fully-qualified domain name.
5.  After filling out the information, click the **Create** button.  
    ![Create_new_lytics_project.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amca2046051c446cc8/00edff99d14a54c5c5b6278f/Create_new_lytics_project.png?locale=en-us)

Upon successful creation, the modal closes and you are taken to the new project’s dashboard.

**Note:** If you see a MAX\_PROJECT\_LIMIT\_REACHED error, your organization has reached its project quota. Contact [Contentstack support](mailto:support@contentstack.com) to discuss limits.
