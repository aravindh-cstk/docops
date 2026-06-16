---
title: "[Synchronize Data With Datasync] - Limitations of Contentstack DataSync"
description: Limitations of Contentstack DataSync.
url: https://www.contentstack.com/docs/developers/develop-apps-with-datasync/limitations-of-contentstack-datasync
product: Contentstack
doc_type: reference
audience:
  - developers
version: v3
last_updated: 2026-03-26
---

# [Synchronize Data With Datasync] - Limitations of Contentstack DataSync

This page lists the limitations of Contentstack DataSync. Developers and teams integrating or operating DataSync should read this to understand supported stack versions, sync behavior, security considerations, and file size constraints before deploying or scaling a DataSync setup.

## Limitations of Contentstack DataSync

- **Stack version**: Only **V3** stacks are supported.
- **Scalability**: You will have to create webhooks every time you add a new database, when you already have one instance of database running.
- **Sync Manager hooks/plug-ins**: Only publish, unpublish, and delete operations on data will be synced. Drafts in progress will not be synced.
- **Security**: Data and sync tokens are stored in the Filesystem and are in a plain-text format.
- **Content type file size**: The content type file size should be **less than 10 MB** to ensure that the performance of DataSync is not affected. As the data is synced onto the client's servers, we store data on the system's filesystem by default. Therefore, the recommended file size is below 10 MB. If the synced data is more than 10 MB, you can choose MongoDB or AWS s3 to store the data.

## Common questions

1. **Which Contentstack stacks are supported by DataSync?**  
   Only **V3** stacks are supported.

2. **Which operations are synced by Sync Manager hooks/plug-ins?**  
   Only publish, unpublish, and delete operations on data will be synced; drafts in progress will not be synced.

3. **Where are DataSync data and sync tokens stored by default, and in what format?**  
   Data and sync tokens are stored in the Filesystem and are in a plain-text format.

4. **What should I do if synced data exceeds 10 MB?**  
   If the synced data is more than 10 MB, you can choose MongoDB or AWS s3 to store the data.