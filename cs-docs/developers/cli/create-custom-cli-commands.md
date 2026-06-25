---
title: "[Contentstack Command-line Interface (CLI)] - Create Custom CLI Commands"
description: Contentstack allows developers to write plugins and add custom commands to the CLI.
url: https://www.contentstack.com/docs/headless-cms/create-custom-cli-commands
product: Contentstack
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Contentstack Command-line Interface (CLI)] - Create Custom CLI Commands

This page explains how to create, run, set up, register/install, and uninstall custom Contentstack CLI plugins (custom commands). It is intended for developers who want to extend the Contentstack CLI with their own commands and need guidance on the plugin workflow from creation to usage.

## Create Custom CLI Commands

Contentstack allows developers to write plugins and add custom commands to the CLI. You can then install and use these plugins as required. In this guide, we will learn how to write a custom CLI plugin.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Node.js version 16 or above](https://nodejs.org/en/download/)
- CLI installed on your machine: **npm**** install -g @contentstack/cli**

## Use the “plugins:create” command

To get started with the custom plugin creation process, open your terminal (command prompt), and run the command given below:

```
csdx plugins:create
```

This will prompt you to provide the following details:
- Name for your custom plugin, for example, “myplugin”.
- Few lines of *optional *description for this custom plugin.
- Version of this plugin, for example, “v1.” By default, the initial format will be “0.0.0”.
- Name of the license for this plugin. By default, it’s “MIT”.
- Owner’s name of GitHub repository.
- Name of the GitHub repository.
- Preference to use Typescript - Yes/ No.
- Preference to use ESLint - Yes/ No.
- Preference to use Mocha - Yes/ No.

After you provide these details, it will generate a plugin boilerplate (initial code of the plugin). You will find a **hello.ts **(if you choose “Yes” for Typescript) or **hello.js **(if you choose “No” for Typescript) file in your working directory. This file contains the basic code required for plugin development.

You can tailor this code as per your requirements.

## Run the Code

To run the code, open your terminal, point it to the “<<plugin_name>>” directory (path of your plugin) created above, and run the command given below:

```
node bin/run hello
```

Next, let’s set up this plugin within the **csdx **[namespace](./install-the-cli.md#namespaces), by using the **plugins:link **command so that you don’t have to use the above command for running the plugin’s code.

## Set up the Plugin

When you develop the plugin locally, you can use the **plugins:link** command for setting up the plugin. To do this, open your terminal, point it to the “<<plugin_name>>” directory, and run the command given below:

```
csdx plugins:link
```

You can validate this setup by running this command:

```
csdx hello
```

After running this command, you’ll see your plugin’s output in the terminal.

## Register and Install the Plugin

You can register a new plugin command and use it as per your requirements.

To register a new plugin command first publish your plugin package on npm.

Once your plugin is published, run the following command:

```
csdx plugins: install
```

This will successfully install the plugin and you can use this custom plugin to execute your tasks.

## Uninstall the Plugin

If you have created or installed a plugin using [Contentstack CLI](./install-the-cli.md), and want to uninstall/ remove that plugin, you can do it by using the **plugins:uninstall **command.

**Note**: This command will not delete the plugin’s code folder.

To do this, run the following commands in your terminal:
- Get a list of plugins you have installed:

```
csdx plugins
```
- ****From the available plugins listed in the terminal, uninstall it by passing its name in the command below:

```
csdx plugins:uninstall <>
```

This will uninstall/ remove the plugin.

## Common questions

### Do I need TypeScript to create a custom CLI plugin?
No. During `csdx plugins:create`, you can choose the preference to use Typescript - Yes/ No.

### How do I run my plugin without linking it to `csdx`?
You can run it from the plugin directory using:
```
node bin/run hello
```

### How do I validate that `plugins:link` worked?
After running `csdx plugins:link`, you can validate by running:
```
csdx hello
```

### Does uninstalling a plugin delete its code folder?
No. **Note**: This command will not delete the plugin’s code folder.

Filename: contentstack-command-line-interface-cli-create-custom-cli-commands.md