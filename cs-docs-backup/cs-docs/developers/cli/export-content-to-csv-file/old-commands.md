---
title: "[Contentstack Command-line Interface (CLI)] - Export Content to .CSV File | Old Commands"
description: Documentation for the cm:export-to-csv CLI command to export stack entries or organization users’ details into a CSV file.
url: https://www.contentstack.com/docs/developers/cli/export-content-to-csv-file/old-commands
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: old-commands
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Export Content to .CSV File | Old Commands

This page explains how to use the Contentstack CLI `cm:export-to-csv` command to export stack entries or organization users’ details into a CSV file. It is intended for developers or administrators who need to create backups, run analysis, or extract data, and should be used when you have the required stack access or organization role permissions.

## Export Content to .CSV File | Old Commands

The `**cm:export-to-csv**` command allows users to export the following data into a CSV file:
- Stack Entries
- [Organization users’ details](../../organization/organization-users.md)

This makes it easy for users to perform other operations such as create content backups, perform data analysis, and so on.

To export the content of a stack, you need to have access to it. Likewise, to export an organization’s user data, you need to be the “[owner](../../organization/organization-roles.md#organization-owner)” or an “[admin](../../organization/organization-roles.md#organization-admin)” user of that organization.

You can export content into a .csv file by performing the following two steps:
- [Log in to the CLI session](#log-in-to-the-cli-session)
- [Use the “cm:export-to-csv” command](#use-the-cm-export-to-csv-command)

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Node.js version 16 or above](https://nodejs.org/en/download/)
- CLI installed on your machine: `**npm install -g @contentstack/cli**`

## Log in to the CLI Session
**Note:** By default, the CLI session uses the **North American** region. To set the **European** or **Azure North Amercian** region, refer to the [Set Region](/docs/developers/cli/configure-the-cli#set-region) command for more details.

You will need an **authtoken** to use the **export-to-csv** command. To generate the authtoken, open your terminal, and run the following command to log in to your Contentstack account:

```
csdx auth:login
```

It will ask you to provide your email address and password of your Contentstack account. Once you log in successfully, an authtoken will be generated and saved to the CLI session until you [log out from this session](/docs/developers/cli/authenticate-with-the-cli#logout).

**Additional Resource**: To learn more about the login command, refer to the [Login command section](/docs/developers/cli/authenticate-with-the-cli#login).

## Use the ‘cm:export-to-csv’ command
Now that you are logged in to Contentstack, let’s export content from the source stack in a CSV file by running the following command in your terminal:

```
csdx cm:export-to-csv
```

This command will prompt the following options as follows:

**Export entries to CSV**: Export all entries of a stack to a CSV file. You should have access to the stack.
This option will ask you to select the following:Organization where your stack resides
- Stack where the content type resides
- Content type(s) to which the entries belong
- Language of which you want to export the entries
- **Export organization users to CSV**: Export the organization users’ details to a CSV file. To use this option, you should either be an [Organization Owner](../../organization/organization-roles.md#organization-owner) or the [Organization Admin](../../organization/organization-roles.md#organization-admin). This option lists the organization(s) of which you are either an owner or admin.
- **Exit**: Stop this command from further execution.

Once you select any one of the above-mentioned options, the “data” folder is auto-generated in the current working directory (folder), and the corresponding CSV files are stored within this “data” folder.

## Common questions

### What data can I export with `cm:export-to-csv`?
You can export Stack Entries and Organization users’ details into a CSV file.

### What permissions do I need to export organization users’ details?
To export an organization’s user data, you need to be the “owner” or an “admin” user of that organization.

### Where are the exported CSV files saved?
A “data” folder is auto-generated in the current working directory (folder), and the corresponding CSV files are stored within this “data” folder.

### Do I need to set a region before logging in?
By default, the CLI session uses the North American region; to set the European or Azure North Amercian region, refer to the Set Region command.