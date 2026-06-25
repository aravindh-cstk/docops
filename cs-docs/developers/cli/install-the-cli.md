---
title: Contentstack Command-line Interface (CLI) - Install the CLI
description: Install and update the Contentstack Command-line Interface (CLI) in macOS, Windows, and Linux environments.
url: https://www.contentstack.com/docs/headless-cms/install-the-cli
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# Contentstack Command-line Interface (CLI) - Install the CLI

This page explains how to install, verify, and update the Contentstack Command-line Interface (CLI) across macOS, Windows, and Linux. It is intended for developers who want to use terminal commands to interact with Contentstack and should be used when setting up the CLI for the first time or upgrading to the latest version.

## Install the CLI

Contentstack CLI can be installed in macOS, Windows and Linux environments. In this guide, you will learn how to install and update command-line interface (CLI).

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Node.js version 20 or above till 22.x](https://nodejs.org/en/download/)

## Install CLI
To install CLI as a global module in your machine, open your terminal (command prompt) and run this command:

```
npm install -g @contentstack/cli
```
Once the CLI is successfully installed, you can use the `**csdx**`** **command from your terminal.

The `**csdx **`is a top-level **namespace** in Contentstack that gives you access to Contentstack's extensive range of commands and functionalities.

**Additional Resource**: Visit our CLI [GitHub](https://github.com/contentstack/cli) page for more information. You can also read about Contentstack CLI on the [npm](https://www.npmjs.com/package/@contentstack/cli) page.

Next, let us verify the CLI installation.

## Verify installation
Verify your installation by running the following command in your terminal to get a list of commands that will help you to interact with Contentstack.

```
csdx --help
```

```
C:\Users\vxxxh>csdx --help
   ____            _             _       _             _
  / ___|___  _ __ | |_ ___ _ __ | |_ ___| |_ __ _  ___| | __
 | |   / _ \| '_ \| __/ _ \ '_ \| __/ __| __/ _` |/ __| |/ /
 | |__| (_) | | | | ||  __/ | | | |_\__ \ || (_| | (__|    win32-x64 node-v20.10.0

USAGE
  $ csdx [COMMAND]

TOPICS
  auth     Perform authentication-related activities
  cm       Perform content management activities
  config   Perform configuration related activities
  launch   Launch related operations
  plugins  List installed plugins

COMMANDS
  help     Display help for csdx.
  launch   Launch related operations
  plugins  List installed plugins.
```

As shown in the above code, the `help` namespace contains other namespaces within it.
Let us understand these namespaces in detail.

## Namespaces
Namespace is used to categorize commands as per their functionality or purpose.

The following namespaces exist within the `**csdx**` command:
- `auth`: To perform [authentication-related](./cli-authentication.md) activities.
- `cm`: To perform content management activities such as [bulk publish, bulk unpublish](./bulk-publish-and-unpublish-content.md), [import](./import-content-using-the-cli.md), [export](./export-content-using-the-cli.md), [export-to-csv](./export-content-to-csv-file.md), [branches](./compare-and-merge-branches-using-the-cli.md), and [migration](./migrate-your-content-using-the-cli-migration-command.md) content.
- `help`: To list useful commands in the CLI.
- `launch`: To perform [Launch](../launch/about-launch.md) related operations.
- `plugins`: To list the installed plugins.
- `config`: To perform configuration related activities in the CLI.

**Note**: The guide to create your own plugin within `csdx` is yet to come. But, as our CLI is built using the oclif package, you can create your custom plugin by referring to [oclif plugin documentation](https://oclif.io/docs/plugins).

Here are the commands within each namespace:
- **auth**[csdx auth:login](./cli-authentication.md#login)
- [csdx auth:logout](./cli-authentication.md#logout)
- [csdx auth:tokens](./cli-authentication.md#list-all-tokens)
- [csdx auth:whoami](./cli-authentication.md#display-username-of-a-session)
- **cm**[cm:assets:publish](./bulk-publish-and-unpublish-content.md#bulk-publish-all-assets)
- [cm:assets:unpublish](./bulk-publish-and-unpublish-content.md#bulk-unpublish-entries-assets)
- [cm:branches:create](./compare-and-merge-branches-using-the-cli.md#create-a-branch)
- [cm:branches:delete](./compare-and-merge-branches-using-the-cli.md#delete-a-branch)
- [cm:branches:diff](./compare-and-merge-branches-using-the-cli.md#steps-to-compare-branches)
- [cm:branches:merge](./compare-and-merge-branches-using-the-cli.md#steps-to-merge-branches)
- [cm:bulk-publish](./bulk-publish-and-unpublish-content.md)
- [cm:bulk-publish:cross-publish](./bulk-publish-and-unpublish-content/old-commands.md#bulk-publish-entries-assets-from-one-environment-to-another)
- [cm:entries:migrate-html-rte](./migrate-content-from-html-rte-to-json-rte.md)
- [cm:entries:publish](./bulk-publish-and-unpublish-content.md#bulk-publish-all-entries)
- [cm:entries:publish-modified](./bulk-publish-and-unpublish-content.md#bulk-publish-edited-entries)
- [cm:entries:publish-non-localized-fields](./bulk-publish-and-unpublish-content.md#bulk-publish-entries-after-non-localized-field-is-updated)
- [cm:entries:publish-only-unpublished](./bulk-publish-and-unpublish-content.md#bulk-publish-draft-entries)
- [cm:entries:unpublish](./bulk-publish-and-unpublish-content.md#bulk-unpublish-entries-assets)
- [cm:entries:update-and-publish](./bulk-publish-and-unpublish-content.md#bulk-publish-all-entries-after-adding-a-new-field-in-the-content-type)
- [cm:stacks:export](./export-content-using-the-cli.md)
- [cm:export-to-csv](./export-content-to-csv-file.md)
- [cm:stacks:import](./import-content-using-the-cli.md)
- [cm:stacks:clone](./cloning-a-stack.md#use-the-stacks-clone-command)
- [cm:stacks:migration](./migrate-your-content-using-the-cli-migration-command.md)
- [cm:stacks:seed](./import-content-using-the-seed-command.md#run-the-seed-command-using-the-management-token)
- [cm:stacks:publish-configure](./bulk-publish-and-unpublish-content.md#build-the-configuration-file)
- [cm:stacks:publish-revert](./bulk-publish-and-unpublish-content.md#restore-unpublish-entries-published)
- [cm:stacks:audit](./audit-plugin.md#issue-identification-in-references)
- [cm:stacks:audit:fix](./audit-plugin.md#issue-resolution-in-references)
- **launch**[csdx launch](./cli-for-launch.md#steps-for-execution)
- [csdx launch:logs](./cli-for-launch.md#logs)
- [csdx launch:functions](./cli-for-launch.md#functions)
- [csdx launch:deployments](./cli-for-launch.md#deployments)
- [csdx launch:environments](./cli-for-launch.md#environments)
- [csdx launch:open](./cli-for-launch.md#open)
- **config**[config:get:region](./configure-regions-in-the-cli.md#get-region)
- [config:get:base-branch](./compare-and-merge-branches-using-the-cli.md#get)
- [config:get:early-access-header](./configure-early-access-program-in-the-cli.md#get-early-access-header)
- [config:set:region](./configure-regions-in-the-cli.md#set-region)
- [config:set:base-branch](./compare-and-merge-branches-using-the-cli.md#set)
- [config:set:early-access-header](./configure-early-access-program-in-the-cli.md#set-early-access-header)
- [config:remove:base-branch](./compare-and-merge-branches-using-the-cli.md#remove)
- [config:remove:early-access-header](./configure-early-access-program-in-the-cli.md#remove-early-access-header)

Refer the section below to check the CLI version on your machine and update it to use the latest version.

## Check CLI Version
To check the current version of CLI installed on your machine, run this command in the terminal:

```
csdx --version
```
Running this command will display the current version, as shown below:

```
C:\Users\vxxxh>csdx --version
@contentstack/cli/ win32-x64 node-v20.10.0
```

## Update CLI Version
As mentioned above, you can check the version of CLI installed on your machine.
To get the latest version of CLI, run the following command in your terminal:

```
npm update -g @contentstack/cli
```

## Next Step
- [CLI Authentication and Adding Tokens](./cli-authentication.md)

## Common questions

### How do I confirm the Contentstack CLI is installed correctly?
Run `csdx --help` in your terminal to verify the installation and view the available topics and commands.

### How do I check which CLI version is installed?
Run `csdx --version` to display the current version installed on your machine.

### How do I update the Contentstack CLI to the latest version?
Run `npm update -g @contentstack/cli` in your terminal to update the global installation.

### What is `csdx`?
The `csdx` command is a top-level namespace in Contentstack that gives you access to Contentstack's extensive range of commands and functionalities.