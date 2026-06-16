---
title: "[Contentstack Command-line Interface (CLI)] - Migrate Content from HTML RTE to JSON RTE | Old Commands"
description: Migrate Content from HTML RTE to JSON RTE | Old Commands
url: https://www.contentstack.com/docs/developers/cli/migrate-content-from-html-rte-to-json-rte/old-commands
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Migrate Content from HTML RTE to JSON RTE | Old Commands

This page explains how to migrate existing content from an HTML Rich Text Editor (RTE) field to a JSON Rich Text Editor (RTE) field using the Contentstack CLI, intended for developers who need to move RTE data within a stack using either a config file or CLI flags.

## Migrate Content from HTML RTE to JSON RTE | Old Commands

The [JSON Rich Text Editor (RTE)](/docs/developers/create-content-types/json-rich-text-editor) field stores and returns the data in the JSON format. You can add the JSON RTE field to an existing content type by [editing](/docs/developers/create-content-types/edit-a-content-type) it or by [creating a new content type](/docs/developers/create-content-types/create-a-content-type).

If you already have data in the HTML RTE and want to migrate to JSON RTE, you can use the Contentstack CLI. By using a few commands in our CLI, you can easily perform the required migration.

In this guide, we will discuss the steps required to perform this migration by using the following two methods:
- [Using a config file to pass the commands](#using-a-config-file-to-pass-the-commands)
- [Using flags to migrate the content](#using-flags-to-migrate-the-content)

## Prerequisites
- [Contentstack account](https://www.contentstack.com/login)
- [Node.js version 16 or above](https://nodejs.org/en/download/)

**Note**: By default, the CLI uses the **North America** region. To set the **Europe** or **Azure North Amercia** region, refer to the [Set Region](/docs/developers/cli/configure-the-cli#set-region) command for more details.

Firstly, open your terminal and add a management token to the CLI session. To do this, use the following single-line command:

```
csdx auth:tokens:add -m -a > -k > -t >
```

Options:
- `-a`, `--alias=alias`: Alias (name) you want to assign to the token.
- `-m`, `--management`: Flag to set management token.
- `-k`, `--api-key=api-key`: [API key](/docs/developers/set-up-stack/view-stack-details) of the stack where the token exists.
- `-t`, `--token=token`: Value of your stack [management token](/docs/developers/create-tokens/generate-a-management-token).

Make note of the alias (token-name) you assign for the management token, we will require it in the next step. After successfully adding the management token, let's proceed to migrate the content from HTML RTE to JSON RTE.

## Using a Config File to Pass the Commands
Let's learn how to use this method through the following steps:
- Log in to your Contentstack account and go to your stack.
- Then, create a content type in your stack and add the HTML Rich Text Editor (RTE) field in it. **Save and Close** the content type and create an entry in this newly created content type.
- Add some content inside the RTE field that you have added. Then, save the entry and close it.
- Edit the same content type and add a new JSON RTE field under the existing RTE content editor field and save your changes.
- Now let's migrate the content from the existing HTML RTE to the new JSON RTE using the config file.
For this exercise, we have created a sample config code to help you add various parameters to it and easily migrate your content.

```
{
    "alias": "trial",
    "content_type": "author",
    "isGlobalField": false,
    "paths": [
        {
            "from": "rich_text_editor",
            "to": "json_rte"
        }
    ],
    "delay": 1000,
    "locale":["en-us","en-fr"],
    "batch-limit": 50,
    "failed-entries": ["entry_uid_1","entry_uid_2"]
}
```

- Copy the above config code, open any code editor, paste the code and add the required parameters as shown below:
`**alias**`: Enter the management token you created in the previous step.
- `**content_type**`: Specify the UID of the content type of which you want to migrate the HTML RTE content.
- `**IsGlobalField**`: Set this flag to **true** if the content type is a global field. It is set to false by default.
**Note**: Remember to set the **IsGlobalField** flag to** true** in your config file if you are migrating RTE content present in the global field.
- `**htmlPath**`: Enter the path to the HTML RTE field of which you want to migrate content.
- `**jsonPath**`: Enter the path to the JSON RTE field to which you want to migrate the HTML RTE content.
- `**delay**` (*optional*): Set the interval time between the migration of HTML RTE to JSON RTE in subsequent entries of a content type. The default value is **1,000** milliseconds.
- `**locale**` (*optional*): Enter the locale codes of the localized entry versions of which you want to migrate the HTML RTE content. If this key is not specified, Contentstack CLI migrates HTML RTE content of the master language entry.
- `**batch-limit**` (*optional*): Set the limit for the number of entries to be fetched in a single batch for migrating HTML RTE content to avoid any timeout issues. You can pass any value that is less than or equal to **50**.
- `**failed-entries**` (*optional*): If migration failed for the HTML RTE content of certain entries during initial execution, you can pass this key to rerun the activity. Specify the UIDs of the entries that failed the HTML RTE migration process against the failed-entries key to migrate RTE content only for those specific entries.
**Note**: The `locale`, `batch-limit`, and `failed-entries` keys are only supported when running the migration command using a config file.

**Note: **The path to the JSON or HTML RTE is usually the UID of that specific field. However, if the HTML and JSON RTE fields are nested within another field, then specify the path to your RTE in the following format:
`{parent_field_UID}.{rte_field_UID}`
For example, if your HTML RTE field is nested within a Modular Blocks field, provide the RTE path as follows:

`{modular_block_field_UID}.{block_UID}.{rte_field_UID}
`

- After adding the above parameters, save the config file and run the following command in the CLI.

```
csdx cm:migrate-rte -p <>
```

Option: `-p`, `--configPath=configPath`: Specify the path where your config file is located.

Example:

```
csdx cm:migrate-rte -p “/home/admin/Desktop/config.json"
```

**Tip**: Enclose the config file path in inverted commas if you are using a Windows system and the path to your respective RTE field contains a "space".
- After running the above command, the CLI will display the config file you specified and ask if you would like to continue with the configuration. Type "yes" to initiate the migration process.
- Now go to your stack and refresh the page; the content from your existing RTE field will reflect in the JSON RTE field.
This completes your content migration process using the CLI. Your content is migrated to the new JSON RTE field by using the parameters you specified in the config file.**Note**: Using the config file to migrate content allows developers to add joins to the existing parameters and perform multiple HTML RTE to JSON RTE migrations at the same time.

Alternatively, you can avoid downloading and editing the config file and use flags to migrate the content. Let's discuss this next.

## Using Flags to Migrate Content
In this method, we will discuss how to migrate content from your existing HTML RTE to the new JSON RTE using flags.

After successfully creating the management token in step 1, run the following command to start the data migration process.

Several parameters/flags are combined in the following command:

Command if RTE is in the content type:

```
csdx cm:migrate-rte -a  -c  -h  -j  -y(optional) -d 1000
```

**OR**

Command if RTE is in the global field:

```
csdx cm:migrate-rte -a  -c  -g -h  -j  -y(optional) -d 1000

```

- `-a`, `--alias=alias`: Enter the management token you created in the previous step.
- `-c`, `--content_type=content_type`: Specify the UID of the content type of which you want to migrate HTML RTE content.
- `-g`, `--isGlobalField`: Checks whether the specified UID belongs to a content type or a global field. Set to false by default.
- `-h`, `--htmlPath=htmlPath`: Enter the path to the HTML RTE of which you want to migrate content.
- `-j`, `--jsonPath=jsonPath`: Enter the path to the JSON RTE to which you want to migrate the HTML RTE content.
- `-y`, `--yes`: (optional) To avoid reconfirmation of your configuration, add this flag.
- `-d`, `--delay=delay`: (optional) To set the interval time between the migration of HTML RTE to JSON RTE in subsequent entries of a content type. The default value is **1,000** milliseconds.

**Note: **The path to the JSON or HTML RTE is usually the UID of that specific field. However, if the HTML and JSON RTE fields are nested within another field, then specify the path to your RTE in the following format:
`{parent_field_UID}.{rte_field_UID}`
For example, if your HTML RTE field is nested within a Modular Blocks field, provide the RTE path as follows:
`{modular_block_field_UID}.{block_UID}.{rte_field_UID}`

The above command will initiate the migration process. Now, go to your stack and refresh the entry page. You will see that the JSON RTE field reflects the same data as present in your HTML RTE.

## Points to Remember
To successfully perform the JSON RTE migration, remember the following rules:
- The migration only works when both the HTML and the JSON RTE fields are at the same field depth level.
- Both the RTE fields should have the same type of instances. If the JSON RTE is marked as multiple and HTML RTE is of single type, then you won't be able to migrate content.
- To run a successful migration, the HTML RTE and JSON RTE should allow embedded entries from the same set of referenced content types. If the referenced content types differ, you cannot migrate content between the rich text editors.
- After running the command, RTE content is migrated across each entry of the specified content type.

## Common questions

### Can I migrate HTML RTE to JSON RTE without using a config file?
Yes, you can use flags to migrate the content as described in the "Using Flags to Migrate Content" section.

### What should I do if migration fails for some entries?
Use the `failed-entries` key in the config file to rerun the activity for specific entry UIDs that failed during the initial execution.

### How do I specify the RTE path if the field is nested?
Specify the path in the format `{parent_field_UID}.{rte_field_UID}` (and include block UID when nested within Modular Blocks), as shown in the notes in both migration methods.

### Does the migration work if HTML RTE and JSON RTE are at different field depth levels?
No, the migration only works when both the HTML and the JSON RTE fields are at the same field depth level.