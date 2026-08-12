---
title: "Implement TOTP Support for .NET Management SDK"
description: "Add TOTP support to .NET Management SDK for MFA in Contentstack. Secure logins with time-based one-time passwords."
url: /developers/sdks/content-management-sdk/dot-net/implement-totp-with-dot-net-management-sdk
---

# Implement TOTP Support for .NET Management SDK

## Implement TOTP Support for .NET Management SDK

Time-based One-Time Password (TOTP) is a widely used method of two-factor authentication (2FA). It generates short-lived, unique numeric codes based on a shared secret and the current timestamp. These codes are used in addition to a user’s password to verify identity and enhance login security.

Contentstack’s .NET Management SDK supports TOTP as part of its multi-factor authentication (MFA) capabilities. This allows developers to authenticate MFA-enabled users by providing either a 2FA token or an MFA secret that dynamically generates the TOTP token.

By implementing TOTP support in your integration, you can:

-   Improve the security of user authentication using time-based verification.
-   Enable support for MFA-enabled accounts directly within applications.
-   Allow automation workflows to generate TOTP tokens programmatically using a stored MFA secret.

This guide explains how to use the updated Login and LoginAsync methods in the .NET Management SDK to support both standard and MFA-protected login flows.

## Login

The Login method is a synchronous function that authenticates a user to their Contentstack account using credentials. Upon successful authentication, it returns an auth token for accessing other APIs.

This method now supports MFA by accepting either a 2FA token or an MFA secret to generate a TOTP for enhanced login security.

**Returns**:

Type ContentstackResponse

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td>credentials (required)</td><td>ICredentials</td><td>User credentials used to authenticate the login request.</td></tr><tr><td>token</td><td>string</td><td>TOTP token generated from an authenticator app. Required for MFA-enabled users.</td></tr><tr><td>mfaSecret</td><td>string</td><td>Secret key generated when the user enables MFA in Contentstack. Used to dynamically create a TOTP token.</td></tr></tbody></table>

**Example**

The following code demonstrates how to authenticate users using the Login method in the .NET Management SDK.

The SDK supports three scenarios:

-   Standard login (no MFA)
-   Login with a 2FA token
-   Login using an MFA secret to dynamically generate a token

Replace the placeholder values with your user credentials and MFA details as applicable.

```
using System.Net;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
ContentstackClient client = new ContentstackClient();
NetworkCredential credentials = new NetworkCredential("<EMAIL>", "<PASSWORD>");

// Login when MFA is not enabled for the user 
ContentstackResponse contentstackResponse = client.Login(credentials);

// Login when MFA is enabled: use a valid TOTP token generated from an authenticator app
string tfa_token = "<my_tfa_token>";
ContentstackResponse contentstackResponse = client.Login(credentials, token = tfa_token);

// Login using the MFA secret: SDK will generate the TOTP token dynamically
string mfa_secret = "<my_mfa_secret>";

ContentstackResponse contentstackResponse = client.Login(credentials, mfaSecret = mfa_secret);
```

**Note:** The mfaSecret is not passed in the request body. The SDK uses it internally to generate a TOTP, which is then sent as the tfa\_token.

## LoginAsync

The LoginAsync method allows developers to authenticate users without blocking application execution. It returns a task with an auth token upon successful login.

This method also supports multi-factor authentication (MFA) using either a 2FA token or an MFA secret to dynamically generate a TOTP token.

**Returns**:

Type Task<ContentstackResponse>

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td>credentials (required)</td><td>ICredentials</td><td>User credentials used to authenticate the login request.</td></tr><tr><td>token</td><td>string</td><td>TOTP token generated from an authenticator app. Required for MFA-enabled users.</td></tr><tr><td>mfaSecret</td><td>string</td><td>Secret key generated when the user enables MFA in Contentstack. Used to dynamically create a TOTP token.</td></tr></tbody></table>

**Example**

The following code demonstrates how to authenticate users using the LoginAsync method in the .NET Management SDK.

The SDK supports three scenarios:

-   Standard login (no MFA)
-   Login with a 2FA token
-   Login using an MFA secret to dynamically generate a token

Update the placeholders with actual user credentials and MFA values as applicable.

```
using System.Net;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
ContentstackClient client = new ContentstackClient();
NetworkCredential credentials = new NetworkCredential("<EMAIL>", "<PASSWORD>");

// Login when MFA is not enabled for the user
ContentstackResponse contentstackResponse = await client.Login(credentials);

// Login when MFA is enabled: use a valid TOTP token generated from an authenticator app
string tfa_token = "<my_tfa_token>";
ContentstackResponse contentstackResponse = await client.Login(credentials, token=tfa_token);

// Login using the MFA secret: SDK will generate the TOTP token dynamically
string mfa_secret = "<my_mfa_secret>";
ContentstackResponse contentstackResponse = await client.Login(credentials, mfaSecret = mfa_secret);
```

**Note:** The mfaSecret is not sent in the request body. The SDK uses it internally to generate a TOTP, which it then passes as the token during login.
