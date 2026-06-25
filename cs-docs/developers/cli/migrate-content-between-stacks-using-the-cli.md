---
title: Contentstack Command-line Interface (CLI) - Migrate Content Between Stacks Using the CLI
description: Migrate content from one Contentstack stack to another manually using the Contentstack CLI.
url: https://www.contentstack.com/docs/headless-cms/migrate-content-between-stacks-using-the-cli
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# Contentstack Command-line Interface (CLI) - Migrate Content Between Stacks Using the CLI

This page explains how to migrate content from one Contentstack stack to another using the Contentstack CLI. It is intended for developers or administrators who have access to both stacks and need to move content (typically into an empty target stack) by exporting, optionally auditing, and importing.

## Migrate Content Between Stacks Using the CLI

This document guides you through the process of migrating content from one Contentstack stack to another manually.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Contentstack CLI [installed](./install-the-cli.md) and [configured](./configure-regions-in-the-cli.md)
- CLI [authenticated](./cli-authentication.md#authentication)
- Access to both source and target stacks
- An empty target stack

## Steps for Execution
To migrate all content from one stack to another quickly, follow the steps below:
- [Export](./export-content-using-the-cli.md) from source stack:
```
csdx cm:stacks:export -k  -d ./export --branch main
```
- [Audit](./audit-plugin.md) the exported content (recommended):
```
csdx cm:stacks:audit -d ./export/main
```
**Note:** The [audit](./audit-plugin.md) process runs automatically during [import](./import-content-using-the-cli.md) to validate and fix any issues.
- [Import](./import-content-using-the-cli.md) to target stack:
```
csdx cm:stacks:import -k  -d ./export/main
```

## Common questions

### Do I need to run the audit step?
No. The audit process runs automatically during import, but running it separately is recommended.

### Does the target stack need to be empty?
Yes. The prerequisites specify an empty target stack.

### What access do I need to perform the migration?
You need access to both the source and target stacks and an authenticated CLI session.

### Which branch is used in the example commands?
The export command uses `--branch main`, and the subsequent steps reference `./export/main`.