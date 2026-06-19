---
title: "[Security Management] - Account Lockout Policy"
description: Contentstack account lockout policy details, including how lockouts work, unlock steps, and best practices.
url: https://www.contentstack.com/docs/administration/account-lockout-policy
product: Contentstack
doc_type: security-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Security Management] - Account Lockout Policy

This page explains Contentstack’s account lockout policy, including how failed login attempts trigger temporary or indefinite lockouts, how organization admins/owners can unlock users, and recommended best practices for avoiding lockouts.

## Account Lockout Policy

To strengthen login security, Contentstack enforces an account lockout policy that prevents unauthorized access through repeated failed login attempts. This helps protect user accounts from brute-force attacks or credential guessing.

## How Account Lockout Works

When a user enters incorrect login credentials consecutively, the account becomes temporarily locked for increasing durations based on the number of failed attempts. If unsuccessful attempts continue, the account gets locked indefinitely.

During the lockout period, login access is restricted. However, authorized users can still use the **Forgot Password?** option to reset their password and regain access.

| Failed Login Attempts | Lockout Duration |
|---|---|
| 1 to 4 attempts | 0 mins |
| 5th attempt | 5 mins |
| 6th attempt | 10 mins |
| 7th attempt | 15 mins |
| 8th attempt | 20 mins |
| 9th attempt | 25 mins |
| 10th attempt | Locked indefinitely |

**Note:**
- Starting from the **5th failed** login attempt, Contentstack sends an email notification for each additional failed attempt. The email includes the login attempt details, such as the browser, device, and IP address used, to help you identify suspicious activity.
- After the **10th failed** attempt, the user account remains locked until manually reviewed. Contact your Contentstack organization [admin](/docs/developers/organization/organization-roles#organization-admin) or [owner](/docs/developers/organization/organization-roles#organization-owner) to get unlocked.

## Unlock Users

Organization admins and owners can manually unlock users individually or in bulk.

To unlock users individually or in bulk, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Navigate to **Administration** > **Users** through “App Switcher”.
- Click the vertical ellipsis in the **Action** column next to the locked user.Or select up to **10 users** using the respective checkboxes.
- Click **Unlock User**.
- Review the selected users in the confirmation modal and click **Continue** or **Proceed** to restore access.

**Note**:
- The **Unlock User** option is not available for:
  - Users who are part of multiple Contentstack organizations
  - Org owners

In both cases, contact Contentstack [support](mailto:support@contentstack.com) to unlock the user.
- The **Unlock User** button appears only if **all users selected in bulk** are unlockable. If one or more selected users are ineligible (e.g., multi-org users or organization owner or already unlocked user), the option will not be shown.

## Best Practices

To avoid account lockouts, follow these best practices to ensure secure and uninterrupted access to your Contentstack account:
- Ensure login credentials are entered correctly
- Use a secure and updated password manager
- Reset your password promptly if forgotten

For additional security, enable [Multi-Factor Authentication (MFA)](/docs/developers/security/multi-factor-authentication) to protect your account with an extra layer of verification.

## Common questions

**How many failed login attempts are allowed before a lockout starts?**  
Lockout durations begin starting from the 5th failed login attempt.

**Can I regain access during a lockout without admin help?**  
During the lockout period, authorized users can still use the **Forgot Password?** option to reset their password and regain access.

**Who can manually unlock a locked user?**  
Organization admins and owners can manually unlock users individually or in bulk.

**Why might the “Unlock User” option not appear for a user or bulk selection?**  
The **Unlock User** option is not available for users who are part of multiple Contentstack organizations or org owners, and the bulk option appears only if all selected users are unlockable.