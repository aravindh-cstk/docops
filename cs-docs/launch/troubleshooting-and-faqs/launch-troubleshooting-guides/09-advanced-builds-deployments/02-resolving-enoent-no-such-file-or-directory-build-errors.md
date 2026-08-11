---
title: "Resolving ENOENT: No Such File or Directory Build Errors"
description: "Resolving ENOENT: No Such File or Directory Build Errors"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/09-advanced-builds-deployments/02-resolving-enoent-no-such-file-or-directory-build-errors
doc_type: faq
_cms_section_uid: csd47552ea36a54ebe
_cms_faq_uid: csa6f02a22ec090a9b
---

# Resolving ENOENT: No Such File or Directory Build Errors

A build or runtime process in Launch fails with an ENOENT: no such file or directory error. This typically appears in deployment logs when the application attempts to write cache files or temporary data to the file system.

**Root Cause**

The Launch build and runtime environment uses a read-only file system. Applications that attempt to write to directories outside of designated writable locations (such as /tmp) will encounter ENOENT errors. Next.js applications are a common source of this issue when default cache path configurations point to non-writable directories.

**Resolution**

1.  Identify the directory path referenced in the ENOENT error from the deployment or runtime log.
2.  Update the application configuration to redirect file writes to the /tmp directory, which is the only writable location available in the Launch environment.
3.  For Next.js applications, set the distDir or cacheHandler configuration to use /tmp/cache or a subdirectory within /tmp.
4.  Redeploy the application and confirm in the deployment logs that file write operations succeed without ENOENT errors.

The issue is resolved when the deployment and runtime logs are free of ENOENT errors and the application functions correctly in the Launch environment.
