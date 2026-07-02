---
title: "Login"
description: "The Log in to your account request is used to sign in to your Contentstack account and obtain the authtoken. Refer to the TOTP Support for .NET Management SDK for more information."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-login"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Login

The Log in to your account request is used to sign in to your Contentstack account and obtain the authtoken. Refer to the [TOTP Support for .NET Management SDK](https://www.contentstack.com/docs/developers/sdks/content-management-sdk/dot-net/implement-totp-with-dot-net-management-sdk#login) for more information.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| credentials | ICredentials | Yes | — | User credentials used to authenticate the login request. |
| token | string | No | — | TOTP token generated from an authenticator app. Required for MFA-enabled users. |
| mfaSecret | string | No | — | Secret key generated when the user enables MFA in Contentstack. Used to dynamically create a TOTP token. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
ContentstackClient client = new ContentstackClient();

NetworkCredential credentials = new NetworkCredential("<EMAIL>", "<PASSWORD>");

// Login when MFA is not enabled for the user 
ContentstackResponse contentstackResponse = client.Login(credentials);

// Login when MFA is enabled: use a valid TOTP token generated from an authenticator app
string tfa_token = "<my_tfa_token>";
contentstackResponse = client.Login(credentials, token = tfa_token);

// Login using the MFA secret: SDK will generate the TOTP token dynamically
string mfa_secret = "<my_mfa_secret>";
contentstackResponse = client.Login(credentials, mfaSecret = mfa_secret);
```
