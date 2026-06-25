---
title: "[Contentstack Command-line Interface (CLI)] - Configure Regions in the CLI"
description: Configure regions in the Contentstack CLI using config namespace commands.
url: https://www.contentstack.com/docs/headless-cms/configure-regions-in-the-cli
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure Regions in the CLI

This page explains how to configure and manage Contentstack regions in the Contentstack Command-line Interface (CLI). It is intended for developers who use the CLI to perform actions in different Contentstack regions, and should be used when you need to view, set, or customize region and host settings.

## Configure Regions in the CLI

The **config **namespace contains all the commands that you will need to configure the CLI as per your requirements.

Contentstack currently supports the following regions:

| Cloud Provider | Region | Arguments |
|---|---|---|
| AWS | North America | AWS-NA |
| AWS | Europe | AWS-EU |
| AWS | Australia | AWS-AU |
| Azure | North America | Azure-NA |
| Azure | Europe | Azure-EU |
| Google Cloud Platform | North America | GCP-NA |
| Google Cloud Platform | Europe | GCP-EU |

Using the following set of commands you can configure the [regions](../contentstack-regions.md) in the CLI.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- CLI [installed ](./install-the-cli.md)

## Commands

### Get region
The `config:get:region`****command will return the name of the region on which you are performing actions in Contentstack, via the CLI.

**Usage**

```
csdx config:get:region
```

### Set region
The `config:set:region` command lets you select a region, from the available [Contentstack regions](../contentstack-regions.md), to perform actions using the CLI.

**Usage**

```
csdx config:set:region >
```
**Arguments**
- Region: Specifies the region that you want to use while executing the CLI commands. Possible values are as follows:`**AWS-NA**` for AWS North America
- `**AWS-EU**` for AWS Europe
- `**AWS-AU**` for AWS Australia
- `**AZURE-NA**` for Azure North America
- `**AZURE-EU**` for Azure Europe
- `**GCP-NA**` for Google North America
- `**GCP-EU**` for Google Europe

**Example**

```
csdx config:set:region AWS-NA
```

```
csdx config:set:region AWS-EU
```

```
csdx config:set:region AWS-AU
```

```
csdx config:set:region AZURE-NA
```

```
csdx config:set:region AZURE-EU
```

```
csdx config:set:region GCP-NA
```

```
csdx config:set:region GCP-EU
```

### Set custom host and region
By using the `config:set:region` command, you can also set a custom host for [Content Delivery](../../../api-docs/api-detail/content-delivery-api.md), [Content Management](../../../api-docs/api-detail/content-management-api.md), UI Host, [Developer Hub](../developer-hub/about-developer-hub.md), [Launch](../launch/about-launch.md), and [Personalize](../../personalize/about-personalize.md) APIs, and set a custom region name for the hosts.

**Usage**

```
csdx config:set:region --cda > --cma > --ui-host > -n >
--developer-hub > --launch > --personalize >
```
**Options**
- `--cda=cda`: Custom host to set for the Content Delivery API. If this flag is used, then `cma`, `ui-host`, and `name` flags are required.
- `--cma=cma`: Custom host to set for the Content Management API. If this flag is used, then `cda`,
`ui-host`, and `name` flags are required.
- `--ui-host=ui-host`: Custom UI host to set for CLI. If this flag is used, then `cda`, `cma`, and `name` flags are required.
- `-n`, `--name=name`: The name for the region. If this flag is used, then `cda`, `cma`, and `ui-host` flags are required.
- `--developer-hub`: Custom host to set for the Developer Hub API.
- `--launch`: Custom host to set for the Launch API.
- `--personalize`: Custom host to set for the Personalize Management API.

**Note**: The CLI generates the Developer Hub, Launch, and Personalize APIs by default unless their corresponding flags are passed.

**Example**

```
csdx config:set:region --cda "https://in-cdn.contentstack.com" --cma "https://in-api.contentstack.com" --ui-host "https://in-app.contentstack.com" --developer-hub "https://in-developerhub-api.contentstack.com" --launch "https://in-launch-api.contentstack.com" --personalize "https://in-personalize-api.contentstack.com" -n "India"
```

## Common questions

### How do I check which region my CLI is currently using?
Run:
```
csdx config:get:region
```

### How do I switch the CLI to a different Contentstack region?
Use `config:set:region` with one of the supported region arguments (for example, `AWS-NA`, `AWS-EU`, `AZURE-EU`, `GCP-NA`).

### When should I use custom hosts with `config:set:region`?
Use custom hosts when you need to set a custom host for Content Delivery, Content Management, UI Host, Developer Hub, Launch, or Personalize APIs, and set a custom region name for the hosts.

### Why aren’t Developer Hub, Launch, or Personalize hosts being set?
The CLI generates the Developer Hub, Launch, and Personalize APIs by default unless their corresponding flags are passed.