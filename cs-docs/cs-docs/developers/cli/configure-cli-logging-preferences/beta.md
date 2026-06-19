---
title: "[Contentstack Command-line Interface (CLI)] - Configure CLI Logging Preferences | Beta Commands"
description: Configure CLI logging preferences using the Contentstack CLI config namespace (V2.x.x Beta).
url: https://www.contentstack.com/docs/developers/cli/configure-cli-logging-preferences/beta
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: V2.x.x Beta
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure CLI Logging Preferences | Beta Commands

This page explains how to configure and retrieve logging preferences in the Contentstack Command-line Interface (CLI) using the `config` namespace. It is intended for developers using the Contentstack CLI (V2.x.x Beta) who need to set log levels, log file paths, and console logging behavior.

## Configure CLI Logging Preferences | V2.x.x Beta

The `config` namespace in the Contentstack CLI provides commands to configure various settings, including logging preferences.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Contentstack CLI [installed](/docs/developers/cli/install-the-cli/)

## Commands

### Set a Logging Configuration for the CLI
The `config:set:log` command lets you configure the logging behavior of the Contentstack CLI. You can set the preferred log level and specify a file path for storing log outputs.
- If the `--level` flag is not provided, the CLI will prompt you to select a log level interactively.
- If the `--path` flag is not specified, the CLI will prompt you to enter a file path for log storage.

**Usage**

```
csdx config:set:log [--level ] [--path ]
```

**Options**

| Flag | Short Flag | Description |
|---|---|---|
| `--level` | - | Set the log level for the CLI. Supported values: `debug`, `info`, `warn`, `error` |
| `--path` | - | Specify the directory path where logs should be saved. |
| `--show-console-logs` | - | Enable console logging. |

**Examples**
- Set log level to `debug`
```
csdx config:set:log --level debug
```
- Set log level to `info` and specify a log file path:
```
csdx config:set:log --level info --path ./logs/app.log
```

### Get the Current Logging Configuration for the CLI
The `config:get:log` command retrieves the current logging settings, including the log level and the file path where logs are stored. If no configuration is set, the CLI will indicate that no logging configuration is available.

**Usage**

```
csdx config:get:log
```

## Common questions

### What happens if I don’t provide the `--level` flag?
If the `--level` flag is not provided, the CLI will prompt you to select a log level interactively.

### What happens if I don’t provide the `--path` flag?
If the `--path` flag is not specified, the CLI will prompt you to enter a file path for log storage.

### Which log levels are supported?
Supported values: `debug`, `info`, `warn`, `error`

### How do I view logs in the console?
Use the `--show-console-logs` flag to enable console logging.