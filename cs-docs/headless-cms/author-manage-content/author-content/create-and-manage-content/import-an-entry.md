---
title: "Import an Entry"
description: "Learn how to import entries in Contentstack using a JSON file for seamless content migration and management."
url: /headless-cms/import-an-entry
uid: bltc10a22b5333b2c0b
---

# Import an Entry

## Import an Entry

Importing an entry in Contentstack allows you to add content by uploading a JSON file. This feature simplifies content migration, updates existing entries, or creates new entries efficiently.

To import an entry, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon in the left navigation panel or use the shortcut key “E” (for both Windows and Mac users).
2.  Click the **\+ New Entry** button at the top-right corner of the page, select the required [content type](/docs/headless-cms/about-content-types) and click **Proceed**.
3.  Click the **horizontal ellipses** at the bottom of the entry editor, and select **Import**.
4.  In the **Import Entry** modal, click **Choose a file**, and select the JSON file from your system.
5.  Click **Import** to complete the process.

**Note:** Ensure you select the appropriate locale when importing an entry to upload it as a localized entry.

To import content into an existing entry:

1.  Open the desired entry.
2.  Click the **horizontal ellipses** at the bottom of the entry editor, and select **Import**.
3.  Upload the JSON file. This action updates the existing entry and creates a new version automatically.

**Warning:**

-   Importing an entry replaces the content of the existing entry with the new content provided in the uploaded JSON file.
-   The import process fails if the JSON file references entries or assets outside the current stack or contains incorrect or invalid formatting. Import all referenced entries or assets first.

**Additional Resource:** For details on entry format or schema,, refer to our documentation on [Schema of JSON RTE](/docs/headless-cms/schema-of-json-rich-text-editor/) and [JSON Schema of Fields](/docs/headless-cms/json-schema-for-creating-a-content-type/#json-schema-of-fields) documentation.

## API Reference

To import an entry via API, refer to the [Import an entry](/docs/developers/apis/content-management-api/entries#import-an-entry) API request.
