---
title: "Resolving Zip Upload Failures for Specific Project-Level Admins"
description: "Resolving Zip Upload Failures for Specific Project-Level Admins"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/03-builds-deployments/03-resolving-zip-upload-failures-for-specific-project-level-admins
doc_type: faq
_cms_section_uid: cs336b99cbc84d9242
_cms_faq_uid: csd48e3f00afa7bd77
---

# Resolving Zip Upload Failures for Specific Project-Level Admins

A specific user is unable to upload new zip files or create a new deployment in a Launch project, despite holding Admin access at the project level. Other users on the same project can upload without issue. The failure persists across browsers, in incognito mode, and even when re-uploading previously successful packages.

**Root Cause**

This was a platform bug in the new-deployment creation flow. The Project UID was not being passed correctly during the upload process, causing the system to validate permissions at the organization level instead of the project level. Users who were project-level Admins but only “Member” status at the organization level were incorrectly denied.

**Resolution**

1.  Confirm the affected user’s exact role at both the organization level and the specific Launch project level to rule out an actual permissions gap.
2.  If the user holds project-level Admin access but the upload still fails across browsers and incognito mode, report the issue to Contentstack Support with the Project UID, user email, and a description of the failure.
3.  Contentstack Engineering applies a fix ensuring the Project UID is correctly passed through the upload flow so that project-level Admin permissions are validated correctly.
4.  Once the fix is confirmed, have the affected user retry the zip upload and deployment creation to verify it now succeeds.

The issue is resolved when project-level Admins can successfully upload zip files and create deployments regardless of their organization-level role.
