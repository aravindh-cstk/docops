---
title: "Limitations of Contentstack DataSync"
description: "About Limitations of Contentstack DataSync"
url: /headless-cms/limitations-of-contentstack-datasync
---

# Limitations of Contentstack DataSync

## Limitations of Contentstack DataSync

-   **Stack version**: Only **V3** stacks are supported.
-   **Scalability**: You will have to create webhooks every time you add a new database, when you already have one instance of database running.
-   **Sync Manager hooks/plug-ins**: Only publish, unpublish, and delete operations on data will be synced. Drafts in progress will not be synced.
-   **Security**: Data and sync tokens are stored in the Filesystem and are in a plain-text format.
-   **Content type file size**: The content type file size should be **less than 10 MB** to ensure that the performance of DataSync is not affected. As the data is synced onto the client's servers, we store data on the system's filesystem by default. Therefore, the recommended file size is below 10 MB. If the synced data is more than 10 MB, you can choose MongoDB or AWS s3 to store the data.
