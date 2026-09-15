---
title: "Authenticate the Migration Framework via SSO"
description: "Optimize your content migration process with Contentstack's Migration Tool. Learn to configure SSO securely with our comprehensive step-by-step guide."
url: /headless-cms/authenticate-the-migration-framework-via-sso
uid: blt877190efcb6e58aa
---

# Authenticate the Migration Framework via SSO

## Authenticate the Migration Framework via SSO

The Contentstack Migration Tool uses single sign-on (SSO) over OAuth 2.0 to authenticate users against Contentstack. Once SSO is configured, signing in to the migration tool redirects you to Contentstack's login page, and a session is established automatically after authentication. No separate credentials or tokens need to be managed by the user.

This guide outlines how to provision the OAuth application for the migration tool, configure SSO end-to-end, and verify the login flow.

## When to Configure SSO

Configure SSO before performing your first migration. The migration tool requires an active Contentstack session to read your organization, list stacks, and write content. SSO replaces long-lived management tokens with short-lived access tokens, which limits the scope of permissions granted to the tool. The tool also refreshes the access token automatically using a refresh token, so long-running migrations do not interrupt.

The OAuth flow works for any Contentstack organization, regardless of whether the organization has SAML SSO enabled at the identity provider level.

## Prerequisites

Before you begin, ensure the following requirements are met:

-   The migration tool repository is cloned and the api/manifest.json file is present at the repository root
-   The Contentstack command-line interface (csdx CLI) is installed and accessible in your PATH
-   Node.js and npm are available on your system
-   A **Contentstack Account** with [Admin](/docs/administration/about-administration-roles#organization-admin) or [Owner](/docs/administration/about-administration-roles#organization-owner) role access.

## Run the Build Script

The build.sh script registers the migration tool as an OAuth application in your Contentstack organization, configures the redirect URI, and creates the app.json manifest used by the migration tool's application programming interface (API).

1.  From the repository root, make the build script executable and run it:

    ```
    chmod +x build.sh
    ./build.sh
    ```

    **Note:** Always run build.sh from the repository root. The script writes app.json to the current working directory. Running it from a subdirectory places app.json in the wrong location.

2.  Select your Contentstack region when prompted.

    **Warning:** The region you choose here must match the region you select in the migration tool's login screen later. Mismatched regions cause authentication failures.

3.  Complete the OAuth login in the browser window that opens:
    1.  Sign in with your Contentstack credentials for the selected region.
    2.  Authorize the OAuth application when prompted.
    3.  Wait for the browser to confirm successful authentication.
    4.  Return to the terminal. The script continues automatically.

        **Note:** If the browser does not open or the login fails, run csdx auth:logout to clear cached credentials, then re-run ./build.sh.

4.  Enter the redirect URI base when prompted. The script appends /v2/auth/save-token to the value you provide.

    <table><tbody><tr><td><strong>Scenario</strong></td><td><strong>Input</strong></td></tr><tr><td>Local API on default port 5001</td><td>Press <strong>Enter</strong> with no input. Resolves to <span class="code">http://localhost:5001/v2/auth/save-token</span>.</td></tr><tr><td>Local API on a custom port (for example, <span class="code">3000</span>)</td><td>Enter the origin only: <span class="code">http://localhost:3000</span>. The script appends the path.</td></tr><tr><td>Hosted environment</td><td>Enter the origin only (for example, <span class="code">https://api.mycompany.com</span>). The script appends the path.</td></tr></tbody></table>

    **Warning:** Do not include /v2/auth/save-token in your input. The script appends this path automatically. Including it produces a duplicated path and breaks the redirect.

5.  Select the Contentstack organization where the OAuth application is registered.

    **Warning:** The organization you select here must be the same organization that contains your target stacks, and the same organization where you install the migration app from the Contentstack Marketplace. Selecting different organizations across these steps causes the app to be registered in one organization while permissions exist in another, breaking authentication.


**Note:** Re-running build.sh is safe. If the migration app already exists in the selected organization, its settings are updated rather than a new app being created.

To confirm SSO is working end-to-end:

1.  Open the migration tool in a browser.
2.  Select the same region you chose during build.sh.
3.  Click **Log in via SSO**.
4.  Select the Contentstack organization where the OAuth application is registered.
5.  After authentication, click **Open Migration Tool**.

This completes the SSO configuration for the Contentstack Migration Tool.
