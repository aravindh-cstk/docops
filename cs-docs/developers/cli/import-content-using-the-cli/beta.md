---
title: "TESTING [Contentstack Command-line Interface (CLI)] - Import Content using the CLI | Beta"
description: "How to import exported content into a destination stack using the Contentstack CLI (Beta), including management token/auth token methods, parameters, config files, and limitations."
url: https://www.contentstack.com/docs/developers/cli/import-content-using-the-cli/beta
product: "Contentstack"
doc_type: "cli-guide"
audience:
  - developers
  - content-managers
version: "beta"
last_updated: "2026-03-25"
---

# TESTING [Contentstack Command-line Interface (CLI)] - Import Content using the CLI | Beta

This page explains how to import previously exported Contentstack content into a destination stack using the Contentstack Command-line Interface (CLI) (Beta). It is intended for developers (and technical users) who have exported content from a source stack and need to import it into a target stack using management tokens or auth tokens, with either command parameters or a config file.

[TESTING] Import Content using the CLI | Beta

After you have exported the content from the source stack, the next step is to import it into the destination stack. To do this, you can use the import command in several ways.

**Note**: Before you try the import commands, make sure you have unzipped the exported content from the folder that contains the exported content.

Content can be imported in a stack for the following modules:
- [Assets](/docs/content-managers/working-with-assets/about-assets)
- [Locales](../../multilingual-content/about-languages.md)
- [Environments](../../set-up-environments/about-environments.md)
- [Extensions](../../experience-extensions-overview/about-experience-extensions.md)
- [Webhooks](../../set-up-webhooks/about-webhooks.md)
- [Global Fields](../../global-field/about-global-field.md)
- [Content Types](../../create-content-types/about-content-types.md)
- [Entries](../../../content-managers/author-content/about-entries.md)
- [Labels](../../create-content-types/about-labels.md)
- [Workflow](../../set-up-workflows-and-publish-rules/about-workflows.md)

**Note**: The imported content, in the target stack, will be automatically published to the environment and locale in which it was previously published in the source stack. If any exported content wasn’t published on any environment, that particular content won’t get published to any environment after it is imported into the target stack.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- CLI [installed](../install-the-cli.md)
- A [configured management token](/docs/developers/cli/authenticate-with-the-cli#add-token) (alias) or [authtoken](/docs/developers/cli/authenticate-with-the-cli#login)

## Commands
The `**cm:import**` command lets you import content to your destination stack. Below we have listed down the ways in which you can use the `cm:import` command:
- [Import Content Using Management Token and Parameters](#import-content-using-management-token-and-parameters)
- [Import Content Using Management Token and Config file](#import-content-using-management-token-and-config-file)
- [Import Content Using Auth Token and Parameters](#import-content-using-auth-token-and-parameters)
- [Import Content Using Auth Token and Config file](#import-content-using-auth-token-and-config-file)

Let's discuss in detail how you can import content into your stack.

### Import Content Using Management Token and Parameters
This command lets you import content using a management token. For ease, you can pass several parameters/options to this command at once.

**Usage**

```
csdx cm:import -a
```

Alternatively, refer to the following command to add several parameters/options in a single line:

```
csdx cm:import -a  -d
```

**Options**
- `-a`, `--management-token-alias=management-token-alias`: The management token of the destination stack to which you will import the content.
- `-d`, `--data=data`: The path or the location in your file system where the content, you intend to import, is stored. For example, `-d "C:\Users\Name\Desktop\cli\content".`
- `-B`, `--branch=branch`: The name of the branch where you want to import your content. If you don’t mention the branch name, then by default the content will be imported to the **main **branch.
- `-b`, `--backup-dir=backup-dir`: [optional] backup directory name when using specific module.
- `-m`, `--module=module`: (optional) Specify the module to import into the target stack. If not specified, the import command will import all the modules into the stack. The available modules are *assets, content-types, entries, environments, extensions, global-fields, labels, locales*, *webhooks, *and* workflows.*

After importing the first module, note the name of the backup folder that was created in the workspace or in the code editor’s CLI folder.

**Note:** The parent backup folder created after the first import can be used to save all the backups in a single folder as it gets updated after every import operation.

When importing modules using the import command, provide the backup flag (b) along with the backup folder name as follows:

```
csdx cm:import -a  -d  -m  -b
```

Including the backup flag is essential when repeatedly using the single module `import` command. As these modules have inter-dependency, using the backup flag helps avoid any errors while importing.

For every module import operation, all the latest mapping files are added to a single mapper folder, and the dependent modules use the latest UIDs of the dependency for efficient mapping.

**Examples**
- To import all modules into a stack:

```
csdx cm:import -a mytoken  -d "C:\Users\Name\Desktop\cli\content"
```

- To import all modules in a particular branch of your stack(For example: **develop**).

```
csdx cm:import -a mytoken -d "C:\Users\Name\Desktop\cli\content" -B develop
```

- To import only locales into a stack:

```
csdx cm:import -a mytoken  -d "C:\Users\Name\Desktop\cli\content" -m locales
```

OR

```
csdx cm:import -a mytoken  -d "C:\Users\Name\Desktop\cli\content" --module locales
```

- Including the backup flag to import only environments into a stack after your first module import.

```
csdx cm:import -a mytoken -d "C:\Users\Name\Desktop\cli\content" -m environments -b _backup_123
```

OR

```
csdx cm:import -a mytoken -d "C:\Users\Name\Desktop\cli\content" --module environments -b _backup_123
```

**Note**: When importing  modules individually, make sure you follow this module sequence: **locales > environments > assets > extensions > webhooks > global-fields > content-types > workflows > entries > labels**.  For example, before importing entries, you must have had imported assets, environments, locales, extensions, webhooks, global-fields, content-types, and workflows.

### Import Content Using Management Token and Config file
This command lets you import content to your stack by using a management token and a configuration file that contains the parameters/options and their associated value.

To get started with this command, download this [config file](https://github.com/contentstack/cli/blob/main/packages/contentstack-import/example_config/index.json), add values to this file, and note down the path where you have saved this file.

By doing so, you don’t need to separately provide parameters/options in the command.

**Usage**

```
csdx cm:import -a  -c
```

**Options**
- `-a`, `--management-token-alias=management-token-alias`: The management token of the destination stack to which you will import the content.
- `-c`, `--config=config`: The path of the JSON file containing all the options for a single run. You can refer to this example [config file](https://github.com/contentstack/cli/blob/main/packages/contentstack-import/example_config/index.json).

**Example**
- To import content using a config file:

```
csdx cm:import -a mytoken -c “C:/Users/Name/Desktop/cli/config.json”
```

### Import Content Using Auth Token and Parameters
You can use this method to import content to your stack if you have logged in to the session using the [Login](https://www.contentstack.com/docs/developers/cli/authenticate-with-the-cli/#login) command. Running the Login command generates an auth token, which is used in the command below.

**Usage**

```
csdx cm:import -A
```

Alternatively, refer to the below command for adding several parameters/options in a single line:

```
csdx cm:import -A -s  -d
```

**Options**
- `-A`, `--auth-token`: To use the auth token of the current session. It is automatically generated and stored in the session after running the login command.
- `-s`, `--stack-uid=stack-uid`: The API key of the target stack.
- `-d`, `--data=data`: The path or the location in your file system where the content, you intend to import, is stored. For example, `-d "C:\Users\Name\Desktop\cli\content".`
- `-B`, `--branch=branch`: The name of the branch where you want to import your content. If you don’t mention the branch name, then by default the content will be imported to the **main **branch.
- `-b`, `--backup-dir=backup-dir`: [optional] backup directory name when using specific module.
- `-m`, `--module=module`: (optional) Specify the module to import into the target stack. If not specified, the import command will import all the modules into the stack. The available modules are *assets, content-types, entries, environments, extensions, global-fields, labels, locales*, *webhooks, *and* workflows*.

After importing the first module, note the name of the backup folder that was created in the workspace or in the code editor’s CLI folder.

**Note:** The parent backup folder created after the first import can be used to save all the backups in a single folder as it gets updated after every import operation.

When importing modules using the import command, provide the backup flag (b) along with the backup folder name as follows:

```
csdx cm:import -A -s  -d  -m  -b
```

Including the backup flag is essential when repeatedly using the single module `import` command. As these modules have inter-dependency, using the backup flag helps avoid any errors while importing.

For every module import operation, all the latest mapping files are added to a single mapper folder, and the dependent modules use the latest UIDs of the dependency for efficient mapping.

**Examples**
- To import all modules into a stack:

```
csdx cm:import -A -s bltxxxxxx -d "C:\Users\Name\Desktop\cli\content"
```

- To import all modules in a particular branch of your stack(For example: **develop**).

```
csdx cm:import -A -s bltxxxxxx -d "C:\Users\Name\Desktop\cli\content" -B develop
```

- To import only locales into a stack:

```
csdx cm:import -A -s bltxxxxxx -d "C:\Users\Name\Desktop\cli\content" -m locales
```

OR

```
csdx cm:import -A -s bltxxxxxx -d "C:\Users\Name\Desktop\cli\content" --module locales
```

- Including the backup flag to import only environments into a stack after your first module import.

```
csdx cm:import -A -s bltxxxxxx -d "C:\Users\Name\Desktop\cli\content" -m environments -b _backup_123
```

OR

```
csdx cm:import -A -s bltxxxxxx -d "C:\Users\Name\Desktop\cli\content" --module environments -b _backup_123
```

**Note**: When importing modules individually, make sure you follow this module sequence: **locales > environments > assets > extensions > webhooks > global-fields > content-types > workflows > entries > labels**. For example, before importing entries, you must have had imported assets, environments, locales, extensions, webhooks, global-fields, content-types, and workflows.

### Import Content Using Auth Token and Config file
This command lets you import content to your stack by using auth token and a configuration file that contains the parameters/options and the associated value.

To get started with this command, download this [config file](https://github.com/contentstack/cli/blob/main/packages/contentstack-import/example_config/index.json), add values to this file, and note down the path where you have saved this file.

By doing so, you don’t need to separately provide parameters/options in the command.

**Usage**

```
csdx cm:import -A -c
```

**Options**
- `-A`, `--auth-token`: To use the auth token of the current session. It is automatically generated and stored in the session after running the login command.
- `-c`, `--config=config`: The path of the configuration JSON file containing all the options for a single run. You can refer to this example [config file](https://github.com/contentstack/cli/blob/main/packages/contentstack-import/example_config/index.json).

**Example**
- To import content using a config file:

```
csdx cm:import -A -c “C:/Users/Name/Desktop/cli/config.json”
```

## Limitations
- The import commands will import only the latest version of a published entry/asset.
- While importing workflows from one stack to another, admins and workflow stage users are not included. Therefore, admins and stage users of your workflows will not be migrated to the new stack.
- Currently, you cannot import content for the following modules:[Roles](../../invite-users-and-assign-roles/about-stack-roles.md)
- [Users](../../invite-users-and-assign-roles/about-stack-users.md)
- [Releases](../../../content-managers/create-and-manage-releases/about-releases.md)

**Additional Resources**: Check out the [Export Content](/docs/developers/cli/export-content-using-cli) documentation to learn how you can export content from your stack using CLI.

## Common questions

### Do I need to unzip the exported content before importing?
Yes. **Note**: Before you try the import commands, make sure you have unzipped the exported content from the folder that contains the exported content.

### What happens to publishing status after import?
**Note**: The imported content, in the target stack, will be automatically published to the environment and locale in which it was previously published in the source stack. If any exported content wasn’t published on any environment, that particular content won’t get published to any environment after it is imported into the target stack.

### Can I import only a single module instead of all modules?
Yes. Use the `-m`, `--module=module` option: (optional) Specify the module to import into the target stack. If not specified, the import command will import all the modules into the stack.

### Are there modules that cannot be imported?
Yes. Currently, you cannot import content for the following modules:[Roles](../../invite-users-and-assign-roles/about-stack-roles.md), [Users](../../invite-users-and-assign-roles/about-stack-users.md), and [Releases](../../../content-managers/create-and-manage-releases/about-releases.md).