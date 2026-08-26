---
title: "Organization Information"
description: "Explore Contentstack's Org Info & Security Dashboard for detailed organization insights, security posture, activity tracking, compliance metrics, and best practices."
url: /administration/organization-information
uid: blt3509114850541ce7
---

# Organization Information

## Organization Information (Security Dashboard)

The Org Info section provides a centralized view of your organization's details and security posture in Contentstack.

Depending on your role, this page displays different levels of information:

-   Member roles see basic organization details such as name and ID.
-   Admin, Owner, Security Manager, and custom roles with relevant permissions can see the Security Dashboard, which includes advanced security insights, activity tracking, and recommendations

## Access Org Info

To access the Org Info (Security Dashboard) page, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Navigate to **Administration** through “App Switcher”.
2.  By default, the **Org Info** tab is selected.

## Basic Organization Info

If you have member-level permissions, the **Org Info** section displays:

-   Organization name
-   Organization ID
-   Option to leave organization

![Basic Organization Info view](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am44cd48032241f83a/9f55473e8ba285cb50e3f3f2/Security_Dashboard_1.png?locale=en-us)

## Security Dashboard

If you have elevated permissions (**Admin**, **Owner**, **Security Manager**, or custom roles), the **Security Dashboard** replaces the basic **Organization Info** view.

![Security Dashboard overview](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9e805d5397e011c3/3fe75f8a6893ba0329e163d4/Security_Dashboard.png?locale=en-us)

This dashboard helps you monitor security risks, user activity, and compliance metrics in one place.

## Key Sections of the Security Dashboard

The Security Dashboard presents a consolidated view of key security controls, risks, and organization activity to help you monitor and improve your security posture.

The following sections help you monitor trends, identify risks, and take corrective actions.

### Current Trends

The **Current Trends** section provides a high-level snapshot of key organization metrics. It helps you quickly assess changes in user activity and identify potential risks.

![Current Trends metrics](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ambe2a758424686651/e582cfe604dfd5fd0a895693/Security_Dashboard_2.png?locale=en-us)

This section includes:

-   Total Users
-   Pending Invitations
-   Users Without MFA (Multi-Factor Authentication)
-   Inactive Users (users who have not logged in for more than 90 days)
-   Locked/Suspended Users

Use these metrics to identify gaps, such as users without MFA or an increasing number of inactive accounts.

### Security Scorecard

The **Security Scorecard** summarizes your organization's overall security posture using a numerical score.

![Security Scorecard](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am44f285f2fa1117d3/3632b7d8c1860ab7b8f5f26b/Security_Dashboard_3.png?locale=en-us)

It categorizes your security level as follows:

-   **0 to 40 (Critical)**: Immediate action required
-   **41 to 70 (At risk**): Improvements recommended
-   **71 to 100 (Secure)**: Strong security posture

This score helps you understand where your organization stands and what actions you can take to improve security.

#### How Security Scorecard Works

The security score is calculated using a weighted scoring model. Each security control is assigned a weight based on its importance.

-   Each security control has a defined weight
-   Your score improves as controls are enabled or configured correctly.
-   Issues are prioritized by impact level (for example, Critical, High) to guide what to fix first.

Different security controls are included in your Security Score based on your organization's authentication setup (Password-based authentication, SSO, or Strict SSO-only). This ensures your Security Score reflects only the controls relevant to your organization's security configuration.

**Tip:** Focus on resolving Critical and High-impact recommendations first to quickly improve your security score.

### Organization Info

The **Organization Info** section provides quick access to essential organization details alongside security insights.

![Organization Info section](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am9c5a1b611626d7e4/a5abd56b24a41ada76cbf95f/Security_Dashboard_4.png?locale=en-us)

In this section, you can view:

-   Organization name
-   Organization UID
-   Leave organization or transfer ownership (visible only to the organization owner)

**Note:** **Organization Name** and **Organization UID** are system-generated and cannot be modified. Contact [support](mailto:support@contentstack.com) if updates are required.

This ensures that critical organization details remain accessible without leaving the dashboard.

The **Transfer Ownership** option lets you assign ownership to another user:

1.  Click **Transfer Ownership**.
2.  Enter the email address of the target user.
3.  Send the ownership invitation.

Once the user accepts the request:

-   They become the Organization Owner.
-   Your role changes to Member.

**Warning:** After ownership transfer, you lose elevated access and retain only member-level permissions.

### Role Distribution

The **Role Distribution** section visualizes how roles are assigned across your organization

![Role Distribution chart](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amff5ec5fda63de92a/c151464e8598959ed9cab878/Security_Dashboard_6.png?locale=en-us)

This helps you understand how access is distributed and whether privileged roles are over-assigned. Monitoring this section supports better role-based access control and reduces security risks.

### Password Compliance

The **Password Compliance** section shows how recently users have updated their passwords.

![Password Compliance breakdown](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amab1596fe478373e5/df1cfe745d4ea38bea2ff40f/Security_Dashboard_5.png?locale=en-us)

It groups users into categories such as:

-   Less than 30 days
-   30 to 60 days
-   60 to 90 days
-   90 to 180 days
-   More than 180 days

This helps you identify users with outdated passwords and enforce password policies effectively.

### User Session Insights

The **User Session Insights** section tracks how long users remain logged in.

![User Session Insights](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am3a2d84bb61ad14fa/4e43608457b07a354170ab86/Security_Dashboard_8.png?locale=en-us)

It includes:

-   Total Active Sessions
-   Active Sessions (60+ Days)

Active sessions for more than 60+ days may pose security risks, especially if sessions are not actively monitored or revoked.

### Recent Activity

The **Recent Activity** section displays the most recent security-related events within your organization. It provides visibility into important actions and changes, helping you audit activity and detect anomalies.

![Recent Activity events](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1b9e96f8adb8b58e/92bd34d711b185e26201df20/Security_Dashboard_7.png?locale=en-us)

Below are some of the key events displayed:

| **Event** | **What it means** | **Severity** |
| --- | --- | --- |
| Account Unlocked | A locked account was restored | Warning |
| User Invited | A new user was invited | Info |
| User Removed | A user was removed | Warning |
| Role Updated | User permissions changed | Info |
| Forced Password Reset | Admin enforced password reset | Warning |
| MFA Reset | MFA settings were reset | Warning |
| Team Created | New team created | Info |
| Team Updated | Team details modified | Info |
| Security Configuration Changed | Security settings updated | Critical |

This section helps you audit activity and detect potential security issues.

## Best Practices

Security recommendations and best practices shown in the dashboard are designed to improve overall security hygiene by guiding administrators toward commonly accepted configurations and controls:

-   Enable MFA for all users.
-   Review inactive users regularly.
-   Monitor long-lived sessions.
-   Limit admin and owner roles.
-   Act on critical security alerts immediately.

The Security Dashboard continuously updates based on organization activity and configuration changes, ensuring that security insights and metrics reflect the most recent state of your organization.
