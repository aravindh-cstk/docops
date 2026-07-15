---
url: /agent-os/how-to-grant-polaris-access-to-users-in-contentstack
marker: "Polaris"
heading: "How to Grant Polaris Access to Users in Contentstack"
---

> **Note:** For access, please talk to our [Support](mailto:support@contentstack.com) team.

Polaris is Contentstack's in-app conversational assistant that provides intelligent, context-aware help across the CMS. It allows users to interact with the platform through natural language, asking questions, generating content, or running tasks.

> **Note:** Only users with the **Admin** or **Owner** role have access to **Polaris**. Users with a **Member** role do not see the Polaris icon in the top navigation unless an admin explicitly grants them access through a [Custom Role](https://www.contentstack.com/docs/administration/about-product-roles#custom-product-roles).

This guide walks Organization [Owners](https://www.contentstack.com/docs/administration/about-administration-roles#organization-owner) and [Admins](https://www.contentstack.com/docs/administration/about-administration-roles#organization-admin) through the complete setup, from enabling Polaris at the organization level to assigning the correct role to your users.

## Step 1: Enable Polaris at the Organization Level

Before assigning Polaris access to any user, Polaris must first be enabled at the organization level. To do so, follow these steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
2.  After logging in, click the **App Switcher** icon, then select **Administration** from the list.![Administration\_Icon.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am46492f4f8016e569/8cdefab39d8e9e09a4261abf/Administration_Icon.png?locale=en-us)
3.  In the top navigation panel, click **AI Settings**.
4.  In the **Global AI Settings**, locate the **Polaris** toggle and turn it **on**.![Enable\_Polaris\_In\_AI\_Settings.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am38f7d65f755dedcc/9a682e904cea6150ac664577/Enable_Polaris_In_AI_Settings.png?locale=en-us)
5.  Click **Save**.

> **Note:** If you do not see the **AI Settings** option or the **Polaris** toggle, contact [Contentstack Support](mailto:support@contentstack.com) to confirm Polaris is available on your plan.

## Step 2: Navigate to Roles

Navigate to the Roles section in Administration.

1.  In the top navigation panel, click **Roles**.  
    ![Select\_Roles.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am6c0e43cbe31ffbc3/b003cf979f26410059c765c2/Select_Roles.png?locale=en-us)

A list of existing roles appears in your organization, typically **Owner**, **Admin**, and **Member** by default.

## Step 3: Create a Custom Role with Polaris Access

The default Member role does not include Polaris permissions. You need to create a Custom Role that explicitly grants Polaris Read access.

1.  On the **Roles** page, click **\+ New Role**.![New\_Role.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am10d0e7c49f3e8623/a7960ef3ce7d5a3ae1d46c8e/New_Role.png?locale=en-us)
2.  Enter a **Name** for the role. For example, **Polaris Viewer**.
3.  Enter a **Description** for the role. For example, _"Custom role that grants Read access to Polaris for team members."_![Create\_Role\_Popup.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am2e7747c7564852f9/7d6b055411ff9bf93e5449d4/Create_Role_Popup.png?locale=en-us)
4.  Under **Select a Product**, click **Administration**.
5.  Scroll down and locate **Polaris**. Click **\+ Select Permissions**.  
    ![Polaris\_Select\_Permission.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amf07f1c25d668a646/1add9ad58e191b2e092e44fd/Polaris_Select_Permission.png?locale=en-us)
6.  Enable **Read** access, then click **Save**.
7.  Click **Create Role**.

> **Note:** You **only** need to create this Custom Role **once**. The same role can be assigned to multiple users, you do not need a separate role per user.

## Step 4: Assign the Custom Role to a User

Once the Custom Role is created, assign it to the users who need Polaris access.

**For New Users:**

1.  In the top navigation, click **Users**.![Users\_Tab.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama5821dd0e56b9bfb/d5975c7905f6c795f69df9f6/Users_Tab.png?locale=en-us)
2.  Click **\+ Invite User**.![Invite\_User.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama3d2938157d99a8e/cd9a6528683d695d4a4d3f51/Invite_User.png?locale=en-us)
3.  Enter comma-separated emails of the users you want to grant access to.
4.  Under **Assign Product Roles**, click **Administration**. The **Select Roles** side panel opens.
5.  Under **Product Roles**, select the custom role you created. For example, **Polaris Viewer**.![User\_Assigned.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am248a29d41cc91597/581837d778a46ca5302ec981/User_Assigned.png?locale=en-us)
6.  Click **Save** and then click **Invite**.

**For Existing Users:**

1.  In the top navigation, click **Users**.
2.  Under the **Actions** column, click the vertical ellipses and then click **Edit**.![Edit\_User.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amd5b517e60cb7f1b0/0f11d13f316909569dac0f6d/Edit_User.png?locale=en-us)
3.  Under **Manage Product Roles**, you can assign any product roles to the user. In our case, **Polaris Viewer** role.![Existing\_User\_Role.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am40dfe2a5dc63f1ea/568bffeecceef5b00f66189f/Existing_User_Role.png?locale=en-us)
4.  Click **Save** and then click **Update**.

Repeat this for each user who needs access. There is no limit on how many users can be assigned the same Custom Role.

> **Tip:** The user does not need to log out and log back in. A simple browser refresh is enough. The Polaris icon appears in the top navigation automatically. If the icon does not appear after a refresh, ask the user to do a hard refresh: **Ctrl+Shift+R** on Windows/Linux or **Cmd+Shift+R** on Mac.

## Troubleshooting

User still cannot see the Polaris icon after role assignment:

-   Confirm the Custom Role has Polaris Read access enabled. Empty permissions are not sufficient.
-   Confirm the Custom Role is **actually assigned** to the correct user and saved.
-   Ask the user to do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R).
-   If the issue persists, ask the user to log out and log back in.
-   If still unresolved, contact **Contentstack** [Support](mailto:support@contentstack.com).
