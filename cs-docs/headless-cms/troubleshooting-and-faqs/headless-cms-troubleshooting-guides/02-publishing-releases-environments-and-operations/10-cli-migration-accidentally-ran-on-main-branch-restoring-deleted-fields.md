---
title: "CLI Migration Accidentally Ran on Main Branch - Restoring Deleted Fields"
description: "CLI Migration Accidentally Ran on Main Branch - Restoring Deleted Fields"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/10-cli-migration-accidentally-ran-on-main-branch-restoring-deleted-fields
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csfabfbf722e621d46
---

# CLI Migration Accidentally Ran on Main Branch - Restoring Deleted Fields

A CLI migration intended for a non-main branch using the --branch flag was executed on the main branch due to a misconfiguration. Fields were deleted from content types and content may have been lost.

**Root Cause**

The CLI migration ran on the main branch because the branch specification was not correctly applied or the migration script defaulted to main. Once fields are deleted from a content type, the associated content data is also removed. However, if the content type itself still exists, recreating the deleted fields with the same UIDs can restore access to the original data.

**Resolution**

1.  Identify all deleted fields by reviewing the audit log for the affected content type.
2.  Recreate each deleted field using the CMA or CMS UI, using exactly the same field UIDs as the original fields.
3.  After recreating the fields, verify whether the original content data is restored by fetching affected entries.
4.  To prevent recurrence, test all CLI migrations on a dedicated branch and verify the --branch flag is correctly set before running on any production branch.

After recreating the fields with identical UIDs, fetch the affected entries and confirm the content data is accessible. If the content is restored, the field recreation has succeeded.
