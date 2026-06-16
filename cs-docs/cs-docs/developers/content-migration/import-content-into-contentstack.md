---
title: "[Content Migration] - Import Content into Contentstack"
description: Import exported JSON content into Contentstack using the deprecated contentstack-import utility.
url: https://www.contentstack.com/docs/developers/content-migration/import-content-into-contentstack
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-migration-engineers
version: unknown
last_updated: unknown
---

# [Content Migration] - Import Content into Contentstack

This page explains how to import previously exported content into Contentstack using the `contentstack-import` utility, including setup, configuration, and module import sequencing. It is intended for developers or migration engineers moving JSON-formatted content into a stack, especially when working with exports produced by Contentstack tools or other exporters.

## Import Content into Contentstack

Once you have exported content using one of the exporting utility tools, the next step is to import this data into [Contentstack](/docs). If you have used any other exporting tool (other than Contentstack’s import utility), refer to this guide to understand [how to restructure your data](/docs/developers/restructure-your-data-to-use-contentstack-import-content-utility) in the format that Contentstack’s import utility will understand.

**Warning: **This document has been deprecated. We will soon stop supporting this approach. Check out our detailed documentation on how to [import](/docs/developers/cli/import-content-using-the-cli) content in your stack using the command-line interface (CLI).

Once you restructure the entry data (or if you have used Contentstack’s export tool to export the entry JSON), refer to the steps given below to import content into Contentstack.

## Download the utility

To import your content to Contentstack, you need to first download the '`contentstack-import`' utility tool from [GitHub](https://github.com/builtio-contentstack/contentstack-import). This utility tool consists of modules that will help you import your content saved in JSON format in your file system.

In order to import data into Contentstack, it is imperative to have converted your content into JSON format. This makes it easier to import data into Contentstack.

## Install Node modules

Node.js modules play an essential part in the effective working of the import utility tool. Using Node.js package manager (npm), the essential modules of the utility tool will be extracted into your file system.

Navigate to the root folder of the utility tool and run the command given below to install the node modules that are necessary for executing the utility tool:

```
npm install
```

## Add configuration details

If you are using this utility in the European region, you will have to make changes in the default.js file inside the config folder and the remaining steps remain the same.

So open default.js file and change:

```
host:'https://api.contentstack.io/v3',
 cdn: 'https://cdn.contentstack.io/v3',
```

To

```
host:'https://eu-api.contentstack.com/v3',
 cdn: 'https://eu-cdn.contentstack.com/v3',
```

Also, there is the **concurrency** key in the **default.js** file that can be set to speed up the import operation. You can increase the value of the concurrency key from the default value of 1 to the max value, that is 3.

Before importing the content, certain changes need to be made in the configuration file of the utility tool. So, open the “index.js” file within the “config” folder of the utility tool and add the following configuration details:

```
module.exports = {
  master_locale: {
    // master locale of the stack
    name: 'English - United States',
    code: 'en-us'
  },
  // Credentials
  email: '',
  password: '',
  target_stack: '',
  management_token: '',
  // Folder in which exported contents are stored
  data: './contents'
};
```

**Note**: We have updated the configuration of the import script to support management token. So if you don't want to use your email and password, then providing management token is mandatory in the config, else you can keep this blank.

Here's a brief of what values you need to provide for the above configuration parameters:

`master_locale`
: Enter the name and code of the

[master locale](/docs/developers/multilingual-content/set-the-master-language)
of your stack in the parameters given below:

`name`: The name of the master locale (e.g. English - United States)
- `code`: The language code of the master locale mentioned above (e.g. en-us)
- `email`: Your Contentstack account's registered email address
- `password`: Your Contentstack account password
- `target_stack`: The API key of the destination stack to which you need to import your data
- `management_token`: The stack management token of the destination stack to which you need to import the data
- `data`: The path of the location in your file system where the data you intend to migrate is stored

**Warning:** You need to be careful when providing the “`master_locale”` value because if it differs to the master locale of the stack, the migration procedure fails.

## Import modules

After entering the configuration details, you are now ready to import content into Contentstack. Content will be imported into Contentstack only if it is saved in the JSON format.

On the basis of your requirement, you can either perform a complete import of your content or you can import specific modules.

To import the entire content, run the command given below:

```
npm run import
```

This command will import data from the content that is exported and stored in our local system. These files are imported from the path mentioned in the “data” key in the “

`index.js`
” file under the “

`config`
” folder.

- To import specific modules, run the command given below:

```
npm run import {module-name}
```

When importing modules individually, make sure you follow the module sequence as given below, for example, before importing entries, you must have had imported assets, locales, environments, extensions, webhooks, global fields, and content types:

Assets
- Locales
- Environments
- Extensions
- Webhooks
- Global Fields
- Content Types
- Entries

Except for “**locales**,” “**environments**,” and “**webhooks**”, you need to mention the directory path of the previous backup in the `config/default.js` file in the useBackedupDir parameter (uncomment the parameter and add the path) when importing all of the above modules.

**Note**: This utility tool can be used to import only the latest published version of an entry.

## Support for Publishing Events After Import

The import script allows you to publish the entries and assets after they have been imported. All your entries that were published on the exported stack (from where you migrated the data) can now be published onto the new stack (to which you are migrating the data) on the same environment.

To do this, follow these steps:
- Set the property of the **entriesPublish** key to "true" in the **default.js** file present in the **config** folder.
- Then, run the import script (*npm run import*)

### The Backup Folder

Whenever we run the import script, the backup folder gets created automatically inside the root folder of the import script. This backup folder is the replica of the content folder that we have exported.

In this folder, as our script executes on every module (assets, entries, webhooks, etc.), the mapper file gets created. It contains the old UID and the new UID of the modules. This helps us to identify the old and the new modules that got created.

## Common questions

### Is this import approach still supported?
No. **Warning: **This document has been deprecated. We will soon stop supporting this approach. Check out our detailed documentation on how to [import](/docs/developers/cli/import-content-using-the-cli) content in your stack using the command-line interface (CLI).

### What format must my content be in to import it?
Content will be imported into Contentstack only if it is saved in the JSON format.

### What is the correct module import order when importing specific modules?
Assets, Locales, Environments, Extensions, Webhooks, Global Fields, Content Types, Entries.

### Can the import script publish entries and assets after import?
Yes. Set the property of the **entriesPublish** key to "true" in the **default.js** file present in the **config** folder, then run the import script (*npm run import*).

<!-- filename: content-migration-import-content-into-contentstack.md -->