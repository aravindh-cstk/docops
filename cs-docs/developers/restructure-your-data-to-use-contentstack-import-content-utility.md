---
title: "[Content Migration] - Restructure your data to use Contentstack’s Import Content utility"
description: Restructure your data in a format that is understood and can be used by the Contentstack import utility tool.
url: https://www.contentstack.com/docs/developers/restructure-your-data-to-use-contentstack-import-content-utility
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-migration-engineers
version: unknown
last_updated: 2026-03-26
---

# [Content Migration] - Restructure your data to use Contentstack’s Import Content utility

This page explains how to restructure exported CMS data into the folder and JSON formats required by Contentstack’s Import Content utility. It is intended for developers or migration engineers preparing data for import into a Contentstack stack, especially when the source export did not come from Contentstack’s export utility.

Restructure your data to use Contentstack’s Import Content utility

If you have used any other export utility (apart from Contentstack’s export utility) to export content from your CMS, you can still use our import utility to import data into Contentstack. However, you need to restructure your data in a format that is understood and can be used by the Contentstack import utility tool.

You should follow the folder structure given below:
- assets
- contentTypes
- entries
- environments
- locales
- master

Let’s see the content of these folders in detail.

## assets

The main asset folder should contain all of your asset files in separate subfolders and each subfolder should be named on the basis of the asset uid. This folder consists of a JSON file named `assets.json` that will contain the list of all asset uids. With the help of this JSON file, the old asset uids will be later mapped to the new uids.

The structure of the `assets.json` file looks like the following:

```
{
    "asset_uid": {
        "uid": "asset_uid",
        "filename": "asset_filename",
        "url": "easy_download_URL",
        "status": true
    }
    ...
}
```

## contentTypes

The `contentTypes` folder should contain the details of all the content types stored in JSON format.

The structure of a content type JSON file should look like the example given below:

```
{
    "title": "Content_type_name",
    "uid": "Content_type_uid",
    "schema": [{
        "display_name": "Title",
        "uid": "title",
        "data_type": "text",
        "mandatory": true,
        "unique": true,
        "field_metadata": {
            "_default": true
        },
        "multiple": false
    }, {
        "display_name": "URL",
        "uid": "url",
        "data_type": "text",
        "mandatory": false,
        "field_metadata": {
            "_default": true
        },
        "multiple": false,
        "unique": false
    }
        ...
    ],
    "options": {
        "is_page": true,
        "singleton": false,
        "title": "title",
        "sub_title": [],
        "url_pattern": "/:title",
        "url_prefix": "/"
    },
    "description": ""
}
```

Apart from the content type files, this folder also contains two additional files named `_master.json` and `_priority.json`.
- **_master.json**: The `_master.json` file contains details such as ‘uid’, ‘references’, and ‘fields’ of each content type.
	The structure of the
	`_master.json` file looks like the following:

```
{
    "content_type1": {
        "uid": "",
        "references": [],
        "fields": {
            "file": [],
            "reference": []
        }
    },
    "content_type2": {
        "uid": "content_type2",
        "references": [{
            "uid": "",
            "path": "",
            "entryPath": "",
            "content_type_uid": "content_type2",
            "isCycle": true
        }],
        "fields": {
            "file": [],
            "reference": []
        }
    },
    "content_type3": {
        "uid": "content_type2",
        "references": [{
            "uid": "",
            "path": "",
            "entryPath": "",
            "content_type_uid": "content_type1"
        }],
        "fields": {
            "file": [],
            "reference": []
        }
    }
}
```

	**Note:** In the above code snippet, you will notice the `isCycle` field, which is used to indicate cyclic reference.
- **_priority.json: **The `_priority.json` file contains the uids of content types in the order of their references, with the child content type at the start, followed by the parent content types.
	The
	`priority.json` file should look something like the following:

```
["content_type1","content_type2","content_type3"]
```

These two files are extremely important in order to successfully import data.

## entries

The ‘entries’ folder should contain details of all the entries of each of the content types.

These should be specifically stored in separate JSON files for separate locales. For instance, all the entries in ‘English (U.S.A.)’ or ‘en-us’ will be stored in a file named ‘en-us’.

The structure of a locale JSON file should be as follows:

```
{
    "entry_uid": {
        "title": "title_uid",
        "url": "/",
        "name": "value",
        "age": value,
        "gender": "value",
        "address": "value",
        "telephone_number": value,
        "additional_data": [],
        "tags": [],
        "locale": "en-us",
        "uid": "entry_uid",
        "ACL": {},
        "_version": version_number,
        "publish_details": [{
            "environment": "environment_uid",
            "locale": "locale_code",
            "time": "time_in_ISO_format",
            "user": "user_uid",
            "version": version_number
        }]
    }
}
```

**Note:** If you are uploading a manually created JSON file of your entry, you need to provide an entry UID. This UID can be any random value, because it is mandatory to provide the entry UID to run the import script. Once the entry is imported, Contentstack will assign it an authorized UID.

## environments

The environments folder should contain the details of all the created environments.

The details should be recorded in the environments.json file and should include details such as ‘updated_at’, ‘created_at’, ‘deploy_content’, ‘servers, ‘urls’ (includes details of ‘locale’ and the corresponding ‘url), ‘name’, ‘updated_by’, ‘created_by’, and ‘version’.

Here’s an example of the environments.json file:

```
{
    "environment_uid": {
        "deploy_content": false,
        "servers": [],
        "urls": [{
            "url": "URL",
            "locale": "locale_code"
        }],
        "name": "environment_name",
        "created_by": "user_uid",
        "updated_by": "user_uid",
        "created_at": "date_in_ISO_format",
        "updated_at": "date_in_ISO_format",
        "ACL": [],
        "_version": version_number
    }
}
```

## locales

The locales folder should include the details of the created locales saved in the locales.json file.

Here’s an example of how your locales.json file looks like:

```
{
    "locale_uid": {
        "code": "locale_code",
        "name": "locale_name"
    }
}
```

## master

The master folder should include the mapping details of all the data components in a stack. The files included in this folder are assets.json, entries.json, environments.json, locales.json, and url_master.json.

The structure of each file are discussed below:
- **assets.json:** It contains the mappings of all asset files.

```
{"old_asset_uid1":"", "old_asset_uid2":"", ...}

```
- **entries.json:** It contains the mappings of all entries separated on the basis of locale codes.

```
{
    "locale_code1": {
        "old_entry_uid1": "",
        "old_entry_uid1: "",
        ...
    },
    "locale_code2": {
        "old_entry_uid1": "",
        "old_entry_uid1: "",
        ...
    }
}
```
- **environments.json:** It contains the mappings of all environments.

```
{"old_environment_uid1":"", "old_environment_uid2":"", ...}
```
- **locales.json:** It contains the mappings of all locales.

```
{"old_locale_uid1":"", "old_locale_uid2":"", ...}
```
- **url_master.json:** It contains the mappings of all assets.

```
{"old_asset_url1":"", "old_asset_url2":"", ...}
```

## Common questions

### What folder structure should I follow to use Contentstack’s import utility?
You should follow the folder structure given below: assets, contentTypes, entries, environments, locales, master.

### Why are `_master.json` and `_priority.json` important?
These two files are extremely important in order to successfully import data.

### Do I need to provide an entry UID when uploading a manually created entry JSON file?
Yes. If you are uploading a manually created JSON file of your entry, you need to provide an entry UID. This UID can be any random value, because it is mandatory to provide the entry UID to run the import script. Once the entry is imported, Contentstack will assign it an authorized UID.

### What is the purpose of the `isCycle` field in `_master.json`?
In the above code snippet, you will notice the `isCycle` field, which is used to indicate cyclic reference.