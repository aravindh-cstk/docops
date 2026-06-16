---
title: "[Contentstack Command-line Interface (CLI)] - Configure CLI Logging Preferences"
description: Configure logging preferences for the Contentstack CLI using config:set:log and config:get:log commands.
url: https://www.contentstack.com/docs/developers/cli/configure-cli-logging-preferences
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Configure CLI Logging Preferences

This page explains how to configure and retrieve logging preferences in the Contentstack Command-line Interface (CLI). It is intended for developers using the Contentstack CLI who need to set log levels and log file paths for troubleshooting or auditing CLI activity.

## Configure CLI Logging Preferences

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
- `--level=level`: Set the log level for the CLI. <options: debug|info|warn|error>
- `--path=path`: Specify the file path where logs should be saved.

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

### What happens if I don’t provide `--level` when running `config:set:log`?
If the `--level` flag is not provided, the CLI will prompt you to select a log level interactively.

### What happens if I don’t provide `--path` when running `config:set:log`?
If the `--path` flag is not specified, the CLI will prompt you to enter a file path for log storage.

### How do I check the current logging configuration?
Use:
```
csdx config:get:log
```

### Which log levels can I set?
You can set: `debug|info|warn|error`.