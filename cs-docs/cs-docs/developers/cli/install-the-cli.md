---
title: Contentstack Command-line Interface (CLI) - Install the CLI
description: Install and update the Contentstack Command-line Interface (CLI) in macOS, Windows, and Linux environments.
url: https://www.contentstack.com/docs/developers/cli/install-the-cli
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
- `auth`: To perform [authentication-related](/docs/developers/cli/cli-authentication) activities.
- `cm`: To perform content management activities such as [bulk publish, bulk unpublish](/docs/developers/cli/bulk-publish-and-unpublish-content), [import](/docs/developers/cli/import-content-using-the-cli), [export](/docs/developers/cli/export-content-using-the-cli), [export-to-csv](/docs/developers/cli/export-content-to-csv-file/), [branches](/docs/developers/cli/compare-and-merge-branches-using-the-cli/), and [migration](/docs/developers/cli/migrate-your-content-using-the-cli-migration-command/) content.
- `help`: To list useful commands in the CLI.
- `launch`: To perform [Launch](/docs/developers/launch/about-launch/) related operations.
- `plugins`: To list the installed plugins.
- `config`: To perform configuration related activities in the CLI.

**Note**: The guide to create your own plugin within `csdx` is yet to come. But, as our CLI is built using the oclif package, you can create your custom plugin by referring to [oclif plugin documentation](https://oclif.io/docs/plugins).

Here are the commands within each namespace:
- **auth**[csdx auth:login](/docs/developers/cli/cli-authentication#login)
- [csdx auth:logout](/docs/developers/cli/cli-authentication#logout)
- [csdx auth:tokens](/docs/developers/cli/cli-authentication#list-all-tokens)
- [csdx auth:whoami](/docs/developers/cli/cli-authentication#display-username-of-a-session)
- **cm**[cm:assets:publish](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-publish-all-assets)
- [cm:assets:unpublish](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-unpublish-entries-assets)
- [cm:branches:create](/docs/developers/cli/compare-and-merge-branches-using-the-cli#create-a-branch)
- [cm:branches:delete](/docs/developers/cli/compare-and-merge-branches-using-the-cli#delete-a-branch)
- [cm:branches:diff](/docs/developers/cli/compare-and-merge-branches-using-the-cli#steps-to-compare-branches)
- [cm:branches:merge](/docs/developers/cli/compare-and-merge-branches-using-the-cli#steps-to-merge-branches)
- [cm:bulk-publish](/docs/developers/cli/bulk-publish-and-unpublish-content)
- [cm:bulk-publish:cross-publish](/docs/developers/cli/bulk-publish-and-unpublish-content/old-commands#bulk-publish-entries-assets-from-one-environment-to-another)
- [cm:entries:migrate-html-rte](/docs/developers/cli/migrate-content-from-html-rte-to-json-rte)
- [cm:entries:publish](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-publish-all-entries)
- [cm:entries:publish-modified](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-publish-edited-entries)
- [cm:entries:publish-non-localized-fields](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-publish-entries-after-non-localized-field-is-updated)
- [cm:entries:publish-only-unpublished](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-publish-draft-entries)
- [cm:entries:unpublish](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-unpublish-entries-assets)
- [cm:entries:update-and-publish](/docs/developers/cli/bulk-publish-and-unpublish-content#bulk-publish-all-entries-after-adding-a-new-field-in-the-content-type)
- [cm:stacks:export](/docs/developers/cli/export-content-using-the-cli)
- [cm:export-to-csv](/docs/developers/cli/export-content-to-csv-file/)
- [cm:stacks:import](/docs/developers/cli/import-content-using-the-cli)
- [cm:stacks:clone](/docs/developers/cli/cloning-a-stack#use-the-stacks-clone-command)
- [cm:stacks:migration](/docs/developers/cli/migrate-your-content-using-the-cli-migration-command)
- [cm:stacks:seed](/docs/developers/cli/import-content-using-the-seed-command#run-the-seed-command-using-the-management-token)
- [cm:stacks:publish-configure](/docs/developers/cli/bulk-publish-and-unpublish-content#build-the-configuration-file)
- [cm:stacks:publish-revert](/docs/developers/cli/bulk-publish-and-unpublish-content#restore-unpublish-entries-published)
- [cm:stacks:audit](/docs/developers/cli/audit-plugin#issue-identification-in-references)
- [cm:stacks:audit:fix](/docs/developers/cli/audit-plugin#issue-resolution-in-references)
- **launch**[csdx launch](/docs/developers/cli/cli-for-launch/#steps-for-execution)
- [csdx launch:logs](/docs/developers/cli/cli-for-launch/#logs)
- [csdx launch:functions](/docs/developers/cli/cli-for-launch/#functions)
- [csdx launch:deployments](/docs/developers/cli/cli-for-launch/#deployments)
- [csdx launch:environments](/docs/developers/cli/cli-for-launch/#environments)
- [csdx launch:open](/docs/developers/cli/cli-for-launch/#open)
- **config**[config:get:region](/docs/developers/cli/configure-regions-in-the-cli#get-region)
- [config:get:base-branch](/docs/developers/cli/compare-and-merge-branches-using-the-cli#get)
- [config:get:early-access-header](/docs/developers/cli/configure-early-access-program-in-the-cli#get-early-access-header)
- [config:set:region](/docs/developers/cli/configure-regions-in-the-cli#set-region)
- [config:set:base-branch](/docs/developers/cli/compare-and-merge-branches-using-the-cli#set)
- [config:set:early-access-header](/docs/developers/cli/configure-early-access-program-in-the-cli#set-early-access-header)
- [config:remove:base-branch](/docs/developers/cli/compare-and-merge-branches-using-the-cli#remove)
- [config:remove:early-access-header](/docs/developers/cli/configure-early-access-program-in-the-cli#remove-early-access-header)

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
- [CLI Authentication and Adding Tokens](/docs/developers/cli/cli-authentication)

## Common questions

### How do I confirm the Contentstack CLI is installed correctly?
Run `csdx --help` in your terminal to verify the installation and view the available topics and commands.

### How do I check which CLI version is installed?
Run `csdx --version` to display the current version installed on your machine.

### How do I update the Contentstack CLI to the latest version?
Run `npm update -g @contentstack/cli` in your terminal to update the global installation.

### What is `csdx`?
The `csdx` command is a top-level namespace in Contentstack that gives you access to Contentstack's extensive range of commands and functionalities.