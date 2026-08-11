---
title: "Resolving Node.js Version Reversion When Redeploying With Previous File Upload"
description: "Resolving Node.js Version Reversion When Redeploying With Previous File Upload"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/08-project-account-management/03-resolving-node-js-version-reversion-when-redeploying-with-previous-file-upload
doc_type: faq
_cms_section_uid: csdf5c487bad88febc
_cms_faq_uid: cs72c222e7bf473b8f
---

# Resolving Node.js Version Reversion When Redeploying With Previous File Upload

After upgrading the Node.js version in package.json (e.g., from v18 to v22), new builds correctly use the updated version. However, when using the “Redeploy with previous file upload” option in Launch, the build reverts to the older Node.js version, even though the original file specified the newer version.

**Root Cause**

A bug in Launch’s version detection logic caused the platform to misread the Node.js version when redeploying from a cached file upload. This resulted in the build environment falling back to Node.js v18 regardless of the version specified in package.json.

**Resolution**

1.  Report the issue to Contentstack Support, providing the project UID, the package.json Node.js version specification, and the deployment IDs showing the incorrect version.
2.  The Launch engineering team will identify and apply a fix to the version detection logic.
3.  After the fix is confirmed, trigger a fresh deployment (not a redeploy from previous file upload) to verify that the correct Node.js version is used.
4.  Avoid using the “Redeploy with previous file upload” option until the fix has been confirmed in your environment.

The issue is resolved when both new builds and redeployments from previous file uploads correctly use the Node.js version specified in package.json.
