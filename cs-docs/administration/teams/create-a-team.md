---
title: "Create a Team"
description: "Learn how to create a team in Contentstack for efficient user grouping and role assignments."
url: /administration/create-a-team
uid: blt27b6e088bfdbdc9e
---

# Create a Team

## Create a Team

A team lets you assign organization-level Administration roles and product roles across the CMS, Assets, and AgentOS to a group of users at once. Use teams to manage permissions consistently across your organization without assigning roles to each user individually.

### Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## Create a Team

To create a team, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Administration** through the App Switcher.

2.  Click **Teams** in the top navigation bar.

3.  Click the **\+ New Team** button.

4.  In the **Create New Team** modal, enter a **Team Name** (required) and an optional **Description**, then click **Create Team**.

    The team is created and the team configuration page opens.

    ### Assign Roles (Mandatory)

5.  To assign roles to the team, perform the following steps:
    1.  #### CMS Roles

        1.  Under the **CMS** section, click **\+ Manage Roles**.

        2.  Click the **Select Stack(s)** dropdown and select stacks.

        3.  Select the roles (**Admin**, **Developer**, **Content Manager**) for the stacks from the **Select Default Roles** dropdown.

        4.  In the **Roles Per Stacks** section, you can assign different roles per stack.

        5.  After setting up the CMS roles, click **Save**.
    2.  #### Assets Roles

        1.  Under the **Assets** section, click **\+ Manage Roles**.

        2.  Click the **Select Space(s)** dropdown and select spaces.

        3.  Select the roles (**Product Admin**, **Asset Type Manager**, **Member**) for the spaces from the **Select Default Roles** dropdown.

        4.  In the **Roles Per Spaces** section, you can assign different roles per space.

        5.  After setting up the Assets roles, click **Save**.
    3.  #### AgentOS Roles

        1.  Under the **AgentOS** section, click **\+ Manage Roles**.

        2.  Select the AgentOS projects and choose the roles (**AgentOS Admin**, **AgentOS Member**) for each.

        3.  After setting up the AgentOS roles, click **Save**.
    4.  #### Administration Roles

        1.  Under the **Administration** section, click **\+ Manage Roles**.

            **Note:** At least one Administration role must be assigned.

        2.  Select one or more Administration roles (**Admin**, **Security Manager**, **Product Analytics Viewer**, or **Member**), then click **Save**.

6.  To review your assigned roles, click the vertical ellipsis and select **Preview Roles**.

7.  To remove all role assignments and start over, click **Clear All Roles**.

8.  Click **Save** to apply the settings.


### Invite Users

To invite users to the team, perform the following steps:

1.  Click the **Users** tab within the team.

2.  Click the **\+ Invite Users** button.

3.  Enter one or more email addresses, then click **Invite**.


**Note:** Users who are new to Contentstack receive an email with a link to set up their account.

## Related Resource

-   [Create a team API request](/docs/developers/apis/administration-api/teams#create-a-team).
