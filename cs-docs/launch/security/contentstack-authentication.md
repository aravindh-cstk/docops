---
title: "Contentstack Authentication for Environments"
description: "Learn how to restrict access to your Launch environments to your Contentstack Organization members using the Contentstack Authentication feature in Contentstack Launch."
url: /launch/contentstack-authentication
uid: bltbb5fc5e7cf487cdd
---

# Contentstack Authentication for Environments

## Contentstack Authentication for Environments

Development, staging, and production environments are common stages of software development. Each stage deploys and operates an application in an isolated environment. The system usually restricts access to development and staging environments from public access, as these environments are where new features, code changes, and updates are tested, built, and validated before being published.

Contentstack Authentication restricts access to a Launch environment to signed-in members of your Contentstack Organization. When enabled, Contentstack sends every visitor through Single Sign-On (SSO) before they can view the site. Search engines, unauthenticated users, and users from other Contentstack Organizations cannot access the environment. Since access is identity-based rather than shared, you can see who accessed the site and revoke individual access by managing your organization membership.

Use this guide to configure Contentstack Authentication at project creation, environment creation, or in Environment Settings in Contentstack Launch.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization
-   A project already deployed in Launch

## What You Will Learn

-   How to enable or disable Contentstack Authentication during project creation.

-   How to enable or disable it during environment creation.

-   How to enable or disable it from Environment Settings.

-   How Contentstack Authentication compares to and combines with Password Protection.


## Configure Contentstack Authentication

Contentstack Authentication can be configured in three ways:

-   During Project Creation
-   During Environment Creation
-   From Environment Settings

**Note:** When Contentstack Authentication is enabled, all members of your Contentstack Organization can access the protected environment.

### Configure Contentstack Authentication During Project Creation

Follow these steps to enable or disable Contentstack Authentication when creating a new Launch project:

1.  From the Launch landing page, click **\+ New Project**.
2.  Enter your project details and configure your deployment as usual.
3.  Under **Site Access**, use the **Enable Contentstack Authentication** toggle to set the access level:
    -   **Enabled (default):** All environments created under the project are protected by Contentstack Authentication.
    -   **Disabled:** All environments created under the project remain publicly accessible.![DeployProjectModal.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am41bb1880739d197c/9942f9940c4ee88209f07528/DeployProjectModal.png?locale=en-us)
4.  Click **Deploy**.

**Note:** Contentstack Authentication is applied at the environment level. All domains within this environment are automatically gated behind Contentstack SSO.

### Configure Contentstack Authentication During Environment Creation

Follow these steps to enable or disable Contentstack Authentication while creating a new environment in an existing project:

1.  From the Launch landing page, open your project.
2.  On the **Environments** screen, click **\+ New Environment**.
3.  Enter the environment details.
4.  Under **Site Access**, use the **Enable Contentstack Authentication** toggle to set the access level:
    -   **Enabled (default):** The environment is protected by Contentstack Authentication.
    -   **Disabled:** The environment remains publicly accessible.![DeployEnvironmentModal.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am89e89d706cfd6de1/e5b87bc9459553775570b637/DeployEnvironmentModal.png?locale=en-us)
5.  Click **Create**.

**Note:** Contentstack Authentication is applied at the environment level. All domains within this environment are automatically gated behind Contentstack SSO.

### Configure Contentstack Authentication from Environment Settings

Follow the steps below to enable or disable Contentstack Authentication for your environment:

1.  From the Launch landing page, click the **project card** to open your project.
2.  In the **Environments** screen, go to the environment for which you want to provide Contentstack Authentication, click the **vertical ellipses** under **Actions**, and then click **Settings**.
3.  In **Settings > Environments**, click the **Site Access** tab.![SiteAccessTab.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama3e1431600a1fdfd/23e65d88404d239e1f46d0a4/SiteAccessTab.png?locale=en-us)
4.  Click the **Enable Contentstack Authentication** toggle to enable or disable it.![SiteAccess-EnableCSAuthToggle.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am43889767df592065/b9ef8a5728b962486ae9d6e2/SiteAccess-EnableCSAuthToggle.png?locale=en-us)

**Note:**

-   Contentstack Authentication is applied at the environment level. All domains within this environment are automatically gated behind Contentstack SSO.
-   Disabling Contentstack Authentication allows anyone with the environment URL to access your environment (unless Password Protection is also enabled—in which case the environment remains gated by the password).
-   If a user is removed from the organization, the user can continue to access the site for up to **1 hour** before their access is revoked.

## Why Contentstack Authentication is More Secure Than Password Protection

Contentstack Authentication provides stronger access control than Password Protection for the following reasons:

-   **Identity-based access:** Every visitor signs in with their own Contentstack account. There is no shared password to pass around, screenshot, or leak in chats.
-   **Traceable access:** Because every visitor authenticates with their own identity, you can tell who accessed the environment. Password Protection cannot distinguish between users of a shared credential. Audit records for users who access the environment through Contentstack Authentication are available in the Audit Logs under Organization Admin.
-   **Automatic scoping to your Organization:** Only members of your Contentstack Organization can be granted access — users from other Contentstack Organizations cannot sign in, even if they know the URL.

## Using Contentstack Authentication Together with Password Protection

Contentstack Authentication and Password Protection can both be enabled for the same Launch environment.

When both are enabled, visitors first authenticate through Contentstack SSO and then complete Password Protection. Access is granted only after both authentication steps are successful.
