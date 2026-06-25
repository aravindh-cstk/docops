---
title: "[Contentstack Launch] - Password Protection for Environments"
description: Enable and disable password protection for development and staging environments in Contentstack Launch using Basic Auth.
url: https://www.contentstack.com/docs/launch/password-protection
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Password Protection for Environments

This page explains how to enable and disable password protection for specific environments in Contentstack Launch using Basic Auth. It is intended for developers and organization members who manage Launch projects and need to restrict access to development or staging environments.

## Password Protection for Environments

Development, staging, and production environments refer to common stages of software development where an application or system is deployed and operated in isolated environments. Access to the development and staging environments is usually restricted from public access as it is in these environments that new features, code changes, and updates are tested, built, and validated before they are published on the web in the production environment.

The Password Protection feature of Contentstack Launch allows you to enable access restrictions to your development and staging environments in Launch using the [Basic Auth](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) method in order to prevent them from being accessed by search engines and the public.

This document guides you through enabling and disabling password protection for your environments in Contentstack Launch.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- A project already deployed in Launch

## Enable Password Protection for your Environment

Follow the steps below to enable password protection for your environment:

- From the Launch landing page, click the **project card** to open your project.
- In the **Environments** screen, go to the environment for which you want to provide password protection, click the **ellipses** under **Actions**, and then click **Settings**.
- In **Settings** > **Environments**, click the **Password Protection **tab.
- Click the **Enable Password Protection** toggle button to enable it.
- Enter a username in the **Username** field and password in the **Password** field for your current environment, not exceeding 200 characters each.
- **Note**: The username must not contain the colon (:) character.
- Click the **Save Password Protection Settings **button.
- **Note**: The protection is specific to the selected environment. All domains within this environment will be automatically password protected.

You have now successfully enabled and set password protection for your environment.

All visitors to the site or application hosted on this environment will be prompted to enter this username and password when they try to access the environment URL.

**Best Practices**: It is common that most modern web browsers cache Basic Auth credentials after they are successfully entered the first time. For this reason, and because the username and password set for each environment is shared for all users with whom you share these credentials, it is recommended that you change this password periodically (i.e., every three months).

## Disable Password Protection for your Environment

Follow the steps below to disable password protection for your environment:

- From the Launch landing page, click the **project card** to open your project.
- In the **Environments** screen, go to the environment for which you want to disable password protection, click the **ellipses** under **Actions**, and then click **Settings**.
- In **Settings** > **Environments**, click the **Password Protection **tab.
- Click the **Enable Password Protection** toggle button again to disable the password protection.
- Click the **Yes, Disable** button.

You have now successfully disabled password protection for your environment. This allows anyone with the environment URL to access your environment.

## Common questions

### Does password protection apply to all environments in a project?

No. The protection is specific to the selected environment.

### Are all domains in an environment protected when password protection is enabled?

Yes. All domains within this environment will be automatically password protected.

### Are there any restrictions on the username and password?

Yes. The username and password must not exceed 200 characters each, and the username must not contain the colon (:) character.

### How often should the password be changed?

It is recommended that you change this password periodically (i.e., every three months).