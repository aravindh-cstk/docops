---
title: "Taxonomy Term Deletion Removes Term from All Entries Silently - No Webhook or Audit Event"
description: "Taxonomy Term Deletion Removes Term from All Entries Silently - No Webhook or Audit Event"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/40-taxonomy-term-deletion-removes-term-from-all-entries-silently-no-webhook-or-audi
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cse3050143ec94a62e
---

# Taxonomy Term Deletion Removes Term from All Entries Silently - No Webhook or Audit Event

When a taxonomy term is deleted from Contentstack, it is automatically removed from all entries that had that term assigned. No webhook event is triggered for those entries, and no audit log record captures the previous term associations. It is impossible to identify which entries were affected.

**Root Cause**

This is expected platform behavior. Taxonomy term deletion cascades to remove the term from all entry associations immediately. Contentstack does not emit per-entry webhooks or audit events for the cascade removal - only the taxonomy deletion event itself may be logged. This is a known limitation of the taxonomy deletion lifecycle.

**Resolution**

This is a documented platform limitation. To mitigate the impact:

1.  Before deleting a taxonomy term, use the CMA to identify all entries currently associated with that term: GET /v3/content\_types/{uid}/entries?query={“taxonomies.term\_uid”:“{term\_uid}”} - run this query for each content type to build a complete list.
2.  Save the list of affected entries before deletion so you know which entries need review after the term is removed.
3.  Consider using the Automate Hub to set up a pre-deletion workflow that captures term associations before allowing deletion.
4.  Contact Contentstack Support to submit an enhancement request for webhook events on taxonomy term cascade removals.

After documenting affected entries before deletion, confirm the taxonomy term is removed from all expected entries via CDA query and that no unintended entries were affected.
