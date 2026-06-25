---
title: "[Web Framework] - contentstack-express Command-line Utility"
description: contentstack-express Command-line Utility commands for connecting to a stack, syncing, publishing, unpublishing content, and creating plugins.
url: https://www.contentstack.com/docs/developers/web-framework/contentstack-express-command-line-utility
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Web Framework] - contentstack-express Command-line Utility

This page documents the `contentstack-express` Command-line Utility, including installation and supported commands (connect, sync, publish, unpublish, and plugin creation). It is intended for developers working with the (deprecated) contentstack-express web framework who need to manage stack connections and content operations from the command line.

contentstack-express Command-line Utility

**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework. Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

The contentstack-express Command-line Utility makes it easy to connect to a [stack](../set-up-stack/about-stack.md), synchronize, [publish](../../content-managers/author-content/publish-an-entry.md), and [unpublish](../../content-managers/author-content/unpublish-an-entry.md) content, as well as create plugins in Contentstack apps.****

**Note**: The contentstack-express framework CLI will soon be deprecated. However, our new CLI has many utilities that will help you manage your Contentstack account from the command line. Check out our [CLI documentation](/docs/developers/cli) for more details and get started with using our new CLI.

## Installation

Install contentstack-express Command-line Utility using [npm](https://www.npmjs.com/).

To install, run the following command in the terminal/command prompt.

```
$ npm install -g contentstack-cli
```

**Note:** For a global install of “contentstack-cli,” OSX/Linux users may need to prefix the command with sudo.

## contentstack-express Command-line Utility commands

Now, let’s look at the commands that are supported by contentstack-express Command-line Utility. To use the options of commands, make sure you are using CLI version 1.0.3 or above.

### connect

```
$ contentstack connect [directory] [api_key] [access_token]
```

#### Usage

The **connect** command is used to connect to an existing stack. Run this command from your favorite location in the command prompt.

#### Command line options

| **Options** | **Description** |
|---|---|
| -d, --dir | Name of the directory where you want the application scaffold to be created |
| -a, --api_key | Stack API key |
| -c, --token | Stack access token |

### sync

```
$ contentstack sync
```

#### Usage

The **sync** command is used to synchronize all the published content locally. Run this command from the project root directory.

#### Command-line options

| **Options** | **Description** |
|---|---|
| -e, --env | Name of the environment of which content needs to be synchronized |
| -l, --lang | Code of the language of which the content needs to be synchronized. E.g., en-us |
| -t, --type | Type of content to be synchronized. Type can be “content_types,” “assets,” or “all.” The default type is “all.” |
| -c, --content_types | Unique IDs of the content types (comma separated list) of which the content needs to be synchronized |
| -s, --skip_content_types | Unique IDs of content types (comma separated list) of which the synchronization needs to be skipped |
| -d, --datetime | ISO String format date from where the content synchronization should start. For e.g. 2016-06-03T08:31:46.877Z. If this is left blank, it will sync content from the beginning. |
| -b, --backup | Use this to create a backup of the existing content |

### publish

```
$ contentstack publish
```

#### Usage

The **publish** command is used to publish content to the specified environment. Run this command from the project root directory.

#### Command-line options

| **Options** | **Description** |
|---|---|
| -u, --username | Email id of the Contentstack user |
| -p, --password | Password relevant to the above-mentioned email id |
| -e, --env | Name/s of the environments (comma separated list) to which you want to publish the content |
| -t, --type | Type of content to be published. Type can be content_types or assets or all. The default type is “all.” |
| -l, --lang | Code of the language to which the content is to be published. For e.g., en-us |
| -c, --content_types | Unique IDs of the content types (comma separated list) of which the content needs to be published |
| -s, --skip_content_types | Unique IDs of the content types (comma separated list) the content of which should not be sent for publishing |
| -b, --backup | Use this to create a backup of existing content |

### unpublish

```
$ contentstack unpublish
```

#### Usage

The **unpublish **command is used to unpublish content from the specified environment. Run this command from the project root directory.

#### Command-line options

| **Options** | **Description** |
|---|---|
| -u, --username | Email id of the Contentstack user |
| -p, --password | Password relevant to the above-mentioned email id |
| -e, --env | Name/s of the environments(comma separated list) from where the content needs to be unpublished |
| -t, --type | Type of content to be unpublished. Type can be content_types or assets or all. The default type is “all.” |
| -l, --lang | Code of the language of which the content needs to be unpublished. E.g., en-us |
| -c, --content_types | Unique IDs of the content types (comma separated list) of which the content needs to be unpublished |
| -s, --skip_content_types | Unique IDs of the content types (comma separated list) of which the content should not be unpublished |
| -b, --backup | Use this to create a backup of the existing content |

### plugin create

```
$ contentstack plugin create [plugin name]
```

The plugin create command is used to create a plugin scaffold under the Contentstack application. Check out the documentation on [plugin development](./plugins.md#plugin-development) for more details.

## Common questions

### Is contentstack-express CLI still supported?
**Warning**: contentstack-express framework has been deprecated. We will soon stop supporting this framework.

### What should I use instead of the contentstack-express framework?
Instead, we recommend using [DataSync](/docs/developers/develop-apps-with-datasync), which is faster and more flexible than the web framework.

### What is the minimum CLI version required to use command options?
To use the options of commands, make sure you are using CLI version 1.0.3 or above.

### How do I create a plugin scaffold from the command line?
Run:
```
$ contentstack plugin create [plugin name]
```