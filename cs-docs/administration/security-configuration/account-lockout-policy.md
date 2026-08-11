---
title: "Account Lockout Policy"
description: "Enhance Contentstack login security with account lockout policies and multi-factor authentication to protect against unauthorized access and brute-force attacks."
url: /administration/account-lockout-policy
---

# Account Lockout Policy

## Account Lockout Policy

To strengthen login security, Contentstack enforces an account lockout policy that prevents unauthorized access through repeated failed login attempts. This helps protect user accounts from brute-force attacks or credential guessing.

## How Account Lockout Works

When a user enters incorrect login credentials consecutively, the account becomes temporarily locked for increasing durations based on the number of failed attempts. If unsuccessful attempts continue, the account gets locked indefinitely.

During the lockout period, login access is restricted. However, authorized users can still use the **Forgot Password?** option to reset their password and regain access.

<table><tbody><tr><td><strong>Failed Login Attempts</strong></td><td><strong>Lockout Duration</strong></td></tr><tr><td>1 to 4 attempts</td><td>0 mins</td></tr><tr><td>5th attempt</td><td>5 mins</td></tr><tr><td>6th attempt</td><td>10 mins</td></tr><tr><td>7th attempt</td><td>15 mins</td></tr><tr><td>8th attempt</td><td>20 mins</td></tr><tr><td>9th attempt</td><td>25 mins</td></tr><tr><td>10th attempt</td><td>Locked indefinitely</td></tr></tbody></table>

**Note:**

-   Starting from the **5th failed** login attempt, Contentstack sends an email notification for each additional failed attempt. The email includes the login attempt details, such as the browser, device, and IP address used, to help you identify suspicious activity.
-   After the **10th failed** attempt, the user account remains locked until manually reviewed. Contact your Contentstack organization [admin or owner](/docs/administration/about-administration-roles) to get unlocked.

## Unlock Users

Organization admins and owners can manually unlock users individually or in bulk.

To unlock users individually or in bulk, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to **Administration** > **Users** through “App Switcher”.
2.  Click the vertical ellipsis in the **Action** column next to the locked user.![Action column ellipsis for a locked user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0465f2f1b10ad97e/693aa8495bb1c13b1837e284/Unlock_Users_1.png)
    
    Or select up to **10 users** using the respective checkboxes.
    
    ![Selecting multiple users with checkboxes](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879e21d28d5d776/693aa84afe65010a443ecf9e/Unlock_Users_2.png)
3.  Click **Unlock User**.
4.  Review the selected users in the confirmation modal and click **Continue** or **Proceed** to restore access.

**Note**:

-   The **Unlock User** option is not available for:
    
    -   Users who are part of multiple Contentstack organizations
    -   Org owners
    
    In both cases, contact Contentstack [support](mailto:support@contentstack.com) to unlock the user.
    
-   The **Unlock User** button appears only if **all users selected in bulk** are unlockable. If one or more selected users are ineligible (e.g., multi-org users or organization owner or already unlocked user), the option will not be shown.

## Best Practices

To avoid account lockouts, follow these best practices to ensure secure and uninterrupted access to your Contentstack account:

-   Ensure login credentials are entered correctly
-   Use a secure and updated password manager
-   Reset your password promptly if forgotten

For additional security, enable [Multi-Factor Authentication (MFA)](/docs/administration/multi-factor-authentication) to protect your account with an extra layer of verification.
