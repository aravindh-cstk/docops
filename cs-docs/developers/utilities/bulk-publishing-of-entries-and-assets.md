---
title: "[Tools] - Bulk Publishing of Entries and Assets"
description: Bulk publishing of entries and assets script usage across multiple scenarios (deprecated).
url: https://www.contentstack.com/docs/developers/utilities/bulk-publishing-of-entries-and-assets
product: Contentstack
doc_type: utilities-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Tools] - Bulk Publishing of Entries and Assets

This page explains how to use Contentstack’s bulk-publishing of entries and assets script across multiple scenarios (and notes that the document is deprecated). It is intended for developers or administrators who need to automate bulk publish/unpublish operations across environments and locales.

## Bulk Publishing of Entries and Assets

Publishing entries and assets in bulk in specific environments can ease content management. With Contentstack's bulk-publishing of entries and assets script, you can automate the process of bulk publishing your entries and assets.

**Warning**: This document has been deprecated. We recommend using the [Bulk Publish and Unpublish Content](../cli/bulk-publish-and-unpublish-content.md) document to perform bulk publish/unpublish operations on entries and assets through the command-line interface (CLI).

In this guide, we will look at different scenarios of bulk publishing and how to use the bulk-publish-entries-assets script in each scenario.

**Note**: This script will use Bulk APIs if your plan has the Bulk Publish feature enabled. Make sure you keep the bulkPublish and bulkUnpublish flags set to true in the config. If it’s not part of your plan, it will publish the items in the queue, one at a time.

We will discuss the use of this script in the following scenarios:
- [Publish the unpublished/draft entries on a particular environment](#case-1-publish-the-unpublished-draft-entries-on-a-particular-environment)
- [Publish all assets of a stack on a particular environment](#case-2-publish-all-assets-of-a-stack-on-a-particular-environment)
- [Publish all entries of a stack on a particular environment](#case-3-publish-all-entries-of-a-stack-on-a-particular-environment)
- [Unpublish all entries/assets of a stack from a particular environment](#case-4-unpublish-all-entries-assets-of-a-stack-from-a-particular-environment)
- [Publish the edits made in entries on a particular environment](#case-5-publish-the-edits-made-in-entries-on-a-particular-environment)
- [Publish entries/assets from one environment to another](#case-6-publish-entries-assets-from-one-environment-to-another)
- [Publish localized entries when the non-localized field of the master entry is updated](#case-7-publish-localized-entries-if-the-non-localized-field-of-the-master-entry-is-updated)
- [Update and publish entries when a new field is added to content type](#case-8-update-and-publish-entries-if-a-new-field-is-added-to-a-content-type)
- [Restore/unpublish entries published through script using logs](#case-9-restore-unpublish-entries-published-through-script-using-logs)

## Points to Keep in Mind

- If **Bulk API **is part of your plan, each bulk publish API request will publish a maximum of 10 items per request. So, for example, if you publish 100 items using this script, it will make 10 Bulk API requests, and your API count will increment by 10.

If Bulk API is not part of your plan, each item published using this script will be counted as a separate call. So, for example, if you publish 100 items using this script, it will make 100 API requests, and your API count will increment by 100
- Bulk actions do not follow the standard CMA rate limit of 10 requests per second. The default rate limit for bulk actions is **1 request per second** i.e., in one second, you can make only one bulk publish API request
- The script does not support the bulk publishing of entries of all locales. However, you can specify the locales as an array (en-us, fr-fr, zh-zh, and so on) against the ‘locale’ parameter in the config file to publish them.

**Additional Resources**: If you want to perform bulk publish/unpublish operations on entries and assets using command-line interface (CLI), refer to its [CLI documentation](../cli/bulk-publish-and-unpublish-content.md).

## Download the Code and Install Dependencies

Before we start discussing the scenarios and how to use this script, we need to install the required dependencies and make certain changes in the configuration file.
- Download the utility code from [GitHub](https://github.com/contentstack/bulk-publish-entries-assets).
- Once you download the code, open your terminal and move inside the project root directory. Then, run the following command:

```
npm install
```

The above command will install the required node dependencies.
- Now open the **index.js** file, which is inside the** config** folder of the downloaded code, and provide your stack credentials as follows:

```
module.exports = {
    apikey:'YOUR_STACK_API_KEY',
    apiEndPoint:'https://api.contentstack.io',
    cdnEndPoint:'https://cdn.contentstack.io',
    manageToken:'YOUR_STACK_MANAGEMENT_TOKEN',
}
```

**Note**: The above configuration is common for all scenarios. If the **Bulk Publish** plan is not enabled for your organization, keep **bulkPublish** and **bulkUnpublish** flags as false in the config of all cases

Let's now move ahead and discuss the scenarios and how to use this utility.

## Case 1: Publish the Unpublished/Draft Entries on a Particular Environment

In this scenario, you want to publish unpublished or draft entries on a particular environment.
- Open the **index.js **file, which is inside the **config **folder, and provide the necessary details in the following section of the file:

```
publish_unpublished_env: {
        contentTypes:['test'],                    //list of contentTypes
        sourceEnv : 'staging',                    //sourceEnv
        environments:['staging'],                //target environment
        locale:’en-us’                           //your locale
       bulkPublish:true                    //keep false if the bulk operation is enabled in your plan
    }

```
- After you have added the details and saved the file, run the following command, staying inside the project root directory:

```
npm run publish_unpublish
```

The above command will retrieve all entries of ‘test’ contentType not published in ‘staging’ environment with ‘en-us’ locale and publish it on the destination environment ("staging" in our case).

## Case 2: Publish All Assets of a Stack on a Particular Environment

In this scenario, you want to publish all assets of a particular stack in bulk. To do this, follow the below steps:
- Open the **index.js **file and provide the required details in the following section of the file:

```
module.exports = {
    publish_assets:{
        environments:['bulktest'],                 //name of the environment
       folderUid:’cs_root                   //UID of the folder, ‘cs_root’ for all assets
bulkPublish: true                                  //keep false if the bulk operation is enabled in your plan
    }
}

```
- Once you add the details move inside the root directory and run the following command:

```
npm run publish_assets
```

The above command will publish all the assets of the stack (the ID of which you provided in the main configuration file at the top).

## Case 3: Publish All Entries of a Stack on a Particular Environment

In this scenario, you want to publish all the entries of the specified content types in a stack.
- Open the** index.js** file and provide the details in the following section of the file:

```
publish_entries:{
  contentTypes:['redirect_rule'],          //list of contentTypes to be published
  locales:['en-us'],                       //list of locales to be considered for mentioned Content types
  environments:['bulktest'],               //destination publish environments
  publishAllContentTypes : false,          //if you want to publish all contentTypes
  bulkPublish: true,
}
```
In the above config, there are two important parameters: **bulkPublish** and **publishAllContentTypes**. Keep the value of bulkPublish to true if you want to proceed with bulk publishing on entries, whereas keep the value of publishAllContentTypes to false unless you want to publish all the entries of all the content types in a stack
- Once you have entered the above details in the config file, run the following command:

```
npm run publish_entries
```

**Note**:Try publishing entries of one content type at a time. This way, you can avoid the chances of entries failing to get published in bulk.

## Case 4: Unpublish all Entries/Assets of a Stack from a Particular Environment

Your content types may have thousands of entries and assets and unpublishing them one at a time can be a tedious task. Using this script, you can automate the process of unpublishing all entries and assets of the stack that were published on a particular environment.
- To do this, open the **index.js** file and add details in the following section of the file:

```
bulkUnpublish :{
    filter:{
        environment: 'bulktest',            //source environment
        content_type_uid: '',               //add content type uid to be unpublished,keep blank to consider all
        locale: 'en-us',                    //locale filters
        type:'entry_published,asset_published'   //entries and assets both will be unpublished, remove asset_published if u want to unpublish only entries and vice versa.
    },
    deliveryToken:'' ,                      //delivery token of the  source environment
   bulkUnpublish: true,

  }
```
- Once you add the details, move inside the project root directory and run the following command:

```
npm run unpublish
```

If you want to unpublish only the entries of a specific content type, specify its UID in the **content_type_uid** filter in the above config. To unpublish only assets, remove **entry_published **from the **type** filter or remove **asset_published** if you want to unpublish only entries.

## Case 5: Publish the Edits Made in Entries on a Particular Environment

This is a common scenario where you want to publish the entries, which were recently edited, on a particular environment.
- Open the **index.js **file and make changes in the following section of the code:

```
publish_edits_on_env: {
   contentTypes:['test','helloworld'],    // array of contentTypes where edits needs to be checked
   sourceEnv : 'production',              //environment where entry edits needs to be checked
   publishEnvironments:['production'],    //publishing environment (usually same as sourceEnv)
   locales:['en-us',],                    // locales of entries where it needs to be checked
   bulkPublish: true,

},
```

Here, you need to provide the UID of the content type such as "test", "helloworld", and so on). **Source environment** is where the entries were initially published (in our case, it is "production"). **Publish Environment** is the new environment on which the edited entries are to be published (in our case, it is "production"). Lastly, provide the locale details (in our case, it is "en-us").
- After you provide the details and save the file, run the following command, staying inside the project root directory:

```
npm run publish_edits
```

The above command will publish the edited entries on the target environment that you have specified in the above config file.

## Case 6: Publish Entries/Assets from One Environment to Another

This is again one of the common scenarios where you want to publish the content from one environment to a newly created environment or some other environment.
- To do this, open the** index.js** file and provide the necessary details in the following section of the file:

```
cross_env_publish:{
    filter: {
      environment: 'bulktest', // source environment
      content_type_uid: '', // //Add content type uid to be published. Keep this blank to consider all (keep this empty while publishing only assets)
      locale: 'en-us', // locale filters. Keep this blank to consider all
      type: 'asset_published,entry_published',  //entries and assets both will be published, remove asset_published if you want to publish only entries and vice versa.
    }
    deliveryToken: '',                 //delivery token of the source environment
    destEnv:[‘’],                      //environment where it needs to be published
    bulkPublish:true
  }
```
- After you add the details, run the following command, staying inside the project root directory:

```
npm run cross_publish
```

The above command will publish the entries (of the mentioned content types) and assets from the "bulktest" environment to the environment you have mentioned in the config.

## Case 7: Publish Localized entries if the Non-localized Field of the Master Entry is Updated

This is a scenario where you want to publish those entries in bulk that had their non-localized field changed. Read more about [Non-localized Field](../multilingual-content/non-localizable-field.md).
- Open the **config.js** file and provide the necessary details in the following section of the code:

```
nonlocalized_field_changes: {
   sourceEnv: 'production',                     //source Environment
   contentTypes: ['testdin'],
   environments: ['production'],                //publishing Environments
   bulkPublish:true
  },
```
- After you add the details, run the following command, staying inside the project directory:

```
npm run publish_localized
```

The above command will publish the entries (of the specified content types) from the source to the publishing environment.

## Case 8: Update and Publish Entries if a New Field is Added to a Content Type

This is one of the most common scenarios in content management. Often, we keep adding a new field in a content type as and when required. And there could be multiple entries in your content types. Manually publishing all such entries can be time-consuming, but you can automate the task with this script.

To publish such entries of content types in bulk, follow the steps given  below:
- Open the** index.js** file and provide the necessary details in the following section of it:

```
addFields: {
    deleteFields: ['updated_by', 'created_by', 'created_at', 'updated_at', '_version', 'ACL'],
    locales: ['en-us'],
    contentTypes: ['helloworld'],         // list to contentType entries to be updated
    environments: ['test'],               // list of environments where it needs to be published
    defaults: {
      number: null,
      boolean: false,
      isodate: [],
      file: null,
      reference: [],
    },
  bulkpublish:true,
  },
```
- After you add the details, run the following command, staying inside the project root directory:

```
npm run add_fields
```

The above command will publish the entries (of the specified content types that had a field added or updated) on the specified environment.

**Note**: This script is not applicable to custom and mandatory fields.

## Case 9: Restore/unpublish Entries Published Through Script Using Logs

To understand this scenario, consider an example. There are 10 entries in a content type. Out of these 10, 4 entries are published on version 4 and 6 of them are unpublished.

So if you publish all entries of this content type using the script, let's say entries which were at version 4 will now be published at version 5 and the rest will be published with version 1.

Now, if you want to undo this operation and restore entries to their previous state, use the following command:

*$ npm run revert ${logFilename}*

In the above command, logFilename is the success logs of a particular execution (like a log of successful publishing of entries to version 5 and 1 as in the above example).

**For example**:

```
npm run revert 1587270350288.bulkPublishEntries.success
```

## Retry Publishing Entries

When you use this script to publish the entries in bulk, there might be a few entries that could not be published due to some reason. The logs directory holds the record of such entries with a unique name or identifier ending with .error.

You can retry publishing such entries using the same script with the **retryFailed** flag along with {logFilename} as shown below:

*npm run publish_entries -- -retryFailed ${logFilename} *

*npm run publish_assets -- -retryFailed ${logFilename}*

For example:

```
npm run publish_entries -- -retryFailed 18003bulkPublishEntries.error
```

## Common questions

### Is this script still recommended for bulk publish/unpublish?
This document has been deprecated. We recommend using the [Bulk Publish and Unpublish Content](../cli/bulk-publish-and-unpublish-content.md) document to perform bulk publish/unpublish operations on entries and assets through the command-line interface (CLI).

### How many items can be published per Bulk API request?
If **Bulk API **is part of your plan, each bulk publish API request will publish a maximum of 10 items per request.

### What rate limit applies to bulk actions?
Bulk actions do not follow the standard CMA rate limit of 10 requests per second. The default rate limit for bulk actions is **1 request per second** i.e., in one second, you can make only one bulk publish API request.

### Can the script publish entries of all locales?
The script does not support the bulk publishing of entries of all locales. However, you can specify the locales as an array (en-us, fr-fr, zh-zh, and so on) against the ‘locale’ parameter in the config file to publish them.