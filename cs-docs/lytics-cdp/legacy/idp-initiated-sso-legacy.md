---
title: "IDP-initiated SSO (legacy)"
description: "IDP-initiated SSO (legacy)"
url: /lytics/idp-initiated-sso-legacy
---

# IDP-initiated SSO (legacy)

## IDP-initiated SSO (legacy)

## IDP-initiated SSO (Legacy)

This document describes a legacy implementation that Lytics is actively deprecating. If you're looking for details on the current SSO implementation, check out the [new documentation.](/docs/lytics/single-sign-on-overview)

Lytics supports enterprise Single Sign-On (SSO) by using [Auth0](https://auth0.com/) as a service provider using [SAML protocol](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language). Lytics integrates with Identity Providers (IdPs) in such a way that the IdP initiates SSO. That is, when your end user logs in to their IdP, they will use a global portal for your organization. Users can then click a link or button that will log them into Lytics seamlessly.

Behind the scenes, the IdP will be contacting the Lytics Auth0 service provider to verify the user and redirect them to a logged-in instance of the Lytics app. This document describes the process for integrating with a new IdP that uses SAML.

### Service Provider Configuration

To configure SAML for the Lytics service provider some information is required about your IdP. If you have a metadata file that contains SAML provider information this may be appropriate, just make sure that the following information is provided to [Lytics Support](https://support.lytics.com/hc/en-us):

-   Sign In URL
-   X509 Signing Certificate (The identity provider public key - if possible encoded in a separate PEM or CER formatted file)
-   Sign Out URL

Further configuration details such as mappings may need to be provided. Once this information has been received, Lytics can configure the SAML connection in Auth0.

### IdP Configuration

After Lytics configures the SAML connection on the service provider, [Lytics Support](https://support.lytics.com/hc/en-us) will provide a metadata XML file with the following information in order to complete the IdP configuration. The key fields in this metadata are:

-   Connection Name
-   Assertion Consumer Service (ACS) URL (aka post-back or callback URL)
-   Entity ID of the Service Provider

With this information, your IdP connection can be configured to complete the SSO integration.

### Testing SSO

Once all the information has been configured in both the IdP and the Lytics service provider, you can test and verify that the SSO implementation works as expected. If you are using SSO as your only sign-in method, please disable any password restriction or expiration settings that may have been enabled in the UI.

During the testing process, Lytics can be configured to allow both SSO logins and regular username and password (or Google OAuth) login through the app. This allows users to test SSO without disrupting the day-to-day usage of the app.

If requested, once the SSO implementation has been tested and verified, Lytics can disable the use of other logins for an account.

### Troubleshooting SSO

If it's known that SSO is going to be added to an account, then the user email addresses added to the account should match the email address present within the IdP. If the email address doesn’t match, then the login will fail as Lytics will not be able to verify that there is a user with that email address.

For instance, if the email listed in the IdP is `abc@123`, and within Lytics it’s `def@456`, then the user will have successfully been verified by their IdP, but the login within Lytics would fail as the authenticated user email would not match the user within Lytics. You would need to create a new user within Lytics with the email address `abc@123` for the SSO login to be successful.

It should also be noted that primary accounts are decided as the first account that a user was added to. Due to this, users from a single group/organization will often have different primary accounts. This is important for SSO as it will also be the account that the user is logged into at the start of their session. If SSO is enabled as the only means of login on one account and a user attempts to log-in using Google OAuth or their username and password, the login session will fail. The following options are possible solutions:

-   Add that user to your IdP.
-   Other methods of logging in would need to be added (Google OAuth, username/password).
-   Remove user from all accounts and then add them back with the first account being the account that you want to be their primary account.

[Lytics Support](https://support.lytics.com/hc/en-us) can assist in the troubleshooting process. When testing for the first time Lytics can enable logging to help troubleshoot any issues you may encounter. If you are receiving the error message shown below after being redirected to the app, that means there is an issue on the application side.

![SSO Error State](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am175eacbbe916fcfe/0bef7c7c6b74efb333269d77/img-0149.png)

The [Lytics Support](https://support.lytics.com/hc/en-us) team can help debug this if you provide information on the login attempt such as the time of the login and the user and account.

If you’re encountering an error earlier in the login process, such as before you are redirected to the Lytics app, this may be an issue with the SAML configuration either on the IdP or Service provider side. Lytics’ support team can review these issues and coordinate a fix, just contact us with the details of the issue.
