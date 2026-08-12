---
title: "[Contentstack Command-line Interface (CLI)] - Configure MFA Secret Using CLI"
description: Configure or remove the MFA secret used by the Contentstack CLI to generate one-time passwords (OTP).
url: https://www.contentstack.com/docs/headless-cms/configure-mfa-secret-using-cli
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure MFA Secret Using CLI

This page explains how to configure or remove your MFA secret for the Contentstack CLI. It is intended for developers using the CLI with Multi-Factor Authentication enabled, and should be used when setting up MFA for CLI usage or updating/removing the stored MFA secret.

## Configure MFA Secret Using CLI

To use [Multi-Factor Authentication (MFA)](../security/multi-factor-authentication.md) with the Contentstack CLI, you must first set up or remove your MFA secret. This guide walks you through how to configure your MFA settings using CLI commands.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- [CLI installed](./install-the-cli.md)
- [MFA enabled](../security/multi-factor-authentication.md#enable-mfa)
- A copy of MFA secret

## Set MFA Secret
Use the `config:mfa:add` command to set the MFA secret used to generate one-time passwords (OTP).

**Usage**

```
csdx config:mfa:add
```

## Remove MFA Secret
Use the `config:mfa:remove` command to remove the MFA secret.

**Usage**

```
csdx config:mfa:remove
```

**Options**
- `-y, --yes`: Skips the confirmation prompt and proceeds with the logout process.

**Example**
- To remove the MFA secret by skipping the confirmation prompt:
```
csdx config:mfa:remove -y
```

## Common questions

### What is the MFA secret used for in the Contentstack CLI?
The MFA secret is used to generate one-time passwords (OTP) when using [Multi-Factor Authentication (MFA)](../security/multi-factor-authentication.md) with the Contentstack CLI.

### Do I need MFA enabled before configuring the MFA secret in the CLI?
Yes, ensure [MFA enabled](../security/multi-factor-authentication.md#enable-mfa) before configuring the MFA secret.

### How do I remove the MFA secret without being prompted for confirmation?
Use the `-y, --yes` option with the remove command: `csdx config:mfa:remove -y`.

### What command do I use to set the MFA secret?
Use `csdx config:mfa:add`.