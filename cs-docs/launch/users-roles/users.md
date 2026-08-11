---
title: "Users"
description: "Learn about the different users and their roles in Contentstack Launch."
url: /launch/users
---

# Users

## Users

Users are individuals who have access to contribute to or manage the Launch project.  
Roles define the scope of actions users can perform based on their level of access.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization

## What You Will Learn

-   The Launch roles and what each role can do.
    
-   The permissions for each role across Launch resources.
    
-   How to invite a user to a project.
    
-   How to remove a user from a project.
    

## Roles and Capabilities

| **Roles** | **Capabilities** |
| --- | --- |
| Organization Owner/Admin | Full access to all actions and settings, including the ability to install external Git provider apps. |
| Launch Project Owner | Full access to all actions and settings. |
| Admin | Can perform all actions and manage settings, except deleting a project or repairing the Git connection. |
| Read-Only | Can view environments, deployments, and settings but cannot create, update, or delete anything. |

**Note:** Only the Launch Project Owner, [Organization Owner](/docs/administration/about-administration-roles#organization-owner) and [Organization Admin](/docs/administration/about-administration-roles#organization-admin) can add or remove users.

## User Permissions

The following table outlines the permissions for each role across various resources:

| Resources | Actions | Organization Owner/Admin | Launch Project Owner | Admin | Read-Only |
| --- | --- | --- | --- | --- | --- |
| Project | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Create | check\_circle  | check\_circle  | check\_circle  | cancel |
| Update | check\_circle  | check\_circle  | check\_circle  | cancel |
| Repair Git Connection | check\_circle  | check\_circle  | cancel  | cancel |
| Delete | check\_circle  | check\_circle  | cancel  | cancel |
| Environment | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Create | check\_circle  | check\_circle  | check\_circle  | cancel |
| Update | check\_circle  | check\_circle  | check\_circle  | cancel |
| Delete | check\_circle  | check\_circle  | check\_circle  | cancel |
| Domain | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Create | check\_circle  | check\_circle  | check\_circle  | cancel |
| Update | check\_circle  | check\_circle  | check\_circle  | cancel |
| Delete | check\_circle  | check\_circle  | check\_circle  | cancel |
| Deploy Hook | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Create | check\_circle  | check\_circle  | check\_circle  | cancel |
| Update | check\_circle  | check\_circle  | check\_circle  | cancel |
| Delete | check\_circle  | check\_circle  | check\_circle  | cancel |
| Password Protection | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Enable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Disable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Deployment | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Create | check\_circle  | check\_circle  | check\_circle  | cancel |
| User | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Invite | check\_circle  | check\_circle  | cancel  | cancel |
| Remove | check\_circle  | check\_circle  | cancel  | cancel |
| Event Tracking (Lytics) | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Enable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Disable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Cache Priming | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Enable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Disable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Contentstack Authentication | View | check\_circle  | check\_circle  | check\_circle  | check\_circle |
| Enable | check\_circle  | check\_circle  | check\_circle  | cancel |
| Disable | check\_circle  | check\_circle  | check\_circle  | cancel |

## Managing Users

### Invite a User to the Project

1.  [Log in to your Contentstack account](https://www.contentstack.com/login/) and select the **Launch** icon from the dashboard.![Launch_2026_Landing_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93cb437e9760884e/69647cf52269f8000829f814/Launch_2026_Landing_Page.png)
2.  On the Launch landing page, click the desired project. ![Launch_Projects_Landing_Page_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21093a02592b00ef/69afdb45afcf450008d243b2/Launch_Projects_Landing_Page_2026.png)
3.  From the top panel, click the **Settings** icon. ![Launch_Settings_Top_Panel_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8d176dbeab238ef/69b79184e1b72b1fca87fca1/Launch_Settings_Top_Panel_2026.png)
4.  In the **Users** section, click the **Invite User** button. ![Launch_Users_InviteUser.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9125939a76cc786/673c4acb19d0a88442f248f2/Launch_Users_InviteUser.png)
5.  In the **Invite User** modal:
    
    -   To assign the **Admin** role to the user, follow the steps below:
        
        1.  Enter the user's email address.
        2.  Select the role as **Admin** from **Roles** drop-down.
        3.  Optionally, add a message for the invitee.
        4.  Click **Invite** to send the invitation.
        
        ![Launch_Users_Admin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt191d14d60df4ca81/673c4acc7f08481251e9a76f/Launch_Users_Admin.png)
    -   To assign the **Read-Only** role to the user, follow the steps below:
        
        1.  Enter the user's email address.
        2.  Select the role as **Read-Only** from **Roles** drop-down.
        3.  Optionally, add a message for the invitee.
        4.  Click **Invite** to send the invitation.
        
        ![Launch_Users_ReadOnly.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt704e7069810b13d3/673c4acb34cf2e2f9a98e9ab/Launch_Users_ReadOnly.png)
    
    You can invite multiple users by entering their email addresses.  
    The invited user will receive an email. Once they accept the invite and are authorized, their status will update to **Accepted**.
    
    ![Launch_Users_Accepted.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37c4083a0a00e1a3/673c4acb22e1d8c26e62b55f/Launch_Users_Accepted.png)

### Remove a User from the Project

1.  Go to the desired project and click the **Settings** icon from the left navigation panel.
2.  In the **Users** section, locate the user you want to remove.
3.  Click the **ellipses** under **Actions** and select **Remove**. ![Launch_Users_RemoveClick.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb767bbfe1f957219/673c4acb80c1bf52844d4687/Launch_Users_RemoveClick.png)
4.  Click the **Yes, Remove** button to successfully remove the user. ![Launch_Users_RemoveUserModal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte750adc027ca5f37/673c4acc3c066b5f0dea0a87/Launch_Users_RemoveUserModal.png)
