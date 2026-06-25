---
title: Contentstack Command-line Interface (CLI) - Entry Migration
description: Use the Entry Migration utility in the Contentstack CLI to merge entries along with content types during Branches merge operations.
url: https://www.contentstack.com/docs/headless-cms/entry-migration
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Contentstack Command-line Interface (CLI) - Entry Migration

This page explains how to use the Contentstack Command-line Interface (CLI) Entry Migration utility to merge entries along with content types when working with Branches. It is intended for developers who have already performed a Branches merge operation and need to run or customize the generated entry migration scripts.

## Entry Migration

In Branches, the [merge operation](./compare-and-merge-branches-using-the-cli.md) is performed on content types and not on the entries within the content types. With the Entry Migration utility, created as part of the Entry Migration flow, you can now merge the entries along with the content types.

This step-by-step guide lets you use the Entry Migration utility to perform the merge operation on entries.

**Note**:
- The generated entry migration scripts can handle only simple scenarios. For complicated entry migration scenarios, you can customize the migration scripts.
- The entry migration scripts are available in the `merge_scripts` folder.
- If you want to create a script from scratch, you can use the [Migration](./migrate-your-content-using-the-cli-migration-command.md) command.
- Entry migration generates migration scripts only for content types merged during the
`branches:merge` command.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- [CLI installed](./install-the-cli.md) and [configured](./configure-regions-in-the-cli.md) (version 1.7.0 and above)
- [CLI authenticated](./cli-authentication.md)
- [Branches](../../../api-docs/developers/apis/content-management-api/branches.md) enabled for your organization
- [Merge operation](./compare-and-merge-branches-using-the-cli.md#steps-to-merge-branches) performed

## Usage

```
csdx cm:stacks:migration --multiple --file-path  --config compare-branch: --branch  --stack-api-key
```

## Options
- `-k`, `--stack-api-key=stack-api-key`: Stack API key.
- `--branch=branch`: Base branch.
- `--config=config`: Inline configuration, `compare-branch:<value>`. The key for receiving the compare branch name.
- `--file-path=filepath`: Path where the entry migration files are stored.
- `--multiple`: Migrate multiple content files in a single instance. You must mention the folder path where your migration script files are stored.

## Example

```
csdx cm:stacks:migration --multiple --file-path ./merge_scripts/merge_scripts_bf7xxx-xxx-xxx-xxx-xxx_xxx044 --config compare-branch:develop --branch main --stack-api-key bltxxxxxxxxxxxe
```

## Steps for execution

After performing the merge operation, the merge command generates the merge scripts, and you will get the following message in your terminal:

Follow the steps below to run the migration command:
- Copy the entry migration command from the message displayed in your terminal.
```
csdx cm:stacks:migration --multiple --file-path  --config compare-branch: --branch  --stack-api-key
```
- Run the command in your terminal.

This runs the merge scripts, which will be used to merge the entries.

**Note**: You can find the error logs in the generated file path under `**migration-logs > error.logs**`. For example: `./Users/Documents/cli/packages/contentstack/migration-logs/error.logs`

You can also customize the generated merge script to suit your requirements.

For example, if you want to publish the entries using the merge scripts, you can add the publish entry task as follows:

```
const publishEntriesTask = contentTypeUID => {
  return {
    title: `Publish entries for Content type '${contentTypeUID}'`,
    successMessage: `Entries published successfully for '${contentTypeUID}'`,
    failedMessage: `Failed to publish entries for '${contentTypeUID}'`,
    task: async params => {
      try {

       // Add your custom logic here

      } catch (error) {
        console.log(error)
      }
    },
  }
}

```

## Troubleshoot

If you are facing a **Migration Unsuccessful** or **Module cannot be found** error, please try one of the following troubleshooting methods:
- **Troubleshoot in your current terminal session**:
      **Windows (CMD)**:
```
FOR /F "usebackq tokens=*" %i IN (`npm root -g @contentstack/cli`) DO SET NODE_PATH=%i/@contentstack/cli/node_modules
```
- **Windows (PowerShell)**:
```
foreach ($i in $(npm root -g @contentstack/cli)) { $env:NODE_PATH = "$i/@contentstack/cli/node_modules" }
```
- **Unix**:
```
export NODE_PATH="$(npm root -g @contentstack/cli)/@contentstack/cli/node_modules"
```
- **Troubleshoot in the entire session**:
```
npm link marked
```

```
npm link lodash
```

## Common questions

### Where are the entry migration scripts generated?
The entry migration scripts are available in the `merge_scripts` folder.

### When does entry migration generate migration scripts?
Entry migration generates migration scripts only for content types merged during the `branches:merge` command.

### What should I do if I see “Migration Unsuccessful” or “Module cannot be found”?
Try one of the troubleshooting methods listed under **Troubleshoot**, such as setting `NODE_PATH` for your terminal session or running `npm link marked` and `npm link lodash` for the entire session.

### Can I customize the generated merge scripts?
Yes. The generated entry migration scripts can handle only simple scenarios, and for complicated entry migration scenarios, you can customize the migration scripts.