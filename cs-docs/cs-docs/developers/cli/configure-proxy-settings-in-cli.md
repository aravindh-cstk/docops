---
title: "[Contentstack Command-line Interface (CLI)] - Configure Proxy Settings in CLI"
description: Configure and manage proxy settings in the Contentstack Command Line Interface (CLI) using global configuration and environment variables.
url: https://www.contentstack.com/docs/developers/cli/configure-proxy-settings-in-cli
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: "CLI 1.55.0+"
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure Proxy Settings in CLI

This page explains how to configure and manage proxy settings for the Contentstack Command-line Interface (CLI). It is intended for developers using the CLI in environments that require routing requests through a proxy (for example, behind corporate firewalls or restricted networks), and should be used when setting, viewing, or removing proxy configuration via CLI commands or environment variables.

## Configure Proxy Settings in CLI

Configure a proxy to control how the Contentstack CLI routes network requests. Use this setup when working behind corporate firewalls or restricted networks.

This guide provides step-by-step instructions on how to configure and manage proxy settings in the Contentstack Command Line Interface (CLI).

## What You'll Learn
- How to configure and manage proxy settings for the Contentstack CLI using global configuration and environment variables
- How proxy configuration precedence works between environment variables and CLI global config when connecting to Contentstack APIs

**Note:** The CLI supports proxy configuration through both global config and environment variables. Environment variables (`HTTPS_PROXY` or `HTTP_PROXY`) take priority over global config settings.

## Quick Reference

TaskCommandSet proxy
```
csdx config:set:proxy --host  --port
```
Get proxy
```
csdx config:get:proxy
```
Remove proxy
```
csdx config:remove:proxy
```

## Prerequisites
- **Contentstack CLI installed and configured**CLI version **1.55.0** or above (see [Install the CLI](/docs/developers/cli/install-the-cli))
- **Proxy server details**Proxy host
- Proxy port
- Proxy protocol (http or https)
- Proxy authentication details (username and password), if required

Having these details upfront helps you choose the correct configuration method and avoid connectivity issues later.

## Commands

### Set Proxy Configuration
The `config:set:proxy` command lets you set proxy configuration for the CLI in the global config.
- Enter the following command with required flags:

```
csdx config:set:proxy --host  --port  --protocol
```
- If your proxy requires authentication, include the `--username` flag. The CLI prompts you to enter the password securely.

With these steps, you have successfully set proxy configuration in the CLI. After you set the proxy, the CLI routes requests through the proxy stored in global configuration.

**Usage**

```
csdx config:set:proxy
```
**Options**
- `--host`: (required) Proxy host address
- `--port`: (required) Proxy port number (must be between 1 and 65535)
- `--protocol`: (required) Proxy protocol - either `http` or `https`
- `--username`: (optional) Proxy username for authentication

**Examples**
- To set a basic proxy configuration:
```
csdx config:set:proxy --host 127.0.0.1 --port 3128
```
When you omit the `--username` flag, the proxy is configured without authentication.
- To set a proxy with HTTPS protocol:
```
csdx config:set:proxy --host proxy.example.com --port 8080 --protocol https
```
- To set a proxy with authentication:
```
csdx config:set:proxy --host proxy.example.com --port 8080 --username user
```
When you include the `--username` flag, the CLI prompts you to enter the password securely.

### Get Proxy Configuration
The `config:get:proxy` command fetches the proxy configuration that you have set in the global config.
- Open the terminal.
- Enter the following command:

```
csdx config:get:proxy
```
You can now view the proxy configuration currently stored in the CLI global config.

**Usage**

```
csdx config:get:proxy
```
**Output**
- Host
- Port
- Protocol
- Username (if configured)
- Password (displayed as `***` if configured)

**Note:**
- This command only displays proxy configuration stored in the global config.
- If no proxy configuration is found in the global config, the command does not display any output.
- Proxy settings from environment variables (`HTTPS_PROXY`, `HTTP_PROXY`) are not displayed by this command but are used if present.

### Remove Proxy Configuration
The `config:remove:proxy` command lets you remove an existing proxy configuration from the global config.
- Open the terminal.
- Enter the following command:

```
csdx config:remove:proxy
```
The proxy configuration has been removed from the CLI global config, and the CLI no longer uses it unless a proxy is set via environment variables.

**Usage**

```
csdx config:remove:proxy
```
**Examples**

```
csdx config:remove:proxy
```
**Note:**
- This command only removes the proxy configuration from the global config.
- Proxy settings from environment variables (`HTTPS_PROXY`, `HTTP_PROXY`) are used if present.
- If no proxy configuration exists in the global config, the command completes without error.

## Using Environment Variables for Proxy Configuration
In addition to the global config, you can also configure proxy settings using environment variables. Environment variables take priority over global config settings.

### Setting Environment Variables
**macOS/Linux:** Add the following to your `~/.zshrc`, `~/.bashrc` or `~/.profile` file:

```
export HTTPS_PROXY=http://proxy.example.com:8080
```
or
```
export HTTP_PROXY=http://proxy.example.com:8080
```
For authenticated proxies:

```
export HTTPS_PROXY=http://:@proxy.example.com:
```
**Windows:** Set via System Properties or PowerShell:

```
$env:HTTPS_PROXY="http://proxy.example.com:8080"
```
or
```
$env:HTTP_PROXY="http://proxy.example.com:8080"
```
For authenticated proxies:

```
$env:HTTPS_PROXY="http://:@proxy.example.com:"
```

### Priority Order
The CLI determines which proxy configuration to use in the following order:
- Environment variables (`HTTPS_PROXY` or `HTTP_PROXY`) — highest priority
- Global configuration (set via `config:set:proxy`) - lower priority

If both are configured, the CLI uses the proxy settings defined in the environment variables.

## Common questions

### Do environment variables override the CLI global proxy configuration?
Yes. Environment variables (`HTTPS_PROXY` or `HTTP_PROXY`) take priority over global config settings.

### Does `csdx config:get:proxy` show proxy settings from environment variables?
No. This command only displays proxy configuration stored in the global config; environment variables are not displayed by this command but are used if present.

### What happens if no proxy configuration exists in the global config and I run `csdx config:remove:proxy`?
If no proxy configuration exists in the global config, the command completes without error.

### When should I use proxy configuration in the CLI?
Use this setup when working behind corporate firewalls or restricted networks.