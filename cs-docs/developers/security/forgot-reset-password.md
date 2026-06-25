---
title: "[Security Management] - Forgot (Reset) Password"
description: Reset a forgotten Contentstack password using the registered email address or via API.
url: https://www.contentstack.com/docs/administration/forgot-reset-password
product: Contentstack
doc_type: security-guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-25
---

# [Security Management] - Forgot (Reset) Password

This page explains how to reset a forgotten Contentstack password using your registered email address, and where to find the API option. Use it when you can’t sign in and need to regain access securely.

## Forgot (Reset) Password

Forgetting your Contentstack password does not mean losing access. Use your registered email address to securely reset your password and restore access to your account.

To reset your password, perform the following steps:
- Click the **Forgot Password?** link located below the login fields on the Contentstack login page.
- Enter the email address associated with your Contentstack account. Select **Send Instructions** to initiate the reset process.
- Open the email from Contentstack and use the password reset link provided. The link directs you to the password reset form.**Note:** The password reset link expires after **60 minutes**. If it is no longer valid, repeat the steps above to generate a new link.
- In the **Reset Password** form, enter your new password. Confirm it by re-entering the same password in the second field. Click **Reset Password** to complete the update.**Note:** Resetting your password signs you out of all active sessions across browsers, tabs, and devices.

Your password has been successfully reset. Sign in using your new credentials.

## API Reference

To reset your password via API, refer to the [Reset Password](../../../api-docs/api-detail/content-management-api.md#reset-password) API request.

## Common questions

**How long is the password reset link valid?**  
The password reset link expires after **60 minutes**.

**What should I do if my reset link has expired?**  
Repeat the steps above to generate a new link.

**Will resetting my password affect my active sessions?**  
Yes. Resetting your password signs you out of all active sessions across browsers, tabs, and devices.

**Can I reset my password using an API instead of the UI?**  
Yes. Refer to the [Reset Password](../../../api-docs/api-detail/content-management-api.md#reset-password) API request.