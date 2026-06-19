---
title: "[Contentstack Command-line Interface (CLI)] - Configure Rate Limits in the CLI | Beta Commands"
description: Configure and manage rate limits in the Contentstack CLI (V2.x.x Beta), including setting, getting, and removing rate limit configuration for an organization.
url: https://www.contentstack.com/docs/developers/cli/configure-rate-limits-in-the-cli/beta
product: Contentstack
doc_type: cli-guide
audience:
  - developers
  - devops
version: V2.x.x Beta
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure Rate Limits in the CLI | Beta Commands

This page explains how to configure and manage rate limits in the Contentstack Command-line Interface (CLI), including setting, retrieving, and removing rate limit configuration for an organization. It is intended for developers using the Contentstack CLI (version 1.25.0 and above) who need to control API request throughput—especially for bulk publish workflows—to avoid exceeding rate limits.

## Configure Rate Limits in the CLI | V2.x.x Beta

[Rate Limit](/docs/developers/apis/content-management-api#rate-limiting) defines the maximum number of requests you can make using Contentstack's API within a specific time frame.

This guide provides step-by-step instructions on how to configure and manage rate limits in the Contentstack Command Line Interface (CLI).

By following these instructions, you can effectively control the number of requests made to the Contentstack API within a specified timeframe, ensuring optimal performance and preventing any disruptions due to exceeding rate limits.

**Warning:** The CLI supports rate limit configuration only for the `bulkLimit` parameter, which is [used in bulk publish commands](/docs/developers/cli/configure-rate-limits-in-the-cli#using-rate-limits-for-enhanced-bulk-publishing-control) to control requests.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- [CLI installed](/docs/developers/cli/install-the-cli/) and [configured](/docs/developers/cli/configure-regions-in-the-cli/) (version 1.25.0 and above)
- [CLI authenticated](/docs/developers/cli/cli-authentication/)

## Commands

### Set Custom Rate Limit

The `config:set:rate-limit` command lets you set a Custom rate limit for your organization in the CLI.
- Open the terminal.
- Enter the following command:
```
csdx config:set:rate-limit
```
- Then, enter the **organization UID**.

With these steps, you have successfully set a rate limit in the CLI.

To set a **Custom** rate limit, you can pass the **--limit-name** and **--utilize** flags along with the **--org** flag in the command as given below:

```
csdx config:set:rate-limit --org blt***********1b --utilize 60,80 --limit-name bulkLimit
```

**Usage**

```
csdx config:set:rate-limit
```

**Options**

| Flag | Short Flag | Description |
|---|---|---|
| `--org` |  | Provide the organization UID. |
| `--utilize` |  | Provide the utilization percentages for the rate limit, separated by commas.<br>Default: `50` |
| `--limit-name` |  | [Optional] Provide the limit names separated by commas.<br><br>Supported values:<br>`limit`,<br>`getLimit`,<br>`bulkLimit` |
| `--default` |  | Reset to default rate limit. |

**Examples**
- To set a default rate limit for your organization:
```
csdx config:set:rate-limit  --org blt***********1b  --default
```
- To set a Custom rate limit for your organization:
```
csdx config:set:rate-limit  --org blt***********1b  --utilize 60 --limit-name bulkLimit
```

**Note:**
- CLI applies a utilization percentage of your organization’s actual rate limit, based on your subscription plan.
- By default, this is set to **50%**, which means the CLI internally enforces a limit at half of the available rate. For example, if your **getLimit** is **10**, the CLI will apply a **limit of 5** at **50% utilization**, or **6** at **60% utilization**.
- This utilization is managed internally and is not shown in the CLI output.

### Get the Rate Limit of an Organization

The `config:get:rate-limit` command fetches the rate limit that you have set in an organization in the CLI.
- Open the terminal.
- Enter the following command:
```
csdx config:get:rate-limit
```

With these steps, you have successfully retrieved the rate limit you have set in the CLI.

**Usage**

```
csdx config:get:rate-limit
```

### Remove the Rate Limit of an Organization

The `config:remove:rate-limit` command lets you remove an existing rate limit configuration from the CLI.
- Open the terminal.
- Enter the following command:
```
csdx config:remove:rate-limit
```
- Then, enter the **organization UID**.

With these steps, you have successfully removed the rate limit configuration of an organization.

**Usage**

```
csdx config:remove:rate-limit
```

**Options**

| Flag | Short Flag | Description |
|---|---|---|
| `--org` |  | Provide the organization UID. |

**Examples**
- To remove the configuration of the rate limit from the CLI by providing the organization UID:
```
csdx config:remove:rate-limit --org
```

## Using Rate Limits for Enhanced Bulk Publishing Control

By default, the rate limit is set to 1, letting you publish one asset or entry per second. To enable the bulk publish feature, you must configure the rate limit for your specific organization.

The `config:set:rate-limit` command lets you [set the rate limit](#set-custom-rate-limit) to utilize the bulk publish feature according to your plan.

**Usage**

```
csdx config:set:rate-limit  --org blt***********1b  --utilize 10 --limit-name bulkLimit
```

## Common questions

### Does the CLI support configuring all rate limit parameters?
No. **Warning:** The CLI supports rate limit configuration only for the `bulkLimit` parameter.

### What does `--utilize` control?
It sets the utilization percentages for the rate limit, and the CLI applies that percentage of your organization’s actual rate limit based on your subscription plan.

### How do I reset to the default rate limit?
Use the `--default` flag with `csdx config:set:rate-limit` (for example: `csdx config:set:rate-limit  --org blt***********1b  --default`).

### How do I remove an existing rate limit configuration?
Run `csdx config:remove:rate-limit` and provide the organization UID (or use `--org` as shown in the examples).