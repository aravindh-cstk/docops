---
title: "Publish Rules Ignored During Bulk Publish with References - Resolved Bug"
description: "Publish Rules Ignored During Bulk Publish with References - Resolved Bug"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/13-publish-rules-ignored-during-bulk-publish-with-references-resolved-bug
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs69099ae8b650e857
---

# Publish Rules Ignored During Bulk Publish with References - Resolved Bug

When a parent entry is published using the Send with References bulk publish option, the publish rules for associated child entries are not enforced. Child entries are published to languages and environments where the publishing user does not have the required permissions.

**Root Cause**

This was a confirmed platform bug where the bulk publish with references operation bypassed workflow publish rule validation for child entries. The publish rules were correctly enforced for direct publishes, but not when referenced entries were published as part of a Send with References bulk action.

**Resolution**

This issue has been resolved by the Contentstack engineering team. Publish rules are now correctly enforced for child entries during bulk publish with references operations. No configuration change is required

1.  If you encounter publish rule bypass behavior during bulk publish with references after this fix, contact Contentstack Support with the affected entry UIDs and publish action details for investigation.
2.  Ensure that publish rules and role permissions are correctly configured in Settings > Workflows for the relevant content types and environments.

After the fix is applied, attempt a bulk publish with references for entries that have restrictive publish rules. If child entries are correctly blocked or routed based on publish rules, the fix is in effect.
