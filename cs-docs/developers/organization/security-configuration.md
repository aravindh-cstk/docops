---
title: "[Organization] - Security Configuration"
description: Configure organization security settings including Multi-Factor Authentication, Password Policies, Session Timeout, and Allowed Email Domains.
url: https://www.contentstack.com/docs/administration/security-configuration
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Organization] - Security Configuration

This page explains how to strengthen your organization’s security in Contentstack by configuring security best practices such as MFA, password policies, session timeout, and allowed email domains. It is intended for organization owners and admins who need to define and enforce security controls for users, and should be used when setting up or updating organization-wide security requirements.

## Security Configuration

Strengthen the security of your organization by implementing security best practices that allow you to define the level of protection you want to enforce.

You can configure the following:
- Multi-Factor Authentication
- Password Policies
- Session Timeout
- Allowed Email Domains

## Multi-Factor Authentication

**Multi-Factor Authentication** (**MFA**) adds an extra layer of protection to user logins. When enabled, all users in your organization must set up MFA the next time they log in.

To enable MFA for your organization, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to **Administration** through “App Switcher”.
- Click the **Security Configuration** tab.
- Enable MFA using the toggle switch. Click **Save** to save your configuration.![MFA.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28253b38051e9877/6915b51655501d6a21da50b8/MFA.png)

**Note:** Once enabled, MFA setup becomes mandatory for all users on their next login.

**Additional Resources: **Refer to our document on setting up [multi-factor authentication](../security/two-factor-authentication.md) for more information.

## Password Policies

Password policies help you control how passwords are created and maintained in your organization. You can choose to configure any combination of the available settings, depending on the level of security you want to enforce.

To enable and customize password policies for organization users, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to **Administration** through “App Switcher”.
- Click the **Security Configuration** tab and select **Password Policies**.
- In the **Password Duration** field, set the number of days (**0–365**) after which passwords must be updated. For example, setting the duration to 90 days forces users to reset their passwords every 90 days.

  **Note**: Set **Password Duration** to **0** for no password expiry.
- In **Minimum Password Length**, enter a value (**minimum 8**).
- Click **Save** to save your configuration.![Password_Policies.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd354f70ad0cffe59/6915b516ac78ca3a8928a08b/Password_Policies.png)

**Note:**

If you belong to multiple organizations:
- The organization with the highest minimum password length applies during password reset.
- The shortest password expiration period applies.
- Enforcing MFA or password reset in any of these organizations, applies immediately on the next login.

## Session Timeout

Session timeout in Contentstack’s **Security Configuration** settings allows organization [owners](./organization-roles.md#organization-owner) and [admins](./organization-roles.md#organization-admin) to automatically log users out after a defined period of inactivity or maximum session duration. This enhances account security by minimizing risks related to unattended active sessions.

Enabling session and idle timeouts helps ensure:
- Improved control over user session duration
- Reduced risk of unauthorized access from idle sessions
- Customizable timeout periods that align with your organization’s security policies

You can also whitelist email addresses to exempt specific users from timeout enforcement, ideal for service accounts or trusted users.

To configure session timeout, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Administration** through “App Switcher”.
- Click the **Security Configuration** tab and then select **Session Timeout**.
- Toggle the **Enable Session Timeout** switch to turn the feature on.
- In the **Maximum Session Duration (hours)** field, enter the desired session duration in hours. Users get automatically logged out after the configured session timeout value. Default value: **12 hours**.
- In the **Maximum Inactivity Timeout (hours) **field, enter the inactivity threshold in hours. Users get automatically logged out after the configured idle timeout value. Default value: **1 hour**.
- In the **Allowlist User Email** field, enter comma-separated email addresses. These users are exempt from timeout rules.![Session_Timeout.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt05cbe1e5591e748e/696f5b5b596f034f56c26cad/Session_Timeout.png)
- Click **Save** to apply your settings, or **Cancel** to discard changes.

**Notes**:
- Session timeout is the maximum duration a user can stay logged in, regardless of activity.
- Idle timeout logs users out after a period of inactivity.
- Idle timeout must be **shorter than** the session timeout.
- You can add any number of email addresses to the allowlist.

## Allowed Email Domains

The **Allowed Email Domains** feature lets you restrict user access to specific email domains within your organization. This enhances security by ensuring that only users with approved email domains can be added to your organization.

**Note**: Enabling this setting does not affect existing users.

To enable and add email domains, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Administration** through “App Switcher”.
- Click the **Security Configuration** tab and select **Allowed Email Domains**.
- Toggle the **Enable Allowed Email Domains** switch.
- In the **Add Allowed Email Domain(s)** field, enter the domains you want to allow (e.g., yourcompany.com).![Allowed_Email_Domains.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5afd82eeddba9d80/6915b516a582d743e01ac668/Allowed_Email_Domains.png)

  **Note**: You can add up to **30 email domains**.
- Click **Save** to apply the configuration.

**Note**: When this setting is enabled, users with unapproved email domains cannot be invited or added to your organization. An error message appears if you attempt to add them.

By implementing these security features, you can significantly enhance your organization’s security.

## Common questions

### Who can configure Session Timeout settings?
Session timeout in Contentstack’s **Security Configuration** settings allows organization [owners](./organization-roles.md#organization-owner) and [admins](./organization-roles.md#organization-admin) to automatically log users out after a defined period of inactivity or maximum session duration.

### What happens after enabling MFA?
Once enabled, MFA setup becomes mandatory for all users on their next login.

### Does enabling Allowed Email Domains affect existing users?
**Note**: Enabling this setting does not affect existing users.

### How many email domains can be added to Allowed Email Domains?
You can add up to **30 email domains**.