---
title: "Password Protection for Environments"
description: "Learn how to restrict your Launch environments using the Password Protection feature in Contentstack Launch."
url: /launch/password-protection
uid: blt5ecf7eaa59b719fd
---

# Password Protection for Environments

## Password Protection for Environments

Development, staging, and production environments refer to common stages of software development where an application or system is deployed and operated in isolated environments. Access to the development and staging environments is usually restricted from public access as it is in these environments that new features, code changes, and updates are tested, built, and validated before they are published on the web in the production environment.

The Password Protection feature of Contentstack Launch allows you to enable access restrictions to your development and staging environments in Launch using the [Basic Auth](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication) method in order to prevent them from being accessed by search engines and the public.

This document guides you through enabling and disabling password protection for your environments in Contentstack Launch.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization with [permissions](/docs/administration/about-administration-roles)
-   A project already deployed in Launch

## What You Will Learn

-   How to enable password protection for an environment.

-   How to disable password protection for an environment.


## Enable Password Protection for your Environment

Follow the steps below to enable password protection for your environment:

1.  From the Launch landing page, click the **project card** to open your project.
2.  In the **Environments** screen, go to the environment for which you want to provide password protection, click the **ellipses** under **Actions**, and then click **Settings**.![Launch_Settings_2026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ccdc1d79b2ef2eb/69b78cd967be9e781070b034/Launch_Settings_2026.png)
3.  In **Settings** > **Environments**, click the **Site Access** tab.  
    ![SiteAccessTab.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama3e1431600a1fdfd/23e65d88404d239e1f46d0a4/SiteAccessTab.png?locale=en-us)
4.  Click the **Enable Password Protection** toggle button under **Password Protection** to enable it.  
    ![SiteAccessPassProtectToggle.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am8cbad01b7691008c/dc2a0cd5f4b30df4e858f173/SiteAccessPassProtectToggle.png?locale=en-us)
5.  Enter a username in the **Username** field and password in the **Password** field for your current environment, not exceeding 200 characters each.  
    ![SiteAccessPasswordProtectionDetails.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amb8cd9051db3b7c36/c40ca671f866227ec5779339/SiteAccessPasswordProtectionDetails.png?locale=en-us)

    **Note:** The username must not contain the colon (:) character.

6.  Click the **Save Password Protection Settings** button.

    **Note:** The protection is specific to the selected environment. All domains within this environment are automatically password protected.


You have now successfully enabled and set password protection for your environment.

All visitors to the site or application hosted on this environment are prompted to enter this username and password when they try to access the environment URL.

![Launch_Password_Protection_Access](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltff941c90fcef9276/64ca05befa0e717deca752d1/Launch_Password_Protection_Access.png)

**Best Practices**: It is common that most modern web browsers cache Basic Auth credentials after they are successfully entered the first time. For this reason, and because the username and password set for each environment is shared for all users with whom you share these credentials, it is recommended that you change this password periodically (i.e., every three months).

## Disable Password Protection for your Environment

Follow the steps below to disable password protection for your environment:

1.  From the Launch landing page, click the **project card** to open your project.
2.  In the **Environments** screen, go to the environment for which you want to disable password protection, click the **ellipses** under **Actions**, and then click **Settings**.
3.  In **Settings** > **Environments**, click the **Site Access** tab.  
    ![SiteAccessTab.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/ama3e1431600a1fdfd/23e65d88404d239e1f46d0a4/SiteAccessTab.png?locale=en-us)
4.  Click the **Enable Password Protection** toggle button again to disable the password protection.  
    ![SiteAccessPasswordProtectionDisable.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amfeb45156b5ccc6a9/88df2f935d3969b9aca83a20/SiteAccessPasswordProtectionDisable.png?locale=en-us)
5.  Click the **Disable** button.  
    ![SiteAccessPasswordProtectionModal4Disable.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am379cb362313b3537/0c1e5c23aed9a2d7cdcc5061/SiteAccessPasswordProtectionModal4Disable.png?locale=en-us)

You have now successfully disabled password protection for your environment. This allows anyone with the environment URL to access your environment.
