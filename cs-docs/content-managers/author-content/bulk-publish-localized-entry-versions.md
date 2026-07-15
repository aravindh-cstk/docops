---
title: "[Author Content] - Bulk Publish Localized Entry Versions"
description: Bulk publish multiple localized and unlocalized versions of an entry from the Publish modal in the master language version.
url: https://www.contentstack.com/docs/headless-cms/bulk-publish-localized-entry-versions
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Bulk Publish Localized Entry Versions

This page explains how to bulk publish multiple localized and unlocalized versions of a single entry from the “Publish” modal in the entry’s master language. It is intended for Contentstack content managers and authors who manage multilingual entries and need to publish across multiple languages and environments efficiently.

## Bulk Publish Localized Entry Versions

You can publish multiple localized and unlocalized versions of an entry right from the “Publish” modal of the entry's [master language](../../developers/multilingual-content/set-the-master-language.md) version.

**Note**: This feature is available only if included in your plan. Contact our [support](mailto:support@contentstack.com) team to enable this feature if needed.

To bulk publish localized and unlocalized entries, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
- Open the entry you want to publish.
- In the top-right corner of the page, select the master language from the dropdown for languages.
The master language is marked with an **(M)** at the end.![BulkPublish_LocalEntryVersions_MasterLangg.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt028ff66b249c479c/6764e42e294a2b2f763af914/BulkPublish_LocalEntryVersions_MasterLangg.png)
- Click the **Publish** button at the bottom of the page.![BulkPublish_LocalEntryVersions_Publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt015a08e3bb7d12cb/6764e42d9335677488411445/BulkPublish_LocalEntryVersions_Publish.png)
- In the **Publish Entry** modal:
      **Select Environment(s)**: Select the environment(s) where the entry must be published.
- **Select Language(s)**: Click **Select all languages**.![BulkPublish_LocalEntryVersions_SelectLangg.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1aaa60c2907faf5c/6764e42e36f5cc0778daf1fc/BulkPublish_LocalEntryVersions_SelectLangg.png)
- **Publish**: Select whether to publish the entries immediately (**Now**) or at a scheduled time (**Later**).

    **Note**: While publishing multiple localized and unlocalized versions of a single entry, you can select a maximum of **50 languages** and **50 environments** at a time.
- Finally, click **Send** to publish the entry.

    **Note**: When you publish in multiple languages, the latest version of the localized entry will be published.
- In the **Publish Reference(s)** modal, click **Send With References** to publish the entry along with the referenced items or **Send Without References** to publish only the entry.![BulkPublish_LocalEntryVersions_PublishReferences.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ab54347662810e6/6764e42d466737e5e3aa52bf/BulkPublish_LocalEntryVersions_PublishReferences.png)

**Note**:
- It is recommended to always publish an entry along with its references. If you publish an entry without its references, the referenced items will not appear in the published entry.
- You can publish up to **10 localized entry versions** across **10 environments** at a time. This limit can be adjusted based on your plan. For more details, please contact our [support](mailto:support@contentstack.com) team.

## Common questions

### Why can’t I see the option to bulk publish localized entry versions?
This feature is available only if included in your plan. Contact [support](mailto:support@contentstack.com) to enable it if needed.

### What happens if I publish without references?
If you publish an entry without its references, the referenced items will not appear in the published entry.

### What limits apply when bulk publishing languages and environments?
While publishing multiple localized and unlocalized versions of a single entry, you can select a maximum of **50 languages** and **50 environments** at a time, and you can publish up to **10 localized entry versions** across **10 environments** at a time (adjustable based on your plan).

### Which localized version gets published when publishing in multiple languages?
When you publish in multiple languages, the latest version of the localized entry will be published.