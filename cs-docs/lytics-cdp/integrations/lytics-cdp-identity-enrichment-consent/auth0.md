---
title: "Auth0 (Enterprise SSO)"
description: "Configure enterprise Single Sign-On for Lytics using Auth0 and SAML 2.0."
url: /lytics/auth0
---

# Auth0 (Enterprise SSO)

## Auth0 (Enterprise SSO)

Configure enterprise Single Sign-On for Lytics using Auth0 and SAML 2.0.

## Overview

Lytics supports enterprise Single Sign-On (SSO) via Auth0 using the SAML 2.0 protocol. This allows your employees to authenticate with Lytics using your corporate identity provider (Okta, Azure AD, Google Workspace, etc.) without needing separate Lytics passwords.

## How It Works

1.  User selects "SSO" on the Lytics login page
2.  Lytics redirects to Auth0, which initiates a SAML request to your identity provider
3.  User authenticates with the corporate IdP
4.  Auth0 validates the SAML assertion and issues an OAuth token
5.  User is logged into Lytics

## Setup

### Prerequisites

-   An enterprise identity provider that supports SAML 2.0 (Okta, Azure AD, Google Workspace, Ping Identity, etc.)
-   Access to your IdP admin console to create a SAML application
-   Lytics account owner permissions to configure login settings

### Identity Provider Configuration

Create a new SAML application in your IdP with the following settings:

| Setting | Value |
| --- | --- |
| **ACS URL** (Assertion Consumer Service) | https://lytics.auth0.com/login/callback?connection=\[Connection-Name\] |
| **Entity ID** (Audience) | urn:auth0:lytics:\[Connection-Name\] |
| **Sign Request Algorithm** | RSA-SHA256 |

Replace \[Connection-Name\] with the connection name provided by your Lytics account team (typically \[CompanyName\]-SAML).

Your IdP will provide the following values needed for the Auth0 side:

-   **Sign In URL**: Your IdP's SSO endpoint
-   **X.509 Signing Certificate**: PEM or CER format
-   **Sign Out URL**: Your IdP's logout endpoint

### Lytics Account Settings

Two account settings must be configured by your Lytics account team:

#### Allowed Login Methods

Controls which authentication methods are available for the account:

```
{
  "allowed_login_methods": ["auth0"]
}
```

Valid values: lytics\_external (password), google (Google OAuth), auth0 (enterprise SSO). You can enable multiple methods simultaneously.

#### SSO Connections

Specifies which Auth0 SAML connections are authorized for the account:

```
{
  "sso_connections": ["YourCompany-SAML"]
}
```

**Warning:** These settings are checked against the user's **default account**. If the default account doesn't have SSO configured, login will fail even if other accounts the user belongs to have it enabled.

## Limitations

-   Only IdP-initiated SSO flow is supported
-   Multiple identity providers per account require separate SAML connections
-   SSO configuration changes require account-level settings updates
-   The connection name must match exactly between Auth0 and the sso\_connections setting
