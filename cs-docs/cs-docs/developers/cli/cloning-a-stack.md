---
title: "[Contentstack Command-line Interface (CLI)] - Cloning a Stack"
description: Contentstack enables you to clone a stack and its associated structure and content using the cm:stacks:clone CLI command.
url: https://www.contentstack.com/docs/headless-cms/cloning-a-stack
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: latest
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Cloning a Stack

This page explains how to clone a Contentstack stack (structure and optionally content) using the Contentstack Command-line Interface (CLI). It is intended for developers and administrators who need to quickly set up, test, or migrate stack data between source and destination stacks using the `cm:stacks:clone` command.

## Cloning a Stack

Contentstack enables you to **clone a stack** and its associated **structure and content** using the `cm:stacks:clone` CLI command. This process lets you [export](/docs/developers/cli/export-content-using-the-cli/) data from a source stack and [import](/docs/developers/cli/import-content-using-the-cli/) it into a new or existing stack, facilitating rapid setup, testing, or migration. This guide uses the latest **Contentstack CLI** commands to ensure a seamless cloning experience.

**Note:** Before executing this command, ensure you have the required permissions for creating or accessing the destination stack. To know more about user roles and their permissions, refer to [this](/docs/developers/invite-users-and-assign-roles/types-of-roles#stack-roles-and-permissions-overview) documentation.

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login/)
- Contentstack CLI [installed](/docs/developers/cli/install-the-cli) and [configured](/docs/developers/cli/configure-regions-in-the-cli/)
- [Configured authtoken](/docs/developers/cli/cli-authentication#authentication)

## Commands
The `cm:stacks:clone` command lets you export content from the source stack and import it into the destination stack instantly.

**Note: **By default, an [audit fix](/docs/developers/cli/audit-plugin#issue-resolution-in-references) is performed on the exported content before import. This helps identify and address potential issues in the exported data.

## Options
Use the following options while performing the clone operation:
- `-n, --stack-name=stack-name`: Name for the new stack where cloned content will be stored.
- `--destination-management-token-alias=destination-management-token-alias`: Alias for the destination stack's management token.
- `--destination-stack-api-key=destination-stack-api-key`: API key of the destination stack.
- `--source-stack-api-key=source-stack-api-key`: API key of the source stack.
- `--source-branch=source-branch`: Name of the branch in the source stack.
- `--source-branch-alias=source-branch-alias`: Alias of the branch in the source stack.
- `--source-management-token-alias=source-management-token-alias`: Alias for the source stack's management token.
- `--target-branch=target-branch`: Name of the branch in the target stack.
- `--target-branch-alias=target-branch-alias`: Alias of the branch in the target stack.
- `--import-webhook-status=<option>`: [default: disable] (optional) The status of the import webhook. <options: disable|current>
- `--type=type`: Type of data to clone. You can select option a or b.
a) Structure (all modules except entries & assets).
b) Structure with content (all modules including entries & assets).
- `--skip-audit`: (optional) Skips the audit fix that occurs during an import operation.
- `–y, --yes`: Force override all Marketplace prompts.
- `-c, --config`: Path for the external configuration (an example of a config file is given below).

**Sample config file:**
```
{
    "master_locale": {
        "name": "English - United States",
        "code": "en-us"
      },
    "export": {
              // export specific configs
             "fetchConcurrency": 1
      } ,
    "import": {
              // import specific configs
             "entriesPublish": false
      }
}
```

On passing the `--config` flag, the config will be passed to export and import in the `--clone` command. You can pass separate or common config for export and import as given in the above sample config file.

**Note:** If the `--yes` flag is not passed, you’ll be prompted to enter an encryption key when cloning a Marketplace app with its configuration. You have **three attempts** to provide the correct key. After three failed attempts, the cloning process must be restarted from the beginning.

## Steps to Clone a Stack
Follow the steps below to clone a stack using the `cm:stacks:clone` command:
- Run the following command in your terminal:
```
csdx cm:stacks:clone
```
- Choose the **organization** from the displayed list.
- Select the **stack** you want to clone.
- Choose the **branch** of the stack.
- Choose whether to clone content to a **new stack** or use an existing one:**Y:** Create a new stack.Select the destination organization.
- The default name format: `Copy of {source_stack_name}`.
- You can provide a custom name for the new stack.
- **n:** Use an existing stack.Select the destination organization and stack (must have permissions).

**Tip:** To minimize errors, we recommend creating **a new destination stack**. If importing content into an existing stack, ensure that it is empty.
- Select one of the following types of content to clone:**Structure:** Imports only the schema (no entries/assets).
- **Structure with content:** Imports schema, entries, and assets.

After you complete these prompts, the source stack’s content will be cloned to the destination stack.

Alternatively, you can also run the entire operation using a single command with parameters as given below:

```
csdx cm:stacks:clone -n "<>" --source-management-token-alias "<>" --destination-management-token-alias "<>" --target-branch "<>" --source-branch "<>" --type a|b {choose either a or b} -y
```

**Examples:**
- To clone content using management token aliases:
```
csdx cm:stacks:clone --source-management-token-alias > --destination-management-token-alias >
```
- To clone content and force override all Marketplace prompts:
```
csdx cm:stacks:clone --source-management-token-alias > --destination-management-token-alias > --yes
```

## Points to Remember
- To import content into an **existing stack**, ensure you have permissions to create or update content in that stack.
- Currently, we migrate only the latest version of entries and assets.
- To **create a new stack**, you must have the [owner](/docs/owners-and-admins/organization-roles/#organization-owner) or [admin](/docs/owners-and-admins/organization-roles/#organization-admin) rights in the destination organization.
- During **workflow migration**, admins and workflow stage users are not included. These must be manually reconfigured after cloning.
- The clone function supports the **same modules** as the CLI [export](/docs/developers/cli/export-content-using-the-cli/) and [import](/docs/developers/cli/import-content-using-the-cli/) commands.

**Additional Resources**: Learn more about the CLI-supported clone operations in the [CLI-Supported Features for Export, Import, and Clone Operations](/docs/developers/cli/cli-supported-features-for-export-import-and-clone-operations) document.

## Common questions

**Q: What does `cm:stacks:clone` do?**  
A: The `cm:stacks:clone` command lets you export content from the source stack and import it into the destination stack instantly.

**Q: What are the available clone types for `--type`?**  
A: `a) Structure (all modules except entries & assets).` and `b) Structure with content (all modules including entries & assets).`

**Q: What happens if I don’t pass the `--yes` flag?**  
A: You’ll be prompted to enter an encryption key when cloning a Marketplace app with its configuration, with three attempts before needing to restart the cloning process.

**Q: Can I clone into an existing stack?**  
A: Yes, but to import content into an **existing stack**, ensure you have permissions to create or update content in that stack, and ensure that it is empty.