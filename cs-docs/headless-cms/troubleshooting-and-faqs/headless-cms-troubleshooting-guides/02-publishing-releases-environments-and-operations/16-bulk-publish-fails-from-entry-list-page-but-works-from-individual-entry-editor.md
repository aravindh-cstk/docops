---
title: "Bulk Publish Fails from Entry List Page but Works from Individual Entry Editor"
description: "Bulk Publish Fails from Entry List Page but Works from Individual Entry Editor"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/16-bulk-publish-fails-from-entry-list-page-but-works-from-individual-entry-editor
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs9add67e3626700b1
---

# Bulk Publish Fails from Entry List Page but Works from Individual Entry Editor

Attempting to bulk publish entries from the Entry List page fails, while publishing the same entries individually from the entry editor succeeds. The issue occurs primarily on non-main branches after downporting content from the main branch.

**Root Cause**

This is a platform-level bug in the descendants validation logic for bulk publish operations in non-main branches. The bulk publish path applies a stricter descendant reference check than the individual entry publish path, causing valid entries to fail bulk publication if the branch context is not correctly resolved.

**Resolution**

1.  As an immediate workaround, publish affected entries individually from the entry editor.
2.  Contact Contentstack Support with the affected branch name, stack API key, and entry UIDs. Engineering will investigate the branch-context issue.
3.  After the platform fix is applied, retry the bulk publish from the Entry List page and confirm entries publish successfully.

After the engineering fix, verify bulk publish from the Entry List page completes without errors for entries on non-main branches.
