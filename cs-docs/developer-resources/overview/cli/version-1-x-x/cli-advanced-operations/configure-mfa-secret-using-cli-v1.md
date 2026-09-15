---
title: "Configure MFA Secret Using CLI | V1.x.x"
description: "Learn to set or remove your Multi-Factor Authentication (MFA) secret using Contentstack CLI for enhanced security and seamless MFA management."
url: /headless-cms/configure-mfa-secret-using-cli/v1
uid: blt1637a00d696b0fe4
---

# Configure MFA Secret Using CLI | V1.x.x

## Configure MFA Secret Using CLI

To use [Multi-Factor Authentication (MFA)](/docs/administration/multi-factor-authentication) with the Contentstack CLI, you must first set up or remove your MFA secret. This guide walks you through how to configure your MFA settings using CLI commands.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   [CLI installed](/docs/headless-cms/install-the-cli/v1)
-   [MFA enabled](/docs/administration/multi-factor-authentication#enable-mfa)
-   A copy of MFA secret

## Set MFA Secret

Use the config:mfa:add command to set the MFA secret used to generate one-time passwords (OTP).

**Usage**

```
csdx config:mfa:add
```

## Remove MFA Secret

Use the config:mfa:remove command to remove the MFA secret.

**Usage**

```
csdx config:mfa:remove
```

**Options**

-   \-y, --yes: Skips the confirmation prompt and proceeds with the logout process.

**Example**

-   To remove the MFA secret by skipping the confirmation prompt:

    ```
    csdx config:mfa:remove -y
    ```
