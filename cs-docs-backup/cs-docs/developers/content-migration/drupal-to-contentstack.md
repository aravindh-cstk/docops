---
title: "[Content Migration] - Drupal to Contentstack"
description: Export content from Drupal and import it into Contentstack using the Drupal SQL to Contentstack exporter utility.
url: https://www.contentstack.com/docs/headless-cms/drupal-to-contentstack
product: Contentstack
doc_type: migration-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Content Migration] - Drupal to Contentstack

This page describes a (deprecated) process and tooling to export content from Drupal and then import it into Contentstack. It is intended for developers or migration engineers planning a Drupal-to-Contentstack migration and should be used when you need guidance on the exporter utility, configuration, supported fields, and limitations.

**Warning:** This document is deprecated and no longer reflects the latest process for content migration. Reach out to our [support](mailto:support@contentstack.com) team for more information.

In this section, we will cover the exporter tools that have been built to assist our customers who plan to migrate their existing content from Drupal to Contentstack. By the end of this section, you will be able to perform the migration of your content into [Contentstack](/docs) in an efficient manner.

## Export Content from Drupal

The export tool allows you to export content from Drupal using MySQL queries and makes it possible to import it into Contentstack. Using this project, you can easily export Content types (Article, Page, and Custom content types), Users, Tags, and Vocabularies from Drupal that can be later imported into Contentstack.

To do so, you need to perform the steps given below:

**Download the exporter utility tool**: To export your content from Drupal, you need to first download the exporter utility tool from [GitHub](https://github.com/builtio-contentstack/drupal-sql-to-contentstack-exporter). This exporter utility tool consists of modules that will help you to download your content from Drupal and save it in JSON format in your file system. JSON format makes it easier to import data into Contentstack.

- **Install Node modules**: Node.js modules plays an essential part in the effective working of the exporter utility tool. Using Node.js package manager (npm) the essential modules of the exporter utility tool will extract content into your file system.

To install the node modules that are necessary for exporting the content into your file system, open a terminal, navigate to the root folder of the exporter utility tool, and run the command given below:

```
npm install
```

- **Add configuration details**: Before we start extracting our content, we need to make certain changes in the configuration file of the exporter utility tool. So, open the “index.json” file within the “config” folder of the exporter utility tool and add the following configuration details:

```
"host":">",
"user":">",
"password":">",
"database":">"
```

In the above configuration details, you need to provide the MySQL host, username, and password, and also provide the name of the Drupal database content.

Next, your files and assets need to be available and accessible through the internet. For this purpose, you must define a key named “drupal_base_url” in the “index.json” file for the exporter to create it.

```
drupal_base_url: http://example_hostname.com
```

Also, in order to be able to properly map the Drupal content types to the Contentstack content types, their names should be identical. For example: if the name of a content type in Drupal is 'Blog', then the name of content type in Contentstack should be 'Blog' too.

- **Export modules** After the configuration, you are now ready to export content from Contentstack. On the basis of your requirement, you can either perform a complete export of the content or you can export specific modules via their name or their ID.

To export the entire content, run the command given below:

```
npm run export
```

This command will extract data of authors, assets, categories, and posts from the downloaded XML file and convert them in JSON files that is supported in Contentstack. These files are stored in the path mentioned in the 'data' key in the 'config/index.js' file.

- To export specific modules of your content, run the command given below:

```
npm run export {module-name}
```

When exporting modules individually, make sure you follow the module sequence as given below, for example, before exporting posts, you must have had exported assets and authors:

query
- contenttypes
- assets
- authors
- vocabulary
- taxonomy
- page

- Modules that you wish to export separately or those that have failed to export (the details of these modules are recorded in the error log or in the failed.json file) can be installed with the help of their IDs. These IDs will be stored as comma-separated values in the failed.json file.

Now, to export the modules, you need to provide the absolute path of the file that stores the IDs, when running the following command in a terminal:

```
npm run export >
```

You can find the “success” and “error” logs of the export process under libs/utils/logs. The successfully run processes are recorded under “success” and the processes that face errors will be recorded under “errors.”

The logs for failed assets are recorded in “failed.json” and are stored under the “master” folder located where your exported data resides.

**Note:** The exporter utility tool can be used to extract only the latest published version of an entry.

- **Copy schema**: Copy the “contentType” folder from your exporter utility folder and place it in the path mentioned in the “data” key within the “config/index.js” file. The “contentType” folder consists of the basic schema of content types which will help you to migrate your data.

The latest published content will be exported in JSON format and stored at the location provided in the 'index.json' configuration file from where you can later import the data into Contentstack.

## Support for Drupal 8

This utility supports data migration from Drupal 8 to Contentstack. For migrating the content from Drupal 8 to Contentstack, the procedure remains the same. However, in the following table, we have listed features and fields that are supported (and not supported) for Drupal 8 migration:

| Fully Supported Fields | Partially Supported Fields | Not Supported Fields |
|---|---|---|
| text | taxonomy_term_reference | reference |
| text-long | image inside text_long | file |
| configuration option | image | user/roles |
| date | integer | list_boolean |
| text_with_summary |  |  |

In the above table:
- **Fully Supported Fields** are the ones where you can create a schema of content types and also insert content in the entries.
- **Partially Supported Fields** are the ones where you can create fields in a content type, but you cannot insert content in those fields of a content type.
- **Not Supported Fields** are the ones that are not supported by the Drupal 8 migration script.

### Limitations of the utility

Some of the limitations of the utility include the following:
- This utility supports Drupal 8. If you want to migrate from Drupal 7 to Contentstack, use this [release](https://github.com/contentstack/drupal-sql-to-contentstack-exporter/archive/0.0.1.zip). For Drupal 8, use this [release](https://github.com/contentstack/drupal-sql-to-contentstack-exporter/archive/1.0.0.zip).
- When exporting the content from Drupal, the internal links provided within the content will not be updated.

Now, refer the next section to learn how to import the exported content into Contentstack.

## Import Content into Contentstack

The exported content is now ready to be imported into  Contentstack. This content will be in JSON format and stored at the location provided in the “index.json” configuration file from where you can later import the data into Contentstack.

To import the content, follow the steps mentioned in the [Import Content into Contentstack](./import-content-into-contentstack.md) document.

## Common questions

**Q: Is this migration document current?**  
A: **Warning:** This document is deprecated and no longer reflects the latest process for content migration. Reach out to our [support](mailto:support@contentstack.com) team for more information.

**Q: Where do I configure the Drupal database connection for export?**  
A: Open the “index.json” file within the “config” folder of the exporter utility tool and add the MySQL configuration details.

**Q: What command exports all content?**  
A: Run `npm run export`.

**Q: Where can I find export logs and failed asset details?**  
A: Logs are under libs/utils/logs, and failed assets are recorded in “failed.json” under the “master” folder located where your exported data resides.