---
title: "[Contentstack Command-line Interface (CLI)] - Export Content to CSV File Using the CLI"
description: Export Content to CSV File Using the CLI
url: https://www.contentstack.com/docs/headless-cms/export-content-to-csv-file
product: Contentstack
doc_type: cli-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Export Content to CSV File Using the CLI

This page explains how to use the Contentstack CLI `cm:export-to-csv` command to export entries, organization users, teams, and taxonomy data into CSV files. It is intended for developers or administrators who need to generate CSV exports for backups, analysis, or reporting, and should be used when working from a terminal with the CLI installed and authenticated.

## Export Content to CSV File Using the CLI

The `cm:export-to-csv` command lets you export the following data into a CSV file using Contentstack CLI:
- [Stack Entries](../../content-managers/author-content/about-entries.md)
- [Organization users’ details](../organization/organization-users.md)
- [Organization teams' details](../teams/about-teams.md)
- [Taxonomy details](../taxonomy/about-taxonomy.md)

You can use this to perform tasks such as creating content backups, analyzing data, and more.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- Contentstack CLI [installed](./install-the-cli.md) and [configured](./configure-regions-in-the-cli.md)
- CLI [authenticated](./cli-authentication.md)

**Note:** Only the Organization [Owner](../organization/organization-roles.md#organization-owner)/[Admin](../organization/organization-roles.md#organization-admin) has the permissions to export an organization’s user or teams’ data.

## Commands

Contentstack CLI lets you export content from the source stack to a CSV file by running the following command in your terminal:

```
csdx cm:export-to-csv
```

This command prompts the following options:
- **Export entries of a stack to a CSV file**: To export entries, you must have access to the stack.
You’ll be prompted to select the following:
      **Organization** where your stack resides.
- **Stack** where the content type resides.
- **Branch** of the stack, if the organization is branch-enabled.
- **Content type(s)** to which the entries belong.
- **Language** of the entries to be exported.

    The CSV file gets generated in the following format:

    `<stack_name>_<content_type>_<language>_entries_exports.csv`

    You can also export entries to CSV using the [Management Token](../create-tokens/about-management-tokens.md) alias.
- **Export organization users' data to a CSV file**: To use this option, you must be an [Organization Owner](../organization/organization-roles.md#organization-owner) or [Organization Admin](../organization/organization-roles.md#organization-admin). The command lists only the organization(s) for which you have either role.**Note:** You must be logged in to the Contentstack app to export organization users.

    When prompted, select the organization containing the user data you want to export. The CSV file is generated in the following format:

    `<orgName>_users_exports.csv`
- **Export organization teams’ data to a CSV file**: Exports a selected organization’s teams data and generates **three CSV files** with the following details:
      **File 1:** Contains a list of **all teams** in the selected organization.The CSV file is generated in the following format:

        `<org-name>_teams_export.csv`
- **File 2:**

          Contains a list of **all the users in a particular team** if the `team-uid` flag is passed.The CSV file is generated in the following format:

            `<org-name>_team_<team-uid>_User_Details_export.csv`
- Contains a list of **all the users in all the teams** if the `team-uid` flag is not passed.The CSV file is generated in the following format:

            `<org-name>_team_User_Details_export.csv`
- **File 3:**

          Contains a list of **all the stack role details of a particular team** if the `team-uid` flag is passed.The CSV file is generated in the following format:

            `stack_role_mapping_<team-uid>.csv`
- Contains a list of **all the stack role details of all the teams** if the `team-uid` flag is not passed.The CSV file is generated in the following format:

            `stack_role_mapping.csv`
- **Export taxonomies to a CSV file**: Export taxonomies and related terms to CSV files.
When you choose this option, you are prompted to select the following:
      The organization where your stack resides.
- The stack that contains the taxonomy you want to export.

    The CSV files are generated in the following formats:

    `<stack-name>_taxonomies.csv`

    `<stack-name>_<taxonomy-name>_<taxonomy-uid>_terms.csv`
- **Exit**: Stops the command from executing further.

Once you select any of the above options, a “data” folder is automatically created in your current working directory. The corresponding CSV files are stored within this folder.

Alternatively, you can provide the required parameters after the command in a single line as shown below:

```
csdx cm:export-to-csv -a  -n  --action >  --org  --org-name  --locale  --content-type  --delimiter
```

**Options**:

| Option | Description |
|---|---|
| `-a`,`--alias=alias` | Alias of the management token. |
| `-k`,`--stack-api-key=stack-api-key` | API key of the source stack. |
| `-n`,`--stack-name=stack-name` | Name of the stack to be used in the CSV file name. |
| `--action=action` | Option to export data. [options: entries\|users\|teams\|taxonomies]. |
| `--taxonomy-uid=taxonomy-uid` | Provide the taxonomy UID of the related terms you want to export. |
| `--delimiter=delimiter` | [default: ,] [optional] Provide a delimiter to separate individual data fields within the CSV file. For example: `cm:export-to-csv --delimiter '|'` |
| `--team-uid=team-uid` | Provide the UID of a specific team in an organization. |
| `--org=org` | Provide the organization UID to clone org-level users. |
| `--org-name=org-name` | Name of the organization to be used in the CSV file name. |
| `--locale=locale` | Locale of the entries to be exported. |
| `--content-type=content-type` | Content type of the entries to be exported. |
| `--branch=branch-name` | Name of the branch from which entries will be exported. |
| `--include-fallback` | Includes fallback locale data when exporting taxonomies. When enabled, if a taxonomy term does not exist in the specified locale, it falls back to the hierarchy defined in the branch settings. |
| `--fallback-locale=fallback-locale` | Specify a fallback locale for taxonomy export. This locale will be used when a taxonomy term does not exist in the primary locale. Takes priority over branch fallback hierarchy when both are specified. |

**Examples**:
- Export entries to a CSV file:

```
csdx cm:export-to-csv --action  --locale  --alias  --content-type
```
- Export entries to a CSV file with a custom stack name:

```
csdx cm:export-to-csv --action  --locale  --alias  --content-type  --stack-name
```
- Export organization users to a CSV file:

```
csdx cm:export-to-csv --action  --org
```
- Export organization users to a CSV file with a custom organization name:

```
csdx cm:export-to-csv --action  --org  --org-name
```
- Export all teams in an organization:

```
csdx cm:export-to-csv --action  --org
```
- Export all the data for a specific team:

```
csdx cm:export-to-csv --action  --team-uid
```
- Export all the data for a specific team of a given organization by providing the organization UID and name:

```
csdx cm:export-to-csv --action  --org  --org-name  --team-uid
```
- Export taxonomies and related terms to a CSV file by providing the taxonomy UID:

```
csdx cm:export-to-csv --action  --alias  --taxonomy-uid
```
- Export taxonomies and respective terms to a CSV file:

```
csdx cm:export-to-csv --action  --alias
```
- Export taxonomies and respective terms to a CSV file with a delimiter:

```
csdx cm:export-to-csv --action  --alias  --delimiter
```
- Export entries to a CSV file with branch name provided:

```
csdx cm:export-to-csv --action  --locale  --alias  --content-type  --stack-name  --branch
```
- Export taxonomies with a specific locale:

```
csdx cm:export-to-csv --action  --alias  --locale
```
- Export taxonomies with a fallback locale support:

```
csdx cm:export-to-csv --action  --alias  --locale  --include-fallback
```
- Export taxonomies with a custom fallback locale:

```
csdx cm:export-to-csv --action  --alias  --locale  --include-fallback --fallback-locale
```

## Common questions

### Where are the exported CSV files stored?
Once you select any of the above options, a “data” folder is automatically created in your current working directory. The corresponding CSV files are stored within this folder.

### Who can export organization users’ or teams’ data?
Only the Organization Owner/Admin has the permissions to export an organization’s user or teams’ data.

### What values can be used for `--action`?
`--action=action`: Option to export data. [options: entries|users|teams|taxonomies].

### Can I change the delimiter used in the CSV output?
Yes, use `--delimiter=delimiter`: [default: ,] [optional] Provide a delimiter to separate individual data fields within the CSV file. For example: `cm:export-to-csv --delimiter '|'`

<!-- filename: contentstack-command-line-interface-cli-export-content-to-csv-file-using-the-cli.md -->