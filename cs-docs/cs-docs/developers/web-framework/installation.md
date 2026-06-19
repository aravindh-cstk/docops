---
title: "[Web Framework] - Installation"
description: Installation guide for contentstack-express web framework, including prerequisites, CLI installation, and connecting to a stack.
url: https://www.contentstack.com/docs/developers/web-framework/installation
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - Installation

This page explains how to install the contentstack-express web framework, including prerequisites, installing the Contentstack CLI, and connecting the CLI to your stack. It is intended for developers setting up a local project and should be used when initializing or configuring a web framework project against a specific stack and environment.

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

This guide will help you how to install contentstack-express.

## Prerequisites
- Node.js v4.2.0 or later

**Note: **Older versions(less than v4.2.0) of Node.js are not recommended.

## Install CLI

To get and globally install the command line interface (CLI) on your system, run this command in a Terminal or Command Prompt:

```
$ npm install -g contentstack-cli
```

**Note**: For a global install of “contentstack-cli,” OSX/Linux users may need to prefix the command with “sudo” like this: `sudo npm install -g contentstack-cli`.

Once installed, you can use CLI  to execute Contentstack commands.

## Connect to your stack

In the terminal, navigate to your workspace, and run the “connect” command.

```
$ contentstack connect
```

This will prompt you to enter the stack api key and access token. You can find these details on your [Stack’s page](/docs/developers/set-up-stack/view-stack-details).

```
Enter your stack api key: {API_KEY}
Enter your stack access token: {ACCESS_TOKEN}
```

This will validate the stack. Once validated, you will be prompted to enter the project root directory and select the publishing [environment](/docs/developers/set-up-environments/about-environments) (“development”) which we created in earlier steps.

```
Enter name of the directory to contain the project: (my-site)
Select the publishing environment:
1. development
```

This will automatically configure your project for the selected publishing environment along with the basic theme for the website.

## Common questions

**Q: Is contentstack-express still supported?**  
A: **Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

**Q: What Node.js version is required?**  
A: Node.js v4.2.0 or later.

**Q: How do I install the Contentstack CLI globally?**  
A: Run: `npm install -g contentstack-cli`.

**Q: Where do I find the stack API key and access token for `contentstack connect`?**  
A: You can find these details on your [Stack’s page](/docs/developers/set-up-stack/view-stack-details).