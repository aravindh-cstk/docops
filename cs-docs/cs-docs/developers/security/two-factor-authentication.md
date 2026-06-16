---
title: "[Security Management] - Two-factor Authentication"
description: Enable, reset, and disable two-factor authentication (2FA) for Contentstack accounts using Authy or SMS.
url: https://www.contentstack.com/docs/developers/security/two-factor-authentication
product: Contentstack
doc_type: security-guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-25
---

# [Security Management] - Two-factor Authentication

This page explains what Two-factor Authentication (2FA) is in Contentstack and provides step-by-step instructions for enabling 2FA, logging in with 2FA, resetting your phone number, and disabling 2FA. It is intended for Contentstack users and administrators who manage account security settings and should be used when configuring or troubleshooting 2FA access.

## Two-factor Authentication

Two-factor Authentication is a way of verifying a user’s identity by using a combination of two different verification methods. It adds an extra layer of security, thereby ensuring that only authorized user(s) can access an account, even if the password has been compromised.

In Contentstack, the two methods used for two-factor authentication are:
- Username and password (normal login credentials)
- One-time security code via [Authy app](https://www.authy.com/download/) OR one-time security code via SMS

## Enable Two-factor Authentication

To enable Two-factor Authentication for your account, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- **Go to Security**
Click on your profile name on the top right-hand side corner of the page and select **Profile**. Then, select **Security**.
- **Enter mobile number**
Under Security, scroll down to **Two-factor Authentication**. Enter your mobile number, along with the country code, in the given fields. Click **Enable 2FA**.
- **Get a verification code**
You will be prompted to select one of the two available methods for verifying your identity: Authy app and Text message.

**Authy app**: This method supports verification via [Authy mobile app](https://www.authy.com/download/) (available for iOS, Android, and Desktop). To use this method, you need to first install the application on your mobile phone or desktop PC, and complete the registration using the same credentials as your Contentstack. After selecting the Authy app, your Contentstack account will be automatically registered with the app. It will then generate a security token, which you need to enter for verification.
- **Text message**: This method supports verification by sending a security code via SMS to the specified mobile phone for enabling two-factor authentication.

**Note:** The two options are available for verifying your phone number during the enabling process of two-factor authentication. It does not set the selected method as your preferred method for logging in.
- **Complete 2FA setup**
Select **Finish**. With this step, two-factor authentication is enabled for your account. Subsequently, you will receive a confirmation email at your registered email address.
- **Login with 2FA**
Log out of your Contentstack account. Log in again by entering your username and password. The next screen will prompt you to enter the security code.

Irrespective of the method selected for verification in Step 3, the login page expects the security code that is visible on the Authy app on your mobile phone. When you launch it, you will see a security token. Enter this token on the login page and you will be logged in immediately.

In case you do not have access to the Authy app, you can log in using an SMS verification - but please note this isn’t the preferred method as it’s not as secure. To use this workaround, click the ‘Send me an SMS’ link located below the input field available for entering the security code.

## Reset Phone Number

Once Two-factor Authentication is enabled, the login system (via either Authy or SMS) uses your registered phone number to verify your identity. Consequently, if you do not have access to your registered phone number (if you changed it or otherwise), it won’t be possible to log in. Thankfully, Contentstack has a way around this.

Here’s the process to change your verified phone number:
- Go to the "Two-Factor Authentication" page.
- Click the "Reset your phone number" link visible beside the phone number field.
- Enter the new number in the phone number field and click **Reset** button.
- Select a method to verify your phone number, and perform the verification process as you normally do while enabling two-factor authentication.

## Disable Two-Factor Authentication

You can disable the Two-factor Authentication in a few steps. However, it is important to note that doing this will remove the additional layer of security from your account. Contentstack highly recommends keeping it enabled.

Here are the steps for disabling two-factor authentication:
- Go to the "Two-factor Authentication" page.
- Click the "Disable 2FA" button located below the phone number fields.
- On the dialog box that appears, confirm by clicking on "Disable".
Once two-factor authentication is disabled, you will be able to log in to your account by simply entering your registered email address and password.

**Additional Resource**: It is advisable to change your password regularly to ensure account security. Here are some [password requirements](/docs/developers/password-related-security/password-requirements) that you need to follow. To know more about password security, refer to our [Password-related Security](/docs/developers/password-related-security) section.

## Common questions

### Does selecting Authy app or Text message during setup set my preferred login method?
No. **Note:** The two options are available for verifying your phone number during the enabling process of two-factor authentication. It does not set the selected method as your preferred method for logging in.

### What security code does the login page expect?
Irrespective of the method selected for verification in Step 3, the login page expects the security code that is visible on the Authy app on your mobile phone.

### What if I don’t have access to the Authy app?
You can log in using an SMS verification by clicking the ‘Send me an SMS’ link located below the input field available for entering the security code, but please note this isn’t the preferred method as it’s not as secure.

### What happens if I disable two-factor authentication?
Once two-factor authentication is disabled, you will be able to log in to your account by simply entering your registered email address and password.

<!-- filename: security-management-two-factor-authentication.md -->