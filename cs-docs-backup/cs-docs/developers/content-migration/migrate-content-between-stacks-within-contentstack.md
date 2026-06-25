---
title: "[Content Migration] - Migrate Content Between Stacks (within Contentstack)"
description: Migrate content from one stack to another within Contentstack using the contentstack-export and contentstack-import tools.
url: https://www.contentstack.com/docs/headless-cms/migrate-content-between-stacks-within-contentstack
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Content Migration] - Migrate Content Between Stacks (within Contentstack)

This page explains how to migrate content from one stack to another within Contentstack using the “contentstack-export” and “contentstack-import” tools. It is intended for developers who need to move stack data and should be used when exporting from a source stack and importing into a destination stack.

## Migrate Content Between Stacks (within Contentstack)

In this section, we will cover how to migrate your content from one stack to another within Contentstack. To migrate content, you will need to use the “contentstack-export” and “contentstack-import” tools that are provided by Contentstack.

**Warning:** This document has been deprecated. We will soon stop supporting this approach. Check out our detailed documentation on how to migrate content ([export](../cli/export-content-using-the-cli.md) and [import](../cli/import-content-using-the-cli.md) content) between stacks within Contentstack using the command-line interface (CLI).

## Export Content from Contentstack

To migrate your content from one [stack](../set-up-stack/about-stack.md) to another, you need to first export content from the source stack and then importing this exported content into the destination stack. To do so, you need to perform the steps given below:

**Download the utility**: To export your content from a stack in Contentstack, you need to first download the “contentstack-export” utility tool from [GitHub](https://github.com/builtio-contentstack/contentstack-export). This utility tool consists of modules that will help you to download the data from your stack and save it in JSON format in your file system. JSON format makes it easier to import data into Contentstack.

- **Install Node modules**: Node.js modules play an essential part in the effective working of the utility tool. Using Node.js package manager (npm) the essential modules of the utility tool will extract the content into your file system.

  Navigate to the root folder of the utility tool and run the command given below to install the node modules that are necessary for exporting the content into your file system:

  ```
  npm install
  ```

- **Add configuration details**

  : If you are using this utility in the European region, you will have to make changes in the default.js file inside the config folder and the remaining steps remain the same.

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

  Before exporting content, certain changes need to be made in the configuration file of the utility tool. So, open the “index.js” file within the “config” folder of the utility tool and add the following configuration details:

  ```
  module.exports = {
    master_locale: {
      // master locale of the stack
      name: 'English - United States',
      code: 'en-us'
    },
    // Credentials
    email: '',   // (optional)
    password: '', // (optional)
    // Stack API KEY
    source_stack: '',             // mandatory
    access_token: '',
    management_token: '',
    // Path where the exported data will be stored (relative path)
    data: './contents'
  };
  ```

  **Note: **We have updated the configuration of the export script to support management token. So if you don't want to use your email and password, then providing management token is mandatory in the config, else you can keep this blank.

  Here's a brief of what values you need to provide for the above configuration parameters:

  - `master_locale`
    : Enter the name and code of the

    [master locale](../multilingual-content/set-the-master-language.md)
    of your stack in the parameters given below:

    `name`: The name of the master locale (e.g. English - United States)
    - `code`: The language code of the master locale mentioned above (e.g. en-us)
  - `email`: Your Contentstack account's registered email address
  - `password`
    : Your Contentstack account password

  **Note**: The email and password configuration parameters are mandatory only when exporting the webhook and label modules.
  - `source_stack`: The API key of the source stack from which you need to export your data
  - `access_token`
    : The Access Token of the source stack from which you need to export your data

  **Note**: We have stopped supporting Access Token for all stacks created after December 16, 2020. For stacks created after this release, the Access Token will no longer be generated.
  - `management_token`: The stack management token of the source stack from which you need to export the data
  - `data`: The path of the location in your file system where the data you intend to migrate is stored

  **Warning**: You need to be careful when providing the “master_locale” value, because if while importing content the master locale of your stack differs, the migration procedure fails.

- **Export modules**: After entering the configuration details, you are now ready to export content from Contentstack. On the basis of your requirement, you can either perform a complete export of the content or you can export specific modules.

  - To export the entire content, run the command given below:

    ```
    npm run export
    ```

    This command will extract data of assets, environments, locales, contentTypes, entries. These files are stored in the path mentioned in the “data” key in the “index.js” file under the “config” folder.

  - To export specific modules of your content, run the command given below:

    ```
    npm run export-{module-name}
    ```

    When exporting modules individually, make sure you follow the module sequence as given below, for example, before exporting entries, you must have had exported assets, environments, locales, extensions, webhooks, global fields, and content types:

    - [Assets](/docs/content-managers/working-with-assets/about-assets)
    - [Environments](../set-up-environments/about-environments.md)
    - [Locales](../multilingual-content/about-localization.md)
    - [Extensions](../experience-extensions-overview/about-experience-extensions.md)
    - [Webhooks](../set-up-webhooks/about-webhooks.md)
    - [Global Fields](../create-content-types/global.md)
    - [Content Types](../create-content-types/about-content-types.md)
    - [Entries](../../content-managers/author-content/about-entries.md)

  **Note:** This utility tool can be used to extract only the latest published version of an entry.

## Import Content into Contentstack

The exported content is now ready to be imported into Contentstack. This content will be in JSON format and stored at the location provided in the “index.json” configuration file from where you can later import the data into Contentstack.

To import the content, follow the steps mentioned in the [Import Content into Contentstack](./import-content-into-contentstack.md) document.

## Common questions

**Q: Is this approach still supported?**  
A: **Warning:** This document has been deprecated. We will soon stop supporting this approach.

**Q: Which tools are used to migrate content between stacks with this approach?**  
A: You will need to use the “contentstack-export” and “contentstack-import” tools that are provided by Contentstack.

**Q: What command exports the entire content?**  
A: `npm run export`

**Q: Where do I find the recommended CLI-based export/import documentation?**  
A: Check out our detailed documentation on how to migrate content ([export](../cli/export-content-using-the-cli.md) and [import](../cli/import-content-using-the-cli.md) content) between stacks within Contentstack using the command-line interface (CLI).