---
title: "[Contentstack Command-line Interface (CLI)] - Configure Regions in the CLI | Old Commands"
description: Configure regions in the Contentstack CLI using old config namespace commands.
url: https://www.contentstack.com/docs/developers/cli/configure-regions-in-the-cli/old-commands
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: old-commands
last_updated: 2026-03-26
---

# [Contentstack Command-line Interface (CLI)] - Configure Regions in the CLI | Old Commands

This page explains how to configure the region used by the Contentstack Command-line Interface (CLI) using the `config` namespace (old commands). It is intended for developers who use the CLI to perform actions in different Contentstack regions or with custom API hosts.

## Configure Regions in the CLI | Old Commands

The **config **namespace contains all the commands that you will need to configure the CLI as per your requirements.

Contentstack currently supports three regions: **North America**, **Europe**,** **and Azure North America.

By default, the CLI uses the North American region. Configuration changes are not required for North America region users.

Using the following set of commands, you can configure the CLI to use other [regions](/docs/developers/contentstack-regions).

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- CLI [installed](/docs/developers/cli/install-the-cli)
- [Authentication](/docs/developers/cli/authenticate-with-the-cli)to use CLI

## Commands

### Get region

The `config:get:region`** **command will return the name of the region on which you are performing actions in Contentstack, via CLI.

**Usage**

```
csdx config:get:region
```

### Set region

The `config:set:region` command lets you select a region, from the available [Contentstack regions](/docs/developers/contentstack-regions), to perform actions using CLI.

**Usage**

```
csdx config:set:region
```

**Arguments**
- Region: Specifies the region that you want to use while executing the CLI commands. Possible values are as follows:`**EU**` for Europe
- `**AZURE-NA**` for Azure North America
- `**NA** `for North America

**Example**

```
csdx config:set:region EU
```

```
csdx config:set:region AZURE-NA
```

### Set custom host and region

By using the `config:set:region` command, you can also set a custom host for [Content Delivery](https://www.contentstack.com/docs/developers/apis/content-delivery-api/) and [Content Management](https://www.contentstack.com/docs/developers/apis/content-management-api/) APIs, and set a custom region name for the hosts.

**Usage**

```
csdx config:set:region -d  -m  -n
```

**Options**
- `-d`, `--cda=cda`: Custom host to set for the Content Delivery API. If this option is used, then cma and name options are required.
- `-m`, `--cma=cma`: Custom host to set for the Content Management API. If this option is used, then cda and name options are required.
- `-n`, `--name=name`: The name for the region. If this option is used, then cda and cma options are required

**Example**

```
csdx config:set:region -d "https://in-cda.contentstack.com" -m "https://in-api.contentstack.com" -n "India"
```

## Common questions

### Which region does the CLI use by default?
By default, the CLI uses the North American region.

### How do I check which region the CLI is currently using?
Use:
```
csdx config:get:region
```

### How do I switch the CLI to the Europe region?
Use:
```
csdx config:set:region EU
```

### When would I use custom hosts with `config:set:region`?
Use custom hosts when you need to set a custom host for Content Delivery and Content Management APIs and set a custom region name for the hosts.