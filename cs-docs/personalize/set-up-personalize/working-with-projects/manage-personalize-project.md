---
title: "Manage a Personalize Project"
description: "Learn how to manage and navigate a Personalize project, including settings, users, stack connections, and project deletion."
url: /personalize/manage-personalize-project
---

# Manage a Personalize Project

## Manage a Personalize Project

Use this guide to manage an existing Personalize project, navigate project areas, update settings, manage users, connect a stack, or delete the project.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Personalize-enabled Organization with [Owner or Admin](/docs/administration/about-administration-roles) permissions
-   An existing stack to link to the Personalize project

## What You Will Learn

-   How to navigate the areas of a Personalize project.
    
-   How to update project details in Settings.
    
-   How to connect and disconnect a Contentstack stack.
    
-   How to view and invite users on a project.
    
-   Where to find the project deletion flow.
    

## Project Workspace

1.  In the top navigation bar, click the **App Switcher** icon and then click **Personalize**.
2.  From the **Projects** list, select the project you want to manage.

After opening a project, use the top navigation bar to switch between the following sections:

-   [**Experiences**](/docs/personalize/about-experiences): Create and manage segmented and A/B test experiences. From here, you can activate, pause, reprioritize, or archive experiences as requirements change or experiments conclude.
-   [**Audiences**](/docs/personalize/about-audiences): View the audience segments used for targeting experiences. This area helps you understand which audiences are in use, update targeting criteria, and archive segments that are no longer relevant.
-   [**Attributes**](/docs/personalize/about-attributes): Define and manage the user and contextual attributes that power audience evaluation and targeting decisions across experiences.
-   [**Events**](/docs/personalize/about-events): Configure and track events used for impressions, conversions, and performance measurement, enabling optimization over time.
-   [**Settings**](/docs/personalize/manage-personalize-project#settings): Manage project-level configuration and administration, including project details, CMS stack connection, user access, and lifecycle actions such as project deletion.

Most personalization activities occur in **Experiences**, **Audiences**, **Attributes**, and **Events.** Use **Settings** for administrative tasks that affect the project as a whole.

![Personalize project workspace navigation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83100b6d47776b2d/698976e55417ad0a4810dfce/image4.png)

## Settings

Project settings let you manage the core configuration of a Personalize project, including project details, CMS stack connection, user access, and lifecycle actions such as project deletion. The following sections explain how to access and manage these settings.

**To access project settings:**

1.  Open your Personalize project.
2.  In the top navigation bar, click **Settings**.

The **Settings** page includes the following sections:

-   **General** - Manage project details, stack connection, and project-level actions.
-   **Users** - Manage user access and permissions.

By default, the **General** section opens.![Settings page General section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc749cbe4e99527dc/6989770b162d1d6c10c3d8b3/image7.png)

#### General

Use the **General** section to configure the project.

**Project Details:**

1.  Update the **Name** field (required).
2.  Update the **Description** field to better describe the project.
3.  Review the **UID** field.  
    The **UID** field is read-only and serves as the unique system identifier for the project. It is required for API calls, SDK initialization, and integration workflows, and cannot be modified.
4.  Click **Save** to apply your changes.
5.  Click **Reset** to discard changes.

![Project Details fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c57d24242ff1dec/6989774f2aaa1ed4c2f4af53/image5.png)

**Stack Connection:**

1.  Select the required Contentstack stack from the dropdown.
2.  Click **Connect Stack**.

After connecting the stack, you can personalize content authored within the selected Contentstack CMS stack.  
![Stack connection dropdown](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e3a1b1a47b66a71/6989776f1ab63e12fd27c449/image10.png)

**Stack Disconnection**Disconnect a Contentstack stack from a Personalize project if you no longer want to deliver personalized experiences using that stack.![Stack disconnection option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31346b984c549a47/698977a0a44eeb749a981543/image1.png)

**Delete Project:**

Delete a project permanently to remove all associated personalization data.  
For step-by-step instructions, refer to [Delete a Personalize Project](/docs/personalize/delete-personalize-project).

![Delete Project section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb9124f1a51b777ca/698977cce6fff32a80e5347d/image8.png)

#### Users

Control access to the Personalize project from the Users section. View users, review their status and role, and invite new users.

Project-level roles in Personalize inherit from Contentstack organization roles. These roles determine what actions a user can perform across experiences, audiences, attributes, and settings.

**View users**

1.  Go to **Settings.**
2.  Select **Users** from the left navigation.![Users tab in Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5a653973c35eee0/69897831a44eeb8a3098154b/image9.png)
3.  Review the list of users and their **Status** and **Role**.  
    ![User list with status and role](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfed35fd17e56147b/6989789c1c153a3fac817ab2/image6.png)

**Invite users**

1.  In the **Users** tab, click **Invite User**.![Invite User button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93c69cddd5add862/698978d6a8ab7bc019bb29e2/image2.png)
2.  Enter the user’s email address and an optional message.
3.  Click **Invite**.  
    ![Invite User button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1830f4454c8fa879/6989793ae32a778cd8880ca7/image3.png)

**Modify user roles**

Manage role and permission changes for existing users at the organization or stack level in Contentstack. For step-by-step instructions, refer to [Change Organization Role of Existing Users](/docs/administration/change-organization-role-of-existing-users).
