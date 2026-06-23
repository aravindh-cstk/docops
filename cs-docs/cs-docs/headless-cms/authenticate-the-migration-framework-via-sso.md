---
title: "[Content Migration] - Authenticate the Migration Framework via SSO"
description: Authenticate the Migration Framework via SSO
url: https://www.contentstack.com/docs/headless-cms/authenticate-the-migration-framework-via-sso
product: Contentstack
doc_type: guide
audience:
  - developers
version: v2
last_updated: 2026-05-29
---

# [Content Migration] - Authenticate the Migration Framework via SSO

This page explains how to authenticate the Contentstack Migration Tool using single sign-on (SSO) over OAuth 2.0, including provisioning the OAuth application, configuring SSO end-to-end, and verifying the login flow. It is intended for developers or admins setting up the migration tool before running migrations, especially when you want short-lived access tokens instead of long-lived management tokens.

## Authenticate the Migration Framework via SSO

The Contentstack Migration Tool uses single sign-on (SSO) over OAuth 2.0 to authenticate users against Contentstack. Once SSO is configured, signing in to the migration tool redirects you to Contentstack's login page, and a session is established automatically after authentication. No separate credentials or tokens need to be managed by the user.

This guide outlines how to provision the OAuth application for the migration tool, configure SSO end-to-end, and verify the login flow.

## When to Configure SSO

Configure SSO before performing your first migration. The migration tool requires an active Contentstack session to read your organization, list stacks, and write content. SSO replaces long-lived management tokens with short-lived access tokens, which limits the scope of permissions granted to the tool. The tool also refreshes the access token automatically using a refresh token, so long-running migrations do not interrupt.

The OAuth flow works for any Contentstack organization, regardless of whether the organization has SAML SSO enabled at the identity provider level.

## Prerequisites

Before you begin, ensure the following requirements are met:
- The migration tool repository is cloned and the `api/manifest.json` file is present at the repository root
- The Contentstack command-line interface (`csdx` CLI) is installed and accessible in your `PATH`
- Node.js and npm are available on your system
- A **Contentstack Account** with [Admin](../developers/organization/organization-roles.md#organization-admin) or [Owner](../developers/organization/organization-roles.md#organization-owner) role access.

## Run the build Script

The `build.sh` script registers the migration tool as an OAuth application in your Contentstack organization, configures the redirect URI, and creates the `app.json` manifest used by the migration tool's application programming interface (API).

- From the repository root, make the build script executable and run it:
```
chmod +x build.sh
./build.sh
```

**Note**: Always run `build.sh` from the repository root. The script writes app.json to the current working directory. Running it from a subdirectory places app.json in the wrong location.

- Select your Contentstack region when prompted.

**Warning**: The region you choose here must match the region you select in the migration tool's login screen later. Mismatched regions cause authentication failures.

- Complete the OAuth login in the browser window that opens:

Sign in with your Contentstack credentials for the selected region.

- Authorize the OAuth application when prompted.
- Wait for the browser to confirm successful authentication.
- Return to the terminal. The script continues automatically.

**Note**: If the browser does not open or the login fails, run `csdx auth:logout` to clear cached credentials, then re-run `./build.sh`.

- Enter the redirect URI base when prompted. The script appends `/v2/auth/save-token` to the value you provide.

| Scenario | Input |
|---|---|
| Local API on default port 5001 | Press **Enter** with no input. Resolves to `http://localhost:5001/v2/auth/save-token`. |
| Local API on a custom port (for example, `3000`) | Enter the origin only: `http://localhost:3000`. The script appends the path. |
| Hosted environment | Enter the origin only (for example, `https://api.mycompany.com`). The script appends the path. |

**Warning**: Do not include `/v2/auth/save-token` in your input. The script appends this path automatically. Including it produces a duplicated path and breaks the redirect.

- Select the Contentstack organization where the OAuth application is registered.

**Warning**: The organization you select here must be the same organization that contains your target stacks, and the same organization where you install the migration app from the Contentstack Marketplace. Selecting different organizations across these steps causes the app to be registered in one organization while permissions exist in another, breaking authentication.

**Note**: Re-running build.sh is safe. If the migration app already exists in the selected organization, its settings are updated rather than a new app being created.

To confirm SSO is working end-to-end:
- Open the migration tool in a browser.
- Select the same region you chose during `build.sh`.
- Click **Log in via SSO**.
- Select the Contentstack organization where the OAuth application is registered.
- After authentication, click **Open Migration Tool**.

This completes the SSO configuration for the Contentstack Migration Tool. Refer to the [Perform Content Migration](../developers/content-migration/sitecore-to-contentstack.md) section for further steps based on your legacy CMS.

## Common questions

### Do I need to manage tokens manually when using SSO?
No separate credentials or tokens need to be managed by the user.

### When should I configure SSO for the migration tool?
Configure SSO before performing your first migration.

### What happens if I select a different region in `build.sh` than in the migration tool login screen?
Mismatched regions cause authentication failures.

### What redirect URI should I enter when prompted by `build.sh`?
Enter the redirect URI base (origin only). The script appends `/v2/auth/save-token` automatically; do not include `/v2/auth/save-token` in your input.