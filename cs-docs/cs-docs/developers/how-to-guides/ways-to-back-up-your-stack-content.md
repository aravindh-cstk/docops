---
title: "[How-to Guides and Knowledgebase articles] - Ways to Back Up Your Stack Content"
description: Ways to back up Contentstack stack content (entries and assets), including support restores, DataSync, webhooks, and export scripts.
url: https://www.contentstack.com/docs/developers/how-to-guides/ways-to-back-up-your-stack-content
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Ways to Back Up Your Stack Content

This page explains different ways to back up your Contentstack stack content (entries and assets). It is intended for developers and content managers who need backup/restore options or want to implement ongoing backup processes for Contentstack content.

Ways to Back Up Your Stack Content

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn the recommended way to back up and migrate Contentstack content, refer to the [CLI](/docs/developers/cli/migrate-your-content-using-the-cli-migration-command) documentation.

Backing up content means creating and maintaining copies of your stack’s [entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets). Backups help when there is a natural disaster, or you accidentally delete content, or you want to go through some old deleted records.

There are several ways in which you can get your hands on deleted or lost content. Here are some of them:

## Content Restore Through Support Team

Contentstack keeps a backup of your content for 14 days.  If you want to restore the deleted content to anything beyond 14 days then we raise the request with the SRE team which is typically done in 3 to 4 business days. If you delete any content accidentally, our [support team](mailto: support@contentstack.com) can help restore that content, if we have it in our backups. We have outlined a [process of asking for restoring your content](/docs/content-managers/author-content/#backup-and-restore-content) in a separate document, and we highly recommend you to go through it.

Currently, Contentstack follows the following data backup frequency:
- Every six-hour backup with 2 days of retention
- Daily backup with 7 days of retention
- Weekly backup with 30 days of retention
- - ## Back up Content Using Contentstack DataSync Utility
- One of the best ways to ensure that you always have an updated backup of your data is to use our DataSync Utility. It allows you to sync your published data with your local database (filesystem or MongoDB).
- So, every time you [publish](/docs/content-managers/publish-content), delete, or [update an entry](/docs/content-managers/working-with-entries/edit-an-entry) or asset, the corresponding changes are made automatically on your database. Read more about Contentstack [DataSync](/docs/developers/develop-apps-with-datasync/about-contentstack-datasync).
- ## Create Backups in Your Local Storage System
- You can [set up webhooks](/docs/developers/set-up-webhooks/create-a-webhook) that trigger on every create, update, delete or publish event, and write scripts that store this webhook data on your local storage system. This way, you'll always have the most updated backup of your content.
- ## Periodic Back up of Stack Content Using 'Export' Script
- This is another simple way to create back up periodically. Use the Contentstack [Export script](/docs/developers/migrate-content-between-stacks-within-contentstack) to export all the content of your stack in JSON files. You can do this periodically, and replace the earlier back up with the old ones or keep several backups. When required, you can either import content into any [stack](/docs/developers/set-up-stack/about-stack) of your choice or use it in any other way.

## Common questions

**Q: Is this page still maintained?**  
A: **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

**Q: What is the recommended way to back up and migrate Contentstack content?**  
A: To learn the recommended way to back up and migrate Contentstack content, refer to the [CLI](/docs/developers/cli/migrate-your-content-using-the-cli-migration-command) documentation.

**Q: How long does Contentstack keep backups for support-based restores?**  
A: Contentstack keeps a backup of your content for 14 days.

**Q: What are some ways to create your own backups?**  
A: Use Contentstack DataSync Utility, create backups in your local storage system using webhooks, or periodically back up stack content using the 'Export' script.

ways-to-back-up-your-stack-content.md