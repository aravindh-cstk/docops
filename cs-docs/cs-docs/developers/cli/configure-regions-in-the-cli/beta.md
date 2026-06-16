---
title: "[Contentstack Command-line Interface (CLI)] - Configure Regions in the CLI | Beta Commands"
description: Configure regions in the Contentstack CLI using beta (v2.x.x) config commands, including setting a region and custom hosts.
url: https://www.contentstack.com/docs/developers/cli/configure-regions-in-the-cli/beta
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: v2.x.x (Beta)
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure Regions in the CLI | Beta Commands

This page explains how to configure Contentstack regions in the Contentstack Command-line Interface (CLI) using the `config` namespace (beta v2.x.x). It is intended for developers who use the CLI to run actions against specific Contentstack regions or custom hosts.

## Configure Regions in the CLI | V2.x.x Beta

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

Using the following set of commands you can configure the [regions](/docs/developers/contentstack-regions) in the CLI.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- CLI [installed ](/docs/developers/cli/install-the-cli)

## Commands

### Get region
The `config:get:region`****command will return the name of the region on which you are performing actions in Contentstack, via the CLI.

**Usage**

```
csdx config:get:region
```

### Set region
The `config:set:region` command lets you select a region, from the available [Contentstack regions](/docs/developers/contentstack-regions), to perform actions using the CLI.

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
By using the `config:set:region` command, you can also set a custom host for [Content Delivery](/docs/developers/apis/content-delivery-api), [Content Management](/docs/developers/apis/content-management-api), UI Host, [Developer Hub](/docs/developers/developer-hub/about-developer-hub/), [Launch](/docs/developers/launch/about-launch/), [Personalize,](/docs/personalize/about-personalize) and [Studio](/docs/studio/about-studio) APIs, and set a custom region name for the hosts.

**Usage**

```
csdx config:set:region --cda > --cma > --ui-host > -n >
--developer-hub > --launch > --personalize >
```

**Options**

| Flag | Short Flag | Description |
|---|---|---|
| `--cda` | - | Custom host to set for the Content Delivery API.<br><br>If this flag is used, the following flags are required: `--cma`, `--ui-host`, `--name` |
| `--cma` | - | Custom host to set for the Content Management API.<br><br>If this flag is used, the following flags are required: `--cda`, `--ui-host`, `--name` |
| `--ui-host` | - | Custom UI host to set for the CLI.<br><br>If this flag is used, the following flags are required: `--cda`, `--cma`, `--name` |
| `--name` | `-n` | Name for the region.<br><br>If this flag is used, the following flags are required: `--cda`, `--cma`, `--ui-host` |
| `--developer-hub` | - | Custom host to set for the Developer Hub API. |
| `--personalize` | - | Custom host to set for the Personalize API. |
| `--launch` | - | Custom host to set for the Launch API. |
| `--studio` | - | Custom host to set for the Studio API. |

**Note**: The CLI generates the Developer Hub, Launch, Studio and Personalize APIs by default unless their corresponding flags are passed.

**Example**

```
csdx config:set:region --cda "https://in-cdn.contentstack.com" --cma "https://in-api.contentstack.com" --ui-host "https://in-app.contentstack.com" --developer-hub "https://in-developerhub-api.contentstack.com" --launch "https://in-launch-api.contentstack.com" --personalize "https://in-personalize-api.contentstack.com" -n "India"
```

## Common questions

### How do I check which region the CLI is currently using?
Use:
```
csdx config:get:region
```

### How do I switch the CLI to a different Contentstack region?
Use `config:set:region` with one of the supported region arguments (for example, `AWS-NA`, `AZURE-EU`, or `GCP-EU`).

### Can I configure custom API hosts along with a region name?
Yes. Use `config:set:region` with `--cda`, `--cma`, `--ui-host`, and `--name` (and optionally `--developer-hub`, `--launch`, `--personalize`, `--studio`) to set custom hosts and a custom region name.

### When are Developer Hub, Launch, Studio, and Personalize hosts generated by default?
They are generated by default unless their corresponding flags are passed.