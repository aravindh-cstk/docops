---
title: "[Security Management] - Change Password"
description: Regularly updating your password helps protect your Contentstack account from unauthorized access.
url: https://www.contentstack.com/docs/administration/change-password
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Security Management] - Change Password

This page explains how to change your Contentstack account password from your profile settings. It is intended for Contentstack users and administrators who need to update credentials for security or compliance, and should be used whenever you want to rotate your password or align with your organization’s password policy.

## Change Password

Regularly updating your password helps protect your Contentstack account from unauthorized access. It is recommended to choose a strong, unique password that is not reused across other platforms.

Contentstack allows users to update their password directly from their profile settings.

**Note:** Changing your password signs you out of all sessions across browsers, tabs, and devices.

To change your password, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Click the "Profile" icon in the top-right corner of the dashboard and select **Profile** from the dropdown.![Change Password 1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83c07302ecd7ecb8/6866312a4282266725808b7d/Change_Password_1.png)
- In the **Profile** section, click the **Security** tab in the left navigation panel.![Change Password 2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e4fdef08f90fdbd/6866312b94765cae0bb265ad/Change_Password_2.png)
- Under **Email & Password**, click **Reset Password**.![Change Password 3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltff9af47d8a22eaea/6867b1a15839bcd64ad94cd7/Change_Password_3.png)
- In the **Reset Password** modal, enter your current password in the **Old Password** field. Type your new password in the **New Password** field. Re-enter your password in the **Confirm Password** field.![Change Password 4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7f9ea0ea6892503b/686632133f6f2e58602dd4ac/Change_Password_4.png)

  **Note:** Ensure the new password meets your organization’s [password policy](../organization/security-configuration.md#password-policies).
- Click **Update** to apply the new password.

Use the new credentials for your next login.

**Tip**: For security, avoid reusing old passwords and consider enabling [Multi-Factor Authentication (MFA)](./multi-factor-authentication.md) for an extra layer of protection.

**Additional Resource:** If you do not remember your password, refer to the [Forgot (Reset) Password](./forgot-reset-password.md) document for more information.

## API Reference

To reset your password via API, refer to the [Reset Password](../../../api-docs/api-detail/content-management-api.md#reset-password) API request.

## Common questions

### Does changing my password sign me out everywhere?
Yes. **Note:** Changing your password signs you out of all sessions across browsers, tabs, and devices.

### Where do I change my password in Contentstack?
Go to **Profile** → **Security** → under **Email & Password** click **Reset Password**.

### What if I forgot my current password?
Refer to the [Forgot (Reset) Password](./forgot-reset-password.md) document for more information.

### Can I reset my password using an API?
Yes. To reset your password via API, refer to the [Reset Password](../../../api-docs/api-detail/content-management-api.md#reset-password) API request.