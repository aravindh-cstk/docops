---
title: "[Search Content] - Publish Entries and Assets in Bulk"
description: Publish entries and assets found in search results in bulk.
url: https://www.contentstack.com/docs/headless-cms/publish-entries-and-assets-in-bulk
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Search Content] - Publish Entries and Assets in Bulk

This page explains how to publish entries and assets found in your search results in bulk in Contentstack. It is intended for content managers who manage content at scale and need to publish multiple items across environments and languages, immediately or on a schedule.

## Publish Entries and Assets in Bulk

To publish entries and assets found in your search results in bulk, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](https://www.contentstack.com/docs/developers/set-up-stack/about-stack) and select the “[Entries](https://www.contentstack.com/docs/content-managers/author-content/about-entries)” or “[Assets](https://www.contentstack.com/docs/content-managers/author-content/about-assets)” module.
- Search for the entries and assets you want to publish. You can use [Basic Search](/docs/content-managers/search-content/basic-search), [Advanced Search](/docs/content-managers/search-content/advanced-search), [Filters](/docs/content-managers/search-content/use-filters), and [Views](/docs/content-managers/search-content/about-views) to refine your search results.
- From the search results, select the entries or assets you want to publish. Click the **Publish** button on the floating bar at the top.**Note:** On smaller screens, click the vertical ellipsis to access the Publish option.
- On the **Publish Entries**/**Publish Assets** screen:**Select Environment(s)** to which you want to publish the selected entries.
- **Select Language(s)** for which you want to publish the selected entries.**Note:** While unpublishing multiple localized and unlocalized versions of a single entry, you can select a maximum of **50** **languages** and **50** **environments**.
- Under **Publish**, you can select – **Now** (to publish immediately) or **Later** (to publish at a later date/time that you provide).
- Click **Send With References** to publish the selected entries along with their referenced items, or **Send Without References** to publish only the selected entries.

**Note:** When you publish multiple entries/assets, only the latest version of the entries/assets will be published. Read more about [working with different entry versions](/docs/content-managers/entry-versions/name-entry-versions).

## Limitations for Publishing Entries and Assets in Bulk

The limitations for publishing entries and assets in bulk are as follows:
- You can publish **10** **entries/assets** in **10** **languages** and **10** **environments** at a time.
- The bulk-action date cannot extend beyond **12 months** when scheduling the bulk operation.

## Common questions

### Can I publish entries and assets from search results without opening each item?
Yes. From the search results, select the entries or assets you want to publish and use the **Publish** button on the floating bar.

### What happens if I choose “Send With References”?
**Send With References** publishes the selected entries along with their referenced items.

### Are there limits on how many items I can publish in bulk?
Yes. You can publish **10** **entries/assets** in **10** **languages** and **10** **environments** at a time.

### How far in advance can I schedule a bulk publish operation?
The bulk-action date cannot extend beyond **12 months** when scheduling the bulk operation.