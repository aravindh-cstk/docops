---
title: "Manage a Lytics Project"
description: "Learn how to edit project settings, manage connections to CMS stacks, Launch, and Personalize projects, invite collaborators, and delete a Lytics project in Contentstack."
url: /lytics/manage-a-lytics-project
---

# Manage a Lytics Project

## Manage a Lytics Project

A Lytics project is the top-level container for one customer data initiative in the Lytics. Each project has a name, an optional description, a primary domain, and belongs to one Contentstack organization.

From the project dashboard, you can manage three areas:

-   Project details
-   Connections to other Contentstack products
-   Collaborators who have access

After you create the project, you can manage connections, invite users, and edit project settings either now or after [installing JStag](/docs/lytics/install-lytics-jstag-sdk), the order does not affect functionality.

## Prerequisites

-   A [Lytics project](/docs/lytics/create-a-lytics-project) exists in your organization.
-   You have the [Owner](/docs/administration/about-administration-roles#organization-owner) or [Admin](/docs/administration/about-administration-roles#organization-admin) role on the project.

## Steps for Execution

Follow these steps to manage and update your Lytics project.

### Access Project Settings

1.  In the top navigation bar, click the **App Switcher** icon, then click **Lytics CDP**.  
    ![App_switcher_lytics_cdp.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amf69dcd6f266aec40/5ad0badf5b92541ed3b5a0d2/App_switcher_lytics_cdp.png?locale=en-us)
2.  From the **Projects** list, click the project you want to manage.
3.  **Before JStag is installed**, the project dashboard shows quick-action cards. You can either:
    -   Click **Manage Connections** to go directly to the Connections settings, or
    -   Click **Manage Users** to go directly to the Users settings, or
    -   Click **Manage Audiences** to open the Audiences section in the Lytics platform at [app.lytics.com](https://www.lytics.com/), or
    -   Click **Settings** in the top navigation to open the full Settings panel.
4.  Click **Manage Lytics** to open the Lytics platform directly at [app.lytics.com](https://www.lytics.com/), where you can build audiences, view customer profiles, and configure data collection and activation.  
    ![Manage_lytics.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am452b26bf09a8bf44/58a065274b6dac095f170833/Manage_lytics.png?locale=en-us)
5.  **After JStag is installed**, the dashboard switches to the live data view showing event counts, audience counts, user profiles, and the Event Activity chart. The quick-action cards are no longer shown. To access settings:
    
    -   Click **Settings** in the top navigation bar.
    
    To open the Lytics platform, click **Manage Lytics** in the top right corner. it takes you to [app.lytics.com](https://www.lytics.com/).
    

The **Settings** panel opens with two sections in the left navigation: **General** and **Users**.

### Edit Project Details

The **General** settings screen lets you update the project name, description, and domain.

1.  In **Settings**, click **General** in the left navigation.
2.  Under **Project Details**, update the following fields as necessary:
    -   **Name** (required) - A unique, human-readable identifier for the project within your organization.
    -   **Domain** (required) - The primary domain where JStag runs (for example, acme.com). Must be a valid fully-qualified domain name.
    -   **Description** - Free-text description. Useful when your organization manages multiple Lytics projects.
3.  Click **Save** to apply your changes, or **Reset** to discard them.  
    ![Mange_Lytics_project.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9c3d840569f78a2b/64707c8300031a9509c78009/Mange_Lytics_project.png?locale=en-us)

**Note:**

-   The **Project UID**, **Account ID**, and **AID** fields are read-only and cannot be edited.
-   Changing the domain here updates the project record but does not automatically update the JStag snippet already installed on your site.
-   If your primary domain changes, reinstall JStag using the updated snippet from the **Install Lytics** modal on the project dashboard.

### Manage Connections

A connection links your Lytics project to another Contentstack resource so that customer data flows between them. Three connection types are supported:

-   **CMS Stack connection** - A Contentstack CMS stack that publishes content for audiences built in this Lytics project.
-   **Launch Project connection** - A Contentstack [Launch](/docs/launch) project where the Lytics JStag SDK runs and collects visitor behavior.
-   **Personalize Project connection** - A Contentstack [Personalize](/docs/personalize) project that uses Lytics audiences for variant targeting and experiments.

A single Lytics project can connect to multiple stacks, Launch projects, and Personalize projects at the same time.

**Note:** Disconnecting a product may have side effects on how data flows between your products. Review the impact before removing a connection.

#### Add a connection

1.  In **Settings**, click **General** in the left navigation.
2.  Scroll down to the **Connections** section.
3.  Configure the connection for each product type as needed:
    -   **CMS Stacks** - Displays the stacks available in your organization. If none are available, this field shows No CMS stacks available.
    -   **Launch Projects** - Click the **Select Launch projects** dropdown and select one or more Launch projects.
    -   **Personalize Projects** - Click the **Select Personalize projects** dropdown and select one or more Personalize projects.
4.  Click **Save Connections**.  
    ![project_save_connections.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6f4d72dc8f87bd58/99b8baa5a501baa1619e2c48/project_save_connections.png?locale=en-us)

#### Remove a connection

1.  In the **Connections** section, click the close(**×)** next to the connected item you want to remove.
2.  Click **Save Connections**.

### Delete a Project

Deleting a project is permanent. All associated data is lost and the action cannot be undone. Only a Project Owner or Admin can delete a project.

**Warning:**

-   Once a project is deleted, it cannot be recovered. Ensure you no longer need the project or any of its associated data before proceeding.

1.  In **Settings**, click **General** in the left navigation.
2.  Scroll down to the **Delete Project** section.
3.  Click **Delete Project**.
4.  Confirm the deletion when prompted, and click **Delete**.  
    ![confirm_delete.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amaad420e4c45d72b6/e8a4f3ebf4cb305b3e7151d6/confirm_delete.png?locale=en-us)

### Manage Collaborators

A collaborator is any user who has been invited to a Lytics project. Each collaborator is assigned a role that controls what they can see and do in the project.

**Note:** Being a member of the parent Contentstack organization does not automatically grant access to a Lytics project. Users must be explicitly invited as collaborators to see and access the project.

Roles are assigned per project, a user can hold an Admin role on one project and an Observer role on another. For a full description of what each role permits, see the [Lytics User Permissions](/docs/lytics/user-permissions).

#### View collaborators

In **Settings**, click **Users** in the left navigation. The **Users** screen lists all current project members with their name, email address, invitation status (**Accepted** or **Pending**), and assigned role.

#### Invite a collaborator

1.  On the **Users** screen, click **\+ Invite User** in the top right.
2.  Enter the user's email address, select their role and add an optional message.
3.  Click **Invite**.  
    ![Invite_user.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6a3b1fd02cb57960/80e8c6766e191a3ac12e9fe9/Invite_user.png?locale=en-us)

The invited user receives an email invitation. Their status on the **Users** screen shows as **Pending** until they accept.

#### Change a collaborator's role or remove a collaborator

1.  On the **Users** screen, locate the user in the list.
2.  Click the **vertical ellipsis (⋮)** in the **Actions** column.
3.  Select the appropriate option - **Change Role** or **Remove User**.
